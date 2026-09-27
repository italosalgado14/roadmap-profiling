# AI Security & Trustworthy Systems Roadmap
## Application, Cloud & AI Security Engineer Path

---

## Executive Summary

**Assumed starting point.** This roadmap assumes a STEM degree and somewhere between little professional experience and solid adjacent software experience, but no particular background in security. If you already work in part of this, tick those nodes off in the curriculum graph and start where the gaps are: clicking a node shows the dependency chain it rests on, so the graph doubles as a gap analysis.

**How the plan is paced.** Each phase is about 3 months (a quarter) of study. There are eight phases, P0 to P7, so a full specialization takes about two years. Every specialization takes 2 to 5 courses in every phase: the shared spine plus that track's own courses, so no quarter sits idle and none is overloaded. Each phase tab opens with a short list of which courses each specialization takes that quarter. Electives are optional extras on top.

**Security has the strongest case across AI scenarios.** If AI progress plateaus, the huge base of software still has to be defended. If AI accelerates, the attack surface explodes: more code shipped faster, more autonomous agents taking real actions, more machine-generated code that no human fully read. Either way, someone has to secure it, and that work is hard to automate away, because security is fundamentally adversarial: the defender's job changes the moment the attacker adapts. For a software engineer who wants a **durable, AI-resilient career**, security is the highest-floor bet on the board.

This roadmap targets the **Application, Cloud & AI Security Engineer**: not a compliance box-ticker and not a lone pentester, but the engineer who builds security *into* systems and can reason about the new AI-specific threats on top of the classical stack. An existing software background is the advantage here: the strongest AppSec and DevSecOps engineers come from building software, not from a certification mill. Engineers who have built systems already understand how they break.

**The AI-security wedge is the differentiator, and it starts early.** Classical security roles have a large, established pool of practitioners. What few people can do yet is secure *AI systems*: prompt injection and indirect injection, agent/tool-use abuse, auditing the flood of AI-generated code, model and data supply-chain integrity, and governing all of it under the EU AI Act and NIST AI RMF. This is a young subfield with few experienced practitioners, and the software-plus-security combination is rare. No labour-market source yet measures AI security as a skill of its own (see the demand evidence below), so treat it as a bet on direction rather than a counted shortage. Lean into it, but build it on a real security foundation, because "AI security" without AppSec fundamentals is just prompt-engineering trivia. That is why ML/LLM systems literacy (Phase 1) and the OWASP LLM Top 10 (Phase 2) sit in the spine every track takes, right after the AppSec core, and why each track then carries AI-specific courses of its own.

**Honest positioning.** Security is a broad field, and nobody is world-class at all of it. This roadmap gives a **spine** (fundamentals every security engineer needs) plus **four specializations**, each a full eight-phase plan. Pick one. For a software engineer moving laterally into security, the highest-return choice is **Application security**, which in this graph already pairs AppSec with the AI-application courses (agent security, AI-generated code auditing, AI red-teaming); **Cloud & infra security** is the natural one to grow into next, because everything now runs there. Governance is not a separate specialization: its fundamentals sit in the spine, because governance is worth literacy even if you never specialize in it (it is how security gets funded and how the EU AI Act turns into engineering work), and the deeper governance work lives in the AI security & governance specialization, where it meets the technical AI work.

**Where the demand evidence points.** Every figure here comes from the sources registered in the roadmap standards (`market-sources.md`, checked on 2026-09-26) and carries its date, horizon and geography. Job titles are translated into the courses in this graph that serve them.

