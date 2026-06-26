# Quantum AI Learning Roadmap
## Quantum Machine Learning & Quantum Systems Engineer Path

---

## Executive Summary

**Quantum AI** sits at the intersection of two fields that are each hard on their own: quantum computing (manipulating qubits to run algorithms that classical machines cannot efficiently simulate) and machine learning (parameterized models trained on data). This roadmap frames you not as a physicist chasing a postdoc, but as a **Quantum Machine Learning & Quantum Systems Engineer** — the person who can reason about variational quantum circuits and quantum kernels *and* about the warm, noisy, RF- and FPGA-driven control hardware those circuits actually run on. For an Electronic-Engineering graduate with embedded/C++ and edge-AI experience, that second half is the rare, high-moat differentiator. Almost everyone entering quantum comes from CS or physics and treats the QPU as a black box; very few can speak control electronics, cryogenic and RF signal chains, and real-time FPGA control loops. That is exactly the **Quantum hardware & control** track, and it is where your existing skills transfer directly and where the field is most starved for talent. Lean into it: it is your wedge into the industry, with QML as the application layer on top.

**Honest horizon — read this first.** Practical, *commercial* quantum advantage for machine learning is broadly **5-10+ years out**, and may never arrive for some problem classes. Today's hardware is NISQ (noisy, intermediate-scale, no error correction at useful depth); most "quantum ML" results are small, brittle, or matched by classical methods. Treat this as a **long-horizon bet layered on top of a paying classical ML / edge career — not a near-term job switch.** The realistic near-term roles that *do* exist are in hardware and control engineering (where your background already fits), in quantum software/compiler tooling, and in the small but growing applied-research teams at hardware companies and national labs. Keep your classical ML/edge skills sharp and current; let quantum compound in the background. Every node below is written to be honest about what works now versus what is still a research promise.

**Three priority levels** run throughout:
- 🔴 **Critical** — the non-negotiable spine for your chosen track.
- 🟡 **Desirable** — high-ROI competitive edge, but not blocking.
- 🟢 **Frontier** — long-horizon research bets; exciting, but unproven.

**Five specialization tracks** (pick one or more; the doc explains the study material per node):
- **Quantum ML researcher** — variational circuits, quantum kernels, QML expressivity/trainability (barren plateaus), and where quantum may or may not beat classical ML.
- **Quantum algorithms** — the algorithmic canon (Grover, QFT/phase estimation, HHL, VQE/QAOA), complexity, and honest speedup analysis.
- **Quantum software & compilers** — SDKs (Qiskit, PennyLane, Cirq), transpilation, circuit optimization, pulse-level control, and the classical/quantum toolchain.
- **Quantum hardware & control** — *your differentiator:* qubit modalities, cryogenics, microwave/RF control chains, FPGA-based real-time control (e.g. QICK), readout and calibration.
- **Quantum error correction** — stabilizer codes, surface codes, decoders, and the fault-tolerance roadmap that gates any long-term advantage.

**Resource tags:**
- ✅ Included in Coursera Premium (or available as a free audit)
- 🆓 Free
- 💰 Paid (cost noted)

**Per-node sections:** every node lists `Prerequisites`, `Tracks`, `Resources`, a `Study approach`, and a `Project`. The project is the proof of competence — a circuit you ran, a control loop you closed, or a decoder you benchmarked beats any certificate.

---

## PHASE 0: Foundations — Math, CS & Programming

### 🔴 Python & scientific computing
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Jake VanderPlas — *Python Data Science Handbook*, NumPy & Matplotlib chapters (🆓 online)
- NumPy / SciPy — official documentation and tutorials (🆓)
- Project Jupyter — JupyterLab documentation (🆓)
- Nicolas Rougier — *From Python to NumPy*, vectorization patterns (🆓)
- Robert Johansson — *Numerical Python*, Apress (author of QuTiP) (💰)
**Study approach:** You already program, so treat this as fluency drilling, not a from-scratch course — skip syntax tutorials. Go straight to vectorized NumPy (broadcasting, einsum, complex dtypes) and scipy.linalg, because quantum state vectors and operators are literally complex arrays and Kronecker products. Live in Jupyter notebooks: every quantum SDK assumes that workflow and renders circuits and Bloch spheres inline. The one habit that matters is to vectorize and then verify each result against a known closed-form answer instead of trusting a loop.
**Project:** Build a tiny state-vector simulator from scratch in a NumPy notebook: represent an n-qubit state as a complex vector and apply gates via Kronecker products. The full spec is self-contained — start the 2-qubit register in |00> = [1,0,0,0], apply Hadamard H = (1/sqrt(2))*[[1,1],[1,-1]] to qubit 0 (as H ⊗ I), then apply CNOT = [[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]], and sample outcomes using the Born rule p(x)=|<x|psi>|^2 over the basis states. Validate your distribution against Qiskit's Aer simulator on the identical circuit. Warning: Aer uses little-endian qubit ordering while a naive Kronecker build is big-endian, so reconcile the bit ordering (or compare sorted probability vectors / the raw statevector under one fixed convention) before concluding the outputs match.

### 🔴 Complex linear algebra
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, Ch. 2 linear-algebra primer (💰)
- 3Blue1Brown — *Essence of Linear Algebra* (🆓 YouTube)
- Gilbert Strang — MIT 18.06 *Linear Algebra* (🆓 OCW / YouTube)
- Sheldon Axler — *Linear Algebra Done Right*, Springer (💰)
- IBM Quantum Learning — *Basics of Quantum Information*, single/multi-system math (🆓)
**Study approach:** This is the single most leveraged math node — quantum mechanics is just linear algebra over complex Hilbert spaces, so over-invest here rather than rushing past it. If your engineering linear algebra was real-valued, refit every concept to the complex case: the conjugate transpose (dagger), Hermitian versus unitary operators, the spectral theorem, and above all the Kronecker product, which is how multi-qubit systems compose. Use 3Blue1Brown for geometric intuition, then Nielsen & Chuang's Chapter 2 or Axler for rigor. The habit that matters: for every gate you meet later, write out its matrix and confirm by hand that it is unitary.
**Project:** Write a short notebook plus a one-page note proving the identities you will lean on constantly: that the Pauli matrices are both Hermitian and unitary, that any single-qubit gate is a 2x2 unitary, and that the tensor product of two unitaries is unitary. Add an SVD-based Schmidt decomposition of a two-qubit state and use the Schmidt rank to detect entanglement, checked numerically against NumPy.

### 🔴 Calculus & optimization
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- 3Blue1Brown — *Essence of Calculus* (🆓 YouTube)
- Imperial College London — *Mathematics for Machine Learning* (Multivariate Calculus), Coursera (✅ / 🆓 audit)
- Boyd & Vandenberghe — *Convex Optimization* (🆓 PDF)
- PennyLane — *Quantum gradients and the parameter-shift rule* demo (🆓)
- Cerezo et al. — *Variational Quantum Algorithms*, Nature Reviews Physics (🆓 arXiv)
**Study approach:** You need just enough analysis to train variational circuits, so prioritize gradients and optimization over integration theory. Be fluent with the chain rule and gradient descent, then learn why noisy quantum cost landscapes are hard: gradient-free optimizers (COBYLA, SPSA) and the parameter-shift rule that gives analytic quantum gradients. Skim convex optimization for vocabulary — convexity, Lagrange multipliers, KKT — but don't go deep, since quantum loss surfaces are generally non-convex and prone to barren plateaus. The habit that matters: always ask how a parameter's gradient is actually estimated on real hardware.
**Project:** Build a notebook that minimizes a simple two-parameter function three ways — analytic gradient descent, finite differences, and the parameter-shift rule — and plots their loss curves. Then use the parameter-shift gradient to train a one-qubit PennyLane circuit to prepare a target state, and compare convergence and shot cost against the classical baselines.

### 🔴 Probability & statistics
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Joseph Blitzstein — Harvard *Stat 110: Introduction to Probability*, lectures + book (🆓)
- Allen Downey — *Think Stats* and *Think Bayes* (🆓)
- University of Michigan — *Statistics with Python* specialization, Coursera (✅ / 🆓 audit)
- IBM Quantum Learning — measurement and expectation-value material (🆓)
**Study approach:** Frame everything around the measurement problem: a circuit's output is a probability distribution you sample with finitely many shots, so you are always doing statistical estimation. Solidify expectation, variance, the binomial/multinomial distributions, and how standard error shrinks as 1/sqrt(shots) — this number directly sets how many shots an experiment needs. Pick up Bayesian estimation and maximum likelihood for the calibration and tomography you will meet on the hardware track. The habit that matters: never report a measured expectation value without its shot-noise error bar.
**Project:** Write a notebook that estimates a qubit observable's expectation value by sampling, plots the estimate with its error bar against shot count, and empirically confirms the 1/sqrt(N) scaling. Extend it to single-qubit state tomography by reconstructing a Bloch vector from X, Y, and Z measurement statistics, and compare the reconstruction to the known prepared state.

