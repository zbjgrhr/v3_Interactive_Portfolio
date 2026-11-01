import type { ProjectArchive } from "@/types";
import { survivalLogProject } from "./survivalLog";
import { mapTeleportProject } from "./mapTeleport";

export const projects: ProjectArchive[] = [
  survivalLogProject,
  mapTeleportProject,
  {
    id: "pixel-world",
    title: "Pixel World",
    oneLiner: "A game creation system developed from Pixel Seed, with ten agents supporting planning, review and production under creator approval.",
    category: "Multi-Agent Creation System · Playable AI Product",
    period: "Pixel Seed: Aug 2025 onward · Pixel World: Jul 2026 onward",
    status: "Live · Iterating",
    featured: true,
    context:
      "Pixel World developed from Pixel Seed, my master’s dissertation prototype. The early version demonstrated browser-based game generation but retained a fixed gameplay template and required a complete restart after generation failures. In July 2026, I began rewriting the system so that AI could contribute to planning and individual production steps could be inspected and retried.",
    problem:
      "A generated game must keep its story, mechanics, art, levels, assets, costs, and runtime rules in sync. Creators also need to see conflicts, approve high-cost generation, retry failed tasks individually, and retain ownership of the result.",
    role:
      "I designed and built the product end to end, from user research and the agent review flow to model routing, asset generation, the 2D runtime, local saves, and offline export.",
    process: [
      "Shape the title, story, level count, and firm rules into an editable GameSpec V3.",
      "Let ten agents plan across narrative, mechanics, art, levels, integration, and quality checks.",
      "Show conflicts before generation and ask for the creator's approval before spending credits.",
      "Generate assets across model platforms while keeping one visual direction within each project.",
      "Build a playable level from the approved spec, then test saving, reopening, and offline ZIP export.",
    ],
    keyDecisions: [
      "Agent output remains a proposal until the creator approves it.",
      "Agent and asset tasks can be retried independently without erasing completed work.",
      "Planning models and image models remain separate, while each project follows one locked visual direction.",
      "Completion requires a playable result that can be inspected, recovered, saved locally and exported.",
    ],
    technology: [
      "Next.js 15", "React 19", "TypeScript", "Zustand", "Multi-agent orchestration", "GameSpec V3",
      "OpenRouter", "OpenAI", "Alibaba DashScope", "Cloudflare Workers AI", "IndexedDB", "Web Audio", "Offline ZIP",
    ],
    challenges: [
      "Preserve explicit creator decisions across a ten-agent workflow.",
      "Unify regional settings, credentials, billing, and failure states across platforms.",
      "Maintain visual consistency across a large number of retryable assets.",
      "Turn generated rules and images into a stable keyboard-and-touch game.",
    ],
    outcome:
      "In the complete test conducted on 15 October 2026, ten agents completed planning in 148 seconds and generated 34 images in 298 seconds. All 72 automated tests passed, and the exported game remained playable without an internet connection.",
    screenshots: [
      "/map-preview/curated/pixel-world-01.webp",
      "/map-preview/curated/pixel-world-02.webp",
      "/map-preview/curated/pixel-world-03.webp",
      "/map-preview/curated/pixel-world-04.webp",
    ],
    github: "https://github.com/zbjgrhr/PIXEL-WORLD",
    liveDemo: "https://pixel-world-silk.vercel.app/",
    learned: [
      "A multi-agent workflow should make ownership, review order, cost, and failure visible.",
      "A generated world is not complete until it can be inspected, played, saved, and taken away.",
    ],
    metrics: [
      { value: "10", label: "specialist agents" },
      { value: "80", label: "survey responses" },
      { value: "15", label: "interviews" },
      { value: "72", label: "automated tests passed" },
    ],
  },
  {
    id: "preservative",
    title: "Preservative",
    oneLiner: "A Project Zomboid mod with configurable food preservation and poisoning alerts that explain coverage, active duration and the consequences of consumption.",
    category: "Game Mod Development · Survival Mechanics and Player Feedback",
    period: "2026 · Independent development",
    status: "Published · Targets B42.21",
    featured: true,
    context: "This project examines how food preservation affects survival choices. Slower spoilage reduces supply losses, but players also need to understand when protection applies, how long it lasts and what to do after consuming the preservative. I therefore developed the preservation rules, sandbox settings and poisoning feedback together, then prepared bilingual documentation and published the mod on Steam Workshop.",
    problem: "Protection spans character inventories, nested containers, vehicle storage and food on the ground. A general promise of longer shelf life does not explain these boundaries. Players also need to distinguish local protection from global spoilage settings and receive actionable information after accidental consumption.",
    role: "I independently designed and implemented the mod in Lua, developed its interface feedback, prepared Chinese and English documentation and visual assets, and handled publication and maintenance.",
    process: [
      "Separate local protection from global settings. A package protects perishable food belonging to its character, vehicle or container; on the ground, it protects nearby ground food on the same floor. Global preservation independently adjusts spoilage across the world.",
      "Define when protection consumes a package's active lifetime. Time is deducted only while perishable food is protected, and additional packages in the same protection domain do not increase efficiency. Sandbox settings control efficiency, active duration, spawn rate and cold-storage support.",
      "Place risk information near the relevant action. Item details show remaining protection and efficiency. Consumption starts a fatal poisoning countdown with guidance to use Lemongrass or Antibiotics; clearing the countdown may leave residual sickness.",
      "Explain use and configuration through the release page and supporting material, retaining Workshop feedback as a reference for subsequent maintenance.",
    ],
    keyDecisions: [
      "Explain local preservation efficiency and global spoilage settings separately; their percentages describe different rules.",
      "Deduct active lifetime when protection applies, rather than counting continuously from item creation.",
      "Make poisoning configurable while providing a visible countdown and a way to clear it.",
      "Distinguish preservative treatment from source-specific advice for other forms of poisoning.",
    ],
    technology: ["Project Zomboid B42.21", "Lua", "Sandbox settings", "Inventory and status UI", "Steam Workshop", "Chinese and English documentation"],
    challenges: ["Assigning nested inventories and vehicle storage to protection domains", "Distinguishing local and global preservation parameters", "Separating removal of the fatal timer from full recovery"],
    outcome: "The mod is published, and its current source archive identifies version 0.3.0. Existing Workshop screenshots record 4,431 unique visitors, 1,480 subscribers at capture and 182 favorites. These are historical observations, not live totals or evidence that the marketing analysis caused the results.",
    screenshots: ["/map-preview/curated/preservative-01.webp", "/map-preview/curated/preservative-02.webp", "/map-preview/curated/preservative-03.webp", "/map-preview/curated/preservative-04.webp"],
    liveDemo: "https://just-pxmi.upma.site/",
    learned: ["Players need the conditions, costs and exceptions of a convenience feature to make informed choices.", "Maintaining release documentation is part of development: a working feature also needs an understandable scope."],
    metrics: [
      { value: "4,431", label: "unique visitors recorded" },
      { value: "1,480", label: "subscribers at capture" },
      { value: "182", label: "favorites recorded" },
      { value: "14", label: "discussions and comments recorded" },
    ],
  },
  {
    id: "rainy-arcade",
    title: "Rainy Night Arcade",
    oneLiner: "A narrative game comprising two completed worlds, supported by optional play reports stored on the player’s device.",
    category: "Narrative Game Design · Local Player Analytics",
    period: "Jun–Sep 2026 · Independent Game",
    status: "v0.7.0 · Two Complete Worlds",
    featured: true,
    context:
      "A late-night arcade holds the worlds together without asking them to feel alike. In Block City, players piece a home back together through roads, objects, and memories. In Rain City, a broken ticket and an unreliable set of rules turn observation into the way out.",
    problem:
      "The game must preserve emotional continuity as its mechanics change, while leaving useful evidence for playtest iteration. The entire project also needs to remain statically deployable and playable offline, with no account or server required.",
    role:
      "I led the narrative, puzzle, and interaction design; set the visual direction; integrated audio; and tested the game. For v0.7, I also designed and built the local play-report system.",
    process: [
      "Give each cabinet a distinct emotional question and way of playing, within one shared rainy-night frame.",
      "Build Block City around repaired roads, remembered objects, and spatial clues.",
      "Let Rain City's false rules, looping time, and torn ticket reward careful observation.",
      "Keep anonymous counts, stage entries, hints, retries, duration, and completion status in localStorage.",
      "Let players export a four-dimensional play profile; let developers combine anonymous reports on their own device.",
    ],
    keyDecisions: [
      "State the completed scope clearly: Block City and Rain City are playable; Library City and Sea-Island City remain planned.",
      "Preserve the original story and puzzles, adding analytics only as an optional layer.",
      "Collect no names, email addresses, IP addresses, device identifiers, or raw dialogue.",
      "Reports leave the device only when the player chooses to export them; developer aggregation also happens entirely on-device.",
    ],
    technology: ["HTML", "CSS", "Vanilla JavaScript", "LocalStorage", "Web Audio", "Anonymous JSON export", "CSV aggregation", "Static hosting"],
    challenges: [
      "Keep path repair, evidence reasoning, assembly, and rule-horror within one coherent atmosphere.",
      "Let music and rain shape the reading rhythm.",
      "Draw useful feedback from local behavioral signals without overreaching into pseudo-psychological assessment.",
    ],
    outcome:
      "Block City and Rain City are playable offline, with saved progress, complete audio, and 22 regression checks. Players may export their own report; the developer view can compare anonymous reports locally.",
    screenshots: [
      "/map-preview/curated/rainy-arcade-01.webp",
      "/map-preview/curated/rainy-arcade-02.webp",
      "/map-preview/curated/rainy-arcade-03.webp",
      "/map-preview/curated/rainy-arcade-04.webp",
    ],
    liveDemo: "https://grid-wmkf.upma.site/",
    learned: [
      "A shared narrative framework can accommodate different mechanics when each world has a clearly defined narrative purpose.",
      "When data stays local, minimal, and inspectable, analytics can support design without becoming surveillance.",
    ],
    metrics: [
      { value: "2", label: "complete playable worlds" },
      { value: "128", label: "Rain City confirmation texts" },
      { value: "22", label: "regression checks" },
      { value: "0", label: "pieces of personally identifiable information" },
    ],
  },
  {
    id: "iwbtz",
    title: "I Wanna Be the Zomboy",
    oneLiner: "A challenging 2D platformer that combines traps, boss encounters and character customization in a narrative about identity and self-acceptance.",
    category: "Game Design · Hardcore 2D Platformer",
    period: "Apr–Sep 2025 · Master’s Graduation Project",
    status: "Playable Prototype · 7 Levels + 4 Boss Battles",
    featured: true,
    context:
      "Inspired by I Wanna Be the Guy and Plants vs. Zombies, this graduation project moves through childhood, school, social pressure, and self-acceptance. The game combines demanding challenges with a personal narrative: the player can rebuild the hero's appearance through DYOC rather than accept a fixed identity.",
    problem:
      "A challenging platformer requires precise controls, understandable causes of failure and responsive restarts. The project also explores how generative AI can expand character variation without making the game dependent on a network connection.",
    role:
      "I shaped the concept, story, levels, boss behavior, progression, and difficulty. I built the game in GameMaker, added AI-assisted DYOC, organized playtests, and used the findings to revise the experience.",
    process: [
      "Carry a story of outside labels and self-acceptance through seven standard levels.",
      "Build four bosses whose attack patterns grow whenever their health falls by another 25%.",
      "Implement movement, rooms, saves, settings, audio, weather effects, and the interface in GameMaker.",
      "Offer both local randomization and online AI for DYOC, with a local fallback when offline.",
      "After playtesting, shorten the text, move essential story beats into the levels, and tighten the tutorial.",
    ],
    keyDecisions: [
      "Treat restart speed and attack readability as part of difficulty design.",
      "Escalate boss phases by layering patterns, not simply increasing damage.",
      "Let randomization, AI, saves, and previews share one character-part model.",
      "AI is an optional enhancement; the offline route always remains available.",
    ],
    technology: ["GameMaker", "GML", "2D platform systems", "Boss state machines", "Particle weather", "HTTP API", "Offline fallback", "Save system"],
    challenges: [
      "Balance precision and clarity across dense traps and bullet patterns.",
      "Connect narrative progression to the mechanical difficulty curve.",
      "Make AI-generated parts compatible with the existing character-asset library.",
    ],
    outcome:
      "The playable graduation prototype has seven standard levels, four bosses, varied environments, and saved character parts. Character creation still works without a network connection.",
    screenshots: [
      "/map-preview/curated/iwbtz-01.webp",
      "/map-preview/curated/iwbtz-02.webp",
      "/map-preview/curated/iwbtz-03.webp",
      "/map-preview/curated/iwbtz-04.webp",
    ],
    learned: [
      "High difficulty feels fair only when failure is legible and control returns quickly.",
      "Customization becomes a real system when generation, validation, preview, and saving share the same data contract.",
    ],
    metrics: [
      { value: "7", label: "standard levels" },
      { value: "4", label: "boss battles" },
      { value: "15+", label: "playtesters" },
      { value: "+25%", label: "increase in willingness to keep playing after iteration" },
    ],
  },
  {
    id: "auto-tune",
    title: "Auto Tune",
    oneLiner: "A browser extension prototype for posting to three social platforms, with explicit platform-specific capabilities and limitations.",
    category: "Browser Automation · Cross-Platform Prototype",
    period: "Jun–Sep 2026 · Independent Project",
    status: "Working Prototype · Chrome / Edge",
    context:
      "Auto Tune brings X, Facebook, and Instagram into one extension while accounting for differences between their editors. Drafts remain editable in Chinese or English, posting acts on the current tab, and delayed automatic replies are available only on X.",
    problem:
      "Each platform has a different editor and page lifecycle. Product guidance must accurately describe these capabilities so that users can understand what each action will do.",
    role:
      "I defined the supported operations and their limitations, then built its shared extension core, platform adapters, local state, bilingual controls, and tests.",
    process: [
      "Share the extension's core logic while keeping each platform's page selectors in its own adapter.",
      "Show editable Chinese or English drafts before any action is taken.",
      "Use START to identify the current supported tab and submit the post.",
      "Keep AUTO REPLY specific to X, with fixed text and a random delay of 1–30 seconds.",
    ],
    keyDecisions: [
      "Clearly separate START from AUTO REPLY so the product never implies that every platform supports automatic replies.",
      "Store preferences and working state only in the local browser.",
      "State supported platforms and current limitations openly in both the interface and documentation.",
    ],
    technology: ["Chrome Extension MV3", "JavaScript", "Content scripts", "Service worker", "DOM adapters", "Local browser storage"],
    challenges: ["Platform DOM changes", "Editable-region detection", "Synchronization between background and page state", "Define responsible product boundaries for automation"],
    outcome:
      "The Chrome and Edge prototype shares posting logic across three sites, with delayed replies clearly marked as an X-only feature.",
    screenshots: [
      "/map-preview/curated/auto-tune-01.webp",
      "/map-preview/curated/auto-tune-02.webp",
      "/map-preview/curated/auto-tune-03.webp",
    ],
    github: "https://github.com/zbjgrhr/Auto_Tune",
    download: "/downloads/auto-tune-extension.zip",
    learned: [
      "Automation copy must be as precise as the capability it describes.",
      "Shared state reduces duplicate logic, but platform-specific failures still need explicit handling.",
    ],
  },
  {
    id: "study-assistant",
    title: "Literature Research Assistant",
    oneLiner: "A browser extension that links translations, highlights, notes and mind maps to their source pages.",
    category: "Browser Product · Research Workflow",
    period: "Independent Project",
    status: "Working Extension · Chrome / Edge / Firefox",
    context:
      "Reading across multiple tabs can separate translations, highlighted passages and notes from their sources. This extension keeps those actions beside the page in one isolated panel, with saved work linked back to where it began.",
    problem:
      "Highlights must survive refreshes and asynchronous DOM changes without breaking the host page. The same workflow also needs cross-browser support for local PDF, DOCX, HTML, and TXT files.",
    role:
      "I defined the reading workflow and built the extension, including its information architecture, highlight recovery, local document reader, translation routing, and cross-browser support.",
    process: [
      "Place selection, translation, highlights, saved phrases, notes, and a timer in one Shadow DOM panel.",
      "Save annotations locally with their source page, then restore them by DOM path or matching text.",
      "Watch for pages that change after loading and retry highlight restoration when needed.",
      "Support local PDF, DOCX, HTML, and TXT reading alongside page-linked mind maps.",
    ],
    keyDecisions: [
      "Isolate interface styles with Shadow DOM.",
      "Keep page changes visible and reversible.",
      "Establish stable page identities for websites, file URLs, and the local reader.",
      "Support multiple translation services instead of locking the product to one API.",
    ],
    technology: ["Chrome / Edge / Firefox extensions", "Manifest V3", "Shadow DOM", "DOM Range", "MutationObserver", "PDF.js", "Mammoth", "Local storage"],
    challenges: ["Restore highlights after nodes are replaced.", "Prevent CSS and stacking-context conflicts.", "Unify local and remote page identity.", "Maintain cross-browser builds."],
    outcome:
      "The working extension brings reading, translation, notes, focus time, local documents, and mind maps into one place, while preserving links to the source material.",
    screenshots: [
      "/portfolio/literature-installed.png",
      "/map-preview/curated/study-assistant-01.webp",
      "/portfolio/literature-reading-loop.png",
      "/map-preview/curated/study-assistant-02.webp",
      "/portfolio/literature-saved-library.png",
      "/portfolio/literature-saved-notes.png",
      "/map-preview/curated/study-assistant-03.webp",
      "/map-preview/curated/study-assistant-04.webp",
    ],
    github: "https://github.com/zbjgrhr/Literature_Research_Assistant_-",
    download: "https://github.com/zbjgrhr/Literature_Research_Assistant_-/archive/refs/heads/main.zip",
    learned: [
      "Persistence is part of the reading experience, not merely a storage problem.",
      "Browser tools earn trust when users can see, undo, and restore the changes made to a page.",
    ],
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
