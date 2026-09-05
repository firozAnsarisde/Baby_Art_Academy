import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MandalaOutline } from "./decorative/MehndiMotifs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-mehndi-800 text-ivory">
      <MandalaOutline className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 text-ivory/5" />

      <div className="relative mx-auto max-w-content px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl">{siteConfig.academyName}</p>
          <p className="mt-3 max-w-sm font-body text-[15px] leading-relaxed text-ivory/75">
            {siteConfig.tagline}
          </p>
          <div className="mt-5 flex gap-4">
            {[
              { label: "Instagram", href: siteConfig.contact.instagram },
              { label: "Facebook", href: siteConfig.contact.facebook },
              { label: "YouTube", href: siteConfig.contact.youtube },
              { label: "WhatsApp", href: siteConfig.contact.whatsappLink },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-body text-ivory/80 underline underline-offset-4 hover:text-ivory"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-[13px] uppercase tracking-[0.14em] text-gold-300">Quick Links</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {siteConfig.footerQuickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-body text-[15px] text-ivory/85 hover:text-ivory">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-[13px] uppercase tracking-[0.14em] text-gold-300">Legal</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {siteConfig.footerLegalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-body text-[15px] text-ivory/85 hover:text-ivory">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <p className="mx-auto max-w-content px-5 sm:px-8 py-5 text-[13px] font-body text-ivory/60">
          © {year} {siteConfig.academyName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
