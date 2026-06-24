import { useState, useCallback, useMemo } from "react";

// ─── Phases ─────────────────────────────────────────────────────────────
const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Math & programming", color: "#94a3b8" },
  { id: "P1", label: "Phase 1", subtitle: "Signals & classical control", color: "#22d3ee" },
  { id: "P2", label: "Phase 2", subtitle: "Modeling & state-space", color: "#06b6d4" },
  { id: "P3", label: "Phase 3", subtitle: "Estimation & filtering", color: "#0ea5e9" },
  { id: "P4", label: "Phase 4", subtitle: "Optimal & predictive control", color: "#6366f1" },
  { id: "P5", label: "Phase 5", subtitle: "Nonlinear & robust control", color: "#8b5cf6" },
  { id: "P6", label: "Phase 6", subtitle: "Real-time & integration", color: "#14b8a6" },
  { id: "P7", label: "Phase 7", subtitle: "Domain & systems", color: "#f59e0b" },
  { id: "P8", label: "Phase 8", subtitle: "Frontier & leadership", color: "#fb923c" },
];

// ─── Priority (absolute importance) ────────────────────────────────────
const PRIORITY = {
  critical:  { bg: "#fef2f2", border: "#ef4444", text: "#991b1b", label: "Critical"  },
  desirable: { bg: "#fefce8", border: "#eab308", text: "#854d0e", label: "Desirable" },
  frontier:  { bg: "#f0fdf4", border: "#22c55e", text: "#166534", label: "Frontier"  },
};

