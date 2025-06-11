import { Project } from '@/types';
import { fetchFromGithub, parseFiles } from './api';

export async function fetchProjects() {
  const files = await fetchFromGithub('projects');
  return await parseFiles<Project>(files)
}
