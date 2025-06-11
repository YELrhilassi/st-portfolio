'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const items = [
  { name: 'About', path: '/about' },
  { name: 'Artwork', path: '/artwork' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center w-full h-[18vh]">
      <div className="container mx-auto px-[4vw] py-[2vh] border-b-2 border-t border-primary">
        <nav className="flex items-center justify-center gap-[5vw]">
          <div className="flex items-center space-x-8">
            <NavItem item={items[0]} isActive={pathname === items[0].path} />
            <NavItem item={items[1]} isActive={pathname === items[1].path} />
          </div>

          <Link href="/" className="py-4 md:py-0 order-first md:order-none">
            <h1 className="font-instrument-serif text-4xl md:text-5xl tracking-wide">SOPHIA TAM</h1>
          </Link>

          <div className="flex items-center space-x-8">
            <NavItem item={items[2]} isActive={pathname === items[2].path} />
            <NavItem item={items[3]} isActive={pathname === items[3].path} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ item, isActive }: { item: { name: string; path: string }; isActive: boolean }) {
  return (
    <Link
      href={item.path}
      className={cn(
        'relative font-varta text-lg transition-colors hover:text-neutral-800',
        isActive ? 'text-neutral-900' : 'text-neutral-500',
      )}
    >
      {item.name}
      {isActive && (
        <motion.div
          layoutId="navbar-underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
}
