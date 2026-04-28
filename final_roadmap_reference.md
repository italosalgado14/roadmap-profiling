# Final Learning Roadmap Reference
## Edge AI / Physical AI Specialist Path

---

## Executive Summary

This is the consolidated reference combining all prior analysis: Gartner, WEF, McKinsey reports plus your specific CV review. The path is structured as a 9-phase curriculum with ~5 months per phase for the first 6 years, then longer phases for senior/frontier specialization.

**Strategic positioning:** Lead-market identity as "AI/ML Engineer with Edge deployment expertise" — accesses the large AI/ML hiring pool while differentiating with hardware skills that cannot be commoditized by AI code assistants. Long-term trajectory toward Physical AI Architect as the robotics/autonomous systems market matures.

**Three priority levels throughout:**
- 🔴 **Critical** — Required for the career path. Non-negotiable.
- 🟡 **Desirable** — Competitive edge. Significant ROI but not blocking.
- 🟢 **Frontier** — Future bets. Long-term positioning.

**Resource tagging:**
- ✅ Included in your Coursera Premium subscription
- 🆓 Free
- 💰 Paid (cost noted)
- ❌ Skip (you already have this from CV)

---

## PHASE 0: Foundations (Prerequisites — no time limit)

*These have no prerequisites. Most are already in your CV — verify mastery, skip the rest.*

### 🔴 Linux & CLI
**Unlocks:** Docker, ROS2
**Resources (for reference only):**
- Linux Journey — linuxjourney.com (🆓)
- MIT: The Missing Semester — missing.csail.mit.edu (🆓)

### 🔴 Python
**Unlocks:** ML, ROS2
**Resources (for reference only):**
- Book: *Automate the Boring Stuff* — automatetheboringstuff.com (🆓)

### 🔴 C++
**Unlocks:** TensorRT, CUDA, ROS2, Neuromorphic
**Recommended deepening:**
- Book: *A Tour of C++* — Bjarne Stroustrup (💰 ~$40). Modern C++17/20 focus.
- learncpp.com (🆓) — most comprehensive free resource. Skim advanced chapters.
- *Why:* TensorRT's native C++ API gives you a competitive edge over Python-only ML engineers.

### 🔴 Linear algebra
**Unlocks:** ML, CUDA, Quantum
**If refresher needed:**
- 3Blue1Brown: *Essence of Linear Algebra* — YouTube (🆓)

### 🔴 Calculus
**Unlocks:** ML
**Resource:** 3Blue1Brown: *Essence of Calculus* (🆓)

### 🔴 Probability & statistics
**Unlocks:** ML, Sensor Fusion
**Resource:** Book: *Think Stats* — Allen Downey (🆓, thinkstats2.com)

### 🔴 Git & version control
**Unlocks:** Docker & CI/CD

---

## PHASE 1: Months 1–5 — Core ML & Tools

### 🔴 Machine learning
**Prerequisites:** Python, Linear Algebra, Calculus, Probability
**If refreshing theory:**
- Coursera: **Machine Learning Specialization** — Andrew Ng, Stanford (✅ included)
- Book: *Hands-On Machine Learning* — Aurélien Géron (💰 ~$50). Best practical reference.

### 🔴 Docker & CI/CD
**Prerequisites:** Linux, Git
**Unlocks:** MLOps, Jetson deployment

---

## PHASE 2: Months 6–10 — Deep Learning & Operations

### 🔴 Deep learning & PyTorch
**Prerequisites:** Machine Learning
**Unlocks:** Computer Vision, ONNX, LLM fundamentals
**If refreshing fundamentals:**
- Coursera: **Deep Learning Specialization** — Andrew Ng (✅ included). 5 courses.
- fast.ai Practical Deep Learning (🆓, course.fast.ai). More code-first.

### 🔴 MLOps fundamentals ⭐ PRIORITY FOR YOU
**Prerequisites:** Machine Learning, Docker & CI/CD
**Unlocks:** Multi-agent systems, Distributed systems, Kubernetes for ML
**Primary resource:**
- Coursera: **MLOps Specialization — Duke University** (✅ included) — your current cert, finish this
**Supporting resources:**
- Book: **Designing Machine Learning Systems** — Chip Huyen (💰 ~$50). 🔴 **Must-read.** Covers ML production lifecycle. Buy this now.
- MLOps Zoomcamp — DataTalks.Club, GitHub (🆓). Alternative if you want project-based.

