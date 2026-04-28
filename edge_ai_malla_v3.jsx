import { useState, useCallback, useMemo } from "react";

// ─── Phases ─────────────────────────────────────────────────────────────
const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Prerequisites", color: "#94a3b8" },
  { id: "P1", label: "Phase 1",     subtitle: "Months 1–5",    color: "#22d3ee" },
  { id: "P2", label: "Phase 2",     subtitle: "Months 6–10",   color: "#06b6d4" },
  { id: "P3", label: "Phase 3",     subtitle: "Months 11–15",  color: "#8b5cf6" },
  { id: "P4", label: "Phase 4",     subtitle: "Months 16–20",  color: "#a78bfa" },
  { id: "P5", label: "Phase 5",     subtitle: "Months 21–25",  color: "#34d399" },
  { id: "P6", label: "Phase 6",     subtitle: "Months 26–30",  color: "#10b981" },
  { id: "P7", label: "Phase 7",     subtitle: "Months 31–40",  color: "#f59e0b" },
  { id: "P8", label: "Phase 8",     subtitle: "Years 4–10",    color: "#fb923c" },
];

// ─── Priority (absolute importance) ────────────────────────────────────
const PRIORITY = {
  critical:  { bg: "#fef2f2", border: "#ef4444", text: "#991b1b", label: "Critical"  },
  desirable: { bg: "#fefce8", border: "#eab308", text: "#854d0e", label: "Desirable" },
  frontier:  { bg: "#f0fdf4", border: "#22c55e", text: "#166534", label: "Frontier"  },
};

// ─── Specialization tracks ─────────────────────────────────────────────
//  Each course's `tracks` lists which specializations require it.
//  Spine courses use ["all"] and apply to every track.
const TRACKS = {
  edge:     { color: "#2563eb", label: "Edge AI deployer",            short: "Edge"     },
  robotics: { color: "#059669", label: "Robotics / Physical AI",      short: "Robotics" },
  compiler: { color: "#7c3aed", label: "Compiler & kernels",          short: "Compiler" },
  safety:   { color: "#d97706", label: "Industrial functional-safety", short: "Safety"  },
};
const TRACK_IDS = Object.keys(TRACKS);
const SPINE_COLOR = "#64748b";

// ─── Kind (role in your personal path) ─────────────────────────────────
//   spine    → required for every track
//   branch   → required only if you commit to a matching track
//   elective → optional cross-cutting; pick if you have time
const KINDS = {
  spine:    { label: "Spine",    desc: "Required for every track"             },
  branch:   { label: "Branch",   desc: "Required only for chosen track(s)"    },
  elective: { label: "Elective", desc: "Optional, cross-cutting"              },
};

