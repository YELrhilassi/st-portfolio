import Link from "next/link";
import CurrentDate from "../utils/current-date";
import { cn } from "../utils/cn";

type THeader = {
  className?: React.ComponentProps<"header">["className"];
};

export default function Header({ className: clx }: THeader) {
  return (
    <header
      className={cn("font-serif uppercase border-y border-slate-700", clx)}
    >
      <div className="flex items-center py-2 px-4 font-ui font-medium text-xl">
        <ul className="flex-1 flex flex-col gap-1">
          <a>About</a>
          <a>Artwork</a>
        </ul>
        <div className="flex-2 flex justify-around border-x">
          <Link href="/" className="text-5xl font-serif">
            Sophia Tam
          </Link>
        </div>
        <ul className=" flex-1 flex flex-col gap-1 items-end">
          <div>Issue #1</div>
          <CurrentDate />
        </ul>
      </div>
    </header>
  );
}
