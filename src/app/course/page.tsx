import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ModuleAccordion from "@/components/ModuleAccordion";
import PricingCard from "@/components/PricingCard";
import CtaSection from "@/components/CtaSection";
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import { PaisleyGlyph, CornerMotif } from "@/components/decorative/MehndiMotifs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Course",
  description: `Everything included in the ${siteConfig.course.name} — modules, pricing and what you'll learn.`,
};

export default function CoursePage() {
  const { course } = siteConfig;

  const stats = [
    { label: "Price", value: `${course.currency}${course.offerPrice.toLocaleString("en-IN")}` },
    { label: "Level", value: course.level },
    { label: "Duration", value: course.duration },
    { label: "Lessons", value: `${course.lessons} lessons` },
    { label: "Language", value: course.language },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream/60">
        <CornerMotif className="pointer-events-none absolute right-0 top-0 h-32 w-32 rotate-90 text-terracotta-500/20" />
        <div className="relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-body text-[13px] tracking-[0.14em] text-terracotta-600">
            {course.format} · {course.level}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            {course.name}
          </h1>
          <p className="mt-5 max-w-xl font-body text-[16px] leading-relaxed text-charcoal-light">
            A complete, structured path from your very first Mehndi line to
            full bridal designs — with a dedicated module on turning your new
            skill into real client work.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-body text-[12px] uppercase tracking-[0.1em] text-charcoal-light/70">
                  {s.label}
                </p>
                <p className="mt-1 font-display text-[17px] text-charcoal">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <Button href="#pricing">Enroll Now</Button>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading title="What You Will Learn" align="left" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whatYouWillLearn.map((item) => (
            <CourseCard key={item} title={item} icon={<PaisleyGlyph className="h-5 w-4" />} compact />
          ))}
        </div>
      </section>

      <CtaSection
        heading="12 Modules. One Complete Path."
        subheading="Every module builds on the last, so you always know exactly what to practice next."
        buttonLabel="Enroll Now"
        buttonHref="#pricing"
      />

      {/* MODULES */}
      <section className="bg-cream/40">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            title="Course Modules"
            subtitle="Tap a module to see exactly what's inside."
          />
          <div className="mx-auto mt-10 max-w-2xl">
            <ModuleAccordion modules={siteConfig.modules} />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          title="Enroll in the Course"
          subtitle="One simple price. Lifetime access. No hidden add-ons."
        />
        <div className="mt-10">
          <PricingCard />
        </div>
      </section>
    </>
  );
}
