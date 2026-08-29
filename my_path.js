// The personal layer: one person's overlay on top of the neutral catalog.
//
// Nothing here changes the catalog. It is read on top of it, so the same
// curriculum can carry a different opinion for every reader. That is the whole
// point of the split: the catalog says what a node is, the overlay says what it
// is worth to one person.
//
// The site loads this file as the default overlay. A reader can edit their own
// copy in the browser (progress, priorities and tracks are kept in
// localStorage) and export it as JSON from the "My path" page, which makes the
// overlay forkable: someone else's path is just a different file of this shape.
//
// Shape, and the same shape the export produces:
//   version            overlay format version
//   graph              which curriculum graph this overlay applies to
//   tracks             track ids to preselect in the graph filter
//   verdicts           option id -> { verdict: primary|hedge|ignore, why }
//   priorityOverrides  course id -> critical|desirable|frontier
//   done               course ids already completed
//   sequence           the calendar the phases deliberately do not encode

export const OVERLAY = {
  version: 1,
  graph: "edge-ai",
  owner: "the site author",
  updated: "2026-08",

  tracks: ["edge", "robotics"],

  // Primary, hedge or ruled-out, with the reason. "ignore" does not mean the
  // option is bad. It means it was considered and set aside on purpose, which
  // is the part most roadmaps leave invisible.
  verdicts: {
    "physical-ai":    { verdict: "primary", why: "Best intersection of local moat (mining, energy), near-term employability and AI-resilience. The deployment layer is harder to automate than generic code." },
    "applied-ai":     { verdict: "hedge",   why: "The largest job pool on the map and the fastest to monetise. It shares the LLM, evaluation and serving nodes with the primary, so the hedge is cheap." },
    "security":       { verdict: "hedge",   why: "Pays in every AI scenario, since more machine-written code means more to audit. Pairs with whatever the primary builds." },
    "domain-vertical":{ verdict: "hedge",   why: "Pursued as a multiplier on the primary rather than as a separate career. It is the hardest thing here for a remote generalist to replicate." },
    "architect":      { verdict: "hedge",   why: "Where the primary is expected to lead in five to eight years. Not something to enter directly now." },
    "data-platform":  { verdict: "ignore",  why: "A strong option, set aside because it overlaps the platform work already inside the primary without using the physical or domain moat." },
    "control":        { verdict: "ignore",  why: "Genuinely the most AI-resistant path on this map. Set aside on time cost: entering it properly is a multi-year mathematics investment that would compete with the primary." },
    "cloud-sre":      { verdict: "ignore",  why: "Always hiring and highly portable, but the most commoditised option here and the least differentiated." },
    "governance":     { verdict: "ignore",  why: "Follows from the security hedge without needing its own spine. Literacy is enough." },
    "embedded":       { verdict: "ignore",  why: "Now a full path on this site rather than a card, and the one that supplies three of the others. Still set aside personally: it is already present as background, and the intent is to use it as an input to Physical AI rather than to enter hardware design as a destination." },
    "quantum":        { verdict: "ignore",  why: "A long-horizon bet kept as background reading. It must not displace a paying, compounding specialisation." },
    "pqc":            { verdict: "ignore",  why: "Real work with real budgets, but it belongs inside the security hedge rather than as a separate bet." },
    "research":       { verdict: "ignore",  why: "Gated by a PhD that is not on the plan." },
    "consulting":     { verdict: "ignore",  why: "Held as a later option, once the specialisation and the network exist to sell." },
  },

  // Where this person's priorities differ from the neutral catalog. These are
  // exactly the judgements that were wrong to encode globally: English is
  // critical here because of a specific market position, and CUDA is critical
  // here because of an adjacent interest in kernels, not because either is
  // critical for every reader.
  priorityOverrides: {
    ENGLISH: "critical",
    CUDA: "critical",
    AICODE: "critical",
  },

  done: [],

  // The graph has phases, which are capability tiers, not a calendar. This is
  // the calendar.
  sequence: [
    { window: "Months 0-3",   focus: "Foundations that gate everything else",
      items: ["ENGLISH", "CPP", "ONNX"],
      note: "English runs continuously from here on, not as a phase. C++ is the gate for TensorRT, ROS 2 and kernels alike." },
    { window: "Months 3-6",   focus: "The robotics and inference spine",
      items: ["ROS2", "TRT"],
      note: "ROS 2 and TensorRT are the two skills that make a Physical AI profile legible to an employer." },
    { window: "Months 6-9",   focus: "Perception depth and the evaluation habit",
      items: ["GEO3D", "EVAL"],
      note: "3D geometry and SLAM is the hardest thing on this list and the most defensible. Evaluation is added early so every later claim has evidence." },
    { window: "Months 9-12",  focus: "Multimodal on real hardware",
      items: ["VLM", "JET"],
      note: "Vision-language models on Jetson, measured rather than demoed." },
    { window: "Months 12-18", focus: "Capstone and domain",
      items: ["CAPPHYS", "DOMAIN"],
      note: "One deployed perception-to-action system with published numbers, anchored in a specific industry." },
  ],
};

export default OVERLAY;
