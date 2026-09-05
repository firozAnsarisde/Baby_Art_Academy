import { DividerMotif } from "./decorative/MehndiMotifs";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignClass} gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      <h2
        className={`font-display text-3xl sm:text-4xl leading-tight ${
          light ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <DividerMotif className={`w-28 h-4 ${light ? "text-cream/70" : "text-terracotta-500"}`} />
      {subtitle && (
        <p className={`font-body text-[15px] leading-relaxed ${light ? "text-ivory/80" : "text-charcoal-light"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
