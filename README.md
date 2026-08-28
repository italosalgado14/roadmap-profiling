# roadmap-profiling

A small static site that publishes a set of engineering learning roadmaps on
GitHub Pages.

It is built in two layers. The **catalog** is neutral and meant to be useful to
anyone: a wide map of career options, four full curricula, and the long-form
roadmaps behind them. The **personal layer** is one overlay file on top of it,
holding one person's verdicts, priority overrides and calendar. Keeping them
apart is what lets the same curriculum carry a different opinion for every
reader, and it is why a node is rated by the discipline rather than by whoever
wrote the site.

The site opens on the wide map. Behind it sit a **Career Strategy** overview and
**four career paths**, each with an interactive curriculum graph and a long-form
roadmap:

- **Career Strategy**: the meta layer. A 5/10/15-year outlook, durable career principles, and a decision framework (primary specialization, hedge, 90-day actions, annual signals) that ties the four roadmaps together.
- **Edge AI / Physical AI**: the ML and deployment career (TensorRT, Jetson, robotics, MLOps).
- **Control Systems & Robotics**: the classical, model-based control career (signals and classical control, state-space, estimation/Kalman, MPC, GNC).
- **AI Security & Trustworthy Systems**: the security career (AppSec, DevSecOps, cloud security, AI/LLM security and AI-code auditing, cryptography, governance). The scenario-robust hedge that pairs with every other path.
- **Quantum AI**: the quantum machine-learning and quantum-systems career (QM and qubits, gates and SDKs, algorithms, error correction, QML, hardware and control). A long-horizon (5-10+ year) bet.

**Live site:** <https://italosalgado14.github.io/roadmap-profiling/>

| Page | Route | Source |
|------|-------|--------|
| The wide map (landing) | `#/options` | [`career_options.js`](./career_options.js) |
| My path (personal layer) | `#/my-path` | [`my_path.js`](./my_path.js) |
| Career Strategy | `#/strategy` | [`career_strategy.md`](./career_strategy.md) |
| Edge AI, curriculum graph | `#/malla` | [`edge_ai_malla_v3.js`](./edge_ai_malla_v3.js) |
| Edge AI, full roadmap | `#/roadmap` | [`final_roadmap_reference.md`](./final_roadmap_reference.md) |
| Control & Robotics, curriculum graph | `#/control-malla` | [`control_robotics_malla.js`](./control_robotics_malla.js) |
| Control & Robotics, full roadmap | `#/control-roadmap` | [`control_robotics_roadmap.md`](./control_robotics_roadmap.md) |
| AI Security, curriculum graph | `#/security-malla` | [`ai_security_malla.js`](./ai_security_malla.js) |
| AI Security, full roadmap | `#/security-roadmap` | [`ai_security_roadmap.md`](./ai_security_roadmap.md) |
| Quantum AI, curriculum graph | `#/quantum-malla` | [`quantum_ai_malla.js`](./quantum_ai_malla.js) |
| Quantum AI, full roadmap | `#/quantum-roadmap` | [`quantum_ai_roadmap.md`](./quantum_ai_roadmap.md) |

The files at the repo root are the **single source of truth**: one `*_malla.js`
data module and one `*.md` roadmap per career, `career_options.js` for the wide
map, `my_path.js` for the personal overlay, and `career_strategy.md` for the
strategy essay. The `preview-app/` directory is a thin Vite wrapper that ships
them as a web app, and it owns all the rendering.

## How it fits together

Content and presentation are kept apart on purpose:

- **`*_malla.js` at the root** export data only: `PHASES`, `TRACKS` and `COURSES`. No JSX, no imports, no drawing logic. Adding a topic means adding one object to `COURSES`.
- **`preview-app/src/components/CurriculumGraph.jsx`** is the single renderer for all four graphs. It owns the layout, the SVG dependency edges, the track filter, the legend, the detail panel, and the constants that are the same for every path (priority levels, node kinds).
- **`preview-app/src/components/MallaPageShell.jsx`** derives the counts shown on each page (`9 phases, 44 topics, 5 specialization tracks`) from the data itself, so a page can never describe a graph that no longer exists.
- **`preview-app/src/components/RoadmapView.jsx`** splits a roadmap `.md` into Overview / Phase / Reference tabs by reading its heading structure.
- **`preview-app/src/lib/overlay.js`** handles overlay persistence (localStorage, per graph, every access guarded) and JSON export/import.

### Catalog layer and personal layer