### 🟡 CUDA & GPU computing
**Prerequisites:** C++, Linear Algebra
**Unlocks:** TensorRT (deep understanding)
**Resources:**
- NVIDIA DLI: **Fundamentals of Accelerated Computing with CUDA C/C++** (💰 ~$90). High signal.
- Coursera: **GPU Programming Specialization** — Johns Hopkins (✅ included)

---

## PHASE 3: Months 11–15 — Vision, Models & Export

### 🔴 Computer vision (transformer-aware)
**Prerequisites:** Deep Learning
**Unlocks:** Vision Transformers, Sensor Fusion, Domain vertical
**Primary resource:**
- **Hugging Face Computer Vision Course** — huggingface.co/learn/computer-vision-course (🆓) ⭐ **Your main CV gap-closer.** Covers modern architectures.
**Supporting resources:**
- Stanford CS231n 2024 lectures — YouTube (🆓). Theory depth.
- Book: *Deep Learning for Vision Systems* — Mohamed Elgendy (💰 ~$50). Skip chapters 1-7, focus on 8-12.

### 🔴 ONNX & model export
**Prerequisites:** Deep Learning
**Unlocks:** TensorRT, TFLite & OpenVINO
**Reference only:**
- ONNX Runtime docs — onnxruntime.ai (🆓)

### 🟡 LLM fundamentals
**Prerequisites:** Deep Learning
**Unlocks:** RAG, Fine-tuning
**Primary resource:**
- Coursera: **Generative AI with Large Language Models** — DeepLearning.AI + AWS (✅ included)
**Supporting resources:**
- Andrej Karpathy: *Let's build GPT from scratch* — YouTube (🆓). Builds intuition for transformer internals.

---

## PHASE 4: Months 16–20 — Optimization & Specialization

### 🔴 TensorRT ⭐ HIGHEST PRIORITY GAP
**Prerequisites:** ONNX, C++, CUDA
**Unlocks:** Jetson deployment
**Primary resources:**
- NVIDIA DLI: **Optimizing TensorFlow Models with TensorRT** — courses.nvidia.com (🆓). Start here.
- Udemy: **Full Course on TensorRT, ONNX for Development and Production** — Fikrat Gasimov (💰 ~$15 on sale). Covers C++ API, Docker integration, Jetson deployment.
- TensorRT official docs — docs.nvidia.com/deeplearning/tensorrt (🆓). Primary reference.
**Certification:** NVIDIA Physical AI Certification (new 2026) — nvidia.com/training (💰 ~$50-100 with webinar discount)
**First project:** Take a Honeywell YOLO model → ONNX → TensorRT engine → benchmark FP32 vs FP16 vs INT8 on Jetson. Document as blog post.

### 🔴 Vision Transformers (ViT, CLIP, SAM)
**Prerequisites:** Computer Vision
**Unlocks:** Vision-language models, Bio-digital AI
**Primary resources:**
- Hugging Face CV Course (🆓) — continues from Phase 3
- Original papers (🆓 on arxiv):
  - ViT: *An Image is Worth 16x16 Words* (Dosovitskiy et al., 2020)
  - CLIP: *Learning Transferable Visual Models from Natural Language Supervision* (Radford et al., 2021)
  - SAM: *Segment Anything* (Kirillov et al., 2023)
**First project:** Deploy SAM 2 on your Jetson at Honeywell. Internal demo + portfolio piece.

### 🟡 RAG & vector databases
**Prerequisites:** LLM fundamentals
**Unlocks:** Multi-agent systems
**Primary resource:**
- DeepLearning.AI: **LangChain for LLM Application Development** (🆓, short course)
- LangChain docs — python.langchain.com (🆓)

### 🟡 LLM fine-tuning
**Prerequisites:** LLM fundamentals
**Unlocks:** Domain-specific models, Bio-digital AI
**Resources:**
- DeepLearning.AI: **Fine-tuning Large Language Models** (🆓, short course)
- Hugging Face PEFT docs — huggingface.co/docs/peft (🆓)

