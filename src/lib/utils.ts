// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges tailwind classes and removes conflicts (like bg-red-500 vs bg-blue-500)
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
