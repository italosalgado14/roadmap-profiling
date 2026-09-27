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
- **Best match:** git-scm.com tutorial and *Pro Git* book, chapters 1 to 3 (free)
- GitHub Skills interactive courses (free)
**Study approach:** Branches, rebase versus merge, pull requests and review. Nothing exotic, but every later node assumes work is committed in reviewable increments rather than one heroic push.
**Project:** Take an existing script, put it under version control with a meaningful commit history, open a pull request against yourself, and review it as if a stranger wrote it.

### Linux & CLI `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD
**Tracks:** All specializations
**Resources:**
- **Best match:** MIT, *The Missing Semester of Your CS Education* (free)
- Linux Journey (free)
**Study approach:** Enough shell to run, inspect and debug a service: processes, ports, environment variables, logs, SSH and file permissions. This is not systems administration. The goal is to never be blocked because a container will not start.
**Project:** Deploy any small web service to a cheap VPS by hand, with systemd keeping it alive and logs going somewhere you can read them. Write down every command that worked.

### SQL & data access `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Embeddings & semantic search
**Tracks:** All specializations
**Resources:**
- **Best match:** ThoughtSpot SQL tutorial, formerly the Mode Analytics tutorial (free)
- *Use The Index, Luke* (free)
- PostgreSQL documentation, indexing and query planning (free)
**Study approach:** Most retrieval systems are a database problem wearing an AI hat, and most latency problems are a missing index. Learn joins, aggregation, transactions and how to read a query plan. Pay particular attention to indexing, because the same instinct transfers directly to vector search later.
**Project:** Load a public dataset of at least a million rows into PostgreSQL, write five analytical queries, then make the slowest one ten times faster and explain the plan before and after.

### Probability & statistics `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Machine learning
**Tracks:** All specializations
**Resources:**
- **Best match:** *Think Stats* (free)
- Coursera, *Statistics with Python*, University of Michigan (Coursera Plus)
- StatQuest video series (free)
**Study approach:** The literacy required to say whether an evaluation result means anything. Distributions, sampling, variance, confidence intervals and the difference between a real improvement and noise on forty examples. This is not a mathematics track; it is the statistics needed to avoid shipping a regression because the eval set was too small.
**Project:** Take any pair of model configurations, run them on the same task, and write a short report stating the difference, the confidence interval, and how many examples would be needed to detect a five percent change.

### English working fluency `desirable`
**Prerequisites:** None, this is a starting node
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Any structured B2 to C1 program
- Practice: write every design note and README in English (free)
- Read arXiv abstracts and provider changelogs daily (free)
**Study approach:** A continuous lane rather than a phase. Model documentation, research and the widest job market are English-first, and this field turns over faster than translations appear. Reading is the low bar; the return comes from writing, because technical influence in this field is exercised in writing.
**Project:** Publish three technical write-ups in English over twelve months. Any topic from this roadmap counts. The point is the output habit, not the audience.

---

## PHASE 1: Software core

### APIs & backend services `critical`
**Prerequisites:** Python
**Unlocks:** Distributed systems
**Tracks:** All specializations
**Resources:**
- **Best match:** FastAPI documentation (free)
- *Architecture Patterns with Python*, Percival & Gregory, free online edition (free)
- MDN, *Server-sent events* (free)
**Study approach:** An LLM feature is a backend service with an unusually slow, unreliable and expensive dependency. Learn HTTP APIs, authentication, background jobs, queues, timeouts and cancellation, and how to stream a response to a browser token by token. Streaming is not a nicety here: a ten-second wait with no output reads as broken, and the same response streamed reads as fast.
**Project:** Build an API that proxies a model provider with streaming responses, per-user rate limiting, request timeouts and a background job queue for anything slow. Load-test it and record what happens at the limit.

### Docker & CI/CD `critical`
**Prerequisites:** Linux & CLI, Git & version control
**Unlocks:** LLM observability & tracing, LLM serving & inference, Distributed systems, Cloud ML platforms, Kubernetes for ML
**Tracks:** All specializations
**Resources:**
- **Best match:** Docker getting started (free)
- GitHub Actions documentation (free)
**Study approach:** Containers, Compose, and a pipeline that runs tests on every pull request. The reason it sits this early is that evaluation later has to run in CI, and a pipeline is much easier to add before there is anything to migrate.
**Project:** Containerize the API from the previous node, add a Compose file that brings up the service and a database together, and wire a pipeline that builds the image and runs the test suite on every push.

