# Control Systems & Robotics — Learning Roadmap
## Control, Estimation & Autonomy Engineer Path

---

## Executive Summary

**Control Systems & Robotics Engineering** is the classical, model-based discipline of making physical systems behave: you write down the dynamics (ODEs, equations of motion, transfer functions, state-space models), then design and prove feedback laws — PID, LQR/LQG, MPC, nonlinear, robust, adaptive — that drive plants, robots, vehicles and spacecraft to do what you want, with guarantees on stability, performance and constraint satisfaction. It is the model-based counterpart to ML-driven robotics: where learned policies trade interpretability for flexibility, this path delivers controllers you can analyze, certify and ship into safety-critical hardware. The two are converging (see the P8 *Learning & data-driven control* node), but the spine here is mathematics and feedback theory, not data.

This roadmap is for engineers who want to be the person who closes the loop — the controls, GNC or robotics-control engineer behind a self-driving stack, a drone or spacecraft autopilot, a robot arm, or a process plant. The market is broad and durable across four sectors: **aerospace & defense** (GNC engineers at Boeing, Lockheed, space and UAV firms), **automotive & autonomous vehicles** (vehicle dynamics, path tracking, ADAS/AD control), **industrial automation & process control** (PLC/SCADA, APC, the largest and most stable slice of hiring), and **robotics** (manipulators, mobile and legged platforms). These skills resist commoditization by code assistants because they demand genuine system modeling and stability reasoning, not boilerplate.

The 9 phases build strictly: P0 establishes the math and tooling (MATLAB/Simulink, ODEs); P1 the signals-and-classical-control core; P2 lifts you into state-space and physical modeling; P3 adds estimation (Kalman, EKF/UKF, navigation, SLAM); P4 brings the optimization-based control that defines the modern field (LQR, MPC, trajectory optimization); P5 covers nonlinear, robust and adaptive control; P6 puts controllers on real hardware (embedded/RTOS, ROS 2, PLC, simulation); P7 is where you specialize into a domain capstone; and P8 is frontier and leadership. Each later phase consumes the ones before it — you cannot do MPC without optimization and state-space, or estimation without probability and linear systems.

Three priority levels run throughout: **🔴 Critical** (the non-negotiable spine for your chosen track), **🟡 Desirable** (high-ROI competitive edge), and **🟢 Frontier** (long-term bets like learning-based and research-grade control). Every node carries resources, a study approach and — most importantly — a **project**. The project is the proof of competence: a controller that runs in simulation or on hardware, not a certificate, is what demonstrates you can actually close the loop.

**Three priority levels throughout:**
- 🔴 **Critical** — Core of the discipline (and of the track you choose). Non-negotiable.
- 🟡 **Desirable** — Competitive edge. Strong ROI but not blocking.
- 🟢 **Frontier** — Future bets: research-grade or emerging.

**Five specialization tracks** (pick one or more in the malla; the doc explains the study material for each node):
- **Industrial & process control** — process dynamics & FOPDT modeling, PID/IMC tuning, cascade/feedforward/ratio control, PLC & IEC 61131-3, SCADA/HMI, APC/MPC, and safety-critical control (IEC 61508/SIL)
- **Robotics & motion control** — robot kinematics/dynamics, computed-torque & operational-space control, force/impedance control, ROS 2 & ros2_control, trajectory optimization, mobile/legged platforms, and SLAM
- **Aerospace GNC** — flight & spacecraft dynamics, quaternion attitude control, cascaded autopilots, guidance loops & control allocation, INS/GNSS navigation, the integrated GNC stack, and DO-178C safety
- **Autonomous vehicles** — vehicle lateral/longitudinal dynamics & the bicycle model, path tracking (pure pursuit/Stanley/MPC), planning-and-control integration, sensor fusion & SLAM, and ISO 26262 functional safety
- **Estimation & navigation** — Kalman filtering, nonlinear estimation (EKF/UKF/particle filters), strapdown INS/GNSS fusion, SLAM, factor-graph smoothing (iSAM2/GTSAM) and multi-target tracking

