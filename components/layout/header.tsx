"use client";
import Link from "next/link";
import CurrentDate from "../utils/current-date";
import { cn } from "../utils/cn";
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

type THeader = {
  className?: React.ComponentProps<"header">["className"];
};

export default function Header({ className: clx }: THeader) {
  const path = usePathname().slice(1);
  return (
    <header
      className={cn("font-serif uppercase border-y border-slate-700", clx)}
    >
      <div className="flex items-center min-h-20 py-2 px-4 font-sans tracking-wider text-lg border-y my-1">
        <ul className="flex-1 flex flex-col gap-3 leading-4 font-bold">
          <Link
            href="/about"
            className={cn(
              "border-b border-transparent w-fit pr-2 pl-1",
              `${path === "about" ? "border-primary" : " hover:border-primary"} `,
            )}
          >
            About
          </Link>
          <Link
            href="#"
            className="border-b border-transparent hover:border-primary w-fit pr-2 pl-1"
          >
            Artwork
          </Link>
        </ul>
        <div className="flex-2 flex justify-around border-x">
          <Link href="/" className="text-5xl font-serif">
            Sophia Tam
          </Link>
        </div>
        <ul className=" flex-1 flex flex-col gap-2 items-end leading-4">
          <div>Issue #1</div>
          <CurrentDate />
        </ul>
      </div>
    </header>
  );
}
