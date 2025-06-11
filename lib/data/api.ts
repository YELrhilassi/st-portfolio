import yaml from 'js-yaml';
import { fetchFileContent } from '../utils';
import { TGithubFile, TGithubFolder } from '@/types';

const OWNER = 'yelrhilassi';
const REPO = 'st-posts';
const BRANCH = 'main';

const getGithubFolderUrl = (folder: string): string =>
  `https://api.github.com/repos/${OWNER}/${REPO}/contents/${folder}?ref=${BRANCH}`;

function getGithubImageUrl(relativePath: string): string {
  return `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/images/${relativePath}`;
}
export async function fetchFromGithub(folder: TGithubFolder) {
  const res = await fetch(getGithubFolderUrl(folder));
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }
  return await res.json();
}

export async function parseFiles<T>(files: TGithubFile[]): Promise<T[]> {
  const yamlFiles = files.filter((file) => file.name.endsWith('.yaml'));

  return Promise.all(
    yamlFiles.map(async (file) => {
      const content = await fetchFileContent(file.download_url, file.name);
      const parsed = yaml.load(content) as T & { image?: string; slug: string };
      console.log(parsed);
      return {
        ...parsed,
        slug: parsed.slug,
        image: parsed.image ? getGithubImageUrl(parsed.image) : undefined,
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
  const startIndex = cursorSha ? sortedFiles.findIndex((file) => file.sha === cursorSha) + 1 : 0;
  const pageFiles = sortedFiles.slice(startIndex, startIndex + limit);
  const nextCursor = sortedFiles[startIndex + limit] ? sortedFiles[startIndex + limit].sha : null;

  const items = await Promise.all(
    pageFiles.map(async (file) => {
      const content = await fetchFileContent(file.download_url, file.name);
      const parsed = yaml.load(content) as T & { image?: string; slug: string };

      console.log(parsed);
      return {
        ...parsed,
        slug: parsed.slug,
        image: parsed.image ? getGithubImageUrl(parsed.image) : undefined,
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
