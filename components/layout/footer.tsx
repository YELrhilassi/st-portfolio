import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 font-sans font-light">
      <div className="py-8">
        <ul className="flex gap-8">
          <li className="capitalize texl-lg">
            {" "}
            <Link href="/">home</Link>
          </li>
          <li className="capitalize texl-lg">
            <Link href="/about#about">about</Link>
          </li>
          <li className="capitalize texl-lg">
            <Link href="/artwork">artwork</Link>
          </li>
          <li className="capitalize texl-lg">
            <Link href="/about#connect">Connect</Link>
          </li>
        </ul>

        {/* Bottom Bar */}
        <div className="border-t mt-5 pt-2 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Sophia Tam. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
