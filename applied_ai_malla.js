// Curriculum data for the Applied AI / LLM engineering path.
//
// This module holds data only. It is rendered by
// preview-app/src/components/CurriculumGraph.jsx, which owns all the drawing
// logic shared by the career paths.
//
// Why this is its own path rather than a track inside Edge AI. It was a track
// there first, which meant it inherited an Edge AI spine: a reader who picked
// it was told C++, ONNX model export and CUDA were required. None of those are
// on this career. Measured against the other Edge AI tracks it overlapped at
// most 0.25, where edge and robotics overlap 0.63, so the spine genuinely
// diverges. The spine here is Python, backend services, evaluation and
// serving.
//
// Ids are shared with the other graphs wherever the topic is genuinely the
// same (PY, DOC, LLM, EVAL and so on carry identical labels everywhere), and
// distinct wherever it is not. tools/check_curriculum.py enforces that.
//
// Course fields:
//   id        short stable key, shown on the node
//   phase     which phase column the node sits in
//   row       row within that column; must be 0..n-1 with no gaps or repeats
//   priority  critical | desirable | frontier
//   kind      spine (every track) | branch (chosen track only) | elective
//   tracks    ["all"] for spine nodes, otherwise the track ids that need it
//   prereqs   ids of the nodes that must come first
//   desc      one or two sentences shown in the detail panel
//   res       recommended resources, separated by "|"

// Phases are drawn left to right in the order listed here.
export const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Prerequisites",     color: "#94a3b8" },
  { id: "P1", label: "Phase 1",     subtitle: "Software core",     color: "#f472b6" },
  { id: "P2", label: "Phase 2",     subtitle: "ML & LLM literacy", color: "#ec4899" },
  { id: "P3", label: "Phase 3",     subtitle: "Prompting & context", color: "#db2777" },
  { id: "P4", label: "Phase 4",     subtitle: "Retrieval",         color: "#a855f7" },
  { id: "P5", label: "Phase 5",     subtitle: "Agents & tuning",   color: "#8b5cf6" },
  { id: "P6", label: "Phase 6",     subtitle: "Production",        color: "#0ea5e9" },
  { id: "P7", label: "Phase 7",     subtitle: "Scale & architecture", color: "#0d9488" },
  { id: "P8", label: "Phase 8",     subtitle: "Capstone & lead",   color: "#f59e0b" },
];

// Specialization tracks. Node stripes and the filter buttons are coloured
// from this map, and the counts on the page are derived from its size.
export const TRACKS = {
  product:  { color: "#db2777", label: "AI product engineer",       short: "Product"  },
  rag:      { color: "#7c3aed", label: "Retrieval & knowledge",     short: "RAG"      },
  agents:   { color: "#0891b2", label: "Agentic systems",           short: "Agents"   },
  platform: { color: "#0ea5e9", label: "LLM platform & serving",    short: "Platform" },
  quality:  { color: "#d97706", label: "Evaluation & trust",        short: "Quality"  },
};

