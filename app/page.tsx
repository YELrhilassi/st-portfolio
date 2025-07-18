import ProjectCarousel from '@/components/projects/carousel';
import { fallbackProjects as projects } from '@/lib/data/mock-data';

export const revalidate = 3600;

export default async function Home() {
  // const projects= await fetchProjects()
  return <div className="w-full mx-auto ">
    <ProjectCarousel {...{ projects }} />
  </div>;
}