// ─── Specialization tracks ─────────────────────────────────────────────
//  Each course's `tracks` lists which specializations require it.
//  Spine courses use ["all"] and apply to every track.
const TRACKS = {
  industrial:{ color: "#d97706", label: "Industrial & process control", short: "Industrial" },
  robotics:  { color: "#059669", label: "Robotics & motion control", short: "Robotics" },
  aerospace: { color: "#2563eb", label: "Aerospace GNC", short: "Aerospace" },
  automotive:{ color: "#dc2626", label: "Autonomous vehicles", short: "Vehicles" },
  estimation:{ color: "#7c3aed", label: "Estimation & navigation", short: "Estimation" },
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
  // ─── P0 ─ Math & programming ─
  { id: "LINUX", phase: "P0", row: 0, label: "Linux & CLI",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Terminal, bash, file systems, permissions, SSH. The base layer for embedded targets, simulators and robotics middleware.",
    res:  "Linux Journey (free) | MIT Missing Semester (free) | Coursera: Unix Workbench \u2014 JHU (audit)" },
  { id: "PY", phase: "P0", row: 1, label: "Python",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Core scripting for control: NumPy, SciPy, Matplotlib and the python-control / CasADi ecosystem.",
    res:  "Python for Everybody \u2014 UMich (audit) | Automate the Boring Stuff (free) | python-control docs (free)" },
  { id: "CPP", phase: "P0", row: 2, label: "C++",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Pointers, memory, RAII, STL and real-time patterns. The language of embedded controllers, ROS2 and autopilots.",
    res:  "learncpp.com (free) | A Tour of C++ \u2014 Stroustrup (~$40) | Coursera: C++ for C Programmers \u2014 UCSC (audit)" },
  { id: "MATLAB", phase: "P0", row: 3, label: "MATLAB & Simulink",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "MATLAB, Simulink, Stateflow and the Control System Toolbox: the industry-standard environment for modeling dynamic systems, designing and tuning controllers, simulating closed loops, and (via Simulink/Embedded Coder) generating embedded code.",
    res:  "MathWorks MATLAB & Simulink Onramps (free) | Control Design Onramp with Simulink (free) | Stateflow Onramp (free) | MATLAB Tech Talks \u2014 Controls (free YT) | Coursera: Intro to Programming with MATLAB \u2014 Vanderbilt (audit)" },
  { id: "LA", phase: "P0", row: 4, label: "Linear algebra",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Vectors, matrices, eigenvalues, SVD. The backbone of state-space control, estimation and optimization.",
    res:  "3Blue1Brown: Essence of Linear Algebra (free YT) | MIT 18.06 \u2014 Strang (free) | Khan Academy (free)" },
  { id: "CALC", phase: "P0", row: 5, label: "Calculus",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Derivatives, integrals, chain rule, gradients. Prerequisite for dynamics, optimization and every control law.",
    res:  "3Blue1Brown: Essence of Calculus (free YT) | Khan Academy (free) | MIT 18.01 (free)" },
  { id: "ODE", phase: "P0", row: 6, label: "Differential equations",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["CALC"],
    desc: "First and second-order ODEs, Laplace transforms, and linear systems of ODEs (eigenvalue/matrix-exponential solutions). The math describing how dynamic systems evolve in time.",
    res:  "MIT 18.03SC Differential Equations OCW (free) | 3Blue1Brown Differential Equations (free YT) | Steve Brunton Differential Equations and Dynamical Systems (free YT) | Boyce & DiPrima Elementary Differential Equations (~$80 digital/rental)" },
  { id: "PROB", phase: "P0", row: 7, label: "Probability & statistics",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Probability, distributions, random variables and estimation-theory basics \u2014 the foundation for filtering and stochastic control.",
    res:  "Statistics with Python \u2014 UMich (audit) | Think Stats (free) | Khan Academy (free)" },
  { id: "GIT", phase: "P0", row: 8, label: "Git & version control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Repos, branches, PRs, CI workflows. Version control for models, controllers and embedded firmware.",
    res:  "git-scm.com tutorial (free) | GitHub Skills (free) | Coursera: Version Control \u2014 Meta (audit)" },
  // ─── P1 ─ Signals & classical control ─
  { id: "SIGSYS", phase: "P1", row: 0, label: "Signals & systems",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["CALC", "ODE", "LA"],
    desc: "Continuous and discrete signals, convolution, Fourier/Laplace/Z transforms, LTI systems and transfer functions, frequency response and sampling. The mathematical language underlying all feedback control.",
    res:  "MIT RES.6-007 Oppenheim lectures (free) | Steve Brunton Fourier Analysis (free YT) | Oppenheim & Willsky Signals and Systems (~$65 used) | Lathi & Green Linear Systems and Signals (~$100 used)" },
  { id: "CLASSIC", phase: "P1", row: 1, label: "Classical control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["SIGSYS"],
    desc: "PID, root locus, Bode/Nyquist, lead-lag compensation, loop shaping, and gain/phase stability margins. Single-loop, single-input/single-output feedback design in continuous time.",
    res:  "Brian Douglas Control System Lectures (free YT) | MATLAB Tech Talks: Understanding Control Systems (free YT) | Astrom & Murray, Feedback Systems 2e, fbswiki.org (free) | Nise, Control Systems Engineering 8e (~$60-80 used/intl) | Ogata, Modern Control Engineering 5e (~$70 used)" },
  { id: "DIGITAL", phase: "P1", row: 2, label: "Digital control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["CLASSIC"],
    desc: "Discretization (ZOH, Tustin, matched pole-zero), z-domain design, sampling and aliasing, anti-alias filtering, and implementing fixed-rate controllers in code with attention to delay and quantization.",
    res:  "Brian Douglas Discrete control series (free YT) | Franklin, Powell & Workman Digital Control of Dynamic Systems, author-hosted Ellis-Kagle/SC Solutions PDF (free) | Astrom & Wittenmark Computer-Controlled Systems, Dover 3rd ed. (~$40) | MathWorks Control Systems in Practice: 4 Ways to Implement a Transfer Function in Code (free YT)" },
  // ─── P2 ─ Modeling & state-space ─
  { id: "STSP", phase: "P2", row: 0, label: "State-space control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["CLASSIC", "LA"],
    desc: "State-space models, controllability and observability, pole placement via state feedback, modal analysis, and Luenberger observers. Separation principle and multivariable (MIMO) design.",
    res:  "Steve Brunton Control Bootcamp (free YT) | Stanford EE263 Boyd, Linear Dynamical Systems (free) | MATLAB State Space Tech Talks, Brian Douglas (free YT) | Friedland, Control System Design (Dover) (~$35) | Hespanha, Linear Systems Theory 2e (Princeton) (~$105)" },
  { id: "DYN", phase: "P2", row: 1, label: "Dynamics & modeling",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["ODE", "LA"],
    desc: "Newtonian and Lagrangian mechanics, rigid-body kinematics and dynamics. Derive equations of motion for plants and manipulators; linearize about operating points to get state-space models for control design.",
    res:  "MIT OCW 2.003J Dynamics & Control I (free) | Lynch & Park Modern Robotics ch. 8 preprint (free) | Modern Robotics dynamics lectures (free YT) | Taylor Classical Mechanics (~$160) | Featherstone Rigid Body Dynamics Algorithms (~$160+)" },
  { id: "ROBKIN", phase: "P2", row: 2, label: "Robot kinematics & dynamics",
    priority: "critical", kind: "branch", tracks: ["robotics"], prereqs: ["DYN", "LA"],
    desc: "Forward and inverse kinematics, DH parameters, screw theory and product of exponentials, the Jacobian, and rigid-body manipulator dynamics (Newton-Euler, Euler-Lagrange). The model of a robot arm.",
    res:  "Modern Robotics \u2014 Lynch & Park, free preprint + videos (free) | Modern Robotics specialization, Coursera (audit) | QUT Robot Academy \u2014 Peter Corke (free) | Spong, Hutchinson & Vidyasagar Robot Modeling and Control (~$140) | Siciliano et al. Robotics: Modelling, Planning and Control, softcover (~$90)" },
  { id: "SYSID", phase: "P2", row: 3, label: "System identification",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["STSP", "PROB"],
    desc: "Building dynamic models from input/output data: least-squares, ARX/ARMAX prediction-error methods, subspace identification, frequency-response estimation, grey-box fitting, plus excitation design and model validation.",
    res:  "Ljung, System Identification: Theory for the User (~$150) | MATLAB System Identification Toolbox docs (free) | Steve Brunton, Data-Driven Control / System ID (free YT) | J. Schoukens & L. Ljung, Nonlinear System ID Roadmap, arXiv (free) | Pintelon & Schoukens, Frequency Domain Approach (~$165)" },
  { id: "NUM", phase: "P2", row: 4, label: "Numerical methods & simulation",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LA", "ODE", "PY"],
    desc: "ODE solvers (Runge-Kutta, stiff/implicit methods), numerical linear algebra, integration error and stability. Simulating dynamical systems accurately and fast in Python/SciPy. The compute layer under every controller.",
    res:  "Steve Brunton AMATH301 / Engineering Mathematics (free YT) | MIT OCW 18.330 Numerical Analysis (free) | Scientific Python Lectures (free) | Hairer, Norsett & Wanner Solving ODEs I (~$90) | Numerical Recipes 3rd Ed (~$70 used/new, $125 list)" },
  // ─── P3 ─ Estimation & filtering ─
  { id: "KF", phase: "P3", row: 0, label: "Kalman filtering",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["STSP", "PROB"],
    desc: "The Kalman filter: optimal linear state estimation via the predict/update recursion, covariance propagation, the Kalman gain, the steady-state form, and tuning the process/measurement noise (Q, R).",
    res:  "Roger Labbe \u2014 Kalman and Bayesian Filters in Python (free) | Steve Brunton Control Bootcamp: Kalman Filter (free YT) | MATLAB Tech Talks \"Understanding Kalman Filters\" (free YT) | Cyrill Stachniss Kalman/EKF lectures (free YT) | Dan Simon \u2014 Optimal State Estimation (~$80 used)" },
  { id: "NLEST", phase: "P3", row: 1, label: "Nonlinear estimation (EKF/UKF)",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["KF"],
    desc: "Estimation for nonlinear systems: extended Kalman filter (Jacobian linearization), unscented Kalman filter (sigma points), and particle filters. Process/measurement models, consistency, divergence and tuning.",
    res:  "Roger Labbe \u2014 Kalman and Bayesian Filters in Python (free) | Cyrill Stachniss EKF/UKF/PF lectures (free YT) | Dan Simon \u2014 Optimal State Estimation (~$160) | Thrun, Burgard & Fox \u2014 Probabilistic Robotics (~$105)" },
  { id: "NAV", phase: "P3", row: 2, label: "Navigation & sensor fusion",
    priority: "critical", kind: "branch", tracks: ["estimation", "aerospace", "automotive", "robotics"], prereqs: ["NLEST"],
    desc: "Strapdown inertial navigation, GNSS positioning, IMU mechanization and INS/GNSS fusion (loose/tight coupling) for position, velocity and attitude. Reference frames, error-state EKF, sensor bias modeling.",
    res:  "Paul Groves \u2014 GNSS, Inertial & Multisensor Integrated Navigation (~$170) | Farrell \u2014 Aided Navigation (~$135) | Coursera \"State Estimation & Localization for Self-Driving Cars,\" UToronto (audit) | VectorNav Inertial Navigation Primer (free) | Cyrill Stachniss \u2014 Kalman/EKF & SLAM lectures (free YT)" },
  { id: "SLAM", phase: "P3", row: 3, label: "SLAM",
    priority: "desirable", kind: "branch", tracks: ["robotics", "estimation", "automotive"], prereqs: ["NLEST"],
    desc: "Simultaneous localization and mapping: EKF-SLAM and FastSLAM, pose-graph/factor-graph optimization, loop closure and data association, with visual and LiDAR front-ends.",
    res:  "Cyrill Stachniss SLAM Course (free YT) | Thrun, Burgard & Fox Probabilistic Robotics (~$125) | Cadena et al. Past/Present/Future of SLAM survey, arXiv (free) | GTSAM + Dellaert Factor Graphs hands-on tutorial (free)" },
  { id: "ESTADV", phase: "P3", row: 4, label: "Smoothing & tracking",
    priority: "desirable", kind: "branch", tracks: ["estimation", "automotive"], prereqs: ["NLEST"],
    desc: "Factor-graph batch and fixed-lag smoothing with iSAM2/GTSAM; multi-target tracking and data association (nearest-neighbor, JPDA, MHT) for cluttered sensor streams.",
    res:  "Dellaert & Kaess, Factor Graphs for Robot Perception (free) | GTSAM tutorials, gtsam.org (free) | Stachniss graph-based SLAM lectures (free YT) | Bar-Shalom, Li & Kirubarajan, Estimation with Applications to Tracking and Navigation (~$185)" },
  // ─── P4 ─ Optimal & predictive control ─
  { id: "OPT", phase: "P4", row: 0, label: "Optimization for control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LA", "NUM"],
    desc: "Convex optimization, LP/QP/NLP, KKT conditions, duality and solver internals (interior-point, active-set, ADMM). The optimization engine under optimal control, MPC and estimation.",
    res:  "Boyd & Vandenberghe Convex Optimization (free) | Stanford EE364a Boyd lectures (free YT) | Nocedal & Wright Numerical Optimization (~$80) | CVXPY docs (free) | OSQP solver docs incl. MPC example (free)" },
  { id: "OPTCTRL", phase: "P4", row: 1, label: "Optimal control (LQR/LQG)",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["STSP", "KF"],
    desc: "LQR, the algebraic Riccati equation, LQG, and the calculus of variations / Pontryagin minimum principle \u2014 optimal feedback for linear (and locally nonlinear) systems.",
    res:  "Steve Brunton Control Bootcamp \u2014 LQR/LQG (free YT) | Stanford EE363 \u2014 Boyd (free) | Anderson & Moore Optimal Control: Linear Quadratic Methods (free) | Kirk Optimal Control Theory (~$35 Dover)" },
  { id: "MPC", phase: "P4", row: 2, label: "Model predictive control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["OPTCTRL", "OPT"],
    desc: "Receding-horizon control under constraints: linear and nonlinear MPC, QP/NLP formulations, terminal cost/set design for stability and recursive feasibility, and real-time embedded solvers (OSQP, acados, CasADi).",
    res:  "Rawlings, Mayne & Diehl MPC: Theory, Computation, Design 2nd ed (free PDF) | Borrelli, Bemporad & Morari Predictive Control for Linear and Hybrid Systems (free PDF) | acados / OSQP / do-mpc docs (free) | MATLAB Understanding MPC Tech Talks (free YT)" },
  { id: "TRAJOPT", phase: "P4", row: 3, label: "Trajectory optimization & planning",
    priority: "desirable", kind: "branch", tracks: ["robotics", "aerospace", "automotive"], prereqs: ["OPT", "OPTCTRL"],
    desc: "Trajectory optimization and motion planning: direct transcription/shooting, direct collocation, iLQR/DDP, sampling-based planners (RRT/PRM), and planning through contact. Maps optimal control onto nonlinear programs.",
    res:  "Tedrake Underactuated Robotics, Ch.10 & 12 (free) | Matthew Kelly, Intro to Trajectory Optimization + OptimTraj (free) | CasADi optimal-control examples (free) | Modern Robotics Course 4: Motion Planning (audit) | LaValle, Planning Algorithms (free)" },
  // ─── P5 ─ Nonlinear & robust control ─
  { id: "NLCTRL", phase: "P5", row: 0, label: "Nonlinear control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["STSP", "ODE"],
    desc: "Lyapunov stability and LaSalle's invariance, feedback linearization, backstepping, sliding-mode and passivity-based control. Stability analysis and constructive design for nonlinear systems beyond local linearization.",
    res:  "Khalil Nonlinear Systems 3rd ed (~$150) | Slotine & Li Applied Nonlinear Control (~$90) | Tedrake Underactuated Robotics + YT (free) | Khalil Nonlinear Control, Pearson (~$95) | MathWorks \"What Is Sliding Mode Control?\" Tech Talk (free YT)" },
  { id: "ROBUST", phase: "P5", row: 1, label: "Robust control",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["STSP", "OPTCTRL"],
    desc: "Designing for plant uncertainty: H-infinity and mixed-sensitivity synthesis, mu-synthesis with D-K iteration, structured/unstructured uncertainty, sensitivity and robustness margins, and multivariable (MIMO) loop shaping.",
    res:  "Skogestad & Postlethwaite, Multivariable Feedback Control (~$70 paperback; free 3-ch sample) | Zhou & Doyle, Essentials of Robust Control (~$90, mostly used) | MathWorks Robust Control video series, Brian Douglas (free YT) | MATLAB Robust Control Toolbox docs (free)" },
  { id: "ADAPT", phase: "P5", row: 2, label: "Adaptive control",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["NLCTRL", "SYSID"],
    desc: "Controllers that tune themselves online: model-reference adaptive control (MRAC), self-tuning regulators, gain scheduling, and L1 adaptive control. Lyapunov-based adaptation laws, parameter convergence, and robustness modifications.",
    res:  "Ioannou & Sun, Robust Adaptive Control (free PDF) | Astrom & Wittenmark, Adaptive Control 2e, Dover (~$33) | Slotine & Li, Applied Nonlinear Control ch.8 (~$85) | Hovakimyan & Cao, L1 Adaptive Control Theory, SIAM (~$103)" },
  { id: "FORCE", phase: "P5", row: 3, label: "Force & impedance control",
    priority: "desirable", kind: "branch", tracks: ["robotics"], prereqs: ["ROBKIN", "NLCTRL"],
    desc: "Interaction control for robots in contact: impedance and admittance control, hybrid force/position control, compliance, and Khatib's operational-space formulation for unified motion and force regulation.",
    res:  "Modern Robotics Ch.11 Force Control (free YT) | Siciliano et al. Robotics: Modelling, Planning and Control, Ch.9 (~$90) | Hogan, Impedance Control Part I\u2014Theory 1985 (free) | Khatib, Operational Space Formulation 1987 (free)" },
  // ─── P6 ─ Real-time & integration ─
  { id: "EMBED", phase: "P6", row: 0, label: "Embedded & real-time control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["CPP", "DIGITAL"],
    desc: "Running controllers on real hardware: RTOS scheduling, microcontrollers, fixed-point arithmetic, deterministic sample timing, ISRs and DMA, plus motor/power-electronics drivers. Closing the loop in firmware.",
    res:  "UT Austin Embedded Systems - Shape The World, Valvano (audit) | FreeRTOS docs & Mastering the FreeRTOS Kernel (free) | STM32 Motor Control MOOC (free) | Koopman, Better Embedded System Software (~$20)" },
  { id: "ROS2CTRL", phase: "P6", row: 1, label: "ROS2 & ros2_control",
    priority: "critical", kind: "branch", tracks: ["robotics", "automotive", "aerospace"], prereqs: ["CPP", "PY", "LINUX"],
    desc: "ROS 2 architecture (nodes, topics, services, actions, TF) and the ros2_control framework: controller manager, hardware interfaces, real-time control loops, plus MoveIt 2 motion planning and Nav2 autonomous navigation.",
    res:  "Official ROS 2 docs (free) | control.ros.org ros2_control docs (free) | Articulated Robotics ROS2 series (free YT) | MoveIt 2 & Nav2 docs (free) | The Construct ROS2 Control Framework (audit free tier)" },
  { id: "SIM", phase: "P6", row: 2, label: "Simulation & digital twins",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["NUM", "DYN"],
    desc: "Physics-based simulation and digital twins (Gazebo, MuJoCo, Isaac Sim, Simscape) for safe controller development, hardware-in-the-loop testing, and managing the sim-to-real gap before deployment.",
    res:  "Gazebo Sim docs (free) | MuJoCo docs & Colab tutorials, incl. LQR (free) | NVIDIA Isaac Sim / Isaac Lab (free) | Simscape / Simscape Multibody docs (free) | Articulated Robotics \u2014 Gazebo + ROS (free YT)" },
  { id: "PLC", phase: "P6", row: 3, label: "PLC & industrial automation",
    priority: "critical", kind: "branch", tracks: ["industrial"], prereqs: ["DIGITAL"],
    desc: "IEC 61131-3 PLC programming (ladder, structured text, SFC), PLCopen motion function blocks, SCADA/HMI design, and OPC-UA / Modbus connectivity for industrial and process plants.",
    res:  "RealPars PLC fundamentals (free YT) | OpenPLC Editor + Runtime (free) | OPC-UA Online Reference, OPC Foundation (free) | PLCopen Motion Control Part 1 spec (free) | Bolton, Programmable Logic Controllers 6e (~$60)" },
  // ─── P7 ─ Domain & systems ─
  { id: "MOTION", phase: "P7", row: 0, label: "Motion & manipulator control",
    priority: "critical", kind: "branch", tracks: ["robotics"], prereqs: ["ROBKIN", "STSP", "NLCTRL"],
    desc: "Manipulator control: computed-torque/inverse-dynamics, PD-plus-feedforward joint control, operational-space (task-space) control, and trajectory tracking of robot arms with Lyapunov stability analysis.",
    res:  "Modern Robotics Ch.11 Robot Control, Lynch & Park (free) | MR Coursera Course 4: Robot Motion Planning & Control (free trial) | Spong, Hutchinson & Vidyasagar, Robot Modeling and Control 2e (~$140) | Khatib 1987 Operational Space Formulation (free PDF) | Siciliano et al., Robotics: Modelling, Planning and Control, softcover (~$80)" },
  { id: "MOBILE", phase: "P7", row: 1, label: "Mobile & legged robots",
    priority: "desirable", kind: "branch", tracks: ["robotics"], prereqs: ["STSP", "TRAJOPT", "NAV"],
    desc: "Wheeled and legged mobile platforms: odometry, path/trajectory tracking, omnidirectional and nonholonomic kinematics, balance, and convex MPC for dynamic quadruped locomotion over ground reaction forces.",
    res:  "Modern Robotics Ch.13 Wheeled Mobile Robots \u2014 Lynch & Park (free) | Coursera Modern Robotics Course 6: Mobile Manipulation Capstone (audit) | Tedrake Underactuated Robotics, MIT 6.832 (free) | MIT Cheetah 3 Convex MPC \u2014 Di Carlo et al., IROS 2018 (free) | ETH Robot Dynamics lecture notes \u2014 Hutter et al. (free)" },
  { id: "FLTCTRL", phase: "P7", row: 2, label: "Flight & spacecraft control",
    priority: "critical", kind: "branch", tracks: ["aerospace"], prereqs: ["STSP", "NLCTRL", "NLEST"],
    desc: "Fixed-wing and spacecraft control: flight dynamics and linearized trim, attitude kinematics/dynamics with quaternions, cascaded autopilots, guidance loops, and control allocation across redundant actuators.",
    res:  "Beard & McLain UAVbook code + draft (free) | PX4 controller diagrams docs (free) | ArduPilot dev docs (free) | Christopher Lum flight dynamics (free YT) | Markley & Crassidis Spacecraft Attitude (~$90)" },
  { id: "AVCTRL", phase: "P7", row: 3, label: "Autonomous vehicle control",
    priority: "critical", kind: "branch", tracks: ["automotive"], prereqs: ["STSP", "MPC", "NAV"],
    desc: "Self-driving vehicle control: lateral/longitudinal dynamics, the kinematic bicycle model, path-tracking laws (pure pursuit, Stanley, MPC) and integrated planning-and-control feeding actuation.",
    res:  "Rajamani, Vehicle Dynamics and Control (~$280 new / ~$80 used) | Self-Driving Cars Specialization, UToronto / Coursera (audit free) | Autoware docs (free) | MATLAB Automated Driving Toolbox docs (free) | MathWorks Vehicle Path Tracking with MPC (free YT)" },
  { id: "PROCCTRL", phase: "P7", row: 4, label: "Process & industrial control",
    priority: "critical", kind: "branch", tracks: ["industrial"], prereqs: ["CLASSIC", "SYSID"],
    desc: "Process-industry control: process dynamics and FOPDT modeling, PID tuning (IMC/lambda), cascade, feedforward and ratio control, dead-time compensation, and an intro to advanced process control (APC/MPC).",
    res:  "APMonitor / BYU Process Dynamics & Control in Python (free) | Seborg, Edgar, Mellichamp & Doyle, Process Dynamics and Control 4e (~$150) | Astrom & Hagglund, Advanced PID Control, ISA (~$100, used) | controlguru.com \u2014 Practical Process Control (free) | Kuphaldt, Lessons In Industrial Instrumentation, control.com (free)" },
  { id: "GNC", phase: "P7", row: 5, label: "Guidance, navigation & control",
    priority: "desirable", kind: "branch", tracks: ["aerospace", "automotive", "robotics", "estimation"], prereqs: ["NAV", "MPC"],
    desc: "The integrated GNC stack: guidance and trajectory generation, navigation via state estimation and sensor fusion, and inner-loop control with allocation, for drones, autonomous vehicles and spacecraft.",
    res:  "Beard & McLain UAVbook draft + mavsim repo, uavbook.byu.edu (free) | UPenn Aerial Robotics, Kumar (audit) | MATLAB Drone Simulation & Control + Autonomous Navigation series (free YT) | PX4 controller diagrams / ArduPilot dev docs (free) | Markley & Crassidis Spacecraft Attitude, softcover (~$90)" },
  { id: "SAFECTRL", phase: "P7", row: 6, label: "Safety-critical control",
    priority: "critical", kind: "branch", tracks: ["industrial", "automotive", "aerospace"], prereqs: ["EMBED", "NLCTRL"],
    desc: "Functional safety lifecycle (IEC 61508, ISO 26262, DO-178C), SIL/ASIL, fault detection and isolation, fault-tolerant control, and control barrier functions for provable safety constraints.",
    res:  "Ames et al. CBF: Theory & Applications, ECC 2019 / arXiv:1903.11199 (free) | Aaron Ames CBF for Safe Robot Autonomy, ICRA 2022 talk (free YT) | Hobbs Embedded Software Development for Safety-Critical Systems, 2nd ed (~$65) | Blanke et al. Diagnosis & Fault-Tolerant Control, Springer (~$90) | Isermann Fault-Diagnosis Systems, Springer (~$80)" },
  { id: "SYSENG", phase: "P7", row: 7, label: "Control systems engineering",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["EMBED", "MPC"],
    desc: "Systems-engineering view of a control project: requirements capture, model-based design, the V-model, verification and validation, and choosing a control architecture (centralized, hierarchical, supervisory).",
    res:  "MATLAB Tech Talks (free YT) | MathWorks V-model & V&V docs (free) | INCOSE Systems Engineering Handbook 5th ed (~$90) | Coursera Intro to MBSE, Siemens (audit) | SysML.org tutorials (free)" },
  // ─── P8 ─ Frontier & leadership ─
  { id: "LEARNCTRL", phase: "P8", row: 0, label: "Learning & data-driven control",
    priority: "frontier", kind: "elective", tracks: ["robotics", "automotive", "aerospace"], prereqs: ["MPC", "NLCTRL"],
    desc: "Where control meets learning: RL with MPC, imitation learning, differentiable control, and data-driven models (Koopman, SINDy, DMDc, DeePC). Emphasis on safe, constraint-aware learning.",
    res:  "Russ Tedrake Underactuated Robotics (free) | Berkeley CS285 Deep RL \u2014 Levine (free YT) | Steve Brunton Data-Driven Control (free YT) | DeePC paper \u2014 Coulson/Lygeros/Dorfler (free) | L4DC proceedings on PMLR (free)" },
  { id: "LEAD", phase: "P8", row: 1, label: "Technical leadership",
    priority: "desirable", kind: "spine", tracks: ["all"], prereqs: ["SYSENG"],
    desc: "Growing influence without managing: architecture and trade-off decisions, design reviews, mentoring, contributing to professional bodies, and communicating control work through writing and conference talks.",
    res:  "Larson Staff Engineer (free web / ~$25 book) | Reilly The Staff Engineer's Path (~$40) | Fournier The Manager's Path (~$40) | IEEE CSS NextCom / Women in Control (CSS membership, paid) | Stein \"Respect the Unstable\" Bode Lecture article (free PDF mirror)" },
  { id: "RESEARCH", phase: "P8", row: 2, label: "Controls research & frontier",
    priority: "frontier", kind: "elective", tracks: ["all"], prereqs: ["NLCTRL", "OPTCTRL"],
    desc: "Reading and publishing research-grade control at CDC/ACC/IFAC: advanced nonlinear, stochastic and optimal control, plus reproducing a recent paper in simulation and writing it up.",
    res:  "IEEE CDC / ACC proceedings on IEEE Xplore (free abstracts) | IEEE Trans. Automatic Control & Automatica (free abstracts) | arXiv eess.SY Systems and Control (free) | Tedrake, Underactuated Robotics MIT 6.832 (free YT + book) | Boyd, Stanford EE263 lectures (free YT) + EE363 notes (free)" },
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

export default function ControlMalla() {
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
      <h2 className="sr-only">Control systems & robotics curriculum grid with 9 phases, 5 specialization tracks, and prerequisite dependencies</h2>

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
