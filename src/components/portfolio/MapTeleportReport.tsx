"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "@/components/portfolio/LocalizedImage";
import chinese from "@/data/reports/map-teleport.zh.json";
import english from "@/data/reports/map-teleport.en.json";
import "./map-report.css";

export type ReportBlock = {
  id: string; type: string; width?: number; height?: number; text?: string; level?: number; anchor?: string;
  src?: string; alt?: string; caption?: string; headers?: string[]; rows?: string[][];
};

export function reportInline(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <Fragment key={index}>{part}</Fragment>;
    return <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer">{match[1]}<span className="report-external" aria-hidden>↗</span></a>;
  });
}

export default function MapTeleportReport({ locale, theme = "paper" }: { locale: "zh" | "en"; theme?: "paper" | "game" }) {
  const blocks: ReportBlock[] = locale === "zh" ? chinese : english;
  const headings = blocks.filter(block => block.type === "heading" && block.level === 2);
  const [active, setActive] = useState(headings[0]?.anchor);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-10% 0px -65% 0px" });
    for (const heading of blocks.filter(block => block.type === "heading" && block.level === 2)) { const element = document.getElementById(heading.anchor!); if (element) observer.observe(element); }
    return () => observer.disconnect();
  }, [blocks]); // Localized headings share stable anchors.
  return <div className={`map-report map-report--${theme}`} lang={locale === "zh" ? "zh-CN" : "en"}>
    <aside className="map-report__toc" aria-label={locale === "zh" ? "报告目录" : "Report contents"}>
      <p>{locale === "zh" ? "本页目录" : "CONTENTS"}<span>{String(headings.length).padStart(2, "0")}</span></p>
      <nav>{headings.map((block, index) => <a key={block.id} href={`#${block.anchor}`} aria-current={active === block.anchor ? "location" : undefined}><small>{String(index + 1).padStart(2, "0")}</small><span>{block.text}</span></a>)}</nav>
      <a className="map-report__top" href="#report-top">{locale === "zh" ? "回到开篇 ↑" : "Back to top ↑"}</a>
    </aside>
    <article className="map-report__body" aria-label={locale === "zh" ? "Map Teleport 项目报告" : "Map Teleport project report"}>
      {blocks.map(block => {
        if (block.type === "heading") return block.level === 2
          ? <h2 key={block.id} id={block.anchor}><span>{String(headings.findIndex(item => item.id === block.id) + 1).padStart(2,"0")}</span>{block.text}</h2>
          : <h3 key={block.id} id={block.anchor}>{block.text}</h3>;
        if (block.type === "figure") return <figure key={block.id} className={`map-report__figure${/logo/.test(block.src!) ? " map-report__figure--identity" : ""}`}>
          <a href={block.src} target="_blank" rel="noopener noreferrer" aria-label={(locale === "zh" ? "放大查看：" : "Enlarge: ") + block.alt}><Image src={block.src!} alt={block.alt!} width={block.width!} height={block.height!} unoptimized loading="lazy" /></a>
          <figcaption>{block.caption}</figcaption>
        </figure>;
        if (block.type === "table") return <div key={block.id} className="map-report__table-scroll" role="region" tabIndex={0} aria-label={(locale === "zh" ? "数据与比较表：" : "Data and comparison: ") + block.headers?.join(" / ")}><table><thead><tr>{block.headers?.map((cell, index) => <th scope="col" key={index}>{reportInline(cell)}</th>)}</tr></thead><tbody>{block.rows?.map((row, index) => <tr key={index}>{row.map((cell, col) => col === 0 ? <th scope="row" key={col}>{reportInline(cell)}</th> : <td key={col}>{reportInline(cell)}</td>)}</tr>)}</tbody></table></div>;
        return <p key={block.id} className={block.type === "note" ? "map-report__note" : undefined}>{reportInline(block.text!)}</p>;
      })}
    </article>
  </div>;
}
