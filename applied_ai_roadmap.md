# Applied AI / LLM Engineering Roadmap
## Building Products on Foundation Models

---

## Executive Summary

**Assumed starting point.** This roadmap assumes a STEM degree and somewhere between little professional experience and solid adjacent software experience, but no particular background in LLM application engineering. If you already work in part of this, tick those nodes off in the curriculum graph and start where the gaps are: clicking a node shows the dependency chain it rests on, so the graph doubles as a gap analysis rather than a fixed course order.

**This is the shortest hop from ordinary software engineering into AI work.** It is also the largest job pool on this site's wide map. The work is building products on top of models somebody else trained: retrieval, tool use, agents, and the evaluation, cost and latency engineering that decides whether any of it survives contact with users. It is not model research and it is not training infrastructure. A competent backend engineer can be usefully productive here in months, which is the reason for both its appeal and its crowding.

**Evaluation is the discipline; everything else is plumbing around it.** That claim shapes this entire roadmap. Prompting, retrieval and agents are all straightforward to demonstrate and hard to make reliable, and the thing that separates a demo from a product is a measurement harness that catches a regression before a user does. Evaluation sits in the spine here rather than as a specialization, and half the projects in the later phases produce numbers rather than features. An engineer who can prove a system got better is worth several who can make it look impressive.

**Its own path, not an Edge AI track.** This material was first written as a track inside the Edge AI curriculum, which meant it inherited that path's spine and told readers that C++, ONNX model export and CUDA were required. They are not. Measured against the Edge AI tracks it overlapped at most 0.25, where edge and robotics overlap 0.63, so the spine genuinely diverges. The spine here is Python, SQL, backend services, testing, LLM fundamentals, prompting, context engineering, evaluation, distributed systems and architecture.

**Honest counterpoint, read this before committing.** This is the most crowded and fastest-churning path on this site. Framework fluency has a short half-life: the orchestration library everyone learned two years ago is not the one teams use now, and the same will be true again. Tutorials, bootcamps and job applicants are abundant at the shallow end. What is genuinely scarce, and what this roadmap is built around, is the ability to evaluate, to reason about a system rather than a prompt, and to own the cost and reliability of something in production. Treat every framework here as replaceable and every measurement habit as permanent.

**Five specialization tracks.** Pick one or two rather than spreading across all of them:
- **AI product engineer**: the broad one. Retrieval, tools, multimodal input and the user-facing craft of making a probabilistic feature feel dependable.
- **Retrieval & knowledge**: embeddings, hybrid search, reranking, multi-hop and permission-aware retrieval. The deepest technical track and the one most transferable to conventional search work.
- **Agentic systems**: tool use, planning loops, protocols and the security boundary around letting a model act. The newest, least settled and highest variance.
- **LLM platform & serving**: inference, batching, caching, routing, cost and the infrastructure other teams build on. Closest to conventional platform engineering.
- **Evaluation & trust**: benchmarks, judges, regression gates, feedback loops and governance evidence. The smallest track by headcount and the fastest growing, because it is what regulated deployment requires.

For a software engineer moving laterally, the highest-return combination is **AI product engineer plus Evaluation & trust**. The first gets you hired and the second is what keeps you valuable once the framework you were hired for is obsolete.

**Three priority levels** run throughout:
- 🔴 **Critical**: the non-negotiable spine for your chosen track.
- 🟡 **Desirable**: high-ROI competitive edge, but not blocking.
- 🟢 **Frontier**: long-horizon bets that are exciting and unproven.