### Testing & code quality `critical`
**Prerequisites:** Python, Git & version control
**Tracks:** All specializations
**Resources:**
- **Best match:** pytest documentation (free)
- *Architecture Patterns with Python*, testing chapters (free)
**Study approach:** Unit and integration tests, fixtures, and the specific problem of testing against a non-deterministic dependency. The answer is to push the model call to the edge of the system behind an interface, mock it in unit tests, and test the real thing separately and deliberately. Engineers who skip this node write evaluation harnesses that cannot run offline and therefore do not run at all.
**Project:** Refactor the API so every model call goes through one interface, then write a test suite that runs fully offline against recorded responses, plus a small separate suite that hits the real provider and is not part of the default run.

### AI-assisted dev workflows `desirable`
**Prerequisites:** Python, Git & version control
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Anthropic Claude Code documentation (free)
- Anthropic prompt engineering guide (free)
- Model Context Protocol documentation (free)
**Study approach:** Coding agents, prompt design for engineering tasks and reviewing machine-written diffs. Treat it as a multiplier on everything else in this roadmap rather than a topic. The discipline that matters is review: never merge generated code you would not accept from a junior engineer, and verify that every imported dependency actually exists.
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
**Study approach:** Enough to reason about a model, not to train one from scratch. Supervised learning, train and test splits, overfitting, and the metrics vocabulary: precision, recall, F1, calibration. The framing chapters matter more than the algorithms here, because this path consumes models rather than fitting them.
**Project:** Train a simple classifier on a public dataset, then deliberately overfit it and show the gap between training and held-out performance. Write one paragraph on which metric you would report to a product owner and why.

### Neural network literacy `critical`
**Prerequisites:** Machine learning
**Unlocks:** LLM fundamentals
**Tracks:** All specializations
**Resources:**
- **Best match:** Andrej Karpathy, *Let's build GPT* (free)
- 3Blue1Brown, neural networks series (free)
- Jay Alammar, *The Illustrated Transformer* (free)
**Study approach:** Backpropagation, embeddings, attention and the transformer block, at the depth needed to read a model card and predict behaviour. This is deliberately not a PyTorch training course. The goal is that context windows, tokenization costs and why a model repeats itself all stop being magic.
**Project:** Implement a small transformer from scratch following Karpathy's video, train it on any small text corpus, and write a page explaining what attention is actually computing, in your own words, without equations.

### LLM fundamentals `critical`
**Prerequisites:** Neural network literacy
**Unlocks:** Prompting & structured output, AI evaluation, Embeddings & semantic search, Multimodal applications, LLM serving & inference, LLM fine-tuning
**Tracks:** All specializations
**Resources:**
- **Best match:** DeepLearning.AI short courses on LLM application development (free)
- Documentation for two competing model families (free)
- Provider model cards and changelogs (free)
**Study approach:** Tokenization, context windows, sampling parameters, model families and their trade-offs, and why the same prompt returns different answers twice. Read the documentation of two competing providers rather than one, because the differences are where the real design constraints show up. The habit that matters: know the token cost and latency profile of the model you are calling before you design around it.
**Project:** Build a small benchmark harness that runs the same ten prompts against three models, logs tokens, latency and cost per call, and produces a comparison table. Keep it; it becomes the seed of your evaluation work in the next phase.

---

## PHASE 3: Prompting & evaluation

### Prompting & structured output `critical`
**Prerequisites:** LLM fundamentals
**Unlocks:** Context engineering, Guardrails & injection defense, Tool use & function calling
**Tracks:** All specializations
**Resources:**
- **Best match:** Anthropic prompt engineering guide (free)
- OpenAI structured outputs documentation (free)
- Instructor and Pydantic AI documentation (free)
**Study approach:** System prompts, few-shot design, task decomposition, and schema-constrained output. Prompting is the cheapest lever in the stack and the first one to exhaust before reaching for retrieval or tuning. Insist on structured output from the start: a schema turns a parsing problem into a validation problem, and validation failures are actionable.
**Project:** Take one messy real task, such as extracting structured fields from invoices or support emails, and build a prompt that returns schema-validated JSON. Track accuracy across at least three prompt revisions and record what each change bought.

