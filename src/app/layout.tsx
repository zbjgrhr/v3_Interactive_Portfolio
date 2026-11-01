import type { Metadata } from "next";
import { LocaleBootstrap } from "@/components/accessibility/LocaleBootstrap";
import { LanguageSwitch } from "@/components/accessibility/LanguageSwitch";
import "./language-switch.css";
import { TutorialGate } from "@/components/tutorial/TutorialGate";
import "./globals.css";
import "./game-v2.css";
import "./explore-watercolor.css";
import "./tutorial.css";

export const metadata: Metadata = {
  title: "interactive portfolio个人互动作品集",
  description:
    "Huaxin Zhang's interactive portfolio — game systems, narrative design, multi-agent AI products, and working prototypes.",
  keywords: [
    "Huaxin Zhang（张铧心）",
    "互动作品集",
    "共鸣档案",
    "AI（人工智能）",
    "创意技术",
    "Phaser",
  ],
  openGraph: {
    title: "interactive portfolio个人互动作品集",
    description:
      "Game systems, narrative design, multi-agent AI products, and working prototypes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><LocaleBootstrap />{children}<TutorialGate /><LanguageSwitch /></body>
    </html>
  );
}
