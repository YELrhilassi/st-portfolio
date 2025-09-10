import z from "zod";
import { getFileBySlug } from "./api";

// Schema for individual content sections with optional images
export const ProjectSectionSchema = z.object({
  id: z.number(),
  text: z.string(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
});

// Main project schema
export const ProjectSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  publishedAt: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  sections: z.array(ProjectSectionSchema),
});

export type TProject = z.infer<typeof ProjectSchema>;
export type TProjectSection = z.infer<typeof ProjectSectionSchema>;

// Fetch single project by slug/id
export async function fetchProjectBySlug(slug: string): Promise<TProject | null> {
  try {
    const data = await getFileBySlug('projects', slug);
    if (!data) return null;
    
    const parsed = ProjectSchema.safeParse(data);
    if (!parsed.success) {
      console.error('Project validation failed:', parsed.error);
      return null;
    }
    
    return parsed.data;
  } catch (err) {
    console.error('Error fetching project:', err);
    return null;
  }
}

// Fetch all projects (for potential listing/navigation)
export async function fetchAllProjects(): Promise<TProject[]> {
  try {
    const { fetchFromGithub, parseFiles } = await import('./api');
    const files = await fetchFromGithub('projects');
    const projects = await parseFiles<TProject>(files);
    
    return projects
      .filter(project => ProjectSchema.safeParse(project).success)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
}