### Context engineering `critical`
**Prerequisites:** Prompting & structured output
**Unlocks:** RAG & vector DBs, Multi-agent systems, Cost & latency engineering
**Tracks:** All specializations
**Resources:**
- **Best match:** Provider prompt-caching documentation (free)
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
- Provider safety and trust documentation (free)
- See also the AI Security roadmap on this site
**Study approach:** Prompt injection and indirect injection, input and output filtering, and least-privilege tool scopes. The single rule that prevents most incidents is that retrieved or user-supplied text is data, never instructions. Assume any content your system ingests may be hostile, including a document a user uploaded in good faith that someone else authored.
**Project:** Red-team your own feature. Plant an injection in content it will read, such as an uploaded document or an email, get it to take an action it should refuse, then fix it and write up both the attack and the mitigation. Repeat the exercise against your retrieval and agent work in the next two phases.

---

## PHASE 4: Retrieval & tools

### Embeddings & semantic search `critical`
**Prerequisites:** LLM fundamentals, SQL & data access
**Unlocks:** RAG & vector DBs
**Tracks:** All specializations
**Resources:**
- **Best match:** Sentence-Transformers documentation (free)
- pgvector documentation (free)
- MTEB embedding leaderboard (free)
**Study approach:** Embedding models, vector similarity, index structures such as HNSW and IVF, and hybrid search that combines keyword and vector scores. Start in the database you already run rather than adopting a dedicated vector store on day one; most teams never outgrow pgvector, and the ones that do know exactly why. Hybrid search beats pure vector search on most real corpora, because exact terms and identifiers matter.
**Project:** Index a corpus of at least ten thousand documents, build both keyword and vector search over it, then a hybrid ranker. Write twenty realistic queries with known correct answers and report recall at 10 for all three.

### RAG & vector DBs `critical`
**Prerequisites:** Embeddings & semantic search, Context engineering
**Unlocks:** Advanced retrieval, Capstone: Applied AI
**Tracks:** All specializations
**Resources:**
- **Best match:** DeepLearning.AI, *Building and Evaluating Advanced RAG* (free)
- LlamaIndex documentation (free)
- LangChain documentation (free)
**Study approach:** Chunking strategy, retrieval, reranking and citation, and above all the failure modes: missing context, distracting passages, and answers that quietly ignore what was retrieved. Measure retrieval separately from generation, because a bad answer has two possible causes and mixing them makes the system unimprovable. The habit that matters: every answer cites its sources, and you check that the citations actually support the claim.
**Project:** Build a question-answering system over the corpus from the previous node with inline citations, then produce an evaluation set of fifty questions and report retrieval quality and answer quality as two separate numbers.

### Tool use & function calling `critical`
**Prerequisites:** Prompting & structured output
**Unlocks:** Multi-agent systems, MCP & tool protocols, Capstone: Applied AI
**Tracks:** All specializations
**Resources:**
- **Best match:** Provider function-calling documentation (free)
- Anthropic tool-use guide (free)
**Study approach:** Exposing functions to a model, validating arguments, recovering from errors, and deciding which actions may run unsupervised. The error-handling section of the guides is the part most people skip and the part that determines whether the feature survives contact with users. Make every tool idempotent where you can, because a model will retry.
**Project:** Give a model three real tools, one of which is destructive, and build the confirmation and validation layer around them. Write tests covering a malformed argument, a tool timeout and a repeated call, and show the system behaves sanely in each.

### Advanced retrieval `desirable`
**Prerequisites:** RAG & vector DBs
**Tracks:** AI product & retrieval
**Resources:**
- **Best match:** Ragas documentation (free)
- Published retrieval-evaluation write-ups from practitioner teams (free)
- Papers on query rewriting and reranking (free arXiv)
**Study approach:** Query rewriting, multi-hop retrieval, metadata filtering, freshness, and permission-aware retrieval so a user never sees a document they should not. The last one is not optional in an enterprise setting and is much harder to retrofit than to design in. Multi-hop is where naive systems fail most visibly, because the answer requires combining two documents neither of which is a good match for the question.
**Project:** Extend the previous system with per-user permissions enforced at retrieval time and a multi-hop question set it originally failed. Prove the permission filter with a test that asserts a restricted document never reaches the model.

