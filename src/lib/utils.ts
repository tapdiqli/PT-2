export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatRating(rating: number): string {
  return rating.toFixed(1).replace(".", ",");
}
