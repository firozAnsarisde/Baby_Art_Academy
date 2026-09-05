import { ReactNode } from "react";

interface CourseCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  compact?: boolean;
}

export default function CourseCard({ icon, title, description, compact = false }: CourseCardProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-mehndi-100 bg-ivory px-4 py-3.5 transition-colors hover:border-terracotta-300">
        {icon && <span className="text-terracotta-500 shrink-0">{icon}</span>}
        <p className="font-body text-[14.5px] text-charcoal">{title}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-mehndi-100 bg-ivory p-6 transition-colors hover:border-terracotta-300">
      {icon && (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-mehndi-50 text-mehndi-700">
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg text-charcoal">{title}</h3>
      {description && (
        <p className="mt-2 font-body text-[14.5px] leading-relaxed text-charcoal-light">
          {description}
        </p>
      )}
    </div>
  );
}
