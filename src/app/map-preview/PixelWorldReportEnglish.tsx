import Image from "@/components/portfolio/LocalizedImage";

const assets = ["concept-cover", "case-01-prompt-spec-agents", "case-02-model-routing", "case-03-agent-config", "case-04-asset-system", "case-05-cover-particles", "case-06-generated-world", "case-07-moonshadow-level", "case-08-playable-worlds"];
const captions = [
  "Pixel World concept illustration: defining a setting, generating content and entering the resulting game.",
  "The workflow linking prompts, GameSpec and ten agents. Proposals are reviewed before asset generation.",
  "Model-provider configuration. Planning and image generation can use separate providers.",
  "Agent configuration and approval. Image generation begins only after the creator approves the proposal.",
  "Asset management and level assignments. Completed assets are retained while failed tasks can be retried individually.",
  "Cover and particle-effect design. Adapting the website background to each generated work remains a planned feature.",
  "The generated game’s entry screen and menus, showing the transition from the creation interface to the game.",
  "The Moonshadow Forest level, including the character, enemies, collectibles and game-state information.",
  "Levels with different themes, illustrating visual variation within the same production workflow.",
];
const rows = [
  ["Delivery format", "Desktop application", "Web application", "Web application and offline ZIP"],
  ["Technology", "GameMaker GML", "Next.js; single request", "Next.js; multiple agents"],
  ["Data storage", "Local save files", "localStorage", "IndexedDB; recovery after refresh"],
  ["Offline capability", "Offline character customization", "Network connection required", "Fully offline play"],
  ["AI responsibilities", "Character-part generation", "Four asset categories", "Planning, review and image quality checks by ten agents"],
  ["Model access", "One image API", "Three image providers", "Eight platforms and five local-model options"],
  ["Visual consistency", "Character-part templates", "Separate prompts; automatic background removal", "Reference images; one image model per batch; faulty-frame checks"],
  ["Human control", "Local random-generation fallback", "Regenerate individual images", "Approval gate; per-item retries in the asset workshop"],
  ["Gameplay", "Precision platforming; bullet-pattern bosses", "Fixed side-scrolling template", "Melee and ranged combat; collection; bosses across multiple levels"],
  ["Narrative", "Four-part coming-of-age story", "None", "GameSpec-defined setting and story quests"],
  ["Dynamic difficulty", "Weighted adjustment across three tiers", "None", "Planned"],
  ["Level construction", "Seven hand-designed levels", "One to ten procedurally arranged levels", "Multiple levels driven by GameSpec"],
  ["Asset production", "All assets self-produced", "AI-generated", "Ten AI-generated categories; uploaded replacements supported"],
  ["Cost per generation run", "No generation fees", "Usage-based billing", "USD 0.945 in a recorded run"],
  ["Getting started", "Download and install", "User-supplied API key required", "Start without configuring an API key"],
  ["Evaluation", "Two playtest rounds; more than 85 participants", "Small-scale trials", "80 questionnaires; 15 interviews; 72 automated tests"],
];

