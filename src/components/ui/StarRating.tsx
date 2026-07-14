import { formatRating } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  votes?: number;
  size?: "sm" | "md";
}

export function StarRating({ rating, votes, size = "sm" }: StarRatingProps) {
  const stars = [0, 1, 2, 3, 4];
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {stars.map((index) => {
          const fillPercent = Math.max(0, Math.min(1, rating - index)) * 100;
          return (
            <span key={index} className={`relative inline-block ${starSize}`}>
              <svg viewBox="0 0 20 20" fill="currentColor" className={`${starSize} text-white/15`}>
                <path d="M10 1.5l2.6 5.8 6.3.6-4.8 4.2 1.4 6.2L10 15.2l-5.5 3.1 1.4-6.2L1.1 7.9l6.3-.6L10 1.5z" />
              </svg>
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
                <svg viewBox="0 0 20 20" fill="currentColor" className={`${starSize} text-primary`}>
                  <path d="M10 1.5l2.6 5.8 6.3.6-4.8 4.2 1.4 6.2L10 15.2l-5.5 3.1 1.4-6.2L1.1 7.9l6.3-.6L10 1.5z" />
                </svg>
              </span>
            </span>
          );
        })}
      </div>
      <span className="text-sm font-bold text-white">{formatRating(rating)}</span>
      {votes ? <span className="text-xs text-gray-400">({votes})</span> : null}
    </div>
  );
}
