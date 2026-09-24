import SmartLink from "./SmartLink";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] px-[22px] py-3 text-[15px] font-semibold no-underline transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5";

const variants = {
  primary:
    "bg-linear-to-b from-accent to-accent-deep text-on-accent shadow-card hover:text-on-accent dark:from-accent dark:to-accent",
  secondary: "border border-border bg-surface text-text hover:border-accent-soft hover:text-text",
};

export default function Button({ href, variant = "primary", className = "", children }: Props) {
  return (
    <SmartLink href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </SmartLink>
  );
}
