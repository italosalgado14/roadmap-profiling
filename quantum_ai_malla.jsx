import { useState, useCallback, useMemo } from "react";

// ─── Phases ─────────────────────────────────────────────────────────────
const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Math, CS & Programming", color: "#94a3b8" },
  { id: "P1", label: "Phase 1", subtitle: "Quantum mechanics", color: "#818cf8" },
  { id: "P2", label: "Phase 2", subtitle: "Gates & SDKs", color: "#6366f1" },
  { id: "P3", label: "Phase 3", subtitle: "Algorithms", color: "#8b5cf6" },
  { id: "P4", label: "Phase 4", subtitle: "Info & error correction", color: "#a855f7" },
  { id: "P5", label: "Phase 5", subtitle: "Quantum ML", color: "#d946ef" },
  { id: "P6", label: "Phase 6", subtitle: "Hardware & control", color: "#ec4899" },
  { id: "P7", label: "Phase 7", subtitle: "Applications", color: "#f59e0b" },
  { id: "P8", label: "Phase 8", subtitle: "Frontier & lead", color: "#fb923c" },
];

// ─── Priority (absolute importance) ────────────────────────────────────
const PRIORITY = {
  critical:  { bg: "#fef2f2", border: "#ef4444", text: "#991b1b", label: "Critical"  },
  desirable: { bg: "#fefce8", border: "#eab308", text: "#854d0e", label: "Desirable" },
  frontier:  { bg: "#f0fdf4", border: "#22c55e", text: "#166534", label: "Frontier"  },
};

