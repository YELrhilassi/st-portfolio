import yaml from 'js-yaml';
import { buildGithubFolderUrl, buildGithubImageUrl, fetchFileContent, GitApiError } from '../utils';
import { TGithubFile, TGithubFolder } from '@/types';


// Fetches folder contents from github

export async function fetchFromGithub(folder: TGithubFolder) {
  try {
    const res = await fetch(buildGithubFolderUrl(folder));
    if (!res.ok) {
      throw new GitApiError(
        `Failed to fetch from Github:${res.statusText}`,
        res.status,
        res.statusText
      )
    }
    return await res.json();

  } catch (err) {
    if (err instanceof GitApiError) throw err;
  }
}


export async function parseFiles<T>(files: TGithubFile[]): Promise<T[]> {
  const yamlFiles = files.filter((file) => file.name.endsWith('.yaml'));

  return Promise.all(
    yamlFiles.map(async (file) => {
      const content = await fetchFileContent(file.download_url, file.name);
      const parsed = yaml.load(content) as T & { image?: string; slug: string };
      return {
        ...parsed,
        slug: parsed.slug,
        image: parsed.image ? buildGithubImageUrl(parsed.image) : undefined,
      };
    }),
  );
}

export async function parseFilesPaginated<T>(
  files: TGithubFile[],
  limit: number,
  cursorSha?: string,
): Promise<{
  items: (T & { slug: string })[];
  nextCursor: string | null;
  hasMore: boolean;
}> {
  const sortedFiles = files.sort((a, b) => a.sha.localeCompare(b.sha));
  const startIndex = cursorSha ? sortedFiles.findIndex((file) => file.sha === cursorSha) + 2 : 0;
  const pageFiles = sortedFiles.slice(startIndex, startIndex + limit);
  const nextCursor = sortedFiles[startIndex + limit] ? sortedFiles[startIndex + limit].sha : null;

  const items = await Promise.all(
    pageFiles.map(async (file) => {
      const content = await fetchFileContent(file.download_url, file.name);
      const parsed = yaml.load(content) as T & { image?: string; slug: string };

      return {
        ...parsed,
        slug: parsed.slug,
        image: parsed.image ? buildGithubImageUrl(parsed.image) : undefined,
      };
    }),
  );

  return {
    items,
    nextCursor,
    hasMore: !!nextCursor,
  };
}

export async function getFileBySlug<T>(folder: TGithubFolder, slug: string): Promise<T | null> {
  const files = await fetchFromGithub(folder);
  const parsedFiles = await parseFiles<T>(files);
  const matchedFile = parsedFiles.find((file) => (file as any).slug === slug);

  return matchedFile || null;
}
