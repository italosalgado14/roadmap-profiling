import { useState, useCallback, useMemo } from "react";

const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Prerequisites", color: "#94a3b8" },
  { id: "P1", label: "Phase 1", subtitle: "Months 1–5", color: "#22d3ee" },
  { id: "P2", label: "Phase 2", subtitle: "Months 6–10", color: "#06b6d4" },
  { id: "P3", label: "Phase 3", subtitle: "Months 11–15", color: "#8b5cf6" },
  { id: "P4", label: "Phase 4", subtitle: "Months 16–20", color: "#a78bfa" },
  { id: "P5", label: "Phase 5", subtitle: "Months 21–25", color: "#34d399" },
  { id: "P6", label: "Phase 6", subtitle: "Months 26–30", color: "#10b981" },
  { id: "P7", label: "Phase 7", subtitle: "Months 31–40", color: "#f59e0b" },
  { id: "P8", label: "Phase 8", subtitle: "Years 4–10", color: "#fb923c" },
];

const PRI = {
  critical: { bg: "#fef2f2", border: "#ef4444", text: "#991b1b", label: "Critical" },
  desirable: { bg: "#fefce8", border: "#eab308", text: "#854d0e", label: "Desirable" },
  frontier: { bg: "#f0fdf4", border: "#22c55e", text: "#166534", label: "Frontier" },
};