### 🔴 Algorithms & complexity
**Prerequisites:** none (start here)
**Tracks:** All specializations
**Resources:**
- Cormen, Leiserson, Rivest & Stein — *Introduction to Algorithms* (CLRS) (💰)
- Tim Roughgarden — *Algorithms Illuminated* / Stanford algorithms lectures (🆓 lectures, 💰 book)
- Scott Aaronson — *Quantum Computing Since Democritus* (💰) and lecture notes (🆓)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, complexity sections (🆓 arXiv)
- Complexity Zoo — online complexity-class reference (🆓)
**Study approach:** Your goal is to judge quantum-speedup claims honestly, so center complexity theory, not coding-interview drills. Get fluent with big-O, the main classical algorithm families, and the complexity landscape around quantum: P, NP, BQP, and why BQP is not known to contain NP. Understand what polynomial-versus-exponential speedup actually means, and why most advertised speedups are merely quadratic (Grover) and easily erased by classical hardware advantages. The habit that matters: for every quantum algorithm, write the best known classical runtime next to it before you believe the advantage.
**Project:** Produce a short, well-sourced write-up comparing three problems — unstructured search, integer factoring, and one BQP-flavored problem of your choice (acceptable concrete targets: Simon's problem, Forrelation, or HHL-style quantum linear systems with the usual caveats about state-preparation and readout) — listing the best known classical complexity, the quantum complexity, and the resource cost. For the resource column, cite published resource estimates with their source rather than deriving them yourself (for factoring, anchor on the Gidney–Ekerå 2021 estimate, '~20 million noisy qubits to factor RSA-2048 in ~8 hours'). Close with an honest verdict, resting on those sourced figures, on which problems (if any) offer practical near-term advantage rather than asymptotic-only wins.

### 🟡 C++ / systems programming
**Prerequisites:** none (start here)
**Tracks:** Quantum hardware & control · Quantum software & compilers
**Resources:**
- Bjarne Stroustrup — *A Tour of C++* (💰)
- learncpp.com — modern C++ tutorial (🆓)
- Krantz et al. — *A Quantum Engineer's Guide to Superconducting Qubits*, arXiv:1904.06560 (🆓)
- QICK — Quantum Instrumentation Control Kit, open-source RFSoC/FPGA control stack + paper (🆓)
- Qiskit Aer — C++ high-performance simulator source and docs (🆓)
**Study approach:** You already own this from embedded work, so treat it as a differentiator to keep sharp rather than something to relearn. Concentrate where it pays off in quantum: modern C++ (RAII, move semantics, templates) for the high-performance simulator backends like Qiskit Aer and QuTiP's compiled core, and real-time/FPGA firmware for qubit control electronics — exactly the niche pure software engineers lack. Skip the fundamentals and instead read the C++ source of one quantum simulator and one open control stack such as QICK on RFSoC. The habit that matters: profile before optimizing, and know where every microsecond of a control loop's latency budget goes.
**Project:** Build a minimal C++ state-vector simulator and benchmark it against your earlier PY-node NumPy version as the primary, self-contained deliverable. Make the benchmark fair: fix the qubit count and gate sequence, pin compiler flags (e.g. -O3 -march=native), and remember NumPy already dispatches to optimized BLAS — so the win has to come from cache-friendly in-place gate application that avoids ever materializing the full Kronecker-product matrix, not from 'C++ is faster' alone. Publish the code with timing comparisons and a short note on what the optimization changed. Optional stretch goal: contribute a small, benchmarked custom gate or noise channel to an open-source quantum codebase with a C++ core such as Qiskit Aer — but treat the upstream PR as a bonus, since merge timing is outside your control and 'shipped' should not depend on it.

### 🔴 Classical machine learning
**Prerequisites:** Python & scientific computing, Calculus & optimization, Probability & statistics
**Tracks:** All specializations
**Resources:**
- Aurélien Géron — *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow*, 3rd ed. (💰 ~$60)
- Andrew Ng — *Machine Learning Specialization*, DeepLearning.AI on Coursera (🆓 audit / ✅)
- scikit-learn — official documentation and user guide (🆓)
- Hastie, Tibshirani & Friedman — *The Elements of Statistical Learning*, free author PDF (🆓)
- Christopher Bishop — *Pattern Recognition and Machine Learning*, free PDF (🆓)
**Study approach:** You already have edge-AI/ML experience, so treat this as targeted consolidation rather than a first pass. Nail the two ideas QML actually reuses: the kernel trick, because quantum kernels are a direct analog, and the gradient-descent training loop, because variational quantum circuits are trained exactly like a neural net by a classical optimizer in the loop. Be ruthless about establishing strong classical baselines — most QML papers underwhelm precisely because they never beat a well-tuned scikit-learn model. The habit that matters: for every dataset, fit a linear, kernel, and small-NN baseline and log its score before you ever reach for a quantum model.
**Project:** A benchmark repo that trains logistic regression, an RBF-kernel SVM, and a small MLP on a tabular dataset, with clean train/val/test splits, cross-validation, and a single metrics table. Structure the training loop as a reusable, model-agnostic optimize-and-evaluate host so that a variational quantum classifier can later be dropped in and compared head-to-head against these classical baselines.

---

## PHASE 1: Quantum Mechanics & Qubits

### 🔴 Quantum mechanics foundations
**Prerequisites:** Complex linear algebra
**Tracks:** All specializations
**Resources:**
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch. 2 is the canonical postulates treatment (💰)
- IBM Quantum Learning — *Basics of Quantum Information* course, learning.quantum.ibm.com (🆓)
- Umesh Vazirani — *Quantum Mechanics and Quantum Computation*, UC Berkeley on edX (🆓 audit)
- John Preskill — *Ph219/CS219 Lecture Notes*, Caltech, for postulate-level depth (🆓)
- 3Blue1Brown — *Essence of Linear Algebra*, YouTube, to lock the prerequisite intuition (🆓)
**Study approach:** You have the math, so skip the historical wave-particle and Schrödinger-PDE material that physics courses open with and go straight to the linear-algebra formulation. Learn the four postulates as concrete operations: states are complex unit vectors, observables are Hermitian matrices, evolution is a unitary, and the Born rule turns amplitudes into probabilities. Do not let Dirac notation intimidate you — a ket is just a column vector and a bra its conjugate transpose. The one habit that matters: re-derive every postulate as a small NumPy computation on 2- and 4-dimensional vectors until the abstraction feels like matrix algebra you already know.
**Project:** A from-scratch NumPy notebook that implements the postulates: represent states as complex column vectors, observables as Hermitian matrices, and evolution as unitary matrices. Verify normalization, compute expectation values ⟨ψ|A|ψ⟩, and reproduce Born-rule probabilities by Monte Carlo sampling that matches the analytic |amplitude|² to within statistical error. Ship it as a documented notebook that doubles as your reference card for the formalism.

### 🔴 Qubits & the Bloch sphere
**Prerequisites:** Quantum mechanics foundations
**Tracks:** All specializations
**Resources:**
- IBM Quantum Learning — *Single Systems* (Basics of Quantum Information), free and interactive (🆓)
- PennyLane Codebook — *Introduction to Quantum Computing* nodes on qubits and the Bloch sphere (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, §1.2 and §4.2 on the Bloch sphere (💰)
- Microsoft — *Quantum Katas*, single-qubit gate exercises in Q# (🆓)
- Qiskit — *Qiskit Global Summer School* lectures, YouTube (🆓)
**Study approach:** Overlearn the Bloch sphere — it is the one mental model that makes single-qubit reasoning automatic. Map every state and every gate to a rotation: Pauli X/Y/Z, H, S, and T each become a specific rotation you should be able to picture. Internalize that global phase is physically unobservable while relative phase is everything, because conflating the two is the classic beginner mistake. Your RF and control background is a direct advantage here: single-qubit gates are literally calibrated microwave pulses (Rabi, Ramsey), so connect the sphere geometry to pulse-level control from day one. The habit that matters: before running any gate, predict where the Bloch vector moves.
**Project:** An interactive Bloch-sphere simulator (Python with QuTiP or Qiskit plus matplotlib) that takes a sequence of single-qubit gates, animates the state-vector trajectory on the sphere, and reports measurement statistics in a chosen basis. Demonstrate that H followed by a Z-basis measurement gives 50/50, and that two states differing only by relative phase are indistinguishable in the Z basis but separated cleanly in the X basis.

### 🔴 Multi-qubit systems & entanglement
**Prerequisites:** Qubits & the Bloch sphere
**Tracks:** All specializations
**Resources:**
- IBM Quantum Learning — *Multiple Systems* (Basics of Quantum Information), tensor products and entanglement (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, Box 12.1 (no-cloning theorem) and §2.4-2.5 (density operators, partial trace) (💰)
- John Watrous — *The Theory of Quantum Information*, free PDF, rigorous tensor-product and entanglement treatment (🆓)
- PennyLane Codebook — entanglement and Bell-state demo nodes (🆓)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv (🆓)
**Study approach:** Make peace with the fact that an n-qubit state lives in a 2ⁿ-dimensional tensor-product space — that 2ⁿ-dimensional state space is what makes generic classical simulation hard and is a prerequisite for quantum advantage, but dimension alone is not sufficient: entanglement structure and non-stabilizerness (magic) matter, since stabilizer states in the same space are classically simulable (Gottesman-Knill). Construct the four Bell states by hand and learn to test separability: a product state factors as a tensor product, an entangled one provably does not. Treat partial measurement concretely — measuring one half of a Bell pair instantly determines the marginal of the other, which is best understood via the reduced density matrix (partial trace). The habit that matters: for a two-qubit pure state, compute the reduced density matrix and check its purity — the reduced state is mixed (purity < 1) iff the state is entangled; for mixed states this test fails, so reach for the PPT / Peres-Horodecki criterion or concurrence instead.
**Project:** A from-scratch NumPy multi-qubit engine that builds states via Kronecker products, applies CNOT to generate all four Bell states from product inputs, and includes a separability checker that, for pure states, computes the reduced density matrix and reports entanglement through its eigenvalues and purity (assume pure inputs, or implement the PPT / Peres-Horodecki criterion to also handle mixed states). Add a short numerical demonstration of no-cloning: define the unitary that correctly clones the computational basis — a CNOT with a blank ancilla, copying |0⟩→|00⟩ and |1⟩→|11⟩ — then apply that same unitary to the non-orthogonal input |+⟩ and show the output is the entangled (|00⟩+|11⟩)/√2 rather than the desired product |+⟩|+⟩. Optionally show numerically that any candidate cloning unitary must preserve inner products, so |⟨0|+⟩| would have to equal |⟨0|+⟩|², a contradiction.

---

## PHASE 2: Quantum Computing Fundamentals

### 🔴 Quantum gates & the circuit model
**Prerequisites:** Multi-qubit systems & entanglement
**Tracks:** All specializations
**Resources:**
- IBM Quantum Learning — *Basics of Quantum Information*, gates & circuits modules, learning.quantum.ibm.com (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch. 4 (quantum circuits, universal gate sets) (💰)
- PennyLane — *Codebook*, single- and multi-qubit gate modules, pennylane.ai (🆓)
- Microsoft — *Quantum Katas*, BasicGates module, Q#/Azure Quantum (🆓)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv (🆓, concise gate/circuit treatment)
**Study approach:** Treat every single-qubit gate as a 2x2 unitary and watch what it does on the Bloch sphere before memorizing names. Get fluent with the controlled gates (CNOT, CZ, Toffoli) because the two-qubit gates are where entanglement and all the hardware cost live. The one habit that matters: prove circuit identities by hand and then verify them numerically (HXH=Z, three CNOTs make a SWAP via CNOT(a→b)·CNOT(b→a)·CNOT(a→b); note that two CNOTs in the same direction just square to the identity). Skip the Solovay-Kitaev universality proof for now — know that {H, T, CNOT} is universal and move on.
**Project:** A notebook that builds a tiny gate library from raw matrices, asserts each gate is unitary (and therefore reversible), and numerically verifies five circuit identities. Then decompose a Toffoli into one- and two-qubit gates and confirm the composed unitary matches the ideal CCX, printing the statevector before and after for a couple of inputs.

### 🔴 Quantum SDKs & simulators
**Prerequisites:** Quantum gates & the circuit model, Python & scientific computing
**Tracks:** All specializations
**Resources:**
- IBM — *Quantum Learning* & Qiskit docs, the default SDK reference and tutorials (🆓)
- Xanadu — *PennyLane Codebook* & demos, best once you reach variational/QML (🆓)
- IBM — *Qiskit Global Summer School*, recorded lectures + labs (🆓)
- Google — *Cirq* docs, for Google-style hardware idioms (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, theory grounding (book)
**Study approach:** Pick one SDK and get fluent before sampling the others — Qiskit is the safe default. This is the keyboard-time node, so build circuits, run them on both Aer statevector and sampling backends, and read counts and Bloch/histogram plots every day rather than reading theory. The one habit that matters: reproduce every textbook circuit you learn as runnable code immediately. Add PennyLane the moment you hit variational/QML work, and Cirq only when you need Google-device idioms. Skip multi-SDK comparisons until you can write a clean circuit from memory in at least one.
**Project:** A repo of 8-10 canonical circuits (Bell/GHZ, teleportation, Deutsch-Jozsa, 3-qubit Grover) in Qiskit, each with a statevector check, a sampled-counts histogram, and an assertion that simulated output matches the analytic expectation. Port two of them to PennyLane to demonstrate cross-SDK fluency. Ship with a README that shows the histograms and explains how each circuit was validated.

### 🟡 Core protocols
**Prerequisites:** Multi-qubit systems & entanglement, Quantum gates & the circuit model
**Tracks:** Quantum algorithms · Quantum software & compilers
**Resources:**
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch.1-2 (book)
- IBM — *Quantum Learning*, protocol tutorials with runnable circuits (🆓)
- John Watrous — *The Theory of Quantum Information*, rigorous treatment (🆓)
- Ronald de Wolf — *Quantum Computing Lecture Notes*, clean protocol derivations (🆓)
**Study approach:** Derive each protocol on paper before touching code — teleportation and superdense coding are two faces of the same Bell-basis manipulation, and seeing that duality matters far more than memorizing the circuits. Then implement each on a simulator and confirm the conditional corrections and decoding actually recover the right state. Treat BB84 as your entry point into eavesdropping and security reasoning, not just another circuit. Skip the heavy QKD-hardware and finite-key-analysis literature at this stage; you only need the conceptual core that feeds QEC and quantum networking.
**Project:** A notebook implementing teleportation, superdense coding, and entanglement swapping in Qiskit, each validated by recovering the input state (fidelity or state/process tomography) over many shots. Add a BB84 simulation with an optional eavesdropper that demonstrates the quantum bit-error-rate rising when interception occurs. The write-up should explain why each protocol consumes entanglement as a resource.

### 🔴 Circuit compilation & transpilation
**Prerequisites:** Quantum SDKs & simulators
**Tracks:** Quantum software & compilers · Quantum hardware & control
**Resources:**
- IBM — *Qiskit transpiler* docs and pass-manager guide, the core reference (🆓)
- IBM — *Quantum Learning*, transpilation and ISA-targeting modules (🆓)
- Google — *Cirq* docs, device and routing model for comparison (🆓)
**Study approach:** Start by transpiling circuits you already wrote against a real backend's basis set and coupling map, then read the output and watch SWAP count and depth explode. Learn the pass-manager stages — decompose, route, optimize, schedule — by toggling optimization_level and diffing the results. Internalize that qubit routing on a sparse coupling map is the expensive, hardware-specific part, not gate decomposition. The habit that matters: judge a circuit by its transpiled two-qubit-gate count and depth, never the abstract version.
**Project:** Take a fixed algorithm — a 5-7 qubit QFT or a single Trotter step — and transpile it across optimization levels 0-3 against a real IBM backend coupling map. Produce a short report with plots of two-qubit-gate count and circuit depth versus optimization level, and annotate where and why SWAPs were inserted. Conclude with the lowest-depth result you achieved and the routing choice that drove it.

---

## PHASE 3: Quantum Algorithms

### 🔴 Oracles & early algorithms
**Prerequisites:** Quantum gates & the circuit model
**Tracks:** All specializations
**Resources:**
- IBM Quantum Learning — *Fundamentals of Quantum Algorithms* course, Deutsch-Jozsa & oracle lessons (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch. 1.4 on early algorithms (💰)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv, oracle & query-model treatment (🆓)
- Microsoft — *Quantum Katas*, Deutsch-Jozsa and oracle implementation exercises in Q# (🆓)
- Qiskit Global Summer School lectures on YouTube — phase kickback walkthroughs (🆓)
**Study approach:** Start by hand-deriving phase kickback on a single controlled gate until it is muscle memory — it is the one idea that unlocks everything in this phase. Do not get lost debating whether oracles are 'cheating'; treat them as a query-cost abstraction and move on. Code Deutsch-Jozsa and Bernstein-Vazirani in Qiskit, then trace the statevector after each gate to *see* the interference cancel the wrong answers. These algorithms are toy problems with no practical payoff, so spend your time on the mechanism, not the applications. The habit that matters: always ask 'where did the destructive interference happen?' for any speedup you study later.
**Project:** Build a single Qiskit (or PennyLane) notebook that implements Deutsch-Jozsa and Bernstein-Vazirani for n-bit oracles, with a statevector trace after every gate showing how phase kickback writes the answer into the input register's phases. Add a markdown cell that explains, in your own words, exactly where the classical-to-quantum query advantage comes from, and run it on a real IBM backend for n=3 to compare ideal vs. noisy output.

### 🔴 QFT & phase estimation
**Prerequisites:** Quantum gates & the circuit model
**Tracks:** All specializations
**Resources:**
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch. 5 on QFT & phase estimation (💰)
- IBM Quantum Learning — *Fundamentals of Quantum Algorithms*, QFT and QPE units with Qiskit code (🆓)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, UMD, phase estimation chapter (🆓)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv, clean QFT derivation (🆓)
- PennyLane — QPE demos and the *Codebook* Fourier-transform module (🆓)
**Study approach:** Build the QFT bottom-up from controlled-phase rotations and convince yourself it is just the classical DFT acting on amplitudes — then immediately pivot, because QPE is what you will actually reuse. Spend most of your effort on phase estimation: what it reads out, how the inverse QFT turns a phase into a measurable bitstring, and how precision trades against ancilla count. Implement QPE on a trivial unitary (a single-qubit phase gate) where you know the eigenvalue, so you can verify the readout exactly. Note the practical sting early: full QFT needs exponentially fine rotation angles, which is brutal on noisy hardware, motivating approximate QFT. The one habit: for any algorithm, identify whether QPE is hiding inside it.
**Project:** Implement quantum phase estimation from scratch in Qiskit for a small unitary with known eigenvalues, sweep the number of counting qubits, and plot estimated phase error vs. ancilla count and vs. shot noise. Include an approximate-QFT variant that drops small-angle rotations and quantify the accuracy-vs-depth tradeoff on a noisy simulator and one real backend run.

### 🔴 Grover search & amplitude amplification
**Prerequisites:** Oracles & early algorithms
**Tracks:** Quantum algorithms
**Resources:**
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch. 6 on quantum search (💰)
- IBM Quantum Learning — *Fundamentals of Quantum Algorithms*, Grover's algorithm unit (🆓)
- PennyLane — *Codebook* Grover module and amplitude-amplification demos (🆓)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, amplitude amplification & estimation (🆓)
- Microsoft — *Quantum Katas*, Grover's search and oracle-construction exercises (🆓)
**Study approach:** Internalize Grover as a geometric rotation in the 2D plane spanned by the 'good' and 'bad' states — that picture tells you why you need about sqrt(N) iterations and why over-rotating makes it worse. Build the diffusion operator yourself rather than calling a library Grover, so you understand the reflection-about-the-mean. Then generalize: amplitude amplification is the real prize, since it speeds up any subroutine with a checkable success condition, and amplitude estimation underlies quantum Monte Carlo. Stay honest about the limit — quadratic, not exponential, and the oracle must be cheap to implement or the speedup evaporates. The habit: count oracle calls, not raw gates, when reasoning about advantage.
**Project:** Write a Grover search in Qiskit for a tiny, fully specified instance — e.g. a 3-variable, 2-to-3-clause SAT formula, or 2-coloring of a 3-4 node graph — via a hand-built phase oracle and explicit diffusion operator. Build the oracle first and verify it in isolation (confirm it flips the phase of exactly the known solution states) before wiring in the diffusion operator, since a sloppy multi-clause oracle silently breaks the curve. Plot success probability vs. iteration count to confirm the sqrt(N) optimum and the over-rotation dip. Then extend it with a count-the-solutions routine using iterative or maximum-likelihood amplitude estimation (cheaper and within reach of your QPE prerequisite, rather than full canonical QAE), and document where the oracle cost would erase the speedup on real hardware.

### 🟡 Shor's algorithm & quantum arithmetic
**Prerequisites:** QFT & phase estimation
**Tracks:** Quantum algorithms
**Resources:**
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch. 5.3 order finding & factoring (💰)
- IBM Quantum Learning — *Fundamentals of Quantum Algorithms*, order-finding & phase-estimation lessons with current Qiskit (🆓; avoid the archived Qiskit Textbook, whose Shor code targets a removed API)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, UMD, factoring & hidden-subgroup view (🆓)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv, Shor derivation (🆓)
- NIST — Post-Quantum Cryptography standards FIPS 203/204/205 (ML-KEM, ML-DSA, SLH-DSA) for the defensive side (🆓)
**Study approach:** Separate the two halves cleanly: the classical reduction from factoring to order-finding (continued fractions, gcd) is just number theory you can do on paper, while the quantum core is QPE applied to modular multiplication — so lean on your QFT/QPE node here. Do not try to factor large numbers on hardware; the resource estimates run to millions of physical qubits, and tiny demos like factoring 15 are mostly compiled-in cheating, so be skeptical of any '21 factored' headline. Focus instead on why modular-exponentiation circuits dominate the qubit and depth cost. Tie it forward to PQC: the real-world takeaway is that NIST's ML-KEM/ML-DSA exist precisely because of this algorithm. The habit: always quote resource estimates, not just asymptotic complexity, when discussing the RSA threat.
**Project:** Implement a textbook order-finding subroutine by hand — a modular-multiplication unitary plus the QPE circuit from your prior node — for a small N such as 15 or 21, and do the continued-fraction post-processing classically. Note explicitly that the old qiskit.algorithms.Shor was deprecated and removed in the Qiskit 1.0 transition, so there is no library call to lean on; you build the period-finding circuit yourself and follow a maintained order-finding tutorial rather than the archived Qiskit Textbook. Produce a notebook plus short write-up that clearly separates the classical continued-fraction post-processing from the quantum period-finding circuit and honestly annotates where the demo is compiled/simplified. Pair it with a one-page brief estimating fault-tolerant qubit counts to break RSA-2048 and mapping the NIST PQC migration response.

### 🟡 HHL & quantum linear algebra
**Prerequisites:** QFT & phase estimation
**Tracks:** Quantum algorithms · Quantum ML researcher
**Resources:**
- Scott Aaronson — 'Read the Fine Print', Nature Physics 11, 291-293 (2015), free PDF on scottaaronson.com (🆓 author's website, not arXiv)
- Harrow, Hassidim & Lloyd — original *Quantum algorithm for linear systems of equations* paper, arXiv (🆓)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, UMD, linear-systems & Hamiltonian-simulation context (🆓)
- IBM Quantum Learning / Qiskit textbook archive — HHL walkthrough with worked example (🆓)
- Maria Schuld & Francesco Petruccione — *Machine Learning with Quantum Computers*, Springer, on QML linear-algebra primitives (💰)
**Study approach:** Learn HHL as a composition you already half-know: QPE to extract eigenvalues, a controlled rotation to invert them, then uncompute — the novelty is the conditional 1/lambda rotation. But the single most important thing to internalize is the fine print, so read Aaronson before you read the algorithm: it outputs a quantum state proportional to the solution, not the solution vector. State the four caveats consistently as (1) efficient preparation of |b>, (2) A sparse or otherwise efficiently Hamiltonian-simulable / low-rank — because the QPE step depends on simulating e^{iAt} efficiently — (3) A well-conditioned, with small condition number kappa since the runtime scales with kappa, and (4) the answer must be extractable from a single measurement/expectation value rather than reading out the full solution vector. Treat the advertised exponential speedup as conditional and frequently illusory once those costs are counted; the sparsity caveat is the one most often glossed over in QML hype. Connect it to QML, where the same caveats sink many 'quantum advantage' claims. The habit: for any quantum-linear-algebra claim, check all four caveats before believing the speedup.
**Project:** Build HHL manually in Qiskit — note up front that qiskit.algorithms.linear_solvers.HHL was deprecated and removed in the Qiskit 1.0 transition, so there is no library call and you assemble the whole circuit yourself. Pin a fixed small, well-conditioned 2x2 matrix (the canonical eigenvalues-on-a-grid example) so the conditional 1/lambda (arcsin-angle) rotation — the one genuinely new sub-circuit the QPE prerequisite does not cover, and the easiest to get wrong — can be precomputed and hardcoded exactly, isolating the new concept. Use a checkpoint: verify the QPE eigenvalue readout alone before adding the controlled-reciprocal rotation and uncompute, then verify the output expectation value against the exact classical solution. As a stretch goal, write a critical analysis that sweeps the condition number and shows accuracy and resource cost degrading. Conclude with a clear statement of which real ML problems do or do not satisfy the four caveats, demonstrating you can tell genuine speedup from hype.

### 🟡 Quantum complexity theory
**Prerequisites:** Oracles & early algorithms, Algorithms & complexity
**Tracks:** Quantum algorithms
**Resources:**
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv, complexity & query-complexity chapters (🆓)
- John Preskill — Caltech *Ph219/CS219* lecture notes, complexity-theory sections (🆓)
- Scott Aaronson — *Quantum Computing Since Democritus* (💰) and his complexity lecture notes (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, computational-complexity chapter (💰)
- Umesh Vazirani — UC Berkeley *Quantum Mechanics and Quantum Computation* on edX, complexity lectures (🆓 audit)
**Study approach:** Build a clear mental map first: BQP sits between P and PSPACE, is believed to *not* contain NP-complete problems, and is not known to be strictly larger than P — so 'quantum solves NP-hard problems fast' is simply wrong. Focus on query complexity, where the provable separations (Deutsch-Jozsa, Simon, Grover lower bounds) actually live, since that is where you can rigorously say 'quantum needs fewer queries.' Skip trying to prove the deep results; aim instead to articulate the speedup taxonomy — exponential for structured problems like factoring, only quadratic for unstructured search, none for many others. This node is your hype vaccine, so treat it as the lens you carry into every QML and 'quantum advantage' claim. The habit: classify each speedup claim by problem structure before believing the marketing.
**Project:** Write a concise, well-cited explainer (blog post or repo README) that maps the quantum-speedup landscape: a diagram of P/NP/BQP relationships with the actual conjectures stated correctly, a table of known speedups by class (exponential vs. quadratic vs. none) with one canonical algorithm each, and a 'red flags' checklist for spotting overstated quantum-advantage claims. Include a Simon's-algorithm notebook demonstrating a provable exponential query separation.

### 🔴 Hamiltonian simulation & Trotterization
**Prerequisites:** Quantum gates & the circuit model, QFT & phase estimation
**Tracks:** Quantum algorithms · Quantum ML researcher
**Resources:**
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, rigorous Trotter error analysis (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, simulation chapter (book)
- Xanadu — *PennyLane* Hamiltonian-simulation demos, runnable spin-chain examples (🆓)
- Childs & Wiebe — Hamiltonian-simulation papers (product formulas, post-Trotter) on arXiv (🆓)
**Study approach:** Anchor on the first-order Trotter formula and derive its error bound by hand, then see how the second-order/Suzuki construction improves the scaling. Implement a small spin chain — transverse-field Ising or Heisenberg — and watch Trotter error shrink as you add steps. Use Childs' notes for the rigorous error analysis, then only skim post-Trotter methods (LCU, qubitization, QSVT) as forward pointers; don't rabbit-hole there yet. This is the algorithm with the strongest evidence for quantum advantage (no efficient classical algorithm is known, and one would imply BPP=BQP), so spend the time understanding why product-formula error scales the way it does.
**Project:** Simulate time evolution of a 4-6 site transverse-field Ising or Heisenberg chain with first- and second-order Trotter on a simulator, benchmarking the Trotterized state against the exact matrix exponential e^{-iHt}. Plot fidelity (or observable error) versus Trotter step count and confirm the expected error-scaling slope for each order. The write-up should state the measured scaling and contrast first- versus second-order cost at fixed accuracy.

### 🟡 QSP, QSVT & qubitization
**Prerequisites:** QFT & phase estimation, HHL & quantum linear algebra
**Tracks:** Quantum algorithms
**Resources:**
- Martyn, Rossi, Tan & Chuang — *Grand Unification of Quantum Algorithms*, arXiv, the map (🆓)
- Gilyén, Su, Low & Wiebe — *Quantum singular value transformation* paper, arXiv (🆓)
- Low & Chuang — *Hamiltonian simulation by qubitization*, arXiv (🆓)
- Xanadu — *PennyLane* QSP/QSVT demos, runnable block-encoding examples (🆓)
**Study approach:** This is the hardest theory node on the roadmap, so budget for it. Start with single-qubit quantum signal processing and convince yourself that a product of parametrized rotations realizes a polynomial in cos θ, then lift that to QSVT via block-encodings. Use Martyn et al.'s Grand Unification paper as the map and Gilyén et al. for rigor. Implement a small QSVT polynomial with existing PennyLane/Qiskit tooling, and skip the phase-angle-finding internals — use a solver. The payoff is seeing search, phase estimation, HHL and Hamiltonian simulation as one construction.
**Project:** A notebook that block-encodes a small Hermitian matrix using qml.qsvt or Qiskit's block-encoding utilities — so block-encoding and phase-angle computation are delegated rather than hand-rolled — and applies a QSVT polynomial to implement Hamiltonian simulation (or a simple projector/sign polynomial) on a well-conditioned matrix, validated against the exact linear-algebra result. As an optional stretch, attempt matrix inversion on a matrix with a fixed small condition number. Include a half-page written derivation showing how the same QSVT/qubitization framework reduces to Grover search and to phase estimation. Report the polynomial degree needed for a target accuracy.

---

## PHASE 4: Quantum Information & Error Correction

### 🔴 Density matrices & open systems
**Prerequisites:** Quantum mechanics foundations, Multi-qubit systems & entanglement
**Tracks:** All specializations
**Resources:**
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch.2 (density operators) & ch.8 (quantum operations) (💰)
- John Preskill — *Caltech Ph219/CS219 Lecture Notes*, ch.2 (density operators, partial trace) & ch.3 (quantum channels, Kraus operators) (🆓)
- John Watrous — *The Theory of Quantum Information*, free PDF, rigorous treatment of channels and partial trace (🆓)
- QuTiP — open-source simulator docs & tutorials, build and evolve density matrices numerically (🆓)
- IBM Quantum Learning — *Basics of Quantum Information* unit on density matrices (🆓)
**Study approach:** Start from a single qubit: convince yourself why a probabilistic mixture of pure states is NOT the same as a superposition, then build the density matrix that captures it. Learn partial trace by computing the reduced state of one half of a Bell pair by hand once, then trust QuTiP for everything bigger. Treat Kraus operators as the central object — every gate, every noise process, every measurement is a channel — and verify your Sigma(K_i† K_i)=I for each one you write. Complete positivity comes for free with any valid set of Kraus operators, but if you ever want to check it numerically, form the Choi matrix and confirm it is positive semidefinite. The habit that matters: simulate, do not just read; spin up QuTiP and watch a Bloch vector shrink under a channel. Skip the deep C*-algebra formalism for now.
**Project:** Build a small QuTiP notebook that models a single qubit as a density matrix and applies depolarizing, amplitude-damping, and dephasing channels via their Kraus operators. Animate the Bloch vector contracting under each channel (via matplotlib's FuncAnimation, or a static before/after multi-panel plot if you prefer the lower-effort route) and verify trace preservation numerically; CP is automatic for valid Kraus operators, but check it once by forming the Choi matrix and confirming it is positive semidefinite. Add a partial-trace demo showing a maximally entangled pair reduces to the maximally mixed state, and write a short README explaining why noisy hardware forces the density-matrix picture.

### 🟡 Quantum information theory
**Prerequisites:** Density matrices & open systems
**Tracks:** Quantum algorithms · Quantum error correction
**Resources:**
- John Watrous — *The Theory of Quantum Information*, free PDF, the definitive reference on distance measures and entropy (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch.9 (distance measures), ch.11 (entropy), ch.12 (capacities) (💰)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv, compact treatment of information measures (🆓)
- John Preskill — *Caltech Ph219/CS219 Lecture Notes*, ch.10 on quantum Shannon theory (🆓)
- Mark Wilde — *Quantum Information Theory* (Cambridge), free arXiv preprint version, for capacities depth (🆓 preprint / 💰 print)
**Study approach:** This is a desirable branch, not a critical spine — learn it for fluency in the literature, not to derive coding theory from scratch. Anchor everything in two distance measures: fidelity and trace distance, and know how they bound each other (Fuchs–van de Graaf), because every error-correction and benchmarking paper uses them. Compute von Neumann entropy as the Shannon entropy of the density matrix's eigenvalues — that one fact demystifies most of it. Read Watrous selectively for definitions and skip the channel-capacity coding theorems unless you go toward QEC theory. The habit that matters: when you meet a new quantity, immediately ask what it reduces to for a pure state and for the maximally mixed state.
**Project:** Write a short notebook that computes fidelity, trace distance, and von Neumann entropy for parameterized families of states, and reproduces the Fuchs–van de Graaf inequalities numerically. Include an entanglement-entropy plot for a two-qubit state as you sweep from product to maximally entangled, and a one-page write-up connecting these measures to how people report gate fidelity and benchmark NISQ devices.

### 🔴 Noise, decoherence & NISQ
**Prerequisites:** Density matrices & open systems
**Tracks:** Quantum hardware & control · Quantum error correction
**Resources:**
- John Preskill — *Quantum Computing in the NISQ era and beyond*, Quantum journal / arXiv:1801.00862, the paper that named the era (🆓)
- Krantz et al. — *A Quantum Engineer's Guide to Superconducting Qubits*, arXiv:1904.06560, where T1/T2 and gate error come from physically (🆓)
- Kjaergaard et al. — *Superconducting Qubits: Current State of Play*, honest survey of real device error rates (🆓)
- Qiskit — Aer noise-model docs & IBM Quantum Learning hardware unit, build noise models from device data (🆓)
- Microsoft — Azure Quantum / Q# documentation and quantum-simulator noise-model guides (🆓)
**Study approach:** This is your differentiator node — lean on your electronics background and tie every abstract channel back to physical hardware. Nail the distinction between T1 (energy relaxation, amplitude damping) and T2 (dephasing) first, including why T2 <= 2*T1, then map dephasing to the phase-flip channel and relaxation to amplitude damping. Pull real numbers off IBM/IonQ devices so the constraints feel concrete: how circuit depth times error rate kills your signal long before you reach interesting size. The habit that matters: every time you design a circuit, estimate its error budget (gates * per-gate error + readout error) before you run it. Read Preskill's NISQ paper once end-to-end to calibrate your expectations against the hype.
**Project:** Take one real algorithm (e.g. a small Grover or a 4-qubit GHZ-state prep) and run it on a noise-free simulator, a calibrated Qiskit Aer noise model built from a real IBM backend's T1/T2 and gate-error data, and ideally one free-tier run on actual hardware. Plot output fidelity versus circuit depth across the three, and write a short report quantifying the error budget and explaining exactly which noise channel dominates and why.

### 🟡 Stabilizer formalism & classical simulation
**Prerequisites:** Quantum gates & the circuit model, Density matrices & open systems
**Tracks:** Quantum algorithms · Quantum error correction
**Resources:**
- Daniel Gottesman — *Stabilizer codes and quantum error correction* notes/thesis (🆓)
- Aaronson & Gottesman — *Improved simulation of stabilizer circuits* (CHP), arXiv (🆓)
- Google — *Stim*, fast stabilizer-circuit simulator (🆓)
- quimb / ITensor — tensor-network & MPS simulation libraries (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, stabilizer chapter (book)
**Study approach:** Learn the stabilizer/Clifford picture as tracking a set of Pauli generators instead of exponentially many amplitudes, then prove to yourself why Gottesman-Knill makes Clifford circuits classically efficient. Use a CHP/Stim stabilizer simulator and verify it reproduces a Clifford circuit's measurement statistics. Separately, get hands-on with one tensor-network/MPS library to feel the other simulability frontier. The key insight worth internalizing: this formalism is the shared language of QEC, randomized benchmarking and quantum-advantage claims, so it pays compound interest across later nodes.
**Project:** Use a stabilizer simulator (Stim) on an n-qubit Clifford circuit and confirm it matches a statevector simulator's measurement statistics — Stim accepts only Clifford operations, so a T gate has to move to a stabilizer-rank simulator. Switch to Qiskit Aer's extended_stabilizer method and insert a single non-Clifford T gate to show the stabilizer tableau can no longer represent the (now non-stabilizer) state, then add more T gates and watch runtime/term-count grow exponentially in the T-count. As a bonus, simulate the same circuit with an MPS library (quimb) and compare runtime scaling versus bond dimension. The write-up should pinpoint exactly what makes a circuit classically easy or hard.

### 🟡 Quantum error correction
**Prerequisites:** Quantum information theory, Stabilizer formalism & classical simulation
**Tracks:** Quantum error correction
**Resources:**
- Joschka Roffe — *Quantum Error Correction: An Introductory Guide*, arXiv, the best modern on-ramp (🆓)
- Daniel Gottesman — *Stabilizer Codes and Quantum Error Correction* (thesis) and Caltech lecture notes (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, ch.10 on quantum error correction (💰)
- Lidar & Brun (eds.) — *Quantum Error Correction*, Cambridge, the comprehensive reference (💰)
- IBM Quantum Learning / Qiskit — surface-code and stabilizer tutorials, plus Google's surface-code experiment papers (🆓)
**Study approach:** Build the ladder rung by rung: 3-qubit bit-flip code to grasp syndrome measurement without collapsing the logical state, then Shor/Steane for combined bit- and phase-flip protection, then the surface code as the one that actually matters for hardware. Invest hard in the stabilizer formalism early — once you think in stabilizer generators and the check matrix, codes stop being a zoo and become linear algebra over GF(2). Keep distance, threshold, and overhead in view: a distance-d code corrects floor((d-1)/2) errors, and the threshold theorem is why scaling is even possible. The habit that matters: for any code, write its stabilizer generators and trace one error through to its syndrome by hand. Skip fault-tolerant gate constructions on the first pass.
**Project:** Implement the 3-qubit bit-flip code in Qiskit or Stim as the mandatory, hand-traced milestone: encode a logical qubit, inject Pauli errors, perform syndrome extraction with ancillas, decode, and confirm the logical state survives. The 7-qubit Steane code's full encode-and-decode-with-ancillas is a noticeably heavier lift, so treat it as an optional stretch goal. Then use Stim with a matching decoder (PyMatching, driven through Stim's Sinter for the sampling sweep) to simulate surface-code memories at distances d=3, 5 and 7 under a depolarizing noise model — note that Stim only samples syndromes and does not decode, so the decoder is the key dependency — and plot logical error rate versus physical error rate across distances so the threshold crossing is actually visible. Stim's *Getting Started* / Sinter surface-code example does exactly this. Include a short write-up of code distance and overhead.

### 🟡 Implementing QEC codes & decoders
**Prerequisites:** Quantum error correction
**Tracks:** Quantum error correction
**Resources:**
- Joschka Roffe — *Quantum Error Correction: An Introductory Guide*, arXiv (🆓)
- Google — *Stim*, detector-error-model generation and syndrome sampling (🆓)
- Oscar Higgott — *PyMatching*, MWPM decoder library (🆓)
- Daniel Gottesman — stabilizer-codes notes, CSS/surface-code grounding (🆓)
- IBM — *Qiskit* QEC tutorials, repetition and surface-code walkthroughs (🆓)
**Study approach:** Climb the ladder in order: repetition code first (bit-flip only), then Steane as a full CSS code, then the rotated surface code. For each, implement syndrome extraction explicitly and feed the syndromes to a decoder, but match the decoder to the code: MWPM via PyMatching fits the repetition and surface codes, whose errors form a matching graph (each error flips at most two detectors), while the Steane [[7,1,3]] code lacks that structure and wants a lookup-table / syndrome-table decoder instead. Reach for union-find only after MWPM. Use Stim to build detector-error models and sample syndromes at scale rather than hand-rolling noisy simulation. The habit that matters: always sweep the physical error rate and plot the logical error rate, because the threshold crossing is the whole point of QEC.
**Project:** Using Stim and PyMatching, simulate a rotated surface code across several code distances and physical error rates, run MWPM decoding, and produce the logical-error-rate-versus-physical-error-rate plot whose curves cross near the surface-code threshold (~1%). Include the repetition code (also MWPM-decoded) and the Steane code (decoded with a lookup table, since its syndromes do not form a matching graph) as warm-ups in the same repo. The write-up should report your observed threshold and how distance suppresses logical error below it.

### 🟡 Error mitigation
**Prerequisites:** Noise, decoherence & NISQ
**Tracks:** Quantum ML researcher · Quantum hardware & control
**Resources:**
- Unitary Fund — *Mitiq* open-source library, docs & tutorials covering ZNE, PEC, and more (🆓)
- Temme, Bravyi & Gambetta — *Error Mitigation for Short-Depth Quantum Circuits*, PRL/arXiv, the foundational ZNE & PEC paper (🆓)
- IBM Quantum Learning — error-suppression and error-mitigation course, plus Qiskit Runtime resilience-level docs (🆓)
- Cai et al. — *Quantum Error Mitigation*, Rev. Mod. Phys., the comprehensive review (🆓 arXiv)
- Kandala et al. — *Error mitigation extends the computational reach of a noisy quantum processor*, Nature, real-hardware demonstration (🆓 arXiv)
**Study approach:** Frame mitigation honestly: it is not error correction — it trades exponentially more shots for a better expectation-value estimate, and it buys time until real QEC arrives. Learn measurement-error mitigation first (it is cheap, a calibration matrix you invert), then zero-noise extrapolation (scale noise up by stretching gates or folding, extrapolate the expectation value back to zero), then probabilistic error cancellation (more powerful, far costlier in shots and noticeably harder to set up, since it needs an explicit noise representation). Use Mitiq rather than reimplementing — it wraps Qiskit/Cirq/Braket and lets you compare methods quickly. The habit that matters: always report the shot-cost overhead alongside the accuracy gain, because that trade-off is the whole point. Connect ZNE's gate-folding to your control-electronics intuition about pulse stretching.
**Project:** Pick a concrete observable — the H2 ground-state energy from a 2-qubit VQE ansatz — and use Mitiq to apply measurement-error mitigation and zero-noise extrapolation on a realistic Aer noise model (mixing amplitude damping, dephasing and readout error), and ideally one real-hardware run. For probabilistic error cancellation, scope it to a local-depolarizing noise model so a ready-made representation exists (Mitiq's represent_operation_with_local_depolarizing_noise), because a realistic mixed-noise model has no out-of-the-box PEC representation; treat full-noise PEC as a stretch goal. Produce a benchmark plot of mitigated versus raw versus ideal expectation values and tabulate the shot-cost overhead of each method, with a write-up on when each is worth it.

---

## PHASE 5: Quantum Machine Learning

### 🔴 Quantum data encoding
**Prerequisites:** Quantum gates & the circuit model, Classical machine learning
**Tracks:** Quantum ML researcher
**Resources:**
- PennyLane / Xanadu — embedding & feature-map demos and the Codebook, pennylane.ai (🆓)
- Schuld & Petruccione — *Machine Learning with Quantum Computers*, Springer, encoding chapters (💰)
- Cerezo et al. — *Variational Quantum Algorithms*, Nature Reviews Physics / arXiv:2012.09265 (🆓)
- IBM Quantum Learning — learning.quantum.ibm.com, QML modules (🆓)
**Study approach:** Start in PennyLane: implement basis, angle, and amplitude encoding on the same toy dataset so you feel the differences in your hands. The one habit that matters is asking, for every scheme, 'how does the data physically get into the state, and what does loading cost in depth and qubits?' — amplitude encoding looks free in big-O but hides expensive state preparation. Skip the QRAM hype; assume you cannot load classical data for free. Internalize that this single bottleneck is why most claimed exponential QML speedups evaporate.
**Project:** Build a notebook that encodes one small dataset (e.g. Iris, downsampled) three ways — basis, angle, and amplitude — and benchmarks each on qubit count, circuit depth, and state-preparation cost. Note that basis encoding maps bitstrings, so you must first discretize each continuous feature (threshold or k-bin it) before encoding — expect this step rather than misreading it as a bug. The three schemes will land on very different qubit counts (e.g. 4 Iris features → ~2 qubits for amplitude, ~4 for angle, many more for basis after binarization); that asymmetry is part of the lesson, not an error. Visualize the resulting feature states and write a short honest paragraph on which encoding you would use for a real classifier and why the loading cost matters more than the model.

### 🔴 Variational & parameterized circuits
**Prerequisites:** Quantum SDKs & simulators, Calculus & optimization
**Tracks:** Quantum ML researcher
**Resources:**
- PennyLane / Xanadu — variational-circuit and QML training tutorials, pennylane.ai (🆓)
- Cerezo et al. — *Variational Quantum Algorithms*, Nature Reviews Physics / arXiv:2012.09265 (🆓)
- IBM Quantum Learning & Qiskit docs — variational workflow modules (🆓)
- Schuld & Petruccione — *Machine Learning with Quantum Computers*, Springer (💰)
**Study approach:** PennyLane is the cleanest on-ramp: define a parameterized circuit, attach a cost function, and train it with an optimizer in a dozen lines. The habit that matters is treating the circuit as a single differentiable function of its parameters, and being crystal clear about the hybrid loop — the quantum device only evaluates a cost, the classical optimizer does all the updating. Read the Cerezo VQA review once for the whole landscape (VQE, QAOA, QNNs are all the same template). Resist scaling qubits before the training loop is solid.
**Project:** Implement and train a small variational classifier from scratch in PennyLane on a two-feature toy dataset, showing the loss curve and the learned decision boundary. Then run a single trained circuit on a real device and document the gap between simulator and hardware results — use IBM Quantum's free Open plan as the default path, scoping one small circuit since the free tier caps QPU time (~10 min/month) and queues can be long. AWS Braket is paid (per-task plus per-shot charges) and only an optional alternative if you choose to incur the cost.

### 🔴 Variational quantum eigensolver
**Prerequisites:** Variational & parameterized circuits
**Tracks:** Quantum ML researcher · Quantum algorithms
**Resources:**
- Peruzzo et al. — *A variational eigensolver on a photonic quantum processor*, Nature Communications 2014 / arXiv:1304.3061 (🆓)
- PennyLane — qchem VQE demos, pennylane.ai (🆓)
- Qiskit Nature — documentation and VQE tutorials (🆓)
- McArdle et al. — *Quantum computational chemistry*, Rev. Mod. Phys. 2020 / arXiv:1808.10402 (🆓)
**Study approach:** Learn the three moving parts separately: the ansatz (hardware-efficient vs chemistry-inspired UCCSD), mapping a molecular Hamiltonian to qubits (Jordan-Wigner or Bravyi-Kitaev), and estimating expectation values by grouping commuting Pauli terms. Use PennyLane qchem or Qiskit Nature on H2 first — small enough to check against exact diagonalization. The habit that matters is tracking where shot noise and the number of measurements dominate the real cost. Stay honest: VQE is the NISQ chemistry flagship but has not yet beaten classical methods at useful scale.
**Project:** Compute the H2 dissociation curve with VQE in PennyLane qchem or Qiskit Nature, comparing your energies against exact diagonalization across bond lengths. Analyze how ansatz choice and measurement count drive accuracy and cost, and as a stretch repeat for LiH to feel the qubit and shot-budget growth.

### 🔴 QAOA & quantum optimization
**Prerequisites:** Variational & parameterized circuits
**Tracks:** Quantum ML researcher · Quantum algorithms
**Resources:**
- Farhi, Goldstone & Gutmann — *A Quantum Approximate Optimization Algorithm*, arXiv:1411.4028 (🆓)
- PennyLane / Xanadu — QAOA and max-cut demos, pennylane.ai (🆓)
- IBM Quantum Learning & Qiskit — optimization / QAOA tutorials (🆓)
- Cerezo et al. — *Variational Quantum Algorithms*, Nature Reviews Physics / arXiv:2012.09265 (🆓)
**Study approach:** Start with max-cut: encode it as a cost Hamiltonian, build the alternating cost and mixer layers, and optimize the angles with a classical routine. Use the PennyLane or Qiskit walkthroughs rather than reinventing them. Understand the adiabatic connection (large p approaches the optimum) and, just as importantly, why small-p QAOA struggles to beat strong classical heuristics like Goemans-Williamson. The habit that matters: always benchmark approximation ratio against a good classical solver before claiming anything.
**Project:** Implement QAOA for max-cut on a set of small random graphs, sweep the depth p, and plot the approximation ratio versus p. Benchmark against the brute-force optimum as your primary, mandatory baseline — the graphs are small enough to enumerate. As an optional stronger comparison, add the classical Goemans-Williamson SDP (use cvxpy for the semidefinite relaxation plus the random-hyperplane rounding step, or an existing GW snippet, rather than coding it from scratch). Write an honest note on where (if anywhere) the quantum result is competitive at the depths real hardware can run.

### 🟡 Quantum kernels & quantum SVM
**Prerequisites:** Quantum data encoding
**Tracks:** Quantum ML researcher
**Resources:**
- Havlíček et al. — *Supervised learning with quantum-enhanced feature spaces*, Nature 2019 / arXiv:1804.11326 (🆓)
- Schuld & Killoran — *Quantum machine learning in feature Hilbert spaces*, PRL 2019 / arXiv:1803.07128 (🆓)
- Liu, Arunachalam & Temme — *A rigorous and robust quantum speed-up in supervised machine learning*, Nature Physics 2021 / arXiv:2010.02174 (🆓)
- PennyLane / Xanadu — quantum-kernels demo, pennylane.ai (🆓)
**Study approach:** Nail the classical kernel trick first, then see a quantum feature map as computing inner products in an exponentially large Hilbert space — the kernel matrix is just state overlaps you estimate on hardware. Build one in PennyLane or Qiskit and feed it straight into a classical SVM (scikit-learn does the rest). The habit that matters is measuring kernel-target alignment and always comparing against a tuned RBF kernel. Read Havlíček and the Liu et al. speedup result, but stay sober: generic quantum kernels rarely help, and the contrived problems where they provably do are narrow.
**Project:** Build a quantum-kernel SVM on a small dataset: compute the kernel (Gram) matrix on simulator, train a classical SVM on it, and benchmark accuracy and kernel-target alignment against a tuned classical RBF SVM. Optionally estimate a few kernel entries on real hardware to show how shot noise corrupts the matrix, and conclude with an honest verdict on whether the quantum kernel earned its keep.

### 🔴 Quantum neural networks & gradients
**Prerequisites:** Variational & parameterized circuits, Quantum data encoding
**Tracks:** Quantum ML researcher
**Resources:**
- Schuld, Bergholm, Gogolin, Izaac & Killoran — *Evaluating analytic gradients on quantum hardware*, PRA 2019 / arXiv:1811.11184 (🆓)
- Pérez-Salinas et al. — *Data re-uploading for a universal quantum classifier*, Quantum 2020 / arXiv:1907.02085 (🆓)
- PennyLane / Xanadu — parameter-shift and QNN demos, pennylane.ai (🆓)
- Schuld & Petruccione — *Machine Learning with Quantum Computers*, Springer (💰)
**Study approach:** Focus on the parameter-shift rule: it gives exact analytic gradients by evaluating the circuit at shifted parameter values, which is fundamentally different from a finite-difference approximation. Derive and code it by hand once for a single rotation gate, then let PennyLane's autodiff handle it at scale. Study data re-uploading as a concrete trick that makes even a single qubit a nonlinear classifier. The habit that matters: always cross-check your analytic gradient against finite difference, and never assume you can backpropagate through a real device — you can't.
**Project:** Implement the parameter-shift rule from scratch and verify it matches finite-difference gradients on a small circuit. Then train a data-reuploading single-qubit classifier on a nonlinear 2D dataset (e.g. concentric circles), visualize the learned decision boundary, and show how adding re-uploading layers improves separability.

### 🟡 Trainability & barren plateaus
**Prerequisites:** Quantum neural networks & gradients
**Tracks:** Quantum ML researcher
**Resources:**
- McClean, Boixo, Smelyanskiy, Babbush & Neven — *Barren plateaus in quantum neural network training landscapes*, Nature Communications 2018 / arXiv:1803.11173 (🆓)
- Cerezo et al. — *Cost function dependent barren plateaus in shallow parametrized quantum circuits*, Nature Communications 2021 / arXiv:2001.00550 (🆓)
- Holmes et al. — *Connecting ansatz expressibility to gradient magnitudes and barren plateaus*, PRX Quantum 2022 / arXiv:2101.02138 (🆓)
- PennyLane / Xanadu — barren-plateaus demo, pennylane.ai (🆓)
**Study approach:** Read McClean et al. first: random deep circuits have gradients whose variance vanishes exponentially in qubit count, so the optimizer sees a flat landscape and training stalls. Map the known causes — too much expressibility, global cost functions, excess entanglement, and hardware noise — to concrete circuit design choices. Then study the mitigations: local cost functions, shallow or problem-structured ansätze, layerwise training, and smart initialization. The habit that matters is estimating gradient variance versus qubit count before committing to any architecture, because this is the single biggest reason naive QML does not scale.
**Project:** Numerically reproduce a barren plateau: for a random hardware-efficient ansatz, measure the variance of a cost gradient as you increase qubit count and plot it on a log scale to expose the exponential decay. Then demonstrate a mitigation — swap to a local cost function or a shallow structured ansatz — and show the variance no longer collapses, with a short write-up on what this means for scaling any QNN you build.

### 🟡 Dequantization & quantum-inspired limits
**Prerequisites:** Quantum data encoding, Quantum complexity theory
**Tracks:** Quantum ML researcher · Quantum algorithms
**Resources:**
- Scott Aaronson — *Read the Fine Print*, on the I/O caveats of quantum linear algebra (🆓)
- Ewin Tang — dequantization papers (recommendation systems, low-rank linear algebra), arXiv (🆓)
- Schuld & Petruccione — *Machine Learning with Quantum Computers*, QML grounding (book)
- Aaronson — *Quantum Computing Since Democritus* / lecture notes, complexity framing (🆓)
**Study approach:** Start with Aaronson's Read the Fine Print to understand the input/output (state-preparation and readout) bottleneck that quietly kills many advertised exponential speedups. Then study Tang's dequantization results: given matched sample-and-query access, classical algorithms match QML and quantum-linear-algebra speedups up to polynomial factors. The habit that matters: for any claimed QML speedup, ask what the input model is and whether the classical baseline is granted the same access. Don't memorize the algorithms — internalize the proof template and exactly where it does and doesn't apply (low-rank versus sparse, condition-number dependence).
**Project:** A technical brief with a small numerical demo that takes one well-known 'exponential' quantum-linear-algebra or QML claim — quantum recommendation systems or HHL-based regression — and walks through its I/O assumptions. For the default, build a bounded toy: a low-rank sample-and-query recommendation/regression demo (or an HHL-vs-classical baseline on a fixed low-rank, well-conditioned matrix) that shows the speedup collapses to polynomial; treat a faithful full reproduction of Tang's sample-and-query algorithm as an optional stretch. End with a reusable checklist for vetting future quantum-advantage claims. The deliverable is the checklist plus the worked example behind it.

---

## PHASE 6: Hardware & Control

### 🔴 Qubit modalities & device physics
**Prerequisites:** Quantum mechanics foundations
**Tracks:** Quantum hardware & control
**Resources:**
- Krantz et al. — *A Quantum Engineer's Guide to Superconducting Qubits*, arXiv:1904.06560 (🆓)
- Kjaergaard et al. — *Superconducting Qubits: Current State of Play*, Annual Reviews / arXiv (🆓)
- Bruzewicz et al. — *Trapped-Ion Quantum Computing: Progress and Challenges*, arXiv (🆓)
- Slussarenko & Pryde — *Photonic quantum information processing: A concise review*, Applied Physics Reviews / arXiv (🆓)
- Henriet et al. — *Quantum computing with neutral atoms*, Quantum 4, 327 / arXiv:2006.12326 (🆓)
- Burkard et al. — *Semiconductor spin qubits*, Rev. Mod. Phys. 95, 025003 / arXiv:2112.08863 (🆓)
- Metriq / Unitary Fund — community benchmark pages for current best coherence and gate-fidelity numbers, metriq.info (🆓, for comparable up-to-date figures)
- Blais et al. — *Circuit Quantum Electrodynamics*, Rev. Mod. Phys. (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, Ch. 7 on physical realizations (💰)
**Study approach:** Do not try to master all five platforms at once; build a single comparison table keyed to the DiVincenzo criteria (scalable well-defined qubits, initialization, long coherence, a universal gate set, qubit-specific measurement) plus the two communication criteria. Go deep on superconducting first, since that is where most cloud hardware and your control-electronics niche live — read the Krantz guide as your spine. Skim the trapped-ion and neutral-atom reviews mainly for contrast: coherence time versus gate speed versus native connectivity. Even for the platforms you only skim, pull each one's headline numbers — coherence, gate fidelity, connectivity, clock speed — from its canonical review (or an aggregated benchmark page) so your comparison table is sourced rather than guessed. The habit that matters: for every platform write down what the qubit physically is, what drives a gate, and what sets T1 and T2.
**Project:** A platform-comparison repo or short write-up that scores superconducting, trapped-ion, photonic, neutral-atom and spin qubits against the DiVincenzo criteria with cited numbers — coherence times, single- and two-qubit gate fidelities, native connectivity and clock speed. Close it with a one-page, defensible argument for which platform you would bet your control-electronics career on and why.

### 🔴 Pulse-level control
**Prerequisites:** Quantum gates & the circuit model, Noise, decoherence & NISQ
**Tracks:** Quantum hardware & control
**Resources:**
- Krantz et al. — *A Quantum Engineer's Guide to Superconducting Qubits*, arXiv:1904.06560 — single-qubit drive & DRAG pulse sections (🆓)
- IBM Quantum / Qiskit — *Qiskit Pulse & OpenPulse* documentation (🆓)
- Khaneja et al. — *Optimal Control of Coupled Spin Dynamics (GRAPE)*, J. Magn. Reson. 2005 (🆓, the classic paper)
- QuTiP — open-source quantum dynamics simulator with the optimal-control module, qutip.org (🆓)
- Qiskit Global Summer School — pulse-level control lectures, YouTube (🆓)
**Study approach:** Start from the physics, not the API: a gate is a rotation generated by driving the qubit at its transition frequency. Pulse area (integrated Rabi frequency) sets the rotation angle; the drive phase sets the rotation axis in the xy-plane and a finite detuning tilts that axis toward z. Use a Rabi sweep to calibrate amplitude→angle and a Ramsey sequence to measure detuning and T2*. Reproduce a Rabi and a Ramsey numerically in QuTiP before touching cloud hardware so the parameters mean something. Then learn Qiskit Pulse to schedule and shape DRAG pulses, and study GRAPE/CRAB as the optimization layer that finds high-fidelity, leakage-suppressed waveforms — but note they suppress leakage only when the leakage levels (e.g. the transmon |2⟩ state) are part of the simulated Hilbert space. The one habit: always connect a pulse parameter — amplitude, duration, detuning, phase — to the Bloch-sphere rotation it produces.
**Project:** A QuTiP notebook that simulates a driven transmon: extract a Rabi frequency, run a Ramsey to measure detuning and T2*, then calibrate a DRAG pulse for a high-fidelity X gate, reporting the gate fidelity — that single-qubit loop is the shippable core. Stretch goal: use GRAPE to optimize a two-qubit gate, reporting process fidelity versus pulse duration. Replaying the calibration on real IBM hardware is optional and increasingly infeasible — IBM has deprecated Qiskit Pulse/OpenPulse access on its cloud backends, so do not waste time hunting for a free pulse-enabled backend; instead use a simulator-only fallback (qiskit-dynamics pulse simulation, or a Lindblad model in QuTiP with injected noise) to exercise the full calibration loop end to end.

### 🔴 Control electronics & cryo/RF
**Prerequisites:** Qubit modalities & device physics, C++ / systems programming
**Tracks:** Quantum hardware & control
**Resources:**
- Krantz et al. — *A Quantum Engineer's Guide to Superconducting Qubits*, arXiv:1904.06560 — control wiring & cryogenic setup sections (🆓)
- Stefanazzi et al. — *The QICK (Quantum Instrumentation Control Kit)*, Rev. Sci. Instrum. / arXiv (🆓, open RFSoC-FPGA control platform)
- Krinner et al. — *Engineering cryogenic setups for 100-qubit-scale superconducting circuits*, EPJ Quantum Technology (🆓)
- Bardin et al. — cryo-CMOS qubit controller papers, IEEE J. Solid-State Circuits (🆓 preprints)
- Vendor documentation — Quantum Machines, Zurich Instruments and Qblox RF control hardware (🆓 docs)
**Study approach:** This is your differentiator, so go deep where your EE background already pays off: the room-temperature signal chain (AWG → IQ mixer → up-conversion → fridge → amplifier → down-conversion → digitizer) and the cryogenic wiring and attenuation budget that delivers mK-temperature microwave control without dumping thermal noise on the qubit. Read the Krantz control sections and the Krinner cryo-wiring paper as your spine, then get hands-on with QICK on an RFSoC eval board (or via your own software signal-chain model) to understand real FPGA-timed pulse and readout sequences. Understand why low-latency FPGA feedback is the gating technology for active reset and real-time error correction. The habit that matters: treat every dB of attenuation, every noise temperature, and every nanosecond of feedback latency as a budget you must close.
**Project:** Two independent, genuinely shippable deliverables — no lab hardware required. (1) A paper RF-chain and cryogenic attenuation/noise-temperature budget from 300 K down to the mixing chamber: the full signal chain (AWG → IQ mixer → up-conversion → fridge → amplifier → down-conversion → digitizer) with every dB of attenuation and noise temperature accounted for — this leverages your EE background and is the strongest learning payoff. (2) A plain Python/NumPy software model of the signal chain: synthesize shaped IQ pulses, drive a simulated transmon, demodulate the readout, and apply a thresholded conditional X reset based on the measured state. Minimal shippable artifact: a closed attenuation/noise budget table plus a NumPy notebook that demodulates a simulated readout and applies a conditional reset. Real-time feedback latency cannot be demonstrated in an untimed software model, so reason about it analytically instead — count clock cycles and the ADC→DSP→DAC pipeline depth to show the latency budget closes. If you want to run real FPGA-timed feedback, the cheapest credible path is an RFSoC 4x2 with the QICK academic bundle (~$2k) — treat that as fully optional.

### 🔴 Characterization & calibration
**Prerequisites:** Noise, decoherence & NISQ, Pulse-level control
**Tracks:** Quantum hardware & control · Quantum error correction
**Resources:**
- Krantz et al. — *A Quantum Engineer's Guide to Superconducting Qubits*, arXiv:1904.06560 — characterization section (🆓)
- Magesan, Gambetta & Emerson — *Scalable and Robust Randomized Benchmarking of Quantum Processes*, PRL / arXiv (🆓)
- IBM Quantum — *Qiskit Experiments* library & docs: T1/T2, RB, tomography (🆓)
- Sandia — *pyGSTi* gate-set tomography toolkit, pygsti.info (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, quantum process tomography (💰)
**Study approach:** Learn the metrology ladder in order of cost and rigor: T1, T2-echo and Ramsey first, then randomized benchmarking for an average gate error that is robust to state-prep-and-measurement (SPAM) errors, then full process or gate-set tomography only when you must diagnose which errors dominate. Use Qiskit Experiments to run all of these on real backends so you see actual fitted decay curves and confidence intervals rather than idealized ones. Understand why RB is preferred in practice (it scales and is SPAM-robust) and why GST exists (self-consistent and model-violation aware). The habit: never quote a fidelity without stating how it was measured and what it does and does not capture.
**Project:** An automated single-qubit calibration notebook that defaults to a noisy simulator for the expensive steps and reserves real IBM hardware for the cheap ones. Run T1 and T2-echo on a real backend so you see actual fitted decay curves — these are quota-light. Run interleaved randomized benchmarking (to extract per-gate error), single-qubit process tomography, and drift tracking on a noisy simulator, since interleaved RB and tomography multiply circuits quickly and would exhaust the free Open-plan QPU allotment (~10 minutes/month). Keep process tomography to a single qubit (or one gate) and note the circuit-count scaling — two-qubit process tomography already needs thousands of circuits — which reinforces the 'tomography only when you must' rule. Wrap it as a re-runnable routine that tracks drift across repeated runs and flags qubits that fall out of spec.

### 🔴 Real-time control & FPGA feedback
**Prerequisites:** Control electronics & cryo/RF, Noise, decoherence & NISQ
**Tracks:** Quantum hardware & control · Quantum error correction
**Resources:**
- Fermilab — *QICK*, open-source FPGA/RFSoC qubit-control framework (🆓)
- Krantz et al. — *A Quantum Engineer's Guide to Superconducting Qubits*, arXiv:1904.06560 (🆓)
- IBM — *Qiskit Pulse* docs, pulse-level control (🆓)
- QuTiP — open-systems and control simulation toolkit (🆓)
- Zurich Instruments / Quantum Machines OPX — control-hardware documentation (🆓/vendor)
**Study approach:** Lean hard into your embedded/FPGA background — this node converts it directly into a quantum-hardware differentiator. Start with QICK to see real open-source FPGA qubit control (pulse generation, readout, fast feedback) on RFSoC, and read Krantz et al. to ground the control problem in superconducting-qubit physics. Frame the QEC feedback loop as a real-time-systems latency budget: measurement → decode → feedforward must close inside the coherence/round time, often sub-microsecond to a few microseconds. Treat decode latency as deterministic-gateware and pipelining engineering, which is exactly your wheelhouse. Skip cloud-only abstractions here.
**Project:** An HLS/RTL decoder demo — a repetition-code syndrome-decode step (lookup-table or union-find-lite) implemented in gateware and driven by a synthetic-syndrome testbench, with no real measurement in the loop since there is no QPU. Time the decode path in clock cycles/nanoseconds against a stated QEC round-time budget; with no hardware, target a cycle-accurate RTL/HLS simulation. The deliverable is a latency study — the decoder plus a written analysis comparing achieved decode time to the coherence/round budget — not a closed physical feedback loop. Read QICK to see how a real measure-decode-correct loop is wired, but note QICK execution needs RFSoC hardware you will not be driving here.

### 🔴 Cloud QPUs & real hardware
**Prerequisites:** Quantum SDKs & simulators
**Tracks:** All specializations
**Resources:**
- IBM Quantum Learning — learning.quantum.ibm.com, including the Qiskit Runtime *Sampler* and *Estimator* primitives (🆓)
- Qiskit documentation — transpilation, backends and primitives (🆓)
- AWS — *Amazon Braket* documentation and example notebooks on GitHub (💰 pay-per-shot)
- Microsoft — *Azure Quantum* documentation and Q# tooling (🆓 tooling; providers charge per job)
- Qiskit Global Summer School lectures, YouTube (🆓)
**Study approach:** Get one real job running on free IBM hardware in your first session — that single queue-and-results loop teaches more about shots, sampling noise and readout error than weeks of theory. Learn the primitives, not just gates: Sampler returns measurement samples/quasi-probabilities of bitstrings and Estimator returns expectation values of observables. In Qiskit Runtime, the Estimator exposes the resilience/error-mitigation options, while SamplerV2 returns raw shot data (a BitArray of counts) and does not apply mitigation by default. Internalize the real constraints — limited qubit connectivity forces SWAP overhead during transpilation, and gate plus readout error and decoherence cap usable circuit depth. The habit: run noiseless simulator, then a noisy fake backend, then real hardware, and explain every discrepancy. Stay honest that today's devices are NISQ — small, noisy, and not yet error-corrected.
**Project:** A reproducible notebook that takes one circuit (e.g. a GHZ state or a small VQE) and runs it across a local simulator, a noisy fake backend, and real IBM hardware, comparing results and applying Estimator-level error mitigation. Tabulate how transpilation to the device coupling map changes depth and gate count, and quantify the simulator-versus-hardware gap.

---

## PHASE 7: Applications & Capstone

### 🔴 Hybrid quantum-classical architecture
**Prerequisites:** Cloud QPUs & real hardware, Variational & parameterized circuits
**Tracks:** All specializations
**Resources:**
- IBM Quantum — *Qiskit Runtime: primitives, sessions & error mitigation* documentation (🆓)
- PennyLane / Xanadu — *Hybrid computation* demos, pennylane.ai (🆓)
- Cerezo et al. — *Variational Quantum Algorithms*, Nature Reviews Physics / arXiv (🆓)
- AWS — *Amazon Braket Hybrid Jobs* documentation (💰 pay-per-shot)
- IBM Quantum Learning — learning.quantum.ibm.com courses (🆓)
**Study approach:** Start by treating the QPU as a slow, noisy, expensive accelerator sitting behind a classical control loop — that framing kills most magical thinking. Build one end-to-end hybrid job on a real cloud QPU and instrument everything: queue time, transpilation, shot count, classical-optimizer iterations. Read the Qiskit Runtime primitives docs to see how IBM actually productionizes this with sessions, batching, and error mitigation. Mind the free tier: IBM's Open Plan now caps real-QPU use at roughly 10 minutes of execution time per month, and error mitigation (resilience levels / ZNE) multiplies the number of circuit executions, so iterate on a simulator and spend hardware time only on a final, deliberately tiny run. The one habit that matters: always benchmark the same problem on a strong classical baseline first, so you can state precisely what (if anything) quantum buys you. Lean on your edge-AI orchestration instincts here — this is MLOps with a weirder accelerator.
**Project:** Build a reproducible hybrid-pipeline repo: a classical driver that formulates a small problem, calls a parameterized circuit via Qiskit Runtime primitives (sessions + error mitigation), post-processes the results, and logs latency, shots, and cost. Do all iteration and optimization on a simulator first, then demonstrate it on a real IBM QPU using a single, deliberately tiny circuit (few qubits, low depth, modest shots) with error mitigation enabled only for that final hardware run — keeping you inside IBM's ~10 min/month free-tier budget. Log cost as QPU execution-time in seconds for the IBM path, noting that a dollar figure only applies if you opt into the paid Braket Hybrid Jobs path. Ship a README that compares wall-clock time and solution quality against a pure-classical solver and states honestly when quantum was worth it.

### 🟡 Quantum chemistry & simulation
**Prerequisites:** Variational quantum eigensolver, Hamiltonian simulation & Trotterization
**Tracks:** Quantum algorithms · Quantum ML researcher
**Resources:**
- IBM Quantum — *Qiskit Nature* tutorials & documentation (🆓)
- PennyLane / Xanadu — *Quantum chemistry* demos, pennylane.ai (🆓)
- Google — *OpenFermion* library & tutorials (🆓)
- Cerezo et al. — *Variational Quantum Algorithms*, Nature Reviews Physics / arXiv (🆓)
- McClean et al. — barren-plateaus paper, on ansatz trainability limits (🆓)
**Study approach:** Don't relearn chemistry — learn just enough second quantization to understand fermionic creation/annihilation operators, because the Jordan-Wigner and Bravyi-Kitaev mappings are the whole game. Run VQE on H2 first with Qiskit Nature or PennyLane qchem before touching anything larger; the toolchain hides a lot of detail until it breaks. Work the tutorials so you see the Hamiltonian, the mapping, the ansatz, and the classical optimizer as separate, swappable pieces. Stay honest: chemistry is the strongest quantum-advantage candidate, but current devices still cannot beat classical methods like CCSD(T) or DMRG on genuinely useful molecules.
**Project:** Build a VQE notebook that computes the dissociation curve of a small molecule (H2 or LiH): construct the molecular Hamiltonian, apply a Jordan-Wigner mapping, run a UCCSD or hardware-efficient ansatz, and plot energy vs bond length against an exact or classical reference. Execute at least one point on real hardware with error mitigation and document the noise gap honestly in the write-up.

### 🟡 Industrial quantum optimization
**Prerequisites:** QAOA & quantum optimization
**Tracks:** Quantum algorithms · Quantum ML researcher
**Resources:**
- PennyLane / Xanadu — *QAOA & combinatorial optimization* demos (🆓)
- IBM Quantum — *Qiskit* optimization / QAOA tutorials (🆓)
- D-Wave — *Ocean SDK* docs & QUBO/Ising formulation guides (🆓)
- Cerezo et al. — *Variational Quantum Algorithms*, Nature Reviews Physics / arXiv (🆓)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, UMD (🆓)
**Study approach:** The transferable skill is modeling: learn to rewrite scheduling, routing, and portfolio problems as QUBO/Ising, because that formulation is reusable whether you target QAOA, a D-Wave annealer, or a classical solver. Implement QAOA on a small Max-Cut by hand once so you understand the cost and mixer layers and the parameter landscape before leaning on libraries. The habit that matters: always run a strong classical baseline — simulated annealing (dimod/neal in the Ocean stack), Google OR-Tools CP-SAT, python-mip with CBC, or a specialized heuristic — on the exact same instance, because most published 'quantum optimization' wins evaporate under fair benchmarking. Gurobi or CPLEX are stronger still but commercial; reach for them only via a free academic license if you qualify. Read the QAOA and annealing literature critically; current evidence for practical advantage here is weak.
**Project:** Take one real-ish combinatorial problem (portfolio selection or shift scheduling), encode it as a QUBO, and solve it three ways: QAOA on a simulator/QPU, an annealer (use D-Wave's free hybrid/simulated samplers for the bulk of the sweep and reserve real Leap QPU calls — capped at roughly 1 minute of annealing time per month on the free tier — for one or two representative instances), and a free classical solver (OR-Tools CP-SAT or CBC). Ship a repo with a benchmarking harness reporting solution quality, time-to-solution, and scaling, plus a candid write-up of where, if anywhere, the quantum approach was competitive.

### 🟡 Quantum computing in finance
**Prerequisites:** QAOA & quantum optimization, HHL & quantum linear algebra
**Tracks:** Quantum algorithms · Quantum ML researcher
**Resources:**
- IBM Quantum — *Qiskit Finance* tutorials: amplitude estimation, option pricing, portfolio optimization (🆓)
- IBM Quantum Learning — amplitude-estimation course material, learning.quantum.ibm.com (🆓)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, UMD (amplitude amplification) (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information* (amplitude-estimation foundations) (💰 ~$75)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv (🆓)
**Study approach:** Anchor on one idea: quantum amplitude estimation promises a quadratic speedup over classical Monte-Carlo for pricing and risk — understand exactly where the O(1/ε) vs O(1/ε²) scaling comes from and what it costs in circuit depth. Work the Qiskit Finance tutorials for option pricing and value-at-risk to see amplitude estimation and QUBO portfolio models concretely. Pair every demo with resource counting: qubit and depth requirements push real advantage well past current hardware, so be precise about the crossover point. The habit: separate 'asymptotically faster' from 'faster on a machine that exists', and always say which you mean.
**Project:** Build a notebook that prices a European option two ways — classical Monte-Carlo and iterative quantum amplitude estimation via Qiskit — comparing convergence of the estimate against the number of samples/queries. Pull IterativeAmplitudeEstimation and EstimationProblem from the qiskit-algorithms package (they migrated there after the Qiskit 1.0 split), and verify qiskit-finance compatibility with your installed Qiskit version — or implement the amplitude-loading circuit directly if qiskit-finance lags — recording exact package versions in the repo to keep the notebook reproducible. Add a small QUBO portfolio-optimization example, then close with a resource estimate (qubits, circuit depth) showing what fault-tolerant hardware would be needed for a real speedup.

### 🟡 Post-quantum cryptography & security
**Prerequisites:** Shor's algorithm & quantum arithmetic
**Tracks:** Quantum algorithms
**Resources:**
- NIST — *FIPS 203 (ML-KEM), 204 (ML-DSA), 205 (SLH-DSA)* post-quantum standards (🆓)
- Open Quantum Safe — *liboqs* library & OQS OpenSSL provider (🆓)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, UMD (period finding / Shor) (🆓)
- Nielsen & Chuang — *Quantum Computation and Quantum Information*, Shor's-algorithm chapter (💰 ~$75)
- Ronald de Wolf — *Quantum Computing: Lecture Notes*, arXiv (🆓)
**Study approach:** Split this cleanly in two: the threat (why Shor's algorithm kills RSA and elliptic-curve crypto given a large fault-tolerant machine) and the response (lattice- and hash-based schemes that resist it). You don't need to re-derive Shor — know its resource requirements well enough to argue timelines honestly (millions of physical qubits, not yet here). Spend most of your time on the NIST standards FIPS 203/204/205 and actually run a PQC library (liboqs / OQS OpenSSL) to do a hybrid key exchange. The habit that matters: think in terms of harvest-now-decrypt-later and crypto-agility — migration is a multi-year engineering problem that must start before the quantum computer exists.
**Project:** Build a demo that performs a hybrid (classical + ML-KEM) TLS-style key exchange using liboqs / OQS OpenSSL, plus a signature example with ML-DSA. Pair it with a written migration assessment: inventory where RSA/ECC is used in a sample system, classify data by harvest-now-decrypt-later exposure, and lay out a crypto-agility roadmap citing FIPS 203/204/205.

### 🟡 Fault-tolerance & resource estimation
**Prerequisites:** Quantum error correction
**Tracks:** Quantum error correction · Quantum algorithms
**Resources:**
- Beverland et al. — *Assessing requirements to scale to practical quantum advantage*, arXiv (🆓)
- Microsoft — *Azure Quantum Resource Estimator*, runnable estimation tool (🆓)
- Joschka Roffe — *Quantum Error Correction: An Introductory Guide*, overhead context (🆓)
- Andrew Childs — *Lecture Notes on Quantum Algorithms*, for the algorithm-side T-counts (🆓)
**Study approach:** Treat this as the reality-check node. Read Beverland et al. to learn the standard methodology — logical-qubit counts, T-counts, code distance, and magic-state-distillation overhead — then run the Azure Quantum Resource Estimator on a couple of real algorithms. Internalize that physical-qubit counts for useful chemistry or Shor land in the millions, and why the overhead multipliers (distance, distillation, routing) drive that. Don't get lost in code-construction details. The habit that matters: pair every estimate with its assumed physical error rate, because the numbers are meaningless without it.
**Project:** Use the Azure Quantum Resource Estimator (and/or a hand-calculation following Beverland et al.) to estimate logical qubits, T-count, code distance and physical-qubit footprint for two targets — for example, Shor-factoring a meaningful RSA key size and a small-molecule ground-state estimation. Write a short memo comparing them and stating, under explicit assumptions, how far each sits from current hardware. The value is the honest gap analysis, not the absolute numbers.

---

## PHASE 8: Frontier & Leadership

### 🟡 Technical leadership & research communication
**Prerequisites:** Hybrid quantum-classical architecture
**Tracks:** All specializations
**Resources:**
- arXiv **quant-ph** and the journal *Quantum* (open access) — your daily preprint + open-access reading flow; learn to skim abstracts and read 1-2 deeply per week (🆓)
- Qiskit / PennyLane / Cirq on GitHub — contributing guides and good-first-issues; in quantum, merged OSS PRs *are* the portfolio (🆓)
- Google — *Technical Writing One & Two*, developers.google.com/tech-writing (🆓), short and high-ROI for clear written results
- Will Larson — *Staff Engineer: Leadership Beyond the Management Track*, staffeng.com (🆓 web / ~$25 print)
- IEEE Quantum Week (QCE), Q2B and the QIP conference — venues to give talks, post posters and build a network (💰 registration; many talks later free on YouTube)
**Study approach:** Treat this as a slow, applied spine layered on real quantum work, not a course to grind. The one habit that compounds: read one quant-ph or *Quantum* paper every week and re-derive its key result by hand, then write a short plain-language summary of it. Practice output relentlessly — a monthly technical blog post or internal brown-bag explaining a paper or your own project does more than any reading. Contribute to one OSS project (Qiskit, PennyLane, Stim) starting from good-first-issues, because a merged PR is the most credible signal in this field. Lean into your differentiator: you can explain control-electronics and hardware-error results that pure-software researchers cannot, so make that your translation niche for stakeholders.
**Project:** Make a non-trivial contribution to a major quantum OSS project (e.g. a Qiskit/PennyLane/Stim feature, bug fix, or new demo) AND deliver a paired communication artifact: a 15-20 minute recorded talk plus a short expository write-up that explains one frontier result (ideally a hardware/QEC paper in your niche) to non-specialists and to stakeholders deciding whether to fund it. Because merging is gated by maintainer review cycles outside your control, scope the deliverable as an open PR that passes CI and receives substantive maintainer review (merge is the stretch outcome) — and bias your first contribution toward documentation, a new demo, or a good-first-issue, which maintainers merge far more reliably than feature changes. Deliverable: the PR link (with CI green and review thread), the recorded talk, and the article.

### 🟢 Fault-tolerant quantum computing
**Prerequisites:** Quantum error correction
**Tracks:** Quantum error correction
**Resources:**
- Daniel Gottesman — *An Introduction to Quantum Error Correction and Fault-Tolerant Quantum Computation*, arXiv (🆓), the canonical fault-tolerance primer and threshold theorem
- Joschka Roffe — *Quantum Error Correction: An Introductory Guide*, arXiv (🆓), modern and readable
- Nielsen & Chuang ch.10 + John Preskill — Ph219/CS219 notes on fault tolerance and the threshold theorem (🆓 notes / 💰 book)
- Fowler, Mariantoni, Martinis & Cleland — *Surface codes: Towards practical large-scale quantum computation*, arXiv:1208.0928 (🆓), lattice surgery and magic-state injection
- Microsoft **Azure Quantum Resource Estimator** (🆓) — logical/physical qubit counts, T-factory cost and runtime for real algorithms
**Study approach:** Be honest from the start: this is the regime beyond NISQ and almost none of it runs at scale on today's hardware — its value is showing what it will cost and what error rates it demands. Lock down the prerequisites first (stabilizer formalism, the threshold theorem) using Gottesman and Preskill, since everything here builds on them. Then make *resource estimation* your practical, marketable skill: magic-state distillation overhead, lattice surgery for logical gates, and how code distance trades against physical qubit count. Use the Azure Resource Estimator to build intuition rather than deriving everything by hand. Connect it to your hardware edge — the physical two-qubit gate (and measurement) error rate is the dominant input deciding whether you are below threshold, while the physical-qubit overhead it implies decides whether fault tolerance is affordable; practical feasibility is jointly set with measurement/reset error, connectivity, and cycle time.
**Project:** Produce a full fault-tolerant resource estimate for one real algorithm — e.g. Shor factoring RSA-2048, or a quantum-chemistry ground-state estimate (FeMoco / a small molecule) — using the Azure Quantum Resource Estimator (or an open-source equivalent). Sweep physical error rate and code distance, report logical qubit count, magic-state-factory cost, and wall-clock runtime, and reproduce/compare against a published estimate. Ship a notebook + write-up that states clearly which hardware error rate would make it practical.

### 🟢 QEC & decoder research
**Prerequisites:** Quantum error correction
**Tracks:** Quantum error correction
**Resources:**
- Joschka Roffe — *Quantum Error Correction: An Introductory Guide*, arXiv (🆓)
- Craig Gidney — **Stim** (fast stabilizer/circuit simulator) and Oscar Higgott — **PyMatching** (MWPM decoder), open source with tutorials (🆓)
- Higgott & Gidney *Sparse Blossom* and Delfosse & Nickerson union-find decoder, arXiv (🆓), the real-time decoder frontier
- Google Quantum AI — *Suppressing quantum errors by scaling a surface code logical qubit*, Nature 2023 / arXiv (🆓), the first demonstration that scaling the surface code (d=3 to d=5) reduces the logical error rate, operating near threshold; and *Quantum error correction below the surface code threshold* (Willow), Nature 2024 / arXiv (🆓), the actual below-threshold milestone with sustained exponential suppression (Λ>1 across d=3,5,7)
- Bravyi et al. (IBM) *High-threshold and low-overhead fault-tolerant quantum memory*, Nature 2024 / arXiv, and Panteleev–Kalachev good qLDPC codes (🆓)
**Study approach:** This is the hottest and best-funded near-term area, and decoders are exactly where your real-time/FPGA/embedded background is a genuine, rare edge. Master the surface code and stabilizer simulation with Stim first, then implement decoding yourself: MWPM via PyMatching, then a union-find decoder so you understand the speed/accuracy trade. The live research frontier is latency (you must decode faster than the ~1 µs QEC cycle), qLDPC codes that slash qubit overhead, and ML decoders — track these on arXiv. The habit that matters: reproduce a threshold plot from circuit-level noise, because that single skill underpins every result in the area. Frame your work around hardware latency, where an FPGA decoder is an open engineering-and-research problem few software researchers can attack.
**Project:** Build a surface-code decoding benchmark: use Stim to generate circuit-level (depolarizing + measurement) noise detector data, decode it with PyMatching (MWPM) and a union-find decoder you implement, sweep physical error rate against code distances d=3,5,7, and plot logical error rate to locate the threshold. Stretch goals: a small neural-network decoder, or a latency budget arguing FPGA real-time feasibility. Ship a reproducible repo with one-command figure generation.

### 🟢 QML research frontier
**Prerequisites:** Quantum neural networks & gradients, Trainability & barren plateaus
**Tracks:** Quantum ML researcher
**Resources:**
- Maria Schuld & Francesco Petruccione — *Machine Learning with Quantum Computers*, Springer (💰), the QML text
- PennyLane demos — geometric/equivariant QML, quantum kernels and quantum embeddings (🆓), the best hands-on resource
- Huang et al. — *Power of data in quantum machine learning* (Nature Comms 2021) and *Quantum advantage in learning from experiments* (Science 2022), arXiv (🆓), the strongest provable-separation results
- Ewin Tang — dequantization / quantum-inspired algorithms, arXiv (🆓), the essential skepticism anchor showing many speedups vanish classically
- Cerezo et al. *Variational Quantum Algorithms* review and McClean et al. barren-plateaus paper, arXiv (🆓)
**Study approach:** The defining skill here is calibrated skepticism: most QML advantage claims collapse under scrutiny, and Tang's dequantization results show exactly why heuristic speedups are not enough. Read the proven-separation papers (Huang et al. on quantum data and learning from experiments) alongside the dequantization literature so you can tell provable from hopeful. Geometric and equivariant QML is the most principled current direction — work the PennyLane demos hands-on rather than just reading. Keep barren plateaus front and center as the central trainability obstacle that bounds what is realistically learnable. Your honest, baseline-anchored take is itself a research asset — most of the field needs more of it.
**Project:** Write a critical reproduction study: pick ONE claimed QML advantage (a quantum-kernel classifier or a QNN result), reproduce it in PennyLane on a real dataset, then stress-test it against a strong classical baseline (SVM/MLP) and a dequantized or classical-shadow alternative, reporting where the claimed advantage holds, shrinks, or disappears. Deliverable: a notebook plus a short write-up with the honest verdict and the conditions under which quantum would actually help.

### 🟢 Quantum advantage & benchmarking
**Prerequisites:** Grover search & amplitude amplification, QAOA & quantum optimization
**Tracks:** Quantum algorithms · Quantum ML researcher
**Resources:**
- QED-C — *Application-Oriented Performance Benchmarks for Quantum Computing*, GitHub suite + arXiv (🆓), runnable on simulators and real devices
- Arute et al. (Google) — *Quantum supremacy using a programmable superconducting processor*, Nature 2019 (🆓), with its classical-simulation rebuttals (Pan & Zhang tensor-network spoofing, arXiv)
- Kim et al. (IBM) — *Evidence for the utility of quantum computing before fault tolerance*, Nature 2023 (🆓), paired with its classical follow-ups: Tindall et al. tensor-network simulation of the kicked Ising circuit, and Begusic & Chan sparse Pauli / Clifford-perturbation methods (arXiv) — read the claim with its rebuttal stapled on, exactly as with the Google supremacy result
- Cross et al. — *Quantum Volume* and IBM volumetric benchmarking / CLOPS, arXiv (🆓)
- *PRX Quantum* and the journal *Quantum* — the venues where current advantage claims and rebuttals are argued; track both sides (🆓)
**Study approach:** The core skill is distinguishing a real, falsifiable advantage claim from marketing — read every claim with its classical-baseline rebuttal stapled to it. Study the random-circuit-sampling supremacy results and the tensor-network spoofing counter-results together, because the goalposts genuinely move year to year. Learn the metrics and what each hides: quantum volume, CLOPS, and application-level QED-C benchmarks all beat a single hero number. Actually run the QED-C suite on a noisy simulator and a real device so the gap is concrete, not abstract. The discipline that matters: for any claim, always name the classical baseline, the exact problem, and the resource being counted.
**Project:** Run the QED-C application-oriented benchmark suite primarily on a noisy simulator (the full volumetric sweep across widths and depths lives here), then spot-check on real hardware within a defined budget: restrict the real-device run to 1-2 benchmark applications at low qubit width and modest shot counts chosen to fit IBM Quantum's free Open-plan allotment (now ~10 min QPU/month), and treat the IonQ-via-AWS-Braket path as explicitly paid (estimate the per-shot cost before committing). Generate volumetric/performance plots and write a short report that (1) defines what 'advantage' would mean for one chosen application, (2) names the strongest classical baseline, and (3) quantifies how far current hardware is from it. Deliverable: the benchmark repo, the plots, and an honest, baseline-anchored assessment.

---

## Critical Path (Summary)

In priority order — the nodes and skills that matter most:

1. 🔴 **Complex linear algebra** (P0) — vectors, inner products, unitary/Hermitian operators, tensor products and eigendecomposition. The native language of quantum states and gates; nothing downstream parses without it.
2. 🔴 **Quantum mechanics foundations** (P1) — superposition, measurement, the Born rule and unitary evolution. Turns the linear algebra into physical predictions and grounds every later abstraction.
3. 🔴 **Qubits → multi-qubit systems & entanglement** (P1) — the Bloch sphere, then tensor-product state spaces, Bell states and entanglement. The core resource that makes quantum computing more than parallel classical bits.
4. 🔴 **Quantum gates & the circuit model + SDKs/simulators** (P2) — universal gate sets, the circuit picture, and hands-on Qiskit/PennyLane/Cirq simulation. Where theory becomes runnable code; the daily working surface.
5. 🔴 **QFT & phase estimation → Grover search** (P3) — the Fourier/phase-estimation engine behind most speedups, plus amplitude amplification. The canonical algorithms that teach how quantum advantage is actually constructed.
6. 🔴 **Density matrices, open systems & noise/NISQ** (P4) — mixed states, decoherence and the realities of near-term hardware. The bridge from idealized circuits to what real devices actually do.
7. 🔴 **Variational & parameterized circuits (VQC), incl. VQE/QAOA** (P5) — data encoding, trainable ansätze and hybrid optimization loops. The keystone node: the dominant paradigm for useful work on today's noisy machines.
8. 🔴 **Cloud QPUs / real hardware → hybrid quantum-classical architecture** (P6→P7) — running circuits on a real QPU and wiring it into a classical pipeline. The step that separates a simulator exercise from a shippable quantum-AI system.

Everything else is supporting material.

---

## Books — Essential Reading

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | Bernhardt, *Quantum Computing for Everyone* | P1 | 🟡 | ~$20–30 | Gentle on-ramp; builds intuition with minimal prerequisites before the heavy theory. |
| 2 | Nielsen & Chuang, *Quantum Computation and Quantum Information* | P1 | 🔴 | ~$60–90 | The canonical, comprehensive reference for the field; foundational from day one. |
| 3 | Hidary, *Quantum Computing: An Applied Approach* | P2 | 🟡 | ~$40–60 | Bridges theory to hands-on practice with real frameworks and applied examples. |
| 4 | Kaye, Laflamme & Mosca, *An Introduction to Quantum Computing* | P3 | 🟡 | ~$50–70 | Rigorous yet accessible algorithmic grounding to deepen core understanding. |
| 5 | Aaronson, *Quantum Computing Since Democritus* | P3 | 🟢 | ~$25–40 | Broadens conceptual and complexity-theoretic perspective; enriching companion reading. |
| 6 | Lidar & Brun, *Quantum Error Correction* | P4 | 🟢 | varies | The reference text for the QEC track; deep dive into fault tolerance. |
| 7 | Schuld & Petruccione, *Machine Learning with Quantum Computers* | P5 | 🔴 | ~$50–80 | Essential for the QML track; the definitive treatment of quantum machine learning. |

---

## Certifications

Be honest with yourself here: the quantum-computing certification landscape is **thin**, and there is no widely recognized, vendor-neutral "quantum engineer" credential the way cloud or networking have. In this field the real signal is **shipped projects, open-source contributions, and arXiv preprints** — a public repo implementing a VQE/QAOA solver, a Qiskit/PennyLane/Cirq pull request, or a preprint reproducing a quantum-ML result says far more than any badge. (This mirrors the controls world, where there is no single recognized ROS 2 certification and competence is shown through work, not a certificate.) Treat everything below as an optional credential booster, not a substitute for a portfolio.

**What genuinely exists:**

- **IBM Qiskit developer certification** — the one real exam-based credential in the space. ⚠️ IBM has revised and retired versions over time: the older *IBM Certified Associate Developer — Quantum Computation using Qiskit v0.2X* was retired on 30 September 2025 and replaced by the *IBM Certified Quantum Computation using Qiskit v2.X Developer — Associate* (Credly-issued digital badge). Because the version and exam details change, **verify the current status and exam objectives on IBM Training before relying on it.**
- **Vendor learning credentials (not certifications).** *IBM Quantum Learning* badges and *Q-CTRL Black Opal* are **learning tools** — useful for building and signposting foundational skill, but they are completions, not proctored certifications. Don't present them as more than that.
- **Big-cloud quantum training.** Microsoft (Azure Quantum / Q#), AWS (Braket), and Google (Cirq) all publish solid training material and tutorials, but **none currently offers a widely recognized standalone quantum certification.** Use their docs to learn the SDKs; don't expect a credential out of them.

Bottom line: take the Qiskit certification if it fits your stack and you want one structured milestone, lean on the free learning badges to scaffold fundamentals, and put your real effort into public code and writeups.

Sources:
- [Register for the new Qiskit v2.X developer certification — IBM Quantum](https://www.ibm.com/quantum/blog/qiskit-v2x-developer-certification)
- [IBM Certified Associate Developer — Quantum Computation using Qiskit v0.2X (IBM Training)](https://www.ibm.com/training/certification/ibm-certified-associate-developer-quantum-computation-using-qiskit-v02x-C0010300)
- [IBM offers quantum industry's first developer certification — IBM Quantum](https://www.ibm.com/quantum/blog/quantum-developer-certification)

---

## Cost & Time

Quantum computing is one of the cheapest technical fields to self-study: nearly every canonical resource is free. **IBM Quantum Learning** and the **Qiskit** textbook/docs, **PennyLane** (codebook, demos, datasets), university lecture notes (e.g. Nielsen & Chuang companion notes, Preskill's Caltech notes), and **arXiv** preprints together cover the entire theory and software stack at no cost. Local and cloud **simulators** (Qiskit Aer, PennyLane `default.qubit`/`lightning`, Cirq) run every small-to-mid project for free, and IBM Quantum's **free-tier real hardware** (open-plan QPUs, monthly minute allotment) is enough to run and validate most circuits on actual devices. Paid spend is essentially optional and concentrated in two places: **1-3 reference textbooks** and **occasional paid QPU time** when you outgrow the free tier (AWS Braket bills pay-per-shot/per-task, so cost scales only with what you actually run).

| Category | Cost | Notes |
|----------|------|-------|
| IBM Quantum Learning / Qiskit / PennyLane / lecture notes / arXiv | Free | Core curriculum, tutorials, codebooks, papers — the bulk of all study |
| Cloud + local simulators | Free | Qiskit Aer, PennyLane Lightning, Cirq — cover most projects |
| IBM Quantum free-tier hardware | Free | Open-access QPUs with a monthly time allotment; runs most real-device experiments |
| Reference textbooks (1-3) | ~$50-200 | e.g. Nielsen & Chuang, plus one applied/algorithms title; buy used or as needed |
| Optional paid QPU time (AWS Braket) | ~$0-50 (pay-per-shot) | Only when free tier is exhausted; scale shots to stay in budget |
| Optional cloud compute for large simulations | ~$0-30 | Occasional GPU/large-memory instances for big statevector sims |
| **Total — first cycle** | **~$50-250** | Mostly textbooks; everything else stays near zero if you lean on free tiers |

**Money-saving tips:**
- Stay on simulators and the IBM free tier until a project genuinely requires more shots than the allotment allows — most learning never leaves them.
- Buy textbooks used, or start with the free online lecture notes and only purchase a book once you know you'll reference it repeatedly.
- On AWS Braket, prototype on the simulator, then cap shot counts and batch tasks before touching a real QPU; pay-per-shot means small experiments cost cents, not dollars.

**Weekly time allocation (~8-12 hrs/week):** Budget roughly **40-50% to hands-on coding** (Qiskit/PennyLane notebooks, building and running circuits, simulator and free-tier hardware experiments), **30-40% to theory** (lecture notes, textbook chapters, the linear-algebra and quantum-mechanics foundations), and the remaining **~15-20% to a running project** (a small algorithm implementation or paper reproduction you push toward each week). At 8-12 hrs/week, expect a first cycle to span several months; protect at least one longer 2-3 hr block per week for deep work on the project, since context-switching is expensive in quantum work.

---

## Sources & Notes

This roadmap is compiled from canonical quantum-computing curricula and primary resources rather than a single course. Core references include **IBM Quantum / Qiskit** (textbook, Learning platform, and SDK docs), **PennyLane / Xanadu** (quantum machine learning and differentiable-programming demos), and **Microsoft Azure Quantum** (Q# and the Quantum Katas). Foundational theory leans on **Nielsen & Chuang**, *Quantum Computation and Quantum Information* (the standard graduate text), **John Preskill's Caltech lecture notes** (Ph219/CS219) for quantum information and fault tolerance, and **Schuld & Petruccione**, *Machine Learning with Quantum Computers*, for the QML track. Frontier and specialty topics (error correction, variational algorithms, hardware-specific results) are sourced from the **arXiv quant-ph** literature.

**Treat this as a long-horizon, frontier bet.** Quantum computing is a 5-10+ year horizon where the payoff timeline and the dominant platforms are genuinely uncertain. Plan accordingly and **reassess the whole roadmap every 6 months** — the order of nodes, the choice of stack, and even whether to keep pushing on this track should all be revisited at each checkpoint.

**Re-verify node resources before committing time or money.** Quantum tooling, SDK APIs, hosted-hardware access, and online courses change unusually fast — links rot, courses get deprecated, free tiers change, and SDKs introduce breaking changes between versions. Before purchasing a book/course or building against a specific API, confirm the resource still exists, is current, and matches the version assumed by the node.

---

*Compiled: 2026. A long-horizon (5-10+ year) frontier bet — reassess and update every 6 months.*