// ─── Course catalog ────────────────────────────────────────────────────
const COURSES = [
  // ─── P0 ─ Foundations (spine) ─────────────────────────────────────────
  { id: "LINUX", phase: "P0", row: 0, label: "Linux & CLI",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Terminal, bash, file systems, permissions, SSH. Foundation for all deployment.",
    res:  "Linux Journey (free) | MIT Missing Semester (free) | Coursera: Unix Workbench — JHU" },
  { id: "PY", phase: "P0", row: 1, label: "Python",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Core language for ML. Variables, functions, OOP, NumPy, pandas, matplotlib.",
    res:  "Coursera: Python for Everybody — UMich | Book: Automate the Boring Stuff (free) | python.org tutorial" },
  { id: "CPP", phase: "P0", row: 2, label: "C++",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Pointers, memory management, OOP, STL. Essential for TensorRT, ROS2, CUDA, kernels.",
    res:  "Coursera: C++ for C Programmers — UCSC | learncpp.com (free) | Book: A Tour of C++ — Stroustrup" },
  { id: "LA", phase: "P0", row: 3, label: "Linear algebra",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Vectors, matrices, eigenvalues, SVD. The math behind every neural network.",
    res:  "3Blue1Brown: Essence of Linear Algebra (free YT) | Khan Academy (free) | MIT 18.06 Strang (free YT)" },
  { id: "CALC", phase: "P0", row: 4, label: "Calculus",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Derivatives, chain rule, partial derivatives, gradients. Required for backpropagation.",
    res:  "3Blue1Brown: Essence of Calculus (free YT) | Khan Academy (free) | Coursera: Math for ML — Imperial" },
  { id: "PROB", phase: "P0", row: 5, label: "Probability & stats",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Bayes theorem, distributions, hypothesis testing, MLE.",
    res:  "Coursera: Statistics with Python — UMich | Book: Think Stats (free) | Khan Academy (free)" },
  { id: "GIT", phase: "P0", row: 6, label: "Git & version control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Repos, branches, merging, PRs, GitHub workflows.",
    res:  "git-scm.com tutorial (free) | GitHub Skills (free) | Coursera: Version Control — Meta" },

  // ─── P1 ─ Core ML & Tools (spine) ────────────────────────────────────
  { id: "ML", phase: "P1", row: 0, label: "Machine learning",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["PY","LA","CALC","PROB"],
    desc: "Supervised/unsupervised, regression, classification, clustering, evaluation, scikit-learn.",
    res:  "Coursera: ML Specialization — Andrew Ng | Book: Hands-On ML — Géron | fast.ai Practical ML (free)" },
  { id: "DOC", phase: "P1", row: 1, label: "Docker & CI/CD",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["LINUX","GIT"],
    desc: "Containers, Dockerfiles, Compose, GitHub Actions, basic CI/CD pipelines.",
    res:  "Docker getting started (free) | Coursera: IBM DevOps & SWE | GitHub Actions docs (free)" },

  // ─── P2 ─ Deep Learning & Operations ─────────────────────────────────
  { id: "DL", phase: "P2", row: 0, label: "Deep learning & PyTorch",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["ML"],
    desc: "Neural networks, CNNs, RNNs, backprop, regularization, transfer learning. PyTorch framework.",
    res:  "Coursera: DL Specialization — Andrew Ng | fast.ai (free) | PyTorch tutorials (free)" },
  { id: "MLOPS", phase: "P2", row: 1, label: "MLOps fundamentals",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["ML","DOC"],
    desc: "MLflow, experiment tracking, model serving (FastAPI), monitoring, data drift, CI/CD for ML.",
    res:  "Coursera: MLOps Spec — Andrew Ng | MLOps Zoomcamp (free) | Book: Designing ML Systems — Chip Huyen" },
  { id: "CUDA", phase: "P2", row: 2, label: "CUDA & GPU computing",
    priority: "critical", kind: "branch", tracks: ["edge","robotics","compiler"],
    prereqs: ["CPP","LA"],
    desc: "GPU programming, kernels, memory hierarchy, parallelism. Foundation for TensorRT, training, custom kernel work.",
    res:  "NVIDIA DLI: Fundamentals of Accelerated Computing with CUDA C/C++ | Coursera: GPU Programming Spec" },

  // ─── P3 ─ Vision, Models & Export ────────────────────────────────────
  { id: "CV", phase: "P3", row: 0, label: "Computer vision",
    priority: "critical", kind: "branch", tracks: ["edge","robotics","safety"],
    prereqs: ["DL"],
    desc: "Image processing (OpenCV), detection (YOLO), segmentation, tracking. Classical + DL approaches.",
    res:  "Hugging Face CV Course (free) | Stanford CS231n (free YT) | Book: DL for Vision Systems — Elgendy" },
  { id: "ONNX", phase: "P3", row: 1, label: "ONNX & model export",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["DL"],
    desc: "Export PyTorch/TF models to ONNX. Graph optimization, operator support, runtime inference.",
    res:  "ONNX Runtime docs (free) | ONNX GitHub tutorials (free)" },
  { id: "LLM", phase: "P3", row: 2, label: "LLM fundamentals",
    priority: "desirable", kind: "branch", tracks: ["edge","robotics","compiler"],
    prereqs: ["DL"],
    desc: "Transformer architecture, attention mechanism, tokenization, prompting, context windows.",
    res:  "Coursera: GenAI with LLMs — DeepLearning.AI + AWS | Karpathy: Let's build GPT (free YT)" },

  // ─── P4 ─ Optimization & Specialization ──────────────────────────────
  { id: "TRT", phase: "P4", row: 0, label: "TensorRT",
    priority: "critical", kind: "branch", tracks: ["edge","robotics","compiler"],
    prereqs: ["ONNX","CPP","CUDA"],
    desc: "NVIDIA inference optimizer. FP16/INT8 quantization, calibration, profiling, C++ and Python APIs.",
    res:  "NVIDIA DLI: Optimizing with TensorRT (free) | Udemy: TensorRT/ONNX Course (~$15) | TensorRT docs" },
  { id: "VIT", phase: "P4", row: 1, label: "Vision Transformers",
    priority: "critical", kind: "branch", tracks: ["edge","robotics"],
    prereqs: ["CV"],
    desc: "ViT architecture, CLIP (zero-shot), SAM (segmentation), DINOv2 (self-supervised features).",
    res:  "Hugging Face CV Course (free) | Papers: ViT, CLIP, SAM on arxiv (free)" },
  { id: "RAG", phase: "P4", row: 2, label: "RAG & vector DBs",
    priority: "desirable", kind: "branch", tracks: ["edge"],
    prereqs: ["LLM"],
    desc: "Retrieval-augmented generation, embeddings, vector databases (Chroma, Pinecone), chunking.",
    res:  "DeepLearning.AI: LangChain for LLM Apps (free) | LangChain docs (free)" },
  { id: "FINE", phase: "P4", row: 3, label: "LLM fine-tuning",
    priority: "desirable", kind: "branch", tracks: ["edge","robotics"],
    prereqs: ["LLM"],
    desc: "LoRA/QLoRA, RLHF, instruction tuning, evaluation frameworks.",
    res:  "DeepLearning.AI: Fine-tuning LLMs (free) | Coursera: GenAI Engineering — IBM | HF PEFT docs" },
  { id: "SF", phase: "P4", row: 4, label: "Sensor fusion",
    priority: "desirable", kind: "branch", tracks: ["edge","robotics"],
    prereqs: ["CV","PROB"],
    desc: "Camera + LiDAR + IMU. Kalman filters, particle filters, point clouds, SLAM basics.",
    res:  "Coursera: Self-Driving Cars — U Toronto | Cyrill Stachniss (free YT) | Book: Probabilistic Robotics" },
  { id: "TFLITE", phase: "P4", row: 5, label: "TFLite & OpenVINO",
    priority: "desirable", kind: "branch", tracks: ["edge","safety"],
    prereqs: ["ONNX"],
    desc: "Cross-platform edge: TFLite for MCUs, OpenVINO for Intel. Alternative to NVIDIA stack.",
    res:  "Edge Impulse free tier | TFLite docs (free) | OpenVINO docs (free) | Book: TinyML — Warden" },
  { id: "KERNEL", phase: "P4", row: 6, label: "GPU kernels & profiling",
    priority: "critical", kind: "branch", tracks: ["compiler"],
    prereqs: ["CUDA","CPP"],
    desc: "Triton language, CUTLASS, Nsight Systems / Compute, NVTX. Authoring custom kernels and profile-driven optimization.",
    res:  "Triton tutorials (free) | CUTLASS GitHub (free) | NVIDIA Nsight Compute docs (free) | GPU MODE Discord & YT (free)" },
  { id: "RL", phase: "P4", row: 7, label: "RL & imitation learning",
    priority: "critical", kind: "branch", tracks: ["robotics"],
    prereqs: ["DL"],
    desc: "Policy gradient (PPO), behavior cloning, diffusion policies, vision-language-action (VLA) models. The modern policy-learning stack for robots.",
    res:  "Berkeley CS285 (free YT) | OpenAI Spinning Up (free) | DeepMind RL course (free) | Diffusion Policy paper (free)" },

  // ─── P5 ─ Deploy & Build ─────────────────────────────────────────────
  { id: "JET", phase: "P5", row: 0, label: "Jetson & edge deploy",
    priority: "critical", kind: "branch", tracks: ["edge","robotics"],
    prereqs: ["TRT","DOC"],
    desc: "NVIDIA Jetson platform. JetPack SDK, DeepStream, video analytics. Production edge deployment.",
    res:  "NVIDIA Jetson tutorials (free blog) | NVIDIA DLI (~$30) | Book: AI at the Edge — Situnayake | HW: Orin Nano ~$249" },
  { id: "AGENT", phase: "P5", row: 1, label: "Multi-agent systems",
    priority: "critical", kind: "branch", tracks: ["edge"],
    prereqs: ["RAG","MLOPS"],
    desc: "LangGraph, CrewAI, MCP protocol. State management, guardrails, observability for agents.",
    res:  "Coursera: IBM Agentic AI (incl) | DeepLearning.AI: CrewAI (free) | LangGraph docs | MCP docs" },
  { id: "ROS2", phase: "P5", row: 2, label: "ROS2",
    priority: "critical", kind: "branch", tracks: ["robotics"],
    prereqs: ["CPP","PY","LINUX"],
    desc: "Robot Operating System 2. Nodes, topics, services, Nav2, Gazebo simulation. C++ and Python.",
    res:  "Udemy: ROS2 for Beginners (~$15) | The Construct (free tier) | docs.ros.org | Book: Intro to ROS2 — Martín Rico" },
  { id: "DOMAIN", phase: "P5", row: 3, label: "Domain vertical",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["CV","ML"],
    desc: "Pick ONE: Industrial/Mining, Automotive, Medical, or Energy. Domain = salary moat.",
    res:  "Coursera: domain specializations (incl) | Industry conferences | Professional communities" },

  // ─── P6 ─ Integration ────────────────────────────────────────────────
  { id: "VLM", phase: "P6", row: 0, label: "Vision-language models",
    priority: "desirable", kind: "branch", tracks: ["edge","robotics"],
    prereqs: ["VIT","JET"],
    desc: "Multimodal AI on edge. Deploy VLMs on Jetson using TensorRT Edge-LLM SDK (C++ runtime).",
    res:  "NVIDIA blog: Edge AI on Jetson — VLMs (free) | TensorRT Edge-LLM SDK docs (free)" },
  { id: "ISAAC", phase: "P6", row: 1, label: "NVIDIA Isaac Sim",
    priority: "desirable", kind: "branch", tracks: ["robotics"],
    prereqs: ["ROS2","JET"],
    desc: "Sim-to-real transfer. Train robot policies in simulation, deploy on Jetson with TensorRT.",
    res:  "NVIDIA DLI: Isaac Sim (~$30) | Isaac Lab on GitHub (free) | GR00T deployment guide (free)" },
  { id: "DSLM", phase: "P6", row: 2, label: "Domain-specific models",
    priority: "desirable", kind: "branch", tracks: ["edge","robotics","safety"],
    prereqs: ["FINE","DOMAIN"],
    desc: "Fine-tune foundation models for your vertical. Build moats with proprietary data.",
    res:  "Hugging Face fine-tuning guides (free) | Domain-specific datasets and benchmarks" },
  { id: "SAFE", phase: "P6", row: 3, label: "AI safety & governance",
    priority: "desirable", kind: "elective", tracks: ["edge","robotics","safety"],
    prereqs: ["AGENT"],
    desc: "EU AI Act, adversarial ML, red-teaming, model auditing. Becoming mandatory by 2028.",
    res:  "Trustworthy AI — U Helsinki (free) | ISO 42001 awareness | Coursera: AI Ethics (incl)" },
  { id: "SYSDES", phase: "P6", row: 4, label: "Distributed systems",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["MLOPS","DOC"],
    desc: "Replication, partitioning, consistency, streaming, batch. Foundation of scalable AI systems.",
    res:  "Book: Designing Data-Intensive Applications — Kleppmann (MUST READ)" },
  { id: "FSAFETY", phase: "P6", row: 5, label: "Functional safety for ML",
    priority: "critical", kind: "branch", tracks: ["safety"],
    prereqs: ["DOMAIN","MLOPS"],
    desc: "IEC 61508, ISO 26262 (automotive), IEC 62443 (industrial security). SIL/ASIL levels, deterministic inference, safety monitors, safety case writing.",
    res:  "IEC 61508 white papers (free) | Book: Functional Safety for Embedded Systems — Hobbs | Safety-Critical AI papers (arxiv)" },

  // ─── P7 ─ Architecture (mostly spine reconvergence) ──────────────────
  { id: "AIARCH", phase: "P7", row: 0, label: "AI systems architecture",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["SYSDES","AGENT","JET"],
    desc: "Edge-cloud design, fleet management, federated learning, multi-model serving, system design.",
    res:  "Book: System Design Interview — Alex Xu (Vol 1&2) | Coursera: Software Architecture — U Alberta" },
  { id: "K8S", phase: "P7", row: 1, label: "Kubernetes for ML",
    priority: "desirable", kind: "elective", tracks: ["edge","compiler","safety"],
    prereqs: ["DOC","MLOPS"],
    desc: "Container orchestration, Helm, KubeFlow, model serving at scale, autoscaling inference.",
    res:  "Coursera: Google Cloud K8s | KubeFlow docs (free) | Book: Kubernetes in Action" },
  { id: "CLOUD", phase: "P7", row: 2, label: "Cloud ML platforms",
    priority: "desirable", kind: "elective", tracks: ["edge","compiler","safety"],
    prereqs: ["MLOPS","DL"],
    desc: "AWS SageMaker, GCP Vertex AI, Azure ML. Training, serving, and monitoring in the cloud.",
    res:  "Coursera: Google Cloud ML Engineer (incl) | AWS ML Specialty prep | Azure ML docs (free)" },

  // ─── P8 ─ Frontier & Leadership ──────────────────────────────────────
  { id: "LEAD", phase: "P8", row: 0, label: "Technical leadership",
    priority: "desirable", kind: "spine", tracks: ["all"],
    prereqs: ["AIARCH"],
    desc: "Architecture decisions, mentoring, writing, conference talks, open source contributions.",
    res:  "Book: Staff Engineer — Larson | Book: The Manager's Path — Fournier" },
  { id: "NEURO", phase: "P8", row: 1, label: "Neuromorphic computing",
    priority: "frontier", kind: "elective", tracks: ["compiler","edge"],
    prereqs: ["CPP","JET"],
    desc: "Spiking neural networks, Intel Loihi 2, ultra-low-power edge AI. Market CAGR 104%.",
    res:  "Intel INRC (free apply) | Lava framework GitHub (free) | Book: Neuromorphic Engineering — Springer" },
  { id: "QUANT", phase: "P8", row: 2, label: "Quantum-AI hybrids",
    priority: "frontier", kind: "elective", tracks: ["compiler"],
    prereqs: ["LA","ML"],
    desc: "Quantum-classical algorithms, optimization, Qiskit, Cirq. Market projected $292B by 2035.",
    res:  "IBM Quantum Learning (free) | Qiskit Textbook (free) | Book: Nielsen & Chuang" },
  { id: "BIOAI", phase: "P8", row: 3, label: "Bio-digital / medical AI",
    priority: "frontier", kind: "elective", tracks: ["safety"],
    prereqs: ["CV","FINE"],
    desc: "Medical imaging, computational biology, BCIs. Healthcare informatics >$127B by 2034.",
    res:  "Coursera: AI for Medicine — DeepLearning.AI (incl) | MIT OCW: Comp Biology (free)" },
  { id: "FLEET", phase: "P8", row: 4, label: "AI fleet architect",
    priority: "frontier", kind: "branch", tracks: ["robotics","edge"],
    prereqs: ["AIARCH","ROS2","AGENT"],
    desc: "Managing autonomous robot/agent fleets. Gartner: 500M net new AI jobs by 2036.",
    res:  "No formal courses — build through projects, open source, and industry experience" },
];

