"use client"
import Image from "next/image";
import { Masonry } from "masonic";
import { useWindowSize } from "@react-hook/window-size";
import { useRef, useEffect, useState } from "react";
import { TProject } from "@/lib/data/projects";

// Masonry card component
const MasonryCard = ({ data, width }: any) => {
  const aspectRatio = data.height / data.width;
  const height = width * aspectRatio;

  return (
    <div className="mb-4">
      <Image
        src={data.src}
        alt={data.alt}
        width={data.width}
        height={data.height}
        className="w-full h-auto object-cover"
        loading="lazy"
        style={{
          height: `${height}px`,
          width: '100%'
        }}
      />
    </div>
  );
};

export default function ProjectGallery({ project }: { project: TProject }) {
  const containerRef = useRef<any>(null);
  const [windowWidth] = useWindowSize();
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate container width on resize and mount
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => window.removeEventListener('resize', updateContainerWidth);
  }, [windowWidth]);

  return (
    <div
      ref={containerRef}
      className="w-full md:w-3/4 pl-12 pt-12 overflow-y-auto"
    >
      {containerWidth > 0 && (
        <Masonry
          items={project.images}
          render={MasonryCard}
          columnGutter={16}
          columnWidth={300}
          maxColumnCount={2}
          key={containerWidth}
        />)}
    </div>
  )
}
