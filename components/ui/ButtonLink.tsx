import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  whatsapp: "btn-whatsapp",
  ghost: "btn-ghost",
};

const sizeClasses: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn("btn", variantClasses[variant], sizeClasses[size], className);
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const isHttp = href.startsWith("http");
  const shouldOpenNewTab = external ?? isHttp;

  return (
    <a
      href={href}
      className={buttonClasses(variant, size, className)}
      aria-label={ariaLabel}
      onClick={onClick}
      target={shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
