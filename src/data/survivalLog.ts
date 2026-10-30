import type { ProjectArchive } from "@/types";

export const survivalLogProject: ProjectArchive = {
  id: "survival-log", title: "Survival Log · Cheat Mod",
  category: "Game mod · Inventory & Endless Mode", period: "Independent project", status: "Personal build · In development",
  oneLiner: "A personal cheat mod shaped by long-term play: restore destinations, organize supplies, and keep settings with each save.",
  context: "After completing every character background, I continued playing Endless Mode to collect supplies and decorate my home. An item spawner was considered but deferred: inventory friction and disappearing destinations mattered more than resource scarcity.",
  problem: "Repeated hauling, controls that become inaccessible after inventory expansion, and lost trading contacts disrupt the process of collecting supplies, organizing them and furnishing the home.",
  role: "I independently designed and developed the mod, refining its features through my own play sessions.",
  process: ["Restore access to fallen locations and lost trading contacts, then replenish regional shelves repeatedly without replaying completed stories or rewards.", "Customize backpack and storage grids, add scrolling and unlimited carry weight, collect nearby items in batches and provide an accessible brewing control.", "Remember ongoing settings per save across restarts and phase changes. One-time money and clock actions do not repeat automatically."],
  keyDecisions: ["Defer an item spawner when resources are already plentiful.", "Keep convenience options individually configurable.", "Separate ongoing effects from one-time actions and future plans."],
  technology: ["Game mod development", "Inventory interface", "Per-save settings", "Play-based iteration"],
  challenges: ["Large-inventory usability", "Restoring location access without replaying story rewards", "Per-save persistence"],
  outcome: "A working personal build with regional recovery, restocking, inventory tools and optional survival adjustments. No public download is currently provided.",
  screenshots: ["/portfolio/survival-log/regions-confirm.png", "/portfolio/survival-log/regions-map.png", "/portfolio/survival-log/inventory.png", "/portfolio/survival-log/storage-settings.png"],
  learned: ["Expanding capacity also requires adapting the interface.", "Personal play can reveal concrete opportunities for better batch actions and long-save usability."],
};

export const survivalLogChinese = {
  title: "末日生存日记 · 全能修改器", category: "游戏模组开发 · 背包交互与无尽模式", period: "独立项目", status: "自用开发 · 持续迭代",
  oneLiner: "从长期游玩中的具体问题出发，制作地区恢复、背包整理与按存档保留设置等功能。",
  context: "每个身份通关一次后，我主要在无尽模式中囤货、布置家里，并持续开发 Mod。最初考虑过物品生成器，但游戏并不缺资源，因此暂缓制作，转而处理搬运、收纳和地区失联带来的不便。",
  problem: "后期反复搬运、扩容后难以访问的操作，以及逐渐失联的交易点，会打断出门搜刮、回家整理和布置家园的过程。",
  role: "独立进行功能设计、修改器开发，并结合自己的实际游玩持续调整。",
  process: ["恢复沦陷地区与失联交易点，反复补满各地区货架。只恢复访问和交易状态，已经结束的剧情与奖励不会重来。", "自定义背包和储物格数，补充滚动查看、无限负重、附近物品批量拾取及面板酿酒入口，解决扩容后的操作问题。", "按存档保留持续设置，重启或从囤货进入生存阶段后无需重新配置。加钱、调整时间等一次性操作不会自动重复。"],
  keyDecisions: ["暂缓物品生成器，优先解决实际游玩中的不便。", "功能分别开关，由玩家选择需要调整的部分。", "持续设置、一次性操作与后续计划分别说明。"],
  challenges: ["大背包的界面可用性", "恢复地区访问而不重发剧情奖励", "按存档保留设置"],
  outcome: "已形成可自用的修改器，包含地区恢复、补货、收纳工具与多项生存参数调整。目前持续迭代，暂未公开下载。",
  learned: ["扩容不只增加格子，还需要同步完善界面与操作。", "长期游玩中的具体问题，可以成为功能设计与迭代的起点。"],
};

export const survivalLogFeatures = {
  zh: [
    ["人物与成长", "添加金币、信念点、生存点；技能升满与熟练度倍率；1—20 倍移速；无限精力、饱腹与心态。"],
    ["物品与设施", "永久保鲜，修复能识别原类型的腐坏物；无限使用次数、建筑与家具耐久；植物快速成熟。"],
    ["供电与酿造", "无限发电与电池电量；发电机和烹饪不耗燃料；在修改器面板补充酿酒操作。"],
    ["时间与探索", "调整时间流速、时间加减一小时、零通行时间；探索不增加暴露值；图鉴与成就解锁。"],
  ],
  en: [
    ["Character & progression", "Money, faith and survival points; maximum skill levels and skill XP multipliers; 1–20× movement speed; unlimited energy, satiety and morale."],
    ["Items & facilities", "Permanent freshness; recover spoiled items where the original type is identifiable; unlimited item uses and building and furniture durability; faster plant growth."],
    ["Power & brewing", "Unlimited power generation and battery charge; fuel-free generators and cooking; an accessible brewing control on the mod panel."],
    ["Time & exploration", "Time speed, one-hour clock adjustments and zero travel time; no exposure gain; encyclopedia and achievement unlocks."],
  ],
};
