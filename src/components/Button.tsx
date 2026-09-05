import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-mehndi-700 text-ivory hover:bg-mehndi-800 focus-visible:ring-mehndi-700",
  secondary:
    "bg-transparent text-mehndi-700 border border-mehndi-700 hover:bg-mehndi-700 hover:text-ivory focus-visible:ring-mehndi-700",
  ghost:
    "bg-terracotta-500 text-ivory hover:bg-terracotta-600 focus-visible:ring-terracotta-500",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={props.href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
