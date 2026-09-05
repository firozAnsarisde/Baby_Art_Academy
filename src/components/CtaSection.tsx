import Button from "./Button";
import { PaisleyGlyph } from "./decorative/MehndiMotifs";

interface CtaSectionProps {
  heading: string;
  subheading?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CtaSection({
  heading,
  subheading,
  buttonLabel = "Start Learning",
  buttonHref = "/course",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-mehndi-700">
      <PaisleyGlyph className="pointer-events-none absolute -left-6 top-1/2 h-40 w-28 -translate-y-1/2 text-ivory/10" />
      <PaisleyGlyph className="pointer-events-none absolute -right-6 top-1/2 h-40 w-28 -translate-y-1/2 rotate-180 text-ivory/10" />

      <div className="relative mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">{heading}</h2>
        {subheading && (
          <p className="mt-4 font-body text-[15.5px] leading-relaxed text-ivory/80">{subheading}</p>
        )}
        <div className="mt-8">
          <Button href={buttonHref} variant="ghost">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
