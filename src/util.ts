export function add(a: number, b: number): number {
  return a + b;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function clamp(n: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min > max");
  return Math.min(Math.max(n, min), max);
}

export function isPalindrome(s: string): boolean {
  const t = slugify(s).replace(/-/g, "");
  return t === [...t].reverse().join("");
}
