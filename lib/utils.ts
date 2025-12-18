import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Check specifically for jpg or png
export function getImageExtension(filename: string): 'jpg' | 'jpeg' | 'png' | null {
  const match = filename.match(/\.(jpg|jpeg|png)$/i)
  return match ? (match[1].toLowerCase() as 'jpg' | 'jpeg' | 'png') : null
}