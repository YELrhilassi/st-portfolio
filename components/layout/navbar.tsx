'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const items = [
  { name: 'About', path: '/about' },
  { name: 'Other Artwork', path: '/artworks' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center w-full h-[10vh] mt-8">
      <div className=" w-full mx-auto px-[4vw] py-[2vh] border-b-3 border-t-2 border-primary">
        <nav className="flex items-center justify-center gap-[5vw]">
          <div className="flex items-center space-x-8">
            <NavItem item={items[0]} isActive={pathname === items[0].path} />
          </div>

          <Link href="/" className="py-4 md:py-0 order-first md:order-none">
            <h1 className="font-instrument-serif text-[4vw] leading-[3vw] tracking-wide">SOPHIA TAM</h1>
          </Link>

          <div className="flex items-center space-x-8">
            <NavItem item={items[1]} isActive={pathname === items[1].path} />
          </div>
        </nav>
      </div>
    </header>
  );
}



function NavItem({ item, isActive = false }: { item: { name: string; path: string }; isActive: boolean }) {
  return (
    <Link
      href={item.path}
      className={`
        cursor-pointer px-3 pt-1 leading-snug 
        ${isActive ? "bg-primary text-white" : "text-gray-500 hover:bg-primary hover:text-white"}
      `}
    >
      <span className="font-varta text-[clamp(1.2rem,1.2vw,1.2rem)] font-semibold">
        {item.name}
      </span>
    </Link>
  );
}

