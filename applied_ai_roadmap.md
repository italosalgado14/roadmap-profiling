# Applied AI / LLM Engineering Roadmap
## Building Products on Foundation Models

---

## Executive Summary

**Assumed starting point.** This roadmap assumes a STEM degree and somewhere between little professional experience and solid adjacent software experience, but no particular background in LLM application engineering. If you already work in part of this, tick those nodes off in the curriculum graph and start where the gaps are: clicking a node shows the dependency chain it rests on, so the graph doubles as a gap analysis rather than a fixed course order.

**This is the shortest hop from ordinary software engineering into AI work.** The work is building products on top of models somebody else trained: retrieval, tool use, agents, and the evaluation, cost and latency engineering that decides whether any of it survives contact with users. It is not model research and it is not training infrastructure. A competent backend engineer can be usefully productive here in months, which is the reason for both its appeal and its crowding.

**Evaluation is the discipline; everything else is plumbing around it.** That claim shapes this entire roadmap. Prompting, retrieval and agents are all straightforward to demonstrate and hard to make reliable, and the thing that separates a demo from a product is a measurement harness that catches a regression before a user does. Evaluation sits in the spine here rather than as a specialization, it arrives in Phase 3 so that every later phase is measured, and half the projects in the later phases produce numbers rather than features. An engineer who can prove a system got better is worth several who can make it look impressive.

**Its own path, not an Edge AI track.** This material was first written as a track inside the Edge AI curriculum, which meant it inherited that path's spine and told readers that C++, ONNX model export and CUDA were required. They are not. Measured against the Edge AI tracks it overlapped at most 0.25, where edge and robotics overlap 0.63, so the spine genuinely diverges. The spine here is Python, SQL, backend services, testing, LLM fundamentals, prompting, context engineering, evaluation, retrieval, tool use, tracing, distributed systems and architecture. RAG, multi-agent systems and fine-tuning are taught here, not in the Edge AI roadmap.

**Honest counterpoint, read this before committing.** This is the most crowded and fastest-churning path on this site. Framework fluency has a short half-life: the orchestration library everyone learned two years ago is not the one teams use now, and the same will be true again. Tutorials, bootcamps and job applicants are abundant at the shallow end. What is genuinely scarce, and what this roadmap is built around, is the ability to evaluate, to reason about a system rather than a prompt, and to own the cost and reliability of something in production. Treat every framework here as replaceable and every measurement habit as permanent.

**How the plan is paced.** Eight phases, Phase 0 to Phase 7. Each phase is a quarter, about three months of consistent part-time study, so one specialization followed end to end is eight phases, about two years. A specialization is the spine plus that specialization's branch courses, and every specialization takes 2 to 5 courses in every phase, so no quarter is idle and none is overloaded. Electives (English working fluency and AI-assisted dev workflows) run alongside and do not count toward that load.

**Four specializations.** Pick one as your plan and borrow single courses from a second rather than spreading across all of them:
- **AI product & retrieval**: the broad one. Retrieval in depth (hybrid search, multi-hop and permission-aware retrieval), multimodal input, agents, cost, and the user-facing craft of making a probabilistic feature feel dependable. Its retrieval half is the one most transferable to conventional search work.
- **Agentic systems**: tool protocols, planning loops, computer use, long-horizon agents and the security boundary around letting a model act. The newest, least settled and highest variance.
- **LLM platform & serving**: inference, batching, caching, routing, cost and the infrastructure other teams build on. Closest to conventional platform engineering.
- **Evaluation & trust**: judges, human review, regression gates, feedback loops and governance evidence. The smallest specialization by headcount, and the one regulated deployment cannot do without.

For a software engineer moving laterally, the highest-return combination is **AI product & retrieval plus Evaluation & trust**. The first gets you hired and the second is what keeps you valuable once the framework you were hired for is obsolete.

**Where the demand evidence points.** Every figure here comes from the sources registered in the roadmap standards (`market-sources.md`, checked on 2026-09-26) and carries its date, horizon and geography. Job titles are translated into the courses in this graph that serve them.

