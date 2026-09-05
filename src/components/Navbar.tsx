"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Button from "./Button";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-mehndi-100">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8 py-4">
        <Link href="/" className="font-display text-xl sm:text-2xl text-mehndi-800 tracking-wide">
          {siteConfig.academyName}
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-9">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[15px] text-charcoal-light hover:text-mehndi-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/course">Enroll Now</Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center gap-1.5 h-10 w-10"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-6 bg-charcoal transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-charcoal transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-charcoal transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
