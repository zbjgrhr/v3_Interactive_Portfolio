"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const Tutorial = dynamic(() => import("./PortfolioTutorial").then(module => module.PortfolioTutorial));
export function TutorialGate() {
  const path = usePathname().replace(/\/$/, "");
  return path === "/map-preview" || path === "/play" ? <Tutorial /> : null;
}