The split exists because the two layers answer different questions, and mixing
them made the catalog quietly wrong for everyone except its author.

**Catalog** (`career_options.js`, the `*_malla.js` modules, the roadmap `.md`
files). Neutral. A node's `priority` says how central it is to the discipline,
not how much one reader should care. Market claims are qualitative: sectors and
employer types, never salaries or market-size projections, because those cannot
be verified and dated badly.

**Personal** (`my_path.js`, plus whatever a reader keeps in their browser). One
overlay on top of the catalog:

| Field | What it does |
|-------|--------------|
| `verdicts` | `primary` / `hedge` / `ignore` per career option, each with a reason. `ignore` means considered and set aside on purpose, which is the part most roadmaps hide |
| `priorityOverrides` | Course id to priority, for the places one reader's priorities differ from the discipline's |
| `tracks` | Track ids to preselect in the graph filter |
| `done` | Completed course ids |
| `sequence` | The 12 to 18 month calendar the phases deliberately do not encode |

The wide map and the My path page both read the same overlay, so the verdict
column and the personal plan can never disagree. Progress is stored per graph in
`localStorage` and never leaves the browser. "Export my path" writes the overlay
out as JSON, and importing one back replaces the local progress, so a path is
forkable: someone else's is just a different file of the same shape.

### Curriculum data format

Each entry in `COURSES` looks like this:

```js
{ id: "MLOPS", phase: "P2", row: 1, label: "MLOps fundamentals",
  priority: "critical", kind: "spine", tracks: ["all"],
  prereqs: ["ML","DOC"],
  desc: "MLflow, experiment tracking, model serving, monitoring, CI/CD for ML.",
  res:  "Coursera: MLOps Spec, Andrew Ng | MLOps Zoomcamp (free)" },
```

| Field | Meaning |
|-------|---------|
| `id` | Short stable key, shown on the node |
| `phase` | Which phase column the node sits in |
| `row` | Row within that column. Must be `0..n-1`, no gaps, no repeats |
| `priority` | `critical`, `desirable` or `frontier` |
| `kind` | `spine` (every track), `branch` (chosen track only) or `elective` |
| `tracks` | `["all"]` for spine nodes, otherwise the track ids that need it |
| `prereqs` | Ids of nodes that must come first. May not point at a later phase |
| `desc` / `res` | Shown in the detail panel when the node is clicked |

## Checks

The data modules are data, so a bad prerequisite or two nodes stacked on the
same row is not a build error: it just renders a wrong graph. `tools/check_curriculum.py`
catches that class of mistake, and the deploy workflow runs it before the build,
so bad data cannot reach the site.

```bash
python3 tools/check_curriculum.py
```

It fails on unknown or duplicate ids, prerequisites that do not exist or sit in
a later phase, prerequisite cycles, row collisions and gaps, unknown phases,
tracks, priorities or kinds, spine/branch inconsistency, and missing `desc`/`res`.
It warns on tracks that no course uses. No dependencies beyond the standard library.

## Running locally

```bash
cd preview-app
npm install
npm run dev        # http://localhost:5173/roadmap-profiling/
```

Build locally:

```bash
BASE_PATH=/ npm run build    # build for "/" (e.g. previewing dist with any server)
npm run preview
```

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In **Settings, Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or `master`). The workflow at
   [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) validates the
   curriculum data, builds `preview-app/` with the correct base path, and
   publishes `dist/` to Pages.

The base path is derived from the repo name at build time via the `BASE_PATH`
env var, so no code change is needed if the repo is renamed or forked.

## Design decisions

**One renderer, four data modules.** The four graphs were originally four
complete copies of the same component, 431 identical lines of rendering code
differing only in a component name. That duplication had already drifted: one
page advertised "41 topics, 4 specialization tracks" for a graph that had grown
to 44 and 5. The rendering now lives once in `CurriculumGraph.jsx`, the roots
hold data only, and every count on the page is computed from that data.

**Same-column dependency edges route around the cards.** A prerequisite in the
same phase used to be drawn as a straight vertical line from the bottom of one
node to the top of another. That is only readable for adjacent rows; across a
longer gap the line ran behind every card in between and vanished. Adjacent rows
still get the short drop, longer ones curve out into the gutter.

**Highlighted edges draw above the nodes.** Clicking a node highlights its
dependency chain, but the edge layer used to sit below the cards, so exactly the
long edges that most needed highlighting stayed hidden. Unhighlighted edges are
still drawn behind the nodes to keep the graph calm; the selected chain is
rendered in a second SVG layer on top.

