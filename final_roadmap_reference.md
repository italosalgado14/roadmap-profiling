# Final Learning Roadmap Reference
## Edge AI / Physical AI Specialist Path

---

## Executive Summary

This is a consolidated reference combining major industry analyses (Gartner, WEF, McKinsey) with a CV-style review of the Edge / Physical AI skill stack. The path is structured as a 9-phase curriculum where each phase represents a logical tier of capability — not a calendar bucket. Move through phases at your own pace; each phase ends when its keystone project is shipped, not after a fixed number of months.

**Strategic positioning:** Lead-market identity as "AI/ML Engineer with Edge deployment expertise" — accesses the large AI/ML hiring pool while differentiating with hardware skills that cannot be commoditized by AI code assistants. Long-term trajectory toward Physical AI Architect as the robotics/autonomous systems market matures.

**Three priority levels throughout:**
- 🔴 **Critical** — Required for the career path. Non-negotiable.
- 🟡 **Desirable** — Competitive edge. Significant ROI but not blocking.
- 🟢 **Frontier** — Future bets. Long-term positioning.

**Resource tagging:**
- ✅ Included in Coursera Premium subscription
- 🆓 Free
- 💰 Paid (cost noted)
- ❌ Skip if already mastered

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Resources`, a `Study approach` (how to learn it efficiently), and a `Project` (a concrete shippable deliverable). The project is the proof of competence — without it, a node is unfinished.

---

## PHASE 0: Foundations (Prerequisites)

*These have no prerequisites. Verify mastery and skip what you already know.*

### 🔴 Linux & CLI
**Unlocks:** Docker, ROS2
**Resources:**
- Linux Journey — linuxjourney.com (🆓)
- MIT: The Missing Semester — missing.csail.mit.edu (🆓)
**Study approach:** Skim Missing Semester end-to-end in one day. Drill only sections that feel rusty (shell scripting, ssh + tmux, find/xargs, regex).
**Project:** Personal dotfiles repo on GitHub with a bootstrap script. Use it to set up a fresh VM in under 10 minutes.

### 🔴 Python
**Unlocks:** ML, ROS2
**Resources:**
- Book: *Automate the Boring Stuff* — automatetheboringstuff.com (🆓)
- Modern Python: realpython.com tutorials on type hints, dataclasses, async, pathlib (🆓)
**Study approach:** If new, work through *Automate the Boring Stuff*. If experienced, focus on idiomatic modern Python (type hints, dataclasses, context managers, async/await).
**Project:** A small CLI tool with `argparse`, type hints, `pytest` tests, and a `pyproject.toml`. Publish to PyPI as a learning exercise.

### 🔴 C++
**Unlocks:** TensorRT, CUDA, ROS2, Neuromorphic, GPU kernels
**Resources:**
- Book: *A Tour of C++* — Bjarne Stroustrup (💰 ~$40). Modern C++17/20 focus.
- learncpp.com (🆓) — most comprehensive free resource. Skim advanced chapters.
**Study approach:** Read *A Tour of C++* cover to cover. Treat modern C++ (smart pointers, lambdas, move semantics, ranges) as the default — don't dwell on legacy idioms.
**Project:** Implement a thread-safe queue with a producer/consumer benchmark in C++17. CMake build, GitHub Actions CI, valgrind/sanitizer-clean. *Why:* TensorRT's native C++ API is the differentiator over Python-only ML engineers.

### 🔴 Linear algebra
**Unlocks:** ML, CUDA, Quantum
**Resources:**
- 3Blue1Brown: *Essence of Linear Algebra* — YouTube (🆓)
- MIT 18.06 — Strang lectures (🆓)
**Study approach:** 3Blue1Brown for intuition (3-4 hours). Khan Academy or Strang for problem-solving practice if rusty. Focus on geometric intuition, not proofs.
**Project:** Implement linear regression and PCA from scratch in NumPy. Verify results match scikit-learn within numerical tolerance.

### 🔴 Calculus
**Unlocks:** ML
**Resource:** 3Blue1Brown: *Essence of Calculus* (🆓)
**Study approach:** 3Blue1Brown Essence of Calculus (~3 hours). Refresh chain rule and partial derivatives — both are essential for backprop intuition.
**Project:** Implement backpropagation by hand for a 2-layer MLP without using autograd. Train it on XOR. Confirm learned weights match expected geometry.

### 🔴 Probability & statistics
**Unlocks:** ML, Sensor Fusion
**Resource:** Book: *Think Stats* — Allen Downey (🆓, thinkstats2.com)
**Study approach:** *Think Stats* in 5-7 hours. Focus on Bayesian thinking, common distributions, MLE, hypothesis testing. Avoid frequentist-only material — Bayesian framing maps better to ML.
**Project:** Build a Bayesian A/B test calculator (CLI is fine). Validate against a known closed-form result.

### 🔴 Git & version control
**Unlocks:** Docker & CI/CD
**Resources:**
- git-scm.com tutorial (🆓)
- GitHub Skills (🆓)
**Study approach:** GitHub Skills modules in a day. Learn `rebase`, `cherry-pick`, `bisect` explicitly — they save real time later.
**Project:** A "showcase" repo with proper branching strategy, signed commits, PR templates, CI badges. Use it as the template for everything you build going forward.

---

## PHASE 1: Core ML & Tools

### 🔴 Machine learning
**Prerequisites:** Python, Linear Algebra, Calculus, Probability
**Resources:**
- Coursera: **Machine Learning Specialization** — Andrew Ng, Stanford (✅ included)
- Book: *Hands-On Machine Learning* — Aurélien Géron (💰 ~$50). Best practical reference.
- fast.ai Practical ML (🆓)
**Study approach:** Andrew Ng's spec for theory baseline (top-down concepts). Then *Hands-On ML* chapters 1-9 for practical implementation. Skip the theory courses if already comfortable with the math.
**Project:** End-to-end ML pipeline on a custom dataset: collect/scrape → clean → train → evaluate → ship as a FastAPI endpoint. Public on GitHub with a README that explains every choice. Aim for top-30% on a relevant Kaggle leaderboard with the same model.

### 🔴 Docker & CI/CD
**Prerequisites:** Linux, Git
**Unlocks:** MLOps, Jetson deployment
**Resources:**
- Docker official getting-started (🆓)
- GitHub Actions docs (🆓)
- Coursera: **IBM DevOps & SWE** (✅ included)
**Study approach:** Docker getting-started in one day. Then containerize a real Python service to internalize Dockerfile patterns (multi-stage builds, layer caching, slim base images).
**Project:** Containerize the ML pipeline above. Add GitHub Actions for build/test/push to GHCR. Multi-stage Dockerfile with image under 200 MB. Document the CI workflow in the README.

---

## PHASE 2: Deep Learning & Operations

### 🔴 Deep learning & PyTorch
**Prerequisites:** Machine Learning
**Unlocks:** Computer Vision, ONNX, LLM fundamentals
**Resources:**
- Coursera: **Deep Learning Specialization** — Andrew Ng (✅ included). 5 courses.
- fast.ai Practical Deep Learning (🆓, course.fast.ai). More code-first.
- PyTorch tutorials (🆓)
**Study approach:** Pick one of {Andrew Ng spec, fast.ai} based on style — Ng is bottom-up math, fast.ai is top-down code. Read selected chapters of Goodfellow's *Deep Learning* (6-9) for backprop and regularization theory.
**Project:** Train a non-trivial CV model on a custom dataset (50+ classes or unusual domain). Document architecture choices, ablations, and failure modes. Public repo with reproducible training scripts and benchmarks.

### 🔴 MLOps fundamentals
**Prerequisites:** Machine Learning, Docker & CI/CD
**Unlocks:** Multi-agent systems, Distributed systems, Kubernetes for ML
**Resources:**
- Coursera: **MLOps Specialization — Duke University** (✅ included)
- Book: **Designing Machine Learning Systems** — Chip Huyen (💰 ~$50). 🔴 **Must-read.**
- MLOps Zoomcamp — DataTalks.Club (🆓). Project-based alternative.
**Study approach:** Duke MLOps Spec for structure, *Designing ML Systems* in parallel for production thinking. Read the book first if buying time matters — the courses follow it.
**Project:** Take the Phase 1 ML project and add: experiment tracking (MLflow), data versioning (DVC), model registry, drift monitoring, CI/CD for retraining. Architecture diagram in README.

### 🔴 CUDA & GPU computing
**Prerequisites:** C++, Linear Algebra
**Unlocks:** TensorRT, GPU kernels
**Resources:**
- NVIDIA DLI: **Fundamentals of Accelerated Computing with CUDA C/C++** (💰 ~$90). High signal.
- Coursera: **GPU Programming Specialization** — Johns Hopkins (✅ included)
- Book: *Programming Massively Parallel Processors* (PMPP) — Hwu & Kirk (💰 ~$70). The reference text.
**Study approach:** NVIDIA DLI Fundamentals course (intensive, paid, worth it). Pair with PMPP textbook for memory-hierarchy depth. Always pair theory with profiling — never write a kernel without measuring it.
**Project:** Implement a matrix-multiplication kernel in CUDA C++. Benchmark against `cuBLAS`. Profile with Nsight Compute. Reach >50% of `cuBLAS` performance for at least one tile size. Public on GitHub with profile traces.

---

## PHASE 3: Vision, Models & Export

### 🔴 Computer vision (transformer-aware)
**Prerequisites:** Deep Learning
**Unlocks:** Vision Transformers, Sensor Fusion, Domain vertical
**Resources:**
- **Hugging Face Computer Vision Course** — huggingface.co/learn/computer-vision-course (🆓). Covers modern transformer-era CV.
- Stanford CS231n 2024 lectures — YouTube (🆓). Theory depth.
- Book: *Deep Learning for Vision Systems* — Mohamed Elgendy (💰 ~$50). Chapters 8-12 only.
**Study approach:** HuggingFace CV Course end-to-end (it's already transformer-aware). CS231n for theory depth on convolutions and detection — skip the older chapters that pre-date ViT.
**Project:** Train YOLOv11 (or current SOTA) on a custom dataset with no public benchmarks. Deploy as a real-time webcam demo. Compare against a classical baseline (Haar/HOG). Report mAP, FPS, and a public confusion-matrix breakdown.

### 🔴 ONNX & model export
**Prerequisites:** Deep Learning
**Unlocks:** TensorRT, TFLite & OpenVINO
**Resources:**
- ONNX Runtime docs — onnxruntime.ai (🆓)
- ONNX GitHub tutorials (🆓)
- onnx-simplifier on GitHub (🆓) — essential for production export
**Study approach:** ONNX Runtime tutorials in one day. Practice export from PyTorch and TF, then debug operator-coverage gaps with `onnx-simplifier`. Get comfortable reading the ONNX graph in Netron.
**Project:** Export the CV model from above to ONNX. Benchmark ONNX Runtime on CPU and GPU vs native PyTorch. Document the conversion workflow including any operator workarounds. Publish as a how-to blog post.

### 🟡 LLM fundamentals
**Prerequisites:** Deep Learning
**Unlocks:** RAG, Fine-tuning, GPU kernels (LLM-shaped)
**Resources:**
- Coursera: **Generative AI with Large Language Models** — DeepLearning.AI + AWS (✅ included)
- Andrej Karpathy: *Let's build GPT from scratch* — YouTube (🆓). Must-watch.
- *Attention is All You Need* — original transformer paper (🆓 arxiv)
**Study approach:** Karpathy's video first (intuition). Then DeepLearning.AI LLM course for application-level fluency. Read the transformer paper alongside Karpathy — match the math to the code.
**Project:** Implement a small GPT (10-50M params) from scratch in PyTorch (no `transformers` library). Train on TinyShakespeare. Document the math line-by-line in a notebook. Compare your loss curve to nanoGPT.

---

## PHASE 4: Optimization & Specialization

### 🔴 TensorRT (Edge / Compiler)
**Prerequisites:** ONNX, C++, CUDA
**Unlocks:** Jetson deployment
**Resources:**
- NVIDIA DLI: **Optimizing TensorFlow Models with TensorRT** — courses.nvidia.com (🆓)
- Udemy: **Full Course on TensorRT, ONNX for Development and Production** — Fikrat Gasimov (💰 ~$15 on sale). Covers C++ API, Docker integration, Jetson deployment.
- TensorRT official docs — docs.nvidia.com/deeplearning/tensorrt (🆓). Primary reference.
**Certification:** NVIDIA Physical AI Certification (new 2026) — nvidia.com/training (💰 ~$50-100 with webinar discount)
**Study approach:** NVIDIA's free DLI course first. Then Udemy deep dive on sale for the C++ API and Docker integration. Skip Python-only TRT tutorials — the moat is the C++ side.
**Project (KEYSTONE):** Quantize a YOLO model FP32 → FP16 → INT8 with calibration. Deploy on Jetson Orin Nano. Publish a blog post with the full benchmark table (latency, accuracy, model size, power draw). This is the single most career-defining portfolio project for the Edge / Compiler tracks.

### 🔴 Vision Transformers (ViT, CLIP, SAM)
**Prerequisites:** Computer Vision
**Unlocks:** Vision-language models, Bio-digital AI
**Resources:**
- Hugging Face CV Course (🆓) — continues from Phase 3
- Original papers (🆓 on arxiv):
  - ViT: *An Image is Worth 16x16 Words* (Dosovitskiy et al., 2020)
  - CLIP: *Learning Transferable Visual Models from Natural Language Supervision* (Radford et al., 2021)
  - SAM: *Segment Anything* (Kirillov et al., 2023)
**Study approach:** Read the three papers in publication order — it's a natural progression. Pair each paper with the corresponding HuggingFace tutorial to bridge theory → code.
**Project:** Build a CLIP-powered semantic image search over a 10k+ image dataset. Deploy with a vector DB (Chroma or pgvector). Public demo + writeup of the embedding-space exploration (t-SNE visualization, retrieval failure cases).

### 🟡 RAG & vector databases
**Prerequisites:** LLM fundamentals
**Unlocks:** Multi-agent systems
**Resources:**
- DeepLearning.AI: **LangChain for LLM Application Development** (🆓, short course)
- LangChain docs — python.langchain.com (🆓). Production patterns section.
**Study approach:** DeepLearning.AI free short course as the warm-up. Then LangChain production-patterns documentation — skip blog tutorials, they're often outdated within months.
**Project:** Build a RAG system over a domain-specific corpus (e.g., a 5k-paper subset of arxiv). Implement multiple chunking strategies (fixed, semantic, hierarchical). Compare retrieval quality with a precision@k eval harness. Public repo with the eval suite.

### 🟡 LLM fine-tuning
**Prerequisites:** LLM fundamentals
**Unlocks:** Domain-specific models, Bio-digital AI
**Resources:**
- DeepLearning.AI: **Fine-tuning Large Language Models** (🆓, short course)
- Hugging Face PEFT docs — huggingface.co/docs/peft (🆓)
- Coursera: **GenAI Engineering** — IBM (✅ included)
**Study approach:** Free DeepLearning.AI short course for LoRA basics. Then HuggingFace PEFT documentation for production patterns (QLoRA, DoRA, adapter merging).
**Project:** Fine-tune a 3-7B parameter open LLM with LoRA on a domain task. Build a custom eval set. Compare against the base model on that eval. Open everything (dataset, training code, eval results, model card) on HuggingFace Hub.

### 🟡 Sensor fusion
**Prerequisites:** Computer Vision, Probability
**Unlocks:** Robotics, autonomous systems
**Resources:**
- Coursera: **Self-Driving Cars Specialization** — University of Toronto (✅ included)
- Cyrill Stachniss lectures — YouTube (🆓). Best free SLAM resource.
- Book: *Probabilistic Robotics* — Thrun, Burgard & Fox (💰 ~$65). Academic gold standard.
**Study approach:** UToronto specialization for Kalman/EKF mechanics. Cyrill Stachniss YouTube playlist for SLAM depth — better than any course on this topic.
**Project:** Implement Kalman filter and EKF from scratch in C++ on simulated GPS+IMU data. Add a particle filter for non-Gaussian cases. Compare your output against a reference solution from Stachniss exercises.

### 🟡 TFLite & OpenVINO
**Prerequisites:** ONNX
**Unlocks:** Cross-platform edge, MCU deployment
**Resources:**
- TFLite docs (🆓)
- OpenVINO docs — docs.openvino.ai (🆓)
- Edge Impulse free tier — edgeimpulse.com
- Book: *TinyML* — Pete Warden (💰 ~$50)
**Study approach:** TFLite official guide + Edge Impulse hands-on. Don't skip int8 quantization-aware training (QAT) — it's the difference between "barely works" and "production-ready" on MCUs.
**Project:** Deploy a small CV model to a Coral USB accelerator OR Raspberry Pi (CPU). Benchmark against the same model on Jetson. Document the tradeoffs (accuracy vs latency vs power vs cost).

### 🔴 GPU kernels & profiling (Compiler track)
**Prerequisites:** CUDA, C++
**Unlocks:** Compiler-level work, custom accelerator software
**Resources:**
- Triton tutorials — triton-lang.org (🆓)
- CUTLASS GitHub examples (🆓)
- NVIDIA Nsight Compute docs (🆓)
- GPU MODE Discord & YouTube (🆓) — best community for kernel work
**Study approach:** Triton tutorials end-to-end (it's the on-ramp; CUDA C++ for kernels is harder). Then CUTLASS examples for real production matrix work. Pair every kernel with Nsight Compute profiling — never write blind.
**Project (KEYSTONE):** Write a Triton kernel that beats `torch.matmul` on a specific shape (e.g., long sequence × small head dim, common in transformer inference). Profile with Nsight Compute. Publish the kernel + benchmarks + profiling traces. This is the keystone portfolio project for the Compiler track.

### 🔴 RL & imitation learning (Robotics track)
**Prerequisites:** Deep Learning
**Unlocks:** Modern policy-learning robotics, VLA models
**Resources:**
- Berkeley CS285 — Sergey Levine (🆓 YT). Theory depth.
- OpenAI Spinning Up (🆓). Hands-on RL.
- DeepMind RL course — David Silver (🆓 YT)
- Diffusion Policy paper (🆓 arxiv) — current SOTA for manipulation
**Study approach:** Spinning Up for hands-on PPO/SAC fundamentals. Then CS285 for theory depth. Read the Diffusion Policy paper to understand the modern (post-2023) policy-learning stack.
**Project (KEYSTONE):** Train PPO on Pendulum and CartPole. Then train Behavior Cloning + Diffusion Policy on Robomimic. Deploy at least one policy on Isaac Sim or a real robot arm. Public training curves, rollout videos, and ablations.

---

## PHASE 5: Deploy & Build

### 🔴 Jetson & edge deployment
**Prerequisites:** TensorRT, Docker & CI/CD
**Unlocks:** VLMs on edge, Isaac Sim, Neuromorphic, AI architecture
**Resources:**
- NVIDIA Jetson tutorials — developer.nvidia.com/blog (🆓). Follow weekly.
- NVIDIA DLI Jetson workshops (💰 ~$30 each)
- Book: *AI at the Edge* — Situnayake & Plunkett (💰 ~$50)
- Hardware: Jetson Orin Nano dev kit (~$249)
**Study approach:** NVIDIA developer blog as the rolling reference. AI at the Edge book as the conceptual framing. Real hardware required — emulators don't exercise the same memory/thermal envelope.
**Project:** End-to-end edge deployment pipeline on Jetson: TensorRT-optimized model + DeepStream pipeline + Docker container + remote OTA updates + basic monitoring (Prometheus). Public architecture diagram and a writeup of one production gotcha you discover.

### 🔴 Multi-agent systems & orchestration
**Prerequisites:** RAG, MLOps fundamentals
**Unlocks:** AI safety, AI architecture, Fleet architect
**Resources:**
1. DeepLearning.AI: **Design, Develop, and Deploy Multi-Agent Systems with CrewAI** (🆓) — start here, 2 hours
2. Coursera: **Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI** — IBM (✅ included)
3. Coursera: **IBM RAG and Agentic AI Professional Certificate** (✅ included, 9 courses)
- LangGraph docs — langchain-ai.github.io/langgraph (🆓). **Better than any course for production patterns.**
- MCP (Model Context Protocol) docs — modelcontextprotocol.io (🆓)
- Udemy: **The Complete Agentic AI Engineering Course** — Ed Donner (💰 ~$15 on sale)
**Study approach:** CrewAI free course as warm-up (2 hours). IBM Agentic AI for structure. Then LangGraph documentation — production patterns are not in any course yet, only in the docs. Be skeptical of agentic AI hype: pick one framework and learn it well.
**Project:** Build a multi-agent system for a real domain task (e.g., industrial sensor monitoring with sensor-agent + analysis-agent + alerts-agent). Add an eval harness with success-rate and cost-per-task metrics. Public repo + writeup that includes failure modes.

### 🔴 ROS2
**Prerequisites:** C++, Python, Linux
**Unlocks:** Isaac Sim, Fleet architect
**Resources:**
- Udemy: **ROS2 for Beginners (ROS Jazzy, 2026)** — Edouard Renard (💰 ~$15 on sale)
- The Construct — theconstruct.ai (🆓 tier). Browser-based robot labs, no hardware needed.
- Official docs — docs.ros.org (🆓)
- Book: *A Concise Introduction to Robot Programming with ROS2* — Martín Rico (💰 ~$40, 2024 edition)
**Study approach:** Udemy course on sale for structure. Pair with The Construct for hands-on without hardware. Use Martín Rico book as the desk reference. Learn both C++ and Python ROS2 nodes — the ecosystem is mixed.
**Project:** Build a small autonomous robot (sim is fine — Gazebo) with the Nav2 stack: SLAM, path planning, obstacle avoidance. Public on GitHub with a recorded Gazebo demo and a README explaining the navigation pipeline.

### 🔴 Domain vertical (pick ONE)
**Prerequisites:** Computer Vision, Machine Learning
**Unlocks:** Domain-specific models, Functional safety
**Resources by vertical:**
- Industrial: OPC-UA spec — opcfoundation.org (🆓), IEC 61508 / IEC 62443 white papers, Coursera **Smart Manufacturing** — UB (✅ included)
- Medical: DICOM standard, HIPAA compliance docs, Coursera **AI for Medicine** — DeepLearning.AI (✅ included)
- Automotive: ISO 26262 white papers, AUTOSAR docs, Coursera **Self-Driving Cars** — UToronto (✅ included)
- Energy: IEC 61850, SCADA basics, time-series forecasting depth
- Industry events for any vertical (💰 varies)
**Study approach:** Pick exactly ONE vertical and go deep — domain knowledge is the moat. Get fluent in the standards, the jargon, and the conferences. Attend at least one in-person industry event per year.
**Project:** A vertical-specific demo that a non-ML expert in that vertical would recognize as their problem. Examples: industrial defect detection on synthetic factory imagery; medical chest X-ray classifier with FDA-aligned evaluation framework; automotive lane-keeping with ISO-26262-style failure-mode docs.

---

## PHASE 6: Integration

### 🟡 Vision-language models on edge
**Prerequisites:** Vision Transformers, Jetson
**Resources:**
- NVIDIA blog: *Getting Started with Edge AI on Jetson — LLMs, VLMs, Foundation Models* (🆓)
- TensorRT Edge-LLM SDK — C++ runtime for LLMs/VLMs on Jetson. Documentation in NVIDIA developer portal (🆓).
**Study approach:** NVIDIA Edge AI blog series end-to-end. The Edge-LLM SDK docs are sparse — be ready to read source code. Cross-reference with HuggingFace inference recipes for the model side.
**Project:** Deploy a recent VLM (Florence-2, LLaVA-NeXT-OneVision, or current SOTA) on Jetson Orin with the TensorRT Edge-LLM SDK. Benchmark prompt-to-output latency and memory under realistic loads. Document end-to-end on a blog post.

### 🟡 NVIDIA Isaac Sim
**Prerequisites:** ROS2, Jetson
**Unlocks:** Fleet architect
**Resources:**
- NVIDIA DLI: Isaac Sim workshops (💰 ~$30)
- Isaac Lab on GitHub — isaac-sim.github.io/IsaacLab (🆓)
- GR00T Jetson deployment guide — NVIDIA developer blog (🆓)
**Study approach:** DLI Isaac Sim workshop for structure. Then Isaac Lab examples — production-quality reference code. Sim2real is the hard part; budget extra time for it.
**Project:** Train a manipulation policy in Isaac Sim, deploy on Jetson with TensorRT, evaluate on a real or simulated robot arm. Document sim2real transfer challenges in a writeup (domain randomization, observation gap, action delay).

### 🟡 Domain-specific models
**Prerequisites:** LLM fine-tuning, Domain vertical
**Resources:**
- Hugging Face fine-tuning guides — huggingface.co/docs (🆓)
- Domain-specific datasets and benchmarks on HuggingFace Hub (🆓)
- 2-3 recent domain-adaptation papers (🆓 arxiv) in your chosen vertical
**Study approach:** HuggingFace fine-tuning guides for the mechanics. Then read 2-3 domain-adaptation papers in your vertical to understand what's already published.
**Project:** Fine-tune a foundation model (LLM or VLM) on a curated domain dataset. Evaluate against the base model on a custom domain eval. Publish the model on HuggingFace Hub with a complete model card and eval suite.

### 🟡 AI safety & governance
**Prerequisites:** Multi-agent systems
**Why:** EU AI Act is in force. Becoming 🔴 Critical by 2028.
**Resources:**
- Trustworthy AI — University of Helsinki (🆓, elementsofai.com)
- ISO/IEC 42001 AI Management System — white papers
- Coursera: AI Ethics courses (✅ included, various)
- Adversarial ML papers (🆓 arxiv) — start with Madry, Goodfellow
**Study approach:** Trustworthy AI course for the governance vocabulary. Read the EU AI Act high-risk system requirements directly — most courses paraphrase them poorly. Then pivot to adversarial ML papers for technical depth.
**Project:** Red-team an open-source LLM for prompt injection. Document successful jailbreaks, propose mitigations, validate them with an eval harness. Public writeup. Bonus: contribute a finding to a public AI red-teaming benchmark.

### 🔴 Distributed systems
**Prerequisites:** MLOps fundamentals, Docker & CI/CD
**Unlocks:** AI systems architecture, Fleet architect
**Primary resource:**
- Book: **Designing Data-Intensive Applications** — Martin Kleppmann (💰 ~$60) ⭐ **Most important technical book in this roadmap.** Read in Year 2.
**Study approach:** DDIA cover-to-cover over 2-3 months. Implement small examples of each pattern as you read (replication log, leader election, vector clocks). Don't skim — this book rewards depth.
**Project:** Design (in writing) a distributed inference system for 1000 concurrent users with sub-100ms latency. Cover replication, partitioning, drift detection, OTA model updates. Submit for peer review on a forum (e.g., HackerNews's "Show HN", or a serious engineering blog).

### 🔴 Functional safety for ML (Safety track)
**Prerequisites:** Domain vertical, MLOps fundamentals
**Unlocks:** Senior roles in regulated industries (industrial, medical, automotive)
**Resources:**
- IEC 61508 white papers (🆓)
- Book: *Functional Safety for Embedded Systems* — Hobbs (💰 ~$80)
- Safety-Critical AI papers (🆓 arxiv) — small but growing field
- ISO 26262 standard (automotive), IEC 62443 (industrial security)
**Study approach:** IEC 61508 white papers first for vocabulary (SIL levels, fault trees, safety integrity). Then Hobbs's book for embedded application. The intersection of ML and functional safety is mostly papers — not yet a textbook field.
**Project:** Write a safety case for a hypothetical industrial ML deployment (e.g., conveyor-belt defect detection at SIL-2). Map model components to IEC 61508 requirements. Identify gaps between current ML practice and standards. Publish as a public document — there are very few examples online, so this alone signals expertise.

---

## PHASE 7: Architecture

### 🔴 AI systems architecture
**Prerequisites:** Distributed Systems, Multi-agent systems, Jetson
**Unlocks:** Technical leadership, Fleet architect
**Resources:**
- Book: *System Design Interview* Vol 1 & 2 — Alex Xu (💰 ~$40 each). Essential for senior/staff interviews.
- Coursera: **Software Architecture** — University of Alberta (✅ included)
- Book: *Building Machine Learning Powered Applications* — Emmanuel Ameisen (💰 ~$45)
**Study approach:** Both volumes of Alex Xu cover-to-cover. UAlberta course as supplement for non-ML architecture vocabulary. Practice writing system designs by hand — interview prep doubles as real-world practice.
**Project:** Design (in writing) an edge-cloud system for a fleet of 10k devices. Cover fleet management, federated learning, OTA model updates, drift detection, observability. Submit for peer review (interactive review on EngineeringBlogs or similar).

### 🟡 Kubernetes for ML
**Prerequisites:** Docker & CI/CD, MLOps fundamentals
**Resources:**
- Coursera: **Architecting with Google Kubernetes Engine Specialization** (✅ included)
- KubeFlow docs — kubeflow.org (🆓)
- Book: *Kubernetes in Action* — Marko Lukša (💰 ~$55)
**Study approach:** Minikube for local practice before any cloud cluster. Then GKE/EKS free-tier for real distributed work. KubeFlow for ML-specific patterns (KFServing, training operators).
**Project:** Deploy ML serving on Kubernetes with autoscaling (HPA), model rollout (Argo Rollouts), and observability (Prometheus + Grafana). Run on a free-tier GKE/EKS cluster. Document the cost vs latency tradeoffs.

### 🟡 Cloud ML platforms
**Prerequisites:** MLOps fundamentals, Deep Learning
**Resources:**
- Coursera: **Google Cloud Machine Learning Engineer Certificate** (✅ included)
- AWS ML Specialty prep (💰 ~$300 for exam, 🆓 study materials)
- Azure ML docs (🆓)
**Study approach:** Pick the certification path of one cloud (the one closest to your job). Spend at least 20 hours hands-on per cloud — passive course-watching does not generate operational knowledge.
**Project:** Deploy a complete training + serving pipeline on AWS, GCP, or Azure. Document costs, gotchas, and vendor lock-in points. Bonus: build the same pipeline on a second cloud and write a comparison.

---

## PHASE 8: Frontier & Leadership

### 🟡 Technical leadership
**Prerequisites:** AI systems architecture
**Resources:**
- Book: *Staff Engineer: Leadership Beyond the Management Track* — Will Larson (💰 ~$30)
- Book: *The Manager's Path* — Camille Fournier (💰 ~$35). Even if not going into management.
**Study approach:** Both books in Year 3-4. *Staff Engineer* if staying IC; *The Manager's Path* for management-adjacent skills (1:1s, performance feedback, hiring). Both are also useful for working *with* leadership.
**Project:** Write 6 technical blog posts in 12 months, all on your own domain expertise. Speak at one meetup or conference (NVIDIA GTC, PyDay/PyCon Latam, local AI meetup). Make one substantive open-source contribution to a project you actually use.

### 🟢 Neuromorphic computing (RECOMMENDED frontier bet)
**Prerequisites:** C++, Jetson
**Why:** An Electronic Engineering + C++ + embedded + Jetson background is an unusually rare fit. Market growing fast, almost no competition for talent.
**Resources:**
- Intel Neuromorphic Research Community (INRC) — intel.com/neuromorphic (🆓 to apply). Gives access to Loihi 2 hardware.
- Lava framework — github.com/lava-nc (🆓). Intel's open-source neuromorphic software.
- Book: *Neuromorphic Engineering* — Indiveri et al., Springer (💰 ~$100). Academic reference.
**Study approach:** Apply to INRC early (acceptance can take months). Lava framework as the sandbox. Indiveri's book for theory depth. Read recent Loihi 2 papers — the field publishes mostly in conference proceedings, not journals.
**Project:** Implement a small SNN model in Lava simulator. If accepted to INRC, deploy on Loihi 2 hardware. Publish on a niche blog or arxiv. The community is small enough that one good blog post gets noticed.

### 🟢 Quantum-AI hybrids (alternative frontier)
**Prerequisites:** Linear Algebra, Machine Learning
**Resources:**
- IBM Quantum Learning — learning.quantum.ibm.com (🆓)
- Qiskit Textbook — qiskit.org/learn (🆓)
- Book: *Quantum Computation and Quantum Information* — Nielsen & Chuang (💰 ~$75)
**Study approach:** IBM Quantum Learning + Qiskit Textbook for hands-on. Nielsen & Chuang as the multi-year reference. Be honest about the time horizon: practical commercial impact is 5-10 years out, possibly longer.
**Project:** Implement Grover's search and a quantum-classical hybrid optimization (QAOA) in Qiskit. Run on free IBM Quantum hardware. Blog the experience including the gap between theory and current hardware noise.

### 🟢 Bio-digital / medical AI (alternative frontier)
**Prerequisites:** Computer Vision, LLM fine-tuning
**Why:** Healthcare informatics > $127B by 2034. High moat from domain compliance.
**Resources:**
- Coursera: **AI for Medicine Specialization** — DeepLearning.AI (✅ included)
- MIT OpenCourseWare: Computational Biology — ocw.mit.edu (🆓)
- MONAI framework — monai.io (🆓)
**Study approach:** AI for Medicine spec as the on-ramp. MIT OCW for computational biology depth. Don't underestimate the regulatory side — FDA compliance is the moat, not the model.
**Project:** Train a medical imaging classifier on a public dataset (e.g., NIH ChestX-ray). Document with an FDA-aligned evaluation framework (intended use, performance metrics by subgroup, failure modes). Optional: contribute to MONAI or similar open medical AI project.

### 🟢 AI fleet architect
**Prerequisites:** AI systems architecture, ROS2, Multi-agent systems
**Why:** Gartner predicts 500M net new AI jobs by 2036. Emerging role, no formal courses yet.
**Resources:**
- Open-RMF — open-rmf.org (🆓). Open-source robot fleet manager.
- NASA / Mars rover postmortems (🆓)
- ROS2 fleet management packages on GitHub (🆓)
**Study approach:** No courses exist for this role. Build through projects, open source, and industry experience. Read NASA postmortems as the gold-standard reference for fleet operations under hard constraints.
**Project:** Contribute to Open-RMF OR build a simulated fleet of 5+ robots with central orchestration (task allocation, charging coordination, failure recovery). Document architecture decisions. Open-source the result.

---

## PARALLEL TRACK: English Proficiency ⭐ HIGHEST ROI

**Priority:** 🔴 Critical (highest ROI non-technical skill)
**Target:** B2 within 12 months, C1 within 24 months

**Why it matters:** B2+ English unlocks:
- Remote positions for US/EU companies (3–5x typical regional salaries)
- International conference talks
- Access to Big Tech and top AI labs

**Resources:**
- italki conversation tutors — italki.com (💰 ~$10-15/hour). 1x/week for 6 months = the most impactful single investment.
- Write 1 technical blog post per month in English (🆓). Active practice + portfolio in one move.
- BBC Learning English, EnglishClass101 (🆓). Listening + grammar.
- Cambridge B2 First or IELTS certification (💰 ~$200-250). Formal credential when ready.

**Study approach:** 1 hour/week of tutoring is the floor — pair it with daily passive immersion (watch technical talks in English, read docs in English natively, write Slack messages in English where applicable). The single biggest mistake is treating English as a class rather than a daily habit.
**Project:** Public-facing portfolio in English: blog posts, GitHub READMEs, a recorded conference talk. Volume matters more than perfection.

---

## CERTIFICATIONS — PRIORITY ORDER

### Tier 1 — High signal:
1. **NVIDIA Physical AI Certification** (new 2026) — 💰 ~$50-100 with webinar discount.
2. **NVIDIA Jetson AI Specialist** — 🆓 Free, project-based. Low effort, decent signal.
3. **NVIDIA Certified Associate: AI Infrastructure and Operations** — 💰 ~$100. Good second cert.

### Tier 2 — Good signal, included in Coursera Premium:
4. **Duke MLOps Specialization** — ✅ Finish first.
5. **IBM RAG and Agentic AI Professional Certificate** — ✅ After MLOps.
6. **Google Cloud Machine Learning Engineer** — ✅ After others.

### Tier 3 — Optional:
7. AWS ML Specialty — only if using AWS at work.
8. Cambridge B2 First (English) — high signal for international jobs.
9. ISO 42001 awareness — for governance roles.

---

## CRITICAL PATH (Summary)

In priority order — these are the courses and projects that matter most:

1. ✅ **Finish Duke MLOps** (Phase 2)
2. 🔴 **TensorRT** (Phase 4) — Edge / Compiler tracks
3. 🔴 **Transformer CV — ViT/CLIP/SAM** (Phase 4) — modern transformer-era CV
4. 🔴 **Multi-agent systems with LangGraph** (Phase 5) — required for the edge / agentic path
5. 🔴 **English B2** (parallel) — highest ROI non-technical
6. 🔴 **Read Chip Huyen's *Designing ML Systems*** (Phase 2)
7. 🔴 **ROS2** (Phase 5) — required for the robotics path
8. 🔴 **Read Kleppmann's *Designing Data-Intensive Applications*** (Phase 6)
9. 🔴 **NVIDIA Physical AI Certification** — take the 2026 exam with webinar discount

Everything else is supporting material.

---

## BOOKS — ESSENTIAL READING LIST

In priority order:

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **Designing Machine Learning Systems** — Chip Huyen | P2 | 🔴 | ~$50 | Production ML lifecycle. The first book to read. |
| 2 | **Designing Data-Intensive Applications** — Kleppmann | P6 | 🔴 | ~$60 | Most important technical book in this roadmap. Read Year 2. |
| 3 | **System Design Interview Vol 1 & 2** — Alex Xu | P7 | 🟡 | ~$80 | Essential for senior/staff interviews. Buy before job hunting. |
| 4 | **AI at the Edge** — Situnayake & Plunkett | P5 | 🟡 | ~$50 | Good reference for non-NVIDIA edge stacks. Skim if Jetson is your default. |
| 5 | **Deep Learning for Vision Systems** — Elgendy | P3 | 🟡 | ~$50 | Bridge to transformer-era CV. Chapters 8-12 only. |
| 6 | **Staff Engineer** — Will Larson | P8 | 🟡 | ~$30 | For IC leadership path. Read Year 3-4. |
| 7 | **A Tour of C++** — Stroustrup | P0 | 🟡 | ~$40 | Modern C++17/20 refresh. For TensorRT C++ API. |
| 8 | **Functional Safety for Embedded Systems** — Hobbs | P6 | 🟡 | ~$80 | Safety-track essential. |
| 9 | **A Concise Intro to ROS2** — Martín Rico | P5 | 🟡 | ~$40 | Best ROS2 book. Companion to Udemy course. |
| 10 | **Probabilistic Robotics** — Thrun et al. | P4 | 🟢 | ~$65 | Only if going deep into SLAM. Academic. |
| 11 | **Quantum Computation** — Nielsen & Chuang | P8 | 🟢 | ~$75 | Only for the quantum frontier path. |

---

## COST ESTIMATE

| Category | Cost | Notes |
|----------|------|-------|
| Coursera Premium | varies | Covers ~70% of online courses |
| Essential books (first 3-4) | ~$160 | Chip Huyen + Kleppmann + Alex Xu + one CV book |
| Udemy courses (TensorRT + ROS2 + Agentic) | ~$45 | Buy on sale only ($12-15 each) |
| NVIDIA DLI courses (2-3) | ~$60-90 | Self-paced with GPU labs |
| NVIDIA certifications (Physical AI + Jetson AI) | ~$50-100 | With webinar 50% discount |
| italki English tutoring (6 months, 1hr/week) | ~$240-360 | **Highest ROI investment** |
| Cambridge B2 First exam | ~$200-250 | Optional, formal credential |
| **Total — first cycle (Phase 0-2)** | **~$755-1005** | |

**Money-saving tips:**
- Udemy courses go on sale every 2-3 weeks (~$12-15 each). Never pay full price.
- O'Reilly Learning subscription ($49/month) gives digital access to Chip Huyen, Kleppmann, and most O'Reilly books. Consider 2-3 months to cover the reading list.
- DeepLearning.AI short courses are all free.
- NVIDIA DLI often free for auditing; pay only for certification exams.

---

## TIME ALLOCATION — WEEKLY BUDGET

Assuming 10-15 hours/week outside work:

### Phase 1-2
| Activity | Hours/week |
|----------|-----------|
| Finish Duke MLOps cert | 3 |
| Chip Huyen book (2 chapters/week) | 2 |
| TensorRT free NVIDIA course | 3 |
| italki English (1hr/week) | 1 |
| Build first portfolio project (TensorRT on Jetson) | 2 |
| Total | ~11 |

### Phase 3-4
| Activity | Hours/week |
|----------|-----------|
| Hugging Face CV Course | 3 |
| Udemy TensorRT deep dive | 2 |
| NVIDIA Physical AI cert prep | 2 |
| italki English | 1 |
| Deploy SAM/VLM on Jetson | 2 |
| Write first English blog post | 1 |
| Total | ~11 |

### Phase 5
| Activity | Hours/week |
|----------|-----------|
| DeepLearning.AI CrewAI course | 2 |
| IBM Agentic AI Coursera course | 3 |
| LangGraph + MCP docs | 2 |
| Build multi-agent project | 3 |
| italki English | 1 |
| Total | ~11 |

---

*Compiled: 2026. Reassess and update every 6 months.*
*Sources: Gartner Top Strategic Technology Trends 2026, WEF Future of Jobs Report 2025, McKinsey Technology Trends Outlook 2025, Robert Half 2026 Salary Guide, LinkedIn Jobs on the Rise 2026, NVIDIA DLI, Coursera, verified course platforms.*
