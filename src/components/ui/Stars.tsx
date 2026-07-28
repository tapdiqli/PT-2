import { cn } from "@/lib/utils";

interface StarsProps {
  /** Filled stars out of five. Fractional values render a partial star. */
  value: number;
  className?: string;
}

const STAR_PATH = "M10 1.5l2.6 5.8 6.3.6-4.8 4.2 1.4 6.2L10 15.2l-5.5 3.1 1.4-6.2L1.1 7.9l6.3-.6L10 1.5z";

export function Stars({ value, className }: StarsProps) {
  return (
    <div className={cn("flex items-center", className)} aria-hidden>
      {[0, 1, 2, 3, 4].map((index) => {
        const fill = Math.max(0, Math.min(1, value - index));
        return (
          <span key={index} className="relative inline-block h-3 w-3">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white/20">
              <path d={STAR_PATH} />
            </svg>
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-accent">
                  <path d={STAR_PATH} />
                </svg>
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