export const COURSES = [
  // ─── P0 ─ Foundations (spine) ─────────────────────────────────────────
  { id: "PY", phase: "P0", row: 0, label: "Python",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "The working language of this path. Typing, async, packaging, virtual environments and the standard HTTP and data libraries.",
    res:  "Coursera: Python for Everybody, UMich | Automate the Boring Stuff (free) | Real Python guides on async and typing (free), why: both are where LLM app code actually spends its time" },
  { id: "GIT", phase: "P0", row: 1, label: "Git & version control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Repos, branches, merging, pull requests and review workflow.",
    res:  "git-scm.com tutorial (free) | GitHub Skills (free)" },
  { id: "LINUX", phase: "P0", row: 2, label: "Linux & CLI",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Shell fluency, processes, environment and SSH. Enough to run and debug a service rather than administer a fleet.",
    res:  "MIT Missing Semester (free), why: the fastest route from tourist to fluent | Linux Journey (free)" },
  { id: "SQL", phase: "P0", row: 3, label: "SQL & data access",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Relational modelling, joins, indexes and query plans. Most retrieval systems are a database problem wearing an AI hat.",
    res:  "Mode SQL tutorial (free) | Use The Index, Luke (free), why: indexing is where naive retrieval gets slow | PostgreSQL docs (free)" },
  { id: "PROB", phase: "P0", row: 4, label: "Probability & statistics",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Distributions, sampling, confidence intervals and significance. The literacy needed to say whether an evaluation result is real.",
    res:  "Think Stats (free) | Coursera: Statistics with Python, UMich | StatQuest (free), why: short, visual, and enough for applied work" },
  { id: "ENGLISH", phase: "P0", row: 5, label: "English working fluency",
    priority: "desirable", kind: "elective", tracks: ["all"], prereqs: [],
    desc: "A continuous lane rather than a phase. Model docs, papers and the widest job market are English-first, and this field turns over too fast for translations to keep up.",
    res:  "Any structured B2 to C1 program | Practice: write every design note in English, why: output beats consumption" },

  // ─── P1 ─ Software core (spine) ───────────────────────────────────────
  { id: "BACKEND", phase: "P1", row: 0, label: "APIs & backend services",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY"],
    desc: "HTTP APIs, authentication, streaming responses, background jobs, queues and timeouts. An LLM feature is a backend service with an unusual dependency.",
    res:  "FastAPI docs (free), why: async and streaming are first-class, which matters for token streaming | Book: Architecture Patterns with Python (free online)" },
  { id: "DOC", phase: "P1", row: 1, label: "Docker & CI/CD",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LINUX","GIT"],
    desc: "Containers, Compose, GitHub Actions and reproducible environments.",
    res:  "Docker getting started (free) | GitHub Actions docs (free)" },
  { id: "TEST", phase: "P1", row: 2, label: "Testing & code quality",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY","GIT"],
    desc: "Unit and integration tests, fixtures, mocking a non-deterministic dependency, and keeping a suite fast. The habit that makes later evaluation work feel natural.",
    res:  "pytest docs (free) | Book: Architecture Patterns with Python, testing chapters (free online), why: it treats an unreliable external service as a design problem" },
  { id: "AICODE", phase: "P1", row: 3, label: "AI-assisted dev workflows",
    priority: "desirable", kind: "elective", tracks: ["all"], prereqs: ["PY","GIT"],
    desc: "Coding agents, prompt design for engineering tasks, MCP servers and reviewing machine-written diffs. A productivity multiplier across everything that follows.",
    res:  "Anthropic Claude Code docs (free) | Anthropic prompt engineering guide (free) | MCP docs (free)" },

  // ─── P2 ─ ML & LLM literacy (spine) ───────────────────────────────────
  { id: "ML", phase: "P2", row: 0, label: "Machine learning",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY","PROB"],
    desc: "Supervised learning, train and test splits, overfitting, and the metrics vocabulary. Enough to reason about a model, not to train one from scratch.",
    res:  "Coursera: ML Specialization, Andrew Ng | Book: Hands-On ML, Geron, chapters 1 to 4, why: the framing chapters are what this path needs" },
  { id: "NNLIT", phase: "P2", row: 1, label: "Neural network literacy",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["ML"],
    desc: "Backpropagation, embeddings, attention and the transformer block, at the depth needed to read a model card and predict behaviour. Deliberately not a PyTorch training course.",
    res:  "Karpathy: Let's build GPT (free), why: one video replaces a semester of hand-waving | 3Blue1Brown: neural networks (free) | Illustrated Transformer (free)" },
  { id: "LLM", phase: "P2", row: 2, label: "LLM fundamentals",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["NNLIT"],
    desc: "Tokenization, context windows, sampling parameters, model families and their trade-offs, and why the same prompt gives different answers twice.",
    res:  "DeepLearning.AI short courses on LLM application development (free) | Provider docs for two competing model families, why: reading both is how the trade-offs become concrete" },

  // ─── P3 ─ Prompting & context ─────────────────────────────────────────
  { id: "PROMPT", phase: "P3", row: 0, label: "Prompting & structured output",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LLM"],
    desc: "System prompts, few-shot design, schema-constrained and JSON output, and decomposing a task so a model can actually do it. The cheapest lever in the stack.",
    res:  "Anthropic prompt engineering guide (free) | OpenAI structured outputs docs (free) | Instructor / Pydantic AI docs (free), why: schema-first output removes a whole class of parsing bugs" },
  { id: "CTX", phase: "P3", row: 1, label: "Context engineering",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PROMPT"],
    desc: "Deciding what goes in the window and what does not: chunking, summarisation, memory, caching and context-window budgets. Usually the difference between a demo and a product.",
    res:  "Provider prompt-caching docs (free) | Published context-engineering write-ups from agent teams (free), why: the practice is ahead of the textbooks here" },
  { id: "GUARD", phase: "P3", row: 2, label: "Guardrails & injection defense",
    priority: "critical", kind: "branch", tracks: ["product","agents","quality"],
    prereqs: ["PROMPT"],
    desc: "Prompt injection and indirect injection, input and output filtering, least-privilege tool scopes, and refusing to treat retrieved text as instructions.",
    res:  "OWASP Top 10 for LLM Applications (free), why: it is the shared vocabulary teams use | Provider safety docs (free) | See also the AI Security roadmap" },

  // ─── P4 ─ Retrieval ───────────────────────────────────────────────────
  { id: "EMB", phase: "P4", row: 0, label: "Embeddings & semantic search",
    priority: "critical", kind: "branch", tracks: ["rag","product"],
    prereqs: ["LLM","SQL"],
    desc: "Embedding models, vector similarity, indexes (HNSW, IVF), and hybrid search combining keyword and vector scores.",
    res:  "Sentence-Transformers docs (free) | pgvector docs (free), why: most teams should start in the database they already run | MTEB leaderboard (free)" },
  { id: "RAG", phase: "P4", row: 1, label: "RAG & vector DBs",
    priority: "critical", kind: "branch", tracks: ["rag","product"],
    prereqs: ["EMB","CTX"],
    desc: "Chunking strategy, retrieval, reranking, citation and the failure modes: missing context, distractors, and answers that quietly ignore the retrieved passages.",
    res:  "DeepLearning.AI: Building and Evaluating Advanced RAG (free), why: it treats retrieval quality as measurable | LlamaIndex and LangChain docs (free)" },
  { id: "RAGADV", phase: "P4", row: 2, label: "Advanced retrieval",
    priority: "desirable", kind: "branch", tracks: ["rag"],
    prereqs: ["RAG"],
    desc: "Query rewriting, multi-hop and graph retrieval, metadata filtering, freshness and permission-aware retrieval so a user never sees a document they should not.",
    res:  "Ragas docs (free) | Published retrieval-evaluation write-ups (free) | Papers on query rewriting and reranking (free arXiv)" },
  { id: "MULTI", phase: "P4", row: 3, label: "Multimodal applications",
    priority: "desirable", kind: "branch", tracks: ["product"],
    prereqs: ["LLM"],
    desc: "Documents, images and audio as model input: OCR-free document understanding, screenshots, and the extra evaluation burden multimodal output brings.",
    res:  "Provider vision and audio API docs (free) | Open document-understanding benchmarks (free)" },

  // ─── P5 ─ Agents & tuning ─────────────────────────────────────────────
  { id: "TOOLS", phase: "P5", row: 0, label: "Tool use & function calling",
    priority: "critical", kind: "branch", tracks: ["agents","product"],
    prereqs: ["PROMPT"],
    desc: "Exposing functions to a model, argument validation, error recovery, idempotency, and deciding which actions a model may take unsupervised.",
    res:  "Provider function-calling docs (free) | Anthropic tool-use guide (free), why: the error-handling section is the part people skip" },
  { id: "AGENT", phase: "P5", row: 1, label: "Multi-agent systems",
    priority: "critical", kind: "branch", tracks: ["agents","product"],
    prereqs: ["TOOLS","CTX"],
    desc: "Planning loops, state, handoffs between agents, termination conditions and budgets. Also when a single well-prompted call beats an agent, which is more often than the field admits.",
    res:  "LangGraph docs (free) | Anthropic: building effective agents (free), why: it is honest about when not to use one | DeepLearning.AI agent short courses (free)" },
  { id: "MCP", phase: "P5", row: 2, label: "MCP & tool protocols",
    priority: "desirable", kind: "branch", tracks: ["agents","platform"],
    prereqs: ["TOOLS"],
    desc: "Model Context Protocol servers and clients, capability discovery, transport, and the authorisation model for exposing internal systems to an agent.",
    res:  "MCP specification and docs (free) | Reference MCP server implementations (free), why: reading two servers teaches the shape faster than the spec" },
  { id: "FINE", phase: "P5", row: 3, label: "LLM fine-tuning",
    priority: "desirable", kind: "branch", tracks: ["product","quality"],
    prereqs: ["LLM"],
    desc: "LoRA and QLoRA, instruction tuning, preference tuning, and dataset construction. Reach for it after prompting, retrieval and evaluation have been exhausted, not before.",
    res:  "Hugging Face PEFT docs (free) | DeepLearning.AI short courses on fine-tuning (free) | Axolotl docs (free)" },

  // ─── P6 ─ Production ──────────────────────────────────────────────────
  { id: "EVAL", phase: "P6", row: 0, label: "AI evaluation",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LLM","ML"],
    desc: "The core discipline of this path. Task benchmarks, LLM-as-judge and its failure modes, regression gates in CI, human review design, and offline versus online measurement.",
    res:  "Book: AI Engineering, Chip Huyen, why: the most practical published treatment of evaluation | Ragas and OpenAI Evals (free) | DeepLearning.AI: Building and Evaluating Advanced RAG (free)" },
  { id: "OBS", phase: "P6", row: 1, label: "LLM observability & tracing",
    priority: "critical", kind: "branch", tracks: ["platform","quality","product"],
    prereqs: ["EVAL","DOC"],
    desc: "Tracing a request through prompts, retrievals and tool calls, capturing inputs and outputs for replay, and turning production traffic into an evaluation set.",
    res:  "OpenTelemetry GenAI conventions (free) | Langfuse or Phoenix docs (free), why: self-hostable and vendor-neutral" },
  { id: "SERVE", phase: "P6", row: 2, label: "LLM serving & inference",
    priority: "critical", kind: "branch", tracks: ["platform"],
    prereqs: ["LLM","DOC"],
    desc: "vLLM and TGI, continuous batching, KV-cache management, quantized serving, streaming, and what happens to tail latency under real concurrency.",
    res:  "vLLM docs (free), why: the reference implementation of paged attention | Hugging Face TGI docs (free)" },
  { id: "COST", phase: "P6", row: 3, label: "Cost & latency engineering",
    priority: "critical", kind: "branch", tracks: ["platform","product"],
    prereqs: ["SERVE"],
    desc: "Token budgets, prompt caching, model routing and cascades, batching, and knowing the unit economics of a feature before it ships.",
    res:  "Provider pricing and caching docs (free) | Published cost-reduction case studies (free), why: the wins are repeatable and rarely obvious" },
  { id: "DATAFB", phase: "P6", row: 4, label: "Feedback loops & data flywheel",
    priority: "desirable", kind: "branch", tracks: ["quality","product"],
    prereqs: ["EVAL","OBS"],
    desc: "Capturing thumbs, corrections and abandonment, curating them into evaluation and tuning sets, and closing the loop so the system improves from use.",
    res:  "Book: AI Engineering, Chip Huyen, data chapters | Argilla docs (free), why: human review needs tooling or it does not happen" },
  { id: "SAFE", phase: "P6", row: 5, label: "AI safety & governance",
    priority: "desirable", kind: "elective", tracks: ["product","quality","agents","platform","rag"],
    prereqs: ["EVAL"],
    desc: "EU AI Act obligations, model and system cards, red-teaming, incident response, and the documentation a regulated deployment has to produce.",
    res:  "NIST AI Risk Management Framework (free) | EU AI Act explorer (free) | See also the AI Security roadmap" },

  // ─── P7 ─ Scale & architecture ────────────────────────────────────────
  { id: "SYSDES", phase: "P7", row: 0, label: "Distributed systems",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["BACKEND","DOC"],
    desc: "Queues, idempotency, retries and backoff, caching, partial failure and consistency. An LLM call is a slow, flaky, expensive network dependency, and this is how those are handled.",
    res:  "Book: Designing Data-Intensive Applications, Kleppmann, why: still the single best systems book | AWS Builders' Library (free)" },
  { id: "CLOUD", phase: "P7", row: 1, label: "Cloud ML platforms",
    priority: "desirable", kind: "branch", tracks: ["platform"],
    prereqs: ["DOC","SYSDES"],
    desc: "Managed inference, GPU capacity and quotas, private networking, and the compliance posture of sending data to a model provider.",
    res:  "Docs for one major cloud's AI platform (free), why: depth in one beats a tour of three" },
  { id: "K8S", phase: "P7", row: 2, label: "Kubernetes for ML",
    priority: "desirable", kind: "branch", tracks: ["platform"],
    prereqs: ["DOC","CLOUD"],
    desc: "Orchestration for inference workloads, autoscaling on queue depth rather than CPU, GPU scheduling and rollout strategy.",
    res:  "Kubernetes docs (free) | KServe docs (free) | Book: Kubernetes in Action" },
  { id: "AIARCH", phase: "P7", row: 3, label: "AI systems architecture",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["SYSDES","EVAL"],
    desc: "Composing the whole thing: where the model boundary sits, what is deterministic, fallbacks when the model is wrong or unavailable, and writing the trade-offs down so others can argue with them.",
    res:  "Book: AI Engineering, Chip Huyen | Book: Designing Machine Learning Systems, Chip Huyen | Write architecture decision records, why: the writing is the skill" },
  { id: "DOMAIN", phase: "P7", row: 4, label: "Domain vertical",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["EVAL"],
    desc: "Real depth in one industry: its vocabulary, its documents, its regulations and what counts as a correct answer there. The part a general-purpose model cannot supply and a remote generalist cannot copy.",
    res:  "No course. Work in the domain, read its regulations, and build the evaluation set with someone who does the job" },

  // ─── P8 ─ Capstone & leadership ───────────────────────────────────────
  { id: "CAPAPP", phase: "P8", row: 0, label: "Capstone: Applied AI",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["RAG","AGENT","EVAL","SERVE"],
    desc: "One LLM system in production shape: retrieval or tools, a real evaluation suite with a regression gate, cost and latency budgets, and a written account of what the evaluations caught. The proof this path is finished.",
    res:  "No course. Ship it with the evaluation harness public, why: the harness is the part that is hard to fake" },
  { id: "LEAD", phase: "P8", row: 1, label: "Technical leadership",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["AIARCH"],
    desc: "Setting technical direction, writing that changes decisions, mentoring, and saying no to an AI feature that should be a database query.",
    res:  "Book: Staff Engineer, Will Larson, free web edition at staffeng.com | Write and publish, why: reputation in this field is built in public" },
  { id: "VLM", phase: "P8", row: 2, label: "Vision-language models",
    priority: "frontier", kind: "elective", tracks: ["product"],
    prereqs: ["MULTI"],
    desc: "Screen understanding, computer use and document agents. Fast-moving and brittle, which is why it sits here rather than in the spine.",
    res:  "Provider computer-use documentation (free) | Open VLM benchmarks (free)" },
  { id: "FRONTIER", phase: "P8", row: 3, label: "Reasoning & long-horizon agents",
    priority: "frontier", kind: "elective", tracks: ["agents","quality"],
    prereqs: ["AGENT","EVAL"],
    desc: "Reasoning models, test-time compute, long-running agents and the evaluation problem they create: how to score a task that takes hours and has no single right answer.",
    res:  "Follow provider research posts and arXiv (free), why: the published state moves faster than any course, so track it rather than study it" },
];

export default {
  id: "applied-ai",
  name: "Applied AI / LLM engineering",
  srLabel: "Applied AI and LLM engineering curriculum grid",
  phases: PHASES,
  tracks: TRACKS,
  courses: COURSES,
};