**Resource tags:**
- ✅ Included in Coursera Premium, or available as a free audit
- 🆓 Free
- 💰 Paid, cost noted and approximate, so verify before buying

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Tracks`, `Resources`, a `Study approach` and a `Project`. The project is the proof of competence. In this field especially, a shipped system with a public evaluation harness outranks any certificate, because the harness is the part that is hard to fake.

---

## PHASE 0: Foundations

### 🔴 Python
**Prerequisites:** None, this is a starting node
**Unlocks:** APIs & backend services, Testing & code quality, AI-assisted dev workflows, Machine learning
**Tracks:** All specializations
**Resources:**
- Coursera, *Python for Everybody*, University of Michigan (✅)
- *Automate the Boring Stuff with Python* (🆓)
- Real Python guides on type hints, async and packaging (🆓)
**Study approach:** This path lives in Python, so the bar is higher than scripting. Get comfortable with type hints, `async`/`await`, virtual environments and packaging, because LLM application code is mostly concurrent network calls waiting on a slow dependency. The habit that matters: type your function signatures from the first line, since structured model output and typed code fit together and save an entire class of parsing bug later.
**Project:** Build a small typed CLI that calls a public API concurrently, handles rate limits and retries with backoff, and writes results to disk. Package it so `pipx install` works from your repository.

### 🔴 Git & version control
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD, Testing & code quality, AI-assisted dev workflows
**Tracks:** All specializations
**Resources:**
- git-scm.com book, chapters 1 to 3 (🆓)
- GitHub Skills interactive courses (🆓)
**Study approach:** Branches, rebase versus merge, pull requests and review. Nothing exotic, but every later node assumes work is committed in reviewable increments rather than one heroic push.
**Project:** Take an existing script, put it under version control with a meaningful commit history, open a pull request against yourself, and review it as if a stranger wrote it.

### 🔴 Linux & CLI
**Prerequisites:** None, this is a starting node
**Unlocks:** Docker & CI/CD
**Tracks:** All specializations
**Resources:**
- MIT, *The Missing Semester of Your CS Education* (🆓)
- Linux Journey (🆓)
**Study approach:** Enough shell to run, inspect and debug a service: processes, ports, environment variables, logs, SSH and file permissions. This is not systems administration. The goal is to never be blocked because a container will not start.
**Project:** Deploy any small web service to a cheap VPS by hand, with systemd keeping it alive and logs going somewhere you can read them. Write down every command that worked.

### 🔴 SQL & data access
**Prerequisites:** None, this is a starting node
**Unlocks:** Embeddings & semantic search
**Tracks:** All specializations
**Resources:**
- Mode Analytics SQL tutorial (🆓)
- *Use The Index, Luke* (🆓)
- PostgreSQL documentation, indexing and query planning (🆓)
**Study approach:** Most retrieval systems are a database problem wearing an AI hat, and most latency problems are a missing index. Learn joins, aggregation, transactions and how to read a query plan. Pay particular attention to indexing, because the same instinct transfers directly to vector search later.
**Project:** Load a public dataset of at least a million rows into PostgreSQL, write five analytical queries, then make the slowest one ten times faster and explain the plan before and after.

### 🔴 Probability & statistics
**Prerequisites:** None, this is a starting node
**Unlocks:** Machine learning
**Tracks:** All specializations
**Resources:**
- *Think Stats* (🆓)
- Coursera, *Statistics with Python*, University of Michigan (✅)
- StatQuest video series (🆓)
**Study approach:** The literacy required to say whether an evaluation result means anything. Distributions, sampling, variance, confidence intervals and the difference between a real improvement and noise on forty examples. This is not a mathematics track; it is the statistics needed to avoid shipping a regression because the eval set was too small.
**Project:** Take any pair of model configurations, run them on the same task, and write a short report stating the difference, the confidence interval, and how many examples would be needed to detect a five percent change.

### 🟡 English working fluency
**Prerequisites:** None, this is a starting node
**Tracks:** All specializations
**Resources:**
- Any structured B2 to C1 program
- Practice: write every design note and README in English (🆓)
- Read arXiv abstracts and provider changelogs daily (🆓)
**Study approach:** A continuous lane rather than a phase. Model documentation, research and the widest job market are English-first, and this field turns over faster than translations appear. Reading is the low bar; the return comes from writing, because technical influence in this field is exercised in writing.
**Project:** Publish three technical write-ups in English over twelve months. Any topic from this roadmap counts. The point is the output habit, not the audience.

---

## PHASE 1: Software Core

### 🔴 APIs & backend services
**Prerequisites:** Python
**Unlocks:** Distributed systems
**Tracks:** All specializations
**Resources:**
- FastAPI documentation (🆓)
- *Architecture Patterns with Python*, Percival & Gregory, free online edition (🆓)
- MDN, *Server-sent events* (🆓)
**Study approach:** An LLM feature is a backend service with an unusually slow, unreliable and expensive dependency. Learn HTTP APIs, authentication, background jobs, queues, timeouts and cancellation, and how to stream a response to a browser token by token. Streaming is not a nicety here: a ten-second wait with no output reads as broken, and the same response streamed reads as fast.
**Project:** Build an API that proxies a model provider with streaming responses, per-user rate limiting, request timeouts and a background job queue for anything slow. Load-test it and record what happens at the limit.

### 🔴 Docker & CI/CD
**Prerequisites:** Linux & CLI, Git & version control
**Unlocks:** LLM observability & tracing, LLM serving & inference, Distributed systems, Cloud ML platforms, Kubernetes for ML
**Tracks:** All specializations
**Resources:**
- Docker getting started (🆓)
- GitHub Actions documentation (🆓)
**Study approach:** Containers, Compose, and a pipeline that runs tests on every pull request. The reason it sits this early is that evaluation later has to run in CI, and a pipeline is much easier to add before there is anything to migrate.
**Project:** Containerize the API from the previous node, add a Compose file that brings up the service and a database together, and wire a pipeline that builds the image and runs the test suite on every push.

### 🔴 Testing & code quality
**Prerequisites:** Python, Git & version control
**Tracks:** All specializations
**Resources:**
- pytest documentation (🆓)
- *Architecture Patterns with Python*, testing chapters (🆓)
**Study approach:** Unit and integration tests, fixtures, and the specific problem of testing against a non-deterministic dependency. The answer is to push the model call to the edge of the system behind an interface, mock it in unit tests, and test the real thing separately and deliberately. Engineers who skip this node write evaluation harnesses that cannot run offline and therefore do not run at all.
**Project:** Refactor the API so every model call goes through one interface, then write a test suite that runs fully offline against recorded responses, plus a small separate suite that hits the real provider and is not part of the default run.

### 🟡 AI-assisted dev workflows
**Prerequisites:** Python, Git & version control
**Tracks:** All specializations
**Resources:**
- Anthropic Claude Code documentation (🆓)
- Anthropic prompt engineering guide (🆓)
- Model Context Protocol documentation (🆓)
**Study approach:** Coding agents, prompt design for engineering tasks and reviewing machine-written diffs. Treat it as a multiplier on everything else in this roadmap rather than a topic. The discipline that matters is review: never merge generated code you would not accept from a junior engineer, and verify that every imported dependency actually exists.
**Project:** Use a coding agent to build one non-trivial feature end to end, then write a short honest retrospective: what it did well, what you had to correct, and which review habit caught the worst mistake.

---

## PHASE 2: ML & LLM Literacy

### 🔴 Machine learning
**Prerequisites:** Python, Probability & statistics
**Unlocks:** Neural network literacy, AI evaluation
**Tracks:** All specializations
**Resources:**
- Coursera, *Machine Learning Specialization*, Andrew Ng (✅)
- *Hands-On Machine Learning*, Geron, chapters 1 to 4 (💰 ~$50)
**Study approach:** Enough to reason about a model, not to train one from scratch. Supervised learning, train and test splits, overfitting, and the metrics vocabulary: precision, recall, F1, calibration. The framing chapters matter more than the algorithms here, because this path consumes models rather than fitting them.
**Project:** Train a simple classifier on a public dataset, then deliberately overfit it and show the gap between training and held-out performance. Write one paragraph on which metric you would report to a product owner and why.

### 🔴 Neural network literacy
**Prerequisites:** Machine learning
**Unlocks:** LLM fundamentals
**Tracks:** All specializations
**Resources:**
- Andrej Karpathy, *Let's build GPT* (🆓)
- 3Blue1Brown, neural networks series (🆓)
- Jay Alammar, *The Illustrated Transformer* (🆓)
**Study approach:** Backpropagation, embeddings, attention and the transformer block, at the depth needed to read a model card and predict behaviour. This is deliberately not a PyTorch training course. The goal is that context windows, tokenization costs and why a model repeats itself all stop being magic.
**Project:** Implement a small transformer from scratch following Karpathy's video, train it on any small text corpus, and write a page explaining what attention is actually computing, in your own words, without equations.

### 🔴 LLM fundamentals
**Prerequisites:** Neural network literacy
**Unlocks:** Prompting & structured output, Embeddings & semantic search, Multimodal applications, LLM fine-tuning, AI evaluation, LLM serving & inference
**Tracks:** All specializations
**Resources:**
- DeepLearning.AI short courses on LLM application development (🆓)
- Documentation for two competing model families (🆓)
- Provider model cards and changelogs (🆓)
**Study approach:** Tokenization, context windows, sampling parameters, model families and their trade-offs, and why the same prompt returns different answers twice. Read the documentation of two competing providers rather than one, because the differences are where the real design constraints show up. The habit that matters: know the token cost and latency profile of the model you are calling before you design around it.
**Project:** Build a small benchmark harness that runs the same ten prompts against three models, logs tokens, latency and cost per call, and produces a comparison table. Keep it; it becomes the seed of your evaluation work later.

---

## PHASE 3: Prompting & Context

### 🔴 Prompting & structured output
**Prerequisites:** LLM fundamentals
**Unlocks:** Context engineering, Guardrails & injection defense, Tool use & function calling
**Tracks:** All specializations
**Resources:**
- Anthropic prompt engineering guide (🆓)
- OpenAI structured outputs documentation (🆓)
- Instructor and Pydantic AI documentation (🆓)
**Study approach:** System prompts, few-shot design, task decomposition, and schema-constrained output. Prompting is the cheapest lever in the stack and the first one to exhaust before reaching for retrieval or tuning. Insist on structured output from the start: a schema turns a parsing problem into a validation problem, and validation failures are actionable.
**Project:** Take one messy real task, such as extracting structured fields from invoices or support emails, and build a prompt that returns schema-validated JSON. Track accuracy across at least three prompt revisions and record what each change bought.

### 🔴 Context engineering
**Prerequisites:** Prompting & structured output
**Unlocks:** RAG & vector DBs, Multi-agent systems
**Tracks:** All specializations
**Resources:**
- Provider prompt-caching documentation (🆓)
- Published context-engineering write-ups from agent teams (🆓)
- Long-context evaluation papers (🆓 arXiv)
**Study approach:** Deciding what goes into the window and what stays out: chunking, summarization, memory, caching and budgets. This is usually the difference between a demo and a product, and the practice is currently ahead of the textbooks, so read what teams publish rather than waiting for a course. Remember that a model attends unevenly across a long context, so more context is not automatically better.
**Project:** Take a conversational feature and give it memory that survives a long session within a fixed token budget: summarize older turns, cache the stable prefix, and measure the cost per turn before and after.

### 🔴 Guardrails & injection defense
**Prerequisites:** Prompting & structured output
**Tracks:** AI product engineer / Agentic systems / Evaluation & trust
**Resources:**
- OWASP GenAI Security Project, *LLM Top 10* (🆓)
- Provider safety and trust documentation (🆓)
- See also the AI Security roadmap on this site
**Study approach:** Prompt injection and indirect injection, input and output filtering, and least-privilege tool scopes. The single rule that prevents most incidents is that retrieved or user-supplied text is data, never instructions. Assume any content your system ingests may be hostile, including a document a user uploaded in good faith that someone else authored.
**Project:** Red-team your own retrieval or agent feature. Plant an injection in a document it will retrieve, get it to take an action it should refuse, then fix it and write up both the attack and the mitigation.

---

## PHASE 4: Retrieval

### 🔴 Embeddings & semantic search
**Prerequisites:** LLM fundamentals, SQL & data access
**Unlocks:** RAG & vector DBs
**Tracks:** Retrieval & knowledge / AI product engineer
**Resources:**
- Sentence-Transformers documentation (🆓)
- pgvector documentation (🆓)
- MTEB embedding leaderboard (🆓)
**Study approach:** Embedding models, vector similarity, index structures such as HNSW and IVF, and hybrid search that combines keyword and vector scores. Start in the database you already run rather than adopting a dedicated vector store on day one; most teams never outgrow pgvector, and the ones that do know exactly why. Hybrid search beats pure vector search on most real corpora, because exact terms and identifiers matter.
**Project:** Index a corpus of at least ten thousand documents, build both keyword and vector search over it, then a hybrid ranker. Write twenty realistic queries with known correct answers and report recall at 10 for all three.

### 🔴 RAG & vector DBs
**Prerequisites:** Embeddings & semantic search, Context engineering
**Unlocks:** Advanced retrieval, Capstone: Applied AI
**Tracks:** Retrieval & knowledge / AI product engineer
**Resources:**
- DeepLearning.AI, *Building and Evaluating Advanced RAG* (🆓)
- LlamaIndex documentation (🆓)
- LangChain documentation (🆓)
**Study approach:** Chunking strategy, retrieval, reranking and citation, and above all the failure modes: missing context, distracting passages, and answers that quietly ignore what was retrieved. Measure retrieval separately from generation, because a bad answer has two possible causes and mixing them makes the system unimprovable. The habit that matters: every answer cites its sources, and you check that the citations actually support the claim.
**Project:** Build a question-answering system over the corpus from the previous node with inline citations, then produce an evaluation set of fifty questions and report retrieval quality and answer quality as two separate numbers.

### 🟡 Advanced retrieval
**Prerequisites:** RAG & vector DBs
**Tracks:** Retrieval & knowledge
**Resources:**
- Ragas documentation (🆓)
- Papers on query rewriting and reranking (🆓 arXiv)
- Published retrieval-evaluation write-ups from practitioner teams (🆓)
**Study approach:** Query rewriting, multi-hop retrieval, metadata filtering, freshness, and permission-aware retrieval so a user never sees a document they should not. The last one is not optional in an enterprise setting and is much harder to retrofit than to design in. Multi-hop is where naive systems fail most visibly, because the answer requires combining two documents neither of which is a good match for the question.
**Project:** Extend the previous system with per-user permissions enforced at retrieval time and a multi-hop question set it originally failed. Prove the permission filter with a test that asserts a restricted document never reaches the model.

### 🟡 Multimodal applications
**Prerequisites:** LLM fundamentals
**Unlocks:** Vision-language models
**Tracks:** AI product engineer
**Resources:**
- Provider vision and audio API documentation (🆓)
- Open document-understanding benchmarks (🆓)
**Study approach:** Documents, images and audio as model input: OCR-free document understanding, screenshots and charts. The engineering burden is mostly evaluation, because a wrong reading of a table is harder to detect automatically than a wrong sentence. Cost also changes shape, since images consume tokens in ways that surprise people who budgeted for text.
**Project:** Build a pipeline that extracts structured data from scanned or photographed documents, then measure per-field accuracy against a hand-labelled set of at least a hundred documents and report cost per document.

---

## PHASE 5: Agents & Tuning

### 🔴 Tool use & function calling
**Prerequisites:** Prompting & structured output
**Unlocks:** Multi-agent systems, MCP & tool protocols
**Tracks:** Agentic systems / AI product engineer
**Resources:**
- Provider function-calling documentation (🆓)
- Anthropic tool-use guide (🆓)
**Study approach:** Exposing functions to a model, validating arguments, recovering from errors, and deciding which actions may run unsupervised. The error-handling section of the guides is the part most people skip and the part that determines whether the feature survives contact with users. Make every tool idempotent where you can, because a model will retry.
**Project:** Give a model three real tools, one of which is destructive, and build the confirmation and validation layer around them. Write tests covering a malformed argument, a tool timeout and a repeated call, and show the system behaves sanely in each.

### 🔴 Multi-agent systems
**Prerequisites:** Tool use & function calling, Context engineering
**Unlocks:** Capstone: Applied AI, Reasoning & long-horizon agents
**Tracks:** Agentic systems / AI product engineer
**Resources:**
- LangGraph documentation (🆓)
- Anthropic, *Building effective agents* (🆓)
- DeepLearning.AI agent short courses (🆓)
**Study approach:** Planning loops, state, handoffs, termination conditions and budgets. Read the Anthropic piece early, because it is honest about when not to build an agent, and the answer is more often than the field admits: a single well-prompted call with good context beats a five-step agent most of the time and is far easier to debug. When you do build one, cap the loop and the spend explicitly.
**Project:** Build an agent for a task that genuinely needs multiple steps, with a hard step limit, a spend limit and full tracing. Then build the single-call version of the same task and compare quality, latency and cost. Publish both numbers even if the agent loses.

### 🟡 MCP & tool protocols
**Prerequisites:** Tool use & function calling
**Tracks:** Agentic systems / LLM platform & serving
**Resources:**
- Model Context Protocol specification and documentation (🆓)
- Reference MCP server implementations (🆓)
**Study approach:** MCP servers and clients, capability discovery, transport and the authorization model for exposing internal systems to an agent. Reading two reference servers teaches the shape faster than the specification does. The security question is the interesting one: an MCP server is an API whose caller is a model, so least privilege matters more than usual.
**Project:** Write an MCP server exposing a real internal capability with scoped permissions, connect it to a client, and document what an attacker could do if they controlled the model's input.

### 🟡 LLM fine-tuning
**Prerequisites:** LLM fundamentals
**Tracks:** AI product engineer / Evaluation & trust
**Resources:**
- Hugging Face PEFT documentation (🆓)
- DeepLearning.AI short courses on fine-tuning (🆓)
- Axolotl documentation (🆓)
**Study approach:** LoRA and QLoRA, instruction tuning, preference tuning and dataset construction. Reach for this after prompting, retrieval and evaluation are exhausted, not before, because most problems people try to fine-tune away are actually context or evaluation problems. When it is the right tool, the dataset is the work; the training run is the easy part.
**Project:** Fine-tune a small open model on a task where prompting measurably plateaued. Report the baseline, the tuned result and the total cost, and state honestly whether it was worth it.

---

## PHASE 6: Production

### 🔴 AI evaluation
**Prerequisites:** LLM fundamentals, Machine learning
**Unlocks:** LLM observability & tracing, Feedback loops & data flywheel, AI safety & governance, AI systems architecture, Domain vertical, Capstone: Applied AI, Reasoning & long-horizon agents
**Tracks:** All specializations
**Resources:**
- *AI Engineering*, Chip Huyen (💰 ~$50)
- DeepLearning.AI, *Building and Evaluating Advanced RAG* (🆓)
- Ragas and OpenAI Evals repositories (🆓)
**Study approach:** This is the discipline; everything else is plumbing around it. Task-specific benchmarks, LLM-as-judge and its failure modes, regression gates in continuous integration, human review design, and offline versus online measurement. Judges are biased toward verbosity and toward their own outputs, so calibrate them against human labels before trusting one. The single habit that separates this path from prompt-tinkering: no change ships without a number attached.
**Project:** Build an evaluation suite for a system you already have, wire it into CI so a pull request fails on regression, and then deliberately introduce a regression to prove the gate works. Publish the harness.

### 🔴 LLM observability & tracing
**Prerequisites:** AI evaluation, Docker & CI/CD
**Unlocks:** Feedback loops & data flywheel
**Tracks:** LLM platform & serving / Evaluation & trust / AI product engineer
**Resources:**
- OpenTelemetry GenAI semantic conventions (🆓)
- Langfuse documentation (🆓)
- Arize Phoenix documentation (🆓)
**Study approach:** Tracing a request through prompts, retrievals and tool calls, capturing inputs and outputs for replay, and turning production traffic into evaluation data. Prefer self-hostable and vendor-neutral tooling, because these traces contain user data. The payoff is that production becomes the source of your next evaluation set rather than a place where problems are merely reported.
**Project:** Instrument an existing feature end to end so a single trace shows every prompt, retrieval and tool call with tokens and latency. Then mine a week of real traces into fifty new evaluation cases.

### 🔴 LLM serving & inference
**Prerequisites:** LLM fundamentals, Docker & CI/CD
**Unlocks:** Cost & latency engineering, Capstone: Applied AI
**Tracks:** LLM platform & serving
**Resources:**
- vLLM documentation (🆓)
- Hugging Face Text Generation Inference documentation (🆓)
- *AI Engineering*, Chip Huyen, serving chapters (💰 ~$50)
**Study approach:** Continuous batching, KV-cache management, quantized serving and streaming. Read the vLLM documentation on paged attention even if you never self-host, because it explains why throughput and latency trade off the way they do on hosted APIs too. Tail latency under concurrency is the number that matters and the one that looks fine in single-request testing.
**Project:** Self-host an open model, measure tokens per second and p50, p95 and p99 latency across increasing concurrency, then improve one of them through batching or quantization and publish the before and after curves.

### 🔴 Cost & latency engineering
**Prerequisites:** LLM serving & inference
**Tracks:** LLM platform & serving / AI product engineer
**Resources:**
- Provider pricing and prompt-caching documentation (🆓)
- Published cost-reduction case studies (🆓)
**Study approach:** Token budgets, prompt caching, model routing and cascades, and batching. The wins are repeatable and rarely obvious: caching a long stable system prompt, routing easy requests to a cheaper model and escalating only on low confidence, and batching anything not user-facing. Know the unit economics of a feature before it ships, because retrofitting them means changing the product.
**Project:** Take a working feature and cut its cost per request by at least half without a measurable quality regression, proven by the evaluation suite. Write up which lever contributed what.

### 🟡 Feedback loops & data flywheel
**Prerequisites:** AI evaluation, LLM observability & tracing
**Tracks:** Evaluation & trust / AI product engineer
**Resources:**
- *AI Engineering*, Chip Huyen, data chapters (💰 ~$50)
- Argilla documentation (🆓)
**Study approach:** Capturing thumbs, corrections and abandonment, curating them into evaluation and tuning sets, and closing the loop so the system improves from use. Human review needs tooling or it silently does not happen. Design the feedback capture into the interface early, because retrofitting a signal that users have already learned to ignore is much harder than adding one.
**Project:** Add a feedback mechanism to a live or simulated system, build the review queue, and turn one month of signal into an expanded evaluation set. Report how many captured items were actually usable, which is usually a sobering number.

### 🟡 AI safety & governance
**Prerequisites:** AI evaluation
**Tracks:** AI product engineer / Evaluation & trust / Agentic systems / LLM platform & serving / Retrieval & knowledge
**Resources:**
- NIST AI Risk Management Framework (🆓)
- EU AI Act explorer (🆓)
- See also the AI Security roadmap on this site
**Study approach:** Risk classification, model and system cards, red-teaming, incident response and the documentation a regulated deployment must produce. Worth literacy even for engineers who never specialize in it, because in regulated sectors it determines what may ship at all. The engineering-relevant insight is that most of the required evidence is exactly the evaluation and tracing work from the previous nodes, presented differently.
**Project:** Write a system card for something you have built: intended use, out-of-scope uses, evaluation results, known failure modes and the mitigations. Then map it against one framework and note what is missing.

---

## PHASE 7: Scale & Architecture

### 🔴 Distributed systems
**Prerequisites:** APIs & backend services, Docker & CI/CD
**Unlocks:** Cloud ML platforms, AI systems architecture
**Tracks:** All specializations
**Resources:**
- *Designing Data-Intensive Applications*, Kleppmann (💰 ~$60)
- Amazon Builders' Library (🆓)
**Study approach:** Queues, idempotency, retries and backoff, caching, partial failure and consistency. An LLM call is a slow, flaky, expensive network dependency, and this is the body of knowledge for handling those. Kleppmann is still the best systems book written and repays a slow read; the Builders' Library articles are short and unusually honest about failure.
**Project:** Redesign one of your features to survive the provider being down: queue the work, degrade the experience gracefully rather than erroring, and retry with backoff and a dead-letter path. Prove it by blocking the provider at the network level.

### 🟡 Cloud ML platforms
**Prerequisites:** Docker & CI/CD, Distributed systems
**Unlocks:** Kubernetes for ML
**Tracks:** LLM platform & serving
**Resources:**
- Documentation for one major cloud's AI platform (🆓)
- Provider data-processing and residency terms (🆓)
**Study approach:** Managed inference, GPU capacity and quotas, private networking, and the compliance posture of sending data to a model provider. Depth in one cloud beats a tour of three. The data question is the one that decides architectures in regulated industries, so read the actual processing terms rather than the marketing page.
**Project:** Deploy a model-backed service on one cloud with private networking and no public egress to the provider, then document the data path end to end and where it crosses a trust boundary.

### 🟡 Kubernetes for ML
**Prerequisites:** Docker & CI/CD, Cloud ML platforms
**Tracks:** LLM platform & serving
**Resources:**
- Kubernetes documentation (🆓)
- KServe documentation (🆓)
- *Kubernetes in Action*, Luksa (💰 ~$50)
**Study approach:** Orchestration for inference workloads, GPU scheduling and rollout strategy. The one thing that differs from ordinary web workloads: autoscale on queue depth or concurrency rather than CPU, because an inference pod waiting on a GPU looks idle to a CPU-based autoscaler while requests pile up behind it.
**Project:** Run an inference service on Kubernetes with autoscaling driven by queue depth, then load-test it through a traffic spike and show the scaling behaviour and the latency impact of cold starts.

### 🔴 AI systems architecture
**Prerequisites:** Distributed systems, AI evaluation
**Unlocks:** Technical leadership
**Tracks:** All specializations
**Resources:**
- *AI Engineering*, Chip Huyen (💰 ~$50)
- *Designing Machine Learning Systems*, Chip Huyen (💰 ~$50)
- Write architecture decision records (🆓)
**Study approach:** Composing the whole thing: where the model boundary sits, what stays deterministic, what happens when the model is wrong or unavailable, and how the pieces are evaluated together rather than individually. The most valuable habit is writing the trade-offs down so other people can argue with them, because at this level the work is judgement and judgement has to be inspectable.
**Project:** Write an architecture decision record for a real system comparing two designs, with requirements, trade-offs, failure modes and a recommendation. Have an engineer who disagrees review it, and record what changed.

### 🔴 Domain vertical
**Prerequisites:** AI evaluation
**Tracks:** All specializations
**Resources:**
- No course. Work in the domain and read its regulations
- Build the evaluation set with someone who does the job (🆓)
**Study approach:** Real depth in one industry: its vocabulary, its documents, its regulations and what counts as a correct answer there. This is the part a general-purpose model cannot supply and a remote generalist cannot copy, and it is what makes an evaluation set trustworthy. Without it you are guessing at what good output looks like, which is the most common reason capable systems fail in production.
**Project:** Build the evaluation set for one industry task alongside a practitioner who does that work daily, and write down every case where your intuition about the right answer was wrong.

---

## PHASE 8: Capstone & Leadership

### 🔴 Capstone: Applied AI
**Prerequisites:** RAG & vector DBs, Multi-agent systems, AI evaluation, LLM serving & inference
**Tracks:** All specializations
**Resources:**
- No course. Ship it with the evaluation harness public
**Study approach:** The proof that this path is finished. Everything before it exists to make this possible: a real system, evaluated, served within a budget, with the reasoning written down. Scope it small enough to actually finish and real enough that someone other than you uses it.
**Project:** Ship one LLM system in production shape: retrieval or tools, a real evaluation suite with a regression gate in CI, cost and latency budgets that are measured rather than estimated, tracing, and a written account of what the evaluations caught before users did. Publish the repository and the harness. The harness is the part that is hard to fake and therefore the part that gets you hired.

### 🟡 Technical leadership
**Prerequisites:** AI systems architecture
**Tracks:** All specializations
**Resources:**
- *Staff Engineer*, Will Larson, free web edition at staffeng.com (🆓 / 💰 ~$25 print)
- Write and publish (🆓)
**Study approach:** Setting technical direction, writing that changes decisions, mentoring, and saying no to an AI feature that should be a database query. That last one is the specific leadership skill this field needs and undersupplies. Reputation here is built in public, so the writing habit from the English node compounds directly into this one.
**Project:** Lead one technical decision end to end: write the proposal, run the review, absorb the disagreement, ship the outcome and publish a retrospective. Then give the talk version of it.

### 🟢 Vision-language models
**Prerequisites:** Multimodal applications
**Tracks:** AI product engineer
**Resources:**
- Provider computer-use documentation (🆓)
- Open vision-language benchmarks (🆓)
**Study approach:** Screen understanding, computer use and document agents. Fast-moving and brittle, which is why it sits in the frontier tier rather than the spine. Treat published capability claims as upper bounds measured under favourable conditions, and evaluate on your own screens before believing anything.
**Project:** Automate one real multi-step interface task with a vision-language model, measure the success rate over at least fifty runs, and document every failure mode you saw.

### 🟢 Reasoning & long-horizon agents
**Prerequisites:** Multi-agent systems, AI evaluation
**Tracks:** Agentic systems / Evaluation & trust
**Resources:**
- Provider research posts and arXiv (🆓)
- Published long-horizon agent evaluations (🆓)
**Study approach:** Reasoning models, test-time compute, long-running agents and the evaluation problem they create: how to score a task that takes hours and has no single correct answer. The published state moves faster than any course, so track it rather than study it, and be skeptical in both directions. The durable question is measurement, and that is where a reader of this path already has an advantage.
**Project:** Design and publish an evaluation for a long-horizon task in your domain: define what partial credit means, how to score a run that took a different but valid route, and what the human review protocol is.

---
## Parallel Track: English Proficiency ⭐ HIGHEST ROI

This field is English-first to an unusual degree. Model documentation, provider changelogs, the research and the practitioner write-ups that carry the actual state of the art all appear in English, often weeks or months before anything else. The material also turns over fast enough that waiting for translated or localized courses means working from a stale picture.

Reading is the low bar and most engineers clear it. The return comes from writing, because technical influence in this field is exercised in public writing: a good evaluation write-up circulates further than a good implementation. It also compounds directly into the leadership node, where the deliverable is a document that changes a decision.

**Practice:** write every design note, README and retrospective in English; read provider changelogs and two or three arXiv abstracts a week; and publish something short every quarter. The habit matters more than the audience.

---

## Critical Path (Summary)

The spine, in dependency order. Every track runs through all of it:

**Python → APIs & backend services → Docker & CI/CD → Testing & code quality → Machine learning → Neural network literacy → LLM fundamentals → Prompting & structured output → Context engineering → AI evaluation → Distributed systems → AI systems architecture → Domain vertical → Capstone**

With SQL, Git, Linux and probability as ungated starting nodes, and technical leadership after architecture.

Two observations about this ordering. Evaluation appears in Phase 6 but should be started informally much earlier: the benchmark harness built during LLM fundamentals is already the seed of it, and engineers who wait until Phase 6 to think about measurement spend Phases 3 to 5 unable to tell whether anything they did helped. Second, Domain vertical looks soft next to the technical nodes and is the one most often skipped. It is what makes an evaluation set trustworthy, which makes it load-bearing rather than decorative.

---

## Books, Essential Reading

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **AI Engineering**, Chip Huyen | P6 | 🔴 | 💰 ~$50 | The closest thing to a textbook for this path. The evaluation chapters are the most practical published treatment anywhere. Read it first. |
| 2 | **Designing Data-Intensive Applications**, Kleppmann | P7 | 🔴 | 💰 ~$60 | Still the best systems book written. An LLM call is a slow, flaky, expensive dependency, and this is how those are handled. |
| 3 | **Designing Machine Learning Systems**, Chip Huyen | P7 | 🟡 | 💰 ~$50 | The lifecycle and data chapters. Complements the above rather than repeating it. |
| 4 | **Architecture Patterns with Python**, Percival & Gregory | P1 | 🟡 | 🆓 web | Free online. The testing chapters teach how to treat an unreliable external service as a design problem. |
| 5 | **Hands-On Machine Learning**, Geron | P2 | 🟡 | 💰 ~$50 | Chapters 1 to 4 only. Framing and metrics vocabulary, not the algorithms. |
| 6 | **Staff Engineer**, Will Larson | P8 | 🟡 | 🆓 web / 💰 ~$25 | Free at staffeng.com. For the individual-contributor leadership path. |

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

**Time.** The spine is roughly a year of consistent part-time work for someone already employed as a software engineer, and the specialization tracks add three to six months each. The capstone deserves a genuine month rather than a weekend.

**Where the time actually goes.** Expect the split to be uncomfortable: perhaps a quarter of the effort on prompting, retrieval and agents, and the rest on evaluation, observability, cost and the unglamorous systems work around them. That ratio is not a failure of the plan. It is the difference between this path and a tutorial.

---

## Sources & Notes

Resource names and course titles were current when written and change often, particularly the provider short courses. Verify before paying for anything. Where a specific course title could not be confirmed, this document names the provider and topic rather than inventing a title.

Prices are approximate and in US dollars. Model pricing, context limits and capability claims move fast enough that any specific figure in the study notes should be treated as illustrative rather than current.
