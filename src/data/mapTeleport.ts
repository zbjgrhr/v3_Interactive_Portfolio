import type { ProjectArchive } from "@/types";

export const mapTeleportWorkshops = [
  { id: "3823361659", modId: "UniversalMapTeleportSP", zh: "基础版 · 人物与动物", en: "Base edition · Characters & animals", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3823361659" },
  { id: "3822887136", modId: "UMTSPVehicleBridge", zh: "车辆与拖车版 · 独立使用", en: "Vehicle & Trailer · Standalone", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3822887136" },
] as const;

export const mapTeleportProject: ProjectArchive = {
  id: "map-teleport", title: "Map Teleport",
  category: "Project Zomboid mods · World-map interaction", period: "Independent mod series", status: "Published · Iterating",
  oneLiner: "Choose a destination on the world map and bring your character, animals or stationary convoy there.",
  context: "A two-edition Project Zomboid B42.21 mod series for single-player and multiplayer, adding independent world-map right-click teleport actions while allowing other mods' map, GPS, route, marker and cheat-menu actions to remain separately selectable.",
  problem: "Character and convoy teleportation require clear rules about who moves, what remains in place, how animal leads are restored and how connected vehicles arrive together.",
  role: "I independently developed the mods, designed their interactions, addressed compatibility issues and conducted initial multiplayer tests.",
  process: [
    "Teleport Here moves the character, carried animals and animals led by a rope, restoring their leads on arrival. While seated, the character leaves the seat and teleports; the vehicle and other passengers stay behind. Multiplayer players can use it without admin approval.",
    "In the vehicle edition, stop the convoy and choose Teleport Vehicle Here from inside the vehicle. The driver initiates multiplayer transfers; passengers, the current vehicle, connected towed vehicles and trailers, animal trailers, animals inside them, carried animals and animals led by a rope travel together.",
    "Characters arrive outside the vehicles, which park on nearby open ground. A temporary map marker shows the vehicle landing position without accumulating markers.",
    "Single-player uses direct teleportation. Multiplayer attempts direct teleportation first, then segmented transfer when network or map conditions require it. Esc ends a segmented transfer.",
    "Bind UMTSP: Teleport Here (World Map) under Options → Key Bindings → Universal Map Teleport; point at a world-map destination and press the key. Unbound by default.",
  ],
  keyDecisions: ["Keep other mod menu actions independently selectable.", "Offer two standalone editions; the vehicle edition needs no base mod or ZombieBuddy.", "Support vanilla and modded vehicles using native vehicle, towing and in-vehicle animal systems."],
  technology: ["Project Zomboid B42.21", "Lua", "World-map context menus", "Steam Workshop", "Single-player / Multiplayer"],
  challenges: ["Menu coexistence", "Restoring led animals", "Moving connected towing chains", "Different multiplayer network and map conditions"],
  outcome: "Both editions are published. Multiplayer has undergone initial testing; broader server and network feedback will inform further iterations. Servers and clients must use the same version.",
  screenshots: ["/portfolio/map-teleport/base-map-menu.png", "/portfolio/map-teleport/vehicle-map-menu.png", "/portfolio/map-teleport/menu-coexistence.png", "/portfolio/map-teleport/base-workshop.png", "/portfolio/map-teleport/vehicle-workshop.png"],
  learned: ["Clear travel boundaries matter as much as reaching the destination.", "Compatibility and multiplayer feedback require continued testing across environments."],
};

export const mapTeleportChinese = {
  title: "Map Teleport 地图传送系列", category: "游戏模组开发 · 地图交互与联机传送", period: "独立模组系列", status: "已发布 · 持续迭代",
  oneLiner: "在世界地图上选择目的地，让人物、动物或停稳的牵引车队一同抵达。",
  context: "面向《Project Zomboid》B42.21 单人及多人游戏，制作基础版与车辆拖车版两个独立模组。世界地图右键菜单加入独立传送选项，其他模组的地图、导航/GPS、路线、目的地、标记、传送及作弊菜单可同时显示、分别选择。",
  problem: "人物传送和车队传送需要清楚区分：谁会一起移动、车辆是否留在原地、动物如何恢复牵引，以及联机环境下如何抵达目的地。",
  role: "独立进行模组开发、交互设计、兼容处理及多人功能初步测试。",
  process: [
    "选择 Teleport Here，传送人物、随身携带与绳索牵引的动物，到达后恢复牵引。坐车时人物离开座位后传送，车辆及其他乘客留在原地；联机玩家无需管理员批准。",
    "车辆与拖车版中，车队停稳后在车内选择 Teleport Vehicle Here。多人游戏由驾驶员发起，乘客、当前车辆和相连牵引车队一同传送，包括被牵引车辆、拖车、动物拖车及其中的动物，携带和牵引动物随行。",
    "人物与乘客以已下车状态到达，车辆及拖车停在身边空地。地图显示车辆落点临时标记，避免留下多个标记。",
    "单人直接传送；多人优先尝试直接传送，网络或地图条件不支持时采用分段传送，按 Esc 可结束分段传送。多人功能目前已完成初步测试。",
    "备用快捷键位于 Options → Key Bindings → Universal Map Teleport，绑定 UMTSP: Teleport Here (World Map) 后，在世界地图中用鼠标指向目的地并按键；默认未绑定。",
  ],
  keyDecisions: ["保留其他模组菜单的独立可选性。", "两个版本可独立使用；车辆与拖车版不需要基础版、ZombieBuddy 或其他前置。", "兼容采用游戏原生车辆、牵引与车内动物机制的原版及模组车辆。"],
  challenges: ["右键菜单共存", "恢复动物牵引", "保持车队连接关系", "适应不同服务器和网络环境"],
  outcome: "两个版本均已发布。多人功能完成初步测试，后续将结合不同服务器和网络环境的反馈继续迭代。多人服务器与客户端须安装相同版本。",
  learned: ["传送对象和到达状态需要明确告知玩家。", "模组共存与联机表现需要在不同环境中持续检验。"],
};
