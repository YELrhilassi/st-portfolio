import Link from "next/link";
import CurrentDate from "../utils/current-date";
import { cn } from "../utils/cn";
import LinkPath from "../ui/link-path";

type THeader = {
  className?: React.ComponentProps<"header">["className"];
  date: Date
};


export default function Header({ className: clx,date }: THeader) {
 
  return (
    <header
      className={cn("font-serif border-slate-700", clx)}
    >
      <div className="flex items-center min-h-20 font-sans tracking-wider text-lg border-y my-1">
        <ul className="flex-1 flex gap-3 leading-4 text-xl font-bolder font-serif capitalize pl-2">
           <LinkPath href="about">about</LinkPath> 
           <LinkPath href="artwork">Other artwork</LinkPath> 
          
        </ul>
        <div className="flex-2 flex justify-around py-4 border-x my-1 uppercase">
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