### 🟡 Sensor fusion
**Prerequisites:** Computer Vision, Probability
**Resources:**
- Coursera: **Self-Driving Cars Specialization** — University of Toronto (✅ included)
- Cyrill Stachniss lectures — YouTube (🆓). Best free SLAM resource.
- Book: *Probabilistic Robotics* — Thrun, Burgard & Fox (💰 ~$65). Academic gold standard.

### 🟡 TFLite & OpenVINO
**Prerequisites:** ONNX
**Resources:**
- Edge Impulse free tier — edgeimpulse.com
- OpenVINO docs — docs.openvino.ai (🆓)

---

## PHASE 5: Months 21–25 — Deploy & Build

### 🔴 Jetson & edge deployment
**Prerequisites:** TensorRT, Docker & CI/CD
**Unlocks:** VLMs on edge, Isaac Sim, Neuromorphic, AI architecture
**Keep current:**
- NVIDIA developer blog — developer.nvidia.com/blog (🆓). Follow weekly.
- NVIDIA DLI Jetson workshops (💰 ~$30 each)
**Hardware:** You already have Jetson access at Honeywell (no purchase needed)

### 🔴 Multi-agent systems & orchestration ⭐ HIGHEST PRIORITY GAP
**Prerequisites:** RAG, MLOps fundamentals
**Unlocks:** AI safety, AI architecture, Fleet architect
**Primary resources:**
1. DeepLearning.AI: **Design, Develop, and Deploy Multi-Agent Systems with CrewAI** (🆓) — start here, 2 hours
2. Coursera: **Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI** — IBM (✅ included) — main structured course
3. Coursera: **IBM RAG and Agentic AI Professional Certificate** (✅ included, 9 courses) — full certification
**Supporting:**
- LangGraph documentation — langchain-ai.github.io/langgraph (🆓). **Better than any course for production patterns.**
- MCP (Model Context Protocol) docs — modelcontextprotocol.io (🆓)
- Udemy: **The Complete Agentic AI Engineering Course** — Ed Donner (💰 ~$15 on sale). 8 real projects.
**First project:** Multi-agent system for industrial monitoring — sensor agent + knowledge base agent + alerts agent. Directly relevant to Honeywell.

### 🔴 ROS2
**Prerequisites:** C++, Python, Linux
**Unlocks:** Isaac Sim, Fleet architect
**Primary resources:**
- Udemy: **ROS2 for Beginners (ROS Jazzy, 2026)** — Edouard Renard (💰 ~$15 on sale). Best-rated beginner course. C++ AND Python.
- The Construct — theconstruct.ai (🆓 tier). Browser-based robot labs, no hardware needed.
- Official docs — docs.ros.org (🆓). Excellent reference.
**Book:** *A Concise Introduction to Robot Programming with ROS2* — Francisco Martín Rico (💰 ~$40, 2024 edition)

### 🔴 Domain vertical (pick ONE)
**Prerequisites:** Computer Vision, Machine Learning
**Unlocks:** Domain-specific models
**Formalize existing domain:**
- OPC-UA specification — opcfoundation.org (🆓). Industrial communication standard.
- IEC 61508 / IEC 62443 awareness — read white papers. Functional safety for industrial AI.
- Coursera: **Smart Manufacturing** specializations — University of Buffalo (✅ included)
- Industry events: Expomin Chile, NVIDIA GTC (💰 varies)

---

## PHASE 6: Months 26–30 — Integration

### 🟡 Vision-language models on edge
**Prerequisites:** Vision Transformers, Jetson
**Resources:**
- NVIDIA blog: *Getting Started with Edge AI on Jetson — LLMs, VLMs, Foundation Models* (🆓)
- TensorRT Edge-LLM SDK — C++ runtime for LLMs/VLMs on Jetson. Documentation in NVIDIA developer portal (🆓).

### 🟡 NVIDIA Isaac Sim
**Prerequisites:** ROS2, Jetson
**Unlocks:** Fleet architect
**Resources:**
- NVIDIA DLI: Isaac Sim workshops (💰 ~$30)
- Isaac Lab on GitHub — isaac-sim.github.io/IsaacLab (🆓)
- GR00T Jetson deployment guide — NVIDIA developer blog (🆓)

