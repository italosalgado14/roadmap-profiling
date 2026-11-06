// Curriculum data for the FPGA & Digital Hardware path.
//
// This module holds data only. It is rendered by
// preview-app/src/components/CurriculumGraph.jsx.
//
// Why this is its own path. Before it existed, the whole site contained eight
// hardware-adjacent nodes scattered across three graphs, and none of them
// taught digital design. What Edge AI calls hardware is software running on
// somebody else's silicon: CUDA, TensorRT, GPU kernels, deploying to a Jetson.
// Control has one embedded node. Quantum has two, and treats them as its
// highest-moat entry point precisely because almost nobody arrives with them.
// Nothing anywhere taught HDL, timing closure, verification or board bring-up,
// and none of those sit on any existing path's spine.
//
// This path is also the supplier to three others on the site: accelerators feed
// Edge AI, real-time execution feeds Control, and the converter and RF signal
// chain feeds the Quantum hardware track. Those cross-links are named in the
// node descriptions rather than duplicated as nodes.
//
// Course fields:
//   id        short stable key, shown on the node
//   phase     which phase column the node sits in
//   row       row within that column; must be 0..n-1 with no gaps or repeats
//   priority  critical | desirable | frontier
//   kind      spine (every track) | branch (chosen track only) | elective
//   tracks    ["all"] for spine nodes, otherwise the track ids that need it
//   prereqs   ids of the nodes that must come first
//   desc      one or two sentences shown in the detail panel
//   res       recommended resources, separated by "|"

// Phases are drawn left to right in the order listed here. Each phase is a
// quarter, about three months of study, and every track takes 2 to 5 courses
// in each of them.
export const PHASES = [
  { id: "P0", label: "Foundations", subtitle: "Prerequisites",         color: "#94a3b8" },
  { id: "P1", label: "Phase 1",     subtitle: "Digital design",        color: "#22d3ee" },
  { id: "P2", label: "Phase 2",     subtitle: "HDL & verification",    color: "#06b6d4" },
  { id: "P3", label: "Phase 3",     subtitle: "FPGA implementation",   color: "#8b5cf6" },
  { id: "P4", label: "Phase 4",     subtitle: "Interfaces & memory",   color: "#a78bfa" },
  { id: "P5", label: "Phase 5",     subtitle: "Embedded & software",   color: "#34d399" },
  { id: "P6", label: "Phase 6",     subtitle: "Domain depth",          color: "#10b981" },
  { id: "P7", label: "Phase 7",     subtitle: "Production & capstone", color: "#f59e0b" },
];

// Specialization tracks. Node stripes and the filter buttons are coloured
// from this map, and the counts on the page are derived from its size.
// Real-time and instrumentation were once two tracks; they shared most of
// their late courses (converters, motor control, power, signal integrity,
// production test), so they are one specialization now.
export const TRACKS = {
  accel:    { color: "#7c3aed", label: "ML accelerators",             short: "Accel"    },
  realtime: { color: "#059669", label: "Real-time & instrumentation", short: "Realtime" },
  dsp:      { color: "#2563eb", label: "DSP & communications",        short: "DSP"      },
  safety:   { color: "#d97706", label: "Safety-critical hardware",    short: "Safety"   },
};

