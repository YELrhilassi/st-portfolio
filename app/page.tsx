import ProjectCarousel from '@/components/projects/carousel';
import { fallbackProjects as projects } from '@/lib/data/mock-data';

export const revalidate = 3600;

export default async function Home() {
  return <div className="w-full mx-auto pt-12">
    <ProjectCarousel {...{ projects }} />
  </div>;
}