*Medium term (2 to 5 years):*
- **Security fundamentals & threat modeling, Cloud security fundamentals, Detection engineering & threat hunting** (the spine and Cloud & infra security): [BLS](https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm) (2025 to 2035, released Aug 2026, US) projects information security analysts to grow 21%, about 14,100 openings a year, citing the increased use of AI. The [WEF Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/) (Jan 2025; employer survey, global, 2025 to 2030) ranks networks and cybersecurity the second fastest-growing skill and security management specialists the fifth fastest-growing job.
- **CI/CD security, Software supply chain & SBOM, SAST / DAST & fuzzing** (DevSecOps & supply chain, Application security): the [McKinsey Technology Trends Outlook 2026](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20top%20trends%20in%20tech%202026/mckinsey%20technology%20trends%20outlook%202026.pdf) (Sep 2026, mainly English-speaking countries) counts cybersecurity postings up 6% in 2024 to 2025, the first rise since the post-pandemic pullback, with hiring strengthening for software engineers who build security tooling.
- **AI-generated code auditing, Agent & tool-use security** (Application security, AI security & governance): the [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai) finds 84% of developers using or planning to use AI tools while 46% distrust their accuracy, which is the volume of machine-written code that needs review. Gartner's [Top Strategic Technology Trends for 2026](https://www.gartner.com/en/newsroom/press-releases/2025-10-20-gartner-identifies-the-top-strategic-technology-trends-for-2026) (Oct 2025) predicts that over half of enterprises will use AI security platforms by 2028, a technology-adoption prediction. No labour-market source yet counts AI security as its own skill cluster: the Stanford AI Index 2026 job-posting data does not isolate it.
- **Geography:** in Germany, [Bitkom](https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert) (Sep 2026) counts 79,000 unfilled IT positions, with IT security among the five profiles firms seek most. [Cedefop](https://www.cedefop.europa.eu/en/news/cedefop-updates-skills-forecast-new-data-guide-europes-skills-and-labour-market-policy-2035) (Jul 2026, 2023 to 2035) projects EU ICT professionals and technicians to grow about 2.5% a year, and about 1.3% a year in Germany.

*Counter-signals:* Bitkom's German shortage has halved since 2023 (from 149,000), and McKinsey's +6% is a recovery from a pullback, not a boom.

*Long term (5 to 15 years):* no quantitative forecast reaches past 2035. The case is a scenario argument, not a projection: if AI progress plateaus, the existing software base still has to be defended; if it accelerates, more machine-written code and more autonomous agents mean more to audit. The WEF's [Four Futures](https://www.weforum.org/stories/2026/01/here-are-four-ways-ais-impact-on-job-markets-might-take-shape/) (Jan 2026) keeps both paths open, and security work sits in all of them.

**Three priority levels** run throughout, shown as a tag after each course title:
- `critical`: the non-negotiable spine for your chosen track.
- `desirable`: high-ROI competitive edge, but not blocking.
- `frontier`: long-horizon bets; high-assurance or research-adjacent.

**Four specializations** (pick one; the graph's track filter shows its courses, and the phase tabs explain the study material per node):
- **Application security (AppSec)**: secure coding, code review, vulnerability classes, pentesting, API security and dependency risk, plus the AI-application attack surface (agents, AI-generated code, AI red-teaming). The closest to a working software engineer's existing skill set.
- **DevSecOps & supply chain**: pipeline security, IaC, containers/Kubernetes, artifact signing, SBOMs and the model supply chain: security embedded in delivery.
- **Cloud & infra security**: cloud IAM, network/zero-trust, PKI and key management, posture management, detection and response.
- **AI security & governance**: *the differentiator:* agent security, adversarial ML, model and data supply chain, privacy, AI red-teaming, and the governance half (compliance, secure-SDLC programs, and AI governance under the EU AI Act, NIST AI RMF and ISO 42001).

**Resource tags:**
- **Best match:** the first resource under each course, and the one to start with.
- (free): free to use, or free to audit where noted.
- (paid): paid; where the cost is known it reads (paid, ~$N).
- (Coursera Plus): included in a Coursera Plus subscription.

**Per-node sections:** every node lists `Prerequisites`, `Tracks`, `Resources` (best match first), a `Study approach`, and a `Project`. The project is the proof of competence: a vulnerability you found and reported, a pipeline you hardened, a red-team writeup or a passing eval suite beats any certificate.

---

## PHASE 0: Systems, networks & threat modeling

**This phase by specialization.** All four specializations take the same 5 spine courses below.
- **Elective:** Go / systems programming, optional for DevSecOps & supply chain and Cloud & infra security

### Linux & CLI `critical`
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- **Best match:** Linux Journey: linuxjourney.com (free)
- MIT, *The Missing Semester of Your CS Education* (free)
- OverTheWire, *Bandit* wargame, a hands-on shell/security ladder (free)
**Study approach:** You already use a shell; treat this as filling gaps, not a first course. Drill the security-relevant parts: file permissions and setuid, processes and `/proc`, systemd units, users/groups, and enough `tcpdump`/`ss`/`iptables` to reason about what a box is doing on the network. The Bandit wargame is the fastest way to make CLI fluency stick because every level is a small privilege/enumeration puzzle.
**Project:** Harden a fresh Linux VM to a CIS-style baseline with an idempotent script (disable unused services, configure SSH keys and a firewall, enable auditd) and write a one-page note on what each control defends against.

### Python `critical`
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- **Best match:** Al Sweigart, *Automate the Boring Stuff with Python* (free)
- Justin Seitz & Tim Arnold, *Black Hat Python*, 2nd ed. (paid)
- `requests` / `httpx` and `argparse` official docs (free)
**Study approach:** You program already, so skip syntax and focus on the security toolkit: HTTP clients, parsing (regex, `lxml`, JSON), building small CLIs, and reading/writing the file and network I/O that scanners and CI checks are made of. The habit that matters: whenever you find yourself doing a security check by hand twice, script it.
**Project:** Write a small CLI security tool (e.g. a link/secret scanner or a header-audit tool for a list of URLs) with `argparse`, type hints, tests, and a `pyproject.toml`. Wire it into a GitHub Actions job so it runs on every push.

### Networking & protocols `critical`
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- **Best match:** Kurose & Ross, *Computer Networking: A Top-Down Approach* (paid)
- Wireshark: official docs and sample captures (free)
- Cloudflare Learning Center: TLS, DNS, DDoS explainers (free)
**Study approach:** Center everything on "what can go wrong on the wire." Get fluent in the TCP/IP stack, DNS, the TLS handshake, HTTP semantics, proxies and NAT. Use Wireshark to actually *watch* a TLS handshake and an HTTP request: reading packets removes the mystery from most network attacks. The habit that matters: for any protocol, ask where authentication, integrity and confidentiality live (or don't).
**Project:** Capture and annotate a full TLS 1.3 handshake and a plaintext HTTP request in Wireshark, labelling each field and marking exactly what an on-path attacker can read or tamper with in each case.

### Web platform & HTTP `critical`
**Prerequisites:** Networking & protocols
**Tracks:** All specializations
**Resources:**
- **Best match:** MDN Web Docs: HTTP, cookies, CORS, security headers (free)
- PortSwigger, *Web Security Academy* (free)
- web.dev: security & privacy guides (free)
**Study approach:** Most of a security career touches the web, so build a precise mental model: the request/response lifecycle, cookies and their attributes, the same-origin policy, CORS, and content security policy. PortSwigger's academy is the single best free resource in all of security: start it here and you'll return to it for years. The habit that matters: know, for any web feature, which origin boundary it crosses.
**Project:** Stand up a deliberately small web app and demonstrate three security headers (CSP, `Set-Cookie` flags, HSTS) changing real browser behavior: show the attack working with the header off and blocked with it on.

### Security fundamentals & threat modeling `critical`
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- **Best match:** Adam Shostack, *Threat Modeling: Designing for Security* (paid)
- OWASP, *Threat Modeling Cheat Sheet* (free)
- CompTIA Security+: exam objectives as a vocabulary map (free)
**Study approach:** Before any tool, learn to think in trust boundaries. Internalize the CIA triad, attacker goals, and a structured method (STRIDE or attack trees) to enumerate what can go wrong in a design. Use the Security+ objectives purely as a checklist of terms you should recognize, not as a course to grind. The habit that matters: for every system you touch, be able to draw the data-flow diagram and name its trust boundaries.
**Project:** Produce a STRIDE threat model for a small real system (your Python tool's deployment, or a toy web app): a data-flow diagram, the threats per element, and the top five mitigations ranked by risk.

### Go / systems programming `desirable`
**Prerequisites:** none (start here)
**Tracks:** Elective for DevSecOps & supply chain · Cloud & infra security
**Resources:**
- **Best match:** *A Tour of Go*, go.dev (free)
- *Go by Example* (free)
- Donovan & Kernighan, *The Go Programming Language* (paid)
**Study approach:** Go is the lingua franca of cloud-native security tooling: Kubernetes, Terraform providers, Trivy, and most CNCF projects are written in it. You don't need mastery; you need to read the source of the tools you rely on and write small utilities and admission controllers. Concurrency (goroutines, channels) and the standard library's networking/crypto packages are the high-value parts.
**Project:** Write a small Go CLI that queries a cloud or Kubernetes API and flags one misconfiguration (e.g. public buckets, or pods running as root), then read the source of one real tool (Trivy or a Terraform provider) to see how it does the same at scale.

---

## PHASE 1: Web security, secure code & ML literacy

**This phase by specialization.** All four specializations take the same 4 spine courses below.

### OWASP Top 10 & web vulns `critical`
**Prerequisites:** Web platform & HTTP, Security fundamentals & threat modeling
**Tracks:** All specializations
**Resources:**
- **Best match:** OWASP, *Top 10* project (free)
- PortSwigger, *Web Security Academy* labs (free)
- PentesterLab: guided vulnerability exercises (paid, with a free tier)
**Study approach:** This is the core vocabulary of the whole field. Work the PortSwigger labs hands-on (injection, broken access control, SSRF, XSS, insecure deserialization) until you can exploit each class *and* explain the fix. Don't memorize the list; understand the root cause behind each category (trusting untrusted input, missing authorization checks). The habit that matters: whenever you learn a vuln, immediately learn its canonical remediation.
**Project:** Complete the PortSwigger access-control, SSRF, and SQL-injection topic tracks, then write a short internal-style report on one lab: reproduction steps, impact, CVSS-style rating, and remediation.

### Secure coding & code review `critical`
**Prerequisites:** Python, OWASP Top 10 & web vulns
**Tracks:** All specializations
**Resources:**
- **Best match:** OWASP, *Cheat Sheet Series* (free)
- OWASP, *Application Security Verification Standard (ASVS)* (free)
- Johnsson, Deogun & Sawano, *Secure by Design* (paid)
**Study approach:** This is where a software background compounds hardest. Learn the defensive patterns (input validation, parameterized queries, output encoding, safe deserialization, secure defaults) and then practice the harder skill of *reviewing a diff* for the vulnerability automated tools miss. ASVS gives you a concrete, level-based checklist to review against. The habit that matters: review for what the code *allows*, not just what it does.
**Project:** Do a written security review of a real open-source pull request or a deliberately-flawed app, using an ASVS checklist; file at least two findings with concrete fixes and reference the exact ASVS requirement each maps to.

### AuthN/AuthZ & session security `critical`
**Prerequisites:** Web platform & HTTP
**Tracks:** All specializations
**Resources:**
- **Best match:** OWASP, *Authentication* and *Session Management* cheat sheets (free)
- PortSwigger: access-control and authentication labs (free)
- NIST, *SP 800-63B* digital identity guidelines (free)
**Study approach:** Broken access control tops the OWASP list for a reason: it's the most common serious bug and the hardest to catch with scanners. Master password storage (Argon2/bcrypt), session tokens, MFA, and the difference between authentication and authorization. Study RBAC vs ABAC and the object-level checks that prevent one user reading another's data. The habit that matters: for every endpoint, ask "who is allowed, and where is that enforced?"
**Project:** Take a small app with an intentional broken-object-level-authorization bug, exploit it (access another user's record), then fix it with a proper server-side authorization check and prove the exploit no longer works.

### ML / LLM systems literacy `critical`
**Prerequisites:** Python
**Tracks:** All specializations
**Resources:**
- **Best match:** DeepLearning.AI: short courses on LLMs, RAG and agents (free)
- Alammar & Grootendorst, *Hands-On Large Language Models* (paid)
- Anthropic and OpenAI: developer documentation (free)
**Study approach:** Every track takes this course, because every track on this path ends up securing AI-enabled systems. You can't secure what you don't understand, so build a working model of how modern AI systems are actually assembled: tokenization and inference, embeddings and vector stores, retrieval-augmented generation, fine-tuning, and tool-using agents. You're not training frontier models: you're mapping the components and data flows so you can threat-model them. The habit that matters: for any AI feature, draw where untrusted data enters the model's context.
**Project:** Build a small RAG chatbot (retrieval + LLM) yourself, then draw its full data-flow and trust-boundary diagram: marking every point where user or third-party content reaches the model's prompt. This diagram is the input to every node that follows.

---

## PHASE 2: LLM risks, pipelines & cloud basics

**This phase by specialization.**
- **Spine (every track):** OWASP LLM Top 10 & prompt injection
- **Application security** (4 courses): the spine plus SAST / DAST & fuzzing; OS internals & memory model; Cloud security fundamentals
- **DevSecOps & supply chain** (4 courses): the spine plus SAST / DAST & fuzzing; CI/CD security; Cloud security fundamentals
- **Cloud & infra security** (4 courses): the spine plus CI/CD security; Cloud security fundamentals; Cloud IAM & least privilege
- **AI security & governance** (3 courses): the spine plus SAST / DAST & fuzzing; CI/CD security

### OWASP LLM Top 10 & prompt injection `critical`
**Prerequisites:** OWASP Top 10 & web vulns, ML / LLM systems literacy
**Tracks:** All specializations
**Resources:**
- **Best match:** OWASP GenAI Security Project, *LLM Top 10 2026* (free)
- Lakera *Gandalf: Agent Breaker* and prompt-injection primers (free)
- Simon Willison: ongoing writing on prompt injection (free)
**Study approach:** This is the defining vulnerability class of the AI era, and it has no clean fix: treat the model as a confused, gullible interpreter that cannot reliably separate instructions from data. Master direct prompt injection, *indirect* injection (malicious instructions hidden in retrieved documents or web pages), insecure output handling, and sensitive-information disclosure. Understand why input filtering is a mitigation, not a solution. The habit that matters: never let model output take a privileged action without an independent authorization check.
**Project:** Build a small LLM app with a tool or database lookup, then demonstrate both a direct and an indirect prompt injection that makes it misbehave (leak data or call a tool it shouldn't). Write up which OWASP-LLM mitigations reduce the risk and which don't.

### SAST / DAST & fuzzing `critical`
**Prerequisites:** Secure coding & code review
**Tracks:** Application security · DevSecOps & supply chain · AI security & governance
**Resources:**
- **Best match:** Semgrep and GitHub CodeQL: docs and rule-writing guides (free)
- OWASP ZAP: dynamic scanner (free)
- Google OSS-Fuzz and libFuzzer: docs (free)
**Study approach:** Learn to automate the search for bugs and, crucially, to tune out the noise: an AppSec engineer's value is often in *reducing* false positives, not generating alerts. Write your own Semgrep/CodeQL rules to catch a project-specific antipattern; that skill is rare and high-signal. Understand where each technique fits: SAST for source patterns, DAST for running behavior, fuzzing for input-handling robustness.
**Project:** Write a custom Semgrep rule that catches a real insecure pattern in a codebase you know, tune it to near-zero false positives on that repo, and add it to a CI job that fails the build on a match.

### OS internals & memory model `desirable`
**Prerequisites:** none (start here)
**Tracks:** Application security
**Resources:**
- **Best match:** Remzi & Andrea Arpaci-Dusseau, *Operating Systems: Three Easy Pieces* (free)
- *Nand2Tetris*, from logic gates to an OS (free)
- pwn.college: hands-on systems-security curriculum (free)
**Study approach:** This is optional unless you go deep on exploitation, but it pays off in judgment everywhere. Understand processes, syscalls, virtual memory, and the stack/heap well enough to see *why* memory-safety bugs happen and why languages like Rust and Go remove whole vulnerability classes. Don't chase binary-exploitation mastery unless it excites you: literacy is enough for most AppSec work.
**Project:** Work through a handful of pwn.college memory-corruption levels and write up one buffer-overflow end to end: the bug, why it's exploitable, and the two mitigations (stack canary, ASLR/NX) that would stop it.

### CI/CD security `critical`
**Prerequisites:** Secure coding & code review
**Tracks:** DevSecOps & supply chain · Cloud & infra security · AI security & governance
**Resources:**
- **Best match:** OWASP, *Top 10 CI/CD Security Risks* (free)
- GitHub, *Security hardening for GitHub Actions* (free)
- SLSA: supply-chain levels for software artifacts (free)
**Study approach:** Your CI system has production credentials and runs arbitrary code on every push: treat it as a crown-jewel asset. Learn the real attack paths: poisoned pipeline execution, token exfiltration, malicious pull-request workflows, and over-privileged runners. Pin actions to SHAs, scope tokens minimally, and isolate untrusted PR builds. The habit that matters: every pipeline secret should be short-lived and least-privilege.
**Project:** Harden a real GitHub Actions (or GitLab CI) pipeline: pin all actions to commit SHAs, replace long-lived secrets with OIDC-federated short-lived credentials, and document the attack each change prevents.

### Cloud security fundamentals `critical`
**Prerequisites:** Networking & protocols, Security fundamentals & threat modeling
**Tracks:** Application security · DevSecOps & supply chain · Cloud & infra security
**Resources:**
- **Best match:** AWS / Azure / GCP: well-architected security pillar docs (free)
- CIS Benchmarks: per-cloud hardening baselines (free)
- flAWS and CloudGoat: intentionally vulnerable cloud labs (free)
**Study approach:** Pick one cloud and go deep before going broad: the concepts transfer, the console details don't. Internalize the shared-responsibility model (what the provider secures vs. what you do), then the security primitives: identity, networking, storage, logging, and encryption. The flAWS and CloudGoat labs teach cloud attack paths by walking you through real misconfigurations. The habit that matters: assume every resource is public until you've proven otherwise.
**Project:** Work through the CloudGoat or flAWS scenarios in one cloud, then write up the misconfigurations that enabled each step and the exact IAM/networking change that would have blocked it.

### Cloud IAM & least privilege `critical`
**Prerequisites:** Cloud security fundamentals, AuthN/AuthZ & session security
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** AWS IAM and Microsoft Entra ID: docs (free)
- Rhino Security Labs: cloud privilege-escalation research (free)
- Cloudsplaining and pathfinding.cloud: IAM path-analysis tooling (free; PMapper has gone unmaintained)
**Study approach:** Cloud breaches are overwhelmingly IAM breaches: over-broad roles, forgotten access keys, and escalation paths through chained permissions. Master policy evaluation, roles vs. users, federation, and how attackers pivot from a low-privilege foothold to admin. Learn to right-size permissions with access analyzers rather than guessing. The habit that matters: grant the minimum permission that makes the task work, then verify with tooling that no escalation path remains.
**Project:** Map the privilege-escalation paths in a test cloud account with an IAM analysis tool, find one chain from a low-privilege principal to admin, and remediate it by tightening a single over-broad policy.

---

## PHASE 3: Cryptography, attack practice & supply chain

**This phase by specialization.**
- **Spine (every track):** Applied cryptography
- **Application security** (4 courses): the spine plus Pentesting & exploitation basics; API & mobile security; Agent & tool-use security
- **DevSecOps & supply chain** (4 courses): the spine plus Software supply chain & SBOM; Secrets management; IaC & policy as code
- **Cloud & infra security** (4 courses): the spine plus Secrets management; IaC & policy as code; Network security & zero trust
- **AI security & governance** (4 courses): the spine plus Agent & tool-use security; Adversarial ML & model robustness; Software supply chain & SBOM

### Applied cryptography `critical`
**Prerequisites:** Python
**Tracks:** All specializations
**Resources:**
- **Best match:** Jean-Philippe Aumasson, *Serious Cryptography*, 2nd ed. (paid)
- *Cryptopals*, crypto challenges (free)
- Dan Boneh, *Cryptography I*, Stanford on Coursera (free to audit; Coursera Plus)
**Study approach:** You need to *use* cryptography correctly far more than you need to design it. Learn the primitives and, more importantly, when each applies: symmetric vs asymmetric, hashing vs MAC, AEAD, digital signatures, and key exchange. The single most valuable lesson is negative: never roll your own crypto, and recognize the misuse patterns (ECB mode, static IVs, unauthenticated encryption). The Cryptopals challenges teach this by making you *break* bad crypto. The habit that matters: reach for a vetted library and the highest-level API it offers.
**Project:** Complete Cryptopals Set 1-2 (implement and then break ECB/CBC), and write a short "crypto misuse cheat sheet" for developers listing the five mistakes you saw and their correct alternatives.

### Pentesting & exploitation basics `desirable`
**Prerequisites:** OWASP Top 10 & web vulns, OS internals & memory model
**Tracks:** Application security
**Resources:**
- **Best match:** TryHackMe and Hack The Box: guided and free-form labs (paid, with a free tier)
- HackTricks: the field's shared attack reference (free)
- OffSec, *PEN-200 / OSCP* (paid)
**Study approach:** You don't need to become a full-time pentester, but offensive fluency makes you a far better defender: you can't threat-model an attack you've never run. Work TryHackMe/HTB paths for recon, exploitation, and privilege escalation. Treat OSCP as optional and expensive; pursue it only if you want to sell pentesting or your employer pays. The habit that matters: after every exploit, ask what single control would have stopped it.
**Project:** Complete a beginner Hack The Box or TryHackMe path end to end and write a professional-format pentest report for one machine: scope, recon, exploitation, post-exploitation, and prioritized remediation.

### API & mobile security `desirable`
**Prerequisites:** OWASP Top 10 & web vulns, AuthN/AuthZ & session security
**Tracks:** Application security
**Resources:**
- **Best match:** OWASP, *API Security Top 10* (free)
- OWASP, *MASVS / MASTG* mobile testing standard and guide (free)
- PortSwigger: GraphQL and API testing labs (free)
**Study approach:** APIs are where most modern breaches actually happen, and the failure modes differ from classic web apps: broken object/function-level authorization, excessive data exposure, and missing rate limits dominate. Learn REST and GraphQL abuse, then the mobile angle: insecure storage, certificate pinning, and the fact that a mobile client is fully attacker-controlled. The habit that matters: treat every client as hostile and every authorization check as belonging on the server.
**Project:** Audit a small REST or GraphQL API for the API Top 10 (demonstrate one BOLA and one excessive-data-exposure issue) and add server-side authorization plus response filtering to close them.

### Agent & tool-use security `critical`
**Prerequisites:** OWASP LLM Top 10 & prompt injection, AuthN/AuthZ & session security
**Tracks:** Application security · AI security & governance
**Resources:**
- **Best match:** OWASP Agentic Security Initiative, *Securing Agentic Applications* guide (free)
- Anthropic: Model Context Protocol (MCP) and tool-use docs (free)
- Google and Microsoft: agent security guidance (free)
**Study approach:** The moment a model can take real actions (call tools, run code, spend money) prompt injection becomes remote code execution by proxy. It is one of the least-understood areas in security. Learn to scope tool permissions tightly, sandbox execution, require human-in-the-loop for high-impact actions, and treat the model as a confused deputy that an attacker can weaponize against your own privileges. The habit that matters: an agent should hold the least privilege that lets it do its job, enforced *outside* the model.
**Project:** Take an agent with a couple of tools, exploit it via injection to misuse a tool, then re-architect it with per-tool authorization, a sandbox, and a human-confirmation gate on the dangerous action, and show the same attack now failing.

### Adversarial ML & model robustness `desirable`
**Prerequisites:** ML / LLM systems literacy
**Tracks:** AI security & governance
**Resources:**
- **Best match:** MITRE ATLAS: adversarial threat landscape for AI systems (free)
- IBM, *Adversarial Robustness Toolbox (ART)* (free)
- NIST, *AI 100-2: Adversarial Machine Learning* taxonomy (free)
**Study approach:** Beyond prompt injection lies the classical adversarial-ML canon: evasion (adversarial examples), model extraction/stealing, membership inference (privacy leakage), and data-poisoning backdoors. You need literacy in all of them and hands-on depth in the ones relevant to systems you'll defend. MITRE ATLAS is the ATT&CK-equivalent map of these techniques. The habit that matters: enumerate the ML-specific threats with ATLAS, not just the classical AppSec ones.
**Project:** Use ART to craft an adversarial example that fools a small image classifier, then apply one defense (adversarial training or input preprocessing) and quantify how much robustness it buys, and what it costs in clean accuracy.

### Software supply chain & SBOM `critical`
**Prerequisites:** CI/CD security
**Tracks:** DevSecOps & supply chain · AI security & governance
**Resources:**
- **Best match:** SLSA and in-toto: provenance frameworks (free)
- Sigstore / cosign: artifact signing (free)
- CycloneDX and SPDX: SBOM specifications (free)
**Study approach:** Supply-chain attacks (SolarWinds, xz-utils, malicious npm/PyPI packages) are now among the highest-impact threats, and defending them is a fast-growing niche. Learn artifact signing, build provenance, SBOM generation and consumption, and the SLSA levels that structure it all. Connect this directly to the model and data supply-chain course in Phase 4: the concepts transfer to ML artifacts. The habit that matters: never trust an artifact you can't verify the provenance of.
**Project:** Build a pipeline that generates an SBOM (CycloneDX) for an app, signs the resulting image with cosign, and verifies the signature and provenance at deploy time: rejecting an unsigned or tampered artifact.

### Secrets management `critical`
**Prerequisites:** CI/CD security
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- **Best match:** HashiCorp Vault: docs and tutorials (free)
- gitleaks and trufflehog: secret scanners (free)
- Cloud secrets-manager docs: AWS/Azure/GCP (free)
**Study approach:** Leaked credentials are one of the most common breach root causes, and the fix is systemic, not a wiki reminder. Learn centralized vaulting, dynamic/short-lived credentials, automated rotation, and secret scanning in both the repo and the CI logs. Prefer workload identity (OIDC) over stored secrets wherever possible. The habit that matters: a secret in source control is already compromised, rotate first, investigate second.
**Project:** Add secret scanning (gitleaks) as a pre-commit hook and CI gate on a repo, then migrate one hardcoded credential to a vault or cloud secrets manager with short-lived, rotated access.

### IaC & policy as code `critical`
**Prerequisites:** CI/CD security, Cloud security fundamentals
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- **Best match:** Terraform / OpenTofu: official docs (free)
- Open Policy Agent (OPA) and Rego: docs and playground (free)
- Checkov and Trivy: IaC scanners (free; tfsec is retired, its checks live in Trivy now)
**Study approach:** Infrastructure is code now, which means misconfiguration is a code bug you can catch before it ships. Learn to scan IaC for insecure defaults and to *codify* your own guardrails with OPA/Rego so policy violations fail the plan, not the audit six months later. The habit that matters: express every "we should never do X" as an automated policy, not a wiki page.
**Project:** Write an OPA/Rego policy that blocks a specific dangerous Terraform pattern (public S3 bucket, security group open to `0.0.0.0/0`), wire it into `terraform plan` via Conftest, and show it failing a bad plan and passing a fixed one.

### Network security & zero trust `critical`
**Prerequisites:** Networking & protocols, Cloud security fundamentals
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** NIST, *SP 800-207: Zero Trust Architecture* (free)
- Google, *BeyondCorp* papers (free)
- Cloud networking security docs: VPC, security groups, service mesh (free)
**Study approach:** The network perimeter is dead; identity is the new perimeter. Learn segmentation, VPC design, firewalls/security groups, and the zero-trust model where every request is authenticated and authorized regardless of network location. Understand service-mesh mTLS as the practical implementation of "never trust, always verify" between services. The habit that matters: design so that a compromised host inside the network still can't reach what it shouldn't.
**Project:** Design and implement a segmented network for a small multi-service app (default-deny between tiers, explicit allow rules, and mTLS between two services) and document how it contains a hypothetical single-host compromise.

---

## PHASE 4: Identity, keys & dependencies

**This phase by specialization.**
- **Spine (every track):** Identity federation (OAuth/OIDC/SAML)
- **Application security** (3 courses): the spine plus PKI, TLS & certificate management; Dependency & vulnerability management
- **DevSecOps & supply chain** (4 courses): the spine plus Dependency & vulnerability management; Model & data supply-chain security; Container & Kubernetes security
- **Cloud & infra security** (4 courses): the spine plus PKI, TLS & certificate management; Key management & HSM/KMS; Container & Kubernetes security
- **AI security & governance** (3 courses): the spine plus Model & data supply-chain security; Data privacy & PETs

### Identity federation (OAuth/OIDC/SAML) `critical`
**Prerequisites:** AuthN/AuthZ & session security, Applied cryptography
**Tracks:** All specializations
**Resources:**
- **Best match:** Justin Richer & Antonio Sanso, *OAuth 2 in Action* (paid)
- oauth.net and the OpenID Connect specs (free)
- Keycloak: open-source identity provider docs (free)
**Study approach:** Delegated authorization and SSO underpin every modern app, and the implementation traps are legendary (implicit flow misuse, missing state/PKCE, token validation shortcuts, redirect-URI abuse). Learn the OAuth 2.0/OIDC flows properly, what each token is and how to validate it, and how SAML fits in enterprise. Every track meets it: SSO in applications, OIDC federation from CI to cloud, and OAuth-based authorization for agents and MCP servers. The habit that matters: validate every token's signature, issuer, audience, and expiry, never trust a token because it arrived.
**Project:** Implement the OAuth 2.0 authorization-code-with-PKCE flow against a Keycloak instance, then deliberately break token validation (skip the audience check) and show the resulting authorization bypass before fixing it.

### PKI, TLS & certificate management `critical`
**Prerequisites:** Applied cryptography, Networking & protocols
**Tracks:** Application security · Cloud & infra security
**Resources:**
- **Best match:** Ivan Ristić, *Bulletproof TLS and PKI* (paid)
- Let's Encrypt and the ACME protocol: docs (free)
- SSL Labs: server test and deployment guides (free)
**Study approach:** TLS and certificates are everywhere and misconfigured everywhere. Learn certificate chains, trust stores, TLS configuration (protocol versions, cipher suites), mTLS, and the operational reality that most incidents are expired certs and bad rotation, not broken math. Automate issuance with ACME. The habit that matters: treat certificate lifecycle as an operational system with monitoring and rotation, not a one-time setup.
**Project:** Stand up automated TLS with ACME for a service, configure it to an A+ on SSL Labs, add mTLS between two internal services, and set up expiry monitoring that alerts before a cert lapses.

### Key management & HSM/KMS `desirable`
**Prerequisites:** Applied cryptography, Secrets management
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** Cloud KMS docs: AWS KMS, Azure Key Vault, GCP KMS (free)
- NIST, *SP 800-57: Recommendation for Key Management* (free)
- PKCS#11 and HSM primers (free)
**Study approach:** Cryptography is only as strong as its key management, which is mostly an operational and access-control problem. Learn the key lifecycle (generation, rotation, revocation, destruction), envelope encryption, cloud KMS, and when an HSM is warranted. Enforce separation of duties so no single person controls both key and ciphertext. The habit that matters: keys never leave the boundary that protects them; you send data to the key, not the key to the data.
**Project:** Implement envelope encryption for application data using a cloud KMS: data keys encrypted by a KMS master key, with a documented rotation policy and IAM enforcing that the app can encrypt/decrypt but not export the master key.

### Dependency & vulnerability management `critical`
**Prerequisites:** SAST / DAST & fuzzing
**Tracks:** Application security · DevSecOps & supply chain
**Resources:**
- **Best match:** OWASP Dependency-Check and GitHub Dependabot (free)
- OSV (Open Source Vulnerabilities) and FIRST EPSS (free)
- CISA, *Known Exploited Vulnerabilities (KEV)* catalog (free)
**Study approach:** Most applications are mostly third-party code, so software composition analysis is unavoidable, but the real skill is prioritization, not scanning. A raw CVE list is noise; learn to rank by exploitability (EPSS), known-exploited status (KEV), and actual reachability in your code. The habit that matters: patch what's exploitable and reachable first, and be able to defend that ordering to an auditor.
**Project:** Run SCA on a real project, then build a prioritized remediation plan for the findings using EPSS scores and the CISA KEV catalog, justifying why some low-CVSS items outrank some high-CVSS ones.

### Model & data supply-chain security `critical`
**Prerequisites:** Software supply chain & SBOM, ML / LLM systems literacy
**Tracks:** DevSecOps & supply chain · AI security & governance
**Resources:**
- **Best match:** safetensors and model-scanning tools (free)
- Hugging Face: security documentation (free)
- NIST and MITRE: data-poisoning and model-integrity literature (free)
**Study approach:** Models and datasets are software artifacts with their own supply chain, and it's currently under-defended. Learn the concrete risks: unsafe serialization formats (pickle can execute arbitrary code on load), poisoned training data and weights, backdoored models on public hubs, and the absence of provenance. Reuse the Phase 3 supply-chain toolkit (signing, SBOMs, provenance) for ML artifacts. The habit that matters: scan and verify a model before loading it exactly as you would a dependency.
**Project:** Demonstrate the pickle-deserialization risk on a crafted model file in a sandbox, then build a "safe model intake" check: format validation (prefer safetensors), scanning, and provenance/signature verification before a model is allowed into your pipeline.

### Data privacy & PETs `desirable`
**Prerequisites:** Applied cryptography, ML / LLM systems literacy
**Tracks:** AI security & governance
**Resources:**
- **Best match:** Dwork & Roth, *The Algorithmic Foundations of Differential Privacy* (free)
- OpenMined and Opacus: federated learning and DP tutorials (free)
- NIST: privacy framework (free)
**Study approach:** Training and inference on personal data collide directly with privacy law (GDPR, Chile's Law 21.719) and with real leakage risks like model memorization and membership inference. Learn the privacy-enhancing toolkit (differential privacy, federated learning, anonymization and its limits) well enough to advise what's feasible. This is where AI security meets governance, the two halves of this track. The habit that matters: assume a model can leak its training data, and design privacy in rather than promising it in policy.
**Project:** Train a small model with and without differential privacy (Opacus), then run a membership-inference attack against both and measure how much DP reduces the leakage, and what accuracy it costs.

### Container & Kubernetes security `critical`
**Prerequisites:** Linux & CLI, IaC & policy as code
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- **Best match:** Kubernetes: security docs and the CIS Kubernetes Benchmark (free)
- Falco (runtime detection) and Trivy (image/config scanning) (free)
- Liz Rice, *Container Security* (paid)
**Study approach:** Containers and Kubernetes are where most cloud-native workloads run and where a single misconfigured RBAC role or privileged pod becomes a cluster takeover. Learn image hardening and minimal base images, rootless/non-privileged containers, admission control, network policies, and runtime detection. The habit that matters: apply least privilege at every layer, image, pod securityContext, RBAC, and network policy.
**Project:** Harden a Kubernetes deployment: build a minimal non-root image, add a restrictive `securityContext` and NetworkPolicy, enforce it with an admission policy (Kyverno/OPA Gatekeeper), and catch a runtime violation with Falco.

---

## PHASE 5: Risk, AI assurance & detection

**This phase by specialization.**
- **Spine (every track):** Security governance & risk
- **Application security** (3 courses): the spine plus AI-generated code auditing; AI red-teaming & security evals
- **DevSecOps & supply chain** (3 courses): the spine plus AI-generated code auditing; CSPM & cloud posture
- **Cloud & infra security** (4 courses): the spine plus CSPM & cloud posture; Logging, monitoring & SIEM; Detection engineering & threat hunting
- **AI security & governance** (3 courses): the spine plus AI-generated code auditing; AI red-teaming & security evals

### Security governance & risk `critical`
**Prerequisites:** Security fundamentals & threat modeling
**Tracks:** All specializations
**Resources:**
- **Best match:** NIST, *Cybersecurity Framework 2.0* (free)
- ISO/IEC 27001: overview and control set (free)
- CIS, *Critical Security Controls v8.1* (free)
**Study approach:** Every track takes this course: even if you never want to be a governance specialist, you need literacy here because this is how security gets funded and prioritized. Learn risk assessment (likelihood × impact), the major control frameworks and how they map to each other, and (the real skill) translating technical risk into the business language executives act on. The habit that matters: frame every security ask as a risk decision with a cost, not a technical demand.
**Project:** Produce a risk register for a small organization mapped to NIST CSF 2.0: top ten risks, current controls, residual risk, and a prioritized treatment plan with rough costs.

### AI-generated code auditing `critical`
**Prerequisites:** Secure coding & code review, SAST / DAST & fuzzing
**Tracks:** Application security · DevSecOps & supply chain · AI security & governance
**Resources:**
- **Best match:** GitHub Copilot and Claude Code: security documentation (free)
- Semgrep: rules for reviewing AI-generated code (free)
- Research on "slopsquatting" / hallucinated dependencies (free)
**Study approach:** AI now writes a large and growing share of production code, and it produces insecure patterns and *hallucinated dependencies* (non-existent packages an attacker can then register and poison) at scale. This is exactly the software-plus-security combination applied to a brand-new, high-demand problem. Learn to review AI output specifically: verify every imported dependency exists and is the intended one, check for insecure defaults, and scale review with automation because the volume defeats manual-only review. The habit that matters: never merge AI-written code you'd not accept from a junior, and verify its dependencies are real.
**Project:** Generate a nontrivial feature with an AI coding tool, security-review the output, and document every issue (insecure defaults, missing validation, and any hallucinated or typosquat-prone dependency) then build a CI check that flags at least one of those classes automatically.

### AI red-teaming & security evals `desirable`
**Prerequisites:** OWASP LLM Top 10 & prompt injection, Agent & tool-use security
**Tracks:** Application security · AI security & governance
**Resources:**
- **Best match:** Microsoft, *PyRIT* (Python Risk Identification Tool) (free)
- NVIDIA, *garak* LLM vulnerability scanner (free)
- Anthropic and OpenAI: red-teaming methodology writeups (free)
**Study approach:** One-off manual testing doesn't scale to systems that change with every model update, so the goal is *repeatable* security evaluation wired into CI. Learn systematic jailbreak and harm probing, automated red-team tooling, and how to turn findings into a regression suite that runs on every deploy. This blends your pentesting instinct with an engineering pipeline. The habit that matters: every AI vulnerability you find becomes a permanent test case, not a fixed one-off.
**Project:** Build an automated security eval suite for an LLM app using garak or PyRIT, covering prompt injection and data-leakage cases, and integrate it into CI so a regression (a newly succeeding jailbreak) fails the build.

### CSPM & cloud posture `desirable`
**Prerequisites:** Cloud security fundamentals, IaC & policy as code
**Tracks:** DevSecOps & supply chain · Cloud & infra security
**Resources:**
- **Best match:** Prowler and ScoutSuite: open-source posture scanners (free)
- Steampipe / CloudQuery: query your cloud as SQL (free)
- CIS cloud benchmarks (free)
**Study approach:** At scale you can't manually check every account, so posture management continuously scans for misconfiguration and drift. Learn to run open-source CSPM tools, interpret findings against a benchmark, and (the higher-value skill) automate remediation rather than just reporting. Steampipe's SQL-over-cloud approach is a fast way to answer bespoke "who has X" questions. The habit that matters: measure posture continuously, because a secure configuration drifts the day after you set it.
**Project:** Run Prowler or ScoutSuite against a cloud account, triage the findings against the CIS benchmark, and write one automated remediation (a Lambda/function or IaC change) that fixes a recurring misconfiguration.

### Logging, monitoring & SIEM `critical`
**Prerequisites:** Cloud security fundamentals
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** Elastic Security and OpenSearch: docs (free)
- AWS CloudTrail and GCP Cloud Audit Logs: docs (free)
- Splunk: free training courses (free)
**Study approach:** You can't detect or investigate what you don't log. Learn what to collect (audit logs, auth events, network flow), how to centralize it, and how to protect log integrity so an attacker can't cover their tracks. A SIEM is where telemetry becomes alerts: this node sets up the detection-engineering course next to it in this phase. The habit that matters: log for the investigation you'll wish you had, and make the logs tamper-evident.
**Project:** Ship cloud audit logs to a SIEM (Elastic or OpenSearch), build a dashboard for authentication events, and write one alert rule that fires on a suspicious pattern (e.g. root login, or access from a new region).

### Detection engineering & threat hunting `critical`
**Prerequisites:** Logging, monitoring & SIEM
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** Sigma: generic detection-rule format (free)
- MITRE ATT&CK: adversary technique knowledge base (free)
- The DFIR Report and detection.fyi: real detections (free)
**Study approach:** Prevention fails eventually, so detection is what bounds the damage. Learn to write detections as code (Sigma rules), map your coverage to ATT&CK techniques to find blind spots, and hunt proactively for activity your alerts miss. The skill that separates good from great is tuning: a detection that cries wolf gets ignored. The habit that matters: every detection ships with a documented ATT&CK mapping and a tested false-positive rate.
**Project:** Write three Sigma detection rules for distinct ATT&CK techniques, test them against sample logs (benign and malicious), map your coverage on the ATT&CK Navigator, and document the gaps you'd prioritize next.

---

## PHASE 6: Security programs, governance & response

**This phase by specialization.**
- **Spine (every track):** none this phase; each track works on its own courses
- **Application security** (2 courses): Secure SDLC & program design; Vulnerability management program
- **DevSecOps & supply chain** (2 courses): Secure SDLC & program design; Vulnerability management program
- **Cloud & infra security** (2 courses): Incident response & forensics; Threat intel & MITRE ATT&CK
- **AI security & governance** (3 courses): Secure SDLC & program design; Compliance & audit; AI governance & assurance

### Secure SDLC & program design `critical`
**Prerequisites:** SAST / DAST & fuzzing, Security governance & risk
**Tracks:** Application security · DevSecOps & supply chain · AI security & governance
**Resources:**
- **Best match:** OWASP, *SAMM* and *BSIMM* maturity models (free)
- Microsoft, *Security Development Lifecycle (SDL)* (free)
- Google / O'Reilly, *Building Secure and Reliable Systems* (free)
**Study approach:** This node ties the whole roadmap together: embedding security across the entire lifecycle from design to deployment, not bolting it on at the end. Learn maturity models to assess where an organization stands, the security-champions model to scale beyond a central team, and how to add security gates that developers accept because they don't destroy velocity. The habit that matters: make the secure path the easy path, paved roads beat policies.
**Project:** Assess a team's secure-SDLC maturity with OWASP SAMM, then propose a concrete 12-month improvement plan: which gates to add first, where to place security champions, and the two "paved road" defaults that would remove the most risk with the least friction.

### Vulnerability management program `desirable`
**Prerequisites:** Dependency & vulnerability management
**Tracks:** Application security · DevSecOps & supply chain
**Resources:**
- **Best match:** CISA: vulnerability-management guidance (free)
- FIRST: CVSS and EPSS (free)
- Nuclei and OpenVAS: scanners (free)
**Study approach:** This is the unglamorous program that prevents most real breaches: knowing what you have, scanning it continuously, and fixing what matters on a schedule you can defend. The engineering is easy; the hard part is prioritization, SLAs, and metrics that survive contact with reality. It bridges the technical and governance worlds. The habit that matters: measure mean-time-to-remediate for exploitable vulns and drive it down, rather than chasing the raw finding count to zero.
**Project:** Design a lightweight vulnerability-management program for a small org: asset inventory, scanning cadence, risk-based SLA tiers (using EPSS/KEV), and a one-page metrics dashboard, then run one cycle end to end on a real environment.

### Compliance & audit `desirable`
**Prerequisites:** Security governance & risk
**Tracks:** AI security & governance
**Resources:**
- **Best match:** AICPA SOC 2 and PCI-DSS: quick references (free)
- GDPR and Chile *Law 21.719* (data protection): primers (free)
- NIST OSCAL and compliance-as-code approaches (free; OSCAL superseded OpenControl)
**Study approach:** Compliance is the price of doing business in regulated sectors: fintech (PCI-DSS, SOC 2), anything with EU users (GDPR), and now Chile's new data-protection law. You don't need to become an auditor, but you should be able to map controls to requirements and, ideally, automate evidence collection so audits stop being fire drills. The habit that matters: collect compliance evidence continuously and automatically, so an audit is a query rather than a scramble.
**Project:** Pick one framework (SOC 2 or PCI-DSS), map five of its controls to concrete technical implementations in a system you know, and automate evidence collection for at least one of them.

### AI governance & assurance `critical`
**Prerequisites:** Security governance & risk, OWASP LLM Top 10 & prompt injection
**Tracks:** AI security & governance
**Resources:**
- **Best match:** NIST, *AI Risk Management Framework* and Generative AI profile (free)
- EU, *AI Act* text, risk tiers and compliance timelines (free)
- ISO/IEC 42001: AI management system standard (free)
**Study approach:** AI governance is going from "nice to have" to legally required, and almost nobody can operationalize it yet: that scarcity is your opportunity. Learn to turn high-level frameworks into concrete engineering artifacts: model cards, risk classifications, data-governance records, and the audit evidence a regulator will ask for under the EU AI Act. This is where the technical AI-security depth of the earlier phases becomes strategic value. The habit that matters: make governance produce evidence automatically as a byproduct of the pipeline, not as a separate paperwork exercise.
**Project:** Take an AI feature and produce its governance package: an EU AI Act risk-tier assessment, a model card, a mapping to the NIST AI RMF functions, and the list of controls and evidence you'd need to pass an audit.

### Incident response & forensics `critical`
**Prerequisites:** Detection engineering & threat hunting
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** NIST, *SP 800-61r3: Incident Response Recommendations and Considerations for Cybersecurity Risk Management* (free; Rev 3 replaced the old Incident Handling Guide in 2025)
- Don Murdoch, *Blue Team Handbook* (paid)
- TheHive and Velociraptor: IR platforms (free)
**Study approach:** When (not if) something gets through, a calm, practiced process is the difference between a contained incident and a disaster. Learn the IR lifecycle (prepare, detect, contain, eradicate, recover, learn), evidence preservation and chain of custody, and cloud/host forensics basics. Emphasize the blameless post-incident review: the learning step is where security actually improves. The habit that matters: preserve evidence before you remediate, and write the timeline as you go.
**Project:** Run a tabletop incident-response exercise for a realistic scenario (leaked credential → cloud data access), produce the incident timeline and containment steps, and write a blameless post-incident review with concrete follow-up actions.

### Threat intel & MITRE ATT&CK `desirable`
**Prerequisites:** Detection engineering & threat hunting
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** MITRE ATT&CK and ATT&CK Navigator (free)
- MISP: threat-intelligence sharing platform (free)
- David Bianco, *The Pyramid of Pain* (free)
**Study approach:** Threat intelligence turns "attackers exist" into "these techniques target systems like ours, so defend these first." Learn to consume and operationalize IOCs and adversary TTPs, and internalize the Pyramid of Pain: why detecting behaviors (TTPs) hurts attackers far more than blocking hashes. The habit that matters: prioritize detection and defense by the attacker's cost to adapt, not by the ease of collecting the indicator.
**Project:** Pick a threat actor or campaign from public reporting, map its techniques onto the ATT&CK Navigator, and produce a prioritized defensive plan for your environment based on which of its TTPs you currently can't detect.

---

## PHASE 7: Architecture, frontier & leadership

**This phase by specialization.**
- **Spine (every track):** Security architecture; Technical leadership
- **Application security** (3 courses): the spine plus Formal methods & verification
- **DevSecOps & supply chain** (2 courses): the spine only
- **Cloud & infra security** (4 courses): the spine plus Confidential computing & TEEs; Post-quantum cryptography
- **AI security & governance** (3 courses): the spine plus AI security research frontier

### Security architecture `critical`
**Prerequisites:** Identity federation (OAuth/OIDC/SAML), OWASP LLM Top 10 & prompt injection, Security governance & risk
**Tracks:** All specializations
**Resources:**
- **Best match:** Google / O'Reilly, *Building Secure and Reliable Systems* (free)
- SABSA and published security reference architectures (free)
- AWS and Azure: security reference architectures (free)
**Study approach:** This is the capstone the whole path builds toward: designing defense-in-depth across identity, network, data, and application layers so that no single failure is catastrophic. Learn to reason about a whole system's security posture, make and document trade-offs, and produce reference architectures others can build against. Pair it with the AI-security layer to become the rare architect who can secure both classical and AI systems. The habit that matters: design so that every control has a backup and no boundary is a single point of failure.
**Project:** Produce a security architecture for a realistic AI-enabled application: a diagram with trust boundaries and controls at every layer (identity, network, data, app, and the AI/agent layer), the key trade-offs you made, and the top residual risks with owners.

### Technical leadership `desirable`
**Prerequisites:** Security governance & risk
**Tracks:** All specializations
**Resources:**
- **Best match:** Camille Fournier, *The Manager's Path* (paid)
- Google, *Technical Writing* courses (free)
- CISA and sector CISO playbooks (free)
**Study approach:** Senior security work is mostly influence without authority: you rarely own the systems you're responsible for securing, so you win through trust, clear risk communication, and writing that executives and engineers both act on. Practice translating a technical finding into a business risk and a recommended decision. A second or third working language is a multiplier here: Spanish for Latin American roles, German for DACH ones. The habit that matters: lead with the risk and the decision, then the technical detail for those who want it.
**Project:** Write a one-page security risk brief for a real finding aimed at a non-technical executive (the risk, the business impact, the options with costs, and your recommendation) and get feedback from someone outside security on whether the decision is clear.

### Formal methods & verification `frontier`
**Prerequisites:** Secure coding & code review
**Tracks:** Application security
**Resources:**
- **Best match:** Hillel Wayne, *Learn TLA+* (free)
- Benjamin Pierce, *Software Foundations* (free)
- seL4: verified microkernel papers (free)
**Study approach:** A long-horizon bet: instead of testing for the absence of bugs, *prove* properties hold. Learn model checking with TLA+ to find design-level concurrency and protocol flaws before implementation, and get literacy in verification for the highest-assurance components. This overlaps directly with the Control roadmap's formal-methods and safety nodes: verification is a durable, AI-resistant skill. The habit that matters: specify the property precisely enough that a machine could check it.
**Project:** Model a concurrent or distributed protocol you care about (a locking scheme, an auth handshake) in TLA+ and use the model checker to find a race or safety violation, then fix the spec and re-verify.

### AI security research frontier `frontier`
**Prerequisites:** Adversarial ML & model robustness, AI red-teaming & security evals
**Tracks:** AI security & governance
**Resources:**
- **Best match:** arXiv: cs.CR and cs.AI (free)
- Anthropic and Google DeepMind: safety and security research (free)
- AI Village / DEF CON: AI red-team writeups (free)
**Study approach:** The genuine research edge of the AI-security track: novel jailbreak classes, agentic-system exploits, interpretability turned to defense, and the security side of alignment. This field is young enough that a working engineer who reads papers and builds can contribute real findings. Stay skeptical of hype in both directions. The habit that matters: reproduce a paper's attack or defense before you believe its claims.
**Project:** Reproduce a recent AI-security paper's core result (an attack or a defense) on your own small setup, write up where it held and where it didn't, and publish it: a reproduction with honest caveats is a genuine contribution.

### Confidential computing & TEEs `frontier`
**Prerequisites:** Applied cryptography, Cloud security fundamentals
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** Confidential Computing Consortium: docs (free)
- Intel SGX, AMD SEV, AWS Nitro Enclaves: docs (free)
- Enarx and remote-attestation primers (free)
**Study approach:** A frontier bet on protecting data *in use*, not just at rest and in transit: trusted execution environments and remote attestation let you run sensitive workloads even on infrastructure you don't fully trust. This matters increasingly for regulated data and for running AI on sensitive inputs. Understand the trust model, its limits (side channels), and the attestation flow. The habit that matters: be precise about exactly whom a TEE protects you from, and whom it doesn't.
**Project:** Run a small workload inside a TEE (AWS Nitro Enclave or an SGX enclave), implement remote attestation so a client only sends data after verifying the enclave, and document the exact threat model: what this defends against and what it doesn't.

### Post-quantum cryptography `desirable`
**Prerequisites:** Applied cryptography, PKI, TLS & certificate management
**Tracks:** Cloud & infra security
**Resources:**
- **Best match:** NIST, *FIPS 203/204/205* (ML-KEM, ML-DSA, SLH-DSA) (free)
- Open Quantum Safe / liboqs (free)
- Cloudflare: post-quantum blog series (free)
**Study approach:** "Harvest now, decrypt later" makes this relevant today for long-lived secrets even though large quantum computers don't yet exist. You don't need the lattice math; you need to know the standardized algorithms, how hybrid (classical + PQC) deployment works, and (the real deliverable) how to inventory your cryptography so you *can* migrate when required. This connects to the Quantum roadmap's PQC node from the defensive side. The habit that matters: know where every long-lived secret lives and how you'd rotate its algorithm.
**Project:** Build a crypto inventory for a small system (what algorithms, where, protecting what, for how long), flag the assets exposed to harvest-now-decrypt-later, and prototype a hybrid TLS handshake with liboqs.

---

## Parallel Skill: English (and German) Proficiency (highest ROI)

Security is a global, English-first field: the best training (PortSwigger, OWASP, SANS), the primary research, and the highest-paying remote roles are all in English. Keep raising English in parallel with everything above; it is the single highest-ROI investment for accessing international work, and it compounds. **German** is a distinct, rarer asset for anyone who has it: the DACH region (Germany, Austria, Switzerland) has strong demand for security engineers, heavy regulation (so security and compliance skills are prized), and far fewer English-only candidates competing for German-speaking roles. Each additional working language is a separate market access, not a line on a CV.

**Practice:** write project reports and threat models in English; read security research and advisories in English; and, for German speakers, read one German-language security or compliance source each quarter (BSI, the German federal security office, publishes excellent free guidance) to keep the technical vocabulary alive.

---

## Certifications: Priority Order

Certifications matter more in security than in most of software, because they're a common HR filter and, for consulting/enterprise, a trust signal. But they are a complement to demonstrated work (found vulnerabilities, hardened systems, published writeups), never a substitute.

### Tier 1: Foundational signal (do early if job-hunting)
- **CompTIA Security+**: broad baseline, common HR filter, cheap. Skip if you already have equivalent demonstrated knowledge, but it unblocks résumé screens.
- **(ISC)² Certified in Cybersecurity (CC)**: free entry-level cert, useful for the vocabulary and the ATS keyword.

### Tier 2: Specialization-specific, high value
- **Cloud security specialty**: AWS Certified Security - Specialty *or* Azure AZ-500. Pick the cloud your market uses; high ROI for the Cloud & infra security specialization.
- **Certified Kubernetes Security Specialist (CKS)**: the strong signal for the DevSecOps & supply chain specialization and its container work (requires CKA first).
- **OSCP (OffSec)**: the respected hands-on offensive cert; pursue only if you want AppSec/pentest roles and can invest the time/cost.

### Tier 3: Governance & senior signal
- **CISSP**: the management-track standard; broad, requires experience, valued for senior/architect and DACH enterprise roles. A multi-year goal, not a starting point.
- **CCSP**: cloud-security governance counterpart to CISSP.

### AI-security specific
- The AI-security certification landscape is immature and changing fast (early entrants exist but none are yet an established standard). **Do not chase them yet**: a public portfolio of AI red-team writeups, reproduced papers, and eval suites is worth far more here than any current badge. Reassess in 12 months.

---

## Books: Essential Reading

- **The Web Application Hacker's Handbook**, Stuttard & Pinto: the AppSec classic (pair with the free PortSwigger academy, which is its spiritual successor).
- **Secure by Design**, Johnsson, Deogun & Sawano: secure coding as a design discipline, aimed at software engineers.
- **Serious Cryptography**, Aumasson: applied crypto without the math overload.
- **Building Secure and Reliable Systems**, Google / O'Reilly (free online): how security and reliability are engineered at scale; the best single systems-security book.
- **Threat Modeling: Designing for Security**, Shostack: the standard reference for structured threat modeling.
- **Container Security**, Rice: the definitive container/Kubernetes security book.
- **Alice and Bob Learn Application Security**, Janca: an approachable, practical AppSec starting point.

---

## Critical Path (Summary)

For a software engineer moving laterally into security, the highest-return route through this roadmap:

1. **Foundations (P0)**: you'll move fast here; don't skip threat modeling.
2. **AppSec core and ML literacy (P1)**: OWASP Top 10 → secure coding → auth, with ML/LLM systems literacy alongside. This is where a software background pays off first and fastest.
3. **AI security (P2 onward)**: the OWASP LLM Top 10 (P2) is spine for every track; the track courses build on it: agent security and adversarial ML (P3), model and data supply chain and privacy (P4), AI-generated code auditing and AI red-teaming (P5), AI governance (P6). This is the differentiator and the reason to choose this path over generic AppSec.
4. **DevSecOps / Cloud (P2 to P4)**: CI/CD and cloud fundamentals in P2, supply chain, secrets and IaC in P3, containers in P4. Pick the one your target employers use; both make you employable now.
5. **Crypto & identity (P3/P4)**: applied cryptography (P3) and identity federation (P4) are spine, enough to use correctly; go deep (key management, post-quantum, confidential computing) only on the Cloud & infra security track.
6. **Governance & architecture (P5 to P7)**: the seniority layer. Security governance and risk (P5) is spine; AI governance under the EU AI Act (P6) is where AI security and governance compound into a rare, strategic role; security architecture and technical leadership (P7) are the capstone every track ends on.

**Primary recommendation:** commit to the **Application security** track, which in this graph already pairs AppSec with the AI-application courses: it is closest to an existing software skill set, it sits on the security demand the sources above document, and the AI half is a genuine, defensible differentiator. Grow into **Cloud & infra security** once the spine is solid.

---

*Compiled: 2026. Reassess and update every 6 months: the classical security core is stable, but the AI/ML security nodes (ML literacy and the LLM Top 10 in the spine, plus each track's AI courses) and AI governance (EU AI Act timelines, NIST AI RMF profiles) are moving fast and will date quickest.*
*Sources: OWASP (Top 10, ASVS, LLM Top 10, Agentic Security Initiative), NIST (CSF 2.0, AI RMF, SP 800-series), MITRE ATT&CK & ATLAS, PortSwigger Web Security Academy, CIS Benchmarks, SLSA, EU AI Act, ISO/IEC 27001 & 42001.*