*Medium term (2 to 5 years):*
- **Tool use & function calling, Multi-agent systems, MCP & tool protocols, Reasoning & long-horizon agents** (Agentic systems): the [Stanford AI Index 2026](https://lightcast.io/resources/research/stanford-ai-index-2026) (US job postings 2024 to 2025, Lightcast data) finds the "Agentic AI" skill cluster up over 280% in one year (from 0.06% to 0.23% of postings), while chatbot-oriented skills declined. The [McKinsey Technology Trends Outlook 2026](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20top%20trends%20in%20tech%202026/mckinsey%20technology%20trends%20outlook%202026.pdf) (Sep 2026, mainly English-speaking countries) counts agentic AI postings up roughly tenfold, "off a small base".
- **AI evaluation, LLM observability & tracing, LLM judges & human review** (Evaluation & trust): the [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai) finds 84% of developers using or planning to use AI tools and 46% actively distrusting their accuracy; the gap between adoption and trust is the evaluation job. McKinsey's [Agents, Robots, and Us](https://www.mckinsey.com/~/media/mckinsey/mckinsey%20global%20institute/our%20research/agents%20robots%20and%20us%20skill%20partnerships%20in%20the%20age%20of%20ai/agents-robots-and-us-skill-partnerships-in-the-age-of-ai.pdf) (Nov 2025, US) finds demand for AI fluency up nearly sevenfold in two years, with demand also rising for complementary skills such as quality assurance.
- **APIs & backend services, Distributed systems, AI systems architecture** (the spine): [BLS](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) (2025 to 2035, released Aug 2026, US) projects software developers to grow 10.2% against 3.5% for all jobs, naming software for AI as a driver, while computer programmers decline 7%. [LinkedIn Jobs on the Rise 2026](https://www.linkedin.com/pulse/linkedin-jobs-rise-2026-25-fastest-growing-roles-us-linkedin-news-dlb1c) (US, job starts Jan 2023 to Jul 2025) ranks AI engineer as the fastest-growing title.
- **Geography:** in Germany, [Bitkom](https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert) (Sep 2026) counts 79,000 unfilled IT positions, with AI the fourth most sought profile. In Chile, [ILIA 2025](https://www.cepal.org/en/pressreleases/latin-america-and-caribbean-accelerate-adoption-artificial-intelligence-though) (CENIA and ECLAC) reports a CENIA estimate that about half the workforce could speed up at least 30% of their tasks with generative AI, software developers among the most exposed (87% of tasks); that measures acceleration potential, not displacement.

*Counter-signals:* the entry level is narrowing. The [Stanford AI Index 2026](https://hai.stanford.edu/ai-index/2026-ai-index-report/economy) reports US employment of software developers aged 22 to 25 down nearly 20% from 2024, and a [WEF and PwC paper](https://reports.weforum.org/docs/WEF_Artificial_Intelligence_and_the_Future_of_Entry_Level_Work_2026.pdf) (Jun 2026) cites a 16% decline in entry-level jobs in AI-exposed US fields since late 2022, while noting the decline began before ChatGPT and that AI's role in it is contested. Bitkom's German shortage is about half its 2023 level.

*Long term (5 to 15 years):* scenario territory; no quantitative forecast reaches past 2035. In the most accelerated of the WEF's [Four Futures](https://www.weforum.org/stories/2026/01/here-are-four-ways-ais-impact-on-job-markets-might-take-shape/) (Jan 2026), new roles scale around people who orchestrate AI agents, and the [Anthropic Economic Index](https://www.anthropic.com/research/economic-index-june-2026-report) (Jun 2026) finds early-career workers reporting that AI can already handle the largest share of their work. Both point the way this roadmap is built: framework fluency depreciates, while evaluation, system design and accountability for a production system remain.

**Three priority levels** run throughout:
- `critical`: the non-negotiable spine for your chosen track.
- `desirable`: high-ROI competitive edge, but not blocking.
- `frontier`: long-horizon bets that are exciting and unproven.

**Resource tags:**
- **Best match**: the first resource for every node, and the same one the curriculum graph lists first. Start there.
- (Coursera Plus): included in a Coursera subscription, or available as a free audit
- (free): free
- (paid, ~$N): paid, cost noted and approximate, so verify before buying; plain (paid) where no figure is given

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Tracks`, `Resources`, a `Study approach` and a `Project`. The project is the proof of competence. In this field especially, a shipped system with a public evaluation harness outranks any certificate, because the harness is the part that is hard to fake.

**What `Study approach` and `why:` are for.** `Study approach` is the knowledge itself: the concepts a course rests on, why each one matters and what breaks without it, so you can say what the course is about before opening a single resource. It is not a reading order and not a checklist. Where a resource is a body of material rather than one finite unit, such as official documentation or a reference manual, a `why:` clause names the specific parts to take from it, and sometimes the parts to leave alone.

---

## PHASE 0: Foundations

### Python `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** APIs & backend services, Testing & code quality, AI-assisted dev workflows, Machine learning
**Tracks:** All specializations
**Resources:**
- **Best match:** Coursera, *Python for Everybody*, University of Michigan (Coursera Plus)
- *Automate the Boring Stuff with Python* (free)
- Real Python guides on type hints, async and packaging (free)
**Study approach:** This path lives in Python, so the bar is higher than scripting. Get comfortable with type hints, `async`/`await`, virtual environments and packaging, because LLM application code is mostly concurrent network calls waiting on a slow dependency. The habit that matters: type your function signatures from the first line, since structured model output and typed code fit together and save an entire class of parsing bug later.
**Project:** Build a small typed CLI that calls a public API concurrently, handles rate limits and retries with backoff, and writes results to disk. Package it so `pipx install` works from your repository.

### Git & version control `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD, Testing & code quality, AI-assisted dev workflows
**Tracks:** All specializations
**Resources:**
- **Best match:** git-scm.com tutorial and *Pro Git* book, chapters 1 to 3 (free), why: the commit graph, what the index is, and merge against rebase
- GitHub Skills interactive courses (free)
**Study approach:** What makes Git tractable is its data model: a commit is an immutable snapshot plus pointers to its parents, a branch is only a movable label on one commit, and the index is a deliberate staging area between your files and your history. Hold that and the rest follows, including why merge and rebase are not rival rituals but two different outcomes, one recording that two lines of work joined and the other rewriting yours on top of someone else's. Understand that rewriting history others have pulled is the one genuinely destructive operation. Nothing exotic is needed here, but every later node assumes work arrives in reviewable increments rather than one heroic push, and that review is where a prompt change or an evaluation threshold gets questioned before it ships.
**Project:** Take an existing script, put it under version control with a meaningful commit history, open a pull request against yourself, and review it as if a stranger wrote it.

### Linux & CLI `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD
**Tracks:** All specializations
**Resources:**
- **Best match:** MIT, *The Missing Semester of Your CS Education* (free)
- Linux Journey (free)
**Study approach:** The knowledge worth holding is that a running service is a process with an environment, open file descriptors and a bound port, because every deployment failure you will meet is one of those four being wrong. Understand environment variables as the normal way configuration and secrets reach a process, and why that makes a missing variable the most common cause of a container that exits immediately. Understand ports and binding, since a service listening on localhost inside a container is unreachable from outside it, which is the classic first-day confusion. Understand standard output and standard error as where logs actually go in a containerized world, and permissions as a property of files rather than of applications. Understand enough of ssh and process inspection to see what is running, what it has open and why it died. This is not systems administration: the goal is never to be blocked because something will not start.
**Project:** Deploy any small web service to a cheap VPS by hand, with systemd keeping it alive and logs going somewhere you can read them. Write down every command that worked.

### SQL & data access `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Embeddings & semantic search
**Tracks:** All specializations
**Resources:**
- **Best match:** ThoughtSpot SQL tutorial, formerly the Mode Analytics tutorial (free), why: joins and their fan-out failure, aggregation, window functions and CTEs
- *Use The Index, Luke* (free)
- PostgreSQL documentation (free), why: the indexing and query-planning chapters, plus transaction isolation; the administration material is not the point
**Study approach:** Most retrieval systems are a database problem wearing an AI hat, and most latency problems are a missing index. Understand joins and their characteristic failure first, since a many-to-many join that silently multiplies rows is the commonest quiet data bug there is, and knowing exactly what one row represents is the habit that prevents it. Understand indexing properly rather than as a performance trick: an index is an ordered structure that lets the engine avoid reading everything, which is why it helps some predicates and not others, and why adding one costs write throughput. Understand how to read a query plan, because it tells you what the engine decided to do rather than what you hoped it would. Understand transactions and isolation at the level of knowing what another request can see halfway through yours. The reason to invest here is that the same instinct transfers directly to vector search: an approximate index also trades recall for latency, and you will be choosing those parameters later.
**Project:** Load a public dataset of at least a million rows into PostgreSQL, write five analytical queries, then make the slowest one ten times faster and explain the plan before and after.

### Probability & statistics `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Machine learning
**Tracks:** All specializations
**Resources:**
- **Best match:** *Think Stats* (free)
- Coursera, *Statistics with Python*, University of Michigan (Coursera Plus)
- StatQuest video series (free)
**Study approach:** This node exists to let you say whether an evaluation result means anything, and the central idea is sampling variation: a score measured on forty examples is an estimate with a width, so two models differing by three points may be indistinguishable. Understand the confidence interval as the honest expression of that width, and understand why it narrows with the square root of the sample size, which is what tells you how large an evaluation set has to be before it can detect the improvement you care about. Understand paired comparison, since evaluating two systems on the same items removes most of the noise and is nearly free. Understand multiple comparisons as the trap that follows: testing twenty prompt variants on one small set will produce a winner by chance, which is why a held-out confirmation matters. Understand that averages conceal, so a mean score over mixed categories can improve while the category you depend on degrades. This is not a mathematics track; it is the literacy that stops you shipping a regression because the eval set was too small.
**Project:** Take any pair of model configurations, run them on the same task, and write a short report stating the difference, the confidence interval, and how many examples would be needed to detect a five percent change.

### English working fluency `desirable`
**Prerequisites:** None, this is a starting node
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Any structured B2 to C1 program
- Practice: write every design note and README in English (free)
- Read arXiv abstracts and provider changelogs daily (free)
**Study approach:** What is being acquired here is not grammar but production under pressure: the ability to explain a design decision, in writing and out loud, in a second language, while someone waits. That is why output matters more than study, and why an hour of conversation or a published paragraph a week beats several hours of exercises. Understand that this field turns over faster than translations appear, so model documentation, provider changelogs and current research are English-first by necessity rather than by preference, and reading them natively is simply how the work is done. The vocabulary worth deliberate attention is the one this path runs on, the words for latency, cost, trade-off, root cause, hallucination, evaluation and risk, because those are what a design discussion is made of. Reading is the low bar; the return comes from writing, because technical influence in this field is exercised in writing and a public record of it is what makes a remote hire plausible.
**Project:** Publish three technical write-ups in English over twelve months. Any topic from this roadmap counts. The point is the output habit, not the audience.

---

## PHASE 1: Software core

### APIs & backend services `critical`
**Prerequisites:** Python
**Unlocks:** Distributed systems
**Tracks:** All specializations
**Resources:**
- **Best match:** FastAPI documentation (free), why: dependency injection, Pydantic request and response models, background tasks and streaming responses
- *Architecture Patterns with Python*, Percival & Gregory, free online edition (free)
- MDN, *Server-sent events* (free)
**Study approach:** An LLM feature is a backend service with an unusually slow, unreliable and expensive dependency. Learn HTTP APIs, authentication, background jobs, queues, timeouts and cancellation, and how to stream a response to a browser token by token. Streaming is not a nicety here: a ten-second wait with no output reads as broken, and the same response streamed reads as fast.
**Project:** Build an API that proxies a model provider with streaming responses, per-user rate limiting, request timeouts and a background job queue for anything slow. Load-test it and record what happens at the limit.

### Docker & CI/CD `critical`
**Prerequisites:** Linux & CLI, Git & version control
**Unlocks:** LLM observability & tracing, LLM serving & inference, Distributed systems, Cloud ML platforms, Kubernetes for ML
**Tracks:** All specializations
**Resources:**
- **Best match:** Docker getting started (free), why: layers and caching, Compose, volumes and the networking model; ignore Swarm
- GitHub Actions documentation (free), why: triggers, jobs, caching and secrets handling, which is what an evaluation job in CI needs
**Study approach:** A container is a process on the host kernel with its own view of the filesystem and network, not a small virtual machine, and that one fact explains why it starts instantly, why anything it needs from the host must be passed in explicitly, and why an image built on your laptop's architecture may not run on the deployment target. Understand an image as an ordered stack of immutable layers, since that is why the order of instructions decides build time and why a multi-stage build can leave the toolchain behind and ship only the artifact. Understand Compose as the way several services and their dependencies are described together, which is how an application plus its database and vector store become one reproducible local environment. Understand continuous integration as the claim that your build and your tests are reproducible on a machine that is not yours. The reason this node sits early is that evaluation later has to run in CI, and a pipeline is far easier to add before there is anything to migrate.
**Project:** Containerize the API from the previous node, add a Compose file that brings up the service and a database together, and wire a pipeline that builds the image and runs the test suite on every push.

### Testing & code quality `critical`
**Prerequisites:** Python, Git & version control
**Tracks:** All specializations
**Resources:**
- **Best match:** pytest documentation (free), why: fixtures and their scopes, parametrization, and monkeypatching, which is how a model call gets mocked
- *Architecture Patterns with Python*, testing chapters (free)
**Study approach:** Unit and integration tests, fixtures, and the specific problem of testing against a non-deterministic dependency. The answer is to push the model call to the edge of the system behind an interface, mock it in unit tests, and test the real thing separately and deliberately. Engineers who skip this node write evaluation harnesses that cannot run offline and therefore do not run at all.
**Project:** Refactor the API so every model call goes through one interface, then write a test suite that runs fully offline against recorded responses, plus a small separate suite that hits the real provider and is not part of the default run.

### AI-assisted dev workflows `desirable`
**Prerequisites:** Python, Git & version control
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Anthropic Claude Code documentation (free), why: project memory files, custom commands, hooks and permission settings, the mechanisms that make an assistant repo-aware
- Anthropic prompt engineering guide (free), why: why context placement, explicit success criteria and examples change an answer
- Model Context Protocol documentation (free), why: the tool, resource and prompt primitives, so you see how a model is given access to a system it was not trained on
**Study approach:** The knowledge here is about context rather than about prompts. A coding assistant knows only what it has been shown, so its failures are almost always missing or misleading context: a convention it never saw, a constraint nobody stated, a file it did not read. Understand that a project memory file, a custom command and a hook are three ways of making the right context arrive automatically instead of being retyped, and understand a hook as a deterministic check the model cannot talk its way past, which is what makes the arrangement safe on real code. Understand the characteristic failure mode precisely: a confident, plausible, wrong change, including an imported package that does not exist, which is why reviewing the diff is the actual skill and why you never merge generated code you would not accept from a junior engineer. Treat this as a multiplier on everything else in the roadmap rather than as a topic, and keep it distinct from building agent systems, which is a later node.
**Project:** Use a coding agent to build one non-trivial feature end to end, then write a short honest retrospective: what it did well, what you had to correct, and which review habit caught the worst mistake.

---

## PHASE 2: ML & LLM literacy

### Machine learning `critical`
**Prerequisites:** Python, Probability & statistics
**Unlocks:** Neural network literacy, AI evaluation
**Tracks:** All specializations
**Resources:**
- **Best match:** Coursera, *Machine Learning Specialization*, Andrew Ng (Coursera Plus)
- *Hands-On Machine Learning*, Geron, chapters 1 to 4 (paid, ~$50)
**Study approach:** This path consumes models rather than fitting them, so the knowledge you need is the vocabulary for judging one. Understand generalization as the whole point: a model is judged on data it has not seen, which is why a held-out split is not a formality and why a leaked feature or a test set that quietly overlaps the training set produces a brilliant model that fails in production. Understand overfitting as memorizing noise, and understand the bias and variance framing as the reason the gap between training and test performance exists at all. Understand the metrics as statements about what a mistake costs: accuracy is misleading the moment classes are imbalanced, precision and recall move in opposite directions as a threshold slides, and F1 is a compromise that hides which direction you chose. Understand calibration separately from accuracy, since a model that is right eighty percent of the time while reporting ninety-nine percent confidence is dangerous in a way its accuracy does not show. The framing material matters far more here than the algorithms.
**Project:** Train a simple classifier on a public dataset, then deliberately overfit it and show the gap between training and held-out performance. Write one paragraph on which metric you would report to a product owner and why.

### Neural network literacy `critical`
**Prerequisites:** Machine learning
**Unlocks:** LLM fundamentals
**Tracks:** All specializations
**Resources:**
- **Best match:** Andrej Karpathy, *Let's build GPT* (free)
- 3Blue1Brown, neural networks series (free)
- Jay Alammar, *The Illustrated Transformer* (free)
**Study approach:** This node is deliberately not a training course: the goal is that a model card becomes readable and the behaviour of a deployed model becomes predictable. Understand an embedding as a learned position in a space where distance means similarity, because that single idea underpins retrieval, clustering and the way text and images are compared later. Understand attention as learned retrieval, each position forming a query and comparing it against every other position's key to decide what to pull in, and understand that this comparison is quadratic in sequence length, which is why context is expensive and why a long prompt costs more than proportionally. Understand tokenization, since it explains why a model counts characters badly, why some languages cost far more per word and why a context limit is measured in tokens. Understand the next-token objective as the source of the model's characteristic behaviours, including repetition under low-temperature sampling and fluent invention when it has no grounding. Understand backpropagation at the level of knowing that the model is fitted by following gradients, which is enough to reason about what fine-tuning can and cannot change.
**Project:** Implement a small transformer from scratch following Karpathy's video, train it on any small text corpus, and write a page explaining what attention is actually computing, in your own words, without equations.

### LLM fundamentals `critical`
**Prerequisites:** Neural network literacy
**Unlocks:** Prompting & structured output, AI evaluation, Embeddings & semantic search, Multimodal applications, LLM serving & inference, LLM fine-tuning
**Tracks:** All specializations
**Resources:**
- **Best match:** DeepLearning.AI short courses on LLM application development (free)
- Documentation for two competing model families (free), why: context limits, pricing per token, sampling parameters and the stated refusal behaviour, compared side by side, because the differences are where the design constraints are
- Provider model cards and changelogs (free)
**Study approach:** The knowledge here is the operating characteristics of the thing you are building on. Understand tokenization concretely, since it sets the context limit, the price and the latency of every call, and it explains why the same text costs differently in different languages. Understand the context window as a hard budget shared by the system prompt, the retrieved material, the conversation and the answer, which is why context engineering becomes a subject at all. Understand sampling: temperature and top-p control how much probability mass the model is allowed to wander into, which is why the same prompt returns different answers twice and why a deterministic-looking setting is still not a guarantee. Understand the model families as a spectrum of cost, latency and capability rather than a ranking, so the design question is which requests need the expensive model rather than which model is best. Understand that a model has no mechanism for knowing when it is wrong, so confident invention is a property of the objective rather than a defect to be patched. Compare two competing providers rather than learning one, because the points where their limits, prices and refusal behaviour disagree are exactly the design constraints you will be forced to work around, and know a model's token cost and latency profile before designing around it.
**Project:** Build a small benchmark harness that runs the same ten prompts against three models, logs tokens, latency and cost per call, and produces a comparison table. Keep it; it becomes the seed of your evaluation work in the next phase.

---

## PHASE 3: Prompting & evaluation

### Prompting & structured output `critical`
**Prerequisites:** LLM fundamentals
**Unlocks:** Context engineering, Guardrails & injection defense, Tool use & function calling
**Tracks:** All specializations
**Resources:**
- **Best match:** Anthropic prompt engineering guide (free)
- OpenAI structured outputs documentation (free), why: how a JSON schema constrains decoding, and which schema constructs are actually supported
- Instructor and Pydantic AI documentation (free), why: validation and automatic retry on a failed parse, which is the pattern worth copying even without the library
**Study approach:** Prompting is the cheapest lever in the stack and the first to exhaust before reaching for retrieval or tuning, and the knowledge is about what a prompt actually does. Understand that a prompt sets the conditional distribution the model samples from, which is why an explicit role, a stated success criterion and a worked example change the output more than polite instruction does, and why a demonstration teaches format far more reliably than a description of format. Understand task decomposition as the main structural tool: a model asked to do four things at once fails at the third, while four smaller calls are individually checkable and individually cheap to fix. Understand where instructions lose their force, namely in the middle of a long context, which is why placement matters. Then understand schema-constrained output as the shift that makes the rest engineering: when the output must satisfy a schema, a bad response becomes a validation error with a field name attached rather than a string you have to parse hopefully, and a validation failure is something you can retry or route. Insist on that from the first line rather than adding it after the parsing bugs appear.
**Project:** Take one messy real task, such as extracting structured fields from invoices or support emails, and build a prompt that returns schema-validated JSON. Track accuracy across at least three prompt revisions and record what each change bought.

### Context engineering `critical`
**Prerequisites:** Prompting & structured output
**Unlocks:** RAG & vector DBs, Multi-agent systems, Cost & latency engineering
**Tracks:** All specializations
**Resources:**
- **Best match:** Provider prompt-caching documentation (free), why: what makes a prefix cacheable, how long an entry lives and how it is billed, since this is the single largest cost lever in a long-context application
- Published context-engineering write-ups from agent teams (free)
- Long-context evaluation papers (free arXiv)
**Study approach:** Deciding what goes into the window and what stays out: chunking, summarization, memory, caching and budgets. This is usually the difference between a demo and a product, and the practice is currently ahead of the textbooks, so read what teams publish rather than waiting for a course. Remember that a model attends unevenly across a long context, so more context is not automatically better.
**Project:** Take a conversational feature and give it memory that survives a long session within a fixed token budget: summarize older turns, cache the stable prefix, and measure the cost per turn before and after.

### AI evaluation `critical`
**Prerequisites:** LLM fundamentals, Machine learning
**Unlocks:** LLM observability & tracing, LLM judges & human review, Feedback loops & data flywheel, AI safety & governance, Reasoning & long-horizon agents, AI systems architecture, Domain vertical, Capstone: Applied AI
**Tracks:** All specializations
**Resources:**
- **Best match:** *AI Engineering*, Chip Huyen (paid, ~$50)
- Ragas and OpenAI Evals repositories (free)
- DeepLearning.AI, *Building and Evaluating Advanced RAG* (free)
**Study approach:** This is the discipline; everything else is plumbing around it, which is why it sits in Phase 3, before retrieval and agents, rather than at the end. Task-specific benchmarks, building an evaluation set, a first LLM-as-judge, regression gates in continuous integration, and offline versus online measurement. Judges are biased toward verbosity and toward their own outputs, so calibrate them against human labels before trusting one; the Evaluation & trust specialization takes that further in LLM judges & human review. The single habit that separates this path from prompt-tinkering: no change ships without a number attached.
**Project:** Build an evaluation suite for the extraction prompt from Prompting & structured output (or any system you already have), wire it into CI so a pull request fails on regression, and then deliberately introduce a regression to prove the gate works. Publish the harness, and keep extending it through every later phase.

### Guardrails & injection defense `critical`
**Prerequisites:** Prompting & structured output
**Tracks:** AI product & retrieval / Agentic systems / Evaluation & trust
**Resources:**
- **Best match:** OWASP GenAI Security Project, *LLM Top 10* (free)
- Provider safety and trust documentation (free), why: the built-in refusal behaviour and content filters, so you know what the model already blocks and what remains yours to handle
- See also the AI Security roadmap on this site, why: the adversarial depth this node only introduces
**Study approach:** The core insight is that a language model has no architectural separation between instructions and data: everything arrives as one sequence of tokens, so any text that reaches the context can act as an instruction. Understand why that makes prompt injection a design problem rather than a filtering problem, and why no amount of asking the model to ignore later instructions is a control. Understand indirect injection as the dangerous form, where the hostile text is not typed by your user but sits inside a web page, a PDF or a retrieved document that your system fetched on their behalf, which is why a file uploaded in good faith by one user can carry an attack written by someone else. Understand that the real defence is on the privilege side rather than the text side: a model that cannot reach a destructive tool cannot be talked into using one, so tool scopes, read-only credentials and a confirmation step on consequential actions are what actually bound the damage. Understand output handling as the second half, since model output rendered into a page or passed to a shell is an injection path of the ordinary software kind. Treat filtering as useful and insufficient, and assume anything your system ingests may be hostile.
**Project:** Red-team your own feature. Plant an injection in content it will read, such as an uploaded document or an email, get it to take an action it should refuse, then fix it and write up both the attack and the mitigation. Repeat the exercise against your retrieval and agent work in the next two phases.

---

## PHASE 4: Retrieval & tools

### Embeddings & semantic search `critical`
**Prerequisites:** LLM fundamentals, SQL & data access
**Unlocks:** RAG & vector DBs
**Tracks:** All specializations
**Resources:**
- **Best match:** Sentence-Transformers documentation (free), why: how a sentence embedding is produced and pooled, the similarity functions, and why a symmetric and an asymmetric retrieval task need different models
- pgvector documentation (free), why: the HNSW and IVFFlat index types, their build and query parameters, and the recall against latency trade each one makes
- MTEB embedding leaderboard (free)
**Study approach:** Embedding models, vector similarity, index structures such as HNSW and IVF, and hybrid search that combines keyword and vector scores. Start in the database you already run rather than adopting a dedicated vector store on day one; most teams never outgrow pgvector, and the ones that do know exactly why. Hybrid search beats pure vector search on most real corpora, because exact terms and identifiers matter.
**Project:** Index a corpus of at least ten thousand documents, build both keyword and vector search over it, then a hybrid ranker. Write twenty realistic queries with known correct answers and report recall at 10 for all three.

### RAG & vector DBs `critical`
**Prerequisites:** Embeddings & semantic search, Context engineering
**Unlocks:** Advanced retrieval, Capstone: Applied AI
**Tracks:** All specializations
**Resources:**
- **Best match:** DeepLearning.AI, *Building and Evaluating Advanced RAG* (free)
- LlamaIndex documentation (free), why: the ingestion and chunking strategies and the node postprocessors that rerank; read it for the patterns rather than to adopt the framework
- LangChain documentation (free), why: the retrieval and prompt-composition abstractions, worth knowing because other people's code is full of them
**Study approach:** Chunking strategy, retrieval, reranking and citation, and above all the failure modes: missing context, distracting passages, and answers that quietly ignore what was retrieved. Measure retrieval separately from generation, because a bad answer has two possible causes and mixing them makes the system unimprovable. The habit that matters: every answer cites its sources, and you check that the citations actually support the claim.
**Project:** Build a question-answering system over the corpus from the previous node with inline citations, then produce an evaluation set of fifty questions and report retrieval quality and answer quality as two separate numbers.

### Tool use & function calling `critical`
**Prerequisites:** Prompting & structured output
**Unlocks:** Multi-agent systems, MCP & tool protocols, Capstone: Applied AI
**Tracks:** All specializations
**Resources:**
- **Best match:** Provider function-calling documentation (free), why: how a tool schema is declared, how a tool call and its result are returned to the model, and how parallel and failed calls are handled
- Anthropic tool-use guide (free)
**Study approach:** Function calling is the point where a model stops producing text and starts causing effects, and the knowledge is about containing that. Understand the mechanism plainly: you declare a schema, the model emits a structured request, your code executes it and returns the result into the context, so the model never runs anything itself and every actual action is yours. Understand that the schema and its descriptions are the prompt for this behaviour, which is why a vague parameter name produces a wrongly populated call, and why validating arguments at the boundary is not optional. Understand error handling as the part that decides whether the feature survives users: a tool that returns a useful, specific error lets the model correct itself, while one that throws or returns nothing produces a loop or an invented result. Understand idempotency as the structural defence, because a model will retry and you often cannot tell a retry from a new intent, so the same call arriving twice must not charge twice or send twice. Understand that deciding which actions may run unsupervised is a risk decision rather than a technical one: reads are cheap to get wrong, writes and payments are not, and a confirmation step is how that line is drawn.
**Project:** Give a model three real tools, one of which is destructive, and build the confirmation and validation layer around them. Write tests covering a malformed argument, a tool timeout and a repeated call, and show the system behaves sanely in each.

### Advanced retrieval `desirable`
**Prerequisites:** RAG & vector DBs
**Tracks:** AI product & retrieval
**Resources:**
- **Best match:** Ragas documentation (free), why: the metrics that separate retrieval quality from answer quality, context precision and recall against faithfulness, which is the split that makes a RAG system improvable
- Published retrieval-evaluation write-ups from practitioner teams (free)
- Papers on query rewriting and reranking (free arXiv)
**Study approach:** Query rewriting, multi-hop retrieval, metadata filtering, freshness, and permission-aware retrieval so a user never sees a document they should not. The last one is not optional in an enterprise setting and is much harder to retrofit than to design in. Multi-hop is where naive systems fail most visibly, because the answer requires combining two documents neither of which is a good match for the question.
**Project:** Extend the previous system with per-user permissions enforced at retrieval time and a multi-hop question set it originally failed. Prove the permission filter with a test that asserts a restricted document never reaches the model.

### Multimodal applications `desirable`
**Prerequisites:** LLM fundamentals
**Unlocks:** Vision-language models
**Tracks:** AI product & retrieval / Agentic systems
**Resources:**
- **Best match:** Provider vision and audio API documentation (free), why: how an image or audio clip is tokenized and billed, the resolution and duration limits, and which modalities can be combined in one request
- Open document-understanding benchmarks (free)
**Study approach:** Documents, images and audio as model input: OCR-free document understanding, screenshots and charts. The engineering burden is mostly evaluation, because a wrong reading of a table is harder to detect automatically than a wrong sentence. Cost also changes shape, since images consume tokens in ways that surprise people who budgeted for text. For the agents specialization, screenshots are the input that computer-use agents act on, which is why this node leads to vision-language models.
**Project:** Build a pipeline that extracts structured data from scanned or photographed documents, then measure per-field accuracy against a hand-labelled set of at least a hundred documents and report cost per document.

---

## PHASE 5: Agents, tuning & serving

### LLM observability & tracing `critical`
**Prerequisites:** AI evaluation, Docker & CI/CD
**Unlocks:** Cost & latency engineering, Feedback loops & data flywheel, Capstone: Applied AI
**Tracks:** All specializations
**Resources:**
- **Best match:** OpenTelemetry GenAI semantic conventions (free)
- Langfuse documentation (free), why: tracing a multi-step LLM call, and attaching cost, latency and a score to each span
- Arize Phoenix documentation (free), why: finding the failing cases in production traces and feeding them back into an evaluation set
**Study approach:** Tracing a request through prompts, retrievals and tool calls, capturing inputs and outputs for replay, and turning production traffic into evaluation data. Prefer self-hostable and vendor-neutral tooling, because these traces contain user data. The payoff is that production becomes the source of your next evaluation set rather than a place where problems are merely reported. It sits in the spine because every specialization debugs through traces: an agent loop, a retrieval pipeline and a serving fleet all look the same from the outside when they fail.
**Project:** Instrument an existing feature end to end so a single trace shows every prompt, retrieval and tool call with tokens and latency. Then mine a week of real traces into fifty new evaluation cases.

### Multi-agent systems `critical`
**Prerequisites:** Tool use & function calling, Context engineering
**Unlocks:** Reasoning & long-horizon agents
**Tracks:** AI product & retrieval / Agentic systems
**Resources:**
- **Best match:** Anthropic, *Building effective agents* (free)
- LangGraph documentation (free), why: an agent expressed as an explicit state machine with checkpoints, which is what makes a long-running agent resumable and debuggable
- DeepLearning.AI agent short courses (free)
**Study approach:** Planning loops, state, handoffs, termination conditions and budgets. Read the Anthropic piece early, because it is honest about when not to build an agent, and the answer is more often than the field admits: a single well-prompted call with good context beats a five-step agent most of the time and is far easier to debug. When you do build one, cap the loop and the spend explicitly.
**Project:** Build an agent for a task that genuinely needs multiple steps, with a hard step limit, a spend limit and full tracing. Then build the single-call version of the same task and compare quality, latency and cost. Publish both numbers even if the agent loses.

### MCP & tool protocols `desirable`
**Prerequisites:** Tool use & function calling
**Tracks:** Agentic systems / LLM platform & serving
**Resources:**
- **Best match:** Model Context Protocol specification and documentation (free), why: the tool, resource and prompt primitives, the transport, and the authorization model; the protocol's point is that a capability is declared rather than hard-coded
- Reference MCP server implementations (free), why: how a real server scopes its permissions and shapes its errors, which the specification leaves open
**Study approach:** MCP servers and clients, capability discovery, transport and the authorization model for exposing internal systems to an agent. Reading two reference servers teaches the shape faster than the specification does. The security question is the interesting one: an MCP server is an API whose caller is a model, so least privilege matters more than usual.
**Project:** Write an MCP server exposing a real internal capability with scoped permissions, connect it to a client, and document what an attacker could do if they controlled the model's input.

### LLM serving & inference `critical`
**Prerequisites:** LLM fundamentals, Docker & CI/CD
**Tracks:** LLM platform & serving
**Resources:**
- **Best match:** vLLM documentation (free), why: paged attention and continuous batching, and the memory settings that decide how much concurrency one GPU can serve
- SGLang documentation (free), why: prefix caching and structured output, and what changes when many requests share a long prompt
- *AI Engineering*, Chip Huyen, inference optimization chapter (paid, ~$50)
**Study approach:** Continuous batching, KV-cache management, quantized serving and streaming. Read the vLLM documentation on paged attention even if you never self-host, because it explains why throughput and latency trade off the way they do on hosted APIs too. Tail latency under concurrency is the number that matters and the one that looks fine in single-request testing.
**Project:** Self-host an open model, measure tokens per second and p50, p95 and p99 latency across increasing concurrency, then improve one of them through batching or quantization and publish the before and after curves.

### LLM fine-tuning `desirable`
**Prerequisites:** LLM fundamentals
**Tracks:** AI product & retrieval / Evaluation & trust
**Resources:**
- **Best match:** Hugging Face PEFT documentation (free), why: LoRA rank and target-module selection, quantized training, and adapter merging and loading
- DeepLearning.AI short courses on fine-tuning (free)
- Axolotl documentation (free), why: the dataset formats and the training configuration, which is where most fine-tuning effort actually goes
**Study approach:** Fine-tuning changes how a model behaves rather than what it knows, and understanding that distinction prevents most of the wasted effort here. Understand that missing facts are a retrieval problem, since training does not install reliable recall, while format, tone, a specialized vocabulary and a task the base model performs inconsistently are exactly what tuning fixes. Understand low-rank adaptation concretely: the base weights are frozen and a small pair of matrices is learned beside them, which is why memory cost collapses, why the artifact is megabytes rather than gigabytes, why it can be swapped per customer, and why catastrophic forgetting is largely avoided. Understand quantized training as the same idea with the base model held in four bits, which is what puts this work on one ordinary GPU. Understand the difference between instruction tuning, which teaches the shape of a good response, and preference tuning, which teaches which of two acceptable responses is better, since they need different data and answer different complaints. Understand that the dataset is the work: a few thousand clean, consistent examples beat a large noisy set, and without a domain evaluation written before training you cannot tell whether anything improved. Reach for this after prompting, retrieval and evaluation are exhausted, not before.
**Project:** Fine-tune a small open model on a task where prompting measurably plateaued. Report the baseline, the tuned result and the total cost, and state honestly whether it was worth it.

### LLM judges & human review `critical`
**Prerequisites:** AI evaluation
**Tracks:** Evaluation & trust
**Resources:**
- **Best match:** Hamel Husain's LLM-as-a-judge and evals guides at hamel.dev (free)
- Paper: *Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena*, Zheng et al. (free arXiv)
- Maven, *AI Evals For Engineers & PMs*, Hamel Husain and Shreya Shankar (paid)
**Study approach:** The depth an evaluation specialist needs beyond the spine course. An LLM judge is itself a model that needs evaluating: measure its agreement with human labels before trusting it, and know its documented biases (position, verbosity, preference for its own outputs). Most of the work is on the human side: writing annotation guidelines precise enough that two reviewers agree, measuring inter-rater agreement, and designing a review queue that people actually clear. Prefer binary pass or fail judgements on one failure mode at a time over a vague one-to-ten score, because a score nobody can act on is noise with a decimal point.
**Project:** Hand-label two hundred outputs from one of your systems with a written rubric, have a second person label a subset, and report the agreement. Then build an LLM judge for the same rubric, measure its agreement with the human labels, iterate until it is close enough to trust, and publish the rubric, the labels and the disagreement cases.

---

## PHASE 6: Production & scale

### Distributed systems `critical`
**Prerequisites:** APIs & backend services, Docker & CI/CD
**Unlocks:** Cloud ML platforms, AI systems architecture
**Tracks:** All specializations
**Resources:**
- **Best match:** *Designing Data-Intensive Applications*, Kleppmann (paid, ~$60)
- Amazon Builders' Library (free), why: the articles on timeouts, retries with backoff and jitter, and load shedding, which is the operational core of this subject
**Study approach:** An LLM call is a slow, flaky, expensive network dependency, and this node is the body of knowledge for surviving those. Understand partial failure as the defining condition: a request that times out may have succeeded, so you cannot tell a dead dependency from a slow one, and every design decision here follows from that ambiguity. Understand idempotency as the practical answer, because a retry you cannot distinguish from a duplicate is how a user gets charged twice or an agent performs an action twice, and an idempotency key is cheap insurance. Understand retries with exponential backoff and jitter, and understand why naive retries make an overloaded dependency worse, which is what a circuit breaker and load shedding exist to prevent. Understand queues as the way a slow dependency is decoupled from a user-facing request, and the cost they add in complexity and eventual consistency. Understand caching as both a cost and a correctness decision, since a cached answer is a stale answer. Understand timeouts as a product decision rather than a configuration value: the number you choose determines what the user experiences when the model is slow. Kleppmann repays a slow read, and the Builders' Library articles are short and unusually honest about failure.
**Project:** Redesign one of your features to survive the provider being down: queue the work, degrade the experience gracefully rather than erroring, and retry with backoff and a dead-letter path. Prove it by blocking the provider at the network level.

### Cloud ML platforms `desirable`
**Prerequisites:** Docker & CI/CD, Distributed systems
**Unlocks:** Kubernetes for ML
**Tracks:** LLM platform & serving
**Resources:**
- **Best match:** Documentation for one major cloud's AI platform (free), why: the managed model endpoints, the identity and quota model, and the private-networking options, since those decide what you may actually deploy in a regulated setting
- Provider data-processing and residency terms (free)
**Study approach:** The knowledge here is about constraints a cloud imposes rather than buttons it offers. Understand that GPU capacity is genuinely scarce and quota-bound, so availability in a given region at a given size is an architectural input, not a detail, and a design that assumes elastic GPUs will fail at the worst moment. Understand the identity and permission model well enough to grant a service exactly what it needs, because an over-privileged inference service is the ordinary route to a serious incident. Understand private networking and data residency as the questions that actually decide architectures in regulated industries: where the request travels, whether it leaves a jurisdiction, and whether the provider may retain or train on it, which is why the processing terms matter and the marketing page does not. Understand the cost structure, that managed endpoints are billed for provisioned time rather than for use, so an idle endpoint is a recurring charge and scale-to-zero is a real decision. Understand the lock-in gradient: a model API is easy to leave, a managed pipeline and feature store far less so. Depth in one cloud beats a tour of three.
**Project:** Deploy a model-backed service on one cloud with private networking and no public egress to the provider, then document the data path end to end and where it crosses a trust boundary.

### Kubernetes for ML `desirable`
**Prerequisites:** Docker & CI/CD, Cloud ML platforms
**Tracks:** LLM platform & serving
**Resources:**
- **Best match:** Kubernetes documentation (free), why: pods, deployments and services, requests and limits, and how a GPU is requested; the cluster-administration material is not the point
- KServe documentation (free), why: the inference-service abstraction, autoscaling on request load and scale-to-zero, and canary traffic splitting between model versions
- *Kubernetes in Action*, Luksa (paid, ~$50)
**Study approach:** Understand Kubernetes as a reconciliation loop before anything else: you declare the state you want and a controller works continuously to make reality match, which is why debugging means asking why the desired state is not being reached rather than why a command failed. Understand requests and limits, since a request is what the scheduler reserves and a limit is what the kernel enforces, and getting them wrong is how a pod is either unschedulable or killed under memory pressure. Understand that a GPU is not a divisible resource like CPU: it is requested as a whole device, so a pod holds it whether or not it is using it, which makes packing and scheduling the central cost question for inference. Understand autoscaling as the place this differs most from ordinary web workloads, because an inference pod waiting on a GPU looks idle to a CPU-based autoscaler while requests pile up behind it, so the signal must be queue depth or concurrency. Understand rollout strategy and readiness probes as what makes a model version change safe, since a pod that reports ready before its weights have loaded will drop the first requests, and understand a canary split as the way a new model is judged on real traffic before it owns all of it.
**Project:** Run an inference service on Kubernetes with autoscaling driven by queue depth, then load-test it through a traffic spike and show the scaling behaviour and the latency impact of cold starts.

### Cost & latency engineering `critical`
**Prerequisites:** Context engineering, LLM observability & tracing
**Tracks:** AI product & retrieval / LLM platform & serving
**Resources:**
- **Best match:** Provider pricing and prompt-caching documentation (free), why: the per-token prices by model and modality, the cache write and read rates, and the batch discount, which together are the whole cost model
- Published cost-reduction case studies (free)
**Study approach:** Token budgets, prompt caching, model routing and cascades, and batching. The wins are repeatable and rarely obvious: caching a long stable system prompt, routing easy requests to a cheaper model and escalating only on low confidence, and batching anything not user-facing. Know the unit economics of a feature before it ships, because retrofitting them means changing the product. Traces are the measuring instrument here, which is why observability comes first; on the platform specialization, LLM serving & inference adds the self-hosted side, where batching and KV-cache behaviour set the cost floor.
**Project:** Take a working feature and cut its cost per request by at least half without a measurable quality regression, proven by the evaluation suite. Write up which lever contributed what.

### Feedback loops & data flywheel `desirable`
**Prerequisites:** AI evaluation, LLM observability & tracing
**Tracks:** AI product & retrieval / Evaluation & trust
**Resources:**
- **Best match:** *AI Engineering*, Chip Huyen, data chapters (paid, ~$50)
- Argilla documentation (free), why: how a labeling task and a review queue are structured, and how annotator agreement is measured
**Study approach:** Capturing thumbs, corrections and abandonment, curating them into evaluation and tuning sets, and closing the loop so the system improves from use. Human review needs tooling or it silently does not happen. Design the feedback capture into the interface early, because retrofitting a signal that users have already learned to ignore is much harder than adding one.
**Project:** Add a feedback mechanism to a live or simulated system, build the review queue, and turn one month of signal into an expanded evaluation set. Report how many captured items were actually usable, which is usually a sobering number.

### AI safety & governance `desirable`
**Prerequisites:** AI evaluation
**Tracks:** Evaluation & trust
**Resources:**
- **Best match:** NIST AI Risk Management Framework (free)
- EU AI Act explorer (free)
- See also the AI Security roadmap on this site, why: the red-teaming and incident-response depth this node only introduces
**Study approach:** Risk classification, model and system cards, red-teaming, incident response and the documentation a regulated deployment must produce. It belongs to the Evaluation & trust specialization, and is worth literacy even for engineers on the other three, because in regulated sectors it determines what may ship at all. The engineering-relevant insight is that most of the required evidence is exactly the evaluation and tracing work from the previous nodes, presented differently.
**Project:** Write a system card for something you have built: intended use, out-of-scope uses, evaluation results, known failure modes and the mitigations. Then map it against one framework and note what is missing.

### Vision-language models `frontier`
**Prerequisites:** Multimodal applications
**Tracks:** AI product & retrieval / Agentic systems
**Resources:**
- **Best match:** Provider computer-use documentation (free), why: the screenshot and action loop, the stated reliability limits, and the sandboxing and confirmation guidance, which is the part that decides whether this is deployable
- Open vision-language benchmarks (free)
**Study approach:** A vision-language model is a vision encoder joined to a language model by a learned projection, and understanding that join explains both the capability and the cost. Understand that an image becomes tokens, often many hundreds of them, so resolution is a direct cost and latency decision rather than a quality setting, and a long screenshot can consume more context than the conversation around it. Understand what this enables, open-ended questions about an interface or a document with no trained class list, which is exactly what classical vision could not do. Then understand the failure modes that make it frontier rather than spine: these models invent plausible detail that is not present, read small or dense text unreliably, lose spatial precision when asked where something is, and report no calibrated confidence, so an agent acting on a misread screen has no signal that it misread it. Understand why a computer-use loop compounds that, since each action changes the screen and an early mistake propagates with nothing to catch it, which is why bounded scopes, confirmation on consequential actions and a step limit are part of the design. Treat published capability claims as upper bounds measured under favourable conditions, and evaluate on your own screens before believing any of them.
**Project:** Automate one real multi-step interface task with a vision-language model, measure the success rate over at least fifty runs, and document every failure mode you saw.

### Reasoning & long-horizon agents `frontier`
**Prerequisites:** Multi-agent systems, AI evaluation
**Tracks:** Agentic systems
**Resources:**
- **Best match:** Provider research posts and arXiv (free)
- Published long-horizon agent evaluations (free)
**Study approach:** Reasoning models, test-time compute, long-running agents and the evaluation problem they create: how to score a task that takes hours and has no single correct answer. The published state moves faster than any course, so track it rather than study it, and be skeptical in both directions. The durable question is measurement, and that is where a reader of this path already has an advantage.
**Project:** Design and publish an evaluation for a long-horizon task in your domain: define what partial credit means, how to score a run that took a different but valid route, and what the human review protocol is.

---

## PHASE 7: Architecture & capstone

### AI systems architecture `critical`
**Prerequisites:** Distributed systems, AI evaluation
**Unlocks:** Technical leadership
**Tracks:** All specializations
**Resources:**
- **Best match:** *AI Engineering*, Chip Huyen (paid, ~$50)
- *Designing Machine Learning Systems*, Chip Huyen (paid, ~$50)
- Write architecture decision records (free)
**Study approach:** Composing the whole thing: where the model boundary sits, what stays deterministic, what happens when the model is wrong or unavailable, and how the pieces are evaluated together rather than individually. The most valuable habit is writing the trade-offs down so other people can argue with them, because at this level the work is judgement and judgement has to be inspectable.
**Project:** Write an architecture decision record for a real system comparing two designs, with requirements, trade-offs, failure modes and a recommendation. Have an engineer who disagrees review it, and record what changed.

### Domain vertical `critical`
**Prerequisites:** AI evaluation
**Tracks:** All specializations
**Resources:**
- **Best match:** No course. Work in the domain and read its regulations
- Build the evaluation set with someone who does the job (free)
**Study approach:** Real depth in one industry: its vocabulary, its documents, its regulations and what counts as a correct answer there. This is the part a general-purpose model cannot supply and a remote generalist cannot copy, and it is what makes an evaluation set trustworthy. Without it you are guessing at what good output looks like, which is the most common reason capable systems fail in production.
**Project:** Build the evaluation set for one industry task alongside a practitioner who does that work daily, and write down every case where your intuition about the right answer was wrong.

### Capstone: Applied AI `critical`
**Prerequisites:** RAG & vector DBs, Tool use & function calling, AI evaluation, LLM observability & tracing
**Tracks:** All specializations
**Resources:**
- **Best match:** No course. Ship it with the evaluation harness public
**Study approach:** The proof that this path is finished. Everything before it exists to make this possible: a real system, evaluated, served within a budget, with the reasoning written down. Scope it small enough to actually finish and real enough that someone other than you uses it. Let the specialization set its centre of gravity: a retrieval product, an agent with a hard budget, a self-hosted model behind a cost target, or an evaluation and review pipeline for someone else's system.
**Project:** Ship one LLM system in production shape: retrieval or tools, a real evaluation suite with a regression gate in CI, cost and latency budgets that are measured rather than estimated, tracing, and a written account of what the evaluations caught before users did. Publish the repository and the harness. The harness is the part that is hard to fake and therefore the part that gets you hired.

### Technical leadership `desirable`
**Prerequisites:** AI systems architecture
**Tracks:** All specializations
**Resources:**
- **Best match:** *Staff Engineer*, Will Larson, free web edition at staffeng.com (free; paid, ~$25 print), why: how influence works without authority, and why writing is the instrument that scales it
- Write and publish (free)
**Study approach:** Technical leadership is influence without authority, and the knowledge is about where that influence comes from. Understand that at this level your output is other people's decisions, so the work is choosing which problems the team should have and making the reasoning behind a direction legible enough that others can act on it without you present. Understand writing as the primary instrument, because a design document or a well-argued proposal scales across people and time in a way a conversation does not, which is why the engineers who are listened to are usually the ones who write. Understand that most technical disagreement is really a disagreement about priorities or about an unstated assumption, so surfacing the assumption settles more arguments than being right does. Understand the field-specific version of the job: the most valuable call you will make is often that a proposed AI feature should be a database query, a rule or a form, and making that argument well requires knowing the cost, the failure modes and the evaluation burden the alternative carries. Understand that a technically better solution nobody adopts has produced nothing, so adoption cost is part of the design. Reputation here is built in public, so the writing habit from the English node compounds directly into this one.
**Project:** Lead one technical decision end to end: write the proposal, run the review, absorb the disagreement, ship the outcome and publish a retrospective. Then give the talk version of it.

---
## Parallel Track: English Proficiency (Highest ROI)

This field is English-first to an unusual degree. Model documentation, provider changelogs, the research and the practitioner write-ups that carry the actual state of the art all appear in English, often weeks or months before anything else. The material also turns over fast enough that waiting for translated or localized courses means working from a stale picture.

Reading is the low bar and most engineers clear it. The return comes from writing, because technical influence in this field is exercised in public writing: a good evaluation write-up circulates further than a good implementation. It also compounds directly into the leadership node, where the deliverable is a document that changes a decision.

**Practice:** write every design note, README and retrospective in English; read provider changelogs and two or three arXiv abstracts a week; and publish something short every quarter. The habit matters more than the audience.

---

## Critical Path (Summary)

The spine, in dependency order. Every track runs through all of it:

**Python → APIs & backend services → Docker & CI/CD → Testing & code quality → Machine learning → Neural network literacy → LLM fundamentals → Prompting & structured output → Context engineering → AI evaluation → Embeddings & semantic search → RAG & vector DBs → Tool use & function calling → LLM observability & tracing → Distributed systems → AI systems architecture → Domain vertical → Capstone**

With SQL, Git, Linux and probability as ungated starting nodes, and technical leadership after architecture.

Two observations about this ordering. Evaluation sits in Phase 3, ahead of retrieval and agents, and that placement is deliberate: the benchmark harness built during LLM fundamentals is already the seed of it, and engineers who put measurement off until the end spend the middle of the path unable to tell whether anything they did helped. Second, Domain vertical looks soft next to the technical nodes and is the one most often skipped. It is what makes an evaluation set trustworthy, which makes it load-bearing rather than decorative.

---

## Specializations, Phase by Phase

Each specialization is the spine plus the branch courses below. Phases 0 to 2 and Phase 7 are spine only, so every specialization shares them.

| Phase | Spine (every specialization) | AI product & retrieval | Agentic systems | LLM platform & serving | Evaluation & trust |
|-------|------------------------------|------------------------|-----------------|------------------------|--------------------|
| P0 | Python, Git, Linux, SQL, Probability & statistics | | | | |
| P1 | APIs & backend services, Docker & CI/CD, Testing | | | | |
| P2 | Machine learning, Neural network literacy, LLM fundamentals | | | | |
| P3 | Prompting, Context engineering, AI evaluation | Guardrails | Guardrails | | Guardrails |
| P4 | Embeddings, RAG, Tool use | Advanced retrieval, Multimodal | Multimodal | | |
| P5 | LLM observability & tracing | Multi-agent systems, Fine-tuning | Multi-agent systems, MCP | MCP, LLM serving | Fine-tuning, LLM judges & human review |
| P6 | Distributed systems | Cost & latency, Feedback loops, Vision-language models | Vision-language models, Reasoning & long-horizon agents | Cloud ML platforms, Kubernetes, Cost & latency | Feedback loops, AI safety & governance |
| P7 | AI systems architecture, Domain vertical, Capstone, Technical leadership | | | | |

English working fluency and AI-assisted dev workflows are electives open to every specialization and sit outside this count.

---

## Books, Essential Reading

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **AI Engineering**, Chip Huyen | P3 | `critical` | (paid, ~$50) | The closest thing to a textbook for this path. The evaluation chapters are the most practical published treatment anywhere. Read it first. |
| 2 | **Designing Data-Intensive Applications**, Kleppmann | P6 | `critical` | (paid, ~$60) | Still the best systems book written. An LLM call is a slow, flaky, expensive dependency, and this is how those are handled. |
| 3 | **Designing Machine Learning Systems**, Chip Huyen | P7 | `desirable` | (paid, ~$50) | The lifecycle and data chapters. Complements the above rather than repeating it. |
| 4 | **Architecture Patterns with Python**, Percival & Gregory | P1 | `desirable` | (free) | Free online. The testing chapters teach how to treat an unreliable external service as a design problem. |
| 5 | **Hands-On Machine Learning**, Geron | P2 | `desirable` | (paid, ~$50) | Chapters 1 to 4 only. Framing and metrics vocabulary, not the algorithms. |
| 6 | **Staff Engineer**, Will Larson | P7 | `desirable` | (free; paid, ~$25 print) | Free at staffeng.com. For the individual-contributor leadership path. |

---

## Certifications

Blunt assessment: certifications carry less weight in this path than in almost any other on this site. There is no established, respected credential for LLM application engineering, and the vendor courses that exist certify familiarity with an API that will have changed by the time anyone reads your CV.

What substitutes for a credential here:
- **A public repository with a real evaluation harness.** The single strongest signal available. It demonstrates the one skill that is scarce and cannot be faked in an interview.
- **A written account of a system you shipped**, including what the evaluations caught and what they missed.
- **Cloud certifications** are worth it only if the platform track is the target, and then for the infrastructure knowledge rather than the badge.

Provider short courses are useful for learning and worthless as credentials. Take them for the content, list them nowhere prominent.

---

## Cost & Time

**Money.** This path is unusually cheap to study. Almost every resource above is free, the essential books total roughly $160, and the one real recurring cost is API usage while building and evaluating. Budget perhaps $20 to $50 a month for that, and note that evaluation runs are the part that surprises people: a suite of two hundred cases run on every pull request costs real money, which is itself a lesson in cost engineering.

**Time.** Each phase is a quarter of consistent part-time study, so one specialization from Phase 0 to Phase 7 is eight quarters, about two years. Someone already employed as a software engineer will move through Phases 0 and 1 faster and should tick those nodes off rather than repeat them. The capstone deserves a genuine month of the final quarter rather than a weekend.

**Where the time actually goes.** Expect the split to be uncomfortable: perhaps a quarter of the effort on prompting, retrieval and agents, and the rest on evaluation, observability, cost and the unglamorous systems work around them. That ratio is not a failure of the plan. It is the difference between this path and a tutorial.

---

## Sources & Notes

Resource names and course titles were current when written and change often, particularly the provider short courses. Verify before paying for anything. Where a specific course title could not be confirmed, this document names the provider and topic rather than inventing a title.

Prices are approximate and in US dollars. Model pricing, context limits and capability claims move fast enough that any specific figure in the study notes should be treated as illustrative rather than current.