const C = [
  // ═══ P0: FOUNDATIONS — No prereqs ═══
  { id: "LINUX", phase: "P0", row: 0, label: "Linux & CLI", priority: "critical", prereqs: [],
    desc: "Terminal, bash, file systems, permissions, SSH. Foundation for all deployment.",
    res: "Linux Journey (free) | MIT Missing Semester (free) | Coursera: Unix Workbench — JHU" },
  { id: "PY", phase: "P0", row: 1, label: "Python", priority: "critical", prereqs: [],
    desc: "Core language for ML. Variables, functions, OOP, NumPy, pandas, matplotlib.",
    res: "Coursera: Python for Everybody — UMich | Book: Automate the Boring Stuff (free) | python.org tutorial" },
  { id: "CPP", phase: "P0", row: 2, label: "C++", priority: "critical", prereqs: [],
    desc: "Pointers, memory management, OOP, STL. Essential for TensorRT, ROS2, CUDA.",
    res: "Coursera: C++ for C Programmers — UCSC | learncpp.com (free) | Book: A Tour of C++ — Stroustrup" },
  { id: "LA", phase: "P0", row: 3, label: "Linear algebra", priority: "critical", prereqs: [],
    desc: "Vectors, matrices, eigenvalues, SVD. The math behind every neural network.",
    res: "3Blue1Brown: Essence of Linear Algebra (free YT) | Khan Academy (free) | MIT 18.06 Strang (free YT)" },
  { id: "CALC", phase: "P0", row: 4, label: "Calculus", priority: "critical", prereqs: [],
    desc: "Derivatives, chain rule, partial derivatives, gradients. Required for backpropagation.",
    res: "3Blue1Brown: Essence of Calculus (free YT) | Khan Academy (free) | Coursera: Math for ML — Imperial" },
  { id: "PROB", phase: "P0", row: 5, label: "Probability & stats", priority: "critical", prereqs: [],
    desc: "Bayes theorem, distributions, hypothesis testing, MLE.",
    res: "Coursera: Statistics with Python — UMich | Book: Think Stats (free) | Khan Academy (free)" },
  { id: "GIT", phase: "P0", row: 6, label: "Git & version control", priority: "critical", prereqs: [],
    desc: "Repos, branches, merging, PRs, GitHub workflows.",
    res: "git-scm.com tutorial (free) | GitHub Skills (free) | Coursera: Version Control — Meta" },

  // ═══ P1: CORE ML & TOOLS — needs P0 ═══
  { id: "ML", phase: "P1", row: 0, label: "Machine learning", priority: "critical", prereqs: ["PY","LA","CALC","PROB"],
    desc: "Supervised/unsupervised, regression, classification, clustering, evaluation, scikit-learn.",
    res: "Coursera: ML Specialization — Andrew Ng | Book: Hands-On ML — Géron | fast.ai Practical ML (free)" },
  { id: "DOC", phase: "P1", row: 1, label: "Docker & CI/CD", priority: "critical", prereqs: ["LINUX","GIT"],
    desc: "Containers, Dockerfiles, Compose, GitHub Actions, basic CI/CD pipelines.",
    res: "Docker getting started (free) | Coursera: IBM DevOps & SWE | GitHub Actions docs (free)" },

  // ═══ P2: DEEP LEARNING & OPS — needs P1 ═══
  { id: "DL", phase: "P2", row: 0, label: "Deep learning & PyTorch", priority: "critical", prereqs: ["ML"],
    desc: "Neural networks, CNNs, RNNs, backprop, regularization, transfer learning. PyTorch framework.",
    res: "Coursera: DL Specialization — Andrew Ng | fast.ai (free) | PyTorch tutorials (free)" },
  { id: "MLOPS", phase: "P2", row: 1, label: "MLOps fundamentals", priority: "critical", prereqs: ["ML","DOC"],
    desc: "MLflow, experiment tracking, model serving (FastAPI), monitoring, data drift, CI/CD for ML.",
    res: "Coursera: MLOps Spec — Andrew Ng | MLOps Zoomcamp (free) | Book: Designing ML Systems — Chip Huyen" },
  { id: "CUDA", phase: "P2", row: 2, label: "CUDA & GPU computing", priority: "desirable", prereqs: ["CPP","LA"],
    desc: "GPU programming, kernels, memory hierarchy, parallelism. Foundation for TensorRT and training.",
    res: "NVIDIA DLI: Fundamentals of Accelerated Computing with CUDA C/C++ | Coursera: GPU Programming Spec" },

  // ═══ P3: VISION, MODELS & EXPORT — needs P2 ═══
  { id: "CV", phase: "P3", row: 0, label: "Computer vision", priority: "critical", prereqs: ["DL"],
    desc: "Image processing (OpenCV), detection (YOLO), segmentation, tracking. Classical + DL approaches.",
    res: "Hugging Face CV Course (free) | Stanford CS231n (free YT) | Book: DL for Vision Systems — Elgendy" },
  { id: "ONNX", phase: "P3", row: 1, label: "ONNX & model export", priority: "critical", prereqs: ["DL"],
    desc: "Export PyTorch/TF models to ONNX. Graph optimization, operator support, runtime inference.",
    res: "ONNX Runtime docs (free) | ONNX GitHub tutorials (free)" },
  { id: "LLM", phase: "P3", row: 2, label: "LLM fundamentals", priority: "desirable", prereqs: ["DL"],
    desc: "Transformer architecture, attention mechanism, tokenization, prompting, context windows.",
    res: "Coursera: GenAI with LLMs — DeepLearning.AI + AWS | Karpathy: Let's build GPT (free YT)" },

  // ═══ P4: OPTIMIZATION & SPECIALIZATION — needs P3 ═══
  { id: "TRT", phase: "P4", row: 0, label: "TensorRT", priority: "critical", prereqs: ["ONNX","CPP","CUDA"],
    desc: "NVIDIA inference optimizer. FP16/INT8 quantization, calibration, profiling, C++ and Python APIs.",
    res: "NVIDIA DLI: Optimizing with TensorRT (free) | Udemy: TensorRT/ONNX Course (~$15) | TensorRT docs" },
  { id: "VIT", phase: "P4", row: 1, label: "Vision Transformers", priority: "critical", prereqs: ["CV"],
    desc: "ViT architecture, CLIP (zero-shot), SAM (segmentation), DINOv2 (self-supervised features).",
    res: "Hugging Face CV Course (free) | Papers: ViT, CLIP, SAM on arxiv (free)" },
  { id: "RAG", phase: "P4", row: 2, label: "RAG & vector DBs", priority: "desirable", prereqs: ["LLM"],
    desc: "Retrieval-augmented generation, embeddings, vector databases (Chroma, Pinecone), chunking.",
    res: "DeepLearning.AI: LangChain for LLM Apps (free) | LangChain docs (free)" },
  { id: "FINE", phase: "P4", row: 3, label: "LLM fine-tuning", priority: "desirable", prereqs: ["LLM"],
    desc: "LoRA/QLoRA, RLHF, instruction tuning, evaluation frameworks.",
    res: "DeepLearning.AI: Fine-tuning LLMs (free) | Coursera: GenAI Engineering — IBM | HF PEFT docs" },
  { id: "SF", phase: "P4", row: 4, label: "Sensor fusion", priority: "desirable", prereqs: ["CV","PROB"],
    desc: "Camera + LiDAR + IMU. Kalman filters, particle filters, point clouds, SLAM basics.",
    res: "Coursera: Self-Driving Cars — U Toronto | Cyrill Stachniss (free YT) | Book: Probabilistic Robotics" },
  { id: "TFLITE", phase: "P4", row: 5, label: "TFLite & OpenVINO", priority: "desirable", prereqs: ["ONNX"],
    desc: "Cross-platform edge: TFLite for MCUs, OpenVINO for Intel. Alternative to NVIDIA stack.",
    res: "Edge Impulse free tier | TFLite docs (free) | OpenVINO docs (free) | Book: TinyML — Warden" },

  // ═══ P5: DEPLOY & BUILD — needs P4 ═══
  { id: "JET", phase: "P5", row: 0, label: "Jetson & edge deploy", priority: "critical", prereqs: ["TRT","DOC"],
    desc: "NVIDIA Jetson platform. JetPack SDK, DeepStream, video analytics. Production edge deployment.",
    res: "NVIDIA Jetson tutorials (free blog) | NVIDIA DLI (~$30) | Book: AI at the Edge — Situnayake | HW: Orin Nano ~$249" },
  { id: "AGENT", phase: "P5", row: 1, label: "Multi-agent systems", priority: "critical", prereqs: ["RAG","MLOPS"],
    desc: "LangGraph, CrewAI, MCP protocol. State management, guardrails, observability for agents.",
    res: "Coursera: IBM Agentic AI (incl) | DeepLearning.AI: CrewAI (free) | LangGraph docs | MCP docs" },
  { id: "ROS2", phase: "P5", row: 2, label: "ROS2", priority: "critical", prereqs: ["CPP","PY","LINUX"],
    desc: "Robot Operating System 2. Nodes, topics, services, Nav2, Gazebo simulation. C++ and Python.",
    res: "Udemy: ROS2 for Beginners (~$15) | The Construct (free tier) | docs.ros.org | Book: Intro to ROS2 — Martín Rico" },
  { id: "DOMAIN", phase: "P5", row: 3, label: "Domain vertical", priority: "critical", prereqs: ["CV","ML"],
    desc: "Pick ONE: Industrial/Mining, Automotive, Medical, or Energy. Domain = salary moat.",
    res: "Coursera: domain specializations (incl) | Industry conferences | Professional communities" },

  // ═══ P6: INTEGRATION — needs P5 ═══
  { id: "VLM", phase: "P6", row: 0, label: "Vision-language models", priority: "desirable", prereqs: ["VIT","JET"],
    desc: "Multimodal AI on edge. Deploy VLMs on Jetson using TensorRT Edge-LLM SDK (C++ runtime).",
    res: "NVIDIA blog: Edge AI on Jetson — VLMs (free) | TensorRT Edge-LLM SDK docs (free)" },
  { id: "ISAAC", phase: "P6", row: 1, label: "NVIDIA Isaac Sim", priority: "desirable", prereqs: ["ROS2","JET"],
    desc: "Sim-to-real transfer. Train robot policies in simulation, deploy on Jetson with TensorRT.",
    res: "NVIDIA DLI: Isaac Sim (~$30) | Isaac Lab on GitHub (free) | GR00T deployment guide (free)" },
  { id: "DSLM", phase: "P6", row: 2, label: "Domain-specific models", priority: "desirable", prereqs: ["FINE","DOMAIN"],
    desc: "Fine-tune foundation models for your vertical. Build moats with proprietary data.",
    res: "Hugging Face fine-tuning guides (free) | Domain-specific datasets and benchmarks" },
  { id: "SAFE", phase: "P6", row: 3, label: "AI safety & governance", priority: "desirable", prereqs: ["AGENT"],
    desc: "EU AI Act, adversarial ML, red-teaming, model auditing. Becoming mandatory by 2028.",
    res: "Trustworthy AI — U Helsinki (free) | ISO 42001 awareness | Coursera: AI Ethics (incl)" },
  { id: "SYSDES", phase: "P6", row: 4, label: "Distributed systems", priority: "critical", prereqs: ["MLOPS","DOC"],
    desc: "Replication, partitioning, consistency, streaming, batch. Foundation of scalable AI systems.",
    res: "Book: Designing Data-Intensive Applications — Kleppmann (MUST READ)" },

  // ═══ P7: ARCHITECTURE — needs P6 ═══
  { id: "AIARCH", phase: "P7", row: 0, label: "AI systems architecture", priority: "critical", prereqs: ["SYSDES","AGENT","JET"],
    desc: "Edge-cloud design, fleet management, federated learning, multi-model serving, system design.",
    res: "Book: System Design Interview — Alex Xu (Vol 1&2) | Coursera: Software Architecture — U Alberta" },
  { id: "K8S", phase: "P7", row: 1, label: "Kubernetes for ML", priority: "desirable", prereqs: ["DOC","MLOPS"],
    desc: "Container orchestration, Helm, KubeFlow, model serving at scale, autoscaling inference.",
    res: "Coursera: Google Cloud K8s | KubeFlow docs (free) | Book: Kubernetes in Action" },
  { id: "CLOUD", phase: "P7", row: 2, label: "Cloud ML platforms", priority: "desirable", prereqs: ["MLOPS","DL"],
    desc: "AWS SageMaker, GCP Vertex AI, Azure ML. Training, serving, and monitoring in the cloud.",
    res: "Coursera: Google Cloud ML Engineer (incl) | AWS ML Specialty prep | Azure ML docs (free)" },

  // ═══ P8: FRONTIER & LEADERSHIP — needs P7 ═══
  { id: "LEAD", phase: "P8", row: 0, label: "Technical leadership", priority: "desirable", prereqs: ["AIARCH"],
    desc: "Architecture decisions, mentoring, writing, conference talks, open source contributions.",
    res: "Book: Staff Engineer — Larson | Book: The Manager's Path — Fournier" },
  { id: "NEURO", phase: "P8", row: 1, label: "Neuromorphic computing", priority: "frontier", prereqs: ["CPP","JET"],
    desc: "Spiking neural networks, Intel Loihi 2, ultra-low-power edge AI. Market CAGR 104%.",
    res: "Intel INRC (free apply) | Lava framework GitHub (free) | Book: Neuromorphic Engineering — Springer" },
  { id: "QUANT", phase: "P8", row: 2, label: "Quantum-AI hybrids", priority: "frontier", prereqs: ["LA","ML"],
    desc: "Quantum-classical algorithms, optimization, Qiskit, Cirq. Market projected $292B by 2035.",
    res: "IBM Quantum Learning (free) | Qiskit Textbook (free) | Book: Nielsen & Chuang" },
  { id: "BIOAI", phase: "P8", row: 3, label: "Bio-digital / medical AI", priority: "frontier", prereqs: ["CV","FINE"],
    desc: "Medical imaging, computational biology, BCIs. Healthcare informatics >$127B by 2034.",
    res: "Coursera: AI for Medicine — DeepLearning.AI (incl) | MIT OCW: Comp Biology (free)" },
  { id: "FLEET", phase: "P8", row: 4, label: "AI fleet architect", priority: "frontier", prereqs: ["AIARCH","ROS2","AGENT"],
    desc: "Managing autonomous robot/agent fleets. Gartner: 500M net new AI jobs by 2036.",
    res: "No formal courses — build through projects, open source, and industry experience" },
];

