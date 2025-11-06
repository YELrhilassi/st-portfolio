import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const CONFIG = {
  OWNER: 'yelrhilassi',
  REPO: 'st-posts',
  BRANCH: 'main',
  IMAGES_PATH: 'images'
}

export function buildGithubFolderUrl(folder: string): string {
  return `https://api.github.com/repos/${CONFIG.OWNER}/${CONFIG.REPO}/contents/${folder}?ref=${CONFIG.BRANCH}`;
}

export function buildGithubImageUrl(relativePath: string): string {
  return `https://raw.githubusercontent.com/${CONFIG.OWNER}/${CONFIG.REPO}/${CONFIG.BRANCH}/${CONFIG.IMAGES_PATH}/${relativePath}`;
}

export async function fetchFileContent(url: string, fileName: string): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
  throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
  }

  return response.text();
}

export function parseContentLinks(content: string): string {
  return content.replace(/\(@(\w+):([\w-]+)\)/g, '/$1/$2');
}

export class GitApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string,
  ) {
    super(message);
    this.name = "GitApiError";
  }
}

export class FileParseError extends Error {
  constructor(
    message: string,
    public fileName?: string,
    public originalError?: Error
  ) {
    super(message);
    this.name = 'FileParseError'
  }
}
