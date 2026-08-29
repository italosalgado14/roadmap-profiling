// The wide map: the career options this site considers, as a neutral catalog.
//
// This is the layer that is meant to be useful to anyone. Every card here
// describes a job, not a recommendation, and the wide map renders them in no
// particular order with nothing ranked. The opinionated part (which option is a
// primary bet, which is a hedge, which was ruled out and why) lives in
// my_path.js and is shown only on the My path page.
//
// Deliberate constraint on the market fields: sectors and employer types only.
// No salary figures, no market-size projections. Those numbers were removed
// from the curriculum nodes for being unverifiable, and they do not come back
// in through this file.
//
// Fields:
//   id        stable key, also used by the verdict overlay
//   name      short display name
//   job       what the work actually is, one or two sentences
//   hiring    { cl, de, ca } who employs this, by sector, per market
//   entry     what a realistic entry point looks like
//   fit       one line: "good fit if ..."
//   depth     "roadmap" (curriculum graph plus a long-form document),
//             "graph" (curriculum graph only), or "card" (this overview only)
//   route     hash route to the roadmap or graph, unless depth is "card"
//   track     track id inside that path's graph, when the option maps to one

export const OPTIONS = [
  {
    id: "physical-ai",
    name: "Physical AI / Edge AI",
    job: "Put perception and decision models on hardware that acts in the world: cameras and sensors on a robot, a vehicle or a plant, with latency, power and failure behaviour as first-class constraints.",
    hiring: {
      cl: "Mining and energy operators and their automation integrators, plus a small robotics and industrial-vision supplier base.",
      de: "Automotive OEMs and tier-one suppliers, industrial automation and machine vision, warehouse and agricultural robotics.",
      ca: "Autonomous vehicle and drone companies, resource-sector automation, and a research-adjacent robotics cluster.",
    },
    entry: "A software or electronics engineer who can already ship code, plus one deployed perception system on real hardware with measured latency and accuracy.",
    fit: "Good fit if you want your code to move something physical and you are comfortable being accountable when it misbehaves.",
    depth: "roadmap",
    route: "#/roadmap",
    track: "edge",
  },
  {
    id: "applied-ai",
    name: "Applied AI / LLM engineering",
    job: "Build products on top of foundation models: retrieval, tool use and agents, with evaluation, cost and latency as the engineering problem rather than model training.",
    hiring: {
      cl: "Fintech, retail and services companies building internal and customer-facing assistants; consultancies staffing the same work.",
      de: "Enterprise software and Mittelstand digitalisation projects, plus a growing startup layer around document and process automation.",
      ca: "Broad SaaS and enterprise adoption, and a dense startup scene in the major tech hubs.",
    },
    entry: "The shortest hop for a working backend or full-stack engineer. One shipped system with a real evaluation suite is worth more than any certificate.",
    fit: "Good fit if you like product velocity and treating evaluation, not training, as the hard part.",
    depth: "roadmap",
    route: "#/applied-roadmap",
    track: "product",
  },
  {
    id: "data-platform",
    name: "Data & AI platform",
    job: "Own the substrate: ingestion, streaming, lakehouse storage, feature and model serving infrastructure that other teams build on.",
    hiring: {
      cl: "Mining, banking and retail, where the data volume is real and the platform teams are small enough to have visible impact.",
      de: "Manufacturing and logistics data platforms, industrial IoT, and the enterprise data-engineering market generally.",
      ca: "Financial services, telecom and public sector, plus platform teams at scaled startups.",
    },
    entry: "A backend engineer who learns SQL at analytical scale and one orchestration tool well. Demand is steady and less hype-driven than modelling roles.",
    fit: "Good fit if you would rather build the thing ten teams depend on than the model on top of it.",
    depth: "roadmap",
    route: "#/roadmap",
    track: "platform",
  },
  {
    id: "cloud-sre",
    name: "Cloud / platform / SRE",
    job: "Reliability, scaling and the delivery path: Kubernetes, infrastructure-as-code, observability, incident response, and the cost of running systems.",
    hiring: {
      cl: "Almost every company above a certain size, plus regional cloud consultancies.",
      de: "Broad, with a strong on-premises and sovereignty flavour in regulated industries.",
      ca: "Broad, with large employers in financial services and telecom.",
    },
    entry: "The most portable option on this map and the easiest to enter remotely. Cloud certifications carry more weight here than in most other tracks.",
    fit: "Good fit if you like systems under load and being the person who is called when they break.",
    depth: "card",
    track: "platform",
  },
  {
    id: "security",
    name: "Security & AI security",
    job: "Build security into systems and reason about AI-specific threats: application security, the delivery pipeline, cloud posture, and prompt, agent and model supply-chain attacks.",
    hiring: {
      cl: "Regulated sectors under the cybersecurity framework law and the fintech regime, plus operators of essential services.",
      de: "Wide demand driven by NIS2 and the industrial critical-infrastructure regime, especially where OT security meets manufacturing.",
      ca: "Financial services, public sector and a mature consulting market.",
    },
    entry: "Best entered laterally by an experienced software engineer rather than through the junior analyst path, which is the part most exposed to automation.",
    fit: "Good fit if adversarial thinking appeals and you want a specialisation that pays in every AI scenario.",
    depth: "roadmap",
    route: "#/security-roadmap",
  },
  {
    id: "governance",
    name: "AI governance & assurance",
    job: "Turn AI regulation into engineering practice: risk classification, documentation, evaluation evidence, audit trails and the conformity work that shipping a regulated model now requires.",
    hiring: {
      cl: "Early, concentrated in banking, insurance and companies exporting into the EU.",
      de: "Growing fastest of any market here, driven directly by EU AI Act enforcement.",
      ca: "Emerging, mostly inside financial services and the public sector.",
    },
    entry: "Rarely a first job. It works as a second specialisation layered on security or ML engineering, and rewards people who can write clearly.",
    fit: "Good fit if you can hold a technical argument and a legal one in the same conversation.",
    depth: "roadmap",
    route: "#/security-roadmap",
  },
  {
    id: "control",
    name: "Control systems & robotics control",
    job: "Model the dynamics and close the loop with guarantees: classical and state-space control, estimation, MPC, and the safety argument that lets a controller ship.",
    hiring: {
      cl: "Mining process control and energy, the most durable local industrial employer base on this map.",
      de: "Automation, automotive and aerospace, deep and long-established.",
      ca: "Aerospace, resource automation and autonomous vehicles.",
    },
    entry: "Assumes real mathematics. Slower to enter than the software tracks and correspondingly harder to displace once you are in.",
    fit: "Good fit if you want the most AI-resistant option here and enjoy the mathematics rather than tolerating it.",
    depth: "roadmap",
    route: "#/control-roadmap",
  },
  {
    id: "embedded",
    name: "Embedded & FPGA",
    job: "Firmware, real-time systems and gateware: deterministic timing, hardware interfaces, and the low-level layer that everything physical runs on.",
    hiring: {
      cl: "Thin locally, mostly in instrumentation and mining equipment suppliers.",
      de: "Strong and stable across automotive, industrial and medical devices.",
      ca: "Moderate, concentrated in aerospace, telecom and hardware startups.",
    },
    entry: "An electronics or systems background is the natural route in. C and C++ are non-negotiable.",
    fit: "Good fit if you like determinism and want a skill set that transfers into robotics, control and quantum hardware alike.",
    depth: "card",
  },
  {
    id: "domain-vertical",
    name: "Domain vertical specialist",
    job: "Not a separate technology so much as a multiplier: pair any track above with genuine depth in mining, energy, health, finance or agriculture, and become the person who understands both the model and the process.",
    hiring: {
      cl: "The single strongest local play, because the domains are here and the competition for them is not.",
      de: "Manufacturing, automotive and energy verticals reward this heavily.",
      ca: "Resources, energy and financial services.",
    },
    entry: "Earned on the job rather than studied. It compounds quietly and is the hardest thing on this map for a remote generalist to replicate.",
    fit: "Good fit if you can stay somewhere long enough to learn how the industry actually works.",
    depth: "card",
  },
  {
    id: "quantum",
    name: "Quantum computing & QML",
    job: "Quantum algorithms, error correction and the control hardware that runs them. The realistic near-term roles are in hardware and control engineering and in software tooling, not in quantum machine learning.",
    hiring: {
      cl: "Effectively none locally today.",
      de: "A real research and hardware cluster around national labs and a few companies.",
      ca: "One of the stronger quantum ecosystems, both academic and commercial.",
    },
    entry: "A long-horizon bet layered on a paying career, not a job switch. An electronics or FPGA background is the least crowded way in.",
    fit: "Good fit if you can fund the patience and would enjoy this even if it never pays.",
    depth: "roadmap",
    route: "#/quantum-roadmap",
  },
  {
    id: "pqc",
    name: "Post-quantum cryptography migration",
    job: "Inventory what a system relies on cryptographically and migrate it to post-quantum algorithms. Concrete, deadline-driven work that exists now, unlike the rest of the quantum field.",
    hiring: {
      cl: "Banking and government, following international standards timelines.",
      de: "Regulated industry and public sector, under explicit federal guidance.",
      ca: "Financial services and government, with published migration roadmaps.",
    },
    entry: "Reachable from a security or backend background. Narrow, unglamorous and genuinely in demand.",
    fit: "Good fit if you want quantum-adjacent work that has a real budget attached today.",
    depth: "roadmap",
    route: "#/security-roadmap",
  },
  {
    id: "research",
    name: "Research / applied science",
    job: "Publish, or work close to the people who do. Novel methods rather than production systems.",
    hiring: {
      cl: "Universities and a handful of applied centres; industrial research is rare.",
      de: "Strong public research institutes alongside corporate labs.",
      ca: "Deep academic and industrial research ecosystem in machine learning.",
    },
    entry: "Usually gated by a PhD. Applied-scientist roles at product companies are the exception and still expect a publication record.",
    fit: "Good fit if the open question matters more to you than the shipped artifact.",
    depth: "card",
  },
  {
    id: "architect",
    name: "Staff engineer / architect",
    job: "Technical leadership without management: system design across teams, technology choices, and being accountable for decisions rather than tickets.",
    hiring: {
      cl: "Available at the larger local companies and, increasingly, in remote roles for foreign employers.",
      de: "A well-established and well-paid career ladder.",
      ca: "Standard at scaled companies.",
    },
    entry: "Not entered directly. It is what a specialisation turns into after several years, and it needs writing and influence more than new technology.",
    fit: "Good fit if you want scope without leaving engineering.",
    depth: "card",
  },
  {
    id: "consulting",
    name: "Consulting / independent / founder",
    job: "Sell the specialisation directly: contracting, an independent practice, or building a product on it.",
    hiring: {
      cl: "Viable, especially selling into mining and energy where specialist supply is thin.",
      de: "A large and formalised contracting market, and the one where a working command of German matters most.",
      ca: "Common contracting culture, straightforward to combine with remote work.",
    },
    entry: "Needs a specialisation, a reputation and a network first. Attempted too early it is just unstable employment.",
    fit: "Good fit if you want ownership and can tolerate irregular income while the pipeline builds.",
    depth: "card",
  },
];

export default { options: OPTIONS };
