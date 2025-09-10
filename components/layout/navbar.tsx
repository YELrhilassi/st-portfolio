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
  const [isHovered, setIsHovered] = useState(() => isActive);
  const isAnimate = isActive || isHovered
  const chars = item.name.split('');

    const hoverTimeoutRef = useRef<any>(null);

  
  const DEBOUNCE_DELAY = 150; // Adjust this value as needed (e.g., 100ms, 200ms)


  const handleMouseEnter = () => {
    // Clear any existing timeout to prevent multiple or conflicting triggers
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Set a new timeout to set isMouseHovered to true after the debounce delay
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, DEBOUNCE_DELAY);
  };

   const handleMouseLeave = () => {
    // Always clear the pending mouse enter timeout immediately when leaving
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Set isMouseHovered to false immediately on mouse leave
    setIsHovered(false);
  };

  // Cleanup the timeout on component unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (

    <Link
      href={item.path}
      className="relative block overflow-hidden px-2 cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <motion.div
        className="absolute h-full left-0 -top-1 bg-secondary-foreground z-0"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isAnimate ? '100%' : 0, opacity: isAnimate ? 1 : 0 }}
        transition={{ duration: isActive ? 0 : 0.3, ease: "easeIn" }}
      />
      <div className="relative z-10 flex whitespace-nowrap">

        {chars.map((char: any, index: any) => (
          <motion.span
            key={index}
            className="relative font-varta text-[clamp(1rem,1vw,1.5rem)] font-medium"
            initial={{ color: '#737373' }}
            animate={{ color: isAnimate ? '#FFFFFF' : '#737373' }}
            transition={{
              delay: isActive ? 0 : (isAnimate ? index * 0.07 : (chars.length - 1 - index) * 0.07),
              duration: isActive ? 0 : 0.1,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </Link >
  );
};


