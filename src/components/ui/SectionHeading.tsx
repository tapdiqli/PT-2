import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className, light }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance",
          light ? "text-white" : "text-white"
        )}
      >
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-gray-300">{description}</p> : null}
    </div>
  );
}
