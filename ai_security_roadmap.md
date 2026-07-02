# AI Security & Trustworthy Systems Roadmap
## Application, Cloud & AI Security Engineer Path

---

## Executive Summary

**Security is the one specialization that grows in every AI scenario.** If AI progress plateaus, the huge base of software still has to be defended. If AI accelerates, the attack surface explodes — more code shipped faster, more autonomous agents taking real actions, more machine-generated code that no human fully read. Either way, someone has to secure it, and that someone is paid well and is hard to automate away, because security is fundamentally adversarial: the defender's job changes the moment the attacker adapts. For a software engineer who wants a **durable, AI-resilient career**, security is the highest-floor bet on the board.

This roadmap frames you as an **Application, Cloud & AI Security Engineer** — not a compliance box-ticker and not a lone pentester, but the engineer who builds security *into* systems and can reason about the new AI-specific threats on top of the classical stack. Your existing software background is the advantage here: the strongest AppSec and DevSecOps engineers come from building software, not from a certification mill. You already understand how systems break because you've built them.

**The AI-security wedge (Phase 5) is your differentiator.** Classical security roles are competitive and well-supplied. What almost nobody can do yet is secure *AI systems*: prompt injection and indirect injection, agent/tool-use abuse, auditing the flood of AI-generated code, model and data supply-chain integrity, and governing all of it under the EU AI Act and NIST AI RMF. This is a brand-new subfield where demand is outrunning supply and your software + security combination is rare. Lean into it — but build it on a real security foundation, because "AI security" without AppSec fundamentals is just prompt-engineering trivia.

**Honest positioning.** Security is a broad field; you cannot be world-class at all of it. This roadmap gives you a **spine** (fundamentals every security engineer needs) plus **five tracks** to specialize. Pick one or two. For your profile (software engineer, Chile fintech + energy, DACH/remote via German), the highest-return combination is **AppSec + AI security**, with **Cloud** as the natural third because everything now runs there. GRC (governance/compliance) is worth literacy even if you never specialize in it — it's how security gets funded and how the EU AI Act becomes your job.

**Three priority levels** run throughout:
- 🔴 **Critical** — the non-negotiable spine for your chosen track.
- 🟡 **Desirable** — high-ROI competitive edge, but not blocking.
- 🟢 **Frontier** — long-horizon bets; high-assurance or research-adjacent.

**Five specialization tracks** (pick one or two; the doc explains the study material per node):
- **Application security (AppSec)** — secure coding, code review, vulnerability classes, pentesting, API/mobile security. The closest to your current skill set.
- **DevSecOps & supply chain** — pipeline security, IaC, containers/Kubernetes, artifact signing, SBOMs — security embedded in delivery.
- **Cloud & infrastructure security** — cloud IAM, network/zero-trust, posture management, detection and response.
- **AI/ML & LLM security** — *your differentiator:* prompt injection, agent security, AI-code auditing, model supply chain, adversarial ML, AI red-teaming.
- **Governance, risk & compliance (GRC)** — risk frameworks, AI governance (EU AI Act, NIST AI RMF, ISO 42001), audit and secure-SDLC program design.

**Resource tags:**
- ✅ Included in Coursera Premium (or available as a free audit)
- 🆓 Free
- 💰 Paid (cost noted)

**Per-node sections:** every node lists `Prerequisites`, `Tracks`, `Resources`, a `Study approach`, and a `Project`. The project is the proof of competence — a vulnerability you found and reported, a pipeline you hardened, a red-team writeup, a passing eval suite — beats any certificate.

---

## PHASE 0: Foundations — Security, Systems & CS

### 🔴 Linux, networking & CLI
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Linux Journey — linuxjourney.com (🆓)
- MIT — *The Missing Semester of Your CS Education* (🆓)
- OverTheWire — *Bandit* wargame, a hands-on shell/security ladder (🆓)
**Study approach:** You already use a shell; treat this as filling gaps, not a first course. Drill the security-relevant parts: file permissions and setuid, processes and `/proc`, systemd units, users/groups, and enough `tcpdump`/`ss`/`iptables` to reason about what a box is doing on the network. The Bandit wargame is the fastest way to make CLI fluency stick because every level is a small privilege/enumeration puzzle.
**Project:** Harden a fresh Linux VM to a CIS-style baseline with an idempotent script — disable unused services, configure SSH keys and a firewall, enable auditd — and write a one-page note on what each control defends against.

### 🔴 Python for security & automation
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Al Sweigart — *Automate the Boring Stuff with Python* (🆓)
- Justin Seitz & Tim Arnold — *Black Hat Python*, 2nd ed. (💰)
- `requests` / `httpx` and `argparse` official docs (🆓)
**Study approach:** You program already, so skip syntax and focus on the security toolkit: HTTP clients, parsing (regex, `lxml`, JSON), building small CLIs, and reading/writing the file and network I/O that scanners and CI checks are made of. The habit that matters: whenever you find yourself doing a security check by hand twice, script it.
**Project:** Write a small CLI security tool — e.g. a link/secret scanner or a header-audit tool for a list of URLs — with `argparse`, type hints, tests, and a `pyproject.toml`. Wire it into a GitHub Actions job so it runs on every push.