export const COURSES = [
  // ─── P0 ─ Foundations (spine) ─────────────────────────────────────────
  { id: "ELEC", phase: "P0", row: 0, label: "Electronics fundamentals",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Circuits, impedance, transmission lines, logic families and voltage levels, and reading a datasheet and a schematic. The physical layer everything else in this path assumes.",
    res:  "Book: The Art of Electronics, Horowitz & Hill (paid), why: still the reference practising engineers keep on the desk | All About Circuits (free), why: the DC and AC chapters and the digital-logic volume, as the free fallback when a topic in Horowitz and Hill moves too fast | MIT OCW 6.002 (free), why: the lumped-circuit abstraction and the digital-abstraction lectures, which is where noise margins and logic levels stop being arbitrary numbers" },
  { id: "CPP", phase: "P0", row: 1, label: "C++",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "C and C++ close to the metal: pointers, memory layout, volatile, bit manipulation and what the compiler actually emits. The language of firmware, drivers and high-level synthesis alike.",
    res:  "learncpp.com (free), why: pointers and memory layout, bit manipulation, and what `volatile` and `const` actually promise the compiler | Compiler Explorer, godbolt.org (free), why: seeing the assembly is how the abstraction stops being magic | Book: A Tour of C++, Stroustrup" },
  { id: "PY", phase: "P0", row: 2, label: "Python",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "The tooling and verification language of modern hardware work: build scripts, register-map generation, test benches through cocotb, and analysing captured data.",
    res:  "Automate the Boring Stuff (free), why: file handling, regular expressions and scripting, which is what register-map and build-script generation is made of | NumPy and Matplotlib docs (free), why: most hardware debugging ends in a plot" },
  { id: "LINUX", phase: "P0", row: 3, label: "Linux & CLI",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Shell, build systems, cross-compilation and serial consoles. Every FPGA and embedded toolchain is driven from a command line, and the GUI is the slow path.",
    res:  "MIT Missing Semester (free), why: the shell as a language, plus ssh and the serial and terminal handling every board brings up over | Makefile and CMake docs (free), why: how a build graph expresses dependencies, and why an incremental build is correct only if they are declared" },
  { id: "GIT", phase: "P0", row: 4, label: "Git & version control",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: [],
    desc: "Branches, review and reproducible builds. Hardware projects version generated artifacts and vendor-tool output badly by default, so the discipline matters more here than in software.",
    res:  "git-scm.com book (free), why: the commit graph, the index, merge against rebase, and submodules, which hardware projects use for vendor IP | Guidance on managing binary and generated artifacts in hardware repositories (free), why: what to commit and what to regenerate, since vendor tools emit large unreviewable output and a repository that versions all of it becomes unusable" },
  { id: "ENGLISH", phase: "P0", row: 5, label: "English working fluency",
    priority: "desirable", kind: "elective", tracks: ["all"], prereqs: [],
    desc: "A continuous lane rather than a phase. Datasheets, application notes, errata and standards are English-first, and an errata sheet misread is a board respin.",
    res:  "Any structured B2 to C1 program | Practice: read one application note a week end to end (free)" },

  // ─── P1 ─ Digital design (spine) ──────────────────────────────────────
  { id: "LOGIC", phase: "P1", row: 0, label: "Digital logic design",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["ELEC"],
    desc: "Boolean algebra, combinational and sequential logic, flip-flops, setup and hold, metastability. The vocabulary that every later node is expressed in.",
    res:  "Book: Digital Design and Computer Architecture, Harris & Harris, why: it goes from gates to a working CPU in one volume | nandgame.com (free), why: building up from a NAND gate to an adder, a register and a CPU, which makes the gate-level picture concrete before any HDL" },
  { id: "FSM", phase: "P1", row: 1, label: "Sequential logic & FSMs",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LOGIC"],
    desc: "State machines, pipelining, handshakes and back-pressure. Most real designs are a set of communicating state machines, and most real bugs live in the handshake between two of them.",
    res:  "Harris & Harris, sequential chapters, why: finite-state-machine encoding and the timing analysis of a register-to-register path, which is the arithmetic behind every later timing decision | Book: Digital Design Principles, Wakerly | ZipCPU blog (free), why: it is written by someone who ships FPGA designs" },
  { id: "NUMFMT", phase: "P1", row: 2, label: "Number formats & fixed point",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LOGIC"],
    desc: "Two's complement, fixed-point Q formats, rounding, saturation, overflow and the error analysis that goes with them. The node that decides whether a DSP or accelerator design is correct or merely plausible.",
    res:  "Book: Digital Signal Processing, Lyons, fixed-point chapters | Arm and AMD/Xilinx fixed-point application notes (free), why: Q-format notation, where the binary point sits after a multiply, and the rounding and saturation choices" },
  { id: "COMPARCH", phase: "P1", row: 3, label: "Computer architecture",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["LOGIC"],
    desc: "Pipelines, hazards, caches, memory hierarchy and instruction sets. Needed to reason about a soft processor, an accelerator's memory bottleneck and why a design is not compute-bound at all.",
    res:  "Harris & Harris, architecture chapters, why: the single-cycle, multicycle and pipelined processor built in sequence, and the hazards that force forwarding and stalls | Book: Computer Architecture, Hennessy & Patterson (paid) | RISC-V specification (free), why: the base integer instruction set and the privilege levels, read as a worked example of what an ISA is a contract about" },

  // ─── P2 ─ HDL & verification ──────────────────────────────────────────
  { id: "HDL", phase: "P2", row: 0, label: "SystemVerilog & VHDL",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["FSM"],
    desc: "Writing synthesizable hardware description: the synthesizable subset, inference of registers and memories, parameterization, and the habit of picturing the gates before typing the code.",
    res:  "HDLBits practice problems (free), why: immediate feedback on synthesizable style | Book: SystemVerilog for Design, Sutherland | ASIC World tutorials (free), why: a lookup for language constructs and for which ones are synthesizable" },
  { id: "TB", phase: "P2", row: 1, label: "Simulation & testbenches",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["HDL"],
    desc: "Driving a design in simulation, self-checking testbenches, waveform debugging and assertions. Hardware iteration is slow enough that simulation is where the work actually happens.",
    res:  "Verilator (free), why: fast, free and what open projects use | GTKWave (free) | Icarus Verilog (free)" },
  { id: "VERIF", phase: "P2", row: 2, label: "Functional verification",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["TB"],
    desc: "Constrained-random stimulus, coverage, UVM and formal property checking. On a real project verification is more than half the effort, and it is a career in its own right.",
    res:  "Book: SystemVerilog for Verification, Spear | SymbiYosys formal flow (free), why: formal is unusually approachable on small blocks | UVM reference guide (free), why: the agent, driver, monitor and scoreboard roles, and constrained-random stimulus with functional coverage as the measure of progress" },
  { id: "COCOTB", phase: "P2", row: 3, label: "Python-based verification",
    priority: "desirable", kind: "branch", tracks: ["accel","dsp"],
    prereqs: ["TB","PY"],
    desc: "Driving HDL simulation from Python with cocotb, reusing NumPy models as the golden reference. The fastest way to check a DSP or accelerator block against the algorithm it is supposed to implement.",
    res:  "cocotb documentation (free), why: coroutines against a simulator clock, and how a Python model becomes the reference the design is checked against | cocotb-test and pytest integration (free), why: it puts hardware tests in a normal CI pipeline" },

  // ─── P3 ─ FPGA implementation ─────────────────────────────────────────
  { id: "FPGAFLOW", phase: "P3", row: 0, label: "FPGA toolchain & synthesis",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["HDL"],
    desc: "Synthesis, placement, routing and bitstream generation, plus reading the reports the tools produce. Vivado, Quartus or the open flow, and understanding what the vendor tool did to your code.",
    res:  "Vivado Design Suite user guides (free), why: the synthesis and implementation guides and how to read the utilization and timing reports; skip the IP catalogue | Project IceStorm and Yosys open flow (free), why: an open toolchain makes the stages inspectable | Digilent tutorials (free), why: getting a first bitstream onto a real board, constraints file and all" },
  { id: "TIMING", phase: "P3", row: 1, label: "Timing closure & STA",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["FPGAFLOW"],
    desc: "Static timing analysis, constraints, critical paths, setup and hold violations and the retiming or pipelining that fixes them. The skill that separates a design that simulates from one that runs.",
    res:  "Vendor timing constraint user guides (free), why: how to declare a clock, an input and output delay, a false path and a multicycle path, since an unconstrained design is not analysed rather than fast | Book: Constraining Designs for Synthesis and Timing Analysis, Gangadharan | ZipCPU timing posts (free), why: worked accounts of real critical paths and the pipelining that fixed them" },
  { id: "CLOCKS", phase: "P3", row: 2, label: "Clock domains & CDC",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["FPGAFLOW"],
    desc: "Multiple clocks, synchronizers, asynchronous FIFOs, reset strategy and clock-domain-crossing analysis. The single most common source of bugs that pass simulation and fail intermittently on hardware.",
    res:  "Cummings papers on CDC and asynchronous FIFO design (free), why: the canonical treatment, still unmatched | Vendor CDC analysis tooling docs (free), why: what the tool treats as a legal crossing and which reported violations are real metastability risks" },
  { id: "FLOORPLAN", phase: "P3", row: 3, label: "Floorplanning & resource use",
    priority: "desirable", kind: "branch", tracks: ["accel","dsp"],
    prereqs: ["TIMING"],
    desc: "Placement constraints, physical partitioning, and budgeting LUTs, flip-flops, block RAM and DSP slices. What you reach for when a design meets function but not timing or area.",
    res:  "Vendor implementation and floorplanning guides (free), why: placement constraints and physical partitioning, and which implementation strategies are worth trying before you hand-place anything | Device datasheets for resource counts (free), why: how many LUTs, flip-flops, block RAMs and DSP slices the part actually has, which is the budget a floorplan is drawn against" },

  // ─── P4 ─ Interfaces & memory ─────────────────────────────────────────
  { id: "AXI", phase: "P4", row: 0, label: "AXI & on-chip interconnect",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["FPGAFLOW"],
    desc: "AXI4, AXI4-Lite and AXI-Stream, memory-mapped register interfaces, burst transfers and DMA. The lingua franca for connecting blocks inside an FPGA and to a processor.",
    res:  "ARM AMBA AXI specification (free), why: reading the spec once removes a great deal of guesswork | Vendor AXI IP guides (free), why: the interconnect, DMA and register-interface IP, and the handshake rules a custom block must obey to be connectable" },
  { id: "PERIPH", phase: "P4", row: 1, label: "Peripherals & low-speed buses",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["FPGAFLOW"],
    desc: "SPI, I2C, UART, GPIO and PWM, and debugging them with a logic analyser. Unglamorous, universal, and where most bring-up time is actually spent.",
    res:  "Datasheets for a real sensor and a real ADC (free), why: the register map, the timing diagrams and the electrical limits; reading these two documents end to end is the actual skill this node teaches | Sigrok and PulseView logic analyser software (free), why: cheap capture hardware plus free software solves most bus problems" },
  { id: "MEM", phase: "P4", row: 2, label: "External memory & DDR",
    priority: "desirable", kind: "branch", tracks: ["accel","dsp"],
    prereqs: ["AXI"],
    desc: "DDR controllers, bandwidth and latency budgets, burst efficiency and buffering strategy. The bottleneck in almost every accelerator, which is why arithmetic throughput alone is a misleading number.",
    res:  "Vendor memory interface solutions guides (free), why: controller latency and efficiency figures, address mapping, and why burst length and access order decide achieved bandwidth | Papers on the roofline model (free), why: it frames whether you are compute- or memory-bound" },
  { id: "HSIO", phase: "P4", row: 3, label: "High-speed serial & PCIe",
    priority: "desirable", kind: "branch", tracks: ["accel","dsp","realtime"],
    prereqs: ["AXI"],
    desc: "Multi-gigabit transceivers, 8b/10b and 64b/66b encoding, PCIe endpoints and DMA to a host. How an accelerator or instrument talks to a computer at speed.",
    res:  "Vendor transceiver wizard and PCIe IP guides (free), why: lane rates and reference clocks, equalisation settings, and how a PCIe endpoint's DMA is presented to a host driver | Book: High-Speed Digital Design, Johnson & Graham (paid)" },
  { id: "ETH", phase: "P4", row: 4, label: "Ethernet & network offload",
    priority: "desirable", kind: "branch", tracks: ["dsp","realtime"],
    prereqs: ["AXI"],
    desc: "MAC and PHY interfaces, UDP and TCP offload, precision time protocol and deterministic Ethernet. The usual way data leaves an instrument or a real-time node.",
    res:  "Open-source Ethernet MAC cores (free), why: readable implementations of the MII and RGMII interface and of frame handling, which is how the PHY boundary stops being a black box | IEEE 1588 PTP overview material (free), why: time synchronisation is what makes distributed measurement possible" },

  // ─── P5 ─ Embedded & software ─────────────────────────────────────────
  { id: "MCU", phase: "P5", row: 0, label: "Microcontrollers & bare metal",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["CPP","PERIPH"],
    desc: "ARM Cortex-M or RISC-V, startup code, linker scripts, interrupts, DMA and register-level peripheral programming without a vendor abstraction layer in the way.",
    res:  "Book: Making Embedded Systems, White, why: the best single introduction to the discipline | ARM Cortex-M reference manuals (free), why: the interrupt controller and vector table, the memory map, and the systick and sleep modes | Bare-metal programming guides (free), why: the startup sequence, the linker script and the vector table, which is what runs before main" },
  { id: "RTOS", phase: "P5", row: 1, label: "RTOS & real-time scheduling",
    priority: "critical", kind: "branch", tracks: ["realtime","safety"],
    prereqs: ["MCU"],
    desc: "Tasks, priorities, preemption, priority inversion, jitter and worst-case execution time. Real-time means provably meeting a deadline, not merely being fast on average.",
    res:  "FreeRTOS documentation and book (free), why: the scheduler and priorities, queues and semaphores, and priority inversion as the failure they prevent | Zephyr documentation (free), why: the device driver model and Kconfig, which is how one codebase targets many boards | Papers on rate-monotonic scheduling (free), why: the analysis is what makes the guarantee real" },
  { id: "DRIVERS", phase: "P5", row: 2, label: "Linux drivers & device tree",
    priority: "desirable", kind: "branch", tracks: ["realtime","accel"],
    prereqs: ["MCU","LINUX"],
    desc: "Character and platform drivers, device tree, DMA buffers and userspace interfaces. How custom FPGA logic becomes something an application can simply open and read.",
    res:  "Book: Linux Device Drivers (free online) | Device tree documentation (free), why: how hardware is described to a kernel as data rather than code, and how a binding maps a node to a driver | Vendor SoC Linux guides (free), why: the boot chain from first-stage loader to kernel, and how fabric logic is exposed to Linux as a device-tree node" },
  { id: "SOC", phase: "P5", row: 3, label: "SoC FPGA & processor integration",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["AXI","MCU"],
    desc: "Zynq, Agilex or a soft RISC-V core: partitioning a design between software and fabric, sharing memory, and deciding what genuinely needs to be hardware. The central judgement call of the whole path.",
    res:  "Vendor SoC technical reference manuals (free), why: the clock and reset tree, the interconnect and the memory map; these answer why a peripheral is silent when the code looks right | LiteX and VexRiscv open SoC builder (free), why: it makes the partitioning question concrete and cheap to try" },
  { id: "BRINGUP", phase: "P5", row: 4, label: "Board bring-up & debug",
    priority: "critical", kind: "spine", tracks: ["all"], prereqs: ["MCU","PERIPH"],
    desc: "Taking a board from powered off to running: power sequencing, clocks, JTAG, oscilloscope and logic-analyser work, and integrated logic analysers inside the fabric. The skill that is hardest to learn from a book.",
    res:  "Vendor integrated logic analyser guides, ILA and SignalTap (free), why: instrumenting a live design, trigger conditions and capture depth, and the timing and area cost the probe itself adds | Book: Debugging, Agans, why: the method generalises past hardware | Buy the cheapest usable scope and use it" },

  // ─── P6 ─ Domain depth ────────────────────────────────────────────────
  { id: "DSP", phase: "P6", row: 0, label: "Digital signal processing",
    priority: "critical", kind: "branch", tracks: ["dsp","realtime"],
    prereqs: ["NUMFMT","HDL"],
    desc: "Sampling, filters, FFT, decimation and interpolation, implemented in fixed point on real hardware with real resource limits rather than in floating point on a laptop.",
    res:  "Book: Understanding Digital Signal Processing, Lyons, why: the clearest engineering treatment | dspguide.com (free), why: convolution, the FFT and filter design explained with almost no formalism, as the plain-language companion to Lyons | Vendor FIR and FFT IP guides (free), why: the throughput against resource trade in the configuration options, and the coefficient width and scaling choices that set the noise floor" },
  { id: "ADCDAC", phase: "P6", row: 1, label: "Data converters & signal chain",
    priority: "critical", kind: "branch", tracks: ["dsp","realtime"],
    prereqs: ["ELEC","DSP"],
    desc: "ADCs and DACs, sampling and aliasing, noise budgets, ENOB, jitter and the analogue front end feeding them. Where a measurement is won or lost before any digital processing happens.",
    res:  "Analog Devices, The Data Conversion Handbook (free), why: the reference the industry actually uses | Texas Instruments precision analogue application notes (free), why: noise budgets, reference and grounding choices, and anti-alias filtering, which decide the measurement before any sampling happens" },
  { id: "SDR", phase: "P6", row: 2, label: "Software-defined radio & RF",
    priority: "desirable", kind: "branch", tracks: ["dsp"],
    prereqs: ["DSP","HSIO"],
    desc: "Mixing, up and down conversion, IQ sampling, modulation and demodulation, and channelizers on FPGA. The bridge from digital design into communications, radar and test equipment.",
    res:  "GNU Radio tutorials (free), why: building a receive chain block by block, so mixing, decimation and demodulation become something you have watched work | Book: Software-Defined Radio for Engineers (free PDF), why: it is free, rigorous and paired with hardware exercises | RTL-SDR for cheap experimentation" },
  { id: "MOTOR", phase: "P6", row: 3, label: "Motor control & power electronics",
    priority: "desirable", kind: "branch", tracks: ["realtime"],
    prereqs: ["ADCDAC","RTOS"],
    desc: "PWM generation, field-oriented control, current sensing, encoders and gate drivers. Where hardware meets the Control and Robotics path, and a common industrial entry point.",
    res:  "Texas Instruments InstaSPIN and motor control application notes (free), why: the current and velocity loop structure, sensorless position estimation, and the PWM and ADC timing they depend on | Vendor FOC reference designs (free), why: the current-loop timing, ADC sampling aligned to PWM, and the fault handling that protects the hardware | See also the Control & Robotics roadmap" },
  { id: "HLS", phase: "P6", row: 4, label: "High-level synthesis",
    priority: "critical", kind: "branch", tracks: ["accel"],
    prereqs: ["FPGAFLOW","CPP"],
    desc: "Generating hardware from C++ with pragmas for pipelining, unrolling and array partitioning. Productive for dataflow and arithmetic, and still requiring you to know the hardware it produces.",
    res:  "Vitis HLS user guide (free), why: the pragmas that decide pipelining, unrolling, array partitioning and interface type, which are where the performance actually comes from | Book: Parallel Programming for FPGAs (free PDF), why: it teaches the mental model rather than the tool menus" },
  { id: "ACCEL", phase: "P6", row: 5, label: "ML accelerator architecture",
    priority: "critical", kind: "branch", tracks: ["accel"],
    prereqs: ["HLS","NUMFMT"],
    desc: "Systolic arrays, dataflow scheduling, on-chip buffering and the memory hierarchy of an inference engine. This is the node that connects to the Edge AI path, from the other side of the interface.",
    res:  "Book: Efficient Processing of Deep Neural Networks, Sze et al., why: the standard text on the subject | FINN and hls4ml projects (free), why: how a trained network becomes a streaming dataflow architecture, and where the per-layer resource and throughput trade is made | Google TPU architecture papers (free), why: the systolic-array datapath and the argument that on-chip memory and data reuse, not arithmetic, set the ceiling" },
  { id: "QUANTZ", phase: "P6", row: 6, label: "Quantization for hardware",
    priority: "desirable", kind: "branch", tracks: ["accel"],
    prereqs: ["NUMFMT"],
    desc: "INT8 and lower, per-channel scaling, quantization-aware training and binary and ternary networks. The bridge between a model trained in floating point and a datapath that can afford to run it.",
    res:  "Brevitas and FINN documentation (free), why: quantization-aware training at low bit widths, and how a quantized network becomes a streaming dataflow architecture | MIT 6.5940 TinyML and Efficient AI Computing (free lectures), why: the pruning and quantization lectures are the relevant half | Papers on QAT (free), why: how quantization is simulated during training and why straight-through estimation is needed to get a gradient through a rounding step" },
  { id: "FUNCSAFE", phase: "P6", row: 7, label: "Functional safety hardware",
    priority: "critical", kind: "branch", tracks: ["safety","realtime"],
    prereqs: ["VERIF","BRINGUP"],
    desc: "IEC 61508 and ISO 26262 at the hardware level: FMEDA, diagnostic coverage, redundancy, lockstep and safe-state design. What lets a device be trusted where a failure injures someone.",
    res:  "IEC 61508 and ISO 26262 overview material (free), why: how a safety integrity or automotive safety integrity level is assigned, and the hardware metrics that follow from it, namely diagnostic coverage and failure rates | Book: Functional Safety for Embedded Systems, Hobbs | Vendor safety-certified IP documentation (free), why: the safety manual and its assumptions of use, which state what the certification does and does not cover" },
  { id: "DO254", phase: "P6", row: 8, label: "DO-254 & certification flows",
    priority: "desirable", kind: "branch", tracks: ["safety"],
    prereqs: ["FUNCSAFE"],
    desc: "Airborne electronic hardware assurance: design assurance levels, requirements traceability, and the evidence a certification authority expects. Slow, documentation-heavy, and a durable niche.",
    res:  "RTCA DO-254 summaries and vendor certification kits (free), why: the design assurance levels and the required life-cycle data, which is what the certification evidence actually consists of | Published DO-254 process case studies (free), why: how a real programme organised its requirements, traceability and verification evidence, which the standard's summaries never show" },
  { id: "HWSEC", phase: "P6", row: 9, label: "Hardware security & root of trust",
    priority: "desirable", kind: "branch", tracks: ["safety"],
    prereqs: ["SOC"],
    desc: "Secure boot, bitstream encryption and authentication, key storage, physical unclonable functions, and side-channel and fault-injection attacks. Connects to the AI Security path from the silicon end.",
    res:  "Vendor secure boot and bitstream security guides (free), why: the chain of trust from an immutable boot ROM upward, where keys are stored, and what bitstream encryption does and does not prevent | ChipWhisperer side-channel platform (free tooling), why: the attacks become concrete rather than theoretical | See also the AI Security roadmap" },

  // ─── P7 ─ Production & capstone ───────────────────────────────────────
  { id: "CAPHW", phase: "P7", row: 0, label: "Capstone: hardware system",
    priority: "critical", kind: "spine", tracks: ["all"],
    prereqs: ["SOC","TIMING","BRINGUP"],
    desc: "One complete design on real silicon: specified, simulated, verified, timing-closed, brought up on a board and measured against its requirements. The proof this path is finished.",
    res:  "No course. Ship it on a real board and publish the numbers: resource use, achieved clock, measured latency and throughput, and what failed first" },
  { id: "LEAD", phase: "P7", row: 1, label: "Technical leadership",
    priority: "desirable", kind: "spine", tracks: ["all"],
    prereqs: ["CAPHW"],
    desc: "Setting direction, writing specifications others can build from, design reviews, and negotiating the hardware and software boundary with teams that do not share your vocabulary.",
    res:  "Book: Staff Engineer, Will Larson, free web edition at staffeng.com, why: how influence works without authority, and why writing is the instrument that scales it | Write specifications and design reviews, why: in hardware the specification is the deliverable" },
  { id: "SI", phase: "P7", row: 2, label: "Signal integrity & PCB",
    priority: "desirable", kind: "branch", tracks: ["realtime","dsp"],
    prereqs: ["BRINGUP","HSIO"],
    desc: "Transmission lines, impedance control, stack-up, return paths, crosstalk and EMC. The point at which a design stops being logic and becomes physics, usually discovered the hard way.",
    res:  "Book: High-Speed Digital Design, Johnson & Graham (paid), why: the classic and still correct | KiCad (free) | Vendor PCB layout guidelines for your device (free), why: stack-up, decoupling placement and the length and impedance rules for the memory and transceiver interfaces; these are requirements, not suggestions" },
  { id: "POWER", phase: "P7", row: 3, label: "Power & thermal design",
    priority: "desirable", kind: "branch", tracks: ["realtime"],
    prereqs: ["ELEC","BRINGUP"],
    desc: "Regulators, sequencing, decoupling, current budgets and thermal limits. FPGAs and accelerators are power-limited long before they are area-limited, which shapes what a design can be.",
    res:  "Vendor power estimation tools and guides (free), why: static against dynamic power, how switching activity drives the estimate, and why an early estimate from a simulation beats a measurement that arrives after the board is built | Analog Devices power management application notes (free), why: regulator selection and sequencing, decoupling and the return-path thinking behind a stable supply" },
  { id: "PRODTEST", phase: "P7", row: 4, label: "Production test & manufacturing",
    priority: "desirable", kind: "branch", tracks: ["realtime","safety"],
    prereqs: ["BRINGUP"],
    desc: "Boundary scan, built-in self-test, test fixtures, yield, calibration and field firmware update. The difference between one working board and ten thousand of them.",
    res:  "IEEE 1149.1 JTAG boundary scan overview (free), why: the TAP state machine and the boundary-scan register, which is how a populated board is tested for shorts and opens without a single probe | Published design-for-test guidance (free), why: test points, scan insertion and built-in self-test, and the argument that testability is a design decision rather than a manufacturing one" },
  { id: "ASIC", phase: "P7", row: 5, label: "ASIC flow & open silicon",
    priority: "desirable", kind: "branch", tracks: ["accel","dsp"],
    prereqs: ["TIMING","VERIF"],
    desc: "Standard-cell flow, synthesis to place and route, DRC and LVS, and open shuttle programs that make a real tapeout affordable. A different economics from FPGA, with far higher stakes per mistake.",
    res:  "LibreLane, the maintained OpenLane successor, with the Sky130 open PDK (free), why: a genuine tapeout flow you can run at home | Tiny Tapeout shuttles (paid), why: with Efabless gone since 2025, this is the affordable path to real silicon | Zero to ASIC course (paid), why: a guided route through a real tapeout flow, for when the open tooling alone leaves too many gaps" },
  { id: "QCTRL", phase: "P7", row: 6, label: "Quantum control electronics",
    priority: "frontier", kind: "elective", tracks: ["realtime"],
    prereqs: ["ADCDAC","SOC"],
    desc: "RFSoC-based pulse generation and readout, sub-microsecond feedback for active reset and error correction, and the cryogenic signal chain. The Quantum AI path treats this as its highest-moat entry, and this path is the ramp to it.",
    res:  "QICK open-source qubit controller on RFSoC (free), why: a working firmware and software stack for pulse generation and readout, which shows what sub-microsecond feedback actually costs in fabric | Krantz et al., A Quantum Engineer's Guide to Superconducting Qubits (free arXiv), why: the control and readout sections, which state the pulse shapes, timing and signal levels your electronics must actually deliver | See also the Quantum AI roadmap" },
];

export default {
  id: "fpga-hardware",
  name: "FPGA & Digital Hardware",
  srLabel: "FPGA and digital hardware curriculum grid",
  phases: PHASES,
  tracks: TRACKS,
  courses: COURSES,
};
