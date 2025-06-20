"use client"
import Image from 'next/image';

import { Project } from '@/types/projects';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel } from '../ui/carousel';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from "next/link"
import { Button } from '../ui/button';

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [selectedId, setSelectedId] = useState(projects[0].id);

  if (projects.length === 0) {
    return (
      <div className="h-[calc(100vh-150px)] flex items-center justify-center">
        Loading projects...
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full">
      <CarouselContent className="gap-0">
        {projects.map(project => (
          <CarouselItem
            key={project.id}
            onMouseEnter={() => setSelectedId(project.id)}
            className="relative flex flex-col md:basis-1/3 lg:basis-1/4 h-[calc(100vh-10vh)] pl-2 ">
            <div className='relative group flex-1 hover:cursor-pointer overflow-hidden'>
              <Link href={`/projects/${project.slug}`} className='h-full block'>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={
                    cn("object-cover transition-transform transition-filter duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      , selectedId === project.id ? "grayscale-0" : "grayscale")}
                />
              </Link>
            </div>
            <div className="flex gap-6 pl-2">
              <div className="font-instrument-serif text-5xl text-primary md:text-7xl">
                {project.id}
              </div>
              <div>
                <h2 className="font-varta text-lg md:text-xl font-semibold mt-2">
                  {project.title}
                </h2>
                <p className="font-varta text-sm md:text-base text-neutral-600">
                  {project.subtitle}
                </p>
              </div>
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNav />
    </Carousel>
  );
}


function CarouselNav() {
  const { scrollNext, scrollPrev, canScrollNext, canScrollPrev } = useCarousel()

  return <div className="relative flex justify-between items-center mt-4">
    <button onClick={scrollPrev} disabled={!canScrollPrev}
      className='cursor-pointer'>
      <ArrowLeft className={cn(!canScrollPrev ? "stroke-gray-200" : "")}
      />
    </button>
    <button onClick={scrollNext} disabled={!canScrollNext}
      className='cursor-pointer'>
      <ArrowRight className={cn(!canScrollNext ? "stroke-gray-200" : "")} />
    </button>

  </div>
}

function ArrowRight({ className }: React.ComponentProps<typeof Button>) {
  return <svg width="43" height="25" viewBox="0 0 43 25" fill="none" className={cn('stroke-primary', className)} >

    <path d="M1.53516 12.5H41.4637M41.4637 12.5L30.7137 23.25M41.4637 12.5L30.7137 1.75" stroke-width="3.07143" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
}
function ArrowLeft({ className }: React.ComponentProps<typeof Button>) {
  return <svg width="43" height="25" viewBox="0 0 43 25" fill="none" className={cn("-scale-100 stroke-primary", className)} >
    <path d="M1.53516 12.5H41.4637M41.4637 12.5L30.7137 23.25M41.4637 12.5L30.7137 1.75" stroke-width="3.07143" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
}
