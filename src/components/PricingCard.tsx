import Button from "./Button";
import { IconCheck } from "./Icons";
import { siteConfig } from "@/config/site";

export default function PricingCard() {
  const { course, pricingIncludes } = siteConfig;
  const savingsPercent = Math.round(
    ((course.originalPrice - course.offerPrice) / course.originalPrice) * 100
  );

  return (
    <div className="mx-auto max-w-md rounded-3xl border border-gold-500/40 bg-ivory p-8 shadow-soft sm:p-10">
      <p className="font-body text-[13px] tracking-[0.14em] text-terracotta-600">
        Limited-time offer · {savingsPercent}% off
      </p>
      <h3 className="mt-3 font-display text-2xl text-charcoal">{course.name}</h3>

      <div className="mt-6 flex items-end gap-3">
        <span className="font-display text-4xl text-mehndi-800">
          {course.currency}
          {course.offerPrice.toLocaleString("en-IN")}
        </span>
        <span className="mb-1 font-body text-[15px] text-charcoal-light/70 line-through">
          {course.currency}
          {course.originalPrice.toLocaleString("en-IN")}
        </span>
      </div>
      <p className="mt-1 font-body text-[13.5px] text-charcoal-light">One-time payment · lifetime access</p>

      <ul className="mt-7 flex flex-col gap-3.5">
        {pricingIncludes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-mehndi-600" />
            <span className="font-body text-[14.5px] text-charcoal">{item}</span>
          </li>
        ))}
      </ul>

      <Button href="/contact" className="mt-8 w-full">
        Enroll Now
      </Button>
    </div>
  );
}
