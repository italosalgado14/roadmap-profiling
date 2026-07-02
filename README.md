# roadmap-profiling

## ROLE
Act as a senior career strategist and technical mentor specializing in 
long-term career planning for software engineers in the age of AI. Be 
direct, evidence-based, and honest about uncertainty. Distinguish clearly 
between data-backed claims and speculation.

## MY PROFILE
- Software Engineer with several years of professional experience
- Languages: Spanish (native), English, German
- Based in Chile (consider both the local market — mining, energy, 
  fintech — and remote/international opportunities, including the 
  DACH region given my German)
- Goal: build a durable, high-value career over the next 15 years, 
  resilient across different AI-progress scenarios

## TASK
Produce a complete career strategy document with the following sections:

### 1. THREE-HORIZON OUTLOOK
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

### 2. CAREER STYLE GUIDE
A set of durable principles (not tactics) for how I should operate as 
a professional across all scenarios, covering:
- How to choose what to work on (criteria for roles, projects, companies)
- How to build accountability, judgment, and trust as career assets
- Positioning: specialist vs. generalist, employee vs. consultant vs. 
  founder paths, local vs. remote/international
- How to leverage my trilingual profile (ES/EN/DE)
- Cadence for re-evaluating my strategy (what signals to watch)

### 3. STEM TECH LEARNING ROADMAP
A concrete, sequenced study plan (with rough timelines: 
0-12 months, 1-3 years, 3-10 years) covering:
- Mathematics: which specific areas matter most (linear algebra, 
  calculus, optimization, discrete math, formal methods) and to 
  what depth, with recommended resources
- Statistics & Probability: practical statistics, Bayesian thinking, 
  experimental design, ML-relevant theory
- AI/ML Engineering: production LLM systems, agent orchestration, 
  evaluation, MLOps — engineering-focused, not research-focused
- Security: DevSecOps, AI-generated code auditing, relevant 
  certifications worth pursuing vs. skipping
- Robotics & physical-world computing: embedded systems, control 
  theory basics, industrial automation — assess whether this is a 
  smart bet for my context (Chile: mining, energy) and how to enter it
- Systems & architecture: distributed systems, verification, 
  platform engineering
For each area: why it matters for the 15-year horizon, target depth 
(literacy / working proficiency / specialization), best learning 
resources (books, courses, projects), and how to practice it in 
real work, not just study.

### 4. DECISION FRAMEWORK
End with: (a) the single primary specialization you'd recommend I 
commit to first and why, (b) one secondary/hedge area, (c) three 
concrete actions to take in the next 90 days, and (d) the 3-5 signals 
I should monitor annually to know if the strategy needs to change.

## FORMAT
- Respond in English
- Use clear structure but favor substantive prose over bullet spam
- Be honest about uncertainty; give probability estimates where useful
- Prioritize actionability: I want a plan, not a lecture

## Content - Structure Map

A small static site that publishes my engineering learning roadmaps on GitHub
Pages. It opens with a **Career Strategy** overview (the three-horizon outlook,
career style guide, and decision framework that answer *which* path to commit to)
and then covers **four career paths**, each with an interactive curriculum graph
and a long-form roadmap:

- **Career Strategy** — the meta layer: 5/10/15-year outlook, durable career principles, and a decision framework (primary specialization, hedge, 90-day actions, annual signals) that ties the four roadmaps together.
- **Edge AI / Physical AI** — the ML/deployment career (TensorRT, Jetson, robotics, MLOps).
- **Control Systems & Robotics** — the classical / model-based control career (signals & classical control, state-space, estimation/Kalman, MPC, GNC).
- **AI Security & Trustworthy Systems** — the security career (AppSec, DevSecOps, cloud security, AI/LLM security & AI-code auditing, cryptography, governance). The scenario-robust hedge that pairs with every other path.
- **Quantum AI** — the quantum machine-learning / quantum-systems career (QM & qubits, gates & SDKs, algorithms, error correction, QML, hardware & control). A long-horizon (5–10+ year) bet.

**Live site:** <https://italosalgado14.github.io/roadmap-profiling/>

