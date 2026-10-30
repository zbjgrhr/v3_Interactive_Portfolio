import Image from "@/components/portfolio/LocalizedImage";

const assets = [
  "concept-cover", "case-01-prompt-spec-agents", "case-02-model-routing",
  "case-03-agent-config", "case-04-asset-system", "case-05-cover-particles",
  "case-06-generated-world", "case-07-moonshadow-level", "case-08-playable-worlds",
];
const captions = [
  "Pixel World 概念图，呈现输入设定、生成内容与进入游戏的创作过程。",
  "提示词、GameSpec 与十个 Agent 的工作流程。各项方案在生成素材前接受审查。",
  "模型平台选择界面。文字策划与图片生成可以分别配置。",
  "Agent 配置与审批界面。创作者确认方案后，系统才开始生成图片。",
  "素材系统与关卡分配界面。已完成的内容可以保留，失败任务可以单独重试。",
  "封面与粒子效果设计图。网页主题背景随作品变化仍列入后续计划。",
  "生成游戏的入口与菜单，展示从制作界面进入作品的过程。",
  "月影森林关卡画面，包含角色、敌人、收集物和游戏状态信息。",
  "不同主题的关卡画面，用于展示同一制作流程下的视觉变化。",
];
const rows = [
  ["运行形式", "本机客户端", "网页", "网页与离线 ZIP"],
  ["技术栈", "GameMaker GML", "Next.js 单请求", "Next.js 多 Agent"],
  ["数据保存", "本地存档", "localStorage", "IndexedDB、刷新恢复"],
  ["离线能力", "断网可定制角色", "依赖网络", "完整离线运行"],
  ["AI 职责", "角色部件生成", "四类素材生成", "十 Agent 策划、评审、图片质检"],
  ["模型接入", "单一图片接口", "三家图像平台", "八个平台、五种本地模型"],
  ["画风一致性", "部件模板约束", "提示词隔离、自动抠图", "参考图、单模型锁定、坏帧检查"],
  ["人工控制", "本地随机兜底", "单张重新生成", "批准门、素材工坊逐项重试"],
  ["玩法", "高难跳跃、弹幕 Boss", "固定横版模板", "近战、远程、收集、多关卡 Boss"],
  ["叙事", "四段成长主线", "无", "GameSpec 世界观、剧情任务"],
  ["动态难度", "三档加权调节", "无", "规划中"],
  ["关卡来源", "手工设计 7 关", "程序排布 1 至 10 关", "GameSpec 驱动多关卡"],
  ["素材制作", "全部自制", "AI 生成", "AI 生成十类、支持上传替换"],
  ["单次生成成本", "无生成费用", "按量计费", "实测 0.945 美元"],
  ["上手门槛", "下载安装", "需自备 API Key", "免配置直接开始"],
  ["验证方式", "两轮 85 人以上试玩", "小规模试用", "80 份问卷、15 场访谈、72 项自动化测试"],
];

