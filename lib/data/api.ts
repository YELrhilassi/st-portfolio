import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs/promises';
import { buildGithubFolderUrl, buildGithubImageUrl, fetchFileContent, GitApiError } from '../utils';
import { TGithubFile, TGithubFolder } from '@/types';

const POSTS_ROOT_DIR = path.join(process.cwd(), '..', 'st-posts');

// Helper to build local image URLs
function buildLocalImageUrl(imagePath: string): string {
  return `/st-posts/${imagePath}`;
}

// Fetches folder contents
export async function fetchFromGithub(folder: TGithubFolder) {
  if (process.env.NODE_ENV === 'development') {
    const folderPath = path.join(POSTS_ROOT_DIR, 'content', folder);
    const dirents = await fs.readdir(folderPath, { withFileTypes: true });
    const files = dirents
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.yaml'))
      .map((dirent) => ({
        name: dirent.name,
        path: `${folder}/${dirent.name}`,
        download_url: path.join(folderPath, dirent.name), // Use local path as download_url in dev
        // Add other properties that TGithubFile might expect, even if dummy
        sha: 'development-sha',
        size: 0,
        url: 'development-url',
        git_url: 'development-git-url',
        html_url: 'development-html-url',
        type: 'file',
        _links: { git: '', html: '', self: '' },
      }));
    return files;
  } else {
    try {
      const res = await fetch(buildGithubFolderUrl(`content/${folder}`));
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
}

export async function parseFiles<T>(files: TGithubFile[]): Promise<T[]> {
  const yamlFiles = files.filter((file) => file.name.endsWith('.yaml'));

  return Promise.all(
    yamlFiles.map(async (file) => {
      let content: string;
      if (process.env.NODE_ENV === 'development') {
        content = await fs.readFile(file.download_url, 'utf-8');
      } else {
        content = await fetchFileContent(file.download_url, file.name);
      }
      const parsed = yaml.load(content) as T & { image?: string; slug: string };
      return {
        ...parsed,
        slug: parsed.slug,
        image: parsed.image
          ? process.env.NODE_ENV === 'development'
            ? buildLocalImageUrl(`images/${parsed.image}`)
            : buildGithubImageUrl(parsed.image)
          : undefined,
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
      let content: string;
      if (process.env.NODE_ENV === 'development') {
        content = await fs.readFile(file.download_url, 'utf-8');
      } else {
        content = await fetchFileContent(file.download_url, file.name);
      }
      const parsed = yaml.load(content) as T & { image?: string; slug: string };

      return {
        ...parsed,
        slug: parsed.slug,
        image: parsed.image
          ? process.env.NODE_ENV === 'development'
            ? buildLocalImageUrl(`images/${parsed.image}`)
            : buildGithubImageUrl(parsed.image)
          : undefined,
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
  if (process.env.NODE_ENV === 'development') {
    const filePath = path.join(POSTS_ROOT_DIR, 'content', folder, `${slug}.yaml`);
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const parsed = yaml.load(content) as T & { image?: string; slug: string };
      return {
        ...parsed,
        slug: parsed.slug,
        image: parsed.image
          ? process.env.NODE_ENV === 'development'
            ? buildLocalImageUrl(`images/${parsed.image}`)
            : buildGithubImageUrl(parsed.image)
          : undefined,
      };
    } catch (error) {
      console.error(`Error reading local file ${filePath}:`, error);
      return null;
    }
  } else {
    const files = await fetchFromGithub(folder);
    const parsedFiles = await parseFiles<T>(files);
    const matchedFile = parsedFiles.find((file) => (file as any).slug === slug);

    return matchedFile || null;
  }
}