**The graph rates the discipline, the overlay rates the reader.** The first
version encoded one person's priorities as global `critical` tags, which is wrong
for anyone else: CUDA is not critical for every path, and an English lane is
critical only for some readers. Those two are now the worked example. The catalog
rates CUDA `desirable` (TensorRT no longer requires writing kernels) and English
`desirable`; `my_path.js` raises both to `critical`, and the graph marks any
overridden node so a personal rating is never mistaken for the catalog's.

**Hash routing (`HashRouter`).** GitHub Pages serves static files only, so
client-side routes like `/malla` would 404 on refresh. Hash routing (`#/malla`)
sidesteps that with zero server configuration, and no `404.html` redirect trick.
The tradeoff (uglier URLs) is fine for a personal reference site.

**Two pages per path, not one long scroll.** The graph and the markdown are
different reading modes (scan versus deep read). Splitting them keeps the graph
above the fold and lets the roadmap breathe with its own typography.

**Roadmap tabs are detected structurally.** `RoadmapView` used to skip the
document subtitle by matching its exact text, passed down as a prop. Renaming a
heading in the markdown silently dumped it into the Reference tab. It now
recognises the subtitle by its shape (the first `##` section with no prose of its
own), so the markdown and the app cannot drift apart.

**No syntax highlighting.** The markdown stack is `react-markdown` plus
`remark-gfm` (the roadmaps use tables). `rehype-highlight` and `highlight.js`
were also loaded, which is most of a 600 kB bundle, for a set of documents that
contain zero fenced code blocks. The imports are gone. The packages are still in
`package.json`; drop them there the next time the lockfile is regenerated. If
code blocks are ever added, re-add highlighting with an explicit, restricted
language set rather than the full grammar bundle.

**CSS variables shared with the graph.** `CurriculumGraph.jsx` reads CSS custom
properties like `--color-background-secondary` and `--color-text-info`. They are
defined in `src/index.css`, with a dark-mode variant via `prefers-color-scheme`.

**GitHub Actions via `actions/deploy-pages`.** The current official path, which
replaces the older `gh-pages` branch pattern. `BASE_PATH` is set from
`github.event.repository.name` so forks and renames just work.

**No TypeScript, no test suite.** For a site this size both would be overhead
without payoff. The curriculum validator covers the failure mode that actually
occurs here, which is bad data rather than bad types.

## What is not done

- **Overlay sharing is by file, not by URL.** Export and import round-trip a JSON overlay. Encoding one into a link fights `HashRouter` and URL length limits, so it was not built.
- **Verdict and priority edits need a file edit.** The browser owns progress and track selection; changing verdicts or priority overrides means editing `my_path.js` (or an exported overlay) directly.
- **Code-splitting.** Not needed now that `highlight.js` is out of the bundle.
- **A custom domain.** The workflow publishes to the default `<user>.github.io/<repo>` URL. Add a `CNAME` file to `preview-app/public/` if that changes.
- **ESLint over the root data modules.** `npm run lint` runs inside `preview-app/` and does not reach the repo root. Now that those files are pure data with no logic, the validator above covers what matters in them.

## Project layout

```
.
├── career_options.js               ← the wide map, catalog layer
├── my_path.js                     ← one person's overlay, personal layer
├── career_strategy.md              ← source of truth (Career Strategy essay)
├── edge_ai_malla_v3.js             ← curriculum data (Edge AI graph)
├── final_roadmap_reference.md      ← source of truth (Edge AI roadmap)
├── control_robotics_malla.js       ← curriculum data (Control & Robotics graph)
├── control_robotics_roadmap.md     ← source of truth (Control & Robotics roadmap)
├── ai_security_malla.js            ← curriculum data (AI Security graph)
├── ai_security_roadmap.md          ← source of truth (AI Security roadmap)
├── quantum_ai_malla.js             ← curriculum data (Quantum AI graph)
├── quantum_ai_roadmap.md           ← source of truth (Quantum AI roadmap)
├── tools/check_curriculum.py       ← structural checks, run in CI before the build
├── .github/workflows/deploy.yml    ← validate, build & deploy to GitHub Pages
├── README.md                       ← this file
└── preview-app/                    ← Vite + React wrapper
    ├── index.html
    ├── package.json
    ├── vite.config.js              ← base path, react alias, fs.allow
    └── src/
        ├── main.jsx
        ├── App.jsx                 ← HashRouter + nav + layout
        ├── index.css               ← theme, nav, markdown styles
        ├── lib/
        │   └── overlay.js          ← localStorage + JSON export/import
        ├── components/
        │   ├── CurriculumGraph.jsx ← the one graph renderer
        │   ├── MallaPageShell.jsx  ← graph page frame, counts + overlay
        │   └── RoadmapView.jsx     ← markdown to tabs renderer
        └── pages/
            ├── OptionsPage.jsx     ← the wide map (landing)
            ├── MyPathPage.jsx      ← the personal layer
            ├── StrategyPage.jsx
            ├── MallaPage.jsx
            ├── RoadmapPage.jsx
            ├── ControlMallaPage.jsx
            ├── ControlRoadmapPage.jsx
            ├── SecurityMallaPage.jsx
            ├── SecurityRoadmapPage.jsx
            ├── QuantumMallaPage.jsx
            └── QuantumRoadmapPage.jsx
```

