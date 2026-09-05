import { IconStar } from "./Icons";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-mehndi-100 bg-ivory p-6">
      <div className="flex gap-0.5 text-gold-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} className="h-4 w-4" filled={i < rating} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-body text-[14.5px] leading-relaxed text-charcoal-light">
        “{text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mehndi-100 font-display text-[15px] text-mehndi-800">
          {initial}
        </span>
        <span className="font-body text-[14.5px] font-medium text-charcoal">{name}</span>
      </figcaption>
    </figure>
  );
}
