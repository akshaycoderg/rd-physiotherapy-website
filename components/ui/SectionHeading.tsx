import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", align === "center" && "justify-center")}>
          <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className="mt-4 text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[2rem] lg:text-[2.35rem]">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
