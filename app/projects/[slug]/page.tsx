"use client"
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { Masonry } from "masonic";
import { useWindowSize } from "@react-hook/window-size";
import { useRef, useEffect, useState } from "react";

const project = {
  id: 1,
  slug: "thomas-pink-brand-identity",
  title: "Thomas Pink",
  subtitle: "Brand Identity Redesign",
  description:
    "A comprehensive brand identity redesign for Thomas Pink, focusing on modern minimalism while honoring the brand's heritage in luxury menswear.",
  category: "Case study",
  tags: ["Branding", "Fashion", "Luxury", "Print Design"],
  featured: true,
  publishedAt: "2024-01-15",

  // hero image (uploaded file turned hero)
  heroImage: "/assets/projects/thomas-pink/Sub-tabs_Thomas-Pink.png",
  heroImageAlt: "Thomas Pink brand identity hero presentation",

  // supporting images
  images: [
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
      alt: "Thomas Pink storefront",
      width: 800,
      height: 1000
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      alt: "Business cards mockup",
      width: 600,
      height: 800
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop",
      alt: "Brand packaging design",
      width: 900,
      height: 600
    },
    {
      src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&h=900&fit=crop",
      alt: "Typography samples",
      width: 700,
      height: 900
    },
    {
      src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      alt: "Color palette",
      width: 600,
      height: 400
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop",
      alt: "Brand applications",
      width: 800,
      height: 1200
    },
    {
      src: "https://images.unsplash.com/photo-1560472355-536de3962603?w=900&h=700&fit=crop",
      alt: "Print materials",
      width: 900,
      height: 700
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop",
      alt: "Brand applications",
      width: 800,
      height: 1200
    },


  ],

  sections: [
    {
      id: 1,
      heading: "Project Overview",
      body: [
        "Thomas Pink approached us with a clear vision: to modernize their brand identity while maintaining the sophisticated elegance that has defined them for decades.",
        "The challenge was to create a system that would resonate with both their loyal customer base and attract a new generation of discerning gentlemen.",
        "Our approach focused on stripping away unnecessary elements while amplifying the core brand values of quality, craftsmanship, and timeless style. The result is a refined visual language that speaks to the brand's British heritage while embracing contemporary design principles."
      ]
    },
    {
      id: 2,
      heading: "Design Philosophy",
      body: [
        "The new identity centers around the concept of 'refined simplicity' — a design philosophy that emphasizes clean lines, thoughtful typography, and purposeful use of space.",
        "We developed a comprehensive color palette that moves beyond the traditional pink, incorporating sophisticated neutrals and accent colors that reflect the modern gentleman's wardrobe.",
        "The typography system balances classic serif forms with contemporary sans-serif options, creating hierarchy and personality across all touchpoints."
      ]
    },
    {
      id: 3,
      heading: "Implementation & Results",
      body: [
        "The rollout included everything from business cards and packaging to digital interfaces and retail environments. Each application was carefully considered to ensure consistency while allowing for medium-specific optimizations.",
        "The response from both internal stakeholders and customers has been overwhelmingly positive. Sales have increased by 23% in the first quarter following the rebrand, and customer surveys indicate a significant improvement in brand perception among the target demographic.",
        "Most importantly, the new identity has given Thomas Pink the tools to evolve and grow while staying true to their core values. It's a brand system built for longevity, capable of adapting to future challenges while maintaining its distinctive character."
      ]
    }
  ]
}

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

export default function ProjectPage() {
  const containerRef = useRef<any>(null);
  const [windowWidth, windowHeight] = useWindowSize();
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
              <h3 className="text-lg font-semibold leading-0 font-varta">{section.heading}</h3>
              <Separator className="flex-1 max-w-1/2 border-b border-primary/50" />
            </div>
            <div className="pl-12 pr-8">
              {Array.isArray(section.body) ? (
                section.body.map((para, idx) => (
                  <p key={idx} className="mb-3 text-lg">
                    {para}
                  </p>
                ))
              ) : (
                <p className="">{section.body}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE (masonic grid) */}
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
    </div>
  );
}