export default function PixelWorldReportEnglish() {
  const figure = (index: number) => <figure key={index}>
    <a href={`/portfolio/pixel-world-${assets[index]}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge: ${captions[index]}`}><Image src={`/portfolio/pixel-world-${assets[index]}.png`} alt={captions[index]} width={1600} height={1000} unoptimized loading="lazy" /></a>
    <figcaption>Figure {index + 1}. {captions[index]}</figcaption>
  </figure>;
  return <article className="pixel-report" lang="en" aria-label="Pixel World project report">
    <header className="pixel-report__opening"><span>Independent project report <i>/</i> <time dateTime="2026-10-28">28 October 2026</time></span>
      <h2>From <span>IWBTZ</span> to <span>Pixel World</span></h2>
      <p className="pixel-report__lead">How can players without programming or drawing skills create a game they can actually play? This question has guided three generations of my work: IWBTZ, Pixel Seed and Pixel World.</p>
      <p>This work began in April 2025. In IWBTZ, I experimented with incorporating AI-generated character parts into a game. For Pixel Seed, my master’s dissertation project, I brought asset generation and gameplay together in a web application. With Pixel World, I introduced ten agents to support planning, review and production. The limitations of each version informed the next.</p>
      <p>Drawing on development records, playtest feedback and screenshots, this report traces the three projects, explains the reasons for each revision and describes the results obtained so far.</p>
      <ol className="pixel-report__generations" aria-label="Three generations of development">
        <li><small>Generation 1 · April 2025</small><strong>IWBTZ</strong><span>Independent game and AI character customization</span></li>
        <li><small>Generation 2 · August 2025</small><strong>Pixel Seed</strong><span>Web-based generation and immediate play</span></li>
        <li><small>Generation 3 · July 2026</small><strong>Pixel World</strong><span>Multi-agent game creation system</span></li>
      </ol>
    </header>
    <nav className="pixel-report__contents" aria-label="Report contents">{[["origin", "Origins"], ["seed", "Web prototype"], ["workflow", "Workflow"], ["access", "Access"], ["validation", "Evaluation"], ["comparison", "Comparison"], ["research", "Future research"]].map(([id, title], index) => <a href={`#pw-report-${id}`} key={id}><small>0{index + 1}</small>{title} ↘</a>)}</nav>
    {figure(0)}
    <section id="pw-report-origin"><span className="pixel-report__number">01 / ORIGINS</span><h2>Limitations encountered while developing IWBTZ</h2>
      <p>My decision to make games grew out of a longstanding interest in playing them. Plants vs. Zombies showed me how strategy and humor can work together, while the I Wanna Be the Guy series demonstrated the precision and fairness that demanding action games require. From April to September 2025, I developed IWBTZ in GameMaker Studio 2, combining these influences and producing the character designs, background music and story myself.</p>
      <p>IWBTZ contains seven regular levels and four boss battles. Its central theme, refusing to be defined by others, unfolds through four stages: childhood, education, social pressure and self-acceptance. On my master’s supervisor’s advice, I added a difficulty system based on death count, completion time and hits taken, alongside AI-generated character customization. A local random-generation fallback allows character customization without an internet connection.</p>
      <p>Two playtest rounds involved more than 85 participants in total. In the first round, over 70% skipped the tutorial and nearly 30% missed important story content. I moved essential narrative material into the main levels, shortened the text and conducted a second round. Tutorial completion rose from approximately 28% to approximately 60%, while participation in continued play increased by approximately 25%. These findings informed further changes to narrative and challenge pacing and prompted me to examine the production tools themselves.</p>
      <h3>Inconsistent animation frames and limited API integration</h3>
      <p>A complete jump animation required four images, but AI-generated characters varied in size and position between frames. Played in sequence, they produced visible jitter; some animations also caused the character to pass through walls. GameMaker’s limited support for external API calls made further model-dependent features difficult to implement within the engine. I subsequently tested scene editing, frame alignment and collision debugging in Unity, but both limitations remained. I therefore began looking for a runtime environment that made AI services easier to integrate.</p>
    </section>
    <section id="pw-report-seed"><span className="pixel-report__number">02 / WEB PROTOTYPE</span><h2>Pixel Seed demonstrated the feasibility of web-based game generation</h2>
      <p>The rationale for moving to the web was straightforward: a browser could call different AI APIs, players could open a link to play, and generated assets no longer needed to be imported manually. Pixel Seed began on 30 August 2025, and its first playable version was completed on 23 September. Across eight development days and 48 code commits, I implemented a workflow from a theme prompt through character and scene generation, automatic background removal and immediate play, supporting one to ten levels. This version became the main subject of my master’s dissertation.</p>
      <p>The prototype had two clear limitations. AI generated the artwork, but gameplay still followed a fixed side-scrolling platformer template. All assets were generated through a single request, which could not be paused; a failure at any stage required the entire process to restart. Further development therefore required AI involvement in defining game rules, as well as a generation process divided into inspectable, repeatable steps.</p>
      <div className="pixel-report__timeline">{[["2025.08.30", "Pixel Seed development begins"], ["2025.09.23", "Playable prototype completed; forms the main dissertation project"], ["2026.06.07", "Source code released and application deployed on Vercel"], ["2026.07.09", "Three image-generation providers integrated"], ["2026.07.16", "PIXEL-WORLD repository created; rewrite begins"], ["2026.07.24", "Ten-agent production studio introduced"], ["2026.09.28", "API-key-free entry and local-model support introduced"], ["2026.10.28", "Narrative engine upgraded; development continues"]].map(([date, text]) => <div key={date}><time>{date}</time><p>{text}</p></div>)}</div>
    </section>
    <section id="pw-report-workflow"><span className="pixel-report__number">03 / WORKFLOW</span><h2>Ten agents work sequentially from a shared specification</h2>
      <p>When the rewrite began in July 2026, Pixel World’s scope expanded from asset generation to complete game generation. I introduced GameSpec V3 as a shared specification for the setting, mechanics, levels and asset constraints, giving all ten agents a common basis for their work.</p>
      <p>The agents take responsibility, in sequence, for direction, narrative, mechanics, art, level design, integration, review, revision, asset coordination and final playtesting and acceptance checks. Proposals are reviewed before the creator approves them; image-generation credits are consumed only after approval. This allows the creator to examine the story, rules and level plan before asset production begins.</p>
      {figure(1)}{figure(3)}
      <h3>Individual assets can be regenerated using a shared character reference</h3>
      <p>The asset workshop supports per-item regeneration, so a failed task does not require completed work to be discarded. To reduce differences between character animations, subsequent poses use the standing image as a reference, each batch uses one image model, and generated frames are checked for defects. Creators can also upload their own replacement assets.</p>
      {figure(4)}
      <p>The approved specification continues to guide level construction and game execution. The following images document the transition from the production interface to game entry, menus and playable levels, allowing the system’s output to be examined alongside the resulting game.</p>
      {figure(6)}{figure(7)}{figure(8)}
    </section>
    <section id="pw-report-access"><span className="pixel-report__number">04 / ACCESS</span><h2>Questionnaires and interviews informed an API-key-free entry route</h2>
      <p>Across 80 questionnaires and 15 interviews, several respondents identified API key setup as an initial barrier; some stopped trying the application while applying for a key. In response, I added an entry route that requires no API key. New users can start with built-in pixel assets, browser-based WebLLM or local models accessed through Ollama.</p>
      <p>When external services are needed, planning and image generation can be configured with separate model providers. Projects are stored locally in IndexedDB and can be recovered after a page refresh. Completed games can also be exported as an offline ZIP and played after extraction. Users can therefore continue creating in the browser or retain a local copy of their work.</p>
      {figure(2)}
    </section>
    <section id="pw-report-validation"><span className="pixel-report__number">05 / EVALUATION</span><h2>Resolving deployment failures and completing a full run</h2>
      <p>After cloud deployment, the generation workflow repeatedly stopped at step six. Investigation showed that the server allowed 32 seconds per step, whereas an individual language-model step often took between 15 and 100 seconds. After I increased the limit to 150 seconds, all ten steps completed.</p>
      <p>A separate complete run submitted 52 image-generation tasks: 51 succeeded and one failed, yet the resulting game remained playable. In this recorded case, an individual image failure did not interrupt the entire production process. The run also provided a practical case for further examination of per-task retries and failure handling.</p>
      <h3>End-to-end test on 15 October 2026</h3>
      <div className="pixel-report__results">{[["148 seconds", "Planning completed by ten agents"], ["298 seconds", "34 images generated"], ["72 tests", "All automated tests passed"], ["USD 0.945", "Cost of one run recorded in the report"]].map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
      <p>The test progressed from a one-sentence premise to a playable level, and the exported game remained functional without an internet connection. The timings refer to this end-to-end test; the cost comes from a single-run record in the report. These figures describe the recorded conditions and should not be interpreted as guarantees across models, themes or level counts.</p>
    </section>
    <section id="pw-report-comparison"><span className="pixel-report__number">06 / COMPARISON</span><h2>Each generation addressed a different part of the problem</h2>
      <p>IWBTZ gave me experience in level design, narrative and player feedback. Pixel Seed demonstrated the feasibility of generating games in a browser. Pixel World extended this work into a multi-agent production process and began testing duration, cost and failure handling under actual deployment conditions. The table preserves the original report’s comparison across 16 dimensions.</p>
      <div className="pixel-report__table" role="region" aria-label="Comparison of three project generations; scroll horizontally" tabIndex={0}><table><thead><tr>{["Dimension", "IWBTZ", "Pixel Seed", "Pixel World"].map(v => <th key={v} scope="col">{v}</th>)}</tr></thead><tbody>{rows.map(([label, ...cells]) => <tr key={label}><th scope="row">{label}</th>{cells.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
      <p className="pixel-report__note">Comparison current as of 28 October 2026. Dynamic difficulty is implemented in IWBTZ but remains planned for Pixel World. Evaluation methods and participant counts differ between projects and should not be pooled for direct comparison.</p>
    </section>
    <section id="pw-report-research"><span className="pixel-report__number">07 / FUTURE RESEARCH</span><h2>Maintaining creator control and consistency in generated content</h2>
      <p>These three generations have helped define a question I want to investigate over the longer term: how can multi-agent game generation produce results that remain controllable and internally consistent? This includes keeping narrative, mechanics, art and cost aligned with a shared specification; making generation inspectable and recoverable under the creator’s control; and adapting content and challenge to player behavior.</p>
      <p>At the report’s latest update, Pixel World’s most recent completed change was a narrative-engine upgrade. A community for sharing games and website backgrounds that adapt to each work are planned. Dynamic difficulty is the next research priority: I want to extend IWBTZ’s weighted three-tier adjustment toward continuous adaptation based on player behavior data.</p>
      <p>The work to date draws primarily on independent development, playtest feedback and engineering tests. I hope to build on this through formal research training, using controlled comparisons and academic analysis to investigate the questions raised by these projects and develop findings that can be tested.</p>
      {figure(5)}
    </section>
    <section className="pixel-report__archive"><h2>Additional interface and gameplay records</h2><p>The following images provide supplementary views of the production workflow, model configuration and gameplay discussed above.</p>
      {[1, 2, 3, 4].map(index => <figure key={index}><a href={`/map-preview/curated/pixel-world-0${index}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge supplementary image ${index}`}><Image src={`/map-preview/curated/pixel-world-0${index}.webp`} alt={`Pixel World supplementary image ${index}`} width={1600} height={1000} unoptimized loading="lazy" /></a><figcaption>Supplementary image {index}. Pixel World development and presentation record.</figcaption></figure>)}
    </section>
    <footer className="pixel-report__source">Source: Three-Generation Project Report, 28 October 2026. The report draws on independent development records, playtest statistics and public repository commit histories.</footer>
  </article>;
}
