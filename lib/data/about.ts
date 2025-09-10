import z from "zod";
import { getFileBySlug } from "./api";


export const AboutSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  h1: z.string(),
  description: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  formFooter: z.string(),
});

export type TAbout = z.infer<typeof AboutSchema>;

export async function fetchAboutContent() {
  try {
    const data = await getFileBySlug('about', 'about');
    if (!data) return null;
    const parsed = AboutSchema.safeParse(data);

    if (!parsed.success) return null;

    return parsed.data;
  } catch (err) {
    return null;
  }
}

