import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("fr-FR", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min`;
}

export function dateRange(startDate: Date, endDate: Date | string): string {
  const startMonth = startDate.toLocaleString("fr-FR", { month: "long" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (typeof endDate === "string") {
    endMonth = "";
    endYear = endDate;
  } else {
    endMonth = endDate.toLocaleString("fr-FR", { month: "long" });
    endYear = endDate.getFullYear().toString();
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}