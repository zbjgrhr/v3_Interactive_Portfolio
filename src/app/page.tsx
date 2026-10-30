"use client";

import Link from "next/link";
import { LanguageSwitch } from "@/components/accessibility/LanguageSwitch";
import { useUiStore } from "@/store/uiStore";
import "./entry.css";

export default function HomePage() {
  const zh = useUiStore(state => state.locale) === "zh";
  return (
    <main className="portfolio-entry" id="main-content">
      <header className="portfolio-entry__identity"><span>{zh ? "张铧心" : "Huaxin Zhang"}</span><span>{zh ? "PORTFOLIO / 作品集" : "INTERACTIVE PORTFOLIO"}</span><LanguageSwitch inline /></header>
      <Link className="portfolio-entry__path portfolio-entry__path--world" href="/map-preview/?tutorial=1" prefetch={false}>
        <div className="portfolio-entry__scenery" aria-hidden="true" />
        <div className="portfolio-entry__copy"><span className="portfolio-entry__eyebrow">01 / EXPLORE & PLAY</span><h1>{zh ? <>进入游戏版<br />作品集</> : <>Explore the<br />interactive world</>}</h1><p>{zh ? "跟随操作教程，通过地图探索与音游了解作品" : "Follow the guide to discover the projects through map exploration and a rhythm game."}</p><span className="portfolio-entry__button">{zh ? "开始教程" : "Start the guide"} <span aria-hidden="true">→</span></span></div>
        <span className="portfolio-entry__footnote">{zh ? "一张地图，一段由你展开的旅程。" : "Choose your own path through the projects."}</span>
      </Link>
      <Link className="portfolio-entry__path portfolio-entry__path--direct" href="/portfolio/">
        <div className="portfolio-entry__copy"><span className="portfolio-entry__eyebrow">02 / BROWSE THE WORK</span><span className="portfolio-entry__index" aria-hidden="true">↗</span><h2>{zh ? <>直接查看<br />作品集</> : <>Browse the<br />projects</>}</h2><p>{zh ? "浏览全部项目，直接查看详情、在线体验或下载" : "Read the project reports, explore live demos, and access available downloads."}</p><span className="portfolio-entry__button">{zh ? "查看全部作品" : "View all projects"} <span aria-hidden="true">→</span></span></div>
        <span className="portfolio-entry__footnote">{zh ? "游戏设计 / AI 产品 / 研究与开发" : "Game design / AI products / Research & development"}</span>
      </Link>
    </main>
  );
}
