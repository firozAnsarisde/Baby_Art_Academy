import Button from "./Button";
import { CornerMotif, HennaHandIllustration } from "./decorative/MehndiMotifs";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream/60">
      <CornerMotif className="pointer-events-none absolute left-0 top-0 h-32 w-32 text-terracotta-500/25 sm:h-40 sm:w-40" />
      <CornerMotif className="pointer-events-none absolute right-0 bottom-0 h-32 w-32 rotate-180 text-mehndi-500/20 sm:h-40 sm:w-40" />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="max-w-xl">
          <p className="font-body text-[13px] tracking-[0.14em] text-terracotta-600">
            Online Mehndi Course
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.12] text-charcoal sm:text-5xl lg:text-[3.4rem]">
            Master the Art of Mehndi
          </h1>
          <p className="mt-6 font-body text-[17px] leading-relaxed text-charcoal-light">
            Learn beautiful Mehndi designs step-by-step and turn your
            creativity into a skill — from your very first line to full
            bridal compositions.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/course" variant="primary">
              View Course
            </Button>
            <Button href="/course#pricing" variant="secondary">
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-mehndi-100/70" />
          <div className="rounded-[2.5rem] bg-ivory p-6 shadow-soft ring-1 ring-mehndi-100 sm:p-8">
            <HennaHandIllustration className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
