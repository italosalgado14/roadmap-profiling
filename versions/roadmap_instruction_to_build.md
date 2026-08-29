# version 1.0 First constructyion of the tool

*Frozen 2026-08-28. This section records what the tool was at the end of its first
construction, and why it was built that way. The instructions that follow under
v1.1 are the changes made on top of it.*

## What it is

A static site on GitHub Pages that publishes engineering learning roadmaps. Four
career paths, each with an interactive prerequisite graph and a long-form
reference document, plus a career-strategy essay that argues which path to commit
to. Source of truth lives at the repo root; `preview-app/` is a Vite and React
wrapper that renders it.

- Edge AI / Physical AI: 44 topics, 5 tracks
- Control Systems & Robotics: 45 topics, 5 tracks
- AI Security & Trustworthy Systems: 50 topics, 5 tracks
- Quantum AI: 54 topics, 5 tracks

## Architecture

Content and presentation are separated. The four `*_malla.js` modules at the root
export data only (`PHASES`, `TRACKS`, `COURSES`) with no JSX and no imports. One
component, `CurriculumGraph.jsx`, renders all four. `MallaPageShell.jsx` derives
every count shown on a page from the data. `RoadmapView.jsx` splits a roadmap
markdown file into tabs by reading its heading structure.

## Decisions, and why

**One renderer, four data modules.** The graphs began as four complete copies of
the same component: 431 identical rendering lines per file, differing only in a
component name. The duplication had already drifted, with one page advertising
"41 topics, 4 specialization tracks" for a graph that had grown to 44 and 5. The
rendering was consolidated and every count is now computed.

**Data files are validated in CI.** Because the root modules are data, a bad
prerequisite or two nodes stacked on the same row is not a build error; it just
renders a wrong graph. `tools/check_curriculum.py` fails the deploy on
nonexistent or later-phase prerequisites, cycles, duplicate ids, row collisions
and gaps, unknown phases, tracks, priorities or kinds, and missing descriptions
or resources.

**Dependency edges are routed, not just drawn.** Same-phase prerequisites were
originally straight vertical lines that ran behind every card between them and
disappeared. Adjacent rows keep the short drop; longer ones curve into the
gutter. Highlighted chains render in a second SVG layer above the nodes, because
the edges that most needed highlighting were exactly the ones the cards hid.

**Hash routing.** GitHub Pages serves static files only, so client-side routes
would return 404 on refresh. Hash routing avoids that with no server config.

**Structural markdown parsing.** The roadmap tab splitter recognises the document
subtitle by its shape rather than by matching its text, so renaming a heading
cannot silently break the page.

**No syntax highlighting.** `highlight.js` was most of a 600 kB bundle for
documents containing zero fenced code blocks. The imports were removed.

**No TypeScript, no test suite.** For a site this size both are overhead. The
curriculum validator covers the failure mode that actually occurs, which is bad
data rather than bad types.

**Neutral voice in the roadmaps.** The three newest roadmap documents had drifted
into a personal register, addressing one reader's nationality, languages and
career position. That was rewritten into conditional, catalog-neutral prose.

## Known limits at v1.0

These are what v1.1 sets out to fix.

- One person's priorities were encoded as global `critical` and `desirable` tags,
  which is wrong for any other reader.
- There was no wide map of options, so anything ruled out was invisible.
- No Applied AI/LLM or Data platform track, omitting two of the largest
  specialisation pools.
- Phases are capability tiers with no calendar attached.
- Progress lived in React state only and was lost on reload.
- No statement of the assumed starting point, so a reader could not tell whether
  the material was pitched at them.

# version 1.1 Second pool of instructions

The dual purpose changes the structure, not just the content

Right now the site mixes "my path" and "the catalog" in the same graph: your personal priorities are encoded as global "critical/desirable" tags, which is wrong for other readers (CUDA is not critical for everyone, English B2 is critical only for you). The fix is a clean split:

Catalog layer (for everyone): the four roadmaps as neutral curricula, with a landing page that shows the wide map of options we listed (Physical AI, Applied AI/LLM, Data & AI platform, Cloud/platform/SRE, Security, Governance, Control, Embedded/FPGA, domain verticals, Quantum, PQC, Research, Management/Architect/Consulting/Founder). Each option: what the job is, who hires in e.g Chile/Germany/Canada, entry requirements, one-line "good fit if…". Most of these only need a card, not a full graph (add capacity to personalize adding a card? optional).
Personal layer (for you): a "my path" view that selects tracks, marks nodes done, overrides priorities, and shows the sequence and capstones. Technically that's a JSON overlay on top of the catalog (done nodes, priority overrides, order, deadlines), which also lets others fork the overlay for themselves — that's the socialization feature.