## Original brief

The prompt the strategy document and the roadmaps were written against, kept for
provenance.

### ROLE
Act as a senior career strategist and technical mentor specializing in 
long-term career planning for software engineers in the age of AI. Be 
direct, evidence-based, and honest about uncertainty. Distinguish clearly 
between data-backed claims and speculation.

### MY PROFILE
- Software Engineer with several years of professional experience
- Languages: Spanish (native), English, German
- Based in Chile (consider both the local market, mining, energy, 
  fintech, and remote/international opportunities, including the 
  DACH region given my German)
- Goal: build a durable, high-value career over the next 15 years, 
  resilient across different AI-progress scenarios

### TASK
Produce a complete career strategy document with the following sections:

#### 1. THREE-HORIZON OUTLOOK
For each horizon, describe the most likely state of the software/tech 
profession, which roles and skills gain or lose value, and the key 
risks and opportunities for someone with my profile:
- 5-year view (through ~2031): grounded in current reports and data 
  (WEF Future of Jobs, PwC AI Jobs Barometer, Microsoft New Future of 
  Work, BLS projections, developer surveys). Cite sources where possible.
- 10-year view (through ~2036): reasoned extrapolation; label 
  assumptions explicitly.
- 15-year view (through ~2041): scenario-based speculation. Present 
  2-3 scenarios (e.g., plateau / orchestration era / discontinuity) 
  with rough probability weights and what each means for my strategy.

#### 2. CAREER STYLE GUIDE
A set of durable principles (not tactics) for how I should operate as 
a professional across all scenarios, covering:
- How to choose what to work on (criteria for roles, projects, companies)
- How to build accountability, judgment, and trust as career assets
- Positioning: specialist vs. generalist, employee vs. consultant vs. 
  founder paths, local vs. remote/international
- How to leverage my trilingual profile (ES/EN/DE)
- Cadence for re-evaluating my strategy (what signals to watch)

#### 3. STEM TECH LEARNING ROADMAP
A concrete, sequenced study plan (with rough timelines: 
0-12 months, 1-3 years, 3-10 years) covering:
- Mathematics: which specific areas matter most (linear algebra, 
  calculus, optimization, discrete math, formal methods) and to 
  what depth, with recommended resources
- Statistics & Probability: practical statistics, Bayesian thinking, 
  experimental design, ML-relevant theory
- AI/ML Engineering: production LLM systems, agent orchestration, 
  evaluation, MLOps, engineering-focused, not research-focused
- Security: DevSecOps, AI-generated code auditing, relevant 
  certifications worth pursuing vs. skipping
- Robotics & physical-world computing: embedded systems, control 
  theory basics, industrial automation, assess whether this is a 
  smart bet for my context (Chile: mining, energy) and how to enter it
- Systems & architecture: distributed systems, verification, 
  platform engineering
For each area: why it matters for the 15-year horizon, target depth 
(literacy / working proficiency / specialization), best learning 
resources (books, courses, projects), and how to practice it in 
real work, not just study.

#### 4. DECISION FRAMEWORK
End with: (a) the single primary specialization you'd recommend I 
commit to first and why, (b) one secondary/hedge area, (c) three 
concrete actions to take in the next 90 days, and (d) the 3-5 signals 
I should monitor annually to know if the strategy needs to change.

### FORMAT
- Respond in English
- Use clear structure but favor substantive prose over bullet spam
- Be honest about uncertainty; give probability estimates where useful
- Prioritize actionability: I want a plan, not a lecture
