import ProjectCarousel from '@/components/projects/carousel';
import { fetchProjects } from '@/lib/data';
import { fallbackProjects as projects } from '@/lib/data/mock-data';

export const revalidate = 3600;

export default async function Home() {
  // const projects= await fetchProjects()
  return <div className="container mx-auto min-h-screen ">
    <ProjectCarousel {...{ projects }} />
  </div>;
}