### Multimodal applications `desirable`
**Prerequisites:** LLM fundamentals
**Unlocks:** Vision-language models
**Tracks:** AI product & retrieval / Agentic systems
**Resources:**
- **Best match:** Provider vision and audio API documentation (free)
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
- Langfuse documentation (free)
- Arize Phoenix documentation (free)
**Study approach:** Tracing a request through prompts, retrievals and tool calls, capturing inputs and outputs for replay, and turning production traffic into evaluation data. Prefer self-hostable and vendor-neutral tooling, because these traces contain user data. The payoff is that production becomes the source of your next evaluation set rather than a place where problems are merely reported. It sits in the spine because every specialization debugs through traces: an agent loop, a retrieval pipeline and a serving fleet all look the same from the outside when they fail.
**Project:** Instrument an existing feature end to end so a single trace shows every prompt, retrieval and tool call with tokens and latency. Then mine a week of real traces into fifty new evaluation cases.

### Multi-agent systems `critical`
**Prerequisites:** Tool use & function calling, Context engineering
**Unlocks:** Reasoning & long-horizon agents
**Tracks:** AI product & retrieval / Agentic systems
**Resources:**
- **Best match:** Anthropic, *Building effective agents* (free)
- LangGraph documentation (free)
- DeepLearning.AI agent short courses (free)
**Study approach:** Planning loops, state, handoffs, termination conditions and budgets. Read the Anthropic piece early, because it is honest about when not to build an agent, and the answer is more often than the field admits: a single well-prompted call with good context beats a five-step agent most of the time and is far easier to debug. When you do build one, cap the loop and the spend explicitly.
**Project:** Build an agent for a task that genuinely needs multiple steps, with a hard step limit, a spend limit and full tracing. Then build the single-call version of the same task and compare quality, latency and cost. Publish both numbers even if the agent loses.

### MCP & tool protocols `desirable`
**Prerequisites:** Tool use & function calling
**Tracks:** Agentic systems / LLM platform & serving
**Resources:**
- **Best match:** Model Context Protocol specification and documentation (free)
- Reference MCP server implementations (free)
**Study approach:** MCP servers and clients, capability discovery, transport and the authorization model for exposing internal systems to an agent. Reading two reference servers teaches the shape faster than the specification does. The security question is the interesting one: an MCP server is an API whose caller is a model, so least privilege matters more than usual.
**Project:** Write an MCP server exposing a real internal capability with scoped permissions, connect it to a client, and document what an attacker could do if they controlled the model's input.

### LLM serving & inference `critical`
**Prerequisites:** LLM fundamentals, Docker & CI/CD
**Tracks:** LLM platform & serving
**Resources:**
- **Best match:** vLLM documentation (free)
- SGLang documentation (free)
- *AI Engineering*, Chip Huyen, inference optimization chapter (paid, ~$50)
**Study approach:** Continuous batching, KV-cache management, quantized serving and streaming. Read the vLLM documentation on paged attention even if you never self-host, because it explains why throughput and latency trade off the way they do on hosted APIs too. Tail latency under concurrency is the number that matters and the one that looks fine in single-request testing.
**Project:** Self-host an open model, measure tokens per second and p50, p95 and p99 latency across increasing concurrency, then improve one of them through batching or quantization and publish the before and after curves.

### LLM fine-tuning `desirable`
**Prerequisites:** LLM fundamentals
**Tracks:** AI product & retrieval / Evaluation & trust
**Resources:**
- **Best match:** Hugging Face PEFT documentation (free)
- DeepLearning.AI short courses on fine-tuning (free)
- Axolotl documentation (free)
**Study approach:** LoRA and QLoRA, instruction tuning, preference tuning and dataset construction. Reach for this after prompting, retrieval and evaluation are exhausted, not before, because most problems people try to fine-tune away are actually context or evaluation problems. When it is the right tool, the dataset is the work; the training run is the easy part.
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
- Amazon Builders' Library (free)
**Study approach:** Queues, idempotency, retries and backoff, caching, partial failure and consistency. An LLM call is a slow, flaky, expensive network dependency, and this is the body of knowledge for handling those. Kleppmann is still the best systems book written and repays a slow read; the Builders' Library articles are short and unusually honest about failure.
**Project:** Redesign one of your features to survive the provider being down: queue the work, degrade the experience gracefully rather than erroring, and retry with backoff and a dead-letter path. Prove it by blocking the provider at the network level.

### Cloud ML platforms `desirable`
**Prerequisites:** Docker & CI/CD, Distributed systems
**Unlocks:** Kubernetes for ML
**Tracks:** LLM platform & serving
**Resources:**
- **Best match:** Documentation for one major cloud's AI platform (free)
- Provider data-processing and residency terms (free)
**Study approach:** Managed inference, GPU capacity and quotas, private networking, and the compliance posture of sending data to a model provider. Depth in one cloud beats a tour of three. The data question is the one that decides architectures in regulated industries, so read the actual processing terms rather than the marketing page.
**Project:** Deploy a model-backed service on one cloud with private networking and no public egress to the provider, then document the data path end to end and where it crosses a trust boundary.