**Resource tagging:**
- ✅ Included in Coursera Premium (or available as a free audit)
- 🆓 Free
- 💰 Paid (cost noted)

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Resources`, a `Study approach`, and a `Project`. The project is the proof of competence — without it, a node is unfinished.

---

## PHASE 0: Foundations — Math & Programming

*These have no prerequisites. Verify mastery and skip what you already know.*

### 🔴 Linux & CLI
**Unlocks:** ROS2 & ros2_control
**Tracks:** All specializations
**Resources:**
- Linux Journey — linuxjourney.com (🆓)
- MIT: *The Missing Semester of Your CS Education* (🆓)
- Coursera: *The Unix Workbench* — Johns Hopkins (✅ / free audit)
**Study approach:** Skim the Missing Semester in a day, then drill the rusty parts — shell scripting, ssh + tmux, cross-compilation basics, and the serial consoles you will use to flash microcontrollers.
**Project:** A bootstrap dotfiles repo that provisions a fresh control-dev VM (Python + python-control, a C++ toolchain, ROS2) in under 15 minutes.

### 🔴 Python
**Unlocks:** Numerical methods & simulation, ROS2 & ros2_control
**Tracks:** All specializations
**Resources:**
- Coursera: *Python for Everybody* — University of Michigan (✅ / free audit)
- *Automate the Boring Stuff with Python* (🆓)
- python-control & SciPy documentation (🆓)
**Study approach:** If new, work through Automate the Boring Stuff; if experienced, focus on the scientific stack (NumPy/SciPy, Matplotlib) and the python-control library, which mirrors MATLAB's Control System Toolbox.
**Project:** Reproduce a textbook control example end-to-end in python-control: build the plant, design a PID and a state-feedback controller, and plot step/Bode responses against the analytical result.

### 🔴 C++
**Unlocks:** Embedded & real-time control, ROS2 & ros2_control
**Tracks:** All specializations
**Resources:**
- learncpp.com (🆓) — most comprehensive free reference
- Book: *A Tour of C++* — Bjarne Stroustrup (💰 ~$40)
- Coursera: *C++ For C Programmers* — UC Santa Cruz (✅ / free audit)
**Study approach:** Treat modern C++ (smart pointers, RAII, move semantics) as the default. Prioritize what matters for real-time control: deterministic memory, fixed-step loops, and avoiding dynamic allocation in the control path.
**Project:** Implement a fixed-rate PID controller in C++17 with a producer/consumer sensor thread, bounded latency, and a logging sink. CMake build, CI, and sanitizer-clean.

### 🔴 MATLAB & Simulink
**Tracks:** All specializations
**Resources:**
- MathWorks **MATLAB Onramp** + **Simulink Onramp** — interactive self-paced tutorials, MATLAB Academy (free)
- MathWorks **Control Design Onramp with Simulink** + **Stateflow Onramp** — control loop and state-machine basics, MATLAB Academy (free)
- **MATLAB Tech Talks** — *Understanding Control Systems* / *Control Systems in Practice* (Brian Douglas et al.), YouTube (free)
- *Introduction to Programming with MATLAB* — Vanderbilt University, Coursera (free to audit)
- MathWorks **documentation & shipped examples** for MATLAB, Simulink and Control System Toolbox (free)
**Study approach:** Treat this as a tool you learn by building, not a course to finish. Do the MATLAB and Simulink Onramps first (about 2 hours each) to get fluent with the command window, scripts, vectors/matrices, and dragging blocks into a working model. Then run the Control Design Onramp to see the full loop (plant, sensor, controller, closed-loop response) and the Stateflow Onramp for supervisory logic. Skip deep MATLAB-as-a-programming-language study unless you need it; for controls you mostly need arrays, plotting, `tf`/`ss`/`feedback`, `step`, `bode`, and the Linear System Analyzer. Lean hard on the MathWorks docs and shipped examples as your reference, and use the Tech Talks to connect each feature back to the control theory you study elsewhere. Get comfortable with Simulink's solver settings, scopes, and the From/To workspace blocks early, since every later project runs through Simulink.
**Project:** Build a single-loop DC-motor speed (or position) control system entirely in Simulink: model the motor as a transfer function or state-space plant, add a PID controller, and close the loop. Tune the controller with the PID Tuner, then drive it with step and ramp references and document rise time, overshoot, and steady-state error on scope plots. Add a Stateflow chart that supervises an enable/disable/fault state machine (e.g. trips the loop on an over-current or over-speed signal), and use Control System Designer to compare your tuned gains against a Bode/root-locus design. Ship it as a versioned `.slx` model plus a MATLAB script that builds the plant, runs the simulation, and exports the response plots so the whole result is reproducible from one command.

### 🔴 Linear algebra
**Unlocks:** Signals & systems, State-space control, Dynamics & modeling, Robot kinematics & dynamics, Numerical methods & simulation, Optimization for control
**Tracks:** All specializations
**Resources:**
- 3Blue1Brown: *Essence of Linear Algebra* — YouTube (🆓)
- MIT 18.06 Linear Algebra — Gilbert Strang, OCW (🆓)
- Khan Academy — Linear Algebra (🆓)
**Study approach:** 3Blue1Brown for geometric intuition, then Strang for the mechanics you lean on constantly: eigenvalues/eigenvectors (modal analysis), the SVD, and solving linear systems.
**Project:** From scratch in NumPy: compute a system's modes via eigendecomposition of the A matrix, then verify controllability/observability rank conditions against python-control.

### 🔴 Calculus
**Unlocks:** Differential equations, Signals & systems
**Tracks:** All specializations
**Resources:**
- 3Blue1Brown: *Essence of Calculus* — YouTube (🆓)
- Khan Academy — Calculus (🆓)
- MIT 18.01 Single Variable Calculus — OCW (🆓)
**Study approach:** Refresh derivatives, the chain rule, and partial derivatives/gradients — they underpin linearization, the calculus of variations, and every gradient-based optimizer.
**Project:** By hand, linearize a nonlinear plant (e.g. a pendulum) about an equilibrium using a Jacobian, and confirm the linear model matches a numerical simulation near the operating point.

### 🔴 Differential equations
**Prerequisites:** Calculus
**Unlocks:** Signals & systems, Dynamics & modeling, Numerical methods & simulation, Nonlinear control
**Tracks:** All specializations
**Resources:**
- MIT 18.03SC *Differential Equations* (Arthur Mattuck), MIT OpenCourseWare — full OCW Scholar course: lecture videos, notes, and problem sets with solutions (free)
- 3Blue1Brown — *Differential Equations* series, YouTube — visual intuition for phase space, the Laplace transform, and matrix exponentials (free)
- Steve Brunton — *Engineering Math: Differential Equations and Dynamical Systems*, YouTube — engineering-oriented, leads naturally into state-space and control (free)
- Boyce & DiPrima — *Elementary Differential Equations and Boundary Value Problems* (12th ed.), Wiley — the canonical engineering reference for method and rigor (digital/WileyPLUS ~$83, 150-day rental ~$61; new hardcover lists ~$220, used older editions far cheaper)
- Strogatz — *Nonlinear Dynamics and Chaos* (book ~$85) + the free Cornell MAE 5790 YouTube lectures — optional, for going beyond linear ODEs once the basics are solid
**Study approach:** Treat this as a working tool for control, not a math survey, so prioritize the pieces you will reuse constantly: solving first- and second-order linear ODEs, the Laplace transform (and the s-domain it maps into), and linear systems x' = Ax solved via eigenvalues/eigenvectors and the matrix exponential. Watch the 3Blue1Brown series first to build phase-space and Laplace intuition, then use MIT 18.03SC as your structured spine and actually grind its problem sets — fluency comes from solving, not watching. Lean on Brunton to see why the matrix-exponential view of linear systems is the bridge to state-space control. Keep Boyce & DiPrima as a lookup reference for technique and worked examples. You can safely skip or skim heavy boundary-value-problem, Sturm-Liouville, and series-solution material at this stage; defer nonlinear dynamics (Strogatz) until after you have linear systems cold. Always connect each method back to a physical system (mass-spring-damper, RC circuit) so the math stays grounded.
**Project:** Build a "dynamic system simulator" for a damped mass-spring-damper (equivalently an RLC circuit). In Python (NumPy/SciPy/Matplotlib): (1) derive the second-order ODE and rewrite it as a first-order linear system x' = Ax + Bu; (2) compute the analytical step response three ways — by hand via the characteristic roots, via the Laplace transform / inverse transform, and via the matrix exponential e^{At} — and verify all three agree; (3) numerically integrate the same system with scipy.integrate.solve_ivp and overlay it on the analytical curve; (4) sweep the damping ratio to show underdamped, critically damped, and overdamped responses, and plot the system poles in the complex plane against the resulting time response. Ship it as a documented notebook or repo with the plots, so it doubles as your reference for how poles map to dynamic behavior — the exact intuition control design is built on.

### 🔴 Probability & statistics
**Unlocks:** System identification, Kalman filtering
**Tracks:** All specializations
**Resources:**
- Coursera: *Statistics with Python* — University of Michigan (✅ / free audit)
- *Think Stats* — Allen Downey (🆓)
- Khan Academy — Probability (🆓)
**Study approach:** Focus on Gaussian random variables, covariance, conditional expectation, and the law of total probability — the exact tools the Kalman filter is built from.
**Project:** Simulate a noisy 1-D measurement process and implement a recursive least-squares / scalar Kalman update; show the estimate variance shrinking as designed.

### 🔴 Git & version control
**Tracks:** All specializations
**Resources:**
- git-scm.com tutorial (🆓)
- GitHub Skills (🆓)
- Coursera: *Version Control* — Meta (✅ / free audit)
**Study approach:** Learn branching, rebase, and tags; for control work get comfortable versioning Simulink models and binary artifacts (Git LFS) and wiring up CI that runs simulations on every push.
**Project:** A template repo with a branching strategy, PR template, CI that runs a control simulation and fails on regressions, and tagged releases. Use it as the base for every later project.

---

## PHASE 1: Signals & Classical Control

### 🔴 Signals & systems
**Prerequisites:** Calculus, Differential equations, Linear algebra
**Unlocks:** Classical control
**Tracks:** All specializations
**Resources:**
- MIT RES.6-007 / 6.003 *Signals and Systems* — Alan Oppenheim video lectures + full course materials, MIT OpenCourseWare (free)
- Steve Brunton — *Fourier Analysis* playlist and *The Laplace Transform* lectures, YouTube / @Eigensteve (free)
- Oppenheim, Willsky & Nawab — *Signals and Systems*, 2nd ed., Prentice Hall — the canonical reference (~$65 used; new ~$240)
- B. P. Lathi & R. A. Green — *Linear Systems and Signals*, 3rd ed., Oxford — more accessible alternative with strong worked examples (~$100 used; new ~$169)
**Study approach:** Treat this as the toolkit you will reuse in every later node, so build fluency rather than just recognition. Follow the MIT/Oppenheim sequence: signals and LTI properties, convolution, then Fourier series and transform, then generalize to Laplace (the workhorse for control transfer functions) and Z (for digital control later). Lean on Brunton when you want intuition for why a transform decomposes a signal into eigenfunctions of LTI systems. For each transform, hand-derive a few small examples before trusting MATLAB/Python, and always tie results back to control: poles and zeros, stability from pole locations, and the frequency response H(jw). Skip the deep signal-processing detours (windowing, multirate, advanced DSP) that the books include but a controls track will not use early; you can return to sampling/aliasing when you reach digital control. Verify everything numerically with NumPy/SciPy or MATLAB so the abstract transforms become concrete.
**Project:** Build an LTI System Analyzer in Python (NumPy/SciPy/Matplotlib) or MATLAB. Given a transfer function or an impulse response, it should: (1) compute and plot the impulse and step responses, (2) perform convolution of an arbitrary input with the impulse response and compare against the transform-domain result, (3) compute and plot the magnitude/phase Bode-style frequency response, and (4) plot the pole-zero map and report stability. Validate it on a second-order mass-spring-damper model: vary the damping ratio and show how pole locations move and how overshoot and settling time change. Ship it as a documented repo with a notebook that walks through one worked example end to end, demonstrating the time-domain, frequency-domain, and transform-domain views are consistent.

### 🔴 Classical control
**Prerequisites:** Signals & systems
**Unlocks:** Digital control, State-space control, Process & industrial control
**Tracks:** All specializations
**Resources:**
- Brian Douglas — *Control System Lectures*, YouTube (root locus, Bode, Nyquist, PID, lead/lag) (free)
- *MATLAB Tech Talks: Understanding Control Systems* + *Control Systems in Practice*, MathWorks/YouTube (free)
- Åström & Murray — *Feedback Systems: An Introduction for Scientists and Engineers*, 2nd ed., full PDF at fbswiki.org (free)
- Norman S. Nise — *Control Systems Engineering*, 8th ed., Wiley (~$60-80 used/international edition)
- Katsuhiko Ogata — *Modern Control Engineering*, 5th ed., Pearson (~$70 used; new is ~$240)
**Study approach:** Treat this as the spine of the whole career, so build genuine intuition rather than memorizing procedures. Start with Brian Douglas to get a feel for what feedback does, why closed-loop poles matter, and how each tool (root locus, Bode, Nyquist) views the same plant from a different angle; pair every concept with a hands-on MATLAB/Octave/Python session so you can move a pole and watch the step response change. Use Nise as your problem-bank textbook (it is the gentlest of the three) and reach for Ogata when you want rigor or worked frequency-domain examples; keep Åström & Murray for the cleaner conceptual framing of sensitivity, robustness, and performance limits. The non-negotiable skills to leave with: read gain and phase margins off a Bode plot, sketch a root locus by hand and confirm it numerically, design a lead and a lag compensator to hit closed-loop bandwidth and damping specs, and explain the waterbed/sensitivity tradeoff. Skip exhaustive hand-calculation of every Routh-Hurwitz and Nyquist contour once you trust the tools; spend the saved time tuning real loops in simulation.
**Project:** Design and simulate a SISO controller for an inverted-pendulum-on-a-cart (or a DC-motor position servo) in MATLAB/Simulink or Python (python-control). Derive the linearized plant, then design by both root locus and loop shaping to meet explicit specs (e.g. settling time < 2 s, overshoot < 10%, phase margin > 45 deg). Compare a tuned PID against a lead-lag compensator, document the Bode/Nyquist plots and stability margins, and verify closed-loop step and disturbance-rejection response. Ship it as a repo with the design notebook, plots, and a short README justifying the final controller; bonus: deploy the same controller on an Arduino/ESP32-driven motor to confirm the sim matches hardware.

### 🔴 Digital control
**Prerequisites:** Classical control
**Unlocks:** Embedded & real-time control, PLC & industrial automation
**Tracks:** All specializations
**Resources:**
- Brian Douglas — *Discrete control* series, YouTube (free)
- Franklin, Powell & Workman — *Digital Control of Dynamic Systems*, 3rd ed., author-hosted Ellis-Kagle Press / SC Solutions eEdition-2 PDF (free)
- Åström & Wittenmark — *Computer-Controlled Systems: Theory and Design*, 3rd ed., Dover reprint, ISBN 9780486486130 (~$40 paid)
- MathWorks — *Control Systems in Practice* Tech Talks ('Understanding the Z-Transform', 'Understanding the Z-Plane', '4 Ways to Implement a Transfer Function in Code'), YouTube (free)
**Study approach:** Treat this node as the bridge from your analog classical-control intuition to running controllers on real computers, so build directly on root locus and Bode rather than starting fresh. First get the mental model from Brian Douglas's Discrete control series: why sampling introduces delay, what the z-plane means, and how the unit circle replaces the imaginary axis for stability. Then pick one design path and go deep instead of skimming all of them: design a controller in continuous time, discretize it with Tustin (bilinear) and with zero-order-hold, and compare the closed-loop step responses against the continuous design so you feel how sample rate and the warping error degrade performance. Use Franklin/Powell/Workman for the canonical methods (emulation vs. direct digital design, the modified z-transform for delay) and Åström & Wittenmark when you want the rigorous treatment of aliasing, anti-alias filtering, and intersample behavior. Critically, do not stop at the math: the engineering content of this node is implementation. Write the difference equation yourself, run it at a fixed period, and confront the practical issues that simulations hide — choosing sample rate (rule of thumb 20-30x bandwidth), anti-alias filter design, integer/fixed-point quantization, integrator anti-windup, and the computational delay between reading the sensor and writing the actuator. Skip exotic z-domain identities; spend that time getting one loop to actually close in code.
**Project:** Build a fixed-rate digital controller for a real second-order plant and document the discretization tradeoffs. Concrete shippable version: on an Arduino/STM32 (or ESP32), control DC-motor position or speed using an optical/quadrature encoder. Design a PID (or lead-lag) controller in continuous time for the identified motor model, then implement it three ways — emulation via Tustin, via zero-order-hold, and a directly z-domain-designed controller — each as a difference equation running in a timer ISR at a fixed sample rate. Deliverables: (1) the firmware with a timed control loop and proper anti-windup; (2) an experiment sweeping the sample rate (e.g. 1 kHz down to 20 Hz) and logging step responses, showing where the discrete design diverges from the continuous prediction and where it goes unstable; (3) a short writeup with a Bode/root-locus comparison of the continuous vs. discretized controllers and a note on the anti-alias filter and computational-delay margin. A pure-simulation variant (Python/Simulink with an identified plant) is acceptable and equally shippable if hardware is unavailable.

---

## PHASE 2: Modeling & State-Space

### 🔴 State-space control
**Prerequisites:** Classical control, Linear algebra
**Unlocks:** System identification, Kalman filtering, Optimal control (LQR/LQG), Nonlinear control, Robust control, Motion & manipulator control, Mobile & legged robots, Flight & spacecraft control, Autonomous vehicle control
**Tracks:** All specializations
**Resources:**
- Steve Brunton — *Control Bootcamp*, YouTube (University of Washington); state space, controllability/observability, pole placement, observers (free)
- Stanford EE263 (Stephen Boyd) — *Introduction to Linear Dynamical Systems*; full video lectures + course reader PDF at ee263.stanford.edu / Stanford Engineering Everywhere (free)
- MathWorks — *State Space* Tech Talk series (Brian Douglas), MATLAB YouTube channel; intuition for state variables, controllability and observability (free)
- Bernard Friedland — *Control System Design: An Introduction to State-Space Methods*, Dover 2005 reprint; pole placement, observers, separation principle, LQR/Kalman (~$35 paid; used/street copies often ~$20)
- João P. Hespanha — *Linear Systems Theory*, 2nd ed., Princeton University Press 2018; rigorous treatment of MIMO state-space and proofs (~$105 list / ~$70-90 street, paid)
**Study approach:** Treat this as the bridge from frequency-domain intuition to modern model-based control, so lean hard on the linear algebra prerequisite — eigenvalues, eigenvectors, rank, and the matrix exponential are the whole game here. Start with Brunton's Control Bootcamp end-to-end for the fast conceptual arc (state space, controllability/observability, pole placement, observers), then watch the short MathWorks State Space Tech Talks to cement controllability/observability intuition. Use Friedland as your working textbook because it is cheap, example-driven, and ties state feedback, observers, and the separation principle together; reach for EE263 when you want the deeper linear-algebra foundations (the matrix exponential, reachability, least-squares) and for Hespanha when you need rigorous proofs and MIMO results. Do the math by hand once — derive a pole-placement gain via Ackermann and design one Luenberger observer on paper — then immediately move everything into MATLAB/Python (place/acker, ctrb/obsv, lsim) and verify your closed-loop eigenvalues land where you put them. Skip optimal control (LQR/LQG) and Kalman filtering for now; they belong to the optimal-control and estimation nodes. The single most important skill to walk away with is comfort designing a state-feedback controller plus observer for a MIMO plant and reasoning about it through the system's eigenstructure.
**Project:** Design and simulate full state-feedback control with an observer for an inverted pendulum on a cart (a 4-state plant). Linearize the nonlinear dynamics about the upright equilibrium, build the (A, B, C, D) state-space model, and numerically confirm controllability and observability. Place the closed-loop poles with state feedback (compare Ackermann vs. an LQR-tuned gain if you want a stretch), then design a Luenberger observer running roughly 4-10x faster, and combine them via the separation principle. Validate against the full nonlinear plant in simulation, plotting state estimation error convergence and cart/pendulum response to a disturbance kick, and quantify the region of attraction where the linear controller still recovers the pendulum. Ship it as a reproducible MATLAB/Simulink or Python (python-control + SciPy) repo with a README documenting the model, pole choices, and observer/controller plots; an optional hardware extension is running the same controller on a real or low-cost rotary inverted pendulum (Furuta) rig.

### 🔴 Dynamics & modeling
**Prerequisites:** Differential equations, Linear algebra
**Unlocks:** Robot kinematics & dynamics, Simulation & digital twins
**Tracks:** All specializations
**Resources:**
- MIT OpenCourseWare *2.003J Dynamics and Control I* (Fall 2007) — video lectures, problem sets and notes; covers Lagrange's equations and linearization of the equations of motion (free)
- Kevin Lynch & Frank Park — *Modern Robotics*, Ch. 8 "Dynamics of Open Chains", full preprint PDF at modernrobotics.org (free)
- *Modern Robotics* Chapter 8 dynamics lecture playlist, Northwestern Robotics YouTube (free)
- John R. Taylor — *Classical Mechanics* (University Science Books, now MIT Press as of July 2025) — ~$160 print / ~$68 180-day digital rental (paid)
- Roy Featherstone — *Rigid Body Dynamics Algorithms*, Springer — ~$160 list (street $210-300), for recursive Newton-Euler / articulated-body methods (paid)
**Study approach:** Start from the Newton-Euler view you already have, then make Lagrangian mechanics your main tool: it scales to multi-DOF plants without bookkeeping constraint forces. Work the MIT 2.003J problem sets to get fluent at picking generalized coordinates, writing the kinetic/potential energy, and deriving the Euler-Lagrange equations of motion. Use Modern Robotics Ch. 8 to connect this to manipulators specifically (mass matrix, Coriolis, gravity terms) and to see the recursive Newton-Euler algorithm; read Featherstone only if you actually need efficient O(n) dynamics for simulation or real-time control. Taylor is your reference for the underlying mechanics (rigid-body rotation, inertia tensors, non-inertial frames). Crucially for control: after deriving the nonlinear EOM, practice linearizing about an equilibrium or trajectory to get the state-space model you will design controllers against. Skip deep analytical-mechanics topics (Hamiltonian formalism, canonical transformations) -- they are not needed for control work. Always sanity-check a derived model by simulating energy conservation with no input.
**Project:** Build a from-scratch simulator for a planar double pendulum (or a 2-link manipulator on a cart). Derive the equations of motion by hand with the Lagrangian method, implement the nonlinear EOM in Python (NumPy/SciPy), and integrate with an ODE solver to animate the motion. Validate the model by confirming total energy is conserved to integrator tolerance when no input or damping is applied. Then linearize the model symbolically (SymPy) about the upright equilibrium, export the A/B state-space matrices, and verify the linear model matches the nonlinear simulation for small perturbations. Ship it as a repo with the hand-derivation notes, the sim code, an energy-conservation test, and animated GIFs of both the free swing and the linearized response.

### 🔴 Robot kinematics & dynamics
**Prerequisites:** Dynamics & modeling, Linear algebra
**Unlocks:** Force & impedance control, Motion & manipulator control
**Tracks:** Robotics & motion control
**Resources:**
- Kevin Lynch & Frank Park — *Modern Robotics: Mechanics, Planning, and Control*, free preprint PDF + lecture videos via modernrobotics.org (free)
- *Modern Robotics* specialization (Courses 2 Kinematics & 3 Dynamics), Northwestern on Coursera (auditable, free)
- Peter Corke — QUT *Robot Academy*, free video lessons on forward/inverse/velocity kinematics, robotacademy.net.au (free)
- Spong, Hutchinson & Vidyasagar — *Robot Modeling and Control*, 2nd ed., Wiley (~$140, paid)
- Siciliano, Sciavicco, Villani & Oriolo — *Robotics: Modelling, Planning and Control*, Springer, softcover (~$90, paid)
**Study approach:** Treat this as the bridge from linear algebra and rigid-body dynamics to a usable robot model, and pick ONE notational convention rather than mixing them. The cleanest path is Lynch & Park's Modern Robotics (free preprint plus videos): work Course 2 (Kinematics) and Course 3 (Dynamics) using the product-of-exponentials / screw-theory formulation, which is more geometrically transparent than DH but learn classical DH parameters too since most real robot datasheets and ROS URDFs use them. For each topic, derive it for a planar 2R or 3R arm by hand before trusting a library: forward kinematics (transform chain), the geometric and analytic Jacobian, inverse kinematics (closed-form for a simple arm, then numerical Jacobian-pseudoinverse for the general case), and singularities. For dynamics, derive the equations of motion via Euler-Lagrange for the 2R arm so you physically understand the mass matrix, Coriolis terms, and gravity vector, then use recursive Newton-Euler from Spong or Siciliano as the scalable computational method. Use Peter Corke's Robotics Toolbox (Python) to check every hand derivation numerically. Skip mobile-robot and vision chapters for now — they belong to other nodes. Spong and Siciliano are reference texts: consult specific sections (DH, Jacobian, dynamics) rather than reading cover to cover.
**Project:** Build a kinematics-and-dynamics library and simulator for a 6-DOF manipulator (e.g. a UR5 or Franka, from its public DH/URDF parameters). Implement, from scratch in Python/NumPy: forward kinematics (DH and product-of-exponentials), the full geometric Jacobian, numerical inverse kinematics via damped least-squares with joint limits, and the manipulator dynamics M(q)q̈ + C(q,q̇)q̇ + g(q) via recursive Newton-Euler. Validate every component numerically against Peter Corke's Robotics Toolbox. Then drive the arm: generate a quintic-polynomial joint-space trajectory and a straight-line Cartesian trajectory (solved with your IK), and animate the arm tracking it in PyBullet or Matplotlib, plotting end-effector path, joint torques, and a manipulability/condition-number plot flagging near-singular configurations. Ship as a documented repo with tests asserting agreement with the reference toolbox.

### 🟡 System identification
**Prerequisites:** State-space control, Probability & statistics
**Unlocks:** Adaptive control, Process & industrial control
**Tracks:** All specializations
**Resources:**
- Lennart Ljung — *System Identification: Theory for the User*, 2nd ed., Prentice Hall (1999) — the canonical reference for PEM, ARX/ARMAX, subspace and grey-box methods (~$150 paid)
- *MATLAB System Identification Toolbox* documentation & Getting Started guide, MathWorks (free)
- Steve Brunton — *Data-Driven Control: Linear System Identification* lecture series, YouTube (free)
- J. Schoukens & L. Ljung — *Nonlinear System Identification: A User-Oriented Roadmap*, arXiv:1902.00683 (free)
- Rik Pintelon & Johan Schoukens — *System Identification: A Frequency Domain Approach*, 2nd ed., Wiley-IEEE (2012) — the reference for frequency-domain ID (~$165 paid)
**Study approach:** Treat this as a hands-on, data-first node rather than a theory marathon. Start with the conceptual workflow from the MATLAB Toolbox Getting Started guide and Brunton's lectures: design an exciting input, collect data, fit, validate, iterate. Learn the model-structure ladder in order — non-parametric (impulse/step/frequency response), then ARX (linear least-squares, the workhorse), then ARMAX/Box-Jenkins (noise modeling), then state-space via subspace methods (N4SID), then grey-box when you have physics. Use Ljung as a reference to look things up, not a front-to-back read; focus on his chapters on the prediction-error framework, persistent excitation, bias/variance, and model validation (residual whiteness and cross-correlation tests). The single most important habit is rigorous validation on held-out data and always checking that your input actually excites the dynamics you care about. Skip the deep convergence proofs and nonlinear black-box methods on a first pass; come back to the Schoukens/Ljung roadmap and Pintelon once you have a working linear pipeline.
**Project:** Identify a model of a real second-order plant and use it to design a controller. On hardware (e.g. a DC motor with encoder, or a thermal/RC plant on a microcontroller) or in simulation with added measurement noise: design a PRBS/chirp excitation signal, log input-output data, then fit and compare ARX, ARMAX, and a subspace (N4SID) state-space model. Validate each on a separate held-out dataset using fit percentage, residual autocorrelation, and input-residual cross-correlation tests, and overlay identified vs. measured frequency response. Finally, design a PID or pole-placement controller from the best identified model and demonstrate closed-loop tracking, quantifying how model error propagates to control performance. Ship as a reproducible repo with the data, identification scripts (MATLAB or Python with SIPPY), validation plots, and a short report justifying the chosen model order.

### 🔴 Numerical methods & simulation
**Prerequisites:** Linear algebra, Differential equations, Python
**Unlocks:** Optimization for control, Simulation & digital twins
**Tracks:** All specializations
**Resources:**
- Steve Brunton — *AMATH301: Beginning Scientific Computing* and *Engineering Mathematics (ME564/565)* playlists (numerical ODEs, forward/backward Euler, Runge-Kutta, stability), YouTube @Eigensteve (free)
- MIT OpenCourseWare 18.330 — *Introduction to Numerical Analysis* (Demanet, Spring 2012): ODE methods, numerical linear algebra, integration and stability (free)
- *Scientific Python Lectures* (lectures.scientific-python.org) — NumPy/SciPy for scientific computing, actively maintained (free)
- Hairer, Nørsett & Wanner — *Solving Ordinary Differential Equations I: Nonstiff Problems*, Springer (Series in Computational Mathematics 8) — canonical Runge-Kutta/multistep reference (~$90 paid)
- Press, Teukolsky, Vetterling & Flannery — *Numerical Recipes, 3rd Ed.*, Cambridge UP — broad scientific-computing reference incl. ODE integration (~$70 new street; $125 list, paid)
**Study approach:** Treat this as a working-knowledge node, not a numerical-analysis degree. Start with Brunton's numerical-ODE videos to build intuition for Euler vs Runge-Kutta, step size, and accumulated error, then code each method yourself in plain NumPy before ever calling a library. Pull the relevant chapters of MIT 18.330 for the theory you actually need: local vs global truncation error, stability regions, and the difference between explicit and implicit (stiff) solvers. Once you trust your hand-rolled integrator, switch to SciPy's solve_ivp and learn its solver options (RK45 for non-stiff, Radau/BDF for stiff systems, tolerances, events) using the Scientific Python Lectures. Keep Hairer and Numerical Recipes as references for when a simulation blows up or runs too slow, not as cover-to-cover reads. Skip deriving every method; the payoff is being able to pick the right solver, set sane tolerances, and recognize when a controller's instability is real versus a numerical artifact. Validate everything against a problem with a known analytic solution.
**Project:** Build a from-scratch ODE simulation engine and benchmark it against SciPy. Implement fixed-step Euler, RK4, and an adaptive RK45 (Dormand-Prince) integrator in pure NumPy, then simulate three systems of rising difficulty: a linear mass-spring-damper (verify against the closed-form solution), a nonlinear pendulum, and a stiff system (e.g. Van der Pol at high mu) where explicit methods break down. Produce convergence plots showing global error vs step size with the expected order slopes, an energy-drift plot over long horizons, and a wall-clock-vs-accuracy comparison against scipy.integrate.solve_ivp (RK45 and Radau). Ship it as a documented Python package with tests asserting the observed convergence orders and a short report explaining when each solver fails and why stiffness forces an implicit method. Stretch goal: drop a closed-loop PID controller (optionally via the open-source python-control library) around one plant and show how an undersized step size produces fake instability that vanishes with a proper adaptive solver.

---

## PHASE 3: Estimation & Filtering

### 🔴 Kalman filtering
**Prerequisites:** State-space control, Probability & statistics
**Unlocks:** Nonlinear estimation (EKF/UKF), Optimal control (LQR/LQG)
**Tracks:** All specializations
**Resources:**
- Roger Labbe — *Kalman and Bayesian Filters in Python*, interactive Jupyter book (free)
- Steve Brunton — *The Kalman Filter [Control Bootcamp]*, YouTube (free)
- MathWorks — *Understanding Kalman Filters* Tech Talk series (Parts 1-7; Parts 1-4 cover the linear filter), YouTube (free)
- Cyrill Stachniss — *Kalman Filter & EKF* lectures, YouTube (free)
- Dan Simon — *Optimal State Estimation: Kalman, H Infinity, and Nonlinear Approaches*, Wiley (~$80 used, ~$160 new)
**Study approach:** Start from the intuition, not the proofs: watch the MATLAB Tech Talk series (Parts 1-4, the linear case) to see why a Kalman filter beats a raw measurement and how predict/update interleaves, then watch Brunton to connect it back to the state-space observer you already know (it is an optimal-gain Luenberger observer). Do the actual learning by coding in Roger Labbe's book — run and modify the notebooks so you feel how Q and R reshape the gain and how the covariance converges to its steady state; this is where filter-tuning intuition is built. Treat Dan Simon as the rigorous reference to dip into for derivations and the steady-state (algebraic Riccati) form, not a cover-to-cover read. Skip the EKF/UKF/particle-filter material for now beyond a single overview (Stachniss) — nonlinear estimation is a separate later node; here, master the linear case cold, especially the meaning of the innovation, the gain, and noise tuning.
**Project:** Build a 2-DOF constant-velocity tracking filter in Python/NumPy and validate it in simulation: generate a ground-truth trajectory (position + velocity) of a moving target, corrupt it with synthetic process noise and noisy position-only measurements, then implement the discrete Kalman filter from scratch (predict/update, full covariance propagation, no library). Demonstrate it by (a) plotting estimate vs. truth vs. raw measurement with 3-sigma covariance bounds, (b) running a normalized-innovation (NEES/NIS) consistency check to prove the filter is statistically well-tuned, and (c) sweeping Q and R to show the bias/lag vs. noise-rejection trade-off and the convergence to the steady-state gain. Ship it as a documented repo with reproducible plots; as a stretch, feed it a real noisy signal (e.g. accelerometer or GPS log from a phone) and fuse it.

### 🔴 Nonlinear estimation (EKF/UKF)
**Prerequisites:** Kalman filtering
**Unlocks:** Navigation & sensor fusion, SLAM, Smoothing & tracking, Flight & spacecraft control
**Tracks:** All specializations
**Resources:**
- Roger Labbe — *Kalman and Bayesian Filters in Python* (EKF/UKF/PF chapters with runnable notebooks), GitHub/online (free)
- Cyrill Stachniss — EKF, UKF and Particle Filter lectures, YouTube (free)
- Dan Simon — *Optimal State Estimation: Kalman, H∞, and Nonlinear Approaches*, Wiley 2006 (~$160, paid)
- Thrun, Burgard & Fox — *Probabilistic Robotics*, MIT Press 2005 (~$105 new, paid)
**Study approach:** Start from the linear Kalman filter you already know and ask the single question that drives this whole node: what happens when f() or h() is nonlinear? Work Labbe's EKF chapter first because it shows the Jacobian-linearization recipe in runnable code, then immediately do the UKF chapter — the key insight is that the UKF propagates sigma points through the true nonlinear functions instead of linearizing, so it needs no Jacobians and is usually more accurate and robust. Treat Stachniss's lectures as the conceptual backbone (his sigma-point and particle-filter explanations are the clearest free source). Use Dan Simon as the rigorous reference when you need derivations or want to understand why an EKF diverges; use Probabilistic Robotics for the particle filter and the robotics framing. Skip particle filters until EKF/UKF are solid — they answer a different problem (multimodal, non-Gaussian beliefs) and are expensive. Spend most of your time on practical failure modes: filter divergence from bad initialization, inconsistency (NEES/NIS tests), and tuning Q and R. The goal is not to memorize equations but to be able to pick EKF vs UKF vs PF for a given system and diagnose a filter that lies about its own covariance.
**Project:** Estimate the full state of a simulated 2D mobile robot (or a pendulum-on-cart) that has nonlinear motion and a nonlinear sensor: e.g. range-and-bearing measurements to a set of known landmarks, with a unicycle motion model. Implement an EKF and a UKF from scratch (no filtering library) against the same ground-truth trajectory and the same noisy measurements, then add a particle filter for the case of an ambiguous initial pose. Deliverables: side-by-side RMSE-vs-time plots, a NEES/NIS consistency check showing each filter is statistically consistent (or documenting where the EKF goes inconsistent under high curvature), and a short write-up of when UKF beats EKF and where the particle filter is the only option. Stretch goal: port the UKF to a real IMU-plus-wheel-odometry log or a TurtleBot in simulation and show it tracks heading through turns where the EKF drifts.

### 🔴 Navigation & sensor fusion
**Prerequisites:** Nonlinear estimation (EKF/UKF)
**Unlocks:** Mobile & legged robots, Autonomous vehicle control, Guidance, navigation & control
**Tracks:** Estimation & navigation · Aerospace GNC · Autonomous vehicles · Robotics & motion control
**Resources:**
- Paul D. Groves — *Principles of GNSS, Inertial, and Multisensor Integrated Navigation Systems*, 2nd ed., Artech House — the canonical reference; reference frames, INS mechanization, INS/GNSS coupling (~$170, paid)
- Jay A. Farrell — *Aided Navigation: GPS with High Rate Sensors*, McGraw-Hill — design-oriented, MATLAB examples and aided-navigation case studies (~$135, paid)
- Coursera — *State Estimation and Localization for Self-Driving Cars*, University of Toronto (Self-Driving Cars Specialization); final project builds an error-state EKF fusing GPS, IMU and LIDAR on CARLA data (free to audit)
- VectorNav — *Inertial Navigation Primer*, vectornav.com — reference frames, attitude, IMU specs/error budgets, GNSS/INS theory of operation (free)
- Cyrill Stachniss — *Kalman/EKF and SLAM* lecture videos, YouTube (Univ. of Bonn) — recursive estimation and localization fundamentals (free)
**Study approach:** Start from the estimation foundation you already have (EKF/UKF) and reframe it as navigation: nail down reference frames (ECEF, NED, body) and the strapdown INS mechanization equations first, because everything else builds on getting attitude/velocity/position propagation right. Use Groves as the backbone reference and Farrell for the hands-on, MATLAB-driven derivations; skim, do not read cover-to-cover. The single most efficient path is the UToronto Coursera course audited end-to-end, because it walks you straight to an error-state EKF fusing GPS, IMU and LIDAR on real simulator data. Prefer the error-state (indirect) EKF formulation from the start, since that is what production INS/GNSS systems use, and explicitly model IMU biases as states. Read the VectorNav primer early to ground the theory in real sensor specs and error budgets. Skip deep GNSS signal-processing internals unless you target the Estimation & navigation track specifically.
**Project:** Build a 15-state error-state EKF (position, velocity, attitude, accel bias, gyro bias) that fuses simulated IMU and GNSS to estimate full pose. Run it on the UToronto/CARLA dataset (or a KITTI sequence), implementing loosely-coupled INS/GNSS: high-rate IMU mechanization in the propagation step, GNSS position/velocity in the update step, with a GNSS-dropout test to show INS dead-reckoning drift and recovery on re-acquisition. Deliverable: a documented Python repo with plotted error and 3-sigma covariance bounds (NEES/NIS consistency check) versus ground truth, plus an ablation comparing with and without online bias estimation.

### 🟡 SLAM
**Prerequisites:** Nonlinear estimation (EKF/UKF)
**Tracks:** Robotics & motion control · Estimation & navigation · Autonomous vehicles
**Resources:**
- Cyrill Stachniss — *SLAM Course* (Freiburg WS2013/14), [YouTube playlist](https://www.youtube.com/playlist?list=PLgnQpQtFTOGQrZ4O5QzbIHgl3b1JHimN_): EKF-SLAM, FastSLAM, least-squares/graph SLAM (free)
- Thrun, Burgard & Fox — *Probabilistic Robotics*, MIT Press 2005: the canonical reference for the estimation foundations of SLAM (~$125 new, list; used copies ~$55-60) (paid)
- Cadena, Carlone, Carrillo, Latif, Scaramuzza, Neira, Reid & Leonard — *Past, Present, and Future of SLAM*, [arXiv:1606.05830](https://arxiv.org/abs/1606.05830): field-defining survey, IEEE T-RO 2016 (free)
- GTSAM (borglab, Georgia Tech) + Dellaert — *Factor Graphs and GTSAM: A Hands-on Introduction*, [gtsam.org/tutorials](https://gtsam.org/tutorials/intro.html): pose-graph/factor-graph optimization backend with C++/Python (free)
**Study approach:** Treat SLAM as applied nonlinear estimation, so lean on your EKF/UKF prerequisite. Start with Stachniss's SLAM Course, watching the EKF-SLAM and FastSLAM lectures first to ground the filtering view, then shift to the least-squares/graph-SLAM lectures, which are the modern workhorse. Read Probabilistic Robotics alongside for the derivations (chapters on EKF-SLAM, GraphSLAM, FastSLAM) and skim the Cadena survey once to map the landscape and vocabulary (front-end vs back-end, loop closure, sparsity). Skip implementing a filter-based SLAM from scratch beyond a toy example; in practice everyone uses factor-graph back-ends, so invest your hands-on time in GTSAM. Work the Dellaert hands-on tutorial to build and optimize a small pose graph, then drive a real dataset through it. Defer deep dives into dense visual SLAM and learned front-ends unless your track demands them.
**Project:** Build a 2D pose-graph SLAM pipeline and evaluate it on public data. Easiest path: take a standard prebuilt pose graph in g2o format (e.g., the Intel Research Lab or MIT Killian Court datasets) where odometry and loop-closure constraints are already provided, load it into GTSAM, optimize the full graph, and report absolute trajectory error (ATE, after alignment) plus a before/after trajectory overlay plot. Harder, more impressive path: start from a raw log or a TurtleBot run in Gazebo, generate sequential odometry constraints, detect loop closures and add their constraints via scan matching (ICP on LiDAR scans), then optimize with GTSAM and also produce an occupancy-grid map. Deliver a reproducible repo that ingests the input, produces the optimized trajectory (and the map, for the raw-log path), and quantifies the improvement with ATE before vs after optimization. Stretch goal: add a landmark/feature factor variant and compare filter-style EKF-SLAM against the graph solution on the same data.

### 🟡 Smoothing & tracking
**Prerequisites:** Nonlinear estimation (EKF/UKF)
**Tracks:** Estimation & navigation · Autonomous vehicles
**Resources:**
- Frank Dellaert & Michael Kaess — *Factor Graphs for Robot Perception*, Foundations and Trends in Robotics (free PDF at cs.cmu.edu/~kaess/pub/Dellaert17fnt.pdf)
- GTSAM — official tutorials and docs, gtsam.org/tutorials (free)
- Cyrill Stachniss — *Graph-based SLAM using Pose Graphs* / *with Landmarks*, YouTube (free)
- Yaakov Bar-Shalom, X. Rong Li & Thiagalingam Kirubarajan — *Estimation with Applications to Tracking and Navigation: Theory, Algorithms and Software*, Wiley 2001 (~$185, paid)
- Kropfreiter, Meyer, Crouse, Coraluppi, Hlawatsch & Willett — *Track Coalescence and Repulsion in Multitarget Tracking: An Analysis of MHT, JPDA, and Belief Propagation Methods*, arXiv:2308.06326 (free)
**Study approach:** Treat this as two linked topics, both building on your nonlinear-estimation background. First, get the factor-graph mental model: read the front half of Dellaert & Kaess (free) for the bipartite-graph formulation and how MAP inference becomes sparse least squares, then make it concrete with the GTSAM tutorials, watching Stachniss's pose-graph lectures alongside to ground the SLAM intuition. Implement one batch smoother and one fixed-lag smoother in GTSAM and compare against your EKF/UKF on the same trajectory so you see what marginalization vs. relinearization buys you. For tracking, do not try to read all of Bar-Shalom; focus on the data-association chapters (gating, nearest-neighbor, JPDA) and skim MHT, using the arXiv MHT/JPDA/BP analysis to see how the methods trade off in clutter. Skip exotic random-finite-set machinery (PHD/GLMB) at this priority level — it is a separate rabbit hole. The payoff is being able to fuse delayed/out-of-order measurements (smoothing) and maintain identity over many objects (tracking), which the filtering-only nodes cannot do.
**Project:** Build a fixed-lag smoothing + multi-target tracker for an autonomous-vehicle perception sim. Generate (or use a public dataset like nuScenes/KITTI) a scene with ego odometry plus a noisy radar/lidar object detector producing clutter, missed detections, and crossing tracks. Stage 1: implement ego-state estimation as a GTSAM fixed-lag smoother fusing IMU/odometry and GPS, and show it beats a plain EKF when measurements arrive out of order. Stage 2: add a multi-target tracker (constant-velocity models with gating + JPDA data association) that maintains stable IDs through occlusions and crossings. Deliverables: MOTA/MOTP and ID-switch metrics versus a nearest-neighbor baseline, plus plots of smoothed-vs-filtered ego error. Ship as a reproducible repo with a short writeup.

---

## PHASE 4: Optimal & Predictive Control

### 🔴 Optimization for control
**Prerequisites:** Linear algebra, Numerical methods & simulation
**Unlocks:** Model predictive control, Trajectory optimization & planning
**Tracks:** All specializations
**Resources:**
- Stephen Boyd & Lieven Vandenberghe — *Convex Optimization*, full PDF at [stanford.edu/~boyd/cvxbook](https://stanford.edu/~boyd/cvxbook/) (free)
- Stanford EE364a — *Convex Optimization I* (Boyd, 2023), [YouTube playlist](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) + slides at [ee364a.stanford.edu](https://ee364a.stanford.edu/) (free)
- Jorge Nocedal & Stephen J. Wright — *Numerical Optimization*, 2nd ed., Springer (~$80) — line search, trust region, SQP, interior-point
- *CVXPY* documentation and example library — [cvxpy.org](https://www.cvxpy.org/) (free) — modeling language for convex problems in Python
- *OSQP* solver documentation, incl. the [Model Predictive Control example](https://osqp.org/docs/examples/mpc.html) (free) — ADMM-based QP solver used in embedded MPC
**Study approach:** Treat this as the mathematical backbone for every optimization-based controller you will build later (LQR, MPC, moving-horizon estimation), so prioritize fluency over breadth. Work through Boyd & Vandenberghe chapters 1-5 alongside the EE364a lectures: convex sets and functions, the standard LP/QP/SOCP forms, Lagrangian duality, and especially the KKT conditions — these are the single most important pages, because they explain why a constrained optimum looks the way it does and reappear directly in MPC and constrained LQR. Do not try to read the whole book; skip the advanced applications chapters for now. In parallel, learn one modeling tool (CVXPY) hands-on so you can pose and solve problems within an afternoon, then peek under the hood: skim Nocedal & Wright for how interior-point and active-set methods actually solve a QP, and read the OSQP docs to understand the warm-started, sparse QP solver that real-time controllers depend on. The goal is to be able to (1) recognize whether a control problem is convex, (2) write it as an LP/QP/NLP, and (3) reason about solver behavior, conditioning, and real-time feasibility.
**Project:** Build a small QP-based motion planner and benchmark suite: formulate a finite-horizon trajectory-optimization problem for a 2D point-mass or double-integrator (minimize control effort plus tracking error, subject to velocity/acceleration box constraints and a few polytopic obstacle/corridor constraints). Implement it three ways — (1) high-level model in CVXPY, (2) hand-assembled sparse QP matrices solved directly with OSQP, and (3) a from-scratch projected-gradient or active-set solver on a tiny version — and verify all three agree. Then ship a short report and plots comparing solve time, iteration count, and warm-start speedup as the horizon grows, and explicitly write out the KKT conditions for your problem and confirm the solver's returned dual variables satisfy them. This proves you can move from optimization theory to a real-time-capable controller component.

### 🔴 Optimal control (LQR/LQG)
**Prerequisites:** State-space control, Kalman filtering
**Unlocks:** Model predictive control, Trajectory optimization & planning, Robust control, Controls research & frontier
**Tracks:** All specializations
**Resources:**
- Steve Brunton — *Control Bootcamp* LQR / LQG lectures, YouTube (🆓)
- Stanford **EE363 — Linear Dynamical Systems** (Stephen Boyd) — notes & lectures on LQR/LQG and the Riccati equation (🆓)
- Anderson & Moore — *Optimal Control: Linear Quadratic Methods* — the LQ classic, free Dover-era PDF online (🆓)
- Bryson & Ho — *Applied Optimal Control* — calculus of variations & the minimum principle (💰 ~$120)
- Kirk — *Optimal Control Theory: An Introduction* — accessible Dover reprint (💰 ~$35)
**Study approach:** Start from the LQR you can derive and compute: watch Brunton's Control Bootcamp for the intuition that LQR is optimal pole placement traded off against control effort, then work Boyd's EE363 for the Riccati-equation machinery and the duality between LQR and the Kalman filter. Implement an LQR in python-control (`lqr`) and an LQG (LQR + Kalman) on a simple plant before touching the variational theory. Read the calculus of variations / Pontryagin material (Bryson & Ho or Kirk) once the linear-quadratic case is solid — it generalizes what you have already seen. Always connect the cost weights (Q, R) to physical behavior by re-tuning and re-simulating.
**Project:** Stabilize an inverted pendulum on a cart in simulation with full-state LQR, then drop the full-state assumption and close the loop with an LQG controller (Kalman filter + LQR) using only noisy cart-position and angle measurements. Sweep the Q/R weights and the noise covariances and document the trade-off between settling time, control effort, and noise rejection with response plots. Ship the python-control (or MATLAB) code plus a short write-up deriving the Riccati solution and showing the LQR/Kalman duality.

### 🔴 Model predictive control
**Prerequisites:** Optimal control (LQR/LQG), Optimization for control
**Unlocks:** Autonomous vehicle control, Guidance, navigation & control, Control systems engineering, Learning & data-driven control
**Tracks:** All specializations
**Resources:**
- Rawlings, Mayne & Diehl — *Model Predictive Control: Theory, Computation, and Design*, 2nd ed., official author PDF at UCSB (sites.engineering.ucsb.edu/~jbraw/mpc) (free)
- Borrelli, Bemporad & Morari — *Predictive Control for Linear and Hybrid Systems*, Cambridge 2017; near-final author PDF on Bemporad's IMT Lucca page (free)
- acados documentation — embedded SQP/QP solvers for real-time NMPC and MHE, docs.acados.org (free); pairs with OSQP, an Apache-2.0 embeddable QP solver, osqp.org (free)
- do-mpc documentation — Python MPC/MHE toolbox built on CasADi, do-mpc.com (free)
- MathWorks — *Understanding Model Predictive Control* Tech Talk series (Melda Ulusoy), YouTube/mathworks.com (free)
**Study approach:** Treat this as the capstone of the optimal-control thread, not a fresh start: you already have LQR and QP/NLP, so MPC is "constrained, receding-horizon LQR." Begin with the MATLAB Understanding MPC Tech Talks for the intuition (prediction horizon, cost, constraints, the receding-horizon loop), then go deep with Rawlings, Mayne & Diehl for the theory that actually defines the field — terminal cost and terminal constraint set, recursive feasibility, nominal and inherent-robust stability. Use Borrelli/Bemporad/Morari for the linear/explicit-MPC and hybrid (MIQP) view. Crucially, do not stay in math: build the QP for a linear MPC by hand once (stack the prediction matrices, form P and q, the inequality constraints) so the solver is never a black box, then immediately move to tooling — do-mpc/CasADi for fast prototyping of nonlinear MPC, and acados + OSQP for code-generated, real-time-feasible controllers. Always benchmark worst-case solve time against your sample period; an MPC that misses its deadline is not a controller. Skip explicit MPC beyond a conceptual pass unless an autonomous-vehicles or embedded track needs it.
**Project:** Build a constrained nonlinear MPC for a classic underactuated benchmark and ship it as a reproducible repo with closed-loop sim, deployable real-time code, and a tuning/benchmark report. Recommended plant: cart-pole swing-up-and-stabilize, or a 2D quadrotor trajectory-tracker. Formulate the OCP in CasADi (state/input constraints, terminal cost), solve it in closed loop with acados (code-generated SQP) and compare against an OSQP-based linear MPC on the linearized model. Deliverables: (1) animated closed-loop trajectories showing constraint satisfaction during aggressive maneuvers; (2) a measured solve-time histogram proving the controller meets its sample period (e.g., sub-millisecond per step); (3) an ablation showing what breaks without the terminal ingredients (loss of feasibility/stability); (4) a short README documenting horizon/weight tuning. Stretch goal: deploy the generated C controller on a microcontroller or run it hardware-in-the-loop.

### 🟡 Trajectory optimization & planning
**Prerequisites:** Optimization for control, Optimal control (LQR/LQG)
**Unlocks:** Mobile & legged robots
**Tracks:** Robotics & motion control · Aerospace GNC · Autonomous vehicles
**Resources:**
- Russ Tedrake — *Underactuated Robotics* (MIT 6.832), Ch. 10 Trajectory Optimization (direct transcription/shooting/collocation, iLQR/DDP) and Ch. 12 Sampling-based Motion Planning (RRT/PRM), underactuated.csail.mit.edu (free)
- Matthew Kelly — *An Introduction to Trajectory Optimization: How to Do Your Own Direct Collocation* (SIAM Review 2017, Vol. 59 No. 4) + OptimTraj MATLAB code, matthewpeterkelly.com (free)
- CasADi — open-source (LGPL) optimal-control framework with automatic differentiation and IPOPT; multiple-shooting and collocation OCP examples incl. the race-car problem, web.casadi.org/blog/ocp (free)
- Lynch & Park — *Modern Robotics*, Course 4: Robot Motion Planning and Control (Northwestern, Coursera); book Ch. 10 (Motion Planning) free as a preprint at hades.mech.northwestern.edu (audit / included-in-Coursera)
- Steven LaValle — *Planning Algorithms*, Cambridge 2006, full text free at lavalle.pl/planning (free)
**Study approach:** Start from optimal control: trajectory optimization is just discretizing an optimal-control problem into a nonlinear program, so first internalize the transcription idea (decision variables = states + controls at knot points, dynamics as equality constraints). Read Matthew Kelly's tutorial end-to-end first — it is the gentlest path and its cart-pole / block-move examples make direct shooting vs. multiple shooting vs. direct collocation concrete; run his OptimTraj code and perturb cost/constraints to build intuition. Then work Tedrake's Underactuated Ch. 10 for the rigorous treatment, including the link to iLQR/DDP (covered in the same chapter), and Ch. 12 for sampling-based planners; do the Drake notebook exercises. Implement at least one solver yourself in CasADi (it gives you the NLP + automatic differentiation + IPOPT for free) rather than only calling a library, so you understand why collocation defects and constraint Jacobians matter. Treat LaValle as a reference for the discrete/sampling-based planning side (RRT, PRM, kinodynamic planning) — skim, don't read cover to cover. Skip pseudo-spectral methods and planning-through-contact (contact-implicit / complementarity) on a first pass; revisit contact only after you can reliably solve smooth problems. Focus effort on getting a real solver to converge: scaling, initial guesses, and warm-starting are where most practical time goes.
**Project:** Build a trajectory-optimization pipeline that plans a dynamically-feasible, obstacle-free trajectory and then tracks it in closed loop. Pick one platform: (a) Robotics — a planar quadrotor or 2-link acrobot swing-up; (b) Aerospace GNC — a 2D powered-descent / soft-landing burn (minimize fuel, thrust and glide-slope constraints); or (c) Autonomous vehicles — a kinematic-bicycle car doing an obstacle-avoidance lane change. Formulate the problem with direct collocation in CasADi/IPOPT (states + controls as decision variables, dynamics as defect constraints, actuator limits and obstacle/path constraints, a fuel- or time- or effort-based cost). Compare against an iLQR/DDP solve of the same problem and report cost, solve time, and constraint satisfaction. Then close the loop: track the optimized trajectory with a time-varying LQR (or MPC re-solve) under added disturbances/model mismatch and show tracking error. Ship a repo with the solver, a config to switch platforms, plots of the optimized state/control trajectories and obstacle clearance, and an animation/GIF of the closed-loop run.

---

## PHASE 5: Nonlinear & Robust Control

### 🔴 Nonlinear control
**Prerequisites:** State-space control, Differential equations
**Unlocks:** Adaptive control, Force & impedance control, Motion & manipulator control, Flight & spacecraft control, Safety-critical control, Learning & data-driven control, Controls research & frontier
**Tracks:** All specializations
**Resources:**
- Hassan K. Khalil — *Nonlinear Systems*, 3rd ed., Prentice Hall 2002: the canonical graduate reference on Lyapunov theory, feedback linearization, passivity, and stability (~$150 paid)
- Jean-Jacques Slotine & Weiping Li — *Applied Nonlinear Control*, Prentice Hall 1991: application-focused treatment of sliding-mode, feedback linearization, and adaptive control (~$90 paid)
- Russ Tedrake — *Underactuated Robotics* (underactuated.csail.mit.edu, MIT 6.832/6.832x), free HTML/PDF notes plus YouTube lectures on partial feedback linearization and energy shaping (free)
- Hassan K. Khalil — *Nonlinear Control*, Pearson 2014: streamlined first-course version of the reference text, gentler entry point (~$95 paid)
- MathWorks — *What Is Sliding Mode Control?* Tech Talk (presented by Brian Douglas), YouTube: graphical intuition, derivation of the reaching law, and a Simulink example with boundary-layer chattering mitigation (free)
**Study approach:** Treat this as a theory-then-design loop, not a survey. Start with Lyapunov stability: get fluent finding and verifying Lyapunov functions and using LaSalle's invariance principle, since every later method rests on it — Khalil's Nonlinear Systems chapter 4 and a focused read of chapters 13-14 are the spine; use Khalil's lighter Nonlinear Control 2014 if the full reference feels heavy. Then work the constructive techniques in order of leverage: feedback linearization (understand relative degree and zero dynamics, and why it fails when zero dynamics are unstable), backstepping for strict-feedback systems, and sliding-mode control for robustness to matched uncertainty (watch the MathWorks Tech Talk first for intuition, then derive the reaching law and confront chattering honestly via the boundary layer). Skip the deepest differential-geometry formalism on a first pass — you need the design recipes and stability proofs, not Lie-bracket machinery for its own sake. Slotine & Li is the best companion for building physical intuition on robot and aerospace examples. Simulate every method on the same plant (an inverted pendulum or 2-DOF manipulator) so you directly compare what each controller buys you and where it breaks.
**Project:** Build a simulated nonlinear control benchmark on a 2-DOF robot manipulator (or inverted-pendulum-on-cart) in Python or MATLAB/Simulink. Implement and compare three controllers on the same plant: (1) feedback linearization / computed-torque, (2) backstepping, and (3) sliding-mode control with a boundary layer to suppress chattering. Inject matched model uncertainty and disturbances (mass/inertia error, friction, payload step) and produce a quantitative comparison — tracking RMSE, control effort, and a chattering metric — plus a numerically computed Lyapunov-decrease plot demonstrating closed-loop stability for each design. Ship it as a reproducible repo with plots and a short write-up explaining when each method wins and why.

### 🟡 Robust control
**Prerequisites:** State-space control, Optimal control (LQR/LQG)
**Tracks:** All specializations
**Resources:**
- Sigurd Skogestad & Ian Postlethwaite — *Multivariable Feedback Control: Analysis and Design*, 2nd ed., Wiley — the canonical text on robust MIMO control (~$70 paperback paid; hardcover ~$190; free first-three-chapters + index sample at [skoge.folk.ntnu.no/book](https://skoge.folk.ntnu.no/book/))
- Kemin Zhou & John C. Doyle — *Essentials of Robust Control*, Prentice Hall (1998) — rigorous H2/H-infinity and mu theory, self-contained with MATLAB examples (~$90, mostly used market; official errata/slides free at [ece.lsu.edu/kemin/essentials.htm](https://www.ece.lsu.edu/kemin/essentials.htm))
- MathWorks — *Robust Control* video series (Brian Douglas), 5 parts; Part 5 covers H-infinity and mu-synthesis on an active suspension (free)
- MathWorks — *Robust Control Toolbox* documentation: `hinfsyn`, `mixsyn`, `musyn`, `ncfsyn`, uncertain models (`uss`/`ureal`) (free)
**Study approach:** This is a desirable P5 capstone, not a foundation — only attempt it once state-space and LQR/LQG are solid, since robust control reframes everything as norm-bounded optimization over the sensitivity (S), complementary sensitivity (T) and control-effort (KS) transfer functions. Start with the intuition layer: watch the MathWorks/Brian Douglas Robust Control series (all 5 parts) end-to-end to internalize what uncertainty, robust stability, and robust performance actually mean and why classical gain/phase margins are inadequate for MIMO and unstructured uncertainty (Parts 2-3 reframe margin via the disk margin). Then read Skogestad & Postlethwaite as your primary spine — chapters on uncertainty representation, the S/T/KS weighting framework, the small-gain theorem, and the structured singular value (mu); use Zhou & Doyle only when you want the deeper proofs behind H-infinity synthesis and the Riccati conditions. Do not get lost in operator-theory derivations; the engineering payoff is learning to (a) model plant uncertainty as weighted perturbations, (b) encode performance specs as frequency-dependent weighting filters W_S, W_KS, W_T, and (c) call `mixsyn`/`hinfsyn` then validate with `musyn` and D-K iteration (use `musyn`, not the deprecated `dksyn`). Work every step inside the MATLAB Robust Control Toolbox with `ureal`/`uss` uncertain models so theory and tooling reinforce each other, and always close the loop by checking robust stability/performance margins (`robstab`, `robgain`) rather than trusting the nominal design.
**Project:** Robust controller for an active quarter-car suspension with parametric uncertainty (sim, MATLAB/Simulink). Model the quarter-car with uncertain sprung/unsprung masses and damping using `ureal`, then specify performance via weighting filters trading off body acceleration (ride comfort), suspension travel, and actuator effort. Design and compare three controllers on the SAME plant: a nominal H-infinity controller via `mixsyn` (mixed-sensitivity loop shaping), a mu-synthesis controller via `musyn`/D-K iteration, and your earlier LQR/LQG baseline as the prerequisite link. Deliver a report that (1) plots S/T/KS singular values against the design weights, (2) reports robust stability and robust performance margins from `robstab`/`robgain` across the uncertainty set, and (3) shows time-domain responses to a road-bump disturbance for worst-case sampled plants — demonstrating that the mu-synthesis design preserves performance where the nominal H-infinity design degrades. The official MathWorks 'Robust Control of Active Suspension' example is a good reference workflow. Ship the code, the weighting-filter rationale, and the margin/Monte-Carlo comparison plots.

### 🟡 Adaptive control
**Prerequisites:** Nonlinear control, System identification
**Tracks:** All specializations
**Resources:**
- Petros Ioannou & Jing Sun — *Robust Adaptive Control*, Prentice Hall 1996 (full PDF free from the author's USC page, viterbi-web.usc.edu/~ioannou; also on the Internet Archive) (free)
- Karl J. Åström & Björn Wittenmark — *Adaptive Control, 2nd ed.*, Dover 2008 (list ~$33) (paid)
- Jean-Jacques Slotine & Weiping Li — *Applied Nonlinear Control*, ch. 8 (adaptive control), Prentice Hall 1991 (new ~$85) (paid)
- Naira Hovakimyan & Chengyu Cao — *L1 Adaptive Control Theory*, SIAM 2010 (softcover list ~$103; SIAM e-book ~$90) (paid)
**Study approach:** Do not start here until nonlinear control (Lyapunov) and system identification are solid; adaptive control is essentially online estimation plus a stability proof. Begin with Slotine & Li ch. 8 for the cleanest intuition: derive the first-order MRAC law and prove tracking via a Lyapunov function, noticing that signal boundedness, not parameter convergence, is what you actually guarantee (parameter convergence needs persistent excitation). Then read Astrom & Wittenmark for the engineering picture (self-tuning regulators, gain scheduling, real implementation issues like windup and sampling). Use Ioannou & Sun as the rigorous reference for the failure modes that bite in practice: parameter drift, bursting, and the robustness fixes (sigma-modification, e-modification, dead-zone, projection) needed under disturbances and unmodeled dynamics. Treat L1 (Hovakimyan & Cao) last, as the modern answer to MRAC's poor transients: understand that it decouples adaptation speed from robustness via a low-pass filter. Implement every law you read in simulation immediately; adaptive control looks fine on paper and misbehaves the moment you add noise or unmodeled dynamics.
**Project:** Build a self-tuning attitude/position controller for a plant with genuinely unknown, slowly-varying parameters and benchmark adaptation against a fixed-gain baseline. Concretely: simulate a single-axis system whose mass/inertia is unknown and changes mid-run (e.g. a quadrotor that picks up a payload, or a motor with a varying load). Implement (1) a fixed PID tuned for the nominal plant, (2) direct MRAC with a Lyapunov-derived adaptation law, and (3) the same MRAC with sigma-modification or projection for robustness. Inject sensor noise, an input disturbance, and unmodeled actuator dynamics, then show the fixed controller degrades or goes unstable after the parameter jump while the adaptive versions recover tracking. Quantify with tracking RMSE, control effort, and a parameter-estimate plot, and demonstrate parameter drift/bursting in plain MRAC versus the robust variant. Stretch goal: port the MRAC loop to a real low-cost platform (a DC motor with a swappable flywheel, or a small quadrotor in a sim-to-real setup) and reproduce the payload-change recovery on hardware.

### 🟡 Force & impedance control
**Prerequisites:** Robot kinematics & dynamics, Nonlinear control
**Tracks:** Robotics & motion control
**Resources:**
- Lynch & Park — *Modern Robotics*, Ch. 11 (Force Control 11.5, Hybrid Motion-Force 11.6); free preprint PDF (hades.mech.northwestern.edu/images/7/7f/MR.pdf) + Northwestern lecture videos on YouTube (free)
- Siciliano, Sciavicco, Villani & Oriolo — *Robotics: Modelling, Planning and Control*, Ch. 9 "Force Control" (impedance, admittance, hybrid force/motion), Springer; softcover ~$90 (~$90 paid)
- N. Hogan — *Impedance Control: An Approach to Manipulation, Part I—Theory*, ASME J. Dyn. Sys. Meas. Control 107(1):1-7, 1985; foundational paper, free PDF hosted at MIT (free)
- O. Khatib — *A Unified Approach for Motion and Force Control of Robot Manipulators: The Operational Space Formulation*, IEEE J. Robotics & Automation 3(1):43-53, 1987; free PDF at khatib.stanford.edu (free)
**Study approach:** Build on your dynamics and nonlinear-control prerequisites: start with Modern Robotics Ch. 11.5-11.6 to get the operational picture of force control, hybrid motion-force control, and impedance control with worked task-space examples. Then read Siciliano Ch. 9 carefully for the rigorous treatment of compliance, impedance vs. admittance, and the duality between controlled directions (motion) and constrained directions (force). Read Hogan Part I to internalize why you regulate a dynamic relationship (impedance) rather than position or force alone, and Khatib for the unified operational-space derivation that ties end-effector dynamics to force commands. Skip the historical stiffness-control detours; focus on (1) when to choose impedance vs. admittance based on environment stiffness and your robot's backdrivability, (2) selection matrices for hybrid control, and (3) contact stability. Always implement what you read — the failure modes (contact instability, force overshoot) only become intuitive in simulation.
**Project:** Implement a Cartesian impedance controller and a hybrid motion-force controller for a torque-controlled manipulator (e.g., a 7-DOF Panda/Franka or KUKA iiwa model) in PyBullet, MuJoCo, or Gazebo. Task: have the end-effector slide along a rigid surface while maintaining a commanded normal contact force (e.g., a wiping/polishing or peg-on-surface task), controlling tangential motion and normal force simultaneously. Deliverable: a repo with the controller code, a tunable stiffness/damping interface, plots of commanded vs. measured contact force and motion-tracking error, and a demonstration of stable contact transition from free-space to constrained motion. Stretch goal: add admittance control for a position-controlled robot and compare contact stability against a stiff environment.

---

## PHASE 6: Real-Time & Integration

### 🔴 Embedded & real-time control
**Prerequisites:** C++, Digital control
**Unlocks:** Safety-critical control, Control systems engineering
**Tracks:** All specializations
**Resources:**
- *Embedded Systems - Shape The World* (UT.6.10x Microcontroller I/O + UT.6.20x Multi-Threaded Interfacing), Valvano & Yerraballi, UT Austin on edX (free to audit; TI TM4C123 / Tiva LaunchPad lab kit needed for hardware labs)
- FreeRTOS official documentation + *Mastering the FreeRTOS Real Time Kernel - A Hands-On Tutorial Guide* (free PDF from the FreeRTOS project)
- STM32 Motor Control MOOC, STMicroelectronics - 5-part series on FOC theory and firmware implementation (free)
- Philip Koopman - *Better Embedded System Software* (~$20 paperback; ~$10 e-book)
- Jane W. S. Liu - *Real-Time Systems*, Prentice Hall - canonical scheduling/rate-monotonic reference (pricey new, ~$60+; often used/library)
**Study approach:** Treat this node as the bridge between the discrete-time controller you designed in Digital control and code that meets hard deadlines. Start by getting a fixed-rate control loop running deterministically: use an RTOS (FreeRTOS) periodic task or a hardware-timer ISR to enforce an exact sample period, and measure jitter with a scope pin-toggle rather than trusting it. Work the FreeRTOS docs and Koopman in parallel - Koopman for the discipline (watchdogs, stack sizing, avoiding priority inversion, no malloc in the loop), FreeRTOS for the mechanics. Re-derive your difference equations in fixed-point or carefully-scaled floats and watch for saturation, integrator windup, and overflow; this is where textbook controllers fail on real silicon. Skip building a full RTOS from scratch and skip deep real-time-scheduling proofs unless a track demands it - Liu is a reference to dip into for rate-monotonic analysis, not a front-to-back read. The Valvano course is the fastest path to the peripheral layer (GPIO, ADC, PWM, interrupts); the ST MOOC is where timing, PWM and a real plant (a motor) come together. Validate against a simulated or bench plant before you trust the hardware loop.
**Project:** Implement a digital PID (or LQR) motor-speed/position controller on a microcontroller (e.g. STM32 or TI TM4C) driving a real or simulated BLDC/DC motor. Run the control law as a fixed-rate FreeRTOS task or timer ISR at a chosen sample rate, read the encoder/ADC, generate PWM to the H-bridge or inverter, and implement anti-windup and saturation. Instrument the loop: toggle a GPIO each cycle and capture timing jitter on a scope/logic analyzer, and stream the reference, measurement and control effort over UART/USB for step-response plots. Ship it with a README documenting the sample period, fixed-point/float scaling choices, measured worst-case loop time, and the closed-loop step response versus your digital-control prediction. A HIL/sim variant (motor model on host, firmware on target over serial) is an acceptable shippable substitute if hardware is unavailable.

### 🔴 ROS2 & ros2_control
**Prerequisites:** C++, Python, Linux & CLI
**Tracks:** Robotics & motion control · Autonomous vehicles · Aerospace GNC
**Resources:**
- *ROS 2 Documentation* (docs.ros.org) — official tutorials: nodes, topics, services, actions, TF2, launch, lifecycle (free)
- *ros2_control documentation* (control.ros.org) — controller manager, hardware interface, ros2_controllers (free)
- Josh Newans — *Articulated Robotics* “Making a Mobile Robot” series, YouTube + articulatedrobotics.xyz, incl. ros2_control in sim (Pt 12) and on real hardware (Pt 13) (free)
- *MoveIt 2 docs* (moveit.picknik.ai) and *Nav2 docs* (docs.nav2.org) — manipulation planning and autonomous navigation (free)
- The Construct — *ROS2 Control Framework* course on Robot Ignite Academy, plus free weekly ROS Developers Open Classes (free tier covers 3 basics courses + first unit of others; full subscription ~€39.97/mo)
**Study approach:** Treat this as integration, not theory: the control math comes from earlier nodes, so here you learn to deploy it inside a middleware. Start with the official ROS 2 tutorials only until you are fluent with nodes, topics, services, actions, parameters, launch files and TF2 — skip the deep DDS/QoS internals on a first pass. Then go straight into ros2_control: understand the controller manager, the hardware interface abstraction (command/state interfaces) and write a custom controller and a hardware interface, since this is the part most people skip and the part that matters for real-time control. Follow the Articulated Robotics series end-to-end because it wires URDF, Gazebo, ros2_control and real hardware together in one coherent project. Add MoveIt 2 (manipulation) or Nav2 (navigation) depending on your track. Always develop in simulation (Gazebo) first, then port to hardware unchanged via the hardware interface.
**Project:** Build a differential-drive mobile robot in Gazebo with a full ros2_control stack: write a URDF, configure a diff_drive_controller and a joint_state_broadcaster through the controller manager, and implement a custom SystemInterface hardware interface (the Gazebo ros2_control plugin for sim, with a stub so the same config drives real motors). Layer Nav2 on top for autonomous point-to-point navigation with SLAM-built maps, or mount an arm and use MoveIt 2 for a pick-and-place. Ship it as a launchable colcon workspace on GitHub with a README, a recorded demo, and a documented path to swap the simulated hardware interface for a real microcontroller.

### 🟡 Simulation & digital twins
**Prerequisites:** Numerical methods & simulation, Dynamics & modeling
**Tracks:** All specializations
**Resources:**
- *Gazebo Sim* documentation and tutorials, gazebosim.org (free, open source)
- *MuJoCo* documentation and official Colab tutorial notebooks (incl. an LQR control example), Google DeepMind, mujoco.readthedocs.io (free, Apache-2.0)
- *NVIDIA Isaac Sim* and *Isaac Lab*, docs.isaacsim.omniverse.nvidia.com (free, open source)
- *Simscape / Simscape Multibody* physical-modeling documentation, MathWorks (free docs; toolboxes are paid add-ons)
- Josh Newans (*Articulated Robotics*) — Gazebo + ROS simulation tutorials, YouTube & articulatedrobotics.xyz (free)
**Study approach:** Treat the simulator as a test bench for the controllers you have already designed, not as a goal in itself. Pick ONE tool that matches your track and go deep rather than sampling all four: Simscape/Simscape Multibody if you live in MATLAB and want acausal physical-network models that connect cleanly to your existing loop designs; MuJoCo for fast contact dynamics and legged/manipulator work; Gazebo when you need ROS integration and realistic sensors; Isaac Sim only if you need GPU-scale or photoreal perception. First reproduce a plant you can model analytically (pendulum, cart-pole, DC-motor arm) so you can validate the sim against your equations of motion. Then close your real controller around the simulated plant, add hardware-in-the-loop style fidelity (actuator limits, sensor noise, sample-time delay, quantization), and deliberately study where the sim and the bench disagree — that mismatch is the whole point. Keep the model parameters in one config file so you can run parameter sweeps and Monte Carlo robustness tests cheaply. Skip the deep-RL/domain-randomization literature unless your track needs learned policies; for model-based control, the value is fast iteration, safety, and repeatable disturbance scenarios.
**Project:** Build a digital twin of a real (or buildable) mechatronic plant — e.g. an inverted pendulum on a cart, a 2-DOF robot arm, or a quadrotor — in your chosen simulator. Identify and calibrate model parameters against the physical system (or a high-fidelity reference), then deploy the SAME controller code (e.g. an LQR or cascaded PID) against both the twin and the real/reference plant. Inject actuator saturation, sensor noise, latency, and a parameter drift, run a Monte Carlo robustness sweep, and ship a report quantifying the sim-to-real gap (tracking error, settling time, stability margin) with the controller code, the model files, and reproduction instructions in a public repo.

### 🔴 PLC & industrial automation
**Prerequisites:** Digital control
**Tracks:** Industrial & process control
**Resources:**
- RealPars — *PLC Programming Tutorial for Beginners* / *PLC Programming from Scratch* series, YouTube (free)
- OpenPLC Project (Thiago Alves / Autonomy Logic) — open-source IEC 61131-3 Editor + Runtime (all five languages, incl. ST & SFC) for Raspberry Pi/Arduino/PC (free)
- OPC Foundation — *OPC UA Online Reference* (Part 1 Overview & Concepts, Part 4 Services) at reference.opcfoundation.org (free)
- PLCopen — *Function Blocks for Motion Control, Part 1* (v2.0) PDF, from plcopen.org/downloads (free)
- William Bolton — *Programmable Logic Controllers*, 6th ed., Newnes/Elsevier (~$60 paid)
**Study approach:** Treat this as applied engineering, not theory: you learn PLCs by writing and running code on a target. Start with RealPars' free tutorials to internalize the scan cycle, I/O addressing, and timers/counters, then immediately install the OpenPLC Editor and Runtime so you can build and execute IEC 61131-3 programs without buying hardware (a Raspberry Pi or Arduino makes it tangible). Use Bolton as your reference for the language standard and ladder/structured-text idioms; do not read it cover-to-cover. Once single-loop logic is comfortable, study the PLCopen motion function blocks (MC_Power, MC_MoveAbsolute, etc.) to understand state-machine-based axis control, and read OPC Foundation Part 1 plus the address-space model to grasp how the PLC exposes tags to SCADA. Spend the bulk of your time on a running project: connect a soft PLC to an open-source SCADA/HMI (over OPC-UA, or Modbus TCP which is OpenPLC's most battle-tested link) so you experience the full edge-to-supervision stack. Vendor-specific tooling (Siemens via free SCE materials, or Allen-Bradley) is worth a pass afterward for employability, but the standards-based skills transfer everywhere.
**Project:** Build a simulated process-control cell end to end: model a tank-level or batch-mixing process (e.g. a simple Python/ODE plant simulator), control it with a PLC program written in the OpenPLC Editor that runs PID level control plus interlocks and a startup/shutdown sequence in Structured Text and SFC, expose the process tags from the OpenPLC runtime (OPC-UA, or Modbus TCP as a robust fallback), and connect a free open-source SCADA/HMI — FUXA (MIT, fully free) is the cleanest choice; Ignition Maker Edition also works but is free for non-commercial/personal use only — as the supervisory layer with trends, setpoint entry, and alarms. Ship it as a repo with the IEC 61131-3 program files, the plant simulator, the tag map, and a short write-up plus screenshots/video of the loop holding setpoint and handling an alarm.

---

## PHASE 7: Domain & Systems

### 🔴 Motion & manipulator control
**Prerequisites:** Robot kinematics & dynamics, State-space control, Nonlinear control
**Tracks:** Robotics & motion control
**Resources:**
- Lynch & Park — *Modern Robotics: Mechanics, Planning, and Control*, Ch. 11 *Robot Control* (motion, force, and hybrid motion-force control), free preprint PDF at modernrobotics.org / hades.mech.northwestern.edu (free)
- Northwestern — *Modern Robotics, Course 4: Robot Motion Planning and Control*, Coursera, covers Ch. 11 motion control with joint-torque inputs; materials accessible via the no-certificate path (free trial / included-in-Coursera Plus)
- Spong, Hutchinson & Vidyasagar — *Robot Modeling and Control*, 2nd ed., Wiley 2020, the canonical text on inverse-dynamics and nonlinear manipulator control (~$140 paid)
- O. Khatib — *A Unified Approach for Motion and Force Control of Robot Manipulators: The Operational Space Formulation*, IEEE J. Robotics & Automation, vol. 3(1), 1987, free PDF at khatib.stanford.edu (free)
- Siciliano, Sciavicco, Villani & Oriolo — *Robotics: Modelling, Planning and Control*, Springer 2009, dynamics and motion-control chapters; softcover ed. (~$80 paid, hardcover ~$195)
**Study approach:** Start from the manipulator dynamics M(q)q̈ + C(q,q̇)q̇ + g(q) = τ you already built — control theory here is applied dynamics, not new math. Work Modern Robotics Ch. 11 first: it walks cleanly from PID joint control through feedforward to computed-torque/inverse-dynamics control, with feasible exercises and free video lectures. Implement each controller in simulation (a 2- or 3-DOF arm in Python/MATLAB or PyBullet) as you read — controllers only click once you watch tracking error decay and see what poor inertia/Coriolis cancellation does. Then read Spong Ch. 6-8 for the rigorous stability arguments (Lyapunov-based proof of computed-torque tracking, robust and adaptive variants) — this is where the depth lives. Finish with Khatib's operational-space paper to reframe everything in task space, the bridge to force control and redundant arms. Skip the kinematics/dynamics rederivations in Siciliano and Spong since those are prerequisites; use them as references for specific control proofs. Do not get lost in adaptive/robust control on the first pass — get computed-torque and operational-space solid first.
**Project:** Build a trajectory-tracking controller for a simulated robot arm and benchmark control laws head-to-head. In PyBullet (or MuJoCo/Drake) load a standard 6-7 DOF arm (e.g. Franka Panda or UR5), generate a smooth task-space trajectory (quintic/trapezoidal joint profiles plus a Cartesian circle/figure-eight), and implement three controllers from scratch on the same plant: (1) independent-joint PD with gravity compensation, (2) computed-torque/inverse-dynamics control, and (3) operational-space (task-space) control with a Jacobian-transpose end-effector force law. Use the simulator's true dynamics for feedforward but inject 20% mass/inertia mismatch to expose model error. Ship a repo with the controllers, plots of joint- and Cartesian-space tracking error and commanded torques for each method, and a short writeup explaining why computed torque decouples the axes and where operational-space control wins for end-effector tasks. Stretch: add hybrid motion/force control against a simulated contact surface.

### 🟡 Mobile & legged robots
**Prerequisites:** State-space control, Trajectory optimization & planning, Navigation & sensor fusion
**Tracks:** Robotics & motion control
**Resources:**
- Kevin Lynch & Frank Park — *Modern Robotics: Mechanics, Planning, and Control*, Ch. 13 Wheeled Mobile Robots (free preprint PDF at Northwestern) (free)
- *Modern Robotics, Course 6: Capstone Project, Mobile Manipulation* (Northwestern, Coursera) — odometry, reference trajectories, feedforward-plus-feedback control on the KUKA youBot (free to audit)
- Russ Tedrake — *Underactuated Robotics* (MIT 6.832), online text + video lectures: walking, balance, trajectory optimization and MPC (free)
- Di Carlo, Wensing, Katz, Bledt & Kim — *Dynamic Locomotion in the MIT Cheetah 3 Through Convex Model-Predictive Control*, IROS 2018 (free PDF, MIT DSpace) (free)
- Marco Hutter et al. — *Robot Dynamics* lecture notes, ETH Zurich Robotic Systems Lab, incl. the legged robotics chapter (free)
**Study approach:** Split the node in two: wheeled mobility first, then dynamic legged locomotion. Start with Modern Robotics Ch. 13 to get the kinematics straight — differential-drive, car-like (nonholonomic) and omnidirectional/mecanum bases, plus wheel odometry — then implement a feedback path-tracker (a pure-pursuit or feedforward-plus-feedback controller) so the math is grounded in code. The Coursera Course 6 capstone is the most efficient way to do this end to end since it hands you a concrete youBot task and grading. For legged systems, do not try to absorb the whole RL literature; stay model-based. Use Tedrake's Underactuated Robotics for the conceptual backbone (underactuation, balance, trajectory optimization, MPC) and then read the MIT Cheetah 3 convex-MPC paper closely as the canonical worked example: single-rigid-body model, ground-reaction-force optimization over a short horizon, gait scheduling as a contact sequence. Use the ETH Robot Dynamics legged chapter to fill in floating-base dynamics and contact constraints. Skip hardware until your controller is solid in simulation. Leverage prerequisites directly: trajectory optimization feeds the MPC formulation, and navigation/sensor fusion supplies the state estimate the tracker and balance controller consume.
**Project:** Build a convex-MPC locomotion controller for a quadruped in simulation (PyBullet/MuJoCo or the open-source MIT Cheetah / Quad-SDK stack). Implement the single-rigid-body dynamics model, a gait scheduler producing the contact sequence, and a QP that optimizes ground reaction forces over a short horizon to track a commanded body velocity and yaw rate; map forces to joint torques via the contact Jacobian (tau = J^T f). Demonstrate a stable trot tracking a velocity command, recovery from a lateral push (impulse disturbance), and traversal over a small step or uneven terrain. Ship it as a repo with the QP formulation documented, a tuning write-up, and plots of commanded-vs-actual body trajectory and foot contact timing. Stretch goal: add a wheeled-base path-tracking demo (differential-drive pure-pursuit) so the project covers both branches of the node.

### 🔴 Flight & spacecraft control
**Prerequisites:** State-space control, Nonlinear control, Nonlinear estimation (EKF/UKF)
**Tracks:** Aerospace GNC
**Resources:**
- Beard & McLain — *Small Unmanned Aircraft: Theory and Practice* (Princeton, 2012; published edition ~$99 paid); free MATLAB/Simulink + Python template code, supplements, lecture slides, and a work-in-progress second-edition draft PDF via the [byu-magicc/mavsim_public](https://github.com/byu-magicc/mavsim_public) repo (free)
- Markley & Crassidis — *Fundamentals of Spacecraft Attitude Determination and Control*, Springer Space Technology Library 33, 2014 (~$90 paid, hardcover); companion MATLAB code free for download (hosted via the authors' University at Buffalo site / MathWorks book page)
- Stevens, Lewis & Johnson — *Aircraft Control and Simulation: Dynamics, Controls Design, and Autonomous Systems*, 3rd ed., Wiley, 2015 (~$150 list / used copies from ~$75, paid)
- PX4 [Controller Diagrams](https://docs.px4.io/main/en/flight_stack/controller_diagrams) and ArduPilot [Dev docs](https://ardupilot.org/dev/) — production cascaded attitude/rate loops, TECS, and control allocation (free)
- Christopher Lum (Univ. of Washington, Aeronautics & Astronautics) — *Flight Mechanics* / *Flight Dynamics and Control* lecture series, YouTube (free)
**Study approach:** Treat this as two coupled problems built on your state-space and nonlinear estimation foundations. Start with the fixed-wing aircraft using Beard & McLain: derive the 6-DOF rigid-body equations, linearize about trim into decoupled longitudinal and lateral-directional models, then design the classic cascaded successive-loop-closure autopilot (inner rate/attitude loops, outer airspeed/altitude/course loops). Do not re-derive everything from scratch; lean on the free mavsim code to validate your math against a working simulator. For spacecraft, switch to Markley & Crassidis and master attitude representations (quaternions, MRPs), kinematics/dynamics, and quaternion-feedback attitude control, since gravity-free rotational dynamics behave very differently from atmospheric flight. Tie estimation back in by feeding an EKF/UKF attitude estimate into the controller. Skip exhaustive aerodynamic modeling and stress-test detail; the goal is closing stable, well-tuned loops. Finish by reading the PX4 and ArduPilot controller diagrams to see how the textbook cascade maps onto real flight stacks, including control allocation across redundant control surfaces or thrusters.
**Project:** Build a quaternion-based spacecraft attitude control simulator in Python (or MATLAB): model rigid-body rotational dynamics with a realistic inertia tensor and reaction-wheel actuators, implement a quaternion-feedback attitude controller plus a control-allocation step that maps the desired torque onto 3-4 redundant wheels (handling saturation and momentum management), and drive attitude estimates from a UKF fed by simulated star-tracker and gyro measurements. Command a sequence of large-angle slew maneuvers and a target-pointing hold, then plot pointing error, body rates, wheel speeds/torques, and momentum buildup to demonstrate stability and actuator limits. Ship it as a documented repo with reproducible plots and a short report quantifying settling time and steady-state pointing accuracy. Stretch goal: port the same controller to a fixed-wing successive-loop-closure autopilot in the mavsim simulator and compare loop-tuning approaches across the two domains.

### 🔴 Autonomous vehicle control
**Prerequisites:** State-space control, Model predictive control, Navigation & sensor fusion
**Tracks:** Autonomous vehicles
**Resources:**
- Rajesh Rajamani — *Vehicle Dynamics and Control*, 2nd ed., Springer 2011. The canonical text for lateral/longitudinal vehicle dynamics and tracking control (~$280 new, ~$80 used; often free via university/institutional Springer access)
- Coursera: **Self-Driving Cars Specialization** — University of Toronto (Waslander & Kelly). Course 1, *Introduction to Self-Driving Cars*, covers the kinematic bicycle model, longitudinal/lateral dynamics, PID, pure pursuit, Stanley and MPC with a CARLA final project (🆓 audit free; paid for certificate)
- Autoware Foundation — *Autoware Documentation* (ROS 2 AV stack). Read the planning and control module docs (Pure Pursuit and MPC trajectory followers) to see a production tracking/actuation pipeline (🆓)
- MathWorks — *Automated Driving Toolbox* docs and the *Vehicle Path Tracking Using Model Predictive Control* video plus the open-source `mathworks/vehicle-model-predictive-control` example (🆓 docs/video; running the example needs paid toolboxes — MPC Toolbox, Automated Driving Toolbox, Vehicle Dynamics Blockset)
**Study approach:** Treat this as control on top of, not instead of, your earlier MPC and estimation work — the new content is the vehicle model and the tracking laws. Start with the kinematic bicycle model and the geometry behind pure pursuit and Stanley; implement both first because they are cheap, intuitive baselines and expose the trade-offs (lookahead tuning, cross-track vs heading error) that motivate MPC. Then read Rajamani Chapters 2-4 for the dynamic bicycle model, tire slip and lateral control, so you understand when the kinematic assumption breaks at speed. Move to MPC for path tracking only once you can articulate why feedback laws struggle with constraints and preview; use the MATLAB MPC example as a reference implementation but re-derive the cost and constraints yourself. The UToronto specialization is the spine — audit Course 1 and work its programming assignments in CARLA rather than just watching. Skip the perception-heavy detours here; this node is the control link between a planned trajectory and the actuators, so keep planning fixed and focus on tracking accuracy, stability and actuator limits. Finish by reading one real stack (Autoware's control module) to see how the textbook controllers are packaged with safety limits and rate filters in production.
**Project:** Build a closed-loop path-tracking controller for a simulated vehicle in CARLA (the fully-free route; the MATLAB/Simulink Automated Driving Toolbox scene is an alternative but needs paid toolboxes). Implement three controllers against the same reference trajectory — pure pursuit, Stanley, and a linear MPC on the kinematic bicycle model with steering/accel constraints — plus a longitudinal PI speed controller. Drive a fixed test route (a track with tight curves, a lane change, and a stop) and log cross-track error, heading error, control effort and constraint violations for each controller. Ship a public repo with the simulation, a reproducible run script, and a short report comparing the three across speeds, showing where kinematic tracking degrades and how MPC handles the curvature/actuator limits.

### 🔴 Process & industrial control
**Prerequisites:** Classical control, System identification
**Tracks:** Industrial & process control
**Resources:**
- APMonitor / BYU — *Process Dynamics and Control in Python* (John Hedengren), apmonitor.com/pdc — free hands-on course with TCLab hardware, covers FOPDT, PID, cascade, feedforward (🆓)
- Seborg, Edgar, Mellichamp & Doyle — *Process Dynamics and Control*, 4th ed., Wiley (ISBN 9781119285915) — the standard process-control text (💰 ~$150)
- Åström & Hägglund — *Advanced PID Control*, ISA, 2006 (ISBN 9781556179426) — auto-tuning, gain scheduling, anti-windup, dead-time handling (💰 ~$100, often only available used)
- Doug Cooper — *Practical Process Control*, controlguru.com — applied PID/cascade/feedforward/ratio article series, free to read (🆓)
- Tony Kuphaldt — *Lessons In Industrial Instrumentation*, control.com/textbook — CC-BY 4.0, instrumentation + control strategies (🆓)
**Study approach:** Treat this as applied, not theoretical: the goal is to tune and structure loops that hold setpoint against real disturbances. Work through the APMonitor course end-to-end while running the TCLab (or its simulator) — it forces you to identify FOPDT models from step tests and tune PID with IMC/lambda rather than guessing. Use Seborg as the reference text to look up cascade, feedforward, and ratio structures when the course introduces them, and read the controlguru articles for the practitioner's framing (what actually breaks: dead time, valve nonlinearity, integral windup, interacting loops). Save Åström & Hägglund's *Advanced PID Control* for depth on auto-tuning, anti-windup, and dead-time compensation once basic loops feel routine. Skip deriving Laplace transforms by hand — you need the transfer-function intuition, not the algebra. Only touch APC/MPC conceptually here; full MPC belongs to a later node.
**Project:** Build a cascade + feedforward temperature controller on the open-source TCLab Arduino kit (or its Python simulator if no hardware). Do a proper step test to identify a FOPDT model, tune a PID loop with the IMC/lambda method, then add a cascade inner loop and a feedforward term that rejects a measured disturbance (e.g. the second heater). Ship a repo with: the identification notebook, tuning calculations, and before/after plots quantifying improvement in IAE/settling time and disturbance rejection versus a single PID loop. Include anti-windup and document the tuning trade-offs.

### 🟡 Guidance, navigation & control
**Prerequisites:** Navigation & sensor fusion, Model predictive control
**Tracks:** Aerospace GNC · Autonomous vehicles · Robotics & motion control · Estimation & navigation
**Resources:**
- Beard & McLain — *Small Unmanned Aircraft: Theory and Practice*; the work-in-progress draft PDF and the `byu-magicc/mavsim_public` simulation repo (MATLAB + Python) are free via uavbook.byu.edu (print book ~$100) (free)
- University of Pennsylvania — *Robotics: Aerial Robotics* (Vijay Kumar), Coursera; quadrotor dynamics, PD/nonlinear control and trajectory planning (free to audit)
- MathWorks — *Drone Simulation and Control* and *Autonomous Navigation* (Brian Douglas) video/Tech Talk series, YouTube/MathWorks (free)
- PX4 *Controller Diagrams* (docs.px4.io) and ArduPilot Developer docs (ardupilot.org/dev) — real cascaded GNC architectures for fixed-wing, multicopter and VTOL (free)
- Markley & Crassidis — *Fundamentals of Spacecraft Attitude Determination and Control*, Springer Space Technology Library 33; softcover ~$90, hardcover/eBook higher (~$90, paid)
**Study approach:** Treat GNC as the place where the earlier estimation and control nodes are wired into one closed loop, not as new theory. Start concrete and airborne: follow the UPenn Aerial Robotics course and the MATLAB drone series to get a working quadrotor with a nonlinear/differential-flatness controller and a trajectory generator, then read the relevant chapters of Beard & McLain (guidance, path following, autopilot, state estimation) while building on their mavsim repo. Once the three layers click, study a production stack: read the PX4 controller diagrams and ArduPilot architecture to see how guidance setpoints, the EKF navigation solution, the cascaded attitude/rate loops, and control allocation actually connect on real hardware. Only branch into the spacecraft GNC of Markley & Crassidis (attitude determination, quaternion kinematics, reaction-wheel/thruster allocation) if your target is aerospace; for ground autonomous vehicles, reuse the same guidance/navigation/control decomposition with a path-tracking controller instead. Skip deriving every aerodynamic and orbital-mechanics result up front — pull the math in as your simulation forces you to.
**Project:** Build a full GNC stack in simulation for a quadrotor (or fixed-wing UAV) and demonstrate an autonomous waypoint mission end to end. Guidance: generate a smooth minimum-snap or Dubins-path trajectory through user-set waypoints. Navigation: fuse IMU + GPS (and optionally a magnetometer/barometer) in an EKF to estimate full state, run with realistic sensor noise and a GPS dropout. Control: cascaded attitude/rate inner loop plus a position/velocity outer loop with explicit control allocation to motors. Implement on the Beard & McLain `mavsim_public` framework or in PX4 SITL/Gazebo, and ship a repo with the mission flown, tracking-error and estimation-error plots, and a short write-up of how the guidance, navigation and control layers interact (including behaviour under the sensor dropout).

### 🔴 Safety-critical control
**Prerequisites:** Embedded & real-time control, Nonlinear control
**Tracks:** Industrial & process control · Autonomous vehicles · Aerospace GNC
**Resources:**
- Ames, Coogan, Egerstedt, Notomista, Sreenath, Tabuada — *Control Barrier Functions: Theory and Applications*, ECC 2019 (arXiv:1903.11199) (free)
- Aaron Ames — *Control Barrier Functions for Safe Robot Autonomy*, ICRA 2022 Safe & Reliable Robot Autonomy workshop talk, YouTube (free)
- Chris Hobbs — *Embedded Software Development for Safety-Critical Systems*, 2nd Edition, CRC Press; covers IEC 61508 / ISO 26262 / IEC 62304 (~$65 paperback)
- Blanke, Kinnaert, Lunze, Staroswiecki — *Diagnosis and Fault-Tolerant Control*, 3rd Edition, Springer (~$90)
- Rolf Isermann — *Fault-Diagnosis Systems: An Introduction from Fault Detection to Fault Tolerance*, Springer (~$80)
**Study approach:** Treat this as two complementary layers and do not try to memorize the standards. Start with the runtime-safety mindset: read the Ames et al. CBF tutorial and watch the ICRA talk, then implement a control barrier function as a quadratic-program safety filter that wraps an existing nominal controller from an earlier node, so you feel how a CBF forgives a misbehaving controller while keeping the state inside a safe set. In parallel, build intuition for model-based fault handling from Isermann (residual generation, fault detection and isolation) and Blanke (reconfiguration and fault-tolerant control); focus on parity equations, observer-based residuals, and the threshold/decision logic rather than every estimator variant. Use Hobbs only as a map of the functional-safety lifecycle: understand the V-model, what SIL and ASIL mean, what a hazard analysis and risk assessment produces, and why DO-178C / ISO 26262 demand traceability and tooling — read it for vocabulary and process, not as a textbook to grind. Skip formal certification artifacts unless your project needs them; the goal here is to design controllers that detect, isolate, and survive faults and that come with an enforceable safety guarantee.
**Project:** Build a fault-tolerant, safety-filtered controller in simulation for one of: a process plant (e.g. a coupled two/three-tank level system), an autonomous-vehicle lane-keeping/adaptive-cruise scenario, or a spacecraft/quadrotor attitude loop. Layer three things on a nominal controller from a prior node: (1) a control-barrier-function QP safety filter that provably keeps the state inside a safe set (tank overflow limit, minimum following distance, attitude/obstacle envelope); (2) a model-based fault detection and isolation scheme using observer or parity-equation residuals with tuned thresholds to flag a sensor bias or actuator loss-of-effectiveness; (3) a fault-tolerant reconfiguration that switches control allocation or gains once a fault is isolated. Inject faults at scripted times and ship plots showing the safe set is never violated, detection/isolation latency, and graceful degradation versus the nominal controller. Document a one-page hazard analysis mapping each fault to a SIL/ASIL-style severity and the mitigation that handles it.

### 🟡 Control systems engineering
**Prerequisites:** Embedded & real-time control, Model predictive control
**Unlocks:** Technical leadership
**Tracks:** All specializations
**Resources:**
- MathWorks — *Validation and Verification for System Development (V-model)* + Simulink Test / Design Verifier docs (free)
- MATLAB Tech Talks (MathWorks experts, incl. Brian Douglas) — model-based design & dynamic-systems videos, YouTube (free)
- INCOSE — *Systems Engineering Handbook*, 5th ed. (Walden et al.), Wiley 2023 (~$90, paid)
- Coursera (Siemens) — *Introduction to Model-Based Systems Engineering* (audit/free)
- SysML.org — tool-independent SysML / MBSE tutorials (free)
**Study approach:** Treat this as the integration layer that ties together everything you already know about embedded and real-time control and MPC, not as new control theory. Start by internalizing the V-model: trace one requirement down the left arm (system spec, architecture, detailed design, implementation) and back up the right arm (unit test, integration test, V&V) so you can articulate where every artifact belongs. Skip the heavy MBSE certification material and the full INCOSE handbook on a first pass; read the handbook only for the requirements-engineering and verification chapters, and use it as a reference. Spend most of your time hands-on in Simulink: build a plant model and controller, write requirements as Simulink Test cases, and run SIL/PIL/HIL conceptually so you understand traceability from requirement to test. Learn just enough SysML to draw a clear control architecture (block diagrams, requirement allocation); do not chase tool mastery. The goal is fluency in process and architecture, so you can defend why a controller is structured a certain way and prove it meets its requirements.
**Project:** Pick one plant (e.g., a DC-motor position servo or an inverted pendulum) and ship a complete model-based design package that walks the full V-model. Deliver: (1) a short requirements document with measurable, testable requirements (settling time, overshoot, steady-state error, control-effort limits); (2) a Simulink plant + controller model with a clearly documented control architecture (inner current/velocity loop, outer position loop, supervisory mode logic); (3) a Simulink Test suite that links each requirement to an automated test and produces a pass/fail traceability report; (4) a verification step using Simulink Design Verifier or equivalent property checks (e.g., no integer overflow, saturation handling), plus model-coverage results; and (5) a one-page architecture diagram (SysML-style block/requirement allocation). Optionally close the loop on hardware (Arduino/STM32 motor) for a HIL/on-target demo. Publish the model, tests, and traceability report in a repo so a reviewer can run the V&V suite and see every requirement verified.

---

## PHASE 8: Frontier & Leadership

### 🟢 Learning & data-driven control
**Prerequisites:** Model predictive control, Nonlinear control
**Tracks:** Robotics & motion control · Autonomous vehicles · Aerospace GNC
**Resources:**
- Russ Tedrake — *Underactuated Robotics* (MIT 6.832), free online text + lecture videos, underactuated.csail.mit.edu (🆓). Bridges trajectory optimization, RL, and model-based control.
- Berkeley **CS285 Deep Reinforcement Learning** — Sergey Levine, lecture videos + notes, rail.eecs.berkeley.edu/deeprlcourse (🆓 YouTube). Covers model-based RL and imitation learning.
- Steve Brunton (Eigensteve) — *Data-Driven Control with Machine Learning* & *Data-Driven Dynamical Systems with Machine Learning*, YouTube (🆓). Canonical Koopman / SINDy / DMDc lectures.
- Coulson, Lygeros, Dörfler — *Data-Enabled Predictive Control: In the Shallows of the DeePC*, arXiv:1811.05890 (🆓). The foundational DeePC paper.
- Brunton & Kutz — *Data-Driven Science and Engineering*, 2nd ed., Cambridge (💰 ~$65). Reference text for the Koopman/SINDy chapters; code free at databookuw.com.
**Study approach:** Treat this as a frontier elective that sits on top of MPC and nonlinear control, not a replacement for them. First get the conceptual map: skim Brunton's "Data-Driven Control" YouTube series to see the spectrum from system ID to Koopman/SINDy to RL, so you know which tool fits which problem. Then go deep in two directions. For the learning-from-data side, work the relevant CS285 lectures on model-based RL and imitation, but resist running full deep-RL pipelines — your edge as a controls engineer is combining a learned model or residual with a model-based controller (RL+MPC, learned dynamics inside an MPC loop), so prioritize those. For the data-driven-models side, implement SINDy and DMD with control on a system you already understand analytically, and confirm the identified model matches first principles. Read the DeePC paper closely and note its equivalence to MPC for LTI systems — that anchors the whole "data-driven == implicit model" intuition. Throughout, keep safety and constraints central: a learned component is only useful in this discipline if you can still reason about stability and constraint satisfaction. Use Tedrake's notes to ground everything in real underactuated dynamics, and treat L4DC proceedings as the place to track current safe-learning and learning-MPC results rather than as primary study material.
**Project:** Build a learning-augmented MPC controller for an underactuated system in simulation and benchmark it against a pure model-based baseline. Concretely: take a cartpole, quadrotor, or a simplified vehicle/spacecraft model with unmodeled dynamics (e.g., friction, drag, or a payload disturbance the nominal model omits). (1) Implement a nominal nonlinear MPC. (2) Identify the true dynamics from collected trajectories using SINDy or DMD-with-control (PySINDy / pykoopman), and/or learn a residual-dynamics model. (3) Plug the data-driven model into the MPC and/or build a DeePC controller directly from the I/O data. (4) Quantitatively compare nominal-MPC vs. learning-augmented MPC vs. DeePC on tracking error, constraint violations, and robustness to disturbances, and verify the learned controller still respects state/input constraints. Ship it as a reproducible repo (Drake or Python/CasADi) with plots, a short write-up of the stability/safety argument, and a recorded sim rollout — targeting a robotics, autonomous-vehicle, or aerospace-GNC scenario.

### 🟡 Technical leadership
**Prerequisites:** Control systems engineering
**Tracks:** All specializations
**Resources:**
- Will Larson — *Staff Engineer: Leadership Beyond the Management Track*, free web edition at staffeng.com (free) / DRM-free print & ebook (~$25)
- Tanya Reilly — *The Staff Engineer's Path*, O'Reilly, 2022 (~$40, approx print price)
- Camille Fournier — *The Manager's Path*, O'Reilly, 2017 (~$40; paperback list price $39.99)
- IEEE Control Systems Society — get involved via NextCom (early-career) or the Women in Control committee; open to CSS members (requires paid IEEE + CSS membership)
- Gunter Stein — *Respect the Unstable* (1989 Bode Lecture), IEEE Control Systems Magazine, Aug 2003 — a model for turning a control result into a talk and article; freely available as a PDF via university course-page mirrors (the official IEEE Xplore copy is paywalled) (free)
**Study approach:** Treat this as a slow, applied track layered on top of real control work, not a course to grind. Read Larson's *Staff Engineer* (free web edition at staffeng.com) first for the lay of the land, then Reilly's *The Staff Engineer's Path* for the day-to-day of leading without authority — scoping, design reviews, and setting the technical-quality bar; skim Fournier only for the tech-lead and mentoring chapters since the rest is people-management you don't need yet. Skip the corporate-ladder anecdotes and instead practice the durable skills: write a clear design/trade-off doc for a controller you've actually built, run a design review on someone else's loop, and mentor one junior on tuning or stability margins. For communication, do Google's free Technical Writing One (developers.google.com/tech-writing), then study *Respect the Unstable* as a worked example of explaining a controls result to non-experts, and give one talk (meetup, internal brown-bag, or a local IEEE CSS chapter). Get involved in IEEE CSS through NextCom (early-career) or a committee such as Women in Control to build a track record outside your own org — note this needs paid IEEE + CSS membership.
**Project:** Lead and document a small open control project end to end as the "tech lead": pick a benchmark plant (e.g., inverted pendulum / cart-pole or a quadrotor attitude loop in simulation, hardware optional), then (1) write an architecture decision record comparing two controller approaches — say PID vs. LQR/MPC — with stated requirements, trade-offs, and a chosen design; (2) implement the chosen controller with a clean, reviewable repo, tests, and a tuning/commissioning guide; (3) run a recorded design review incorporating feedback from at least one peer; and (4) produce a 15-minute conference-style talk plus a short expository write-up (in the spirit of *Respect the Unstable*) that explains the stability margins and design choices to non-specialists. Deliverable: the public repo, the ADR, and the recorded talk + article.

### 🟢 Controls research & frontier
**Prerequisites:** Nonlinear control, Optimal control (LQR/LQG)
**Tracks:** All specializations
**Resources:**
- IEEE Conference on Decision and Control (CDC) and American Control Conference (ACC) proceedings on IEEE Xplore — the field's flagship venues; abstracts free, many author preprints free (free)
- *IEEE Transactions on Automatic Control* and *Automatica* — the two top control-theory journals; abstracts and tables of contents free (free)
- arXiv **eess.SY** (Systems and Control) — full-text preprints of essentially all current frontier control research (free)
- Russ Tedrake — *Underactuated Robotics* (MIT 6.832), free online textbook plus YouTube lectures on optimal/nonlinear control, trajectory optimization and LQR, with Drake code (free)
- Stephen Boyd — Stanford **EE263** *Introduction to Linear Dynamical Systems* (full lecture videos free via Stanford Engineering Everywhere) and **EE363** *Linear Dynamical Systems* (free lecture notes/slides on LQR, LQG/stochastic control, Kalman filtering and estimation) (free)
**Study approach:** Treat this as a transition from coursework to research, not another course to finish. First, pick ONE narrow thread that matters for your target track (e.g. nonlinear MPC, distributionally-robust control, contraction-based design, or robust GNC) and read 8-12 recent papers in it from arXiv eess.SY plus the last two CDC/ACC and recent IEEE TAC / Automatica issues; skim broadly, then read 3-4 deeply with pen and paper, re-deriving the key lemmas. Use Tedrake's Underactuated Robotics and Boyd's EE263 videos / EE363 notes only as reference scaffolding to fill gaps in optimal/nonlinear/stochastic control as you hit them, rather than front-to-back. The single most valuable habit is reproducing results: take one paper with a clean simulation and rebuild its plots from the equations — this exposes unstated assumptions and is the fastest path to a publishable increment. Skip surveying the entire literature; depth in one sub-area beats breadth here. Maintain a running annotated bibliography and an "open questions" list, because your first contribution will almost always be a small extension, weakened assumption, or better benchmark on something you reproduced.
**Project:** Pick a recent (last 2-3 years) CDC/ACC/Automatica or arXiv eess.SY paper in your track, reproduce its core result in simulation from the equations (Python/Drake or MATLAB), then extend it with one genuine increment — relax an assumption, add a comparison baseline, or stress-test robustness/noise — and write it up as a 6-8 page IEEE-format short paper with a public, reproducible code repo (seeded, one-command run, generated figures). Deliverable: the repo plus the PDF, formatted and scoped as a submittable CDC/ACC workshop paper or IEEE Control Systems Letters (L-CSS) note (L-CSS offers a joint CDC/ACC submission option).

---

## Parallel Track: English Proficiency ⭐ HIGHEST ROI

**Priority:** 🔴 Critical (highest-ROI non-technical skill). **Target:** B2 within 12 months, C1 within 24.

B2+ English unlocks remote roles for US/EU/aerospace employers (often 3–5× regional salaries), international conference talks (IEEE CDC/ACC, ICRA, IROS), and the standards bodies where control engineering is written. Resources: italki tutors (💰 ~$10-15/hr), one technical blog post per month in English (🆓), BBC Learning English (🆓), and a Cambridge B2 First / IELTS credential when ready (💰 ~$200-250). Treat it as a daily habit, not a class.

---

## Certifications

These are credential boosters, not substitutes for shipped projects. Pick the ones that match your track.

### Tier 1 — Tooling (low cost, broad signal across all tracks)
1. **MathWorks Certified MATLAB Associate** — 💰 ~$45 (online, Webassessor). Low effort, decent signal for any controls role; MATLAB/Simulink is the field's lingua franca.
2. **MathWorks Certified MATLAB Professional** — 💰 ~$850. Expensive; only worth it if an employer values it or reimburses. There is also a **Simulink**-focused certification track via MathWorks.

### Tier 2 — Industrial & process-control track
3. **ISA Certified Automation Professional (CAP)** — 💰 ~$330 (ISA member) / ~$445 (non-member). Requires a technical degree + ~5 years automation experience. Strong signal for PLC/SCADA/APC roles.
4. **ISA Certified Control Systems Technician (CCST)** — three levels (I/II/III) by experience. Technician-oriented; useful for plant/instrumentation roles.

### Tier 3 — Safety-critical control
5. **FS Engineer (TÜV Rheinland)** — IEC 61508 / 61511 functional safety. 💰 training + exam ~$2,000-3,000 (varies by provider); requires ~3 years experience + engineering degree. For SIL/process-safety work.
6. **TÜV SÜD Functional Safety Certification Program (FSCP) — ISO 26262** — automotive functional safety, three levels (Engineer / Professional / Expert). For the autonomous-vehicle and ADAS safety path.

### Tier 4 — Formal engineering licensure (US, optional but high-trust)
7. **NCEES FE (Fundamentals of Engineering)** then **PE — Control Systems Engineering (CSE)** — the US professional-engineer license; PE requires ~4 years post-degree experience. High signal for industrial, aerospace and consulting roles where a P.E. stamp matters (note: not offered in AK, HI, RI).

**Note on ROS / GNC:** there is no single widely recognized vendor certification for ROS 2 or GNC; competence there is demonstrated by projects and open-source contributions, not a certificate.

---

## Critical Path (Summary)

In priority order — the courses and projects that matter most:

1. 🔴 **Signals & systems → Classical control** (P1) — transforms, LTI/transfer functions, then PID, root locus, Bode/Nyquist and loop shaping. The bedrock; nothing later makes sense without it.
2. 🔴 **State-space control** (P2) — controllability/observability, pole placement, Luenberger observers, the separation principle. The MIMO language the whole modern field is written in.
3. 🔴 **Kalman filtering → nonlinear estimation** (P3) — the predict/update recursion and Q/R tuning, then EKF/UKF. Estimation is half of any real autonomous system.
4. 🔴 **Optimal control (LQR/LQG)** (P4) — the bridge from state-space to optimization-based control; the prerequisite mindset for MPC.
5. 🔴 **Model predictive control** (P4) — the keystone node. Receding-horizon control under constraints with OSQP/acados/CasADi is the single most marketable modern control skill across every track.
6. 🔴 **Embedded & real-time control + ROS 2 / ros2_control or PLC** (P6) — putting a verified controller on real hardware with deterministic timing. The step that separates theory from a shippable system.
7. 🔴 **One domain capstone** (P7) — Flight/spacecraft control, Autonomous vehicle control, Process & industrial control, or Motion & manipulator control. Your specialization proof, shipped as a project.
8. 🔴 **Technical English (parallel)** — the highest-ROI non-technical investment for reading research, writing up projects, and accessing international controls/GNC roles.

Everything else is supporting material.

---

## Books — Essential Reading

In priority order:

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **Feedback Systems: An Introduction for Scientists and Engineers** — Åström & Murray | P1 | 🔴 | 🆓 free (Princeton/fbswiki) | The free spine for classical + state-space feedback. Read first; legally free online. |
| 2 | **Control Systems Engineering** — Norman S. Nise | P1 | 🔴 | 💰 ~$80-150 | The standard undergraduate text: PID, root locus, Bode/Nyquist, state-space. Clear worked examples. |
| 3 | **Feedback Control of Dynamic Systems** — Franklin, Powell & Emami-Naeini | P1 | 🟡 | 💰 ~$150+ | Design-first classic; deeper digital-control treatment. Alternative/companion to Nise. |
| 4 | **Modern Robotics: Mechanics, Planning, and Control** — Lynch & Park | P2 | 🔴 | 🆓 free PDF (Northwestern) | Screw theory, kinematics, manipulator dynamics. Free PDF + Coursera + videos. Robotics-track core. |
| 5 | **Robotics: Modelling, Planning and Control** — Siciliano, Sciavicco, Villani & Oriolo | P2 | 🟡 | 💰 ~$80 | The comprehensive robotics reference: modeling, motion control, force control. |
| 6 | **Optimal State Estimation: Kalman, H∞, and Nonlinear Approaches** — Dan Simon | P3 | 🔴 | 💰 ~$120-130 | The clearest single book on Kalman, EKF/UKF, particle filters. Estimation-track spine. |
| 7 | **Probabilistic Robotics** — Thrun, Burgard & Fox | P3 | 🟡 | 💰 ~$55-65 | Canonical for SLAM, localization and probabilistic estimation. Read for the navigation/SLAM nodes. |
| 8 | **Optimal Control Theory: An Introduction** — Donald E. Kirk | P4 | 🔴 | 💰 ~$35 (Dover) | Cheap, rigorous intro to optimal control, calculus of variations and LQR. Pre-MPC. |
| 9 | **Predictive Control for Linear and Hybrid Systems** — Borrelli, Bemporad & Morari | P4 | 🔴 | 🆓 free draft (Bemporad) / 💰 ~$70 print | The MPC reference: constrained, explicit and hybrid MPC. Free author draft online. |
| 10 | **Model Predictive Control: Theory, Computation, and Design** — Rawlings, Mayne & Diehl | P4 | 🟡 | 🆓 free PDF (UCSB) / 💰 ~$35 print | Stability, feasibility and MHE-side theory. Free 2nd-edition PDF. |
| 11 | **Nonlinear Systems** — Hassan K. Khalil | P5 | 🔴 | 💰 ~$80 | The graduate standard for Lyapunov stability, feedback linearization, sliding mode. P5 spine. |
| 12 | **Small Unmanned Aircraft: Theory and Practice** — Beard & McLain | P7 | 🟡 | 💰 ~$100 (free sim code) | End-to-end UAV GNC with autopilots and estimation. Aerospace-track capstone reference. |

---

*Compiled: 2026. Reassess and update every 6 months.*
*Sources: IEEE Control Systems Society, university OpenCourseWare (MIT/Stanford/ETH), MathWorks, NVIDIA, ROS, and verified textbooks & course platforms.*
