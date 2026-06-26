# roadmap-profiling

A small static site that publishes my engineering learning roadmaps on GitHub
Pages. It now covers **three career paths**, each with an interactive curriculum
graph and a long-form roadmap:

- **Edge AI / Physical AI** — the ML/deployment career (TensorRT, Jetson, robotics, MLOps).
- **Control Systems & Robotics** — the classical / model-based control career (signals & classical control, state-space, estimation/Kalman, MPC, GNC).
- **Quantum AI** — the quantum machine-learning / quantum-systems career (QM & qubits, gates & SDKs, algorithms, error correction, QML, hardware & control). A long-horizon (5–10+ year) bet.

**Live site:** <https://italosalgado14.github.io/roadmap-profiling/>

- Edge AI graph: <https://italosalgado14.github.io/roadmap-profiling/#/malla>
- Edge AI roadmap: <https://italosalgado14.github.io/roadmap-profiling/#/roadmap>
- Control & Robotics graph: <https://italosalgado14.github.io/roadmap-profiling/#/control-malla>
- Control & Robotics roadmap: <https://italosalgado14.github.io/roadmap-profiling/#/control-roadmap>
- Quantum AI graph: <https://italosalgado14.github.io/roadmap-profiling/#/quantum-malla>
- Quantum AI roadmap: <https://italosalgado14.github.io/roadmap-profiling/#/quantum-roadmap>

| Page | Route | Source |
|------|-------|--------|
| Edge AI — curriculum graph | `#/malla` | [`edge_ai_malla_v3.jsx`](./edge_ai_malla_v3.jsx) |
| Edge AI — full roadmap | `#/roadmap` | [`final_roadmap_reference.md`](./final_roadmap_reference.md) |
| Control & Robotics — curriculum graph | `#/control-malla` | [`control_robotics_malla.jsx`](./control_robotics_malla.jsx) |
| Control & Robotics — full roadmap | `#/control-roadmap` | [`control_robotics_roadmap.md`](./control_robotics_roadmap.md) |
| Quantum AI — curriculum graph | `#/quantum-malla` | [`quantum_ai_malla.jsx`](./quantum_ai_malla.jsx) |
| Quantum AI — full roadmap | `#/quantum-roadmap` | [`quantum_ai_roadmap.md`](./quantum_ai_roadmap.md) |

The six source files at the repo root are the **single source of truth** (one
`*.jsx` graph and one `*.md` roadmap per career). The `preview-app/` directory is
a thin Vite wrapper that ships them as a web app.

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
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or `master`). The workflow at
   [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) builds
   `preview-app/` with the correct base path and publishes `dist/` to Pages.

The site will be available at
`https://<your-user>.github.io/<repo-name>/`, with the six pages at
`#/malla`, `#/roadmap`, `#/control-malla`, `#/control-roadmap`,
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

## Design decisions

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

## What I did not do

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

## Project layout

```
.
├── edge_ai_malla_v3.jsx            ← source of truth (Edge AI graph)
├── final_roadmap_reference.md      ← source of truth (Edge AI roadmap)
├── control_robotics_malla.jsx      ← source of truth (Control & Robotics graph)
├── control_robotics_roadmap.md     ← source of truth (Control & Robotics roadmap)
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
        ├── App.jsx                 ← HashRouter + nav + layout (all three careers)
        ├── index.css               ← theme, nav, markdown styles
        ├── components/
        │   └── RoadmapView.jsx     ← shared markdown→tabs renderer
        └── pages/
            ├── MallaPage.jsx           ← imports ../../../edge_ai_malla_v3.jsx
            ├── RoadmapPage.jsx         ← Edge AI roadmap (RoadmapView)
            ├── ControlMallaPage.jsx    ← imports ../../../control_robotics_malla.jsx
            ├── ControlRoadmapPage.jsx  ← Control & Robotics roadmap (RoadmapView)
            ├── QuantumMallaPage.jsx    ← imports ../../../quantum_ai_malla.jsx
            └── QuantumRoadmapPage.jsx  ← Quantum AI roadmap (RoadmapView)
```
