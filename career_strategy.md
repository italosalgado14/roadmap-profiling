# Career Strategy: Software Engineering in the Age of AI
### A 15-year plan for a trilingual engineer in Chile

This is the strategy layer that sits above the six learning roadmaps on this site. The roadmaps answer *how to learn* a specialization; this document answers *which one to commit to, when, and why*, and how to operate as a professional so the plan survives contact with an uncertain future.

It is deliberately honest about uncertainty. Where a claim rests on published data it is marked as such; where it is extrapolation or speculation, it says so. Probability estimates are rough and meant to force ranking, not to be taken literally.

**How this maps to the six roadmaps:**
- [**Edge AI / Physical AI**](#/roadmap): production ML + deployment in the physical world (mining, energy, robotics).
- [**Applied AI / LLM engineering**](#/applied-roadmap): products built on foundation models; retrieval, agents, evaluation and serving.
- [**FPGA & Digital Hardware**](#/fpga-malla): the silicon and firmware the physical paths run on.
- [**Control Systems & Robotics**](#/control-roadmap): classical, model-based, safety-critical control.
- [**AI Security & Trustworthy Systems**](#/security-roadmap): securing software and AI systems; durable across every scenario.
- [**Quantum AI**](#/quantum-roadmap): a long-horizon (5-10+ year) frontier bet.

---

## 1. Three-Horizon Outlook

### 5-year view: through ~2031 (grounded in current data)

The near term is the part we can actually reason about from evidence, and the evidence points to **transformation, not disappearance**, of software work.

Every figure below comes from the sources listed in `.claude/skills/career-roadmaps/references/market-sources.md`, with its edition, horizon and geography, because a forecast without those three is not evidence.

- The **[WEF Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/)** (Jan 2025; a survey of 1,000+ employers in 55 economies, looking to 2030) ranks AI and big data, networks and cybersecurity, and technological literacy as the three fastest-growing skills. Its fastest-growing jobs are led by big data specialists, fintech engineers, AI and machine learning specialists, software and applications developers, and security management specialists, while its fastest-declining jobs are clerical. These are employer expectations, not observed hiring.
- The pressure on entry-level coding shows up in other sources. **[BLS Employment Projections 2025-35](https://www.bls.gov/emp/)** (released 27 Aug 2026, United States) project software developers to grow 10.2% against 3.5% for all occupations, while computer programmers decline 7% because "computer programming work continues to be automated". The **[Stanford AI Index 2026](https://hai.stanford.edu/ai-index/2026-ai-index-report/economy)** reports that US employment of software developers aged 22 to 25 fell nearly 20% from 2024. A WEF and PwC paper on entry-level work (Jun 2026) cites a 16% decline in entry-level jobs in AI-exposed US fields since late 2022, but notes that the decline began before ChatGPT and that AI's role in it "remains contested".
- The **[PwC 2026 Global AI Jobs Barometer](https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2026/2026-global-ai-jobs-barometer-global-findings.pdf)** (Jun 2026, 27 countries, Chile not among them) finds that turnover per employee grew 33.5% since 2018 in the most AI-exposed sectors against 24.0% in the least exposed, and that job postings for AI specialists rose 68.9% in 2024-25 against 8.6% for all postings. Exposure is assigned by sector, not by measured AI use.
- The **[Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai)** (global developers) finds 84% using or planning to use AI tools and 51% of professional developers using them daily, yet 46% actively distrust their accuracy. Adoption is now the norm; trust is not, which is where the verification premium comes from.

**What this means concretely:** the floor is falling out of *junior, generic, hand-coding* work: the "write this CRUD endpoint" task is being automated. The premium is moving to (a) judgment about what to build and whether it's correct, (b) systems that touch the physical or regulated world where errors are expensive, (c) security and trust as the surface area of AI-generated software explodes, and (d) the ability to orchestrate AI systems rather than merely use them.

For your profile, the near-term risks are competing on generic web/CRUD work and staying purely local without leveraging remote/DACH access. The local market is tight: the **[ILO Panorama Laboral 2025](https://www.ilo.org/sites/default/files/2025-12/OIT-Informe-PANORAMA-LABORAL-2025.pdf)** (Dec 2025) puts Chilean unemployment at 8.8% in the first half of 2025, above the regional average of about 5.8%. The near-term opportunities are specific. Chile's large-scale mining is automating: the **[Consejo de Competencias Mineras and Fundación Chile workforce study 2025-2034](https://ccm-eleva.cl/wp-content/uploads/2025/12/Estudio-Fuerza-Laboral-de-la-Gran-Mineria-2025-2034.pdf)** (Dec 2025) projects autonomous haul trucks growing from 178 to about 550 by 2034, with AI implemented or piloted by 44% to 54% of respondents, depending on the operating area. Most of the 36,895 new mining workers it projects are replacement hires for technicians and operators, so the engineering opening is the advanced maintenance, digital support and technology management it says autonomy creates. Chile also scores highest in the region on AI human talent in the **[ILIA 2025](https://www.cepal.org/en/pressreleases/latin-america-and-caribbean-accelerate-adoption-artificial-intelligence-though)** index (CENIA and ECLAC, Oct 2025). Abroad, **[Bitkom](https://www.bitkom.org/Presse/Presseinformation/IT-Fachkraeftemangel-in-den-letzten-drei-Jahren-halbiert)** still counts 79,000 unfilled IT positions in Germany (Sep 2026), down from 149,000 in 2023, with software development, cloud, AI and IT security among the profiles firms seek. Your trilingual profile opens both the remote and the DACH market.

### 10-year view: through ~2036 (reasoned extrapolation)

Two official projections reach this far, and both are point estimates with wide uncertainty. **BLS** (2025-35, United States) projects computer and mathematical occupations to grow 7.3%, the fifth-fastest major group, with information security analysts at +21% and data scientists at +34.6%, against 3.5% for all jobs. The **[Cedefop Skills Forecast](https://www.cedefop.europa.eu/en/news/cedefop-updates-skills-forecast-new-data-guide-europes-skills-and-labour-market-policy-2035)** (Jul 2026 release, 2023-2035, EU-27) projects ICT professionals and technicians to grow about 2.5% a year across the EU, but only about 1.3% a year in Germany, and puts electricity generation among the fastest-growing sectors. Beyond those numbers, what follows is reasoning, and the assumptions are stated.

*Assumptions, stated explicitly:* AI capability keeps improving but the hardest 10% of engineering work (novel system design, cross-domain judgment, accountability for correctness in high-stakes settings) remains human-led or human-accountable; regulation of AI systems tightens (EU AI Act fully in force, similar regimes spreading); and the physical world remains harder to automate than the digital one.

Under those assumptions, the engineer's role shifts from *author* to **orchestrator and guarantor**. You will spend less time writing code and more time specifying, reviewing, integrating, and being *accountable* for systems that AI largely writes. Three things gain value disproportionately:

1. **Verification and trust**: as AI writes more code, the scarce skill becomes proving it's correct and secure. This is why security and formal methods appear as durable bets across most of the roadmaps here.
2. **Physical-world and safety-critical systems**: where a wrong output injures someone or halts a mine, you cannot ship an unverified black box. Control theory, embedded systems, and functional safety stay human-accountable and highly paid.
3. **Domain-integrated judgment**: the engineer who understands *the mine, the grid, the payment network* and can direct AI against that domain beats the generalist prompt-writer.

The clear 10-year loser is the undifferentiated full-stack generalist with no domain, no physical-world anchor, and no trust/verification depth. The clear winner is the engineer with a defensible specialization plus fluency in orchestrating AI within it.

### 15-year view: through ~2041 (scenario-based speculation)

This far out, honesty requires scenarios rather than a forecast: no credible quantitative forecast reaches past 2035. The WEF's [Four Futures for Jobs](https://www.weforum.org/stories/2026/01/here-are-four-ways-ais-impact-on-job-markets-might-take-shape/) (Jan 2026) frames the same question with two axes, how fast AI advances and how ready the workforce is, and deliberately assigns no probabilities. The three scenarios below do assign weights; they are this document's own judgement, meant to force a ranking, not a published estimate.

**Scenario A: Plateau / Normalization (≈35%).** AI progress slows into an S-curve; models are powerful tools but not autonomous engineers. The profession looks like an amplified version of today: fewer, more senior, more productive engineers, each orchestrating AI across a domain. *Strategy implication:* deep specialization + domain + AI orchestration wins comfortably. Every roadmap here pays off.

**Scenario B: Orchestration Era (≈45%, most likely).** AI handles most implementation; humans define goals, verify, integrate, and own accountability. Engineering becomes a discipline of specification, verification, systems integration, and trust. Value concentrates in judgment, physical/regulated systems, and security. *Strategy implication:* the highest-value skills are exactly the AI-resistant, accountability-heavy ones (security, control, verification, systems architecture) with AI-orchestration fluency layered on top. Being *only* a coder is a dead end; being a domain-anchored guarantor is excellent.

**Scenario C: Discontinuity (≈20%).** Transformative AI automates most cognitive work, including much of engineering, on a timeline and in a shape we can't reliably plan for. *Strategy implication:* narrow career optimization matters less than general resilience: capital, optionality, physical-world skills that resist automation longest, human trust and relationships, and adaptability. Notably, the physical-world (control, robotics, energy) and trust/security anchors are also the ones that survive *longest* into this scenario, so the same bets hedge it partially. You cannot fully plan for C, but you can avoid being maximally exposed to it.

**The through-line:** across all three scenarios, the resilient bets are the same, **specialization + physical-world or regulated anchor + verification/trust + AI orchestration**. That convergence is the single most useful fact in this document. It means you do *not* have to predict the future correctly; you have to pick a specialization that pays in the likely scenarios and survives the tail one.

---

## 2. Career Style Guide (durable principles)

These are principles, not tactics: they should hold regardless of which scenario unfolds.

**Choose work by three filters, in order:** (1) *Does it build a durable, compounding asset*, deep expertise, a reputation, a network: rather than just paying this month? (2) *Is it AI-resistant or AI-amplified* rather than AI-substituted: does it involve judgment, accountability, the physical world, or trust? (3) *Does it give you accountability for outcomes*, not just tasks: the engineers who own results, not tickets, are the ones who stay valuable. Prefer roles and companies where you can see the consequences of your decisions; that feedback is what builds judgment.

**Build the three career assets that AI cannot hold: accountability, judgment, and trust.** AI can produce work; it cannot be *accountable* for it, and that is inherently human and increasingly the scarce thing organizations pay for. Judgment (knowing what to build and what "correct" means) compounds only through owning real decisions and their outcomes. Trust is earned by being reliably right, honest about uncertainty, and consistent over years. Deliberately take on work where your name is on the outcome; that is how all three grow.

**Positioning: specialist first, then a T.** In an AI world, pure generalists are the most exposed (AI is the ultimate cheap generalist). Commit to a genuine specialization deep enough to be accountable in it: that is your vertical bar. Then broaden into adjacent areas and orchestration for the horizontal bar. A "T-shaped" profile beats both the shallow generalist and the un-adaptable narrow specialist. On the employment axis: start as an **employee** in a role that builds real depth and reputation; keep **consulting** as an option your specialization + languages make natural (security and control both consult well, especially in DACH); hold **founder** as a later possibility, not an early gamble. On location: treat yourself as having *three* markets, Chile/LatAm (local depth, mining/energy/fintech), global remote (English), and DACH (German). Do not collapse to one; the optionality is itself a hedge.

**Leverage the trilingual profile as market access, not a résumé line.** Spanish anchors you in a growing LatAm tech market and the Chilean industrial base. English is non-negotiable and the highest-ROI ongoing investment: it unlocks the best learning, the research, and the highest-paying remote roles. German is your rarest asset: the DACH region has deep demand in exactly the durable specializations (security, control/automation, safety engineering), heavy regulation that *rewards* those skills, and far fewer competitors than English-only markets. The move is to become excellent in a durable specialization *and* able to work in German: that intersection is scarce and well-paid.

**Re-evaluate on a fixed cadence, not on vibes.** Set a **quarterly** review of your skills and projects (am I building the asset, or just earning?) and an **annual** strategic review against the signals in section 4. Don't rewrite your strategy on every headline; do adjust when the annual signals move materially. The point of a fixed cadence is to be responsive without being reactive.

---

## 3. STEM Learning Roadmap

Section 3 of the original brief (the concrete, sequenced study plan across mathematics, statistics, AI/ML engineering, security, robotics/control, and systems) is published on this site as six career paths, each with an interactive curriculum graph and, for five of them, a long-form reference:

- [**Edge AI / Physical AI**](#/roadmap) covers the ML-engineering, MLOps, deep-learning, and physical-deployment stack (inference optimization, Jetson-class hardware, robotics), plus its math and systems foundations.
- [**Applied AI / LLM engineering**](#/applied-roadmap) covers building products on foundation models: retrieval, agents, fine-tuning, evaluation, serving, and the backend engineering underneath them.
- [**FPGA & Digital Hardware**](#/fpga-malla) covers digital logic, HDL, timing closure, verification, board bring-up, and firmware: the hardware the other physical paths run on. It ships as a graph only for now.
- [**Control Systems & Robotics**](#/control-roadmap) covers control theory, estimation/Kalman, MPC, embedded/real-time, and industrial automation: the physical-world, model-based, safety-critical track.
- [**AI Security & Trustworthy Systems**](#/security-roadmap) covers DevSecOps, AppSec, cloud security, AI/LLM security and AI-generated-code auditing, cryptography, and governance.
- [**Quantum AI**](#/quantum-roadmap) covers the long-horizon quantum-ML and quantum-hardware/control path.

Every roadmap is laid out like a university programme: eight phases of about three months each, so a full specialization takes about two years; up to four specializations per roadmap; two to five courses per phase for whichever specialization you follow. Every course is rated critical, desirable or frontier, names its best-match resource, and carries a "build it, don't just study it" project. Use the decision framework below to choose *which* roadmap is your spine and which is your hedge; then follow that roadmap's own critical path.

---

## 4. Decision Framework

### (a) Primary specialization to commit to first

**Recommendation: Edge AI / Physical AI + production ML engineering, with security fluency layered on top.**

The reasoning: it sits at the best intersection of *near-term employability* (ML/MLOps skills are in demand now, locally and remotely), *your Chilean context* (mining and energy are digitizing toward physical/industrial AI, a genuine local moat that remote-only competitors can't easily serve), and *AI-resilience* (the physical-world and deployment layers are harder to automate than pure coding, and you are close to where real value is created rather than competing with AI on generic code). It also keeps you paid and current while longer-horizon bets compound. This is the "compounds now and stays relevant" choice.

Honest caveat: this is a close call with **AI Security** (see below), and the right primary depends on your taste. If you are more drawn to *building and deploying intelligent systems in the physical world*, lead with Edge AI. If you are more drawn to *breaking, defending, and reasoning about trust*, lead with Security: it has an equally strong case and is arguably the single most scenario-robust bet on the board. Both are correct answers; pick the one you'll go deep on, because depth is what matters.

### (b) Secondary / hedge area

**Recommendation: AI Security & Trustworthy Systems.**

Security is the best hedge because it *pays in every scenario* (more AI → more attack surface and more machine-written code to audit → more security demand) and it *pairs with everything*, securing the very AI systems your primary specialization builds. It's also the strongest fit for your fintech and DACH access. Layered onto an Edge AI primary, it makes you the rare engineer who can both build production AI systems *and* secure them: a combination almost nobody offers.

*Alternative hedge for a different temperament:* **Control Systems & Robotics**, if you want to go deeper into the physical/mathematical, safety-critical direction (strong Chile-industrial and DACH-automation fit, and the most AI-resistant of all the paths). Choose Control over Security as the hedge if deep model-based engineering excites you more than adversarial/trust work.

**Quantum AI** is explicitly *not* the primary or the hedge: it is a long-horizon lottery ticket. Keep it as background reading and small experiments (the roadmap says as much itself); do not let it displace a paying, compounding specialization.

### (c) Three concrete actions in the next 90 days

1. **Commit and ship one portfolio project in your chosen primary.** Not a course: a built, deployed, documented artifact (e.g. an edge-deployed vision model on real hardware, or a hardened + AI-security-reviewed service). Public, with a writeup. One real project outweighs a stack of certificates.
2. **Raise English deliberately and start one security fundamental in parallel.** Do PortSwigger's Web Security Academy (free) and one threat model, in English: this simultaneously advances the hedge, the highest-ROI language, and your writing. Aim to publish the writeup.
3. **Open the DACH/remote channel.** Update your profile to lead with your chosen specialization + trilingual access, and have two real conversations (a recruiter, a peer, or a community) in the international/DACH market to calibrate demand and vocabulary. This turns "I have German" into market intelligence.

### (d) 3-5 signals to monitor annually

1. **The junior-role floor.** Are entry/generic engineering roles still contracting, and is the premium still moving to judgment/verification/orchestration? (Watch the next WEF Future of Jobs edition, whose 2026 survey looks ahead to 2032; the yearly BLS projection round; and the Stanford AI Index labor chapter.) This confirms or challenges the whole thesis.
2. **AI coding-agent capability.** How much of real engineering can agents do end-to-end, unsupervised? A sharp jump pushes you faster toward the orchestration/verification/accountability layer and up the value chain.
3. **Regulation of AI systems.** EU AI Act enforcement, sector rules, and Chile's data-protection regime maturing: these directly grow the security/governance hedge and change what "trustworthy systems" is worth.
4. **Your local physical-AI demand.** Are Chilean mining/energy/industrial employers actually hiring for physical/edge AI and control? The next edition of the mining workforce study (Consejo de Competencias Mineras and Fundación Chile) is the most direct check. This validates (or weakens) the local-moat premise behind the primary recommendation.
5. **Your own compounding.** Once a year, honestly ask: is my specialization deeper than last year, am I more accountable for outcomes, and is my reputation/network growing? If three years pass with no compounding, the problem is the role, not the strategy: change the role.

---

*Compiled: 2026; market figures checked on 2026-09-26 against the sources in `market-sources.md`. This strategy is a companion to the six roadmaps on this site; reassess annually against the signals above, and whenever a monitored signal moves materially. The convergence to remember: across the likely scenarios, the resilient bet is specialization + a physical-world or regulated anchor + verification/trust + AI orchestration; you don't need to predict the future, only to pick a specialization that pays in the likely cases and survives the tail one.*