### 🟡 Domain-specific models
**Prerequisites:** LLM fine-tuning, Domain vertical
**Resources:**
- Hugging Face fine-tuning guides — huggingface.co/docs (🆓)
- Domain-specific datasets on Hugging Face Hub (🆓)

### 🟡 AI safety & governance
**Prerequisites:** Multi-agent systems
**Why:** EU AI Act is in force. Becoming 🔴 Critical by 2028.
**Resources:**
- Trustworthy AI — University of Helsinki (🆓, elementsofai.com)
- ISO/IEC 42001 AI Management System — awareness through white papers
- Coursera: AI Ethics courses (✅ included, various)

### 🔴 Distributed systems
**Prerequisites:** MLOps fundamentals, Docker & CI/CD
**Unlocks:** AI systems architecture, Fleet architect
**Primary resource:**
- Book: **Designing Data-Intensive Applications** — Martin Kleppmann (💰 ~$60) ⭐ **Most important technical book for your career.** Read this in Year 2.

---

## PHASE 7: Months 31–40 — Architecture

### 🔴 AI systems architecture
**Prerequisites:** Distributed Systems, Multi-agent systems, Jetson
**Unlocks:** Technical leadership, Fleet architect
**Resources:**
- Book: *System Design Interview* Vol 1 & 2 — Alex Xu (💰 ~$40 each). Essential for senior/staff interviews.
- Coursera: **Software Architecture** — University of Alberta (✅ included)
- Book: *Building Machine Learning Powered Applications* — Emmanuel Ameisen (💰 ~$45)

### 🟡 Kubernetes for ML
**Prerequisites:** Docker & CI/CD, MLOps fundamentals
**Resources:**
- Coursera: **Architecting with Google Kubernetes Engine Specialization** (✅ included)
- KubeFlow docs — kubeflow.org (🆓)
- Book: *Kubernetes in Action* — Marko Lukša (💰 ~$55)

### 🟡 Cloud ML platforms
**Prerequisites:** MLOps fundamentals, Deep Learning
**Resources:**
- Coursera: **Google Cloud Machine Learning Engineer Certificate** (✅ included — your current cert)
- AWS ML Specialty prep (💰 ~$300 for exam, 🆓 study materials)

---

## PHASE 8: Years 4–10 — Frontier & Leadership

### 🟡 Technical leadership
**Prerequisites:** AI systems architecture
**Resources:**
- Book: *Staff Engineer: Leadership Beyond the Management Track* — Will Larson (💰 ~$30). Read in Year 3-4.
- Book: *The Manager's Path* — Camille Fournier (💰 ~$35). Even if not going into management.
- Actions: Blog on your GitHub Pages site, conference talks (NVIDIA GTC, PyDay Chile, PyCon Latam), open source contributions

### 🟢 Neuromorphic computing (RECOMMENDED frontier bet)
**Prerequisites:** C++, Jetson
**Why for you specifically:** Your Electronic Engineering + C++ + embedded + Jetson = rare fit. Market growing at 104% CAGR, almost no competition for talent.
**Resources:**
- Intel Neuromorphic Research Community (INRC) — intel.com/neuromorphic (🆓 to apply). Gives access to Loihi 2 hardware.
- Lava framework — github.com/lava-nc (🆓). Intel's open-source neuromorphic software.
- Book: *Neuromorphic Engineering* — Giacomo Indiveri et al., Springer (💰 ~$100). Academic reference.

### 🟢 Quantum-AI hybrids (alternative frontier)
**Prerequisites:** Linear Algebra, Machine Learning
**Resources:**
- IBM Quantum Learning — learning.quantum.ibm.com (🆓)
- Qiskit Textbook — qiskit.org/learn (🆓)
- Book: *Quantum Computation and Quantum Information* — Nielsen & Chuang (💰 ~$75)

### 🟢 Bio-digital / medical AI (alternative frontier)
**Prerequisites:** Computer Vision, LLM fine-tuning
**Why for you:** Connects to your Fondecyt heart rate project experience.
**Resources:**
- Coursera: **AI for Medicine Specialization** — DeepLearning.AI (✅ included)
- MIT OpenCourseWare: Computational Biology — ocw.mit.edu (🆓)

### 🟢 AI fleet architect
**Prerequisites:** AI systems architecture, ROS2, Multi-agent systems
**Why:** Gartner predicts 500M net new AI jobs by 2036. Emerging role, no formal courses yet.
**How to build:** Projects + open source + industry experience. Contribute to ROS2 fleet management packages.