// ─── Specialization tracks ─────────────────────────────────────────────
const TRACKS = {
  qml:       { color: "#d946ef", label: "Quantum ML researcher", short: "QML" },
  algo:      { color: "#6366f1", label: "Quantum algorithms", short: "Algorithms" },
  soft:      { color: "#0ea5e9", label: "Quantum software & compilers", short: "Software" },
  hw:        { color: "#ec4899", label: "Quantum hardware & control", short: "Hardware" },
  qec:       { color: "#10b981", label: "Quantum error correction", short: "QEC" },
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
  // ─── P0 ─ Foundations — Math, CS & Programming ─
  { id: "PY", phase: "P0", row: 0, label: "Python & scientific computing",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "NumPy/SciPy/Matplotlib and Jupyter: the implementation substrate every quantum SDK (Qiskit, PennyLane, Cirq) is built on and called from.",
    res:  "NumPy & SciPy docs (free) | VanderPlas Python Data Science Handbook (free) | Jupyter docs (free)" },
  { id: "CLA", phase: "P0", row: 1, label: "Complex linear algebra",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Complex vector spaces, inner products, Hermitian/unitary operators, eigendecomposition, SVD, tensor (Kronecker) products — the literal language of qubits.",
    res:  "Nielsen & Chuang Ch.2 (book) | 3Blue1Brown Essence of Linear Algebra (free) | MIT 18.06 Strang (free) | IBM Quantum Learning (free)" },
  { id: "CALC", phase: "P0", row: 2, label: "Calculus & optimization",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Multivariable calculus, gradients, Lagrange multipliers, convex/gradient-based optimization — the engine under variational algorithms (VQE, QAOA).",
    res:  "3Blue1Brown Essence of Calculus (free) | Boyd & Vandenberghe Convex Optimization (free) | PennyLane parameter-shift demo (free)" },
  { id: "PROB", phase: "P0", row: 3, label: "Probability & statistics",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Distributions, expectation, Bayes, estimation, sampling/shot noise — measurement in QC is intrinsically probabilistic; every result is an estimate.",
    res:  "Blitzstein Stat 110 (free) | Downey Think Stats / Think Bayes (free) | IBM Quantum Learning (free)" },
  { id: "CS", phase: "P0", row: 4, label: "Algorithms & complexity",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Asymptotics, classical algorithms, P/NP, reductions — the baseline that quantum speedups (Grover, Shor) are measured against, hype versus real advantage.",
    res:  "CLRS (book) | Aaronson Quantum Computing Since Democritus (book) | de Wolf Lecture Notes (free)" },
  { id: "CPP", phase: "P0", row: 5, label: "C++ / systems programming",
    priority: "desirable", kind: "elective", tracks: ["hw", "soft"], prereqs: [],
    desc: "Performance-critical simulation, FPGA/real-time control firmware, SDK internals — your embedded/C++ background is a direct edge on the hardware track.",
    res:  "Stroustrup A Tour of C++ (book) | learncpp.com (free) | Krantz et al. Superconducting Qubits Guide (free) | QICK RFSoC control (free)" },
  { id: "CML", phase: "P0", row: 6, label: "Classical machine learning",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["PY", "CALC", "PROB"],
    desc: "Supervised/unsupervised learning, kernels, neural nets, gradient-based training — the classical baseline QML must beat and the hybrid-loop host.",
    res:  "scikit-learn docs (free) | Hands-On ML — Géron (book) | Andrew Ng ML Specialization (Coursera)" },
  // ─── P1 ─ Quantum Mechanics & Qubits ─
  { id: "QM", phase: "P1", row: 0, label: "Quantum mechanics foundations",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["CLA"],
    desc: "QM postulates as linear algebra: Dirac notation, state vectors, Hermitian observables, unitary evolution, the Born rule, measurement collapse.",
    res:  "IBM Quantum Learning (free) | Nielsen & Chuang (book) | Vazirani edX (free)" },
  { id: "QUBIT", phase: "P1", row: 1, label: "Qubits & the Bloch sphere",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["QM"],
    desc: "Single-qubit states, superposition, global vs relative phase, Bloch-sphere geometry, Pauli/rotation gates, single-qubit measurement.",
    res:  "IBM Quantum Learning (free) | PennyLane Codebook (free) | Nielsen & Chuang (book)" },
  { id: "ENT", phase: "P1", row: 2, label: "Multi-qubit systems & entanglement",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["QUBIT"],
    desc: "Tensor-product state spaces, Bell states, separable vs entangled, the no-cloning theorem, partial measurement and reduced density matrices.",
    res:  "IBM Quantum Learning (free) | Nielsen & Chuang (book) | Watrous TQI PDF (free)" },
  // ─── P2 ─ Quantum Computing Fundamentals ─
  { id: "GATES", phase: "P2", row: 0, label: "Quantum gates & the circuit model",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["ENT"],
    desc: "Pauli, Hadamard, phase, CNOT, Toffoli; universal gate sets, reversibility, circuit identities and the gate-based computational model.",
    res:  "IBM Quantum Learning (free) | Nielsen & Chuang (book) | PennyLane Codebook (free)" },
  { id: "SDK", phase: "P2", row: 1, label: "Quantum SDKs & simulators",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["GATES", "PY"],
    desc: "Qiskit/PennyLane/Cirq plus Aer & lightning simulators: build, run, visualize circuits and read counts — the daily quantum programming environment.",
    res:  "IBM Quantum Learning & Qiskit docs (🆓) | PennyLane Codebook & demos (🆓) | Qiskit Global Summer School (🆓) | Nielsen & Chuang (book)" },
  { id: "PROTO", phase: "P2", row: 2, label: "Core protocols",
    priority: "desirable", kind: "branch", tracks: ["algo", "soft"], prereqs: ["ENT", "GATES"],
    desc: "Teleportation, superdense coding and entanglement swapping — the canonical proofs that entanglement is a usable resource — plus BB84 QKD, whose security rests instead on no-cloning and measurement disturbance.",
    res:  "Nielsen & Chuang ch.1-2 (book) | IBM Quantum Learning (🆓) | Watrous, Theory of Quantum Information (🆓) | de Wolf lecture notes (🆓)" },
  { id: "TRANS", phase: "P2", row: 3, label: "Circuit compilation & transpilation",
    priority: "critical", kind: "branch", tracks: ["soft", "hw"], prereqs: ["SDK"],
    desc: "Decompose gates to a basis set, route onto a coupling map with SWAPs, run optimization passes — the layer between an abstract circuit and noisy hardware.",
    res:  "Qiskit transpiler docs (🆓) | IBM Quantum Learning (🆓) | Cirq docs (🆓)" },
  // ─── P3 ─ Quantum Algorithms ─
  { id: "DJ", phase: "P3", row: 0, label: "Oracles & early algorithms",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["GATES"],
    desc: "Quantum oracles, phase kickback, Deutsch-Jozsa and Bernstein-Vazirani: the interference mechanism that powers every quantum speedup.",
    res:  "IBM Quantum Learning (free) | Nielsen & Chuang ch.1 (book) | Qiskit Global Summer School (free)" },
  { id: "QFT", phase: "P3", row: 1, label: "QFT & phase estimation",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["GATES"],
    desc: "Quantum Fourier transform and quantum phase estimation: the workhorse subroutine underneath Shor, HHL and much of quantum algorithms.",
    res:  "IBM Quantum Learning (free) | Nielsen & Chuang ch.5 (book) | Andrew Childs lecture notes (free)" },
  { id: "GROVER", phase: "P3", row: 2, label: "Grover search & amplitude amplification",
    priority: "critical", kind: "branch", tracks: ["algo"], prereqs: ["DJ"],
    desc: "Quadratic-speedup unstructured search, the diffusion operator, and amplitude amplification/estimation as a general-purpose primitive.",
    res:  "IBM Quantum Learning (free) | Nielsen & Chuang ch.6 (book) | PennyLane Codebook (free)" },
  { id: "SHOR", phase: "P3", row: 3, label: "Shor's algorithm & quantum arithmetic",
    priority: "desirable", kind: "branch", tracks: ["algo"], prereqs: ["QFT"],
    desc: "Period finding via phase estimation, modular-arithmetic circuits, and the integer-factoring threat that breaks RSA on a fault-tolerant machine.",
    res:  "Nielsen & Chuang ch.5 (book) | IBM Quantum Learning (free) | Andrew Childs lecture notes (free)" },
  { id: "HHL", phase: "P3", row: 4, label: "HHL & quantum linear algebra",
    priority: "desirable", kind: "branch", tracks: ["algo", "qml"], prereqs: ["QFT"],
    desc: "Quantum linear-systems solving, its strict caveats (state prep, sparsity, condition number, readout), and what it really means for quantum ML.",
    res:  "Aaronson 'Read the fine print' (free) | IBM Quantum Learning (free) | Andrew Childs lecture notes (free)" },
  { id: "BQP", phase: "P3", row: 5, label: "Quantum complexity theory",
    priority: "desirable", kind: "branch", tracks: ["algo"], prereqs: ["DJ", "CS"],
    desc: "BQP and its relation to P/NP, query complexity, and a grounded view of what quantum computers can and cannot speed up.",
    res:  "de Wolf lecture notes (free) | Preskill Ph219 notes (free) | Aaronson lecture notes (free)" },
  { id: "HSIM", phase: "P3", row: 6, label: "Hamiltonian simulation & Trotterization",
    priority: "critical", kind: "branch", tracks: ["algo", "qml"], prereqs: ["GATES", "QFT"],
    desc: "Simulate e^{-iHt} via Trotter-Suzuki product formulas, their error scaling, and post-Trotter pointers — the algorithm with the clearest quantum advantage.",
    res:  "Childs, Lecture Notes on Quantum Algorithms (🆓) | Nielsen & Chuang (book) | PennyLane Hamiltonian-simulation demos (🆓)" },
  { id: "QSVT", phase: "P3", row: 7, label: "QSP, QSVT & qubitization",
    priority: "desirable", kind: "branch", tracks: ["algo"], prereqs: ["QFT", "HHL"],
    desc: "Quantum signal processing, QSVT, LCU and qubitization — the post-2018 framework unifying search, phase estimation, HHL and Hamiltonian simulation.",
    res:  "Martyn et al., Grand Unification of Quantum Algorithms — arXiv (🆓) | Gilyén-Su-Low-Wiebe QSVT paper + Low-Chuang qubitization (🆓) | PennyLane QSP/QSVT demos (🆓)" },
  // ─── P4 ─ Quantum Information & Error Correction ─
  { id: "DENS", phase: "P4", row: 0, label: "Density matrices & open systems",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["QM", "ENT"],
    desc: "Density operators, mixed states, partial trace, and quantum channels (Kraus operators) — the math for describing real, noisy qubits.",
    res:  "Nielsen & Chuang ch.2/8 (book) | Preskill Ph219 notes (free) | QuTiP docs (free)" },
  { id: "QINFO", phase: "P4", row: 1, label: "Quantum information theory",
    priority: "desirable", kind: "branch", tracks: ["algo", "qec"], prereqs: ["DENS"],
    desc: "Fidelity, trace distance, von Neumann entropy, entanglement measures and basic channel capacities — quantifying quantum information.",
    res:  "Watrous, Theory of QI (free) | Nielsen & Chuang ch.9/11/12 (book) | de Wolf lecture notes (free)" },
  { id: "NOISE", phase: "P4", row: 2, label: "Noise, decoherence & NISQ",
    priority: "critical", kind: "branch", tracks: ["hw", "qec"], prereqs: ["DENS"],
    desc: "T1/T2 decoherence, gate and readout error, depolarizing and dephasing channels, and what the NISQ era actually constrains.",
    res:  "Preskill 'Quantum Computing in the NISQ era' (free) | Krantz et al. arXiv:1904.06560 (free) | Qiskit Aer noise docs (free)" },
  { id: "STAB", phase: "P4", row: 3, label: "Stabilizer formalism & classical simulation",
    priority: "desirable", kind: "branch", tracks: ["algo", "qec"], prereqs: ["GATES", "DENS"],
    desc: "Stabilizer/Clifford formalism, Gottesman-Knill, and tensor-network/MPS simulation — what is classically simulable and the shared language of QEC.",
    res:  "Gottesman stabilizer-codes notes (🆓) | Aaronson-Gottesman CHP paper (🆓) | Google Stim (🆓) | quimb (🆓)" },
  { id: "QEC", phase: "P4", row: 4, label: "Quantum error correction",
    priority: "desirable", kind: "branch", tracks: ["qec"], prereqs: ["QINFO", "STAB"],
    desc: "Stabilizer formalism, 3-qubit/Steane/surface codes, syndrome extraction, code distance and thresholds — protecting logical qubits.",
    res:  "Roffe QEC introductory guide (free) | Gottesman stabilizer notes (free) | Nielsen & Chuang ch.10 (book)" },
  { id: "QECIMPL", phase: "P4", row: 5, label: "Implementing QEC codes & decoders",
    priority: "desirable", kind: "branch", tracks: ["qec"], prereqs: ["QEC"],
    desc: "Build and simulate repetition, Steane and rotated surface codes, extract syndromes and run MWPM/union-find decoders against a noise model.",
    res:  "Roffe, QEC: An Introductory Guide — arXiv (🆓) | Google Stim (🆓) | PyMatching decoder (🆓)" },
  { id: "MITIG", phase: "P4", row: 6, label: "Error mitigation",
    priority: "desirable", kind: "branch", tracks: ["qml", "hw"], prereqs: ["NOISE"],
    desc: "Zero-noise extrapolation, probabilistic error cancellation and measurement-error mitigation — squeezing signal out of NISQ devices.",
    res:  "Mitiq docs (free) | Temme et al. ZNE/PEC paper (free) | IBM Quantum error-mitigation docs (free)" },
  // ─── P5 ─ Quantum Machine Learning ─
  { id: "ENCODE", phase: "P5", row: 0, label: "Quantum data encoding",
    priority: "critical", kind: "branch", tracks: ["qml"], prereqs: ["GATES", "CML"],
    desc: "Basis/amplitude/angle encoding and feature maps. The data-loading bottleneck that makes or breaks any quantum ML speedup.",
    res:  "PennyLane demos (free) | Schuld & Petruccione (book) | Cerezo et al. VQA review (free)" },
  { id: "VQC", phase: "P5", row: 1, label: "Variational & parameterized circuits",
    priority: "critical", kind: "branch", tracks: ["qml"], prereqs: ["SDK", "CALC"],
    desc: "Parameterized quantum circuits and the variational principle; a classical optimizer in the loop driving hybrid quantum-classical training.",
    res:  "PennyLane (free) | Cerezo et al. VQA review (free) | IBM Quantum Learning (free)" },
  { id: "VQE", phase: "P5", row: 2, label: "Variational quantum eigensolver",
    priority: "critical", kind: "branch", tracks: ["qml", "algo"], prereqs: ["VQC"],
    desc: "Estimate molecular ground-state energies with a variational ansatz plus Hamiltonian measurement — the flagship NISQ quantum-chemistry algorithm.",
    res:  "PennyLane qchem (free) | Qiskit Nature (free) | Peruzzo et al. 2014 (paper)" },
  { id: "QAOA", phase: "P5", row: 3, label: "QAOA & quantum optimization",
    priority: "critical", kind: "branch", tracks: ["qml", "algo"], prereqs: ["VQC"],
    desc: "Quantum approximate optimization for combinatorial problems (max-cut, QUBO) via alternating cost and mixer layers; depth-p vs quality trade-offs.",
    res:  "Farhi et al. QAOA paper (free) | PennyLane QAOA demo (free) | IBM Quantum Learning (free)" },
  { id: "QKERN", phase: "P5", row: 4, label: "Quantum kernels & quantum SVM",
    priority: "desirable", kind: "branch", tracks: ["qml"], prereqs: ["ENCODE"],
    desc: "Quantum feature maps used as kernels, kernel-target alignment, and a sober look at where quantum kernels might plausibly beat classical ones.",
    res:  "Havlíček et al. 2019 (paper) | Schuld & Killoran 2019 (paper) | PennyLane kernels demo (free)" },
  { id: "QNN", phase: "P5", row: 5, label: "Quantum neural networks & gradients",
    priority: "critical", kind: "branch", tracks: ["qml"], prereqs: ["VQC", "ENCODE"],
    desc: "QNN architectures and the parameter-shift rule for analytic hardware gradients; data re-uploading to boost expressivity.",
    res:  "Schuld et al. parameter-shift (paper) | Pérez-Salinas data re-uploading (free) | PennyLane (free)" },
  { id: "BARREN", phase: "P5", row: 6, label: "Trainability & barren plateaus",
    priority: "desirable", kind: "branch", tracks: ["qml"], prereqs: ["QNN"],
    desc: "Exponentially vanishing gradients in deep/expressive circuits — expressibility- and entanglement-induced plateaus, plus mitigation strategies.",
    res:  "McClean et al. 2018 (paper) | Cerezo et al. 2021 (paper) | PennyLane barren-plateaus demo (free)" },
  { id: "DEQ", phase: "P5", row: 7, label: "Dequantization & quantum-inspired limits",
    priority: "desirable", kind: "branch", tracks: ["qml", "algo"], prereqs: ["ENCODE", "BQP"],
    desc: "The I/O (state-prep/readout) bottleneck and Tang-style dequantization — judging which QML and quantum-linear-algebra speedups actually survive.",
    res:  "Aaronson, Read the Fine Print (🆓) | Ewin Tang dequantization papers — arXiv (🆓) | Schuld & Petruccione, ML with Quantum Computers (book)" },
  // ─── P6 ─ Hardware & Control ─
  { id: "MODAL", phase: "P6", row: 0, label: "Qubit modalities & device physics",
    priority: "critical", kind: "branch", tracks: ["hw"], prereqs: ["QM"],
    desc: "Compare superconducting transmons, trapped ions, photonic, neutral-atom and spin qubits against the DiVincenzo criteria and their trade-offs.",
    res:  "Krantz et al. SC Qubits Guide (free) | Kjaergaard 'State of Play' (free) | Bruzewicz trapped-ion review (free)" },
  { id: "PULSE", phase: "P6", row: 1, label: "Pulse-level control",
    priority: "critical", kind: "branch", tracks: ["hw"], prereqs: ["GATES", "NOISE"],
    desc: "Map logical gates to microwave/laser pulses: Rabi and Ramsey, Qiskit Pulse/OpenPulse, and GRAPE optimal-control pulse shaping.",
    res:  "Krantz et al. drive sections (free) | Qiskit Pulse docs (free) | QuTiP optimal-control (free)" },
  { id: "CTRL", phase: "P6", row: 2, label: "Control electronics & cryo/RF",
    priority: "critical", kind: "branch", tracks: ["hw"], prereqs: ["MODAL", "CPP"],
    desc: "AWGs, RF/microwave up- and down-conversion chains, FPGA real-time feedback, and dilution-fridge wiring — the electronic engineer's niche.",
    res:  "Krantz et al. control sections (free) | QICK RFSoC platform (free) | Krinner cryo-wiring paper (free)" },
  { id: "CHAR", phase: "P6", row: 3, label: "Characterization & calibration",
    priority: "critical", kind: "branch", tracks: ["hw", "qec"], prereqs: ["NOISE", "PULSE"],
    desc: "T1/T2 coherence measurement, randomized benchmarking, gate-set and process tomography, and automated qubit and gate calibration.",
    res:  "Qiskit Experiments (free) | Magesan RB papers (free) | pyGSTi gate-set tomography (free)" },
  { id: "FPGA", phase: "P6", row: 4, label: "Real-time control & FPGA feedback",
    priority: "critical", kind: "branch", tracks: ["hw", "qec"], prereqs: ["CTRL", "NOISE"],
    desc: "FPGA gateware for syndrome extraction and sub-microsecond decode-and-correct feedback, plus classical control co-design — your hardware edge.",
    res:  "QICK FPGA control framework, Fermilab (🆓) | Krantz et al., Quantum Engineer's Guide to Superconducting Qubits — arXiv:1904.06560 (🆓) | Qiskit Pulse & QuTiP (🆓)" },
  { id: "QPU", phase: "P6", row: 5, label: "Cloud QPUs & real hardware",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["SDK"],
    desc: "Run on IBM Quantum, AWS Braket and Azure Quantum: queues, shots, Sampler/Estimator primitives, and real backend topology and error limits.",
    res:  "IBM Quantum Learning (free) | Qiskit Runtime primitives docs (free) | AWS Braket docs (pay-per-shot)" },
  // ─── P7 ─ Applications & Capstone ─
  { id: "ARCH", phase: "P7", row: 0, label: "Hybrid quantum-classical architecture",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["QPU", "VQC"],
    desc: "Architect hybrid workloads: classical orchestration around QPU calls, pre/post-processing, shot batching, and honest cost/latency tradeoffs vs classical.",
    res:  "IBM Quantum Learning (free) | Qiskit Runtime docs (free) | PennyLane demos (free) | Cerezo et al. VQA review (free)" },
  { id: "CHEM", phase: "P7", row: 1, label: "Quantum chemistry & simulation",
    priority: "desirable", kind: "branch", tracks: ["algo", "qml"], prereqs: ["VQE", "HSIM"],
    desc: "Map molecular Hamiltonians to qubits (Jordan-Wigner/Bravyi-Kitaev) and run VQE for ground-state energies; the strongest near-term quantum use case.",
    res:  "Qiskit Nature tutorials (free) | PennyLane qchem demos (free) | OpenFermion (free) | Cerezo et al. VQA review (free)" },
  { id: "QOPT", phase: "P7", row: 2, label: "Industrial quantum optimization",
    priority: "desirable", kind: "branch", tracks: ["algo", "qml"], prereqs: ["QAOA"],
    desc: "Cast logistics/scheduling problems as QUBO/Ising, solve via QAOA or annealing, and benchmark honestly against classical solvers that usually still win.",
    res:  "PennyLane QAOA demos (free) | Qiskit optimization tutorials (free) | D-Wave Ocean docs (free) | Cerezo et al. VQA review (free)" },
  { id: "QFIN", phase: "P7", row: 3, label: "Quantum computing in finance",
    priority: "desirable", kind: "branch", tracks: ["algo", "qml"], prereqs: ["QAOA", "HHL"],
    desc: "Quantum amplitude estimation for Monte-Carlo pricing/risk (a quadratic speedup on paper) plus portfolio optimization; weigh against a sober value picture.",
    res:  "Qiskit Finance tutorials (free) | IBM Quantum Learning (free) | Andrew Childs algorithms notes (free) | Nielsen & Chuang (book)" },
  { id: "PQC", phase: "P7", row: 4, label: "Post-quantum cryptography & security",
    priority: "desirable", kind: "branch", tracks: ["algo"], prereqs: ["SHOR"],
    desc: "Shor breaks RSA/ECC once a large fault-tolerant QPU exists; deploy NIST PQC (ML-KEM/ML-DSA/SLH-DSA) now against harvest-now-decrypt-later risk.",
    res:  "NIST FIPS 203/204/205 (free) | Open Quantum Safe / liboqs (free) | Andrew Childs algorithms notes (free) | Nielsen & Chuang (book)" },
  { id: "RESEST", phase: "P7", row: 5, label: "Fault-tolerance & resource estimation",
    priority: "desirable", kind: "branch", tracks: ["qec", "algo"], prereqs: ["QEC"],
    desc: "Estimate logical qubits, T-counts, code distance and overhead for real apps (chemistry, Shor) — the honest tool for judging how far FTQC is.",
    res:  "Beverland et al., Assessing requirements to scale to practical quantum advantage — arXiv (🆓) | Azure Quantum Resource Estimator (🆓) | Roffe QEC guide (🆓)" },
  // ─── P8 ─ Frontier & Leadership ─
  { id: "LEAD", phase: "P8", row: 0, label: "Technical leadership & research communication",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["ARCH"],
    desc: "Read and write papers, give talks, contribute to quantum open source, and translate results for non-specialist stakeholders.",
    res:  "arXiv quant-ph + Quantum journal (free) | Qiskit/PennyLane open source (free) | Google Technical Writing (free) | Staff Engineer — Larson (book)" },
  { id: "FTQC", phase: "P8", row: 1, label: "Fault-tolerant quantum computing",
    priority: "frontier", kind: "branch", tracks: ["qec"], prereqs: ["QEC"],
    desc: "Logical qubits, magic-state distillation, lattice surgery, fault-tolerant thresholds and resource estimation — the path beyond NISQ.",
    res:  "Gottesman FT notes (free) | Roffe QEC guide (free) | Nielsen & Chuang ch.10 (book) | Azure Quantum Resource Estimator (free)" },
  { id: "QECR", phase: "P8", row: 2, label: "QEC & decoder research",
    priority: "frontier", kind: "branch", tracks: ["qec"], prereqs: ["QEC"],
    desc: "Surface and LDPC codes, real-time decoders (MWPM, union-find, neural) — the frontier where most near-term progress concentrates.",
    res:  "Roffe QEC guide (free) | Stim — Gidney (free) | PyMatching — Higgott (free) | qLDPC + surface-code papers, arXiv (free)" },
  { id: "QMLR", phase: "P8", row: 3, label: "QML research frontier",
    priority: "frontier", kind: "branch", tracks: ["qml"], prereqs: ["QNN", "BARREN"],
    desc: "Provable advantage in learning, quantum data, dequantization, geometric/equivariant QML — with honest skepticism about the hype.",
    res:  "PennyLane demos (free) | Cerezo et al. VQA review (free) | Schuld & Petruccione (book) | Huang et al. quantum-data papers (free)" },
  { id: "ADV", phase: "P8", row: 4, label: "Quantum advantage & benchmarking",
    priority: "frontier", kind: "branch", tracks: ["algo", "qml"], prereqs: ["GROVER", "QAOA"],
    desc: "Random-circuit sampling, application benchmarks (QED-C), volumetric metrics — rigorously defining and claiming quantum advantage.",
    res:  "QED-C benchmark suite (free) | Google Sycamore + IBM utility papers (free) | Quantum Volume / CLOPS (free) | Qiskit + Stim (free)" },
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
      <h2 className="sr-only">Quantum AI curriculum grid with 9 phases, 5 specialization tracks, and prerequisite dependencies</h2>

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
