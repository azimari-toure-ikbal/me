import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-silver/20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-silver text-sm">
              &copy; {new Date().getFullYear()} Ikbal AZIMARI TOURE. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="#home"
              className="text-silver hover:text-white text-sm transition-colors"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-silver hover:text-white text-sm transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="#contact"
              className="text-silver hover:text-white text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
