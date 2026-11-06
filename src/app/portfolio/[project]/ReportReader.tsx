"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LanguageSwitch } from "@/components/accessibility/LanguageSwitch";
import Image from "@/components/portfolio/LocalizedImage";
import { projects } from "@/data/projects";
import { localizeProject } from "@/data/projectTranslations";
import { mapTeleportWorkshops } from "@/data/mapTeleport";
import { useUiStore } from "@/store/uiStore";
import readingGallery from "@/data/readingGallery.json";
import type { ProjectId } from "@/types";
import "../../map-preview/pixel-report.css";
import "../../map-preview/survival-log.css";
import "./reader.css";

const MapTeleportReport = dynamic(() => import("@/components/portfolio/MapTeleportReport"));
const PixelWorldReport = dynamic(() => import("../../map-preview/PixelWorldReport"));
const PixelWorldReportEnglish = dynamic(() => import("../../map-preview/PixelWorldReportEnglish"));
const SurvivalLogCase = dynamic(() => import("../../map-preview/SurvivalLogCase"));

export default function ReportReader({ projectId }: { projectId: ProjectId }) {
  const locale = useUiStore(state => state.locale);
  const zh = locale === "zh";
  const project = projects.find(item => item.id === projectId)!;
  const copy = localizeProject(project, locale);
  const gallery = [...project.screenshots, ...((readingGallery as Record<string, string[]>)[projectId] ?? [])];
  const isMap = projectId === "map-teleport";
  return <main className={`report-reader report-reader--${projectId}`} id="main-content">
    <header className="report-reader__bar"><Link href="/portfolio/">← {zh ? "作品目录" : "All projects"}</Link><span>{isMap ? (zh ? "Map Teleport / 项目报告" : "Map Teleport / Project report") : (zh ? "张铧心 / 项目报告" : "Huaxin Zhang / Project reports")}</span><LanguageSwitch inline /><Link className="report-reader__game" href={`/map-preview/?review=${projectId}-detail`}>{zh ? "游戏版 ↗" : "Game view ↗"}</Link></header>
    <div className="report-reader__page" id="report-top">
      {isMap && <figure className="report-reader__concept"><a href="/portfolio/map-teleport/report/final-concept.webp" target="_blank" rel="noopener noreferrer" aria-label={zh ? "放大查看产品概念图" : "Enlarge the product concept image"}><Image src="/portfolio/map-teleport/report/final-concept.webp" alt={zh ? "Map Teleport 产品概念图" : "Map Teleport product concept"} width={1672} height={941} unoptimized priority /></a><figcaption>{zh ? "图 1　Map Teleport 产品概念图" : "Figure 1. Map Teleport product concept."}</figcaption></figure>}
      {projectId !== "survival-log" && <header className="report-reader__hero"><p className="report-reader__eyebrow">{zh ? "独立开发 / 项目报告" : "INDEPENDENT DEVELOPMENT / PROJECT REPORT"}</p><h1>{isMap ? (zh ? <>Map Teleport<small>模组开发报告</small></> : <>Map Teleport<small>Mod Development Report</small></>) : copy.title}</h1>{!isMap && <p className="report-reader__abstract">{copy.oneLiner}</p>}<div className="report-reader__meta"><span>{isMap ? "Project Zomboid · B42.21" : copy.category}</span><span>{isMap ? "Lua · Steam Workshop" : copy.period}</span><span>{zh ? "中文 / English" : "English / 中文"}</span></div><div className="report-reader__links">{isMap && mapTeleportWorkshops.map(item => <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">{zh ? item.zh : item.en} ↗</a>)}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}{project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">{zh ? "在线体验" : "Live demo"} ↗</a>}{project.download && <a href={project.download} download>{zh ? "下载项目" : "Download"} ↓</a>}</div></header>}
      {isMap ? <MapTeleportReport locale={locale} /> : projectId === "pixel-world" ? <div className="project-detail--pixel-world-review">{zh ? <PixelWorldReport /> : <PixelWorldReportEnglish />}</div> : projectId === "survival-log" ? <SurvivalLogCase locale={locale} /> : <article className="report-reader__generic">
        <section><h2>{zh ? "项目背景" : "Context"}</h2><p>{copy.context}</p></section>
        <figure><Image src={project.screenshots[0]} alt={copy.title} width={1400} height={900} unoptimized /></figure>
        <section><h2>{zh ? "需要解决的问题" : "The problem"}</h2><p>{copy.problem}</p><h2>{zh ? "我的工作" : "My role"}</h2><p>{copy.role}</p></section>
        <section><h2>{zh ? "设计与实现" : "Design and implementation"}</h2><ul>{copy.process.map(item => <li key={item}>{item}</li>)}</ul></section>
        {gallery.slice(1).map((src, index) => <figure key={src}><a href={src} target="_blank" rel="noopener noreferrer"><Image src={src} alt={`${copy.title} — ${index + 2}`} width={1400} height={900} unoptimized loading="lazy" /></a></figure>)}
        <section><h2>{zh ? "设计取舍" : "Design decisions"}</h2><ul>{copy.keyDecisions.map(item => <li key={item}>{item}</li>)}</ul><h2>{zh ? "结果" : "Outcome"}</h2><p>{copy.outcome}</p><h2>{zh ? "开发反思" : "Reflection"}</h2><ul>{copy.learned.map(item => <li key={item}>{item}</li>)}</ul></section>
      </article>}
      <footer className="report-reader__footer"><Link href="/portfolio/">← {zh ? "返回全部作品" : "All projects"}</Link><a href="#report-top">{zh ? "回到开篇 ↑" : "Back to top ↑"}</a></footer>
    </div>
  </main>;
}