### Kubernetes for ML `desirable`
**Prerequisites:** Docker & CI/CD, Cloud ML platforms
**Tracks:** LLM platform & serving
**Resources:**
- **Best match:** Kubernetes documentation (free)
- KServe documentation (free)
- *Kubernetes in Action*, Luksa (paid, ~$50)
**Study approach:** Orchestration for inference workloads, GPU scheduling and rollout strategy. The one thing that differs from ordinary web workloads: autoscale on queue depth or concurrency rather than CPU, because an inference pod waiting on a GPU looks idle to a CPU-based autoscaler while requests pile up behind it.
**Project:** Run an inference service on Kubernetes with autoscaling driven by queue depth, then load-test it through a traffic spike and show the scaling behaviour and the latency impact of cold starts.

### Cost & latency engineering `critical`
**Prerequisites:** Context engineering, LLM observability & tracing
**Tracks:** AI product & retrieval / LLM platform & serving
**Resources:**
- **Best match:** Provider pricing and prompt-caching documentation (free)
- Published cost-reduction case studies (free)
**Study approach:** Token budgets, prompt caching, model routing and cascades, and batching. The wins are repeatable and rarely obvious: caching a long stable system prompt, routing easy requests to a cheaper model and escalating only on low confidence, and batching anything not user-facing. Know the unit economics of a feature before it ships, because retrofitting them means changing the product. Traces are the measuring instrument here, which is why observability comes first; on the platform specialization, LLM serving & inference adds the self-hosted side, where batching and KV-cache behaviour set the cost floor.
**Project:** Take a working feature and cut its cost per request by at least half without a measurable quality regression, proven by the evaluation suite. Write up which lever contributed what.

### Feedback loops & data flywheel `desirable`
**Prerequisites:** AI evaluation, LLM observability & tracing
**Tracks:** AI product & retrieval / Evaluation & trust
**Resources:**
- **Best match:** *AI Engineering*, Chip Huyen, data chapters (paid, ~$50)
- Argilla documentation (free)
**Study approach:** Capturing thumbs, corrections and abandonment, curating them into evaluation and tuning sets, and closing the loop so the system improves from use. Human review needs tooling or it silently does not happen. Design the feedback capture into the interface early, because retrofitting a signal that users have already learned to ignore is much harder than adding one.
**Project:** Add a feedback mechanism to a live or simulated system, build the review queue, and turn one month of signal into an expanded evaluation set. Report how many captured items were actually usable, which is usually a sobering number.

### AI safety & governance `desirable`
**Prerequisites:** AI evaluation
**Tracks:** Evaluation & trust
**Resources:**
- **Best match:** NIST AI Risk Management Framework (free)
- EU AI Act explorer (free)
- See also the AI Security roadmap on this site
**Study approach:** Risk classification, model and system cards, red-teaming, incident response and the documentation a regulated deployment must produce. It belongs to the Evaluation & trust specialization, and is worth literacy even for engineers on the other three, because in regulated sectors it determines what may ship at all. The engineering-relevant insight is that most of the required evidence is exactly the evaluation and tracing work from the previous nodes, presented differently.
**Project:** Write a system card for something you have built: intended use, out-of-scope uses, evaluation results, known failure modes and the mitigations. Then map it against one framework and note what is missing.

### Vision-language models `frontier`
**Prerequisites:** Multimodal applications
**Tracks:** AI product & retrieval / Agentic systems
**Resources:**
- **Best match:** Provider computer-use documentation (free)
- Open vision-language benchmarks (free)
**Study approach:** Screen understanding, computer use and document agents. Fast-moving and brittle, which is why it sits in the frontier tier rather than the spine. Treat published capability claims as upper bounds measured under favourable conditions, and evaluate on your own screens before believing anything.
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
- **Best match:** *Staff Engineer*, Will Larson, free web edition at staffeng.com (free; paid, ~$25 print)
- Write and publish (free)
**Study approach:** Setting technical direction, writing that changes decisions, mentoring, and saying no to an AI feature that should be a database query. That last one is the specific leadership skill this field needs and undersupplies. Reputation here is built in public, so the writing habit from the English node compounds directly into this one.
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
