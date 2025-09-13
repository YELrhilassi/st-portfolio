"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { useLayoutEffect, useRef, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
    alt: "Thomas Pink storefront",
    width: 800,
    height: 1000,
    tags: ["Digital", "Concept Art"],
    date: "2025-09-12"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    alt: "Business cards mockup",
    width: 600,
    height: 800,
    tags: ["Digital", "Concept Art"],
    date: "2025-09-12"
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop",
    alt: "Brand packaging design",
    width: 900,
    height: 600,
    tags: ["Paper Drawing", "Sketch"],
    date: "2025-08-01",
  },
  {
    src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&h=900&fit=crop",
    alt: "Typography samples",
    width: 700,
    height: 900,
    tags: ["Paper Drawing", "Sketch"],
    date: "2025-08-01",
  },
  {
    src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    alt: "Color palette",
    width: 600,
    height: 400,
    tags: ["Paper Drawing", "Sketch"],
    date: "2025-08-01",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop",
    alt: "Brand applications",
    width: 800,
    height: 1200,
    tags: ["Paper Drawing", "Sketch"],
    date: "2025-08-01",
  },
  {
    src: "https://images.unsplash.com/photo-1560472355-536de3962603?w=900&h=700&fit=crop",
    alt: "Print materials",
    width: 900,
    height: 700,
    tags: ["Paper Drawing", "Sketch"],
    date: "2025-08-01",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop",
    alt: "Brand applications duplicate",
    width: 800,
    height: 1200,
    tags: ["Paper Drawing", "Sketch"],
    date: "2025-08-01",
  },
  {
    src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    alt: "Color palette",
    width: 600,
    height: 400,
    tags: ["Paper Drawing", "Sketch"],
    date: "2025-08-01",
  },

];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(
    null
  );
  const imgRef = useRef<any>(null);
  const [imgWidth, setImgWidth] = useState(0);
  useLayoutEffect(() => {
    const imgContainer = imgRef.current;
    if (!imgContainer) return;

    const img = imgContainer.querySelector('img');
    if (!img) return;

    const updateWidth = () => setImgWidth(img.offsetWidth);

    // If image is already loaded, update width immediately
    if (img.complete) {
      updateWidth();
    } else {
      img.addEventListener('load', updateWidth);
    }

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
      img.removeEventListener('load', updateWidth);
    };
  }, [selectedImage]);
  return (
    <main className=" mx-auto px-4 py-8">
      <ul className="columns-2 md:columns-3 gap-4 [column-gap:1rem]">
        {images.map((img, i) => (
          <li
            key={i}
            className="block relative mb-4 break-inside-avoid group cursor-pointer overflow-clip"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Overlay */}
            <div className="absolute w-full h-full opacity-0 bottom-0  group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex  items-end h-full gap-2 w-full p-3 bg-gradient-to-t from-black/80 via-black/10 to-transparent">
                <div className="flex gap-2">
                  {img.tags.map((tag, t) => (
                    <Badge key={t} variant="outline" className="flex items-start justify-baseline px-4 pt-1 rounded-full text-white text-base font-bold" >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed flex items-center justify-center inset-0 bg-black/85 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl cursor-pointer" 
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <figure className="">
            <div ref={imgRef}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="h-[80vh] w-auto object-contain block"
              />
            </div>
            <figcaption
              className="px-4 py-3"
              style={{ width: imgWidth }}
            >
              <p className="text-white font-bold leading-[1.3rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
            </figcaption>
          </figure>
        </div>)}
    </main>);
}
