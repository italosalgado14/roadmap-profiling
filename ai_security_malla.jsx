import { useState, useCallback, useMemo } from "react";

// ─── Phases ─────────────────────────────────────────────────────────────
const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Security, systems & CS", color: "#94a3b8" },
  { id: "P1", label: "Phase 1", subtitle: "AppSec & secure coding", color: "#ef4444" },
  { id: "P2", label: "Phase 2", subtitle: "DevSecOps & supply chain", color: "#f97316" },
  { id: "P3", label: "Phase 3", subtitle: "Cloud & infra security", color: "#f59e0b" },
  { id: "P4", label: "Phase 4", subtitle: "Cryptography & identity", color: "#10b981" },
  { id: "P5", label: "Phase 5", subtitle: "AI/ML security", color: "#8b5cf6" },
  { id: "P6", label: "Phase 6", subtitle: "Detection & response", color: "#06b6d4" },
  { id: "P7", label: "Phase 7", subtitle: "Governance, risk & compliance", color: "#3b82f6" },
  { id: "P8", label: "Phase 8", subtitle: "Frontier & leadership", color: "#ec4899" },
];

// ─── Priority (absolute importance) ────────────────────────────────────
const PRIORITY = {
  critical:  { bg: "#fef2f2", border: "#ef4444", text: "#991b1b", label: "Critical"  },
  desirable: { bg: "#fefce8", border: "#eab308", text: "#854d0e", label: "Desirable" },
  frontier:  { bg: "#f0fdf4", border: "#22c55e", text: "#166534", label: "Frontier"  },
};

// ─── Specialization tracks ─────────────────────────────────────────────
const TRACKS = {
  appsec:    { color: "#ef4444", label: "Application security",      short: "AppSec"    },
  devsecops: { color: "#f97316", label: "DevSecOps & supply chain",  short: "DevSecOps" },
  cloudsec:  { color: "#0ea5e9", label: "Cloud & infra security",    short: "Cloud"     },
  aisec:     { color: "#8b5cf6", label: "AI/ML & LLM security",      short: "AI security" },
  grc:       { color: "#10b981", label: "Governance, risk & compliance", short: "GRC"   },
};
const TRACK_IDS = Object.keys(TRACKS);
const SPINE_COLOR = "#64748b";

// ─── Kind (role in your personal path) ─────────────────────────────────
const KINDS = {
  spine:    { label: "Spine",    desc: "Required for every track"             },
  branch:   { label: "Branch",   desc: "Required only for chosen track(s)"    },
  elective: { label: "Elective", desc: "Optional, cross-cutting"              },
};