- Career Strategy: <https://italosalgado14.github.io/roadmap-profiling/#/strategy>
- Edge AI graph: <https://italosalgado14.github.io/roadmap-profiling/#/malla>
- Edge AI roadmap: <https://italosalgado14.github.io/roadmap-profiling/#/roadmap>
- Control & Robotics graph: <https://italosalgado14.github.io/roadmap-profiling/#/control-malla>
- Control & Robotics roadmap: <https://italosalgado14.github.io/roadmap-profiling/#/control-roadmap>
- AI Security graph: <https://italosalgado14.github.io/roadmap-profiling/#/security-malla>
- AI Security roadmap: <https://italosalgado14.github.io/roadmap-profiling/#/security-roadmap>
- Quantum AI graph: <https://italosalgado14.github.io/roadmap-profiling/#/quantum-malla>
- Quantum AI roadmap: <https://italosalgado14.github.io/roadmap-profiling/#/quantum-roadmap>

| Page | Route | Source |
|------|-------|--------|
| Career Strategy (landing) | `#/strategy` | [`career_strategy.md`](./career_strategy.md) |
| Edge AI — curriculum graph | `#/malla` | [`edge_ai_malla_v3.jsx`](./edge_ai_malla_v3.jsx) |
| Edge AI — full roadmap | `#/roadmap` | [`final_roadmap_reference.md`](./final_roadmap_reference.md) |
| Control & Robotics — curriculum graph | `#/control-malla` | [`control_robotics_malla.jsx`](./control_robotics_malla.jsx) |
| Control & Robotics — full roadmap | `#/control-roadmap` | [`control_robotics_roadmap.md`](./control_robotics_roadmap.md) |
| AI Security — curriculum graph | `#/security-malla` | [`ai_security_malla.jsx`](./ai_security_malla.jsx) |
| AI Security — full roadmap | `#/security-roadmap` | [`ai_security_roadmap.md`](./ai_security_roadmap.md) |
| Quantum AI — curriculum graph | `#/quantum-malla` | [`quantum_ai_malla.jsx`](./quantum_ai_malla.jsx) |
| Quantum AI — full roadmap | `#/quantum-roadmap` | [`quantum_ai_roadmap.md`](./quantum_ai_roadmap.md) |

The source files at the repo root are the **single source of truth**: one `*.jsx`
graph and one `*.md` roadmap per career, plus `career_strategy.md` for the landing
overview. The `preview-app/` directory is a thin Vite wrapper that ships them as a
web app.

### Running locally

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

### Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or `master`). The workflow at
   [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) builds
   `preview-app/` with the correct base path and publishes `dist/` to Pages.

The site will be available at
`https://<your-user>.github.io/<repo-name>/`, with the pages at
`#/strategy` (landing), `#/malla`, `#/roadmap`, `#/control-malla`,
`#/control-roadmap`, `#/security-malla`, `#/security-roadmap`,
`#/quantum-malla` and `#/quantum-roadmap`.

For this repo, that resolves to:

- <https://italosalgado14.github.io/roadmap-profiling/#/malla>
- <https://italosalgado14.github.io/roadmap-profiling/#/roadmap>
- <https://italosalgado14.github.io/roadmap-profiling/#/control-malla>
- <https://italosalgado14.github.io/roadmap-profiling/#/control-roadmap>
- <https://italosalgado14.github.io/roadmap-profiling/#/quantum-malla>
- <https://italosalgado14.github.io/roadmap-profiling/#/quantum-roadmap>

The base path is derived from the repo name at build time via the
`BASE_PATH` env var — no code change needed if you rename or fork the repo.

### Design decisions

**Reused the existing Vite scaffold.** `preview-app/` was already set up to
render `edge_ai_malla_v3.jsx` as-is. Building on top of it preserved that
integration and avoided a full rewrite.

**Two pages, not a single long scroll.** The Malla and the Markdown are
different reading modes (scan vs. deep read). Splitting them keeps the graph
above the fold on the landing page and lets the roadmap breathe with its
own typography.

**Hash routing (`HashRouter`).** GitHub Pages serves static files only, so
client-side routes like `/malla` would 404 on refresh. Hash routing
(`#/malla`) sidesteps that with zero server configuration — no `404.html`
redirect trick needed. The tradeoff (uglier URLs) is fine for a personal
reference site.

**Kept the source files at the repo root, unchanged.** The user asked to
"modify the code or generate new". I chose to leave the originals untouched
and consume them from the app:

- `edge_ai_malla_v3.jsx` is imported directly by `MallaPage.jsx`.
- `final_roadmap_reference.md` is imported as a raw string with
  Vite's `?raw` suffix and rendered with `react-markdown`.