### 🔴 Networking & protocols
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Kurose & Ross — *Computer Networking: A Top-Down Approach* (book)
- Wireshark — official docs and sample captures (🆓)
- Cloudflare Learning Center — TLS, DNS, DDoS explainers (🆓)
**Study approach:** Center everything on "what can go wrong on the wire." Get fluent in the TCP/IP stack, DNS, the TLS handshake, HTTP semantics, proxies and NAT. Use Wireshark to actually *watch* a TLS handshake and an HTTP request — reading packets removes the mystery from most network attacks. The habit that matters: for any protocol, ask where authentication, integrity and confidentiality live (or don't).
**Project:** Capture and annotate a full TLS 1.3 handshake and a plaintext HTTP request in Wireshark, labelling each field and marking exactly what an on-path attacker can read or tamper with in each case.

### 🔴 Web platform & HTTP
**Prerequisites:** Networking & protocols
**Tracks:** All specializations
**Resources:**
- MDN Web Docs — HTTP, cookies, CORS, security headers (🆓)
- PortSwigger — *Web Security Academy* (🆓)
- web.dev — security & privacy guides (🆓)
**Study approach:** Most of a security career touches the web, so build a precise mental model: the request/response lifecycle, cookies and their attributes, the same-origin policy, CORS, and content security policy. PortSwigger's academy is the single best free resource in all of security — start it here and you'll return to it for years. The habit that matters: know, for any web feature, which origin boundary it crosses.
**Project:** Stand up a deliberately small web app and demonstrate three security headers (CSP, `Set-Cookie` flags, HSTS) changing real browser behavior — show the attack working with the header off and blocked with it on.

### 🟡 OS internals & memory model
**Prerequisites:** none (start here)
**Tracks:** Application security
**Resources:**
- Remzi & Andrea Arpaci-Dusseau — *Operating Systems: Three Easy Pieces* (🆓)
- *Nand2Tetris* — from logic gates to an OS (🆓)
- pwn.college — hands-on systems-security curriculum (🆓)
**Study approach:** This is optional unless you go deep on exploitation, but it pays off in judgment everywhere. Understand processes, syscalls, virtual memory, and the stack/heap well enough to see *why* memory-safety bugs happen and why languages like Rust and Go remove whole vulnerability classes. Don't chase binary-exploitation mastery unless it excites you — literacy is enough for most AppSec work.
**Project:** Work through a handful of pwn.college memory-corruption levels and write up one buffer-overflow end to end: the bug, why it's exploitable, and the two mitigations (stack canary, ASLR/NX) that would stop it.

### 🔴 Security fundamentals & threat modeling
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Adam Shostack — *Threat Modeling: Designing for Security* (💰)
- OWASP — *Threat Modeling Cheat Sheet* (🆓)
- CompTIA Security+ — exam objectives as a vocabulary map (🆓)
**Study approach:** Before any tool, learn to think in trust boundaries. Internalize the CIA triad, attacker goals, and a structured method — STRIDE or attack trees — to enumerate what can go wrong in a design. Use the Security+ objectives purely as a checklist of terms you should recognize, not as a course to grind. The habit that matters: for every system you touch, be able to draw the data-flow diagram and name its trust boundaries.
**Project:** Produce a STRIDE threat model for a small real system (your Python tool's deployment, or a toy web app): a data-flow diagram, the threats per element, and the top five mitigations ranked by risk.

### 🟡 Go / systems programming
**Prerequisites:** none (start here)
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- *A Tour of Go* — go.dev (🆓)
- *Go by Example* (🆓)
- Donovan & Kernighan — *The Go Programming Language* (💰)
**Study approach:** Go is the lingua franca of cloud-native security tooling — Kubernetes, Terraform providers, Trivy, and most CNCF projects are written in it. You don't need mastery; you need to read the source of the tools you rely on and write small utilities and admission controllers. Concurrency (goroutines, channels) and the standard library's networking/crypto packages are the high-value parts.
**Project:** Write a small Go CLI that queries a cloud or Kubernetes API and flags one misconfiguration (e.g. public buckets, or pods running as root), then read the source of one real tool (Trivy or a Terraform provider) to see how it does the same at scale.

---

## PHASE 1: AppSec & Secure Coding

### 🔴 OWASP Top 10 & web vulns
**Prerequisites:** Web platform & HTTP, Security fundamentals & threat modeling
**Tracks:** All specializations
**Resources:**
- OWASP — *Top 10* project (🆓)
- PortSwigger — *Web Security Academy* labs (🆓)
- PentesterLab — guided vulnerability exercises (freemium)
**Study approach:** This is the core vocabulary of the whole field. Work the PortSwigger labs hands-on — injection, broken access control, SSRF, XSS, insecure deserialization — until you can exploit each class *and* explain the fix. Don't memorize the list; understand the root cause behind each category (trusting untrusted input, missing authorization checks). The habit that matters: whenever you learn a vuln, immediately learn its canonical remediation.
**Project:** Complete the PortSwigger access-control, SSRF, and SQL-injection topic tracks, then write a short internal-style report on one lab: reproduction steps, impact, CVSS-style rating, and remediation.

### 🔴 Secure coding & code review
**Prerequisites:** Python for security & automation, OWASP Top 10 & web vulns
**Tracks:** All specializations
**Resources:**
- OWASP — *Cheat Sheet Series* (🆓)
- OWASP — *Application Security Verification Standard (ASVS)* (🆓)
- Johnsson, Deogun & Sawano — *Secure by Design* (💰)
**Study approach:** This is where your software background compounds hardest. Learn the defensive patterns — input validation, parameterized queries, output encoding, safe deserialization, secure defaults — and then practice the harder skill of *reviewing a diff* for the vulnerability automated tools miss. ASVS gives you a concrete, level-based checklist to review against. The habit that matters: review for what the code *allows*, not just what it does.
**Project:** Do a written security review of a real open-source pull request or a deliberately-flawed app, using an ASVS checklist; file at least two findings with concrete fixes and reference the exact ASVS requirement each maps to.

### 🔴 AuthN/AuthZ & session security
**Prerequisites:** Web platform & HTTP
**Tracks:** Application security · Cloud & infra security
**Resources:**
- OWASP — *Authentication* and *Session Management* cheat sheets (🆓)
- PortSwigger — access-control and authentication labs (🆓)
- NIST — *SP 800-63B* digital identity guidelines (🆓)
**Study approach:** Broken access control tops the OWASP list for a reason — it's the most common serious bug and the hardest to catch with scanners. Master password storage (Argon2/bcrypt), session tokens, MFA, and the difference between authentication and authorization. Study RBAC vs ABAC and the object-level checks that prevent one user reading another's data. The habit that matters: for every endpoint, ask "who is allowed, and where is that enforced?"
**Project:** Take a small app with an intentional broken-object-level-authorization bug, exploit it (access another user's record), then fix it with a proper server-side authorization check and prove the exploit no longer works.

### 🔴 SAST / DAST & fuzzing
**Prerequisites:** Secure coding & code review
**Tracks:** Application security · DevSecOps & supply chain
**Resources:**
- Semgrep and GitHub CodeQL — docs and rule-writing guides (🆓)
- OWASP ZAP — dynamic scanner (🆓)
- Google OSS-Fuzz and libFuzzer — docs (🆓)
**Study approach:** Learn to automate the search for bugs and, crucially, to tune out the noise — an AppSec engineer's value is often in *reducing* false positives, not generating alerts. Write your own Semgrep/CodeQL rules to catch a project-specific antipattern; that skill is rare and high-signal. Understand where each technique fits: SAST for source patterns, DAST for running behavior, fuzzing for input-handling robustness.
**Project:** Write a custom Semgrep rule that catches a real insecure pattern in a codebase you know, tune it to near-zero false positives on that repo, and add it to a CI job that fails the build on a match.

### 🟡 Pentesting & exploitation basics
**Prerequisites:** OWASP Top 10 & web vulns, OS internals & memory model
**Tracks:** Application security
**Resources:**
- TryHackMe and Hack The Box — guided and free-form labs (freemium)
- HackTricks — the field's shared attack reference (🆓)
- OffSec — *PEN-200 / OSCP* (💰)
**Study approach:** You don't need to become a full-time pentester, but offensive fluency makes you a far better defender — you can't threat-model an attack you've never run. Work TryHackMe/HTB paths for recon, exploitation, and privilege escalation. Treat OSCP as optional and expensive; pursue it only if you want to sell pentesting or your employer pays. The habit that matters: after every exploit, ask what single control would have stopped it.
**Project:** Complete a beginner Hack The Box or TryHackMe path end to end and write a professional-format pentest report for one machine: scope, recon, exploitation, post-exploitation, and prioritized remediation.

### 🟡 API & mobile security
**Prerequisites:** OWASP Top 10 & web vulns, AuthN/AuthZ & session security
**Tracks:** Application security
**Resources:**
- OWASP — *API Security Top 10* (🆓)
- OWASP — *MASVS / MASTG* mobile testing standard and guide (🆓)
- PortSwigger — GraphQL and API testing labs (🆓)
**Study approach:** APIs are where most modern breaches actually happen, and the failure modes differ from classic web apps: broken object/function-level authorization, excessive data exposure, and missing rate limits dominate. Learn REST and GraphQL abuse, then the mobile angle — insecure storage, certificate pinning, and the fact that a mobile client is fully attacker-controlled. The habit that matters: treat every client as hostile and every authorization check as belonging on the server.
**Project:** Audit a small REST or GraphQL API for the API Top 10 — demonstrate one BOLA and one excessive-data-exposure issue — and add server-side authorization plus response filtering to close them.

---

## PHASE 2: DevSecOps & Supply Chain

### 🔴 CI/CD security
**Prerequisites:** Secure coding & code review
**Tracks:** DevSecOps & supply chain
**Resources:**
- OWASP — *Top 10 CI/CD Security Risks* (🆓)
- GitHub — *Security hardening for GitHub Actions* (🆓)
- SLSA — supply-chain levels for software artifacts (🆓)
**Study approach:** Your CI system has production credentials and runs arbitrary code on every push — treat it as a crown-jewel asset. Learn the real attack paths: poisoned pipeline execution, token exfiltration, malicious pull-request workflows, and over-privileged runners. Pin actions to SHAs, scope tokens minimally, and isolate untrusted PR builds. The habit that matters: every pipeline secret should be short-lived and least-privilege.
**Project:** Harden a real GitHub Actions (or GitLab CI) pipeline: pin all actions to commit SHAs, replace long-lived secrets with OIDC-federated short-lived credentials, and document the attack each change prevents.

### 🔴 IaC & policy as code
**Prerequisites:** CI/CD security
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- Terraform / OpenTofu — official docs (🆓)
- Open Policy Agent (OPA) and Rego — docs and playground (🆓)
- Checkov and tfsec — IaC scanners (🆓)
**Study approach:** Infrastructure is code now, which means misconfiguration is a code bug you can catch before it ships. Learn to scan IaC for insecure defaults and to *codify* your own guardrails with OPA/Rego so policy violations fail the plan, not the audit six months later. The habit that matters: express every "we should never do X" as an automated policy, not a wiki page.
**Project:** Write an OPA/Rego policy that blocks a specific dangerous Terraform pattern (public S3 bucket, security group open to `0.0.0.0/0`), wire it into `terraform plan` via Conftest, and show it failing a bad plan and passing a fixed one.

### 🔴 Container & Kubernetes security
**Prerequisites:** Linux, networking & CLI, IaC & policy as code
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- Kubernetes — security docs and the CIS Kubernetes Benchmark (🆓)
- Falco (runtime detection) and Trivy (image/config scanning) (🆓)
- Liz Rice — *Container Security* (💰)
**Study approach:** Containers and Kubernetes are where most cloud-native workloads run and where a single misconfigured RBAC role or privileged pod becomes a cluster takeover. Learn image hardening and minimal base images, rootless/non-privileged containers, admission control, network policies, and runtime detection. The habit that matters: apply least privilege at every layer — image, pod securityContext, RBAC, and network policy.
**Project:** Harden a Kubernetes deployment: build a minimal non-root image, add a restrictive `securityContext` and NetworkPolicy, enforce it with an admission policy (Kyverno/OPA Gatekeeper), and catch a runtime violation with Falco.

### 🔴 Software supply chain & SBOM
**Prerequisites:** CI/CD security
**Tracks:** DevSecOps & supply chain
**Resources:**
- SLSA and in-toto — provenance frameworks (🆓)
- Sigstore / cosign — artifact signing (🆓)
- CycloneDX and SPDX — SBOM specifications (🆓)
**Study approach:** Supply-chain attacks (SolarWinds, xz-utils, malicious npm/PyPI packages) are now among the highest-impact threats, and defending them is a fast-growing niche. Learn artifact signing, build provenance, SBOM generation and consumption, and the SLSA levels that structure it all. Connect this directly to Phase 5's model supply chain — the concepts transfer to ML artifacts. The habit that matters: never trust an artifact you can't verify the provenance of.
**Project:** Build a pipeline that generates an SBOM (CycloneDX) for an app, signs the resulting image with cosign, and verifies the signature and provenance at deploy time — rejecting an unsigned or tampered artifact.

### 🔴 Secrets management
**Prerequisites:** CI/CD security
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- HashiCorp Vault — docs and tutorials (🆓)
- gitleaks and trufflehog — secret scanners (🆓)
- Cloud secrets-manager docs — AWS/Azure/GCP (🆓)
**Study approach:** Leaked credentials are one of the most common breach root causes, and the fix is systemic, not a wiki reminder. Learn centralized vaulting, dynamic/short-lived credentials, automated rotation, and secret scanning in both the repo and the CI logs. Prefer workload identity (OIDC) over stored secrets wherever possible. The habit that matters: a secret in source control is already compromised — rotate first, investigate second.
**Project:** Add secret scanning (gitleaks) as a pre-commit hook and CI gate on a repo, then migrate one hardcoded credential to a vault or cloud secrets manager with short-lived, rotated access.

### 🟡 Dependency & vulnerability management
**Prerequisites:** SAST / DAST & fuzzing
**Tracks:** DevSecOps & supply chain
**Resources:**
- OWASP Dependency-Check and GitHub Dependabot (🆓)
- OSV (Open Source Vulnerabilities) and FIRST EPSS (🆓)
- CISA — *Known Exploited Vulnerabilities (KEV)* catalog (🆓)
**Study approach:** Most applications are mostly third-party code, so software composition analysis is unavoidable — but the real skill is prioritization, not scanning. A raw CVE list is noise; learn to rank by exploitability (EPSS), known-exploited status (KEV), and actual reachability in your code. The habit that matters: patch what's exploitable and reachable first, and be able to defend that ordering to an auditor.
**Project:** Run SCA on a real project, then build a prioritized remediation plan for the findings using EPSS scores and the CISA KEV catalog, justifying why some low-CVSS items outrank some high-CVSS ones.

---

## PHASE 3: Cloud & Infrastructure Security

### 🔴 Cloud security fundamentals
**Prerequisites:** Networking & protocols, Security fundamentals & threat modeling
**Tracks:** Cloud & infra security
**Resources:**
- AWS / Azure / GCP — well-architected security pillar docs (🆓)
- CIS Benchmarks — per-cloud hardening baselines (🆓)
- flAWS and CloudGoat — intentionally vulnerable cloud labs (🆓)
**Study approach:** Pick one cloud and go deep before going broad — the concepts transfer, the console details don't. Internalize the shared-responsibility model (what the provider secures vs. what you do), then the security primitives: identity, networking, storage, logging, and encryption. The flAWS and CloudGoat labs teach cloud attack paths by walking you through real misconfigurations. The habit that matters: assume every resource is public until you've proven otherwise.
**Project:** Work through the CloudGoat or flAWS scenarios in one cloud, then write up the misconfigurations that enabled each step and the exact IAM/networking change that would have blocked it.

### 🔴 Cloud IAM & least privilege
**Prerequisites:** Cloud security fundamentals, AuthN/AuthZ & session security
**Tracks:** Cloud & infra security
**Resources:**
- AWS IAM and Microsoft Entra ID — docs (🆓)
- Rhino Security Labs — cloud privilege-escalation research (🆓)
- PMapper / Permiso — IAM path-analysis tooling (🆓)
**Study approach:** Cloud breaches are overwhelmingly IAM breaches — over-broad roles, forgotten access keys, and escalation paths through chained permissions. Master policy evaluation, roles vs. users, federation, and how attackers pivot from a low-privilege foothold to admin. Learn to right-size permissions with access analyzers rather than guessing. The habit that matters: grant the minimum permission that makes the task work, then verify with tooling that no escalation path remains.
**Project:** Map the privilege-escalation paths in a test cloud account with an IAM analysis tool, find one chain from a low-privilege principal to admin, and remediate it by tightening a single over-broad policy.

### 🔴 Network security & zero trust
**Prerequisites:** Networking & protocols, Cloud security fundamentals
**Tracks:** Cloud & infra security
**Resources:**
- NIST — *SP 800-207: Zero Trust Architecture* (🆓)
- Google — *BeyondCorp* papers (🆓)
- Cloud networking security docs — VPC, security groups, service mesh (🆓)
**Study approach:** The network perimeter is dead; identity is the new perimeter. Learn segmentation, VPC design, firewalls/security groups, and the zero-trust model where every request is authenticated and authorized regardless of network location. Understand service-mesh mTLS as the practical implementation of "never trust, always verify" between services. The habit that matters: design so that a compromised host inside the network still can't reach what it shouldn't.
**Project:** Design and implement a segmented network for a small multi-service app — default-deny between tiers, explicit allow rules, and mTLS between two services — and document how it contains a hypothetical single-host compromise.

### 🟡 CSPM & cloud posture
**Prerequisites:** Cloud security fundamentals, IaC & policy as code
**Tracks:** Cloud & infra security · DevSecOps & supply chain
**Resources:**
- Prowler and ScoutSuite — open-source posture scanners (🆓)
- Steampipe / CloudQuery — query your cloud as SQL (🆓)
- CIS cloud benchmarks (🆓)
**Study approach:** At scale you can't manually check every account, so posture management continuously scans for misconfiguration and drift. Learn to run open-source CSPM tools, interpret findings against a benchmark, and — the higher-value skill — automate remediation rather than just reporting. Steampipe's SQL-over-cloud approach is a fast way to answer bespoke "who has X" questions. The habit that matters: measure posture continuously, because a secure configuration drifts the day after you set it.
**Project:** Run Prowler or ScoutSuite against a cloud account, triage the findings against the CIS benchmark, and write one automated remediation (a Lambda/function or IaC change) that fixes a recurring misconfiguration.

### 🔴 Logging, monitoring & SIEM
**Prerequisites:** Cloud security fundamentals
**Tracks:** Cloud & infra security
**Resources:**
- Elastic Security and OpenSearch — docs (🆓)
- AWS CloudTrail and GCP Cloud Audit Logs — docs (🆓)
- Splunk — fundamentals (🆓 tier)
**Study approach:** You can't detect or investigate what you don't log. Learn what to collect (audit logs, auth events, network flow), how to centralize it, and how to protect log integrity so an attacker can't cover their tracks. A SIEM is where telemetry becomes alerts — this node sets up Phase 6's detection work. The habit that matters: log for the investigation you'll wish you had, and make the logs tamper-evident.
**Project:** Ship cloud audit logs to a SIEM (Elastic or OpenSearch), build a dashboard for authentication events, and write one alert rule that fires on a suspicious pattern (e.g. root login, or access from a new region).

---

## PHASE 4: Cryptography & Identity

### 🔴 Applied cryptography
**Prerequisites:** Python for security & automation
**Tracks:** All specializations
**Resources:**
- Jean-Philippe Aumasson — *Serious Cryptography*, 2nd ed. (💰)
- *Cryptopals* — crypto challenges (🆓)
- Dan Boneh — *Cryptography I*, Stanford on Coursera (🆓 audit / ✅)
**Study approach:** You need to *use* cryptography correctly far more than you need to design it. Learn the primitives and, more importantly, when each applies: symmetric vs asymmetric, hashing vs MAC, AEAD, digital signatures, and key exchange. The single most valuable lesson is negative: never roll your own crypto, and recognize the misuse patterns (ECB mode, static IVs, unauthenticated encryption). The Cryptopals challenges teach this by making you *break* bad crypto. The habit that matters: reach for a vetted library and the highest-level API it offers.
**Project:** Complete Cryptopals Set 1–2 (implement and then break ECB/CBC), and write a short "crypto misuse cheat sheet" for developers listing the five mistakes you saw and their correct alternatives.

### 🔴 PKI, TLS & certificate management
**Prerequisites:** Applied cryptography, Networking & protocols
**Tracks:** Cloud & infra security · Application security
**Resources:**
- Ivan Ristić — *Bulletproof TLS and PKI* (💰)
- Let's Encrypt and the ACME protocol — docs (🆓)
- SSL Labs — server test and deployment guides (🆓)
**Study approach:** TLS and certificates are everywhere and misconfigured everywhere. Learn certificate chains, trust stores, TLS configuration (protocol versions, cipher suites), mTLS, and the operational reality that most incidents are expired certs and bad rotation, not broken math. Automate issuance with ACME. The habit that matters: treat certificate lifecycle as an operational system with monitoring and rotation, not a one-time setup.
**Project:** Stand up automated TLS with ACME for a service, configure it to an A+ on SSL Labs, add mTLS between two internal services, and set up expiry monitoring that alerts before a cert lapses.

### 🔴 Identity federation (OAuth/OIDC/SAML)
**Prerequisites:** AuthN/AuthZ & session security, Applied cryptography
**Tracks:** Application security · Cloud & infra security
**Resources:**
- Justin Richer & Antonio Sanso — *OAuth 2 in Action* (💰)
- oauth.net and the OpenID Connect specs (🆓)
- Keycloak — open-source identity provider docs (🆓)
**Study approach:** Delegated authorization and SSO underpin every modern app, and the implementation traps are legendary (implicit flow misuse, missing state/PKCE, token validation shortcuts, redirect-URI abuse). Learn the OAuth 2.0/OIDC flows properly, what each token is and how to validate it, and how SAML fits in enterprise. The habit that matters: validate every token's signature, issuer, audience, and expiry — never trust a token because it arrived.
**Project:** Implement the OAuth 2.0 authorization-code-with-PKCE flow against a Keycloak instance, then deliberately break token validation (skip the audience check) and show the resulting authorization bypass before fixing it.

### 🟡 Post-quantum & crypto agility
**Prerequisites:** Applied cryptography, PKI, TLS & certificate management
**Tracks:** Cloud & infra security
**Resources:**
- NIST — *FIPS 203/204/205* (ML-KEM, ML-DSA, SLH-DSA) (🆓)
- Open Quantum Safe / liboqs (🆓)
- Cloudflare — post-quantum blog series (🆓)
**Study approach:** "Harvest now, decrypt later" makes this relevant today for long-lived secrets even though large quantum computers don't yet exist. You don't need the lattice math; you need to know the standardized algorithms, how hybrid (classical + PQC) deployment works, and — the real deliverable — how to inventory your cryptography so you *can* migrate when required. This connects to the Quantum roadmap's PQC node from the defensive side. The habit that matters: know where every long-lived secret lives and how you'd rotate its algorithm.
**Project:** Build a crypto inventory for a small system (what algorithms, where, protecting what, for how long), flag the assets exposed to harvest-now-decrypt-later, and prototype a hybrid TLS handshake with liboqs.

### 🟡 Key management & HSM/KMS
**Prerequisites:** Applied cryptography, Secrets management
**Tracks:** Cloud & infra security
**Resources:**
- Cloud KMS docs — AWS KMS, Azure Key Vault, GCP KMS (🆓)
- NIST — *SP 800-57: Recommendation for Key Management* (🆓)
- PKCS#11 and HSM primers (🆓)
**Study approach:** Cryptography is only as strong as its key management, which is mostly an operational and access-control problem. Learn the key lifecycle (generation, rotation, revocation, destruction), envelope encryption, cloud KMS, and when an HSM is warranted. Enforce separation of duties so no single person controls both key and ciphertext. The habit that matters: keys never leave the boundary that protects them — you send data to the key, not the key to the data.
**Project:** Implement envelope encryption for application data using a cloud KMS: data keys encrypted by a KMS master key, with a documented rotation policy and IAM enforcing that the app can encrypt/decrypt but not export the master key.

---

## PHASE 5: AI/ML Security — the differentiator

### 🔴 ML / LLM systems literacy
**Prerequisites:** Python for security & automation
**Tracks:** AI/ML & LLM security
**Resources:**
- DeepLearning.AI — short courses on LLMs, RAG and agents (🆓)
- Alammar & Grootendorst — *Hands-On Large Language Models* (💰)
- Anthropic and OpenAI — developer documentation (🆓)
**Study approach:** You can't secure what you don't understand, so build a working model of how modern AI systems are actually assembled: tokenization and inference, embeddings and vector stores, retrieval-augmented generation, fine-tuning, and tool-using agents. You're not training frontier models — you're mapping the components and data flows so you can threat-model them. The habit that matters: for any AI feature, draw where untrusted data enters the model's context.
**Project:** Build a small RAG chatbot (retrieval + LLM) yourself, then draw its full data-flow and trust-boundary diagram — marking every point where user or third-party content reaches the model's prompt. This diagram is the input to every node that follows.

### 🔴 OWASP LLM Top 10 & prompt injection
**Prerequisites:** OWASP Top 10 & web vulns, ML / LLM systems literacy
**Tracks:** AI/ML & LLM security
**Resources:**
- OWASP — *Top 10 for LLM Applications* (🆓)
- Lakera *Gandalf* and prompt-injection primers (🆓)
- Simon Willison — ongoing writing on prompt injection (🆓)
**Study approach:** This is the defining vulnerability class of the AI era, and it has no clean fix — treat the model as a confused, gullible interpreter that cannot reliably separate instructions from data. Master direct prompt injection, *indirect* injection (malicious instructions hidden in retrieved documents or web pages), insecure output handling, and sensitive-information disclosure. Understand why input filtering is a mitigation, not a solution. The habit that matters: never let model output take a privileged action without an independent authorization check.
**Project:** Build a small LLM app with a tool or database lookup, then demonstrate both a direct and an indirect prompt injection that makes it misbehave (leak data or call a tool it shouldn't). Write up which OWASP-LLM mitigations reduce the risk and which don't.

### 🔴 Agent & tool-use security
**Prerequisites:** OWASP LLM Top 10 & prompt injection, AuthN/AuthZ & session security
**Tracks:** AI/ML & LLM security
**Resources:**
- OWASP — *Agentic Security Initiative* / agentic threats and mitigations (🆓)
- Anthropic — Model Context Protocol (MCP) and tool-use docs (🆓)
- Google and Microsoft — agent security guidance (🆓)
**Study approach:** The moment a model can take real actions — call tools, run code, spend money — prompt injection becomes remote code execution by proxy. This is the fastest-growing and least-understood area in security. Learn to scope tool permissions tightly, sandbox execution, require human-in-the-loop for high-impact actions, and treat the model as a confused deputy that an attacker can weaponize against your own privileges. The habit that matters: an agent should hold the least privilege that lets it do its job, enforced *outside* the model.
**Project:** Take an agent with a couple of tools, exploit it via injection to misuse a tool, then re-architect it with per-tool authorization, a sandbox, and a human-confirmation gate on the dangerous action — and show the same attack now failing.

### 🔴 AI-generated code auditing
**Prerequisites:** Secure coding & code review, SAST / DAST & fuzzing
**Tracks:** AI/ML & LLM security · Application security
**Resources:**
- GitHub Copilot and Claude Code — security documentation (🆓)
- Semgrep — rules for reviewing AI-generated code (🆓)
- Research on "slopsquatting" / hallucinated dependencies (🆓)
**Study approach:** AI now writes a large and growing share of production code, and it produces insecure patterns and *hallucinated dependencies* (non-existent packages an attacker can then register and poison) at scale. This is exactly your software + security combination applied to a brand-new, high-demand problem. Learn to review AI output specifically: verify every imported dependency exists and is the intended one, check for insecure defaults, and scale review with automation because the volume defeats manual-only review. The habit that matters: never merge AI-written code you'd not accept from a junior — and verify its dependencies are real.
**Project:** Generate a nontrivial feature with an AI coding tool, security-review the output, and document every issue — insecure defaults, missing validation, and any hallucinated or typosquat-prone dependency — then build a CI check that flags at least one of those classes automatically.

### 🔴 Model & data supply-chain security
**Prerequisites:** Software supply chain & SBOM, ML / LLM systems literacy
**Tracks:** AI/ML & LLM security · DevSecOps & supply chain
**Resources:**
- safetensors and model-scanning tools (🆓)
- Hugging Face — security documentation (🆓)
- NIST and MITRE — data-poisoning and model-integrity literature (🆓)
**Study approach:** Models and datasets are software artifacts with their own supply chain, and it's currently under-defended. Learn the concrete risks: unsafe serialization formats (pickle can execute arbitrary code on load), poisoned training data and weights, backdoored models on public hubs, and the absence of provenance. Reuse the Phase 2 supply-chain toolkit — signing, SBOMs, provenance — for ML artifacts. The habit that matters: scan and verify a model before loading it exactly as you would a dependency.
**Project:** Demonstrate the pickle-deserialization risk on a crafted model file in a sandbox, then build a "safe model intake" check: format validation (prefer safetensors), scanning, and provenance/signature verification before a model is allowed into your pipeline.

### 🟡 Adversarial ML & model robustness
**Prerequisites:** ML / LLM systems literacy
**Tracks:** AI/ML & LLM security
**Resources:**
- MITRE ATLAS — adversarial threat landscape for AI systems (🆓)
- IBM — *Adversarial Robustness Toolbox (ART)* (🆓)
- NIST — *AI 100-2: Adversarial Machine Learning* taxonomy (🆓)
**Study approach:** Beyond prompt injection lies the classical adversarial-ML canon: evasion (adversarial examples), model extraction/stealing, membership inference (privacy leakage), and data-poisoning backdoors. You need literacy in all of them and hands-on depth in the ones relevant to systems you'll defend. MITRE ATLAS is the ATT&CK-equivalent map of these techniques. The habit that matters: enumerate the ML-specific threats with ATLAS, not just the classical AppSec ones.
**Project:** Use ART to craft an adversarial example that fools a small image classifier, then apply one defense (adversarial training or input preprocessing) and quantify how much robustness it buys — and what it costs in clean accuracy.

### 🟡 Data privacy & PETs
**Prerequisites:** Applied cryptography, ML / LLM systems literacy
**Tracks:** AI/ML & LLM security · Governance, risk & compliance
**Resources:**
- Dwork & Roth — *The Algorithmic Foundations of Differential Privacy* (🆓)
- OpenMined and Opacus — federated learning and DP tutorials (🆓)
- NIST — privacy framework (🆓)
**Study approach:** Training and inference on personal data collide directly with privacy law (GDPR, Chile's Law 21.719) and with real leakage risks like model memorization and membership inference. Learn the privacy-enhancing toolkit — differential privacy, federated learning, anonymization and its limits — well enough to advise what's feasible. This is where AI security meets GRC. The habit that matters: assume a model can leak its training data, and design privacy in rather than promising it in policy.
**Project:** Train a small model with and without differential privacy (Opacus), then run a membership-inference attack against both and measure how much DP reduces the leakage — and what accuracy it costs.

### 🟡 AI red-teaming & security evals
**Prerequisites:** OWASP LLM Top 10 & prompt injection, Pentesting & exploitation basics
**Tracks:** AI/ML & LLM security
**Resources:**
- Microsoft — *PyRIT* (Python Risk Identification Tool) (🆓)
- NVIDIA — *garak* LLM vulnerability scanner (🆓)
- Anthropic and OpenAI — red-teaming methodology writeups (🆓)
**Study approach:** One-off manual testing doesn't scale to systems that change with every model update, so the goal is *repeatable* security evaluation wired into CI. Learn systematic jailbreak and harm probing, automated red-team tooling, and how to turn findings into a regression suite that runs on every deploy. This blends your pentesting instinct with an engineering pipeline. The habit that matters: every AI vulnerability you find becomes a permanent test case, not a fixed one-off.
**Project:** Build an automated security eval suite for an LLM app using garak or PyRIT, covering prompt injection and data-leakage cases, and integrate it into CI so a regression (a newly succeeding jailbreak) fails the build.

---

## PHASE 6: Detection, Response & Assurance

### 🔴 Detection engineering & threat hunting
**Prerequisites:** Logging, monitoring & SIEM
**Tracks:** Cloud & infra security
**Resources:**
- Sigma — generic detection-rule format (🆓)
- MITRE ATT&CK — adversary technique knowledge base (🆓)
- The DFIR Report and detection.fyi — real detections (🆓)
**Study approach:** Prevention fails eventually, so detection is what bounds the damage. Learn to write detections as code (Sigma rules), map your coverage to ATT&CK techniques to find blind spots, and hunt proactively for activity your alerts miss. The skill that separates good from great is tuning: a detection that cries wolf gets ignored. The habit that matters: every detection ships with a documented ATT&CK mapping and a tested false-positive rate.
**Project:** Write three Sigma detection rules for distinct ATT&CK techniques, test them against sample logs (benign and malicious), map your coverage on the ATT&CK Navigator, and document the gaps you'd prioritize next.

### 🔴 Incident response & forensics
**Prerequisites:** Detection engineering & threat hunting
**Tracks:** Cloud & infra security · Application security
**Resources:**
- NIST — *SP 800-61: Computer Security Incident Handling Guide* (🆓)
- Don Murdoch — *Blue Team Handbook* (💰)
- TheHive and Velociraptor — IR platforms (🆓)
**Study approach:** When (not if) something gets through, a calm, practiced process is the difference between a contained incident and a disaster. Learn the IR lifecycle (prepare, detect, contain, eradicate, recover, learn), evidence preservation and chain of custody, and cloud/host forensics basics. Emphasize the blameless post-incident review — the learning step is where security actually improves. The habit that matters: preserve evidence before you remediate, and write the timeline as you go.
**Project:** Run a tabletop incident-response exercise for a realistic scenario (leaked credential → cloud data access), produce the incident timeline and containment steps, and write a blameless post-incident review with concrete follow-up actions.

### 🟡 Threat intel & MITRE ATT&CK
**Prerequisites:** Detection engineering & threat hunting
**Tracks:** Cloud & infra security
**Resources:**
- MITRE ATT&CK and ATT&CK Navigator (🆓)
- MISP — threat-intelligence sharing platform (🆓)
- David Bianco — *The Pyramid of Pain* (🆓)
**Study approach:** Threat intelligence turns "attackers exist" into "these techniques target systems like ours, so defend these first." Learn to consume and operationalize IOCs and adversary TTPs, and internalize the Pyramid of Pain — why detecting behaviors (TTPs) hurts attackers far more than blocking hashes. The habit that matters: prioritize detection and defense by the attacker's cost to adapt, not by the ease of collecting the indicator.
**Project:** Pick a threat actor or campaign from public reporting, map its techniques onto the ATT&CK Navigator, and produce a prioritized defensive plan for your environment based on which of its TTPs you currently can't detect.

### 🟡 Vulnerability management program
**Prerequisites:** Dependency & vulnerability management
**Tracks:** DevSecOps & supply chain · Governance, risk & compliance
**Resources:**
- CISA — vulnerability-management guidance (🆓)
- FIRST — CVSS and EPSS (🆓)
- Nuclei and OpenVAS — scanners (🆓)
**Study approach:** This is the unglamorous program that prevents most real breaches: knowing what you have, scanning it continuously, and fixing what matters on a schedule you can defend. The engineering is easy; the hard part is prioritization, SLAs, and metrics that survive contact with reality. It bridges the technical and GRC worlds. The habit that matters: measure mean-time-to-remediate for exploitable vulns and drive it down, rather than chasing the raw finding count to zero.
**Project:** Design a lightweight vulnerability-management program for a small org: asset inventory, scanning cadence, risk-based SLA tiers (using EPSS/KEV), and a one-page metrics dashboard — then run one cycle end to end on a real environment.

---

## PHASE 7: Governance, Risk & Compliance

### 🔴 Security governance & risk
**Prerequisites:** Security fundamentals & threat modeling
**Tracks:** Governance, risk & compliance
**Resources:**
- NIST — *Cybersecurity Framework 2.0* (🆓)
- ISO/IEC 27001 — overview and control set (🆓)
- CIS — *Critical Security Controls v8* (🆓)
**Study approach:** Even if you never want to be a GRC specialist, you need literacy here because this is how security gets funded and prioritized. Learn risk assessment (likelihood × impact), the major control frameworks and how they map to each other, and — the real skill — translating technical risk into the business language executives act on. The habit that matters: frame every security ask as a risk decision with a cost, not a technical demand.
**Project:** Produce a risk register for a small organization mapped to NIST CSF 2.0: top ten risks, current controls, residual risk, and a prioritized treatment plan with rough costs.

### 🔴 AI governance & assurance
**Prerequisites:** Security governance & risk, OWASP LLM Top 10 & prompt injection
**Tracks:** Governance, risk & compliance · AI/ML & LLM security
**Resources:**
- NIST — *AI Risk Management Framework* and Generative AI profile (🆓)
- EU — *AI Act* text, risk tiers and compliance timelines (🆓)
- ISO/IEC 42001 — AI management system standard (🆓)
**Study approach:** AI governance is going from "nice to have" to legally required, and almost nobody can operationalize it yet — that scarcity is your opportunity. Learn to turn high-level frameworks into concrete engineering artifacts: model cards, risk classifications, data-governance records, and the audit evidence a regulator will ask for under the EU AI Act. This is where your Phase 5 technical depth becomes strategic value. The habit that matters: make governance produce evidence automatically as a byproduct of the pipeline, not as a separate paperwork exercise.
**Project:** Take an AI feature and produce its governance package: an EU AI Act risk-tier assessment, a model card, a mapping to the NIST AI RMF functions, and the list of controls and evidence you'd need to pass an audit.

### 🟡 Compliance & audit
**Prerequisites:** Security governance & risk
**Tracks:** Governance, risk & compliance
**Resources:**
- AICPA SOC 2 and PCI-DSS — quick references (🆓)
- GDPR and Chile *Law 21.719* (data protection) — primers (🆓)
- OpenControl and compliance-as-code approaches (🆓)
**Study approach:** Compliance is the price of doing business in regulated sectors — fintech (PCI-DSS, SOC 2), anything with EU users (GDPR), and now Chile's new data-protection law. You don't need to become an auditor, but you should be able to map controls to requirements and, ideally, automate evidence collection so audits stop being fire drills. The habit that matters: collect compliance evidence continuously and automatically, so an audit is a query rather than a scramble.
**Project:** Pick one framework (SOC 2 or PCI-DSS), map five of its controls to concrete technical implementations in a system you know, and automate evidence collection for at least one of them.

### 🔴 Secure SDLC & program design
**Prerequisites:** Secure coding & code review, CI/CD security, Security governance & risk
**Tracks:** Governance, risk & compliance · DevSecOps & supply chain
**Resources:**
- OWASP — *SAMM* and *BSIMM* maturity models (🆓)
- Microsoft — *Security Development Lifecycle (SDL)* (🆓)
- Google / O'Reilly — *Building Secure and Reliable Systems* (🆓)
**Study approach:** This node ties the whole roadmap together: embedding security across the entire lifecycle from design to deployment, not bolting it on at the end. Learn maturity models to assess where an organization stands, the security-champions model to scale beyond a central team, and how to add security gates that developers accept because they don't destroy velocity. The habit that matters: make the secure path the easy path — paved roads beat policies.
**Project:** Assess a team's secure-SDLC maturity with OWASP SAMM, then propose a concrete 12-month improvement plan: which gates to add first, where to place security champions, and the two "paved road" defaults that would remove the most risk with the least friction.

---

## PHASE 8: Frontier & Leadership

### 🟢 Formal methods & verification
**Prerequisites:** Secure coding & code review
**Tracks:** Application security
**Resources:**
- Hillel Wayne — *Learn TLA+* (🆓)
- Benjamin Pierce — *Software Foundations* (🆓)
- seL4 — verified microkernel papers (🆓)
**Study approach:** A long-horizon bet: instead of testing for the absence of bugs, *prove* properties hold. Learn model checking with TLA+ to find design-level concurrency and protocol flaws before implementation, and get literacy in verification for the highest-assurance components. This overlaps directly with the Control roadmap's formal-methods and safety nodes — verification is a durable, AI-resistant skill. The habit that matters: specify the property precisely enough that a machine could check it.
**Project:** Model a concurrent or distributed protocol you care about (a locking scheme, an auth handshake) in TLA+ and use the model checker to find a race or safety violation, then fix the spec and re-verify.

### 🟢 Confidential computing & TEEs
**Prerequisites:** Applied cryptography, Cloud security fundamentals
**Tracks:** Cloud & infra security
**Resources:**
- Confidential Computing Consortium — docs (🆓)
- Intel SGX, AMD SEV, AWS Nitro Enclaves — docs (🆓)
- Enarx and remote-attestation primers (🆓)
**Study approach:** A frontier bet on protecting data *in use*, not just at rest and in transit — trusted execution environments and remote attestation let you run sensitive workloads even on infrastructure you don't fully trust. This matters increasingly for regulated data and for running AI on sensitive inputs. Understand the trust model, its limits (side channels), and the attestation flow. The habit that matters: be precise about exactly whom a TEE protects you from, and whom it doesn't.
**Project:** Run a small workload inside a TEE (AWS Nitro Enclave or an SGX enclave), implement remote attestation so a client only sends data after verifying the enclave, and document the exact threat model — what this defends against and what it doesn't.

### 🟢 AI security research frontier
**Prerequisites:** Adversarial ML & model robustness, AI red-teaming & security evals
**Tracks:** AI/ML & LLM security
**Resources:**
- arXiv — cs.CR and cs.AI (🆓)
- Anthropic and Google DeepMind — safety and security research (🆓)
- AI Village / DEF CON — AI red-team writeups (🆓)
**Study approach:** The genuine research edge of your differentiator: novel jailbreak classes, agentic-system exploits, interpretability turned to defense, and the security side of alignment. This field is young enough that a working engineer who reads papers and builds can contribute real findings. Stay skeptical of hype in both directions. The habit that matters: reproduce a paper's attack or defense before you believe its claims.
**Project:** Reproduce a recent AI-security paper's core result (an attack or a defense) on your own small setup, write up where it held and where it didn't, and publish it — a reproduction with honest caveats is a genuine contribution.

### 🟡 Security leadership & communication
**Prerequisites:** Secure SDLC & program design
**Tracks:** All specializations
**Resources:**
- Camille Fournier — *The Manager's Path* (💰)
- Google — *Technical Writing* courses (🆓)
- CISA and sector CISO playbooks (🆓)
**Study approach:** Senior security work is mostly influence without authority — you rarely own the systems you're responsible for securing, so you win through trust, clear risk communication, and writing that executives and engineers both act on. Practice translating a technical finding into a business risk and a recommended decision. Your trilingual profile (ES/EN/DE) is a multiplier here for regional and DACH roles. The habit that matters: lead with the risk and the decision, then the technical detail for those who want it.
**Project:** Write a one-page security risk brief for a real finding aimed at a non-technical executive — the risk, the business impact, the options with costs, and your recommendation — and get feedback from someone outside security on whether the decision is clear.

### 🔴 Security architecture
**Prerequisites:** Network security & zero trust, Identity federation (OAuth/OIDC/SAML), Secure SDLC & program design
**Tracks:** All specializations
**Resources:**
- Google / O'Reilly — *Building Secure and Reliable Systems* (🆓)
- SABSA and published security reference architectures (🆓)
- AWS and Azure — security reference architectures (🆓)
**Study approach:** This is the capstone the whole path builds toward: designing defense-in-depth across identity, network, data, and application layers so that no single failure is catastrophic. Learn to reason about a whole system's security posture, make and document trade-offs, and produce reference architectures others can build against. Pair it with the AI-security layer to become the rare architect who can secure both classical and AI systems. The habit that matters: design so that every control has a backup and no boundary is a single point of failure.
**Project:** Produce a security architecture for a realistic AI-enabled application: a diagram with trust boundaries and controls at every layer (identity, network, data, app, and the AI/agent layer), the key trade-offs you made, and the top residual risks with owners.

---

## Parallel Track: English (and German) Proficiency ⭐ HIGHEST ROI

Security is a global, English-first field — the best training (PortSwigger, OWASP, SANS), the primary research, and the highest-paying remote roles are all in English. Keep raising your English in parallel with everything above; it is the single highest-ROI investment for accessing international work, and it compounds. Your **German** is a distinct, rarer asset: the DACH region (Germany, Austria, Switzerland) has strong demand for security engineers, heavy regulation (so security and compliance skills are prized), and far fewer English-only candidates competing for German-speaking roles. Treat ES/EN/DE as three market accesses — Latin America, global remote, and DACH — not one.

**Practice:** write your project reports and threat models in English; read security research and advisories in English; and once a quarter, read one German-language security or compliance source (BSI — the German federal security office — publishes excellent free guidance) to keep the technical vocabulary alive.

---

## Certifications — Priority Order

Certifications matter more in security than in most of software, because they're a common HR filter and, for consulting/enterprise, a trust signal. But they are a complement to demonstrated work (found vulnerabilities, hardened systems, published writeups), never a substitute.

### Tier 1 — Foundational signal (do early if job-hunting)
- **CompTIA Security+** — broad baseline, common HR filter, cheap. Skip if you already have equivalent demonstrated knowledge, but it unblocks résumé screens.
- **(ISC)² Certified in Cybersecurity (CC)** — free entry-level cert, useful for the vocabulary and the ATS keyword.

### Tier 2 — Track-specific, high value
- **Cloud security specialty** — AWS Certified Security – Specialty *or* Azure AZ-500. Pick the cloud your market uses; high ROI for the Cloud track.
- **Certified Kubernetes Security Specialist (CKS)** — the strong signal for the DevSecOps/container track (requires CKA first).
- **OSCP (OffSec)** — the respected hands-on offensive cert; pursue only if you want AppSec/pentest roles and can invest the time/cost.

### Tier 3 — Governance & senior signal
- **CISSP** — the management-track standard; broad, requires experience, valued for senior/architect and DACH enterprise roles. A multi-year goal, not a starting point.
- **CCSP** — cloud-security governance counterpart to CISSP.

### AI-security specific
- The AI-security certification landscape is immature and changing fast (early entrants exist but none are yet an established standard). **Do not chase them yet** — a public portfolio of AI red-team writeups, reproduced papers, and eval suites is worth far more here than any current badge. Reassess in 12 months.

---

## Books — Essential Reading

- **The Web Application Hacker's Handbook** — Stuttard & Pinto — the AppSec classic (pair with the free PortSwigger academy, which is its spiritual successor).
- **Secure by Design** — Johnsson, Deogun & Sawano — secure coding as a design discipline, aimed at software engineers.
- **Serious Cryptography** — Aumasson — applied crypto without the math overload.
- **Building Secure and Reliable Systems** — Google / O'Reilly (🆓 online) — how security and reliability are engineered at scale; the best single systems-security book.
- **Threat Modeling: Designing for Security** — Shostack — the standard reference for structured threat modeling.
- **Container Security** — Rice — the definitive container/Kubernetes security book.
- **Alice and Bob Learn Application Security** — Janca — an approachable, practical AppSec starting point.

---

## Critical Path (Summary)

For your profile (software engineer, Chile fintech/energy + DACH remote), the highest-return route through this roadmap:

1. **Foundations (P0)** — you'll move fast here; don't skip threat modeling.
2. **AppSec spine (P1)** — OWASP Top 10 → secure coding → auth. This is where your software background pays off first and fastest.
3. **AI security (P5)** — start ML literacy early and run it in parallel with P1–P2; this is the differentiator and the reason to choose this path over generic AppSec.
4. **DevSecOps / Cloud (P2/P3)** — pick the one your target employers use; both make you employable now.
5. **Crypto & identity (P4)** — enough to use correctly; go deep only for the cloud/identity track.
6. **GRC & architecture (P7/P8)** — the seniority layer; AI governance (EU AI Act) is where P5 + GRC compound into a rare, strategic role.

**Primary recommendation:** commit first to **AppSec + AI security** as a paired specialization — it's closest to your current skills, has the strongest near-term demand, and the AI half is a genuine, defensible differentiator. Add **Cloud** as the practical third once the spine is solid.

---

*Compiled: 2026. Reassess and update every 6 months — the classical security core is stable, but the AI/ML security nodes (Phase 5) and AI governance (EU AI Act timelines, NIST AI RMF profiles) are moving fast and will date quickest.*
*Sources: OWASP (Top 10, ASVS, LLM Top 10, Agentic Security Initiative), NIST (CSF 2.0, AI RMF, SP 800-series), MITRE ATT&CK & ATLAS, PortSwigger Web Security Academy, CIS Benchmarks, SLSA, EU AI Act, ISO/IEC 27001 & 42001.*
