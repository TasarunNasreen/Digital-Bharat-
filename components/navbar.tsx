import Link from "next/link";
import { Landmark, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-950">
          <span className="rounded-md bg-blue-700 p-2 text-white">
            <Landmark className="h-5 w-5" aria-hidden="true" />
          </span>
          Digital Bharat
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm">Get Started</Button>
        </div>

        <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </nav>
    </header>
  );
}
