import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import CtaSection from "@/components/CtaSection";
import { IconSeedling, IconGrowth, IconPencil } from "@/components/Icons";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story, mission and teaching philosophy behind ${siteConfig.academyName}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream/60">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-body text-[13px] tracking-[0.14em] text-terracotta-600">About Us</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            About Our Mehndi Academy
          </h1>
          <p className="mt-6 max-w-2xl font-body text-[16px] leading-relaxed text-charcoal-light">
            {siteConfig.academyName} started with a simple observation: most
            people who wanted to learn Mehndi gave up early, not because they
            lacked talent, but because they were never shown the basics
            properly. We built this academy to fix that — one clear,
            practical lesson at a time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-charcoal">Where It Started</h2>
            <p className="mt-4 font-body text-[15.5px] leading-relaxed text-charcoal-light">
              {siteConfig.instructor.name} spent years designing Mehndi for
              brides, families and everyday clients before realising the
              biggest gap wasn't talent — it was access to good teaching.
              Most tutorials skipped straight to finished designs without
              ever explaining the fundamentals: how to hold the cone, how to
              control pressure, how to plan a composition before you start.
            </p>
            <p className="mt-4 font-body text-[15.5px] leading-relaxed text-charcoal-light">
              This course was built to close that gap — structured the way a
              real student actually learns, not the way it looks best in a
              highlight reel.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-mehndi-100 sm:h-72 sm:w-72">
              <span className="font-display text-7xl text-mehndi-700">
                {siteConfig.instructor.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mehndi-50/60">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            <CourseCard
              icon={<IconSeedling />}
              title="Our Mission"
              description="To make quality Mehndi education accessible to anyone with the patience to learn, regardless of where they live."
            />
            <CourseCard
              icon={<IconGrowth />}
              title="Our Vision"
              description="A community of confident, well-trained Mehndi artists who can turn their craft into real opportunity."
            />
            <CourseCard
              icon={<IconPencil />}
              title="Why Students Choose Us"
              description="Clear structure, honest pacing and real feedback — not just pretty finished designs with no explanation."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          title="Our Teaching Philosophy"
          subtitle="We believe good design comes from strong fundamentals, not shortcuts."
        />
        <div className="mx-auto mt-10 max-w-2xl font-body text-[15.5px] leading-relaxed text-charcoal-light">
          <p>
            Every module in this course is built around a single idea:
            confidence comes from repetition of the right basics, not from
            copying finished designs. That's why beginners start with lines
            and shapes long before they touch a full hand design — and why
            every advanced module still refers back to those fundamentals.
          </p>
          <p className="mt-4">
            We also believe learning shouldn't feel lonely. That's why
            students can reach out directly with questions as they move
            through the course, instead of being left to figure things out
            alone.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Ready to Turn Your Creativity Into Beautiful Mehndi Art?"
        subheading="Start learning today and take the first step toward becoming a confident Mehndi artist."
      />
    </>
  );
}
