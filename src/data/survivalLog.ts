import type { ProjectArchive } from "@/types";

export const survivalLogProject: ProjectArchive = {
  id: "survival-log", title: "Survival Log · Cheat Mod",
  category: "Game mod · Inventory and Endless Mode", period: "Independent project", status: "Source archive available · Ongoing development",
  oneLiner: "An independently developed mod that restores location access, extends inventory controls and retains ongoing settings for each save.",
  context: "After completing a playthrough with every character background, I continued playing Endless Mode to collect supplies and furnish my home. I initially planned an item spawner, but the resources available in my own playthroughs led me to prioritize repeated hauling, inventory access and the loss of familiar destinations.",
  problem: "Larger inventories alone did not resolve the practical problems of long-term play. Expanded grids needed usable controls, while fallen locations and lost trading contacts reduced the places available to revisit.",
  role: "I independently designed and developed the mod, using problems encountered in my own play sessions to guide each addition.",
  process: ["I added actions to restore access to fallen locations and lost trading contacts and to replenish regional shelves. These actions preserve completed story and reward states.", "I extended backpack and storage grids, added scrolling and an optional unlimited carry-weight setting, and provided batch pickup and an alternative brewing control.", "I separated ongoing settings from one-time actions. Ongoing settings can be retained for each save; adding money or adjusting the clock does not repeat automatically."],
  keyDecisions: ["Prioritize access and inventory usability over an item spawner.", "Allow players to choose individual adjustments rather than requiring every option.", "Keep location recovery separate from story progression and reward resets."],
  technology: ["C#", "HTML / JavaScript inventory interface", "Per-save configuration", "Iteration through personal play"],
  challenges: ["Maintaining access to expanded inventories", "Recovering locations without replaying completed stories", "Restoring ongoing settings across sessions and phases"],
  outcome: "The working personal build includes regional recovery, restocking, inventory tools and optional survival adjustments. The public repository archives source files, builds and earlier iterations; it does not include private saves or personal settings backups.",
  screenshots: ["/portfolio/survival-log/regions-confirm.png", "/portfolio/survival-log/regions-map.png", "/portfolio/survival-log/inventory.png", "/portfolio/survival-log/storage-settings.png"],
  learned: ["Increasing storage capacity also requires changes to the controls that make stored items accessible.", "Personal play identified concrete design problems, although these observations do not establish usability improvements for other players."],
};

export const survivalLogChinese = {
  title: "末日生存日记 · 全能修改器", category: "游戏模组开发 · 背包交互与无尽模式", period: "独立项目", status: "源码已归档 · 持续迭代",
  oneLiner: "围绕长期存档中的地区访问与收纳问题，独立开发地区恢复、背包操作和按存档保留设置等功能。",
  context: "每个身份通关一次后，我继续在无尽模式中搜刮物资、整理收纳和布置家里。最初计划制作物品生成器，但在自己的游玩过程中，资源数量并不是最迫切的问题，因此我把开发重点转向反复搬运、背包访问和熟悉地点逐渐失联等具体不便。",
  problem: "增加背包格数并不能独自解决长期游玩中的操作问题。扩容后的界面需要让玩家继续找到物品和操作入口，而沦陷地区与失联交易点又减少了长期存档中可以重访的地点。",
  role: "我独立完成功能设计与修改器开发，并根据实际游玩中遇到的问题逐项调整。",
  process: ["增加地区与交易点恢复、货架补货功能，同时保留已经结束的剧情及奖励状态。", "扩展背包与储物格数，加入滚动查看和可选的无限负重，并补充批量拾取与酿酒操作入口。", "区分持续设置与一次性操作：按存档保留持续开关、倍率和容量设置，加钱与改时间不会自动重复执行。"],
  keyDecisions: ["暂缓物品生成器，优先改善地区访问与收纳操作。", "各项调整可按需选择，不要求玩家全部开启。", "地区恢复只处理访问与交易，不重置已结束的剧情和奖励。"],
  challenges: ["保证扩容后的物品与操作仍可访问", "恢复地区时保留已完成的剧情状态", "跨重启与游戏阶段恢复持续设置"],
  outcome: "已形成可以自用的修改器，包含地区恢复、补货、收纳工具及多项可选参数调整。公开仓库已归档源码、构建文件和历史迭代，私人存档与个人设置备份未上传。",
  learned: ["容量扩展需要与界面操作一起设计，否则新增格子仍可能难以使用。", "自己的游玩经历能够提出具体问题，但还不能据此推断其他玩家的使用效果。"],
};

export const survivalLogFeatures = {
  zh: [
    ["人物与成长", "面板支持添加金币、信念点和生存点，升满技能或调整熟练度倍率；移速可设为 1—20 倍，也可分别开启无限精力、饱腹和心态。"],
    ["物品与设施", "可保持食物新鲜，并修复能够识别原类型的腐坏物；另提供无限使用次数、建筑与家具耐久，以及植物快速成熟等选项。"],
    ["供电与酿造", "可调整发电量与电池电量，使发电机和烹饪不消耗燃料；修改器面板另设酿酒入口，供原按钮超出可见区域时使用。"],
    ["时间与探索", "可调整时间流速，将时间前移或后移一小时，或取消通行耗时；另提供探索不增加暴露值、解锁图鉴与成就等操作。"],
  ],
  en: [
    ["Character and progression", "The panel can add money, faith points and survival points, maximize skills or change skill XP multipliers. Movement speed ranges from 1× to 20×; unlimited energy, satiety and morale are separate options."],
    ["Items and facilities", "Options keep food fresh and restore spoiled items when their original type can be identified. Other controls provide unlimited item uses, building and furniture durability, and faster plant growth."],
    ["Power and brewing", "Power-generation and battery-charge options are available alongside fuel-free generators and cooking. A brewing control on the mod panel remains accessible when the original button falls outside the visible interface."],
    ["Time and exploration", "Controls adjust time speed, move the clock forward or back one hour, or remove travel time. Other actions prevent exposure gain during exploration and unlock encyclopedia entries and achievements."],
  ],
};
