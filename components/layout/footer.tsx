import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t font-sans">
      <div className="mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact Section */}
          <div className="font-sans">
            <h3 className="font-sans! uppercase mb-4 font-bold">Contact</h3>
            <div className="space-y-1 text-sm font-light">
              <p className="text-muted-foreground">hello@sophiatam.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="font-sans! uppercase mb-4 font-bold">Navigation</h3>
            <nav className="space-y-1">
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                About
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Other Artwork
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="font-sans! uppercase mb-4 font-bold">Follow</h3>
            <nav className="space-y-1">
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                LinkedIn
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" border-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light">
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
