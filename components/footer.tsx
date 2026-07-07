import Link from "next/link";
import { Landmark } from "lucide-react";
import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="rounded-md bg-blue-600 p-2">
              <Landmark className="h-5 w-5" aria-hidden="true" />
            </span>
            Digital Bharat
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            AI Powered Civic Companion for Government Services, built with local
            mock data for a fast and deployment-ready foundation.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © 2026 Digital Bharat. MIT Licensed.
      </div>
    </footer>
  );
}
