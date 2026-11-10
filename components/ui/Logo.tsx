import Link from "next/link";
import { Activity } from "lucide-react";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
  onClick?: () => void;
};

export function Logo({ variant = "default", className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex items-center gap-3", className)}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
        <Activity className="size-5" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-tight sm:text-base",
            variant === "light" ? "text-white" : "text-navy",
          )}
        >
          R D Physiotherapy
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]",
            variant === "light" ? "text-blue-200" : "text-muted",
          )}
        >
          Clinic &amp; Rehab Centre
        </span>
      </span>
    </Link>
  );
}
