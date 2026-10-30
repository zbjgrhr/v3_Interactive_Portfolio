"use client";

import Link from "next/link";
import { LanguageSwitch } from "@/components/accessibility/LanguageSwitch";
import { useUiStore } from "@/store/uiStore";
import Image from "@/components/portfolio/LocalizedImage";
import { projects } from "@/data/projects";
import { localizeProject } from "@/data/projectTranslations";
import { mapTeleportWorkshops } from "@/data/mapTeleport";
import "./portfolio.css";

export default function PortfolioDirectory() {
  const locale=useUiStore(state=>state.locale);
  const zh=locale === "zh";
  return <main className="work-directory" id="main-content">
    <header className="work-directory__header"><Link href="/" className="work-directory__brand">{zh ? "张铧心" : "Huaxin Zhang"} <span>PORTFOLIO</span></Link><nav aria-label={zh ? "作品集导航" : "Portfolio navigation"}><Link href="/map-preview/?menu=about&from=directory">{zh ? "关于我" : "About"}</Link><Link href="/map-preview/?menu=contact&from=directory">{zh ? "联系我" : "Contact"}</Link><Link href="/map-preview/">{zh ? "进入游戏版 ↗" : "Explore the map ↗"}</Link></nav><LanguageSwitch inline /></header>
    <section className="work-directory__intro"><span>{zh ? "SELECTED WORK / 全部作品" : "PROJECT REPORTS"}</span><h1>{zh ? "作品目录" : "Projects"}<span>{String(projects.length).padStart(2, "0")}</span></h1><p>{zh ? "游戏设计、AI 产品与独立开发。选择一个项目，查看介绍、在线体验或下载。" : "Game design, AI products, and independent development. Select a project to read its report, try the live demo, or access available downloads."}</p></section>
    <section className="work-directory__grid" aria-label={zh ? "全部项目" : "All projects"}>
      {projects.map((project,index)=>{const copy=localizeProject(project,locale);const concept=project.id === "study-assistant" ? "literature-research-assistant" : project.id;return <article className="work-directory__card" key={project.id}>
        <Link className="work-directory__cover" href={`/map-preview/?review=${project.id}-detail&from=directory`} aria-label={zh ? `查看${copy.title}项目详情` : `Read the ${copy.title} project report`}><Image src={`/map-preview/concepts/${concept}-card.webp`} alt={copy.title} width={720} height={405} unoptimized /><span>{zh ? "查看项目" : "View project"} <span aria-hidden="true">↗</span></span></Link>
        <div className="work-directory__meta"><span>0{index+1}</span><span>{copy.category}</span></div><h2><Link href={`/map-preview/?review=${project.id}-detail&from=directory`}>{copy.title}</Link></h2><p>{copy.oneLiner}</p>
        <div className="work-directory__actions"><Link href={`/map-preview/?review=${project.id}-detail&from=directory`}>{zh ? "查看详情 →" : "Read the report →"}</Link>{project.id === "map-teleport" && mapTeleportWorkshops.map((edition,index) => <a key={edition.id} href={edition.url} target="_blank" rel="noopener noreferrer">{zh ? (index === 0 ? "基础版" : "车辆版") : (index === 0 ? "Base edition" : "Vehicle edition")} ↗</a>)}{project.liveDemo&&<a href={project.liveDemo} target="_blank" rel="noopener noreferrer">{zh ? "在线体验 ↗" : "Live demo ↗"}</a>}{project.download&&<a href={project.download} download>{zh ? "下载项目 ↓" : "Download ↓"}</a>}{project.github&&<a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}</div>
      </article>})}
    </section><footer className="work-directory__footer"><span>{zh ? "张铧心 · 个人作品集" : "Huaxin Zhang · Portfolio"}</span><Link href="/">{zh ? "返回入口选择 ↑" : "Back to the start ↑"}</Link></footer>
  </main>;
}