// ─── Course catalog ────────────────────────────────────────────────────
const COURSES = [
  // ─── P0 ─ Foundations — Security, Systems & CS ─
  { id: "LINUX", phase: "P0", row: 0, label: "Linux, networking & CLI",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Shell fluency, processes, permissions, systemd, packet basics — the substrate every attack and defense runs on.",
    res:  "Linux Journey (🆓) | MIT Missing Semester (🆓) | OverTheWire Bandit wargame (🆓)" },
  { id: "PY", phase: "P0", row: 1, label: "Python for security & automation",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Scripting tooling, parsing, HTTP clients, and glue for scanners and CI checks — the security engineer's default language.",
    res:  "Automate the Boring Stuff (🆓) | Black Hat Python — Seitz (💰) | requests / httpx docs (🆓)" },
  { id: "NET", phase: "P0", row: 2, label: "Networking & protocols",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "TCP/IP, DNS, TLS handshake, HTTP semantics, proxies and NAT — you cannot secure traffic you cannot read.",
    res:  "Computer Networking: A Top-Down Approach (book) | Wireshark docs & captures (🆓) | Cloudflare Learning Center (🆓)" },
  { id: "WEB", phase: "P0", row: 3, label: "Web platform & HTTP",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["NET"],
    desc: "Browsers, cookies, CORS, same-origin policy, the request/response lifecycle — the attack surface most of your career touches.",
    res:  "MDN Web Docs (🆓) | PortSwigger Web Security Academy (🆓) | web.dev security (🆓)" },
  { id: "OS", phase: "P0", row: 4, label: "OS internals & memory model",
    priority: "desirable", kind: "branch", tracks: ["appsec"], prereqs: [],
    desc: "Processes, syscalls, virtual memory, the stack/heap — the mental model behind memory-safety bugs and exploitation.",
    res:  "OSTEP — Operating Systems: Three Easy Pieces (🆓) | Nand2Tetris (🆓) | pwn.college (🆓)" },
  { id: "THREAT", phase: "P0", row: 5, label: "Security fundamentals & threat modeling",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "CIA triad, trust boundaries, attacker goals, and STRIDE/attack-tree threat modeling — how to reason about risk before writing a control.",
    res:  "Threat Modeling — Shostack (💰) | OWASP Threat Modeling Cheat Sheet (🆓) | CompTIA Security+ objectives (🆓)" },
  { id: "GO", phase: "P0", row: 6, label: "Go / systems programming",
    priority: "desirable", kind: "elective", tracks: ["devsecops", "cloudsec"], prereqs: [],
    desc: "The language of cloud-native and security tooling (Kubernetes, Trivy, Terraform providers) — a high-leverage second language.",
    res:  "A Tour of Go (🆓) | Go by Example (🆓) | The Go Programming Language — Donovan & Kernighan (💰)" },

  // ─── P1 ─ AppSec & Secure Coding ─
  { id: "OWASP", phase: "P1", row: 0, label: "OWASP Top 10 & web vulns",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["WEB", "THREAT"],
    desc: "Injection, broken access control, SSRF, XSS, deserialization — the canonical vulnerability classes, hands-on in a lab.",
    res:  "OWASP Top 10 (🆓) | PortSwigger Web Security Academy labs (🆓) | PentesterLab (freemium)" },
  { id: "SECCODE", phase: "P1", row: 1, label: "Secure coding & code review",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY", "OWASP"],
    desc: "Input validation, output encoding, safe defaults, and reviewing a diff for the vulnerability the linter missed.",
    res:  "OWASP Cheat Sheet Series (🆓) | OWASP ASVS (🆓) | Secure by Design — Johnsson et al. (💰)" },
  { id: "AUTHZ", phase: "P1", row: 2, label: "AuthN/AuthZ & session security",
    priority: "critical", kind: "branch", tracks: ["appsec", "cloudsec"], prereqs: ["WEB"],
    desc: "Password storage, session tokens, MFA, RBAC/ABAC, and the access-control bugs that top every breach report.",
    res:  "OWASP Authentication & Session Cheat Sheets (🆓) | PortSwigger access control labs (🆓) | NIST SP 800-63B (🆓)" },
  { id: "SAST", phase: "P1", row: 3, label: "SAST / DAST & fuzzing",
    priority: "critical", kind: "branch", tracks: ["appsec", "devsecops"], prereqs: ["SECCODE"],
    desc: "Static/dynamic analysis, semantic queries and coverage-guided fuzzing — automating the search for bugs at scale.",
    res:  "Semgrep & CodeQL docs (🆓) | OWASP ZAP (🆓) | Google/OSS-Fuzz & libFuzzer docs (🆓)" },
  { id: "APPSEC_TEST", phase: "P1", row: 4, label: "Pentesting & exploitation basics",
    priority: "desirable", kind: "branch", tracks: ["appsec"], prereqs: ["OWASP", "OS"],
    desc: "Recon, exploitation, and privilege escalation on deliberately vulnerable targets — thinking like the attacker you defend against.",
    res:  "TryHackMe & Hack The Box (freemium) | HackTricks (🆓) | PEN-200/OSCP — OffSec (💰)" },
  { id: "API", phase: "P1", row: 5, label: "API & mobile security",
    priority: "desirable", kind: "branch", tracks: ["appsec"], prereqs: ["OWASP", "AUTHZ"],
    desc: "REST/GraphQL abuse, broken object-level authorization (BOLA), rate limiting, and mobile client/transport pitfalls.",
    res:  "OWASP API Security Top 10 (🆓) | OWASP MASVS/MASTG (🆓) | PortSwigger GraphQL & API labs (🆓)" },

  // ─── P2 ─ DevSecOps & Supply Chain ─
  { id: "CICD", phase: "P2", row: 0, label: "CI/CD security",
    priority: "critical", kind: "branch", tracks: ["devsecops"], prereqs: ["SECCODE"],
    desc: "Hardening pipelines against poisoned builds, token theft and privileged runners — the CI system is production.",
    res:  "OWASP CI/CD Security Top 10 (🆓) | GitHub Actions security hardening docs (🆓) | SLSA framework (🆓)" },
  { id: "IAC", phase: "P2", row: 1, label: "IaC & policy as code",
    priority: "critical", kind: "branch", tracks: ["devsecops", "cloudsec"], prereqs: ["CICD"],
    desc: "Terraform/OpenTofu security, and codifying guardrails with OPA/Rego and Conftest so misconfig fails the build.",
    res:  "Terraform & OpenTofu docs (🆓) | Open Policy Agent / Rego (🆓) | Checkov & tfsec (🆓)" },
  { id: "CONTAINER", phase: "P2", row: 2, label: "Container & Kubernetes security",
    priority: "critical", kind: "branch", tracks: ["devsecops", "cloudsec"], prereqs: ["LINUX", "IAC"],
    desc: "Image hardening, rootless containers, admission control, network policy, RBAC and runtime detection in the orchestrator.",
    res:  "Kubernetes security docs & CIS Benchmark (🆓) | Falco & Trivy (🆓) | Container Security — Rice (💰)" },
  { id: "SUPPLY", phase: "P2", row: 3, label: "Software supply chain & SBOM",
    priority: "critical", kind: "branch", tracks: ["devsecops"], prereqs: ["CICD"],
    desc: "Artifact signing, provenance, SBOMs and reproducible builds — defending against the dependency and build-system attacks now dominating headlines.",
    res:  "SLSA & in-toto (🆓) | Sigstore / cosign (🆓) | CycloneDX & SPDX SBOM specs (🆓)" },
  { id: "SECRETS", phase: "P2", row: 4, label: "Secrets management",
    priority: "critical", kind: "branch", tracks: ["devsecops", "cloudsec"], prereqs: ["CICD"],
    desc: "Vaulting, dynamic/short-lived credentials, secret scanning and rotation — keeping keys out of git and out of memory dumps.",
    res:  "HashiCorp Vault docs (🆓) | gitleaks & trufflehog (🆓) | Cloud secrets-manager docs (🆓)" },
  { id: "DEPMGMT", phase: "P2", row: 5, label: "Dependency & vulnerability management",
    priority: "desirable", kind: "branch", tracks: ["devsecops"], prereqs: ["SAST"],
    desc: "SCA, CVE triage, reachability analysis and prioritization with EPSS/KEV so you patch what actually matters.",
    res:  "OWASP Dependency-Check & Dependabot (🆓) | OSV & FIRST EPSS (🆓) | CISA Known Exploited Vulnerabilities catalog (🆓)" },

  // ─── P3 ─ Cloud & Infrastructure Security ─
  { id: "CLOUD", phase: "P3", row: 0, label: "Cloud security fundamentals",
    priority: "critical", kind: "branch", tracks: ["cloudsec"], prereqs: ["NET", "THREAT"],
    desc: "The shared-responsibility model, the well-architected security pillar, and the primitives across AWS, Azure and GCP.",
    res:  "AWS/Azure/GCP well-architected security docs (🆓) | CIS Benchmarks (🆓) | flAWS & CloudGoat labs (🆓)" },
  { id: "IAM", phase: "P3", row: 1, label: "Cloud IAM & least privilege",
    priority: "critical", kind: "branch", tracks: ["cloudsec"], prereqs: ["CLOUD", "AUTHZ"],
    desc: "Policies, roles, federation, privilege-escalation paths and right-sizing entitlements — cloud breaches are IAM breaches.",
    res:  "AWS IAM & Azure Entra docs (🆓) | Cloud IAM privilege-escalation research, Rhino Security (🆓) | Permiso/PMapper tooling (🆓)" },
  { id: "NETSEC", phase: "P3", row: 2, label: "Network security & zero trust",
    priority: "critical", kind: "branch", tracks: ["cloudsec"], prereqs: ["NET", "CLOUD"],
    desc: "Segmentation, VPCs, firewalls, service mesh mTLS and the identity-centric zero-trust model that replaces the perimeter.",
    res:  "NIST SP 800-207 Zero Trust Architecture (🆓) | BeyondCorp papers, Google (🆓) | Cloud networking security docs (🆓)" },
  { id: "CSPM", phase: "P3", row: 3, label: "CSPM & cloud posture",
    priority: "desirable", kind: "branch", tracks: ["cloudsec", "devsecops"], prereqs: ["CLOUD", "IAC"],
    desc: "Continuous posture scanning, drift detection and misconfiguration remediation across accounts and clouds.",
    res:  "Prowler & ScoutSuite (🆓) | Steampipe / CloudQuery (🆓) | CIS cloud benchmarks (🆓)" },
  { id: "LOGGING", phase: "P3", row: 4, label: "Logging, monitoring & SIEM",
    priority: "critical", kind: "branch", tracks: ["cloudsec"], prereqs: ["CLOUD"],
    desc: "Centralized telemetry, audit trails, log integrity and a SIEM that turns events into alerts you can act on.",
    res:  "Elastic Security & OpenSearch docs (🆓) | AWS CloudTrail / GCP Audit Logs docs (🆓) | Splunk fundamentals (🆓 tier)" },

  // ─── P4 ─ Cryptography & Identity ─
  { id: "CRYPTO", phase: "P4", row: 0, label: "Applied cryptography",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY"],
    desc: "Symmetric/asymmetric primitives, hashing, AEAD, signatures and the cardinal rule: use vetted libraries, never roll your own.",
    res:  "Serious Cryptography — Aumasson (💰) | Cryptopals challenges (🆓) | Dan Boneh, Crypto I — Coursera (🆓 audit)" },
  { id: "PKI", phase: "P4", row: 1, label: "PKI, TLS & certificate management",
    priority: "critical", kind: "branch", tracks: ["cloudsec", "appsec"], prereqs: ["CRYPTO", "NET"],
    desc: "Certificate chains, TLS configuration, mTLS, ACME automation and the operational pain of rotation and revocation.",
    res:  "Bulletproof TLS and PKI — Ristić (💰) | Let's Encrypt / ACME docs (🆓) | SSL Labs test & guides (🆓)" },
  { id: "IDENTITY", phase: "P4", row: 2, label: "Identity federation (OAuth/OIDC/SAML)",
    priority: "critical", kind: "branch", tracks: ["appsec", "cloudsec"], prereqs: ["AUTHZ", "CRYPTO"],
    desc: "Delegated authorization and single sign-on done right — flows, token validation, scopes, and the classic implementation traps.",
    res:  "OAuth 2 in Action — Richer & Sanso (💰) | oauth.net & OpenID Connect specs (🆓) | Keycloak docs (🆓)" },
  { id: "PQC", phase: "P4", row: 3, label: "Post-quantum & crypto agility",
    priority: "desirable", kind: "branch", tracks: ["cloudsec"], prereqs: ["CRYPTO", "PKI"],
    desc: "NIST PQC (ML-KEM/ML-DSA), hybrid deployment, and inventorying crypto so 'harvest-now-decrypt-later' doesn't strand you.",
    res:  "NIST FIPS 203/204/205 (🆓) | Open Quantum Safe / liboqs (🆓) | Cloudflare PQC blog series (🆓)" },
  { id: "KEYMGMT", phase: "P4", row: 4, label: "Key management & HSM/KMS",
    priority: "desirable", kind: "branch", tracks: ["cloudsec"], prereqs: ["CRYPTO", "SECRETS"],
    desc: "Key lifecycle, envelope encryption, HSMs and cloud KMS, and enforcing separation of duties over key material.",
    res:  "Cloud KMS docs — AWS/Azure/GCP (🆓) | NIST SP 800-57 key management (🆓) | PKCS#11 / HSM primers (🆓)" },

  // ─── P5 ─ AI/ML Security (differentiator) ─
  { id: "AIML_BASICS", phase: "P5", row: 0, label: "ML / LLM systems literacy",
    priority: "critical", kind: "branch", tracks: ["aisec"], prereqs: ["PY"],
    desc: "How models train, infer, and get deployed — embeddings, RAG, fine-tuning and agents — enough to secure what you understand.",
    res:  "DeepLearning.AI short courses (🆓) | Hands-On Large Language Models — Alammar & Grootendorst (💰) | Anthropic & OpenAI docs (🆓)" },
  { id: "LLM_TOP10", phase: "P5", row: 1, label: "OWASP LLM Top 10 & prompt injection",
    priority: "critical", kind: "branch", tracks: ["aisec"], prereqs: ["OWASP", "AIML_BASICS"],
    desc: "Direct and indirect prompt injection, insecure output handling, data leakage — the vulnerability canon for LLM apps.",
    res:  "OWASP Top 10 for LLM Applications (🆓) | Lakera Gandalf & prompt-injection primers (🆓) | Simon Willison's writing (🆓)" },
  { id: "AGENT_SEC", phase: "P5", row: 2, label: "Agent & tool-use security",
    priority: "critical", kind: "branch", tracks: ["aisec"], prereqs: ["LLM_TOP10", "AUTHZ"],
    desc: "Scoping tools/MCP, sandboxing, human-in-the-loop, and the confused-deputy risks when a model can take real actions.",
    res:  "OWASP Agentic Security Initiative (🆓) | Anthropic MCP & tool-use docs (🆓) | Google/Microsoft agent security guidance (🆓)" },
  { id: "AICODE_AUDIT", phase: "P5", row: 3, label: "AI-generated code auditing",
    priority: "critical", kind: "branch", tracks: ["aisec", "appsec"], prereqs: ["SECCODE", "SAST"],
    desc: "Reviewing model-authored code for hallucinated packages, insecure defaults and license/IP risk at the volume AI now produces.",
    res:  "GitHub Copilot & Claude Code security docs (🆓) | Semgrep AI-code rules (🆓) | 'slopsquatting' / hallucinated-dependency research (🆓)" },
  { id: "MODEL_SUPPLY", phase: "P5", row: 4, label: "Model & data supply-chain security",
    priority: "critical", kind: "branch", tracks: ["aisec", "devsecops"], prereqs: ["SUPPLY", "AIML_BASICS"],
    desc: "Unsafe model formats (pickle), poisoned datasets and weights, model provenance and signing across the ML pipeline.",
    res:  "safetensors & model-scanning tools (🆓) | Hugging Face security docs (🆓) | NIST/MITRE data-poisoning literature (🆓)" },
  { id: "ADV_ML", phase: "P5", row: 5, label: "Adversarial ML & model robustness",
    priority: "desirable", kind: "branch", tracks: ["aisec"], prereqs: ["AIML_BASICS"],
    desc: "Evasion, extraction, membership inference and backdoors — the classical adversarial-ML threats beyond prompt injection.",
    res:  "MITRE ATLAS (🆓) | Adversarial Robustness Toolbox — IBM ART (🆓) | NIST AI 100-2 adversarial ML taxonomy (🆓)" },
  { id: "PRIVACY", phase: "P5", row: 6, label: "Data privacy & PETs",
    priority: "desirable", kind: "branch", tracks: ["aisec", "grc"], prereqs: ["CRYPTO", "AIML_BASICS"],
    desc: "Differential privacy, federated learning, anonymization and the privacy-enhancing tech that governs training on real data.",
    res:  "The Algorithmic Foundations of DP — Dwork & Roth (🆓) | OpenMined & Opacus tutorials (🆓) | NIST privacy framework (🆓)" },
  { id: "REDTEAM_AI", phase: "P5", row: 7, label: "AI red-teaming & security evals",
    priority: "desirable", kind: "branch", tracks: ["aisec"], prereqs: ["LLM_TOP10", "APPSEC_TEST"],
    desc: "Systematic jailbreak/harm probing and building security evals into the CI of an AI product, not just a one-off review.",
    res:  "Microsoft PyRIT (🆓) | NVIDIA garak LLM scanner (🆓) | Anthropic/OpenAI red-teaming writeups (🆓)" },

  // ─── P6 ─ Detection, Response & Assurance ─
  { id: "DETECT", phase: "P6", row: 0, label: "Detection engineering & threat hunting",
    priority: "critical", kind: "branch", tracks: ["cloudsec"], prereqs: ["LOGGING"],
    desc: "Writing detections as code (Sigma), mapping coverage to ATT&CK, and hunting for the activity your alerts miss.",
    res:  "Sigma rules project (🆓) | MITRE ATT&CK (🆓) | The DFIR Report & detection.fyi (🆓)" },
  { id: "IR", phase: "P6", row: 1, label: "Incident response & forensics",
    priority: "critical", kind: "branch", tracks: ["cloudsec", "appsec"], prereqs: ["DETECT"],
    desc: "The IR lifecycle, evidence preservation, cloud/host forensics and blameless post-incident review.",
    res:  "NIST SP 800-61 (🆓) | Blue Team Handbook — Murdoch (💰) | TheHive & Velociraptor (🆓)" },
  { id: "THREATINTEL", phase: "P6", row: 2, label: "Threat intel & MITRE ATT&CK",
    priority: "desirable", kind: "branch", tracks: ["cloudsec"], prereqs: ["DETECT"],
    desc: "Turning IOCs and adversary TTPs into prioritized defense; the pyramid of pain and intelligence-driven detection.",
    res:  "MITRE ATT&CK & ATT&CK Navigator (🆓) | MISP threat-intel platform (🆓) | The Pyramid of Pain — Bianco (🆓)" },
  { id: "VULN", phase: "P6", row: 3, label: "Vulnerability management program",
    priority: "desirable", kind: "branch", tracks: ["devsecops", "grc"], prereqs: ["DEPMGMT"],
    desc: "Standing up scanning, SLAs, risk-based prioritization and metrics — the unglamorous program that prevents most breaches.",
    res:  "CISA vuln-management guidance (🆓) | FIRST CVSS & EPSS (🆓) | Nuclei & OpenVAS scanners (🆓)" },

  // ─── P7 ─ Governance, Risk & Compliance ─
  { id: "GRC_FUND", phase: "P7", row: 0, label: "Security governance & risk",
    priority: "critical", kind: "branch", tracks: ["grc"], prereqs: ["THREAT"],
    desc: "Risk assessment, control frameworks (NIST CSF, ISO 27001) and translating security into decisions leadership will fund.",
    res:  "NIST Cybersecurity Framework 2.0 (🆓) | ISO/IEC 27001 overview (🆓) | CIS Controls v8 (🆓)" },
  { id: "AI_GOV", phase: "P7", row: 1, label: "AI governance & assurance",
    priority: "critical", kind: "branch", tracks: ["grc", "aisec"], prereqs: ["GRC_FUND", "LLM_TOP10"],
    desc: "Operationalizing the EU AI Act, NIST AI RMF and ISO/IEC 42001 into model cards, risk tiers and audit evidence.",
    res:  "NIST AI Risk Management Framework + GenAI profile (🆓) | EU AI Act text & timelines (🆓) | ISO/IEC 42001 overview (🆓)" },
  { id: "COMPLIANCE", phase: "P7", row: 2, label: "Compliance & audit",
    priority: "desirable", kind: "branch", tracks: ["grc"], prereqs: ["GRC_FUND"],
    desc: "SOC 2, PCI-DSS, GDPR and Chile's Law 21.719 — evidence collection, control mapping and surviving an external audit.",
    res:  "AICPA SOC 2 & PCI-DSS quick refs (🆓) | GDPR + Chile Law 21.719 primers (🆓) | OpenControl / compliance-as-code (🆓)" },
  { id: "SECURE_SDLC", phase: "P7", row: 3, label: "Secure SDLC & program design",
    priority: "critical", kind: "branch", tracks: ["grc", "devsecops"], prereqs: ["SECCODE", "CICD", "GRC_FUND"],
    desc: "Embedding security across design→deploy: maturity models, security champions, and gates that don't grind delivery to a halt.",
    res:  "OWASP SAMM & BSIMM (🆓) | Microsoft SDL (🆓) | Building Secure & Reliable Systems — Google/O'Reilly (🆓)" },

  // ─── P8 ─ Frontier & Leadership ─
  { id: "FORMAL", phase: "P8", row: 0, label: "Formal methods & verification",
    priority: "frontier", kind: "branch", tracks: ["appsec"], prereqs: ["SECCODE"],
    desc: "Proving properties instead of testing for them — model checking, TLA+ and verified components for the highest-assurance systems.",
    res:  "Learn TLA+ — Wayne (🆓) | Software Foundations — Pierce (🆓) | seL4 verified-kernel papers (🆓)" },
  { id: "CONFIDENTIAL", phase: "P8", row: 1, label: "Confidential computing & TEEs",
    priority: "frontier", kind: "branch", tracks: ["cloudsec"], prereqs: ["CRYPTO", "CLOUD"],
    desc: "Trusted execution environments, remote attestation and encrypted-in-use data — protecting workloads even from the host.",
    res:  "Confidential Computing Consortium docs (🆓) | Intel SGX / AMD SEV / AWS Nitro docs (🆓) | Enarx & attestation primers (🆓)" },
  { id: "AISEC_RESEARCH", phase: "P8", row: 2, label: "AI security research frontier",
    priority: "frontier", kind: "branch", tracks: ["aisec"], prereqs: ["ADV_ML", "REDTEAM_AI"],
    desc: "The moving edge: agentic-system exploits, interpretability for defense, alignment-adjacent security and novel jailbreak classes.",
    res:  "arXiv cs.CR + cs.AI (🆓) | Anthropic & Google DeepMind safety research (🆓) | AI Village / DEF CON red-team writeups (🆓)" },
  { id: "LEAD", phase: "P8", row: 3, label: "Security leadership & communication",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["SECURE_SDLC"],
    desc: "Influence without ownership, risk communication to executives, threat-briefing writing and building a security culture.",
    res:  "The Manager's Path — Fournier (💰) | Google Technical Writing (🆓) | CISA & sector CISO playbooks (🆓)" },
  { id: "ARCH", phase: "P8", row: 4, label: "Security architecture",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["NETSEC", "IDENTITY", "SECURE_SDLC"],
    desc: "Designing defense-in-depth across identity, network, data and application layers — the capstone role this whole path builds toward.",
    res:  "Building Secure & Reliable Systems — Google (🆓) | SABSA & reference architectures (🆓) | AWS/Azure security reference architectures (🆓)" },
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
      <h2 className="sr-only">AI Security curriculum grid with 9 phases, 5 specialization tracks, and prerequisite dependencies</h2>

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
