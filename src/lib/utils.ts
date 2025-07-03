import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function abbreviate(word: string) {
  return word
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