export default function PixelWorldReport() {
  const figure = (index: number) => <figure key={index}>
    <a href={`/portfolio/pixel-world-${assets[index]}.png`} target="_blank" rel="noopener noreferrer" aria-label={`放大查看：${captions[index]}`}>
      <Image src={`/portfolio/pixel-world-${assets[index]}.png`} alt={captions[index]} width={1600} height={1000} unoptimized loading="lazy" />
    </a><figcaption>图 {index + 1}　{captions[index]}</figcaption>
  </figure>;
  return <article className="pixel-report" aria-label="Pixel World 项目报告">
    <header className="pixel-report__opening"><span>独立项目报告 <i>／</i> <time dateTime="2026-10-28">2026.10.28</time></span>
      <h2>从 <span>IWBTZ</span> 到 <span>Pixel World</span></h2>
      <p className="pixel-report__lead">不会编程、不会画画的玩家，怎样做出一个真正可玩的游戏？从 IWBTZ 到 Pixel Seed，再到 Pixel World，我的三代作品始终围绕这个问题展开。</p>
      <p>这段探索始于 2025 年 4 月。制作 IWBTZ 时，我尝试把 AI 生成的角色部件放进游戏；在硕士毕业设计 Pixel Seed 中，我把素材生成与游戏运行接到网页上；到了 Pixel World，我开始让十个 Agent 参与策划、评审与制作。每一代留下的问题，都成为下一次改动的起点。</p>
      <p>本报告结合开发记录、试玩反馈和实际画面，梳理三代作品的迭代过程，说明我为什么改、怎样改，以及目前取得了哪些结果。</p>
      <ol className="pixel-report__generations" aria-label="三代作品演进">
        <li><small>第一代 · 2025.04</small><strong>IWBTZ</strong><span>独立游戏与 AI 角色定制</span></li>
        <li><small>第二代 · 2025.08</small><strong>Pixel Seed</strong><span>网页端生成与即时游玩</span></li>
        <li><small>第三代 · 2026.07</small><strong>Pixel World</strong><span>多智能体游戏创作系统</span></li>
      </ol>
    </header>
    <nav className="pixel-report__contents" aria-label="报告目录">
      {[["origin", "开发起点"], ["seed", "网页原型"], ["workflow", "制作流程"], ["access", "使用门槛"], ["validation", "实测记录"], ["comparison", "三代对照"], ["research", "后续研究"]].map(([id, title], index) => <a href={`#pw-report-${id}`} key={id}><small>0{index + 1}</small>{title} ↘</a>)}
    </nav>
    {figure(0)}
    <section id="pw-report-origin"><span className="pixel-report__number">01 / 开发起点</span><h2>制作 IWBTZ 时遇到的限制</h2>
      <p>做游戏的想法来自长期的热爱。《植物大战僵尸》让我看到策略玩法和幽默表达可以同时成立，I Wanna Be the Guy 系列让我体会到高难度动作游戏的精确与公平。2025 年 4 月至 9 月，我使用 GameMaker Studio 2 制作了 IWBTZ，把这两条脉络接到一起，并独立完成角色形象、背景音乐和故事。</p>
      <p>IWBTZ 包含 7 个常规关卡和 4 场 Boss 战，以“拒绝被定义”为主题，按童年、求学、社会压力、自我和解四个阶段展开。在硕士导师的建议下，我加入了根据死亡次数、通关时间和受击次数调节难度的系统，以及 AI 角色部件定制功能。断网时，玩家仍可使用本地随机生成完成角色定制。</p>
      <p>两轮试玩合计 85 人以上。首轮中，教程跳过率超过 70%，近三成玩家漏掉关键剧情。我把必要剧情迁入正式关卡、压缩文本长度，再组织第二轮试玩，教程完成率由约 28% 提升至约 60%，续关参与率提高约 25%。这些反馈让我继续调整叙事与挑战的安排，也促使我检查制作工具本身的限制。</p>
      <h3>动作帧不一致，外部接口也难以接入</h3>
      <p>一个完整的跳跃动作需要四张图片，但 AI 每次生成的角色大小和位置都不相同，连续播放时会出现明显抖动，部分动作还会让角色穿过墙壁。与此同时，GameMaker 调用外部接口的能力有限，更多依赖模型服务的功能很难在引擎内部完成。我随后在 Unity 中尝试场景编辑、动作帧对齐和碰撞调试，这两类限制依然存在。因此，我开始寻找更容易接入 AI 接口的运行环境。</p>
    </section>
    <section id="pw-report-seed"><span className="pixel-report__number">02 / 网页原型</span><h2>Pixel Seed 验证了网页端生成游戏的可行性</h2>
      <p>选择网页端的原因很直接：浏览器可以调用各类 AI 接口，玩家打开链接就能玩，素材从生成到进入游戏不再需要手工导入。Pixel Seed 于 2025 年 8 月 30 日立项，9 月 23 日完成第一个可玩版本。八个开发日内，我提交了 48 次代码，完成从输入主题、生成角色和场景素材、自动抠图到立即游玩的流程，并支持 1 至 10 个关卡。这个版本后来成为我的硕士毕业论文主体。</p>
      <p>原型也留下了两个明确的问题：AI 只负责生成美术素材，玩法仍是固定的横版跳跃模板；全部素材由一次请求生成，中途无法暂停，任一步失败都只能整体重来。要继续推进，就需要让 AI 参与游戏规则的制定，也需要把生成过程拆成可以检查和重新执行的步骤。</p>
      <div className="pixel-report__timeline">
        {[["2025.08.30", "Pixel Seed 立项"], ["2025.09.23", "完成可玩原型，成为硕士论文主体"], ["2026.06.07", "开源并部署至 Vercel"], ["2026.07.09", "接入三家图像生成平台"], ["2026.07.16", "另建 PIXEL-WORLD 仓库，开始重写"], ["2026.07.24", "十 Agent 制作工作室"], ["2026.09.28", "免配置入口与本地模型"], ["2026.10.28", "完成叙事引擎升级，继续迭代"]].map(([date, text]) => <div key={date}><time>{date}</time><p>{text}</p></div>)}
      </div>
    </section>
    <section id="pw-report-workflow"><span className="pixel-report__number">03 / 制作流程</span><h2>十个 Agent 按同一份规格依次工作</h2>
      <p>2026 年 7 月开始重写后，Pixel World 的目标从生成素材升级为生成完整游戏。我使用 GameSpec V3 统一世界观、玩法、关卡和素材约束，让十个 Agent 按照同一份规格工作。</p>
      <p>十个 Agent 依次承担导演、叙事、玩法、美术、关卡、整合、评审、修订、素材统筹与试玩验收工作。方案先接受审查，再由创作者批准；只有确认之后，系统才开始消耗图片生成额度。这使创作者能够在素材制作前检查故事、规则与关卡安排，而不是等全部生成后再发现问题。</p>
      {figure(1)}{figure(3)}
      <h3>素材可以逐项重做，角色动作参考同一张站立图</h3>
      <p>素材工坊支持逐项重新生成，失败任务不必连同已完成的内容一起推倒重来。为减少角色动作之间的差异，后续动作以站立图为参考，同一批次锁定同一个图片模型，并检查生成的坏帧。创作者也可以上传素材替换生成结果。</p>
      {figure(4)}
      <p>获批的规格继续用于关卡制作与游戏运行。下面的图片保留了从制作界面进入游戏、查看菜单，再到关卡游玩的过程，便于对照系统输出与实际画面。</p>
      {figure(6)}{figure(7)}{figure(8)}
    </section>
    <section id="pw-report-access"><span className="pixel-report__number">04 / 使用门槛</span><h2>免配置入口来自问卷与访谈中的具体问题</h2>
      <p>在 80 份问卷和 15 场访谈中，多位受访者首先提到 API Key 配置造成的障碍，部分受访者在申请密钥的过程中中止了体验。为此，我增加了免配置入口：新用户可以使用内置像素素材、浏览器端 WebLLM 或 Ollama 本地模型直接开始，无需申请密钥。</p>
      <p>需要调用外部服务时，文字策划与图片生成可以分别选择模型平台。项目保存在本地 IndexedDB 中，并支持刷新恢复；生成完成后，还可以导出离线 ZIP，解压即可游玩。这样，用户既可以在网页中继续制作，也可以把完成的作品留在本地。</p>
      {figure(2)}
    </section>
    <section id="pw-report-validation"><span className="pixel-report__number">05 / 实测记录</span><h2>从部署中断到完整运行</h2>
      <p>云端部署后，生成流程曾多次在第六步中断。排查发现，服务器为每个步骤设置的运行时限是 32 秒，而大模型完成单个步骤经常需要 15 至 100 秒。把时限调整为 150 秒后，十个步骤全部通过。</p>
      <p>另一次完整运行提交了 52 项图片生成任务，51 项成功、1 项失败，最终生成的游戏仍可正常运行。这次记录说明，个别图片生成失败没有导致整次制作中断；它也为继续检查局部重试和失败处理提供了实际案例。</p>
      <h3>2026 年 10 月 15 日完整实测</h3>
      <div className="pixel-report__results">{[["148 秒", "十个 Agent 完成策划"], ["298 秒", "生成 34 张图片"], ["72 项", "自动化测试全部通过"], ["0.945 美元", "报告记录的单次生成成本"]].map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
      <p>此次实测从一句话设定推进到可玩关卡，导出的游戏在断网后仍可正常运行。上述用时来自这一次完整实测，生成成本来自报告中的单次记录；它们用于说明当时的运行情况，不代表所有模型、主题和关卡规模下都会得到相同结果。</p>
    </section>
    <section id="pw-report-comparison"><span className="pixel-report__number">06 / 三代对照</span><h2>三代作品各自完成了一步</h2>
      <p>IWBTZ 让我积累了关卡、叙事和玩家反馈方面的经验；Pixel Seed 验证了网页端生成游戏的可行性；Pixel World 则把这些问题推进到多 Agent 制作流程，并开始检验真实部署条件下的用时、成本与失败处理。下表按原报告的 16 个维度保留三代差异。</p>
      <div className="pixel-report__table" role="region" aria-label="三代作品功能对照，可横向滚动" tabIndex={0}><table><thead><tr>{["对比维度", "IWBTZ", "Pixel Seed", "Pixel World"].map(v => <th key={v} scope="col">{v}</th>)}</tr></thead><tbody>{rows.map(([label, ...cells]) => <tr key={label}><th scope="row">{label}</th>{cells.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
      <p className="pixel-report__note">对照内容截至 2026 年 10 月 28 日。动态难度在 IWBTZ 中已实现，在 Pixel World 中仍为规划功能；不同项目的测试方式与参与人数也不能直接合并比较。</p>
    </section>
    <section id="pw-report-research"><span className="pixel-report__number">07 / 后续研究</span><h2>让生成结果可控，并保持内容一致</h2>
      <p>三代迭代让我确认了一个希望长期研究的问题：多 Agent 协作生成游戏内容时，怎样让结果既可控又一致。具体而言，故事、玩法、美术与成本怎样在同一份规格下保持一致；生成过程怎样做到可检查、可恢复，并始终由创作者掌控；又怎样依据玩家行为调整内容和挑战难度。</p>
      <p>截至本报告更新时，Pixel World 最新完成的是叙事引擎升级。作品分享社区与网页主题背景随作品变化已列入计划。动态难度是下一阶段的研究重点，我希望在 IWBTZ 三档加权调节的基础上，继续探索依据玩家行为数据连续调节的方法。</p>
      <p>这些实践目前主要来自独立开发、试玩反馈与工程测试。我希望进一步接受规范的科研训练，通过对照实验和学术论证，检验三代作品中留下的问题，并逐步形成可验证的研究成果。</p>
      {figure(5)}
    </section>
    <section className="pixel-report__archive"><h2>补充界面与画面记录</h2><p>以下图片补充展示制作流程、模型配置与游戏画面，供读者结合前文查看。</p>
      {[1, 2, 3, 4].map(index => <figure key={index}><a href={`/map-preview/curated/pixel-world-0${index}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`放大查看补充图片 ${index}`}><Image src={`/map-preview/curated/pixel-world-0${index}.webp`} alt={`Pixel World 原有补充图片 ${index}`} width={1600} height={1000} unoptimized loading="lazy" /></a><figcaption>补充图 {index}　Pixel World 制作与展示记录</figcaption></figure>)}
    </section>
    <footer className="pixel-report__source">资料来源：《三代作品项目报告》（2026 年 10 月 28 日）。报告数据来自独立开发记录、试玩统计与公开仓库提交记录。</footer>
  </article>;
}
