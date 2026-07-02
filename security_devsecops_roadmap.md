# Security Engineering Learning Roadmap
## Security Engineering & AI-Era DevSecOps Path

---

## Executive Summary

**Security engineering** is the discipline where AI raises the stakes instead of replacing the human. As AI assistants generate more code faster than humans can review it, attack surface compounds, agentic systems acquire credentials and tool access, and — critically — **accountability stays human**: someone with judgment has to threat-model the design, audit the output, and sign off. That combination (adversarial thinking + trust + legal accountability) makes security one of the most AI-resilient engineering specialties available to you. The market data backs the durability: the global cybersecurity workforce gap is estimated at ~4.8M unfilled roles (ISC2 Cybersecurity Workforce Study 2024), and the US BLS projects roughly 29-33% growth for information security analysts this decade — among the fastest of any occupation. **Honest counterpoint, read this first:** the *entry level* of security is being reshaped hard by AI — tier-1 SOC triage, alert grinding, and report-writing are exactly what agentic tools automate first, and junior-analyst hiring is already tightening. The durable demand is at the **engineering** level: people who can build and secure systems, not just watch dashboards. Your path in is therefore **lateral, not bottom-up**: you enter as an experienced software/edge-AI/embedded engineer who adds the security lens, skipping the analyst grind entirely.

**Why this path fits your profile specifically:**
- **Chile / mining & energy:** the Ley Marco de Ciberseguridad (Ley 21.663, 2024) created the ANCI and imposes real cybersecurity obligations on operators of essential services — mining, energy, water, telecom. Compliance demand is structural and local supply of OT-security engineers is thin. Your control-systems roadmap (PLCs, SCADA-adjacent work) is the natural on-ramp: almost nobody in security can speak both IEC 62443 *and* actual control loops.
- **Chile / fintech:** the Fintech Law (21.521) plus CMF regulation, and the new data-protection law (Ley 21.719, in force December 2026, creating the Agencia de Protección de Datos Personales) are generating near-term security and privacy engineering work.
- **DACH remote:** NIS2 and the German KRITIS regime are doing for Europe what 21.663 does for Chile, at 10x scale. A German-speaking engineer who knows BSI IT-Grundschutz vocabulary and OT security is a rare combination; German industrial companies (manufacturing, energy) are precisely where that shortage bites.
- **Cross-roadmap leverage:** this path deliberately reuses your other three roadmaps — **AI & LLM security** builds on the Edge AI path (you can't secure what you can't build), **OT/ICS security** builds on the Control & Robotics path, and **post-quantum migration** connects to the Quantum path's PQC node. Security is the roadmap that monetizes the other three earliest.

**Three priority levels** run throughout:
- 🔴 **Critical** — the non-negotiable spine for your chosen track.
- 🟡 **Desirable** — high-ROI competitive edge, but not blocking.
- 🟢 **Frontier** — long-horizon bets; exciting, but unproven.

**Five specialization tracks** (pick one primary; the doc explains the study material per node):
- **AppSec & code auditing** — secure design and code review at scale, SAST/DAST, and the fast-growing niche of auditing AI-generated code.
- **Cloud & DevSecOps** — securing the pipeline and the platform: cloud IAM, IaC, containers/Kubernetes, CI/CD and software supply chain.
- **AI & LLM security** — prompt injection, agent/tool/MCP security, model supply chain, AI red-teaming. The newest track, with the least competition and the most churn.
- **OT/ICS security** — *your differentiator:* industrial protocols, the Purdue model, IEC 62443, OT monitoring. Directly employable in Chilean mining/energy and the DACH industrial base.
- **Offensive security** — pentesting, exploitation, vulnerability research. The skills that make every defensive track credible; a viable specialization on its own (OSCP route).

**Resource tags:**
- ✅ Included in Coursera Premium (or available as a free audit)
- 🆓 Free
- 💰 Paid (cost noted, approximate — verify before buying)

**Per-node sections:** every node lists `Unlocks`, `Tracks`, `Resources`, a `Study approach`, and a `Project`. The project is the proof of competence — a lab you rooted, a detection you shipped, or an audit you published beats any certificate. Prices and cert details change; treat every 💰 figure as "verify on the vendor page this month."

---

## PHASE 0: Foundations — Systems, Networks & Crypto

