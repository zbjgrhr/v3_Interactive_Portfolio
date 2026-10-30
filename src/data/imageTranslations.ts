import manifest from "./imageTranslations.json";
import type { Locale } from "@/types";

export type ImageOverlay = { left: number; top: number; width: number; height: number; text: string; background: string; color: string; fontSizeCqi?: number };
export type ImageTranslation = { src: string; status: string; note?: string; overlays?: ImageOverlay[]; enlargedSrc?: string };
export const imageTranslations = manifest as Record<string, ImageTranslation>;
export const getImageTranslation = (src: string) => imageTranslations[src] ?? imageTranslations[src.split("?")[0]];
export function overlayFontSize(area: ImageOverlay) {
  const lines = area.text.split("\n");
  return area.fontSizeCqi ?? Math.min(1.5, area.width / (Math.max(...lines.map(line => line.length)) * .57), area.height * .62 / (lines.length * 1.15));
}

export function localizedImageSource(src: string, locale: Locale) {
  return locale === "en" ? getImageTranslation(src)?.src ?? src : src;
}

export function localizedImageLink(src: string, locale: Locale) {
  return locale === "en" ? getImageTranslation(src)?.enlargedSrc ?? localizedImageSource(src, locale) : src;
}
