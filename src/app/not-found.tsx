import Button from "@/components/Button";
import { PaisleyGlyph } from "@/components/decorative/MehndiMotifs";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-center px-5 py-24 text-center sm:px-8">
      <PaisleyGlyph className="h-20 w-16 text-terracotta-500/50" />
      <h1 className="mt-6 font-display text-4xl text-charcoal">Page Not Found</h1>
      <p className="mt-4 max-w-md font-body text-[15.5px] leading-relaxed text-charcoal-light">
        The page you're looking for may have moved. Let's get you back to
        learning Mehndi.
      </p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </section>
  );
}