Because the JSX lives outside `preview-app/`, it couldn't resolve its
`react` import via Node resolution during a production build. Fixed with
explicit `resolve.alias` entries in `vite.config.js` pointing `react` and
`react-dom` at the app's `node_modules` — single source of truth preserved,
no file duplication.

**Markdown rendering stack.** `react-markdown` + `remark-gfm` (tables,
task lists, strikethrough) + `rehype-highlight` + `highlight.js/github.css`.
GFM is required because the roadmap uses tables; highlighting is cheap and
future-proof in case code blocks grow.

**CSS variables shared with the Malla.** `edge_ai_malla_v3.jsx` reads CSS
custom properties like `--color-background-secondary`,
`--color-border-tertiary`, `--color-text-info`, etc. I redefined them in
`src/index.css` (with a dark-mode variant via `prefers-color-scheme`) so
the component inherits the site theme without any edits to its source.

**Replaced the Vite-template `index.css`.** The original pinned `#root` to
1126px with `text-align: center`, which fought both the Malla's horizontal
scroll container and the long-form markdown. The replacement provides an
app shell (header + nav + footer), a `.markdown` scope with a proper
typographic rhythm, and the CSS variables the Malla relies on.

**GitHub Actions via `actions/deploy-pages`.** This is the current official
path (replaces the older `gh-pages` branch pattern). `BASE_PATH` is set
from `github.event.repository.name` so forks or renames just work.

**No TypeScript, no test suite.** Scope is a two-page static site; adding
either would be overhead without payoff.

### What I did not do

- Code-splitting. The bundle is ~600 kB (~190 kB gzipped) because
  `highlight.js` ships many language grammars. For a two-page site that's
  acceptable; if it grows, lazy-load `RoadmapPage` or import only the
  needed highlight.js subset.
- Syncing progress. The Malla's checkboxes store progress in React state
  only — reload clears it. Adding `localStorage` would be a one-liner if
  that becomes useful.
- A custom domain. The workflow publishes to the default
  `<user>.github.io/<repo>` URL. Add a `CNAME` file to `preview-app/public/`
  if a custom domain is needed later.

### Project layout

```
.
├── career_strategy.md              ← source of truth (Career Strategy landing)
├── edge_ai_malla_v3.jsx            ← source of truth (Edge AI graph)
├── final_roadmap_reference.md      ← source of truth (Edge AI roadmap)
├── control_robotics_malla.jsx      ← source of truth (Control & Robotics graph)
├── control_robotics_roadmap.md     ← source of truth (Control & Robotics roadmap)
├── ai_security_malla.jsx           ← source of truth (AI Security graph)
├── ai_security_roadmap.md          ← source of truth (AI Security roadmap)
├── quantum_ai_malla.jsx            ← source of truth (Quantum AI graph)
├── quantum_ai_roadmap.md           ← source of truth (Quantum AI roadmap)
├── .github/workflows/deploy.yml    ← GitHub Pages build & deploy
├── README.md                       ← this file
└── preview-app/                    ← Vite + React wrapper
    ├── index.html
    ├── package.json
    ├── vite.config.js              ← base path, react alias, fs.allow
    └── src/
        ├── main.jsx
        ├── App.jsx                 ← HashRouter + nav + layout (strategy + four careers)
        ├── index.css               ← theme, nav, markdown styles
        ├── components/
        │   └── RoadmapView.jsx     ← shared markdown→tabs renderer
        └── pages/
            ├── StrategyPage.jsx        ← imports ../../../career_strategy.md
            ├── MallaPage.jsx           ← imports ../../../edge_ai_malla_v3.jsx
            ├── RoadmapPage.jsx         ← Edge AI roadmap (RoadmapView)
            ├── ControlMallaPage.jsx    ← imports ../../../control_robotics_malla.jsx
            ├── ControlRoadmapPage.jsx  ← Control & Robotics roadmap (RoadmapView)
            ├── SecurityMallaPage.jsx   ← imports ../../../ai_security_malla.jsx
            ├── SecurityRoadmapPage.jsx ← AI Security roadmap (RoadmapView)
            ├── QuantumMallaPage.jsx    ← imports ../../../quantum_ai_malla.jsx
            └── QuantumRoadmapPage.jsx  ← Quantum AI roadmap (RoadmapView)
```
