import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t font-sans font-light">
      <div className="py-12">
       <div>yee</div>

        {/* Bottom Bar */}
        <div className="pt-8 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Sophia Tam. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
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
