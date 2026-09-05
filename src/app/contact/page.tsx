import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.academyName} — email, phone, WhatsApp and Instagram.`,
};

export default function ContactPage() {
  const { contact } = siteConfig;

  const details = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappLink },
    { label: "Instagram", value: "@hennaartacademy", href: contact.instagram },
  ];

  return (
    <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
      <p className="font-body text-[13px] tracking-[0.14em] text-terracotta-600">Contact</p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
        Get In Touch
      </h1>
      <p className="mt-5 max-w-xl font-body text-[16px] leading-relaxed text-charcoal-light">
        Questions about the course, enrollment or bulk/group pricing? Send us
        a message or reach out directly — we usually reply within a day.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-mehndi-100 bg-ivory p-6 sm:p-8">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-3xl border border-mehndi-100 bg-cream/50 p-6 sm:p-8">
            <h2 className="font-display text-xl text-charcoal">Reach Us Directly</h2>
            <ul className="mt-5 flex flex-col gap-4">
              {details.map((d) => (
                <li key={d.label}>
                  <p className="font-body text-[12.5px] uppercase tracking-[0.1em] text-charcoal-light/70">
                    {d.label}
                  </p>
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-body text-[15px] text-charcoal hover:text-mehndi-700"
                  >
                    {d.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-mehndi-700 p-6 text-center sm:p-8">
            <p className="font-display text-lg text-ivory">Prefer WhatsApp?</p>
            <p className="mt-2 font-body text-[14.5px] text-ivory/80">
              Get a faster response for quick questions.
            </p>
            <Button href={contact.whatsappLink} variant="ghost" className="mt-5">
              Chat With Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
