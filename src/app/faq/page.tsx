import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Answers to common questions about the ${siteConfig.course.name}.`,
};

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-body text-[13px] tracking-[0.14em] text-terracotta-600">Support</p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 max-w-xl font-body text-[16px] leading-relaxed text-charcoal-light">
          Can't find what you're looking for? Reach out on our Contact page
          and we'll help directly.
        </p>

        <div className="mx-auto mt-12 max-w-2xl">
          <FaqAccordion items={siteConfig.faqs} />
        </div>
      </section>

      <CtaSection
        heading="Still Have Questions?"
        subheading="Our team is happy to help you decide if this course is right for you."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
