"use client";

import NextImage, { type ImageProps } from "next/image";
import { useEffect, useRef, type ImgHTMLAttributes, type ReactNode } from "react";
import { useUiStore } from "@/store/uiStore";
import { getImageTranslation, localizedImageSource, localizedImageLink, overlayFontSize, type ImageOverlay } from "@/data/imageTranslations";

function useImageLocale(source?: string) {
  const locale = useUiStore((state) => state.locale);
  const ref = useRef<HTMLImageElement>(null);
  const translated = source ? localizedImageSource(source, locale) : source;
  const overlays = locale === "en" && source ? getImageTranslation(source)?.overlays : undefined;

  useEffect(() => {
    const anchor = ref.current?.closest("a");
    if (!anchor || !source || !translated) return;
    const original = new URL(source, window.location.href).href;
    const english = new URL(localizedImageLink(source, "en"), window.location.href).href;
    // Only change links that enlarge this image; project-navigation links stay intact.
    if (anchor.href === original || anchor.href === english) anchor.href = localizedImageLink(source, locale);
  }, [source, translated, locale]);

  return { ref, translated, overlays };
}

function TranslatedOverlays({ overlays, children }: { overlays?: ImageOverlay[]; children: ReactNode }) {
  if (!overlays?.length) return children;
  return <span className="localized-image-frame" style={{ display: "block", position: "relative", width: "100%", lineHeight: 0, containerType: "inline-size" }}>
    {children}
    {overlays.map((area, index) => <span key={index} className="localized-image-label" style={{ position: "absolute", left: `${area.left}%`, top: `${area.top}%`, width: `${area.width}%`, height: `${area.height}%`, background: area.background, color: area.color, display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", fontFamily: "Arial, sans-serif", fontSize: `min(24px, ${overlayFontSize(area)}cqi)`, lineHeight: 1.15, fontWeight: 500, whiteSpace: "pre-line", textAlign: "center", overflow: "hidden" }}>{area.text}</span>)}
  </span>;
}

/** Shared source mapping covers report figures, thumbnails and enlarged originals. */
export default function LocalizedImage({ src, ...props }: ImageProps) {
  const source = typeof src === "string" ? src : undefined;
  const { ref, translated, overlays } = useImageLocale(source);
  return <TranslatedOverlays overlays={overlays}><NextImage {...props} ref={ref} src={translated ?? src} data-original-src={source} /></TranslatedOverlays>;
}

export function NativeLocalizedImage({ src, alt = "", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const source = typeof src === "string" ? src : undefined;
  const { ref, translated, overlays } = useImageLocale(source);
  // Native images retain their existing sizing, animation and loading behavior.
  // eslint-disable-next-line @next/next/no-img-element
  return <TranslatedOverlays overlays={overlays}><img {...props} ref={ref} src={translated ?? src} alt={alt} data-original-src={source} /></TranslatedOverlays>;
}
