"use client";

import { usePathname } from "next/navigation";
import { cn } from "../utils";

export default function LinkPath({ children }: { children: React.ReactNode }) {
  const path = usePathname().slice(1);
  return (
    <div
      className={cn(
        "flex items-center pl-10 h-9 w-45 transition-all",
        path === children
          ? "bg-amber-200 mask-[url(/highlighter-mask.svg)]"
          : "hover:bg-amber-200 hover:mask-[url(/highlighter-mask.svg)]"
      )}
    >
      {children}
    </div>
  );
}
