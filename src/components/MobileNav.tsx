"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import Button from "./Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      id="mobile-nav"
      className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
        open ? "max-h-96" : "max-h-0"
      }`}
    >
      <nav
        aria-label="Mobile navigation"
        className="flex flex-col gap-1 border-t border-mehndi-100 bg-ivory px-6 py-4"
      >
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-3 text-[16px] font-body text-charcoal border-b border-mehndi-100/70 last:border-none"
          >
            {link.label}
          </Link>
        ))}
        <Button href="/course" className="mt-4 w-full" onClick={onClose}>
          Enroll Now
        </Button>
      </nav>
    </div>
  );
}
