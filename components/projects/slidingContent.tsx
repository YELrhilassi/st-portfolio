'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TProject } from '@/lib/data/projects';

interface ProjectContentProps {
  project: TProject;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const [activeSection, setActiveSection] = useState<number>(project.sections[0]?.id || 0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.id.split('-')[1]);
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -30% 0px',
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sectionsWithImages = project.sections.filter(section => section.image);

  return (
    <div className="flex-1 py-8 lg:py-12">
      {/* Project Header */}
      <header className="mb-12 lg:mb-16">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-wide text-gray-600 mb-2">
            {project.category}
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light mb-4">
            {project.title}
          </h1>
          {project.subtitle && (
            <h2 className="text-xl lg:text-2xl text-gray-700 font-light mb-6">
              {project.subtitle}
            </h2>
          )}
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs uppercase tracking-wide bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Main Content - Split Layout */}
      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column - Text Content */}
          <div className="space-y-16 lg:space-y-24">
            {project.sections.map((section, index) => (
              <div 
                key={section.id}
                id={`section-${section.id}`}
                ref={(el) => {
                  sectionsRef.current[index] = el;
                }}
                className="min-h-[60vh] flex items-center"
              >
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-800 leading-relaxed [&>p]:mb-6 [&>h3]:text-xl [&>h3]:font-medium [&>h3]:mb-4 [&>h3]:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Images */}
          <div className="hidden lg:block relative">
            <div className="sticky top-8 h-[80vh]">
              <div className="relative h-full">
                {sectionsWithImages.map((section, index) => (
                  <div 
                    key={`image-${section.id}`}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      activeSection === section.id 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-95 z-0'
                    }`}
                  >
                    <div className="relative h-full w-full max-w-md mx-auto overflow-hidden bg-gray-50 shadow-2xl rounded-lg">
                      <Image
                        src={section.image!}
                        alt={section.imageAlt || `${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
                
                {/* Fallback image if no section images */}
                {sectionsWithImages.length === 0 && project.image && (
                  <div className="relative h-full w-full max-w-md mx-auto overflow-hidden bg-gray-50 shadow-2xl rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Images - Show between text sections */}
        <div className="lg:hidden space-y-12 mt-12">
          {project.sections
            .filter(section => section.image)
            .map((section, index) => (
              <div key={`mobile-image-${section.id}`} className="relative aspect-[4/3] overflow-hidden bg-gray-50 rounded-lg shadow-lg">
                <Image
                  src={section.image!}
                  alt={section.imageAlt || `${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Project Footer */}
      <footer className="mt-16 lg:mt-24 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm text-gray-600">
              Published {new Date(project.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => window.history.back()}
              className="text-sm uppercase tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Projects
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
