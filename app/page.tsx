import ProjectCarousel from '@/components/projects/carousel';
import { fetchProjects } from '@/lib/data';
import { fallbackProjects } from '@/lib/data/mock-data';

export const revalidate = 3600;

export default async function Home() {
  // const projects= await fetchProjects()
  const projects=fallbackProjects
  return <div className="container mx-auto min-h-screen ">
    <ProjectCarousel {...{projects}}/>
  </div>;
}
