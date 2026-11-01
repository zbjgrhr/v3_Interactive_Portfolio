import type { ProjectArchive } from "@/types";

export const mapTeleportWorkshops = [
  { id: "3823361659", modId: "UniversalMapTeleportSP", zh: "Right-Click Rescue · 人物与动物", en: "Right-Click Rescue · Characters and animals", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3823361659" },
  { id: "3822887136", modId: "UMTSPVehicleBridge", zh: "车辆与拖车版 · 独立安装", en: "Vehicle & Trailer · Standalone", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3822887136" },
] as const;

export const mapTeleportProject: ProjectArchive = {
  id: "map-teleport", title: "Map Teleport",
  category: "Project Zomboid mods · Map interaction and multiplayer transfer", period: "Independent mod series", status: "Released · Ongoing maintenance",
  oneLiner: "World-map teleport mods for characters and animals, with a separate option for connected vehicles and trailers.",
  context: "Map Teleport began when the developer, using some cheat mods, right-clicked a destination on the world map but could not find Teleport Here. She created Right-Click Rescue to add a separate character-teleport option, then extended the series to animals, vehicles and trailers.",
  problem: "Changing mods, adjusting their load order, or editing code and key bindings took time and sometimes changed familiar controls. The developer wanted players unfamiliar with programming to have an installable tool. Vehicle and animal transfer also address the need to return for vehicles or find animals left behind.",
  role: "The developer independently implemented the mods, designed their interactions and visual identities, investigated menu compatibility, and carried out initial multiplayer tests. She continues to revise the mods and their instructions in response to player feedback.",
  process: [
    "Right-Click Rescue adds its own Teleport Here option to the world-map context menu while retaining other map actions. Adding this separate option is not the same as repairing an option supplied by another mod; compatibility with other menu additions needs to be checked.",
    "Teleport Here moves the character and carried or rope-led animals, restoring animal leads after arrival. If used while seated, the character leaves the seat and travels alone with the supported animals. The vehicle and other passengers remain at the starting location. Multiplayer players do not need administrator approval for this action.",
    "The Vehicle & Trailer edition adds Teleport Vehicle Here. After the convoy stops, the driver initiates the multiplayer transfer from inside the vehicle. Passengers, the current vehicle and its connected towing chain travel together, including supported trailers, animal trailers and their animals. Carried and rope-led animals also travel with the player.",
    "Arrival is treated as part of the interaction. Characters and passengers arrive outside the vehicles, while vehicles and trailers are placed on nearby open ground. A temporary map marker identifies the vehicle landing position without leaving an accumulating set of markers.",
    "Single-player uses direct transfer. Multiplayer attempts direct transfer first and uses segmented transfer when required by network or map conditions. Pressing Esc stops the remaining stages without undoing movement that has already occurred. Multiplayer support has undergone initial testing and still requires feedback from a wider range of environments.",
    "An optional keyboard shortcut is available alongside the context menu. Players can bind UMTSP: Teleport Here (World Map) under Options → Key Bindings → Universal Map Teleport, then point at a destination on the open world map and press the assigned key. No key is bound by default.",
  ],
  keyDecisions: [
    "Separate character transfer from convoy transfer so that the action determines what moves and what stays behind.",
    "Distribute the Vehicle & Trailer edition as a standalone mod. Its name retains Add-on, but the current version requires neither the base mod nor ZombieBuddy.",
    "Define compatibility by the underlying systems: vanilla and modded vehicles must use the game's native vehicle, towing and in-vehicle animal mechanisms. This is not a claim of compatibility with every vehicle mod.",
  ],
  technology: ["Project Zomboid B42.21", "Lua", "World-map context menus", "Steam Workshop", "Single-player and multiplayer"],
  challenges: ["Keeping other menu actions selectable", "Restoring animal leads", "Moving connected towing chains", "Coordinating multiplayer arrival"],
  outcome: "The series has reached a released build with distinct character and convoy transfer options. The current source archives identify Right-Click Rescue as UniversalMapTeleportSP v0.5.15 and the standalone vehicle edition as UMTSPVehicleBridge v0.9.0. Multiplayer servers and clients must use matching versions. Further maintenance will focus on feedback from different server, network and vehicle configurations.",
  screenshots: ["/portfolio/map-teleport/base-map-menu.png", "/portfolio/map-teleport/vehicle-map-menu.png", "/portfolio/map-teleport/menu-coexistence.png", "/portfolio/map-teleport/base-workshop.png", "/portfolio/map-teleport/vehicle-workshop.png"],
  learned: ["A transfer feature needs to explain the state before departure and after arrival, as well as the destination. This makes its behavior easier for players to predict.", "Initial multiplayer tests can identify faults, but they cannot establish compatibility with every server or mod combination. The supported conditions need to remain explicit as the series develops."],
};

export const mapTeleportChinese = {
  title: "Map Teleport 地图传送系列", category: "游戏模组开发 · 地图交互与联机传送", period: "独立模组系列", status: "已发布 · 持续维护",
  oneLiner: "在世界地图上右键选择位置，传送人物与动物，或连同车辆和拖车一起转移。",
  context: "开发者使用一些作弊模组时，在世界地图上右键点击想去的位置，却找不到 Teleport Here。她因此制作 Right-Click Rescue，另加独立的人物传送选项，再逐步加入动物、车辆与拖车随行功能。",
  problem: "更换模组、调整加载顺序、修改代码或按键都需要花时间排查，有时还会改变操作习惯。开发者希望不熟悉编程的玩家也有可以直接安装的工具；人物离开后，还需考虑车辆和拖车如何取回、牵引动物是否会失散。",
  role: "开发者独立完成模组实现、交互规则与标识设计、菜单兼容排查和多人功能的初步测试，并根据玩家反馈持续修改功能和使用说明。",
  process: [
    "Right-Click Rescue 在世界地图右键菜单中另加 Teleport Here，同时保留其他地图操作。新增独立选项不等于修复其他模组的原选项；不同模组添加的菜单项仍需分别检查兼容性。",
    "Teleport Here 传送人物、随身携带的动物和绳索牵引的动物，到达后恢复动物牵引。坐车时使用该选项，人物先离开座位，再与支持的动物一同传送；车辆和其他乘客留在原地。多人玩家使用这项功能时，无需管理员批准。",
    "车辆与拖车版增加 Teleport Vehicle Here。车队停稳后，多人游戏由驾驶员在车内发起传送，乘客、当前车辆和相连牵引车队一同移动，包括支持的被牵引车辆、拖车、动物拖车及其中的动物；携带与绳索牵引的动物也随行。",
    "车队传送完成后，人物与乘客位于车外，车辆和拖车停放在身边空地。地图用临时标记显示车辆落点，避免传送后不断累积标记。",
    "单人游戏采用直接传送；多人游戏优先尝试直接传送，网络或地图条件需要时改用分段传送，按 Esc 可停止剩余路程，但不会撤销已经发生的移动。目前多人功能已完成初步测试，仍需结合更多环境中的反馈继续调整。",
    "除右键菜单外，模组还提供备用快捷键。玩家可在 Options → Key Bindings → Universal Map Teleport 中绑定 UMTSP: Teleport Here (World Map)，随后打开世界地图，用鼠标指向目的地并按键。快捷键默认不绑定。",
  ],
  keyDecisions: [
    "分别设置人物传送与车队传送，使玩家能根据所选操作判断哪些对象随行、哪些对象留在原地。",
    "车辆与拖车版独立发布。虽然名称保留 Add-on，当前版本无需基础模组或 ZombieBuddy。",
    "按底层机制说明兼容范围：原版及模组车辆需采用游戏原生车辆、牵引和车内动物机制，不将这一范围表述为兼容所有车辆模组。",
  ],
  challenges: ["保留其他菜单选项的可选性", "恢复动物牵引关系", "移动相连牵引车队", "协调多人到达状态"],
  outcome: "系列已形成发布版本，提供人物与车队两类传送操作。当前源码资料中，Right-Click Rescue 的模组标识为 UniversalMapTeleportSP，版本为 0.5.15；独立车辆版的标识为 UMTSPVehicleBridge，版本为 0.9.0。多人服务器与客户端须安装相同版本。后续维护将继续关注不同服务器、网络及车辆组合中的反馈。",
  learned: ["传送功能需要说明出发前和到达后的状态。玩家只有了解这些规则，才能判断操作会产生什么结果。", "初步联机测试可以发现问题，但不足以证明所有服务器与模组组合均可使用。随着功能扩展，仍需写清支持条件，并持续核查实际表现。"],
};
