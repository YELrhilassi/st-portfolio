import { fetchProjects } from "@/lib/data/fetchProjects";

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Projects(params:any){

  return <div>projects</div>
}
