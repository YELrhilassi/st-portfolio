"use client";

import { usePathname } from "next/navigation";
import { cn } from "../utils";
import Link from "next/link";

export default function LinkPath({ children,href }: { children: React.ReactNode,href:string }) {
  const path = usePathname().slice(1);
  console.log(path,href)
  return (
    <Link href={href} className="w-fit">
    <div
      className={cn(
        "flex items-center w-full py-2 px-6 h-9 ",
        path === href
        ? "bg-[linear-gradient(to_right,rgba(255,252,83,0.8),rgba(255,252,83,0.5)_4%,rgba(255,252,0,0.3))]"
        : "hover:bg-[linear-gradient(to_right,rgba(255,252,83,0.8),rgba(255,252,83,0.5)_4%,rgba(255,252,0,0.3))]"
      )}
      style={{
        clipPath:
          " polygon(58% 2%, 45% 3%, 29% 3%, 13% 7%, 3% 17%, 0 52%, 0 77%, 8% 91%, 18% 99%, 31% 98%, 48% 98%, 60% 98%, 74% 99%, 85% 100%, 94% 95%, 98% 86%, 99% 76%, 100% 58%, 98% 38%, 98% 25%, 99% 13%, 91% 6%, 82% 2%, 69% 3%)",
      }}
      >
      {children}
    </div>
      </Link>
  );
}
