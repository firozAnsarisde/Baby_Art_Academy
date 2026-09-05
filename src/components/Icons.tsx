type IconProps = { className?: string };
const base = "w-5 h-5";

export const IconSeedling = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M12 21V12" strokeLinecap="round" />
    <path d="M12 12C12 7 16 5 20 5C20 9 17 12 12 12Z" />
    <path d="M12 14C12 10 8 8 4 8C4 12 7 14.5 12 14.5" />
  </svg>
);

export const IconSteps = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M4 18h4v-4H4z" />
    <path d="M10 18h4v-8h-4z" />
    <path d="M16 18h4V6h-4z" />
  </svg>
);

export const IconPencil = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" strokeLinejoin="round" />
    <path d="M13 8l3 3" />
  </svg>
);

export const IconGrowth = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M4 18L10 12L14 15L20 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 8h6v6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconStar = ({ className = base, filled = true }: IconProps & { filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.4"
    className={className}
  >
    <path
      d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8z"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCheck = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconChevron = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