### 🔴 Linux & hardening
**Unlocks:** Pentesting methodology & labs, Security logging & telemetry, Container & Kubernetes security
**Tracks:** All specializations
**Resources:**
- MIT — *The Missing Semester of Your CS Education* (🆓)
- OverTheWire — *Bandit* wargame (🆓)
- Linux Journey — linuxjourney.com (🆓)
- CIS Benchmarks for Linux distributions (🆓 with registration)
**Study approach:** You already live in Linux from edge/embedded work — what changes is the lens. Re-walk the system as an attacker and a hardener: file permissions and SUID binaries, PAM, systemd units, capabilities vs root, auditd, SSH configuration, and what a CIS benchmark actually checks. Bandit is a fast, fun calibration of where your command-line fluency has gaps.
**Project:** Take a fresh Ubuntu VM and harden it against the relevant CIS benchmark with an idempotent script (bash or Ansible). Then attack your own box: enumerate it with LinPEAS, note every finding, and write a one-page gap analysis of what the benchmark caught vs missed.

### 🔴 Networking & protocols
**Unlocks:** Threat modeling & security principles, Pentesting methodology & labs, Security logging & telemetry, Cloud security fundamentals, ICS architecture & protocols
**Tracks:** All specializations
**Resources:**
- Kurose & Ross — *Computer Networking: A Top-Down Approach* (💰 ~$100, older editions fine)
- Chris Sanders — *Practical Packet Analysis*, No Starch (💰 ~$40)
- Wireshark — official docs and sample captures (🆓)
- Beej's Guide to Network Programming (🆓)
**Study approach:** Security work is 50% reading network evidence. Get genuinely fluent in TCP/IP, DNS, TLS handshakes, HTTP/2, ARP, DHCP and NAT — not from memorized diagrams but from captures. Spend most of your time inside Wireshark: capture your own traffic, follow streams, and learn the display filters cold. TLS deserves special depth: certificate chains, SNI, ALPN, and what breaks when interception middleboxes appear.
**Project:** Capture and annotate three full sessions in Wireshark — a DNS lookup + HTTPS page load, an SSH login, and one IoT/edge device on your LAN doing whatever it does when idle. Publish the annotated write-up; the IoT one almost always contains a surprise worth reporting.

### 🔴 Python for security automation
**Unlocks:** Detection engineering & SIEM
**Tracks:** All specializations
**Resources:**
- *Automate the Boring Stuff with Python* (🆓)
- Requests, Scapy, and pwntools — official docs (🆓)
- Real Python — tutorials on type hints, packaging, async (🆓)
**Study approach:** You already write Python; point it at security plumbing. The recurring patterns: parse ugly logs, call REST APIs (cloud, SIEM, ticketing), craft packets with Scapy, and glue tools together into repeatable jobs. Learn pwntools early even if you don't do the offensive track — it teaches byte-level thinking that pays everywhere.
**Project:** Build a small CLI that pulls the latest CISA Known Exploited Vulnerabilities (KEV) feed, cross-references it against a `pip freeze`/SBOM of one of your real projects, and emits a prioritized report. Type-hinted, tested, on GitHub — this becomes a portfolio piece and a tool you keep.

### 🟡 C & memory fundamentals
**Unlocks:** Binary exploitation & reversing
**Tracks:** AppSec & code auditing · Offensive security
**Resources:**
- pwn.college — *Program Interaction* and *Memory Errors* dojos, ASU (🆓)
- *The C Programming Language* — K&R, as reference (💰)
- Compiler Explorer — godbolt.org (🆓)
**Study approach:** Your embedded C/C++ background is a real head start; what's new is seeing memory as an attack surface. Study the stack layout, calling conventions, heap allocator behavior, and undefined behavior — then look at the same C snippets in Compiler Explorer until you can predict the assembly. This node is what separates people who can *talk about* buffer overflows from people who can find them.
**Project:** Write five intentionally vulnerable C programs (stack overflow, off-by-one, use-after-free, format string, integer overflow), then demonstrate each corruption under GDB + sanitizers and write one paragraph per bug on how a reviewer should have caught it.

### 🔴 Applied cryptography
**Unlocks:** Identity & access management, Post-quantum migration
**Tracks:** All specializations
**Resources:**
- Cryptopals — cryptopals.com challenge sets (🆓)
- Jean-Philippe Aumasson — *Serious Cryptography*, 2nd ed., No Starch (💰 ~$50)
- David Wong — *Real-World Cryptography*, Manning (💰 ~$50)
- Cryptohack — cryptohack.org (🆓)
**Study approach:** The goal is *engineering* fluency, not proofs: what AES-GCM, ChaCha20-Poly1305, RSA, ECDH, Ed25519, HMAC, and Argon2 are for, how TLS 1.3 composes them, and — most importantly — the standard ways real systems get them wrong (nonce reuse, ECB, unauthenticated encryption, home-rolled token schemes). Cryptopals sets 1-4 teach more practical crypto judgment than any course; do them in Python.
**Project:** Complete Cryptopals sets 1-3 and publish your solutions with short notes. Then audit one real codebase you own for crypto misuse (hardcoded keys, weak hashing for passwords, miss