---

## PARALLEL TRACK: English Proficiency ⭐ HIGHEST ROI

**Priority:** 🔴 Critical (highest ROI non-technical skill)
**Current level:** B1 (per your CV)
**Target:** B2 within 12 months, C1 within 24 months

**Why it matters:** B2+ English unlocks:
- Remote positions for US/EU companies (3–5x Chilean salaries)
- International conference talks
- Access to Big Tech and top AI labs

**Resources:**
- italki conversation tutors — italki.com (💰 ~$10-15/hour). 1x/week for 6 months = most impactful investment.
- Write 1 technical blog post per month on your GitHub Pages site (🆓). Active practice + portfolio.
- BBC Learning English, EnglishClass101 (🆓). Supporting listening/grammar.
- Cambridge B2 First or IELTS certification (💰 ~$200-250). Formal credential when ready.

---

## CERTIFICATIONS — PRIORITY ORDER

### Tier 1 — High signal for your path:
1. **NVIDIA Physical AI Certification** (new 2026) — 💰 ~$50-100 with webinar discount. Attend April 30, 2026 webinar.
2. **NVIDIA Jetson AI Specialist** — 🆓 Free, project-based. Low effort, decent signal.
3. **NVIDIA Certified Associate: AI Infrastructure and Operations** — 💰 ~$100. Good second cert.

### Tier 2 — Good signal, on your Coursera:
4. **Duke MLOps Specialization** — ✅ Finish first. Your active cert.
5. **IBM RAG and Agentic AI Professional Certificate** — ✅ After MLOps.
6. **Google Cloud Machine Learning Engineer** — ✅ Your active cert, resume after others.

### Tier 3 — Optional:
7. AWS ML Specialty — if you use AWS at work
8. Cambridge B2 First (English) — 💰 when ready, high signal for international jobs
9. ISO 42001 awareness — for governance roles

---

## CRITICAL PATH FOR YOU (Summary)

Given your Honeywell profile, these are the courses that **matter most** in order:

1. ✅ **Finish Duke MLOps** (Phase 2) — currently enrolled
2. 🔴 **TensorRT** (Phase 4) — your #1 technical gap
3. 🔴 **Transformer CV — ViT/CLIP/SAM** (Phase 4) — update your CV skillset
4. 🔴 **Multi-agent systems with LangGraph** (Phase 5) — biggest employability gap
5. 🔴 **English B2** (parallel) — highest ROI non-technical
6. 🔴 **Read Chip Huyen's *Designing ML Systems*** (Phase 2)
7. 🔴 **ROS2** (Phase 5) — if pursuing robotics path
8. 🔴 **Read Kleppmann's *Designing Data-Intensive Applications*** (Phase 6)
9. 🔴 **NVIDIA Physical AI Certification** — take the 2026 exam with webinar discount

Everything else is supporting material.

---

## BOOKS — ESSENTIAL READING LIST

In priority order for your profile:

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **Designing Machine Learning Systems** — Chip Huyen | P2 | 🔴 | ~$50 | Production ML lifecycle. Directly applies to Honeywell. |
| 2 | **Designing Data-Intensive Applications** — Kleppmann | P6 | 🔴 | ~$60 | Most important technical book for career growth. Read Year 2. |
| 3 | **System Design Interview Vol 1 & 2** — Alex Xu | P7 | 🟡 | ~$80 | Essential for senior/staff interviews. Buy before job hunting. |
| 4 | **AI at the Edge** — Situnayake & Plunkett | P5 | 🟡 | ~$50 | Good reference, but you already do this work. Skim only. |
| 5 | **Deep Learning for Vision Systems** — Elgendy | P3 | 🟡 | ~$50 | Bridge to transformer-era CV. Chapters 8-12 only. |
| 6 | **Staff Engineer** — Will Larson | P8 | 🟡 | ~$30 | For IC leadership path. Read Year 3-4. |
| 7 | **A Tour of C++** — Stroustrup | P0 | 🟡 | ~$40 | Modern C++17/20 refresh. For TensorRT C++ API. |
| 8 | **Probabilistic Robotics** — Thrun et al. | P4 | 🟢 | ~$65 | Only if going deep into SLAM. Academic. |
| 9 | **A Concise Intro to ROS2** — Martín Rico | P5 | 🟡 | ~$40 | Best ROS2 book. Companion to Udemy course. |
| 10 | **Quantum Computation** — Nielsen & Chuang | P8 | 🟢 | ~$75 | Only if going into quantum path. |