What from this chat the roadmaps already cover: Physical AI/perception profile (Robotics + Edge tracks), TensorRT/Jetson/ROS 2/Isaac/VLM/sensor fusion/RL, MLOps and platform basics, functional safety and AI governance, security as hedge, quantum as long-horizon bet, the "domain = moat" idea. That's most of the technical content.

What's missing or needs fixing or improve

Actual the three options and the decision — the Physical AI vs Applied AI vs Data platform choice. Add an Applied AI/LLM track (cheap: LLM, RAG, FINE, AGENT, VLM, plus new Evaluation and Serving nodes) and a Data & AI platform track (new: pipelines, streaming, lakehouse, feature store, IoT time series). Without them the catalog quietly omits the two biggest spezialitation pools.
Missing nodes from the review: 3D geometry & SLAM, data engine & synthetic data, real-time streaming pipelines, AI evaluation, English lane, three capstone nodes. Plus the calibration fixes: TRT without CUDA prerequisite, VLM to critical, AGENT to desirable, split IEC 62443 from functional safety, K8S desirable for Edge/Robotics, remove market-size claims from frontier nodes.
Wide-view page — a single map of all options with a verdict column that is yours (primary / hedge / ignore) but clearly labeled as one person's verdict, so others can disagree. This is where "ruled out on purpose" becomes visible.
Sequencing and time the graph has phases but no calendar. Maybe my personal layer needs the 12–18 month order (English continuous + ROS 2 + C++ + TensorRT + VLM + evaluation + SLAM/3D + capstone).
Resource hygiene — verify a few names (the "TensorRT Edge-LLM SDK" entry; check current DeepLearning.AI short-course titles), add the ones from the book list (learncpp, Stachniss, Gao Xiang, Barfoot, Chip Huyen's AI Engineering, MIT 6.5940), and add "why this resource" one-liners for the general reader.
Profile-aware entry points — for the catalog to be useful to others, each roadmap should state its assumed starting point. In this roadmap assumes an STEM degree, from few/little experience to medium/adyacent SW experience, but not particularity experience in this areas. If people have experience in this areas, the can mark the specific card has finished and begin in that point, or discover knowledge they need to study (gaps).
Persistence and sharing — localStorage for progress, and export/import of the personal overlay as a JSON file or URL, so someone can share their path the way you share yours.

## v1.1 implementation record

*Implemented 2026-08-28. The instruction text above is left exactly as written.*

**The split.** `career_options.js` is the catalog's wide map: 14 career options,
each with what the job is, who hires for it in Chile, Germany and Canada, a
realistic entry point, and a one-line fit test. `my_path.js` is the personal
overlay: verdicts, priority overrides, preselected tracks, completed nodes and
the calendar. The wide map and the My path page read the same overlay, so the
verdict column and the personal plan cannot disagree.

**Market claims are qualitative on purpose.** Sectors and employer types only, no
salaries and no market-size projections. The same pass removed the market-size
claims from the frontier nodes, so those numbers do not return through the front
door.

**The worked example of the split.** CUDA is now `desirable` in the catalog,
because TensorRT no longer requires writing kernels, and English is `desirable`
too. `my_path.js` raises both to `critical`. The graph marks overridden nodes and
the detail panel shows the catalog rating alongside the personal one.

**Edge AI graph: 44 topics and 5 tracks became 58 and 7.** New tracks: Applied
AI/LLM and Data & AI platform. New nodes: ENGLISH, PIPE, LAKE, STREAM, GEO3D,
EVAL, FEAT, TSDB, SERVE, DATAENG, OTSEC, and three capstones (CAPPHYS, CAPAPP,
CAPDATA), one per primary option. LLM, RAG, FINE, AGENT and VLM were retagged
into the applied track.

**Calibration.** TensorRT no longer lists CUDA as a prerequisite. VLM raised to
critical, AGENT lowered to desirable, K8S lowered to desirable and widened beyond
the platform track. IEC 62443 split out of functional safety into its own OT and
industrial security node, because a safe system and a secure one are different
arguments.

**Resource hygiene.** The "TensorRT Edge-LLM SDK" entry was checked and is
correct: it is NVIDIA's C++ runtime for LLMs and VLMs on Jetson, so the entry now
points at the real documentation and the Jetson AI Lab tutorial instead of a
blog. Course titles were corrected to "LangChain for LLM Application Development"
and "Building and Evaluating Advanced RAG". Added Stachniss, Gao Xiang and
Barfoot to the new 3D geometry node, Chip Huyen's *AI Engineering* to evaluation
and serving, and MIT 6.5940 to the kernels node. New and edited resources carry a
"why this resource" note.

**Sequencing.** A 12 to 18 month calendar lives in the overlay and renders on the
My path page: English continuous, then C++ and ONNX, then ROS 2 and TensorRT,
then 3D geometry and evaluation, then VLM on Jetson, then the capstone anchored
in a domain.

**Profile-aware entry points.** All four roadmaps now open with an assumed
starting point: a STEM degree, little to medium adjacent software experience, no
particular background in the subject, and an instruction to tick off known nodes
and use the dependency chain as a gap analysis.

**Persistence and sharing.** Progress and track selection are kept in
`localStorage` per graph, every access guarded, and never uploaded. Export writes
the overlay as JSON; import replaces local progress.

**The landing route changed** from `#/strategy` to `#/options`, because the
catalog now has a front door.

### Taken deliberately, and not done

- Sharing is by JSON file, not by URL. The instruction said "JSON file or URL";
  encoding an overlay into a link fights hash routing and URL length limits.
- Verdicts and priority overrides are edited in the file, not in the browser. The
  browser owns progress and track selection only.
- Per-card personalisation on the wide map was marked optional in the
  instructions and was not built.
- The new tracks and nodes were added to the Edge AI graph only. The other three
  curricula were left at their v1.0 shape.

# version 1.2 Splitting Applied AI out of Edge AI

*Implemented 2026-08-28, after v1.1 shipped and the structure it produced turned
out not to hold.*

## What was wrong

v1.1 said "add an Applied AI/LLM track" and that is what was built: a track
inside the Edge AI graph. Implementing it exposed why it wants to be a path.
A track inherits its graph's spine, so a reader who selected Applied AI was told
C++, ONNX model export and CUDA were critical and required. None of those are on
that career.

The measurement that settled it. Overlap between every pair of Edge AI tracks,
counting only their non-shared nodes:

| pair | overlap |
|------|---------|
| edge and robotics | 0.63 |
| platform and data | 0.47 |
| applied against anything | at most 0.25 |
| applied and safety | 0.00 |

The rule that falls out: a track belongs inside a path when it shares that
path's spine, and needs its own path when the spine diverges.

The deeper cause is that `priority` and `kind` are path-relative. CUDA is
critical for a compiler track, desirable for edge and irrelevant for applied.
v1.1 solved the personal version of this with the overlay. This is the same
problem one level up, and a track cannot express it.

## What changed

**Applied AI / LLM engineering is now its own path.** `applied_ai_malla.js`,
39 topics across 9 phases, 5 tracks (AI product engineer, Retrieval and
knowledge, Agentic systems, LLM platform and serving, Evaluation and trust). Its
spine is Python, SQL, backend services, testing, LLM fundamentals, prompting,
context engineering, evaluation, distributed systems and architecture. No C++,
no CUDA, no ONNX. `CAPAPP` moved here from the Edge AI graph. Route
`#/applied-malla`.

**Data merged into platform inside Edge AI.** They overlapped 0.47 and are both
the infrastructure career. The `platform` track is now "ML platform & data
infra" and Edge AI is back to 5 tracks and 57 topics.

**Course ids that meant two things were renamed.** `ARCH` was both "Security
architecture" and "Hybrid quantum-classical architecture"; the quantum one is
now `QARCH`. `CLOUD` was both "Cloud ML platforms" and "Cloud security
fundamentals"; the security one is now `CLOUDSEC`. `CALC` in quantum covered
optimization and became `CALCOPT`. Where the topic really was the same and only
the wording drifted (`PY`, `LEAD`, `LINUX`, `CPP`, `PROB`, `PQC`), the labels
were aligned instead and the specialisation now lives in the description. The
validator enforces this from here on: a course id used in more than one graph
must carry the same label in all of them. That is also what makes carrying
progress across paths possible later.

**The wide map is opinion-free.** Verdict badges, verdict filters and the
per-card verdict text were removed, and the page no longer imports the overlay
at all. The ranking moved entirely to My path, where it is labelled as one
reader's decision and keeps the reasons, including for the options set aside.

**Navigation is a collapsible sidebar** grouped Catalog, Career paths, Personal,
instead of eleven pill buttons wrapping onto three lines.

## Not done

- Applied AI has a curriculum graph and a wide-map card, not the long-form
  roadmap document the other four paths carry. That is a separate writing job.
- Data and AI platform is still a track inside Edge AI rather than a sixth path.
  Its 0.47 overlap with platform did not justify a second split in one go.
- Progress is still stored per graph, so shared ids do not yet carry completion
  between paths. The id cleanup is what makes that possible, not what does it.

## v1.2 amendment

The Applied AI long-form roadmap was written straight after the split.
`applied_ai_roadmap.md`, 533 lines, covering all 39 nodes with the same
structure as the other four documents: an executive summary, nine phase
sections with prerequisites, unlocks, tracks, resources, a study approach and a
project per node, then the reference sections. Route `#/applied-roadmap`.

The phase sections were generated from `applied_ai_malla.js` rather than typed
by hand, so every heading, priority marker, prerequisite list and track list is
guaranteed to match the graph. Only the prose between them was written by hand.
That removes the drift class that produced the original "41 topics, 4 tracks"
bug: the document cannot disagree with the data it was built from.

All five paths now have both a graph and a roadmap, so the "Graph only" state in
the sidebar is currently unused. The branch is kept for the next path that needs
it.

# version 1.3 FPGA & Digital Hardware path

*Added 2026-08-28, in answer to the question of whether hardware work was
already covered inside Edge AI.*

## It was not covered

A search across all five graphs found eight hardware-adjacent nodes in total,
scattered across three of them, and none teaching digital design. What Edge AI
calls hardware is software running on somebody else's silicon: CUDA, TensorRT,
GPU kernels, deploying to a Jetson. Control had exactly one embedded node.
Quantum had two, and named them its highest-moat entry precisely because so few
candidates arrive with them. Nothing anywhere taught HDL, timing closure,
verification or board bring-up.

The measurement, taken after the new graph existed. The FPGA path and the Edge
AI path share six nodes, of which five are generic foundations: Python, C++,
Git, Linux and technical leadership. **Sixteen of the FPGA path's twenty-one
spine nodes exist nowhere else on the site.** By the rule established in v1.2,
that is a divergent spine and therefore a path rather than a track.

## What was added

`fpga_hardware_malla.js`, 45 topics across 9 phases, 5 tracks: ML accelerators,
Embedded and real-time, DSP and communications, Safety-critical hardware, and
Instrumentation and control. Route `#/fpga-malla`. The `embedded` wide-map card
was promoted from overview-only to a curriculum, renamed from "Embedded & FPGA"
to "FPGA & digital hardware", and rewritten to say plainly that the work is
designing the datapath rather than writing software for hardware someone else
designed.

Two ids were chosen around existing collisions: `LOGIC` for digital logic
design, because `DIGITAL` already means "Digital control" in the Control graph,
and `TB` for simulation and testbenches, because `SIM` already means "Simulation
& digital twins" there. Quantum's `CTRL` and `FPGA` nodes were deliberately not
absorbed; they are that path's differentiator, and the new path cross-links to
them instead through its own quantum control electronics node.

## The hub argument

This is the only path on the site that supplies three others. ML accelerators
feed Edge AI from the other side of the interface, real-time execution and motor
control feed Control and Robotics, and data converters plus the RF signal chain
feed the Quantum hardware track. Those handoffs are named in node descriptions
rather than duplicated as nodes.

## Personal layer amendment

`my_path.js` previously justified ignoring the embedded option with "treated as
an input to Physical AI rather than a destination", which described a card that
no longer exists in that form. The verdict itself is unchanged, since that is
the site author's decision and not the catalog's business, but the reason now
acknowledges that the option is a full path and states the personal position
explicitly.

## Not done

- No long-form roadmap document yet. The graph and the card ship first, the same
  order Applied AI followed.
