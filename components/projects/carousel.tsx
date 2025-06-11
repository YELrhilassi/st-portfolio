'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/types/projects';

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // useEffect(() => {
  //   setDirection(1);
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  // }, [currentIndex, projects.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  if (projects.length === 0) {
    return (
      <div className="h-[calc(100vh-150px)] flex items-center justify-center">
        Loading projects...
      </div>
    );
  }
  console.log(projects);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative h-[calc(100vh-150px)]  border border-red-400">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
          >
            {projects.map((project) => (
              <div key={project.id}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
                <div className="flex gap-6">
                  <div className="font-instrument-serif text-5xl md:text-7xl text-neutral-800">
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
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className=" flex justify-between items-center w-full bottom-0 ">
        <Button
          onClick={prevSlide}
          size="icon"
          variant="outline"
          className="rounded-full bg-white/80 hover:bg-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          onClick={nextSlide}
          size="icon"
          variant="outline"
          className="rounded-full bg-white/80 hover:bg-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
