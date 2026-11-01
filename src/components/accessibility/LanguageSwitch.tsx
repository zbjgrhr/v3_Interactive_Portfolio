"use client";
import { usePathname } from "next/navigation";
import { useUiStore } from "@/store/uiStore";
export function LanguageSwitch({ inline = false, theme = "light" }: { inline?: boolean; theme?: "light" | "world" }) {
  const locale = useUiStore(state => state.locale);
  const setLocale = useUiStore(state => state.setLocale);
  const pathname = usePathname();
  if (!inline && (pathname.startsWith("/portfolio/") || ["/", "/portfolio", "/portfolio/", "/map-preview", "/map-preview/"].includes(pathname))) return null;
  return <nav className={`language-switch language-switch--${theme}${inline ? "" : " language-switch--floating"}`} aria-label="Language / 语言">
    {([{ code: "en", label: "EN", lang: "en", name: "Switch to English" }, { code: "zh", label: "CN", lang: "zh-CN", name: "切换为中文" }] as const).map((item, index) => <span key={item.code}>{index > 0 && <i aria-hidden="true">/</i>}<button type="button" lang={item.lang} aria-label={item.name} aria-pressed={locale === item.code} onClick={() => setLocale(item.code)}>{item.label}</button></span>)}
  </nav>;
}
