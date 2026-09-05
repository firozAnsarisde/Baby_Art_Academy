interface TimelineItem {
  step: string;
  detail: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li
          key={item.step}
          className="relative rounded-2xl border border-mehndi-100 bg-ivory p-6"
        >
          <span className="font-display text-3xl text-mehndi-100">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-display text-lg text-charcoal">{item.step}</h3>
          <p className="mt-2 font-body text-[14.5px] leading-relaxed text-charcoal-light">
            {item.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