const PCOL = {};
PHASES.forEach((p, i) => { PCOL[p.id] = i; });
const cMap = {};
C.forEach(c => { cMap[c.id] = c; });

export default function Malla() {
  const [sel, setSel] = useState(null);
  const [done, setDone] = useState(new Set());

  const ancestors = useCallback((id, v = new Set()) => {
    if (v.has(id)) return v;
    v.add(id);
    (cMap[id]?.prereqs || []).forEach(p => ancestors(p, v));
    return v;
  }, []);

  const descendants = useCallback((id, v = new Set()) => {
    if (v.has(id)) return v;
    v.add(id);
    C.forEach(c => { if (c.prereqs.includes(id)) descendants(c.id, v); });
    return v;
  }, []);

  const chain = useMemo(() => {
    if (!sel) return new Set();
    return new Set([...ancestors(sel), ...descendants(sel)]);
  }, [sel, ancestors, descendants]);

  const chainEdges = useMemo(() => {
    if (!sel) return new Set();
    const s = new Set();
    C.forEach(c => {
      if (chain.has(c.id)) c.prereqs.forEach(p => { if (chain.has(p)) s.add(`${p}->${c.id}`); });
    });
    return s;
  }, [sel, chain]);

  const toggle = (id, e) => {
    e.stopPropagation();
    setDone(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const W = 126, H = 48, GX = 28, GY = 8, PT = 40, PB = 12, PX = 8;
  const CW = W + 2 * PX;

  const maxRows = Math.max(...PHASES.map(p => C.filter(c => c.phase === p.id).length));
  const TH = PT + maxRows * H + Math.max(0, maxRows - 1) * GY + PB + 12;
  const TW = PHASES.length * CW + (PHASES.length - 1) * GX;

  const pos = useMemo(() => {
    const p = {};
    C.forEach(c => {
      const col = PCOL[c.phase];
      p[c.id] = { x: col * (CW + GX) + PX, y: PT + c.row * (H + GY) };
    });
    return p;
  }, []);

  const edges = useMemo(() => {
    const a = [];
    C.forEach(c => c.prereqs.forEach(p => { if (pos[p] && pos[c.id]) a.push({ f: p, t: c.id }); }));
    return a;
  }, [pos]);

  const sc = sel ? cMap[sel] : null;
  const pct = Math.round((done.size / C.length) * 100);

  return (
    <div style={{ fontFamily: "var(--font-sans, system-ui)", padding: "0.5rem 0" }}>
      <h2 className="sr-only">Edge AI curriculum grid with 9 phases and prerequisite dependencies</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.6rem", flexWrap: "wrap", fontSize: "11px" }}>
        {Object.entries(PRI).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <div style={{ width: 9, height: 9, borderRadius: 2, background: v.bg, border: `1.5px solid ${v.border}` }} />
            <span style={{ color: "var(--color-text-secondary)" }}>{v.label}</span>
          </div>
        ))}
        <span style={{ color: "var(--color-text-tertiary)", marginLeft: "auto", fontSize: "11px" }}>
          {done.size}/{C.length} ({pct}%)
        </span>
        {done.size > 0 && <button onClick={() => setDone(new Set())} style={{ fontSize: "10px", padding: "1px 6px", cursor: "pointer" }}>Reset</button>}
      </div>

      <div style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "6px" }}>
        <div style={{ position: "relative", width: TW, height: TH }}>

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
              const dm = sel && !hl;

              let x1, y1, x2, y2;
              if (fc === tc) {
                x1 = fp.x + W / 2; y1 = fp.y + H; x2 = tp.x + W / 2; y2 = tp.y;
              } else {
                x1 = fp.x + W; y1 = fp.y + H / 2; x2 = tp.x; y2 = tp.y + H / 2;
              }
              const mx = (x1 + x2) / 2;
              const d = fc === tc ? `M${x1},${y1} L${x2},${y2}` : `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;

              return <path key={i} d={d} fill="none"
                stroke={hl ? "#3b82f6" : "var(--color-border-secondary)"}
                strokeWidth={hl ? 1.5 : 0.75}
                strokeDasharray={hl ? "none" : "3,2"}
                markerEnd={hl ? "url(#ah)" : "url(#a)"}
                opacity={dm ? 0.08 : hl ? 1 : 0.4}
                style={{ transition: "opacity 0.2s" }} />;
            })}
          </svg>

          {PHASES.map((p, col) => (
            <div key={p.id} style={{
              position: "absolute", left: col * (CW + GX), top: 0, width: CW, height: TH - 12,
              background: "var(--color-background-secondary)",
              borderRadius: "var(--border-radius-lg, 12px)",
              border: "0.5px solid var(--color-border-tertiary)", zIndex: 0
            }}>
              <div style={{
                padding: "6px 8px", fontSize: "11px", fontWeight: 500, color: p.color,
                borderBottom: `1.5px solid ${p.color}22`,
                display: "flex", justifyContent: "space-between", alignItems: "baseline"
              }}>
                <span>{p.label}</span>
                <span style={{ fontSize: "8px", fontWeight: 400, color: "var(--color-text-tertiary)" }}>{p.subtitle}</span>
              </div>
            </div>
          ))}

          {C.map(c => {
            const p = pos[c.id], pr = PRI[c.priority];
            const isSel = sel === c.id, inCh = sel && chain.has(c.id), dim = sel && !inCh, dn = done.has(c.id);
            return (
              <div key={c.id} onClick={() => setSel(sel === c.id ? null : c.id)}
                style={{
                  position: "absolute", left: p.x, top: p.y, width: W, height: H, zIndex: isSel ? 10 : 2,
                  background: dn ? "var(--color-background-success, #f0fdf4)" : pr.bg,
                  border: isSel ? "2px solid #3b82f6" : `1px solid ${dn ? "var(--color-border-success, #22c55e)" : pr.border}`,
                  borderRadius: "var(--border-radius-md, 8px)", cursor: "pointer",
                  opacity: dim ? 0.15 : 1, transition: "opacity 0.2s, transform 0.15s",
                  transform: isSel ? "scale(1.05)" : "scale(1)",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  padding: "2px 6px", overflow: "hidden"
                }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "3px" }}>
                  <div onClick={e => toggle(c.id, e)} style={{
                    width: 12, height: 12, borderRadius: 2, flexShrink: 0, marginTop: 1,
                    border: dn ? "none" : `1.5px solid ${pr.border}`,
                    background: dn ? "var(--color-text-success, #16a34a)" : "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "8px", color: "white", cursor: "pointer"
                  }}>{dn ? "✓" : ""}</div>
                  <span style={{
                    fontSize: "10px", fontWeight: 500, lineHeight: 1.2,
                    color: dn ? "var(--color-text-success, #166534)" : pr.text,
                    textDecoration: dn ? "line-through" : "none",
                    overflow: "hidden", display: "-webkit-box",
                    WebkitLineClamp: 2, WebkitBoxOrient: "vertical"
                  }}>{c.label}</span>
                </div>
                <div style={{ fontSize: "7px", color: "var(--color-text-tertiary)", marginTop: "1px", marginLeft: "15px" }}>{c.id}</div>
              </div>
            );
          })}
        </div>
      </div>

      {sc ? (
        <div style={{
          marginTop: "0.6rem", padding: "0.6rem 0.8rem",
          background: "var(--color-background-primary)",
          border: "0.5px solid var(--color-border-tertiary)",
          borderRadius: "var(--border-radius-lg, 12px)", fontSize: "12px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px" }}>
            <div>
              <span style={{
                fontSize: "9px", padding: "1px 5px", borderRadius: 3,
                background: PRI[sc.priority].bg, color: PRI[sc.priority].text,
                border: `1px solid ${PRI[sc.priority].border}`,
                fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em"
              }}>{PRI[sc.priority].label}</span>
              <span style={{ fontSize: "9px", color: "var(--color-text-tertiary)", marginLeft: "5px" }}>
                {PHASES.find(p => p.id === sc.phase)?.label} — {PHASES.find(p => p.id === sc.phase)?.subtitle}
              </span>
              <h3 style={{ fontSize: "14px", fontWeight: 500, margin: "3px 0 0" }}>{sc.label}</h3>
            </div>
            <button onClick={() => setSel(null)} style={{ fontSize: "10px", padding: "1px 6px", cursor: "pointer", flexShrink: 0 }}>Close</button>
          </div>
          <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", margin: "4px 0 6px", lineHeight: 1.5 }}>{sc.desc}</p>
          {sc.prereqs.length > 0 && (
            <div style={{ marginBottom: "4px" }}>
              <span style={{ color: "var(--color-text-tertiary)", fontSize: "11px" }}>Requires: </span>
              {sc.prereqs.map((pid, i) => (
                <span key={pid}>
                  <span onClick={() => setSel(pid)} style={{ color: "var(--color-text-info, #2563eb)", cursor: "pointer", textDecoration: "underline", fontSize: "11px" }}>
                    {cMap[pid]?.label}
                  </span>{i < sc.prereqs.length - 1 ? " → " : ""}
                </span>
              ))}
            </div>
          )}
          {(() => {
            const u = C.filter(x => x.prereqs.includes(sc.id));
            if (!u.length) return null;
            return (
              <div style={{ marginBottom: "4px" }}>
                <span style={{ color: "var(--color-text-tertiary)", fontSize: "11px" }}>Unlocks: </span>
                {u.map((x, i) => (
                  <span key={x.id}>
                    <span onClick={() => setSel(x.id)} style={{ color: "var(--color-text-info, #2563eb)", cursor: "pointer", textDecoration: "underline", fontSize: "11px" }}>
                      {x.label}
                    </span>{i < u.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            );
          })()}
          <div style={{
            fontSize: "11px", padding: "6px 8px", marginTop: "4px",
            background: "var(--color-background-secondary)",
            borderRadius: "var(--border-radius-md, 8px)", lineHeight: 1.5
          }}>
            <span style={{ fontWeight: 500 }}>Resources: </span>
            <span style={{ color: "var(--color-text-secondary)" }}>{sc.res}</span>
          </div>
        </div>
      ) : (
        <div style={{ fontSize: "10px", color: "var(--color-text-tertiary)", marginTop: "0.6rem", textAlign: "center" }}>
          Click any course to see prerequisites, unlocked courses, and resources. Check boxes to track progress.
        </div>
      )}
    </div>
  );
}
