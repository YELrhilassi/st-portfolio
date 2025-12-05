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
      className={cn("font-serif uppercase  border-slate-700", clx)}
    >
      <div className="flex items-center min-h-20  px-4 font-sans tracking-wider text-lg border-y my-1">
        <ul className="flex-1 grid gap-0.5 leading-4 font-medium font-serif ">
          <Link href="/about" className="">
            <div
              className={cn(
                "flex items-center pl-10 h-9 w-45 transition-all",
                path === "about"
                  ? "bg-amber-200 mask-[url(/highlighter-mask.svg)]"
                  : "hover:bg-amber-200 hover:mask-[url(/highlighter-mask.svg)]"
              )}
            >
              About
            </div>
          </Link>
          <Link href="/artwork" className="">
            <div
              className={cn(
                "flex items-center pl-10 h-9 w-45 transition-all ",
                path === "artwork"
                  ? "bg-amber-200 mask-[url(/highlighter-mask.svg)]"
                  : "hover:bg-amber-200 hover:mask-[url(/highlighter-mask.svg)]"
              )}
            >
              Artwork
            </div>
          </Link>
        </ul>
        <div className="flex-2 flex justify-around py-4   border-x my-1">
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
