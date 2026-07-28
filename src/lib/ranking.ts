/**
 * Ratings and rank badges are derived from a brand's position in the rendered
 * list (`index + 1`), never from stored values, so the numbers always run in
 * sequence and match the order the visitor actually sees.
 */

const TOP_RATING = 10;
const LOWEST_RATING = 9.5;
const RATING_STEP = 0.1;

/** 1 → 10, 2 → 9.9, 3 → 9.8 … flooring at 9.5 for every later position. */
export function calculateRating(order: number): number {
  const value = TOP_RATING - (order - 1) * RATING_STEP;
  return Math.max(LOWEST_RATING, Math.round(value * 10) / 10);
}

/** Filled stars out of five, in half-star steps. */
export function calculateStars(order: number): number {
  if (order <= 3) return 5;
  if (order <= 7) return 4.5;
  return 4;
}
