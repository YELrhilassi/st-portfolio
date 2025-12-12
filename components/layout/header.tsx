import Link from "next/link";
import CurrentDate from "../utils/current-date";
import { cn } from "../utils/cn";
import LinkPath from "../ui/link-path";
import { Instagram, Linkedin, Mail, MailIcon } from "lucide-react";

type THeader = {
  className?: React.ComponentProps<"header">["className"];
  date: Date;
};

export default function Header({ className: clx, date }: THeader) {
  return (
    <header className={cn("font-serif border-slate-700", clx)}>
      <div className="flex items-center min-h-20 font-sans tracking-wider text-lg border-y border-b-2 my-1">
        <ul className="flex-1 flex gap-3 leading-4 text-xl font-bolder font-serif capitalize pl-2 tracking-tight">
          <LinkPath href="about">about</LinkPath>
          <LinkPath href="artwork">Other artwork</LinkPath>
        </ul>
        <div className="flex-2 flex justify-around py-4 border-x my-1 uppercase">
          <Link href="/" className="text-6xl font-serif">
            Sophia Tam
          </Link>
        </div>
        <ul className=" flex-1 flex flex-col gap-2 items-end font-serif leading-4 tracking-tight">
          <div className="flex gap-2 mb-2">
            <span>Connect with us at:</span>
            <div className="flex gap-1.5">
              <address>
                <Link href="mailto:contactsophiattw@gmail.com">
                  <Mail className="w-4 h-4" />
                </Link>
              </address>
              <Link
                href="https://www.instagram.com/jane_dooodle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sophiattw"
                target="_blank"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <CurrentDate />
        </ul>
      </div>
    </header>
  );
}
