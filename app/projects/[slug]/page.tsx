import { notFound } from 'next/navigation';
import { fetchProjectBySlug } from '@/lib/data/projects';
import { parseContentLinks } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import ProjectGallery from '@/components/projects/ProjectGallery';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await fetchProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col md:flex-row">
      {/* LEFT SIDE (text content) */}
      <div className="w-full md:w-3/5 p-6 pt-12 flex flex-col gap-8 overflow-y-auto border-r border-primary">
        <div>
          <h1 className="text-[5vw] leading-[6vw] font-instrument-serif uppercase w-1 pb-24">{project.title}</h1>
          <div className="space-y-4">
            <Separator orientation="horizontal" className="border-t border-primary/50 w-1/2" />
            <div className="grid grid-cols-[max-content_1px_max-content] gap-4 uppercase font-bold">
              <span className="">
                {project.category}
              </span>
              <Separator orientation="vertical" className="border-r border-primary/50 " />
              <span className="">{project.subtitle}</span>
            </div>
          </div>
          <p className="mb-24 mt-10 text-lg">{project.description}</p>
        </div>

        {project.sections.map((section) => (
          <div key={section.id} className="mb-24">
            <div className="flex items-baseline gap-2 uppercase mb-8">
              <h3 className="text-lg font-semibold leading-0 font-varta">{section.id}</h3>
              <Separator className="flex-1 max-w-1/2 border-b border-primary/50" />
            </div>
            <div className="pl-12 pr-8">
              <div dangerouslySetInnerHTML={{ __html: parseContentLinks(section.text) }} />
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE (masonic grid) */}
      <ProjectGallery project={project} />
    </div>
  );
}