---

## REVISED COST ESTIMATE

| Category | Cost | Notes |
|----------|------|-------|
| Coursera Premium (already have) | $0 | Covers ~70% of courses |
| Essential books (first 3-4 from list) | ~$160 | Chip Huyen + Kleppmann + Alex Xu + one CV book |
| Udemy courses (TensorRT + ROS2 + Agentic) | ~$45 | Buy on sale only ($12-15 each) |
| NVIDIA DLI courses (2-3) | ~$60-90 | Self-paced with GPU labs |
| NVIDIA certifications (Physical AI + Jetson AI) | ~$50-100 | With webinar 50% discount |
| italki English tutoring (6 months, 1hr/week) | ~$240-360 | **Highest ROI investment** |
| Cambridge B2 First exam | ~$200-250 | Optional, formal credential |
| **Total Phase 1-2 (first 12 months)** | **~$755-1005** | |

**Money-saving tips:**
- Udemy courses go on sale every 2-3 weeks (~$12-15 each). Never pay full price.
- O'Reilly Learning subscription ($49/month) gives digital access to Chip Huyen, Kleppmann, and most O'Reilly books. Consider 2-3 months to cover reading list.
- DeepLearning.AI short courses are all free.
- NVIDIA DLI often free auditing; pay only for certification exams.
- April 30, 2026 NVIDIA webinar gives 50% exam discount.

---

## TIME ALLOCATION — FIRST 12 MONTHS

Assuming 10-15 hours/week outside work:

### Months 1-5 (Phase 1-2)
| Activity | Hours/week |
|----------|-----------|
| Finish Duke MLOps cert | 3 |
| Chip Huyen book (2 chapters/week) | 2 |
| TensorRT free NVIDIA course | 3 |
| Italki English (1hr/week) | 1 |
| Build first portfolio project (TensorRT on Jetson) | 2 |
| Total | ~11 |

### Months 6-10 (Phase 3-4)
| Activity | Hours/week |
|----------|-----------|
| Hugging Face CV Course | 3 |
| Udemy TensorRT deep dive | 2 |
| NVIDIA Physical AI cert prep | 2 |
| Italki English | 1 |
| Deploy SAM/VLM on Jetson (work project) | 2 |
| Write first English blog post | 1 |
| Total | ~11 |

### Months 11-15 (Phase 5 begins)
| Activity | Hours/week |
|----------|-----------|
| DeepLearning.AI CrewAI course | 2 |
| IBM Agentic AI Coursera course | 3 |
| LangGraph + MCP docs | 2 |
| Build multi-agent project | 3 |
| Italki English | 1 |
| Total | ~11 |

---

## FINAL STRATEGIC NOTE

Your profile (CV + embedded + C++ + Electronic Eng.) is in the top 5-10% for Edge AI / Physical AI roles. The strategy is:

1. **Short term (6-12 months):** Close your TensorRT + agentic AI + transformer CV gaps. Get the NVIDIA Physical AI cert. Finish Duke MLOps. Reach English B2.
2. **Medium term (1-3 years):** Position as "AI/ML Engineer with Edge deployment expertise." Go deep on one vertical (Honeywell's industrial path). Write publicly in English. Speak at one conference.
3. **Long term (3-10 years):** Transition to Architect → Staff Engineer → Principal or Frontier specialist (neuromorphic recommended). Place one frontier bet by year 5.

The path is realistic, the gaps are closeable, and your existing advantages compound over time. The market will move toward you faster than most engineers can catch up.

---

*Compiled: April 16, 2026*
*Sources: Gartner Top Strategic Technology Trends 2026, WEF Future of Jobs Report 2025, McKinsey Technology Trends Outlook 2025, Robert Half 2026 Salary Guide, LinkedIn Jobs on the Rise 2026, NVIDIA DLI, Coursera, verified course platforms.*
*Reassess and update: Every 6 months.*