// ─── Lookup tables & helpers ───────────────────────────────────────────
const PCOL = Object.fromEntries(PHASES.map((p, i) => [p.id, i]));
const cMap = Object.fromEntries(COURSES.map(c => [c.id, c]));

function trackColorsFor(course) {
  if (course.kind === "spine" || course.tracks.includes("all")) return [SPINE_COLOR];
  return course.tracks.map(t => TRACKS[t]?.color).filter(Boolean);
}

function isInActiveTracks(course, active) {
  if (active.size === 0) return true;
  if (course.kind === "spine" || course.tracks.includes("all")) return true;
  return course.tracks.some(t => active.has(t));
}

// ─── Layout ───────────────────────────────────────────────────────────
const W = 126, H = 50, GX = 28, GY = 8, PT = 40, PB = 12, PX = 8, STRIPE = 3;
const CW = W + 2 * PX;

// ═══════════════════════════════════════════════════════════════════════
// ─── Subcomponents ─────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════

function TrackFilter({ active, onToggle, onClear, count, total }) {
  const btnStyle = (id, on) => ({
    fontSize: 11, padding: "4px 9px", borderRadius: 6, cursor: "pointer",
    border: `1px solid ${TRACKS[id].color}`,
    background: on ? TRACKS[id].color : "transparent",
    color: on ? "#fff" : TRACKS[id].color,
    fontWeight: 500, transition: "all 0.15s",
  });
  return (
    <div style={{
      display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6,
      marginBottom: "0.5rem", paddingBottom: "0.5rem",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
    }}>
      <span style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 500, marginRight: 4 }}>
        Specialization:
      </span>
      {TRACK_IDS.map(id => (
        <button key={id} onClick={() => onToggle(id)} style={btnStyle(id, active.has(id))}>
          {TRACKS[id].label}
        </button>
      ))}
      {active.size > 0 && (
        <button onClick={onClear} style={{
          fontSize: 10, padding: "3px 8px", cursor: "pointer", marginLeft: 4,
          color: "var(--color-text-tertiary)", background: "transparent",
          border: "1px solid var(--color-border-tertiary)", borderRadius: 6,
        }}>Clear</button>
      )}
      <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--color-text-tertiary)" }}>
        {count}/{total} done {total > 0 && `(${Math.round((count / total) * 100)}%)`}
      </span>
    </div>
  );
}

