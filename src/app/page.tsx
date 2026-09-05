import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import Timeline from "@/components/Timeline";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import CtaSection from "@/components/CtaSection";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import { IconSeedling, IconSteps, IconPencil, IconGrowth } from "@/components/Icons";
import { PaisleyGlyph } from "@/components/decorative/MehndiMotifs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.academyName} — Learn Mehndi Online`,
  description: siteConfig.tagline,
};

const whyLearn = [
  {
    icon: <IconSeedling />,
    title: "Learn From Beginner Level",
    description: "Start from the basics and gradually work up to advanced designs.",
  },
  {
    icon: <IconSteps />,
    title: "Step-by-Step Learning",
    description: "Easy, structured lessons designed so anyone can follow along.",
  },
  {
    icon: <IconPencil />,
    title: "Practice & Improve",
    description: "Practical exercises and design drills to sharpen your technique.",
  },
  {
    icon: <IconGrowth />,
    title: "Turn Your Skill Into Income",
    description: "Learn how Mehndi skills can help you start taking clients and earning.",
  },
];

export default function HomePage() {
  const { course } = siteConfig;

  return (
    <>
      <Hero />

      {/* WHY LEARN MEHNDI */}
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          title="Why Learn Mehndi?"
          subtitle="A creative, flexible skill you can build at your own pace — for yourself, your family, or a future business."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyLearn.map((item) => (
            <CourseCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* COURSE HIGHLIGHT */}
      <section className="bg-cream/50">
        <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              title="Learn Mehndi From Basics to Beautiful Designs"
              subtitle="One structured course that takes you from your first cone to full bridal-ready compositions."
            />
          </div>
          <div className="rounded-3xl border border-mehndi-100 bg-ivory p-7 sm:p-8">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="font-body text-[12.5px] uppercase tracking-[0.1em] text-charcoal-light/70">
                  Course Name
                </dt>
                <dd className="mt-1 font-display text-[17px] text-charcoal">{course.name}</dd>
              </div>
              <div>
                <dt className="font-body text-[12.5px] uppercase tracking-[0.1em] text-charcoal-light/70">
                  Suitable For
                </dt>
                <dd className="mt-1 font-body text-[15px] text-charcoal">{course.suitableFor}</dd>
              </div>
              <div>
                <dt className="font-body text-[12.5px] uppercase tracking-[0.1em] text-charcoal-light/70">
                  Format
                </dt>
                <dd className="mt-1 font-body text-[15px] text-charcoal">{course.format}</dd>
              </div>
              <div>
                <dt className="font-body text-[12.5px] uppercase tracking-[0.1em] text-charcoal-light/70">
                  Level
                </dt>
                <dd className="mt-1 font-body text-[15px] text-charcoal">{course.level}</dd>
              </div>
            </dl>
            <Button href="/course" className="mt-7 w-full">
              View Full Course
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          title="What You Will Learn"
          subtitle="A complete design vocabulary — built one lesson at a time."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whatYouWillLearn.map((item) => (
            <CourseCard key={item} title={item} icon={<PaisleyGlyph className="h-5 w-4" />} compact />
          ))}
        </div>
      </section>

      {/* COURSE JOURNEY */}
      <section className="bg-mehndi-50/60">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            title="Your Course Journey"
            subtitle="Six clear stages take you from a blank hand to a confident, booked artist."
          />
          <div className="mt-10">
            <Timeline items={siteConfig.journey} />
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading title="Who Is This Course For?" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.whoItsFor.map((item) => (
            <CourseCard key={item} title={item} icon={<PaisleyGlyph className="h-6 w-5" />} />
          ))}
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="bg-cream/50">
        <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-mehndi-100 sm:h-64 sm:w-64">
            <span className="font-display text-6xl text-mehndi-700">
              {siteConfig.instructor.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-body text-[13px] tracking-[0.14em] text-terracotta-600">
              Meet Your Instructor
            </p>
            <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">
              {siteConfig.instructor.name}
            </h2>
            <p className="mt-1 font-body text-[15px] text-charcoal-light">
              {siteConfig.instructor.title}
            </p>
            <p className="mt-5 max-w-xl font-body text-[15.5px] leading-relaxed text-charcoal-light">
              {siteConfig.instructor.bio}
            </p>
            <p className="mt-5 font-display italic text-mehndi-700">Learn From Experience.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading title="What Our Students Say" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.name} name={t.name} text={t.text} rating={t.rating} />
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-mehndi-50/60">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            title="Enroll in the Course"
            subtitle="One simple price. Lifetime access. No hidden add-ons."
          />
          <div className="mt-10">
            <PricingCard />
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready to Turn Your Creativity Into Beautiful Mehndi Art?"
        subheading="Start learning today and take the first step toward becoming a confident Mehndi artist."
      />

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mx-auto mt-10 max-w-2xl">
          <FaqAccordion items={siteConfig.faqs} />
        </div>
      </section>
    </>
  );
}