function Legend() {
  const swatch = (bg, border) => (
    <div style={{ width: 9, height: 9, borderRadius: 2, background: bg, border: `1.5px solid ${border}` }} />
  );
  return (
    <div style={{
      display: "flex", alignItems: "center", flexWrap: "wrap",
      gap: 14, fontSize: 10, marginBottom: "0.6rem",
      color: "var(--color-text-tertiary)",
    }}>
      <div style={{ display: "flex", gap: 8 }}>
        {Object.entries(PRIORITY).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 3 }}>
            {swatch(v.bg, v.border)}<span>{v.label}</span>
          </div>
        ))}
      </div>
      <span style={{ color: "var(--color-border-tertiary)" }}>·</span>
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 14, height: 3, background: SPINE_COLOR, borderRadius: 1 }} />
          <span>Spine stripe</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 14, height: 3, display: "flex", borderRadius: 1, overflow: "hidden" }}>
            {TRACK_IDS.map(t => (
              <div key={t} style={{ flex: 1, background: TRACKS[t].color }} />
            ))}
          </div>
          <span>Branch / elective stripe (per track)</span>
        </div>
      </div>
    </div>
  );
}

function CourseNode({ course, pos, isSel, isDim, isDone, onSelect, onToggleDone }) {
  const pr = PRIORITY[course.priority];
  const stripeColors = trackColorsFor(course);

  return (
    <div onClick={onSelect} style={{
      position: "absolute", left: pos.x, top: pos.y, width: W, height: H,
      zIndex: isSel ? 10 : 2,
      background: isDone ? "var(--color-background-success, #f0fdf4)" : pr.bg,
      border: isSel ? "2px solid #3b82f6"
            : `1px solid ${isDone ? "var(--color-border-success, #22c55e)" : pr.border}`,
      borderRadius: "var(--border-radius-md, 8px)",
      cursor: "pointer",
      opacity: isDim ? 0.15 : 1,
      transition: "opacity 0.2s, transform 0.15s",
      transform: isSel ? "scale(1.05)" : "scale(1)",
      overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>
      {/* Track stripe */}
      <div style={{
        height: STRIPE, display: "flex",
        borderTopLeftRadius: "var(--border-radius-md, 8px)",
        borderTopRightRadius: "var(--border-radius-md, 8px)",
        overflow: "hidden", flexShrink: 0,
      }}>
        {stripeColors.map((c, i) => (
          <div key={i} style={{ flex: 1, background: c }} />
        ))}
      </div>

      {/* Body */}
      <div style={{
        flex: 1, padding: "3px 6px 2px",
        display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
          <div onClick={onToggleDone} style={{
            width: 12, height: 12, borderRadius: 2, flexShrink: 0, marginTop: 1,
            border: isDone ? "none" : `1.5px solid ${pr.border}`,
            background: isDone ? "var(--color-text-success, #16a34a)" : "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 8, color: "white", cursor: "pointer",
          }}>{isDone ? "✓" : ""}</div>
          <span style={{
            fontSize: 10, fontWeight: 500, lineHeight: 1.2,
            color: isDone ? "var(--color-text-success, #166534)" : pr.text,
            textDecoration: isDone ? "line-through" : "none",
            overflow: "hidden", display: "-webkit-box",
            WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          }}>{course.label}</span>
        </div>
        <div style={{ fontSize: 7, color: "var(--color-text-tertiary)", marginTop: 1, marginLeft: 15 }}>
          {course.id}
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ course, onClose, onSelect }) {
  const pr = PRIORITY[course.priority];
  const phase = PHASES.find(p => p.id === course.phase);
  const unlocks = COURSES.filter(c => c.prereqs.includes(course.id));
  const tracksDisplay = course.tracks.includes("all")
    ? "All specializations"
    : course.tracks.map(t => TRACKS[t]?.label).filter(Boolean).join(" · ");

  const tag = (text, color, bg) => (
    <span style={{
      fontSize: 9, padding: "1px 5px", borderRadius: 3,
      background: bg, color, border: `1px solid ${color}66`,
      fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em",
    }}>{text}</span>
  );

  return (
    <div style={{
      marginTop: "0.6rem", padding: "0.6rem 0.8rem",
      background: "var(--color-background-primary)",
      border: "0.5px solid var(--color-border-tertiary)",
      borderRadius: "var(--border-radius-lg, 12px)", fontSize: 12,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>
            {tag(pr.label, pr.text, pr.bg)}
            {tag(KINDS[course.kind].label, "#475569", "#f1f5f9")}
            <span style={{ fontSize: 9, color: "var(--color-text-tertiary)" }}>
              {phase?.label} — {phase?.subtitle}
            </span>
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "4px 0 0" }}>{course.label}</h3>
          <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 2 }}>
            <strong style={{ color: "var(--color-text-secondary)", fontWeight: 500 }}>Tracks:</strong> {tracksDisplay}
          </div>
        </div>
        <button onClick={onClose} style={{ fontSize: 10, padding: "1px 6px", cursor: "pointer", flexShrink: 0 }}>
          Close
        </button>
      </div>

      <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "6px 0", lineHeight: 1.5 }}>
        {course.desc}
      </p>

      {course.prereqs.length > 0 && (
        <div style={{ marginBottom: 4 }}>
          <span style={{ color: "var(--color-text-tertiary)", fontSize: 11 }}>Requires: </span>
          {course.prereqs.map((pid, i) => (
            <span key={pid}>
              <span onClick={() => onSelect(pid)} style={{
                color: "var(--color-text-info, #2563eb)",
                cursor: "pointer", textDecoration: "underline", fontSize: 11,
              }}>{cMap[pid]?.label}</span>
              {i < course.prereqs.length - 1 ? " → " : ""}
            </span>
          ))}
        </div>
      )}

      {unlocks.length > 0 && (
        <div style={{ marginBottom: 4 }}>
          <span style={{ color: "var(--color-text-tertiary)", fontSize: 11 }}>Unlocks: </span>
          {unlocks.map((u, i) => (
            <span key={u.id}>
              <span onClick={() => onSelect(u.id)} style={{
                color: "var(--color-text-info, #2563eb)",
                cursor: "pointer", textDecoration: "underline", fontSize: 11,
              }}>{u.label}</span>
              {i < unlocks.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}

      <div style={{
        fontSize: 11, padding: "6px 8px", marginTop: 4,
        background: "var(--color-background-secondary)",
        borderRadius: "var(--border-radius-md, 8px)", lineHeight: 1.5,
      }}>
        <span style={{ fontWeight: 500 }}>Resources: </span>
        <span style={{ color: "var(--color-text-secondary)" }}>{course.res}</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// ─── Main component ────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════

export default function Malla() {
  const [sel, setSel] = useState(null);
  const [done, setDone] = useState(new Set());
  const [activeTracks, setActiveTracks] = useState(new Set());

  const ancestorsOf = useCallback((id, v = new Set()) => {
    if (v.has(id)) return v;
    v.add(id);
    (cMap[id]?.prereqs || []).forEach(p => ancestorsOf(p, v));
    return v;
  }, []);

  const descendantsOf = useCallback((id, v = new Set()) => {
    if (v.has(id)) return v;
    v.add(id);
    COURSES.forEach(c => { if (c.prereqs.includes(id)) descendantsOf(c.id, v); });
    return v;
  }, []);

  const chain = useMemo(() => {
    if (!sel) return new Set();
    return new Set([...ancestorsOf(sel), ...descendantsOf(sel)]);
  }, [sel, ancestorsOf, descendantsOf]);

  const chainEdges = useMemo(() => {
    if (!sel) return new Set();
    const s = new Set();
    COURSES.forEach(c => {
      if (chain.has(c.id)) c.prereqs.forEach(p => { if (chain.has(p)) s.add(`${p}->${c.id}`); });
    });
    return s;
  }, [sel, chain]);

  const relevantSet = useMemo(() => {
    if (activeTracks.size === 0) return new Set(COURSES.map(c => c.id));
    return new Set(COURSES.filter(c => isInActiveTracks(c, activeTracks)).map(c => c.id));
  }, [activeTracks]);

  const doneInRelevant = useMemo(
    () => [...done].filter(id => relevantSet.has(id)).length,
    [done, relevantSet]
  );

  const toggleDone = (id, e) => {
    e.stopPropagation();
    setDone(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const toggleTrack = (id) => {
    setActiveTracks(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const clearTracks = () => setActiveTracks(new Set());

  const maxRows = Math.max(...PHASES.map(p => COURSES.filter(c => c.phase === p.id).length));
  const TH = PT + maxRows * H + Math.max(0, maxRows - 1) * GY + PB + 12;
  const TW = PHASES.length * CW + (PHASES.length - 1) * GX;

  const pos = useMemo(() => {
    const p = {};
    COURSES.forEach(c => {
      const col = PCOL[c.phase];
      p[c.id] = { x: col * (CW + GX) + PX, y: PT + c.row * (H + GY) };
    });
    return p;
  }, []);

  const edges = useMemo(() => {
    const a = [];
    COURSES.forEach(c => c.prereqs.forEach(p => {
      if (pos[p] && pos[c.id]) a.push({ f: p, t: c.id });
    }));
    return a;
  }, [pos]);

  const sc = sel ? cMap[sel] : null;

  return (
    <div style={{ fontFamily: "var(--font-sans, system-ui)", padding: "0.5rem 0" }}>
      <h2 className="sr-only">Edge AI curriculum grid with 9 phases, 4 specialization tracks, and prerequisite dependencies</h2>

      <TrackFilter
        active={activeTracks}
        onToggle={toggleTrack}
        onClear={clearTracks}
        count={doneInRelevant}
        total={relevantSet.size}
      />
      <Legend />

      <div style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 6 }}>
        <div style={{ position: "relative", width: TW, height: TH }}>

          {/* Phase columns (background) */}
          {PHASES.map((p, col) => (
            <div key={p.id} style={{
              position: "absolute", left: col * (CW + GX), top: 0, width: CW, height: TH - 12,
              background: "var(--color-background-secondary)",
              borderRadius: "var(--border-radius-lg, 12px)",
              border: "0.5px solid var(--color-border-tertiary)", zIndex: 0,
            }}>
              <div style={{
                padding: "6px 8px", fontSize: 11, fontWeight: 500, color: p.color,
                borderBottom: `1.5px solid ${p.color}22`,
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
              }}>
                <span>{p.label}</span>
                <span style={{ fontSize: 8, fontWeight: 400, color: "var(--color-text-tertiary)" }}>{p.subtitle}</span>
              </div>
            </div>
          ))}

          {/* Edges */}
          <svg style={{ position: "absolute", top: 0, left: 0, width: TW, height: TH, pointerEvents: "none", zIndex: 1 }}>
            <defs>
              <marker id="a" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="var(--color-border-secondary)" strokeWidth="1" />
              </marker>
              <marker id="ah" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
              </marker>
            </defs>
            {edges.map((e, i) => {
              const fp = pos[e.f], tp = pos[e.t];
              const fc = PCOL[cMap[e.f].phase], tc = PCOL[cMap[e.t].phase];
              const ek = `${e.f}->${e.t}`;
              const hl = sel && chainEdges.has(ek);
              const dimChain = sel && !hl;
              const dimTrack = !relevantSet.has(e.f) || !relevantSet.has(e.t);
              const finalDim = dimChain || dimTrack;

              let x1, y1, x2, y2;
              if (fc === tc) {
                x1 = fp.x + W / 2; y1 = fp.y + H; x2 = tp.x + W / 2; y2 = tp.y;
              } else {
                x1 = fp.x + W; y1 = fp.y + H / 2; x2 = tp.x; y2 = tp.y + H / 2;
              }
              const mx = (x1 + x2) / 2;
              const d = fc === tc
                ? `M${x1},${y1} L${x2},${y2}`
                : `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;

              return <path key={i} d={d} fill="none"
                stroke={hl ? "#3b82f6" : "var(--color-border-secondary)"}
                strokeWidth={hl ? 1.5 : 0.75}
                strokeDasharray={hl ? "none" : "3,2"}
                markerEnd={hl ? "url(#ah)" : "url(#a)"}
                opacity={finalDim ? 0.08 : hl ? 1 : 0.4}
                style={{ transition: "opacity 0.2s" }} />;
            })}
          </svg>

          {/* Course nodes */}
          {COURSES.map(c => {
            const inChain = sel ? chain.has(c.id) : true;
            const inTrack = relevantSet.has(c.id);
            const isDim = (sel && !inChain) || !inTrack;
            return (
              <CourseNode key={c.id}
                course={c}
                pos={pos[c.id]}
                isSel={sel === c.id}
                isDim={isDim}
                isDone={done.has(c.id)}
                onSelect={() => setSel(sel === c.id ? null : c.id)}
                onToggleDone={(e) => toggleDone(c.id, e)} />
            );
          })}
        </div>
      </div>

      {sc ? (
        <DetailPanel course={sc} onClose={() => setSel(null)} onSelect={setSel} />
      ) : (
        <div style={{
          fontSize: 10, color: "var(--color-text-tertiary)",
          marginTop: "0.6rem", textAlign: "center",
        }}>
          Toggle a specialization above to filter the graph. Click a course to see prerequisites,
          unlocked courses, and resources. Check boxes to track progress.
        </div>
      )}
    </div>
  );
}
