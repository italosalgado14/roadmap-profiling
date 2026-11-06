# FPGA & Digital Hardware Roadmap
## Designing the Silicon Everything Else Runs On

---

## Executive Summary

**Assumed starting point.** This roadmap assumes a STEM degree and somewhere between little professional experience and solid adjacent software experience, but no digital design background. An electronics, electrical or computer engineering degree is the shortest route in, because Phase 0 and Phase 1 are then a refresher rather than a first pass. If you already work in part of this, tick those nodes off in the curriculum graph and start where the gaps are: clicking a node shows the dependency chain it rests on, so the graph doubles as a gap analysis rather than a fixed course order.

**What the job actually is.** Digital hardware engineers design the logic that runs on an FPGA or an ASIC, verify it before it exists physically, close its timing, bring it up on a board and prove it meets its requirements. The deliverable is not code that works but a device that behaves identically every time it is powered on, at a clock rate you committed to, inside a power and area budget somebody else set. It is adjacent to embedded software and overlaps it at the SoC boundary, but the discipline is different: in software a bug is a patch, and here a bug can be a board respin or a mask set.

**The thesis: simulating is not running.** That claim organizes this entire document. An HDL design that passes simulation can still fail on hardware, and the reasons are specific and learnable: timing that was never constrained and therefore never analysed, a signal crossing between two clock domains without a synchronizer, a reset that releases asynchronously, a testbench that only exercised the cases the designer already thought of. So timing closure and clock-domain crossing sit in Phase 3 rather than near the end, verification gets its own critical node in Phase 2 and consumes more than half the effort on any real project, and the capstone is not finished until it is measured on a board. An engineer who can close timing and prove coverage is worth several who can write Verilog.

**Its own path, and a supplier to three others.** Before this path existed, the whole site held a handful of hardware-adjacent nodes scattered across three graphs, and none of them taught digital design. What Edge AI calls hardware is software running on somebody else's silicon: CUDA, TensorRT, GPU kernels, deploying to a Jetson. Control has one embedded node. Quantum has two, and treats them as its highest-moat entry point precisely because almost nobody arrives with them. Nothing anywhere taught HDL, timing closure, verification or board bring-up, and none of those sit on any other path's spine. This path is also the supplier to three others here: accelerators feed Edge AI, real-time execution feeds Control, and the converter and RF signal chain feeds the Quantum hardware track. Those cross-links are named in the nodes rather than duplicated as courses. Measured by course ids, this graph shares at most 6 of its 45 courses with any other on the site (0.13), and those six are the ungated starting nodes, C++, Python, Linux, Git and English, plus technical leadership at the end. Nothing in the middle of this curriculum exists anywhere else, which is why it is a path and not a specialization.

**Honest counterpoint, read this before committing.** This is the narrowest market on the site. The absolute numbers are small: BLS counts 76,100 US computer hardware engineers growing to 83,000 over 2025 to 2035, about 4,100 openings a year including replacements, against 199,700 electrical engineers and far larger software populations. The posting data is worse than the projection: McKinsey reports that job postings for design, hardware and optical engineering positions were all down from 2022 through 2025 even as application-specific semiconductor postings recovered. Hiring also concentrates geographically, around a small number of design centres, which makes remote work harder here than in software. Iteration is slow, the toolchains are proprietary, expensive and often unpleasant, and the open flow does not yet cover large parts. What holds its value is the judgement the tools do not supply: specifying a design, verifying it, closing its timing, and knowing what belongs in hardware at all. That last question is the one this path is really about, and generative AI does not answer it, because the answer depends on physics and on a cost structure rather than on a corpus of code.

**How the plan is paced.** Eight phases, Phase 0 to Phase 7. Each phase is a quarter, about three months of consistent part-time study, so one specialization followed end to end is eight phases, about two years. A specialization is the spine plus that specialization's branch courses, and every specialization takes 2 to 5 courses in every phase, so no quarter is idle and none is overloaded. The electives (English working fluency and, for one track, quantum control electronics) run alongside and do not count toward that load. Budget money as well as time here: unlike every other path on this site, this one cannot be studied on a laptop alone, and a dev board, a logic analyser and eventually an oscilloscope are the cost of entry.

**Four specializations.** Pick one as your plan and borrow single courses from a second rather than spreading across all of them:
- **ML accelerators**: high-level synthesis, accelerator architecture, quantization for hardware, external memory and PCIe, floorplanning and the ASIC flow. The track that meets Edge AI from the silicon side, and the one where arithmetic throughput is the least interesting number.
- **Real-time & instrumentation**: RTOS and real-time scheduling, data converters and the signal chain, motor control and power electronics, signal integrity, power and thermal design, and production test. The broadest industrial employer base and the closest to the Control path.
- **DSP & communications**: fixed-point signal processing on real hardware, converters, software-defined radio, high-speed serial links and Ethernet offload. The track for radar, test equipment and communications.
- **Safety-critical hardware**: functional safety at the hardware level, DO-254 certification flows, hardware security and root of trust, and production test. The smallest by headcount, the slowest moving, and the hardest to displace once you are in it.

For a software engineer moving across, **ML accelerators** is the most legible hop because the vocabulary of models, memory bandwidth and throughput is already familiar. For an electronics or electrical graduate, **Real-time & instrumentation** is the shortest and the widest. In Chile, the instrumentation and electrical maintenance demand in large-scale mining is where this skill set is actually bought, and the **Real-time & instrumentation** track with *Data converters & signal chain* is the way in.

**Where the demand evidence points.** Every figure here comes from the sources registered in the roadmap standards (`market-sources.md` and the claims ledger beside it, all rows read on 2026-09-26; the BLS figures come from the 2025 to 2035 projections round released on 27 August 2026) and carries its date, horizon and geography. Job titles are translated into the courses in this graph that serve them.

*Medium term (2 to 5 years):*
- **The spine** (Digital logic design through Timing closure & STA, Board bring-up & debug): [BLS](https://www.bls.gov/ooh/architecture-and-engineering/computer-hardware-engineers.htm) projects US computer hardware engineers to grow 9% over 2025 to 2035, from 76,100 to 83,000, about 4,100 openings a year, and [electrical and electronics engineers](https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm) 8% combined, electrical engineers 10% and electronics engineers except computer 4%, about 16,300 openings a year, with engineers expected in "solar arrays, semiconductors, and communications technologies". Faster than the 3.5% all-occupation average, on small absolute bases.
- **ML accelerator architecture, High-level synthesis, Quantization for hardware** (ML accelerators): the [WEF Future of Jobs Report 2025](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf) (Jan 2025, survey of 1,000+ employers across 55 economies, horizon 2030) attributes a net +0.6 million jobs to semiconductors and computing technologies. These are employer expectations, not observed hiring.
- **Supply side, the clearest signal in this field**: the [Semiconductor Industry Association and Oxford Economics](https://www.oxfordeconomics.com/resource/chipping-away-assessing-and-addressing-the-labor-market-gap-facing-the-us-semiconductor-industry/) (Jul 2023, horizon 2030, US) project the US semiconductor workforce to grow by nearly 115,000 jobs, from about 345,000 to 460,000, and estimate that "roughly 67,000, or 58%, of these new jobs risk going unfilled at current degree completion rates", of which 35% are four-year-degree engineers and computer scientists and 26% hold a master's or doctorate. In Europe, the [European Chips Skills Academy](https://chipsacademy.eu/news/ecsa-skills-strategy-2025/) (Nov 2025, horizon 2030) reports that "30% of the current workforce is expected to retire between 2023 and 2030" while graduates in semiconductor-related fields grow "by less than 1% per year", leaving "an average annual shortfall of around 10,800 skilled workers across the value chain". Both are industry-body analyses, and the SIA figure predates the 2024 to 2025 posting data below.
- **Functional safety hardware, DO-254 & certification flows** (Safety-critical hardware): no registered source measures this niche as a job category. The argument for it is structural rather than statistical: the certification evidence is mandatory, slow to produce and cannot be generated by someone who has not done it before.
- **Geography:** in the EU, [Cedefop](https://www.cedefop.europa.eu/en/news/cedefop-updates-skills-forecast-new-data-guide-europes-skills-and-labour-market-policy-2035) (Jul 2026, horizon 2035) projects ICT professionals and technicians to grow about 2.5% a year. In Chile, the [Consejo de Competencias Mineras and Fundación Chile workforce study 2025 to 2034](https://ccm-eleva.cl/wp-content/uploads/2025/12/Estudio-Fuerza-Laboral-de-la-Gran-Mineria-2025-2034.pdf) (Dec 2025) projects demand to 2034 for 1,680 electrical and 357 instrumentation maintenance technicians within 13,073 maintenance technicians overall, and says the adoption of autonomous and digital technology opens new opportunities in advanced maintenance, digital support and technology management. Those are technician counts and they are small; they are named here because they are the honest local signal for the instrumentation track, not because they describe an engineering market.

*Counter-signals, and they are strong in this field:* [McKinsey's Technology Trends Outlook 2026](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20top%20trends%20in%20tech%202026/mckinsey%20technology%20trends%20outlook%202026.pdf) (Sep 2026, 2024 to 2025 job postings, mainly English-speaking countries) counts application-specific semiconductor postings up 22% in 2024 to 2025, recovering from the post-2022 contraction, but states that "job postings for design, hardware, and optical engineering positions all down since 2022" while research engineers and solution architects grew. These are postings, not employment, and they are not Chilean or German demand. Read them against the SIA and ECSA shortfall figures above: the supply side says there will not be enough engineers, and the posting side says firms were not advertising design roles. Both are in the record and neither cancels the other.

*Long term (5 to 15 years):* scenario territory; no quantitative forecast reaches past 2035. The structural case is that the end of easy general-purpose performance scaling pushes value into specialized silicon, which is work that has to be designed and verified by someone, and that physical systems in energy, transport, industry and instrumentation keep needing deterministic hardware whatever happens to software employment. The structural risk is the opposite: that accelerator design consolidates into a few very large firms and the addressable market for the skill narrows rather than grows. This path is a bet that the judgement in specification, verification and timing stays scarce; it is not a bet on headcount.

**Three priority levels** run throughout:
- `critical`: the non-negotiable spine for your chosen track.
- `desirable`: high-ROI competitive edge, but not blocking.
- `frontier`: long-horizon bets that are exciting and unproven.

**Resource tags:**
- **Best match**: the first resource for every node, and the same one the curriculum graph lists first. Start there.
- (free): free
- (paid): paid; check the current price before buying

**Per-node sections:** every node lists `Prerequisites`, `Unlocks`, `Tracks`, `Resources`, a `Study approach` and a `Project`. The project is the proof of competence. In this field a design that runs on a real board with its resource use, achieved clock and measured latency published, plus an account of what failed first, outranks any certificate, because the numbers cannot be bluffed.

**What `Study approach` and `why:` are for.** `Study approach` is the knowledge itself: the concepts a course rests on, why each one matters and what breaks without it, so you can say what the course is about before opening a single resource. It is not a reading order and not a checklist. Where a resource is a body of material rather than one finite unit, such as official documentation or a reference manual, a `why:` clause names the specific parts to take from it, and sometimes the parts to leave alone.

**Hardware you will need.** The spine is reachable with a low-cost FPGA development board, a cheap logic analyser and the free toolchains. Timing closure, bring-up and the branch courses need more: an oscilloscope you can afford, a board with external memory and a transceiver for the high-speed nodes, and real sensors and converters for the instrumentation track. Buy late and buy once per phase; the common mistake is an expensive board bought before Phase 3 and used as a paperweight.

**Dated facts.** Where a node names a tool's status, a programme or a standard, it was checked on 2026-09-26, the repo's last source review, and is listed under *Sources & Notes*. The fast-moving ones here are the open silicon programmes. Re-check before relying on one.

---

## PHASE 0: Foundations

### Electronics fundamentals `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Digital logic design, Data converters & signal chain, Power & thermal design
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: The Art of Electronics, Horowitz & Hill (paid), why: still the reference practising engineers keep on the desk
- All About Circuits (free), why: the DC and AC chapters and the digital-logic volume, as the free fallback when a topic in Horowitz and Hill moves too fast
- MIT OCW 6.002 (free), why: the lumped-circuit abstraction and the digital-abstraction lectures, which is where noise margins and logic levels stop being arbitrary numbers

**Study approach:** This is the physical layer every later node quietly assumes, and the knowledge is the set of facts that make digital logic stop being ideal. Understand that a logic level is a voltage with a noise margin around it, so a signal is only a 1 or a 0 because the receiver's thresholds say so, which is why mixing 3.3 V and 1.8 V parts needs translation rather than hope. Understand impedance and the transmission line, because above a few tens of megahertz a trace stops being a wire and starts being a line that reflects whatever is not terminated, and that single fact explains ringing, overshoot and most of the signal-integrity work in Phase 7. Understand current and power as budgets, since a device draws current in switching spikes that the supply must absorb locally, which is what decoupling is for. Understand drive strength and fan-out, and understand reading a datasheet as a skill in itself: the absolute maximum ratings, the recommended operating conditions and the timing diagrams are the contract, and the application notes are where the part's real behaviour is admitted.

**Project:** Build one small circuit on a breadboard that interfaces a 3.3 V part to a 5 V one, and measure it rather than assume it: capture the rising edge on a scope, record the overshoot and the settling time, then add series termination and measure again. Write up the before and after with the numbers and the datasheet limits you were working against.

### C++ `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Microcontrollers & bare metal, High-level synthesis
**Tracks:** All specializations
**Resources:**
- **Best match:** learncpp.com (free), why: pointers and memory layout, bit manipulation, and what `volatile` and `const` actually promise the compiler
- Compiler Explorer, godbolt.org (free), why: seeing the assembly is how the abstraction stops being magic
- Book: A Tour of C++, Stroustrup

**Study approach:** C and C++ appear here as the languages of firmware, drivers and high-level synthesis, so the knowledge that matters is what the machine does rather than what the language offers. Understand memory layout concretely: where a variable lives, how a struct is padded and aligned, and why a cast between pointer types can produce a misaligned access that works on one architecture and faults on another. Understand `volatile` precisely, that it forbids the compiler from caching or reordering an access, which is exactly what a memory-mapped hardware register requires and what an ordinary variable must not have. Understand bit manipulation as the daily vocabulary: masks, shifts, setting and clearing a field without disturbing its neighbours, and why a read-modify-write on a register with hardware-set bits is a classic bug. Understand that the compiler is an optimiser with licence to remove anything it can prove unobservable, which is why an empty delay loop vanishes and why undefined behaviour produces faults far from their cause. Reading the emitted assembly is the habit that turns all of this from belief into knowledge.

**Project:** Write a small register-access layer for one real peripheral: typed field definitions, set and clear operations, and no vendor abstraction layer underneath. Compile it at two optimization levels, read the generated assembly for one access, and write down what the compiler did with your `volatile` and what it did without it.

### Python `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Python-based verification
**Tracks:** All specializations
**Resources:**
- **Best match:** Automate the Boring Stuff (free), why: file handling, regular expressions and scripting, which is what register-map and build-script generation is made of
- NumPy and Matplotlib docs (free), why: most hardware debugging ends in a plot

**Study approach:** Python is the tooling language of modern hardware work, so the knowledge needed is narrow and specific rather than broad. Understand text and file handling well enough to generate code, because a register map defined once and emitted as a C header, an HDL package and documentation is how three artifacts stay consistent, and hand-maintaining them is how they diverge. Understand NumPy's array model, since the golden reference for a DSP or accelerator block is almost always a few lines of NumPy, and that model is what a later cocotb testbench compares the hardware against. Understand plotting as an instrument rather than presentation: most hardware debugging ends in a plot of captured data, and seeing a spectrum or an error over time is often the only way the bug becomes visible. Understand fixed-point arithmetic simulated in Python, because that is where you decide the word lengths before committing them to silicon. Scripting the build and the test run matters more than elegance here.

**Project:** Define one peripheral's register map in a single machine-readable file and generate from it a C header, an HDL package and a Markdown table. Then write a NumPy model of a simple filter, run it in floating point and in a simulated fixed-point word length, and plot the error between them.

### Linux & CLI `critical`
**Prerequisites:** None, this is a starting node
**Unlocks:** Linux drivers & device tree
**Tracks:** All specializations
**Resources:**
- **Best match:** MIT Missing Semester (free), why: the shell as a language, plus ssh and the serial and terminal handling every board brings up over
- Makefile and CMake docs (free), why: how a build graph expresses dependencies, and why an incremental build is correct only if they are declared

**Study approach:** Every toolchain on this path is driven from a command line, and the GUI is the slow, unscriptable path, so the knowledge here is about control and reproducibility. Understand the shell as a language rather than a prompt: pipes carry bytes, an exit code is how one tool reports failure to another, and a build that cannot be run from a script cannot be run in continuous integration. Understand the build graph, that a target depends on prerequisites and is rebuilt when they are newer, because an incremental build is only correct if those dependencies are actually declared, and a generated HDL file with an undeclared dependency is how a stale bitstream reaches a board. Understand cross-compilation: the machine you build on is not the machine that runs the code, so a toolchain targets another architecture and a binary built for your laptop will not run on the target. Understand the serial console, which device node a board appears as, the baud rate, and why the port is busy, since that is the first channel you have into a new board.

**Project:** Put one FPGA or embedded project behind a single `make` invocation that synthesizes, runs the simulation and reports pass or fail, with no GUI step anywhere. Prove the dependencies are right by touching one source file and showing that exactly the right targets rebuild, then run the same command in a container.

### Git & version control `critical`
**Prerequisites:** None, this is a starting node
**Tracks:** All specializations
**Resources:**
- **Best match:** git-scm.com book (free), why: the commit graph, the index, merge against rebase, and submodules, which hardware projects use for vendor IP
- Guidance on managing binary and generated artifacts in hardware repositories (free), why: what to commit and what to regenerate, since vendor tools emit large unreviewable output and a repository that versions all of it becomes unusable

**Study approach:** The data model is what makes Git tractable: a commit is an immutable snapshot plus pointers to its parents, a branch is only a movable label, and the index is a deliberate staging area between your files and your history. Understand merge and rebase as two outcomes rather than rival rituals, and tags as what pins a named release to an exact state, which here means pinning a bitstream to the source and constraints that produced it. Then understand the problem specific to hardware, which is that this field generates large binary and derived artifacts: vendor project files, IP configurations, synthesis output, bitstreams and calibration data. Git cannot diff them, two people cannot merge them, and a repository that versions all of them becomes too large to clone and impossible to review. Understand the discipline that follows: commit sources and constraints, regenerate everything derivable, keep vendor project state out or in a scripted form that is readable, and record tool versions, because the same source through two tool releases is not the same device.

**Project:** Convert one vendor-tool project from a saved GUI project into a scripted, version-controlled build: sources and constraints committed, the project reconstructed by a script, derived output ignored. Show that a fresh clone produces a working bitstream, and record the exact tool version it was built with.

### English working fluency `desirable`
**Prerequisites:** None, this is a starting node
**Tracks:** All specializations (elective)
**Resources:**
- **Best match:** Any structured B2 to C1 program
- Practice: read one application note a week end to end (free)

**Study approach:** What is being acquired is not grammar but the ability to read precisely and write so others can build from it. The precision matters more here than on most paths because the documents are contracts: a datasheet's timing diagram, a standard's wording and an errata sheet are read for exactly what they say, and a misread erratum is a board respin rather than a bug. Understand the specific document types and their conventions, since a datasheet, an application note, a user guide and an errata sheet each answer a different question, and knowing which one to open is half the skill. The vocabulary worth deliberate attention is the one this field runs on: setup, hold, skew, jitter, margin, derating, tolerance and worst case. Writing matters because in hardware the specification is the deliverable: a design review happens against a written document, and an engineer who cannot write a specification that someone else can implement stays junior regardless of their design skill.

**Project:** Read one application note a week end to end for a quarter, and for each write a short summary in English of what it constrains and what it leaves to the designer. Then write one specification in English for a block you intend to build, and have someone else tell you what they would build from it.

---

## PHASE 1: Digital design

### Digital logic design `critical`
**Prerequisites:** Electronics fundamentals
**Unlocks:** Sequential logic & FSMs, Number formats & fixed point, Computer architecture
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Digital Design and Computer Architecture, Harris & Harris, why: it goes from gates to a working CPU in one volume
- nandgame.com (free), why: building up from a NAND gate to an adder, a register and a CPU, which makes the gate-level picture concrete before any HDL

**Study approach:** This node installs the vocabulary every later one is expressed in, and the centre of it is the clocked register. Understand combinational logic as a function of its inputs with a propagation delay, and sequential logic as that function with a register holding the result until the next clock edge, because once you see a design as registers separated by clouds of combinational logic you can see where its speed limit lives. Understand setup and hold as the two sides of a single requirement: data must arrive early enough before the edge and stay stable long enough after it, and a violation of either produces a value that is simply wrong. Understand metastability as the physical consequence of breaking that rule, where a flip-flop clocked while its input is changing settles to an unpredictable value after an unbounded time, which is why an asynchronous input can never be used directly and why Phase 3 has a whole node about it. Understand Boolean minimization and encoding as a cost argument rather than an exercise, and understand that what you write in HDL later is a description of this structure, so picturing the registers before typing is the habit to build now.

**Project:** Build a small arithmetic unit from gates and registers on paper or in a gate-level simulator: an adder, a comparator and a register, with the critical path identified by hand. Then compute the maximum clock frequency from the propagation delays in a real part's datasheet and state which path sets it.

### Sequential logic & FSMs `critical`
**Prerequisites:** Digital logic design
**Unlocks:** SystemVerilog & VHDL
**Tracks:** All specializations
**Resources:**
- **Best match:** Harris & Harris, sequential chapters, why: finite-state-machine encoding and the timing analysis of a register-to-register path, which is the arithmetic behind every later timing decision
- Book: Digital Design Principles, Wakerly
- ZipCPU blog (free), why: it is written by someone who ships FPGA designs

**Study approach:** Most real designs are a set of communicating state machines, and most real bugs live in the handshake between two of them, so this node is about structure rather than syntax. Understand the state machine as the standard way to express control: states, transitions, and the deliberate separation of next-state logic from output logic, which is what makes a design readable and testable. Understand the trade between Moore and Mealy forms, where outputs depending only on state are safer and outputs depending on inputs are faster but can glitch. Understand pipelining as the main instrument for speed: splitting a long combinational path with registers raises the clock rate while adding latency, which is a trade you make consciously and must then account for everywhere downstream. Understand handshakes and back-pressure as the real subject, because two blocks running at different rates need an agreed protocol for valid and ready, and the classic failures are a deadlock where each waits for the other, a dropped transfer where valid is sampled but ready was not, and a combinational loop created by making ready depend on valid in the same cycle.

**Project:** Design a pipelined block with a valid and ready handshake on both its input and output, then deliberately break it: make ready depend combinationally on valid and show the loop, and remove the back-pressure and show the dropped transfers. Write up each failure with the waveform that reveals it.

### Number formats & fixed point `critical`
**Prerequisites:** Digital logic design
**Unlocks:** Digital signal processing, ML accelerator architecture, Quantization for hardware
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Digital Signal Processing, Lyons, fixed-point chapters
- Arm and AMD/Xilinx fixed-point application notes (free), why: Q-format notation, where the binary point sits after a multiply, and the rounding and saturation choices

**Study approach:** This node decides whether a later DSP or accelerator design is correct or merely plausible, because hardware does not get floating point for free and every arithmetic choice is a cost. Understand two's complement properly, including why the negative range is one larger than the positive and why sign extension is what makes a narrow value usable in a wide adder. Understand fixed point as an integer with an agreed binary point, so a Q format is a convention rather than a type, and the hardware is unaware of it: multiplying two Q values gives a result whose point has moved, and tracking that by hand is the actual work. Understand bit growth, that an addition needs one more bit and a multiplication needs the sum of the widths, so an unmanaged datapath grows without bound and a truncated one loses precision silently. Understand overflow and the difference between wrapping, which turns a large positive into a negative and is usually catastrophic in a control loop, and saturation, which clamps and is usually what you want. Understand rounding against truncation as a bias question, since truncation adds a systematic offset that accumulates in a filter.

**Project:** Take one filter and implement it three times at the same word length: wrapping with truncation, saturating with truncation, and saturating with rounding. Drive all three with the same signal, measure the output error and the noise floor against a floating-point reference, and show the accumulated bias that truncation introduces.

### Computer architecture `critical`
**Prerequisites:** Digital logic design
**Tracks:** All specializations
**Resources:**
- **Best match:** Harris & Harris, architecture chapters, why: the single-cycle, multicycle and pipelined processor built in sequence, and the hazards that force forwarding and stalls
- Book: Computer Architecture, Hennessy & Patterson (paid)
- RISC-V specification (free), why: the base integer instruction set and the privilege levels, read as a worked example of what an ISA is a contract about

**Study approach:** This node exists so you can reason about where a design's time actually goes, which is rarely where a beginner expects. Understand the pipeline and its hazards: a dependency between adjacent instructions forces forwarding or a stall, and a branch costs whatever the pipeline had speculatively begun, which is the general lesson that parallelism is limited by dependencies rather than by resources. Understand the memory hierarchy as the dominant effect, because an access that misses to external memory costs hundreds of cycles while an arithmetic operation costs one, so a design is usually waiting rather than computing. That is the insight the accelerator track depends on: an engine quoted in operations per second is a fiction unless its data can arrive, and arithmetic throughput alone is a misleading number. Understand an instruction set as a contract rather than an implementation, separating what software may rely on from how the hardware provides it, which is why the same ISA supports a tiny soft core and a large out-of-order processor. Understand enough about privilege levels and traps to know what a soft processor must provide before an operating system will run on it.

**Project:** Take one small kernel, a matrix multiply or a filter, and compute its arithmetic intensity: operations per byte of data moved. Then measure its actual throughput on a processor you have, and show from the memory bandwidth whether the result is compute-bound or memory-bound. State what that implies for implementing it in hardware.

---

## PHASE 2: HDL & verification

### SystemVerilog & VHDL `critical`
**Prerequisites:** Sequential logic & FSMs
**Unlocks:** Simulation & testbenches, FPGA toolchain & synthesis, Digital signal processing
**Tracks:** All specializations
**Resources:**
- **Best match:** HDLBits practice problems (free), why: immediate feedback on synthesizable style
- Book: SystemVerilog for Design, Sutherland
- ASIC World tutorials (free), why: a lookup for language constructs and for which ones are synthesizable

**Study approach:** The hard part of HDL is that it is not a programming language, and every beginner's bug comes from forgetting that. Understand that you are describing structure, not behaviour over time: the synthesizable subset of SystemVerilog or VHDL maps onto registers, memories and combinational logic, and anything outside that subset either fails to synthesize or, worse, simulates differently from the hardware it produces. Understand register inference, which is the central mechanism: a clocked process creates flip-flops, and whether you get a register, a latch or a combinational cloud depends on how the assignment is written, so an incomplete assignment in a combinational block infers a latch you did not ask for and did not want. Understand blocking against non-blocking assignment as the rule that keeps simulation and synthesis agreeing, and treat it as non-negotiable rather than stylistic. Understand how a memory is inferred so the tool gives you block RAM instead of thousands of flip-flops, and understand parameterization as the way one well-written module serves many widths. The habit to build is picturing the gates before typing the code, because the code is a description of something you should already be able to draw.

**Project:** Write one parameterized module, a FIFO or an arithmetic block, and synthesize it at three different widths. Read the utilization report each time and confirm the resources match what you expected, then deliberately write an incomplete combinational block, find the inferred latch in the synthesis warnings, and fix it.

### Simulation & testbenches `critical`
**Prerequisites:** SystemVerilog & VHDL
**Unlocks:** Functional verification, Python-based verification
**Tracks:** All specializations
**Resources:**
- **Best match:** Verilator (free), why: fast, free and what open projects use
- GTKWave (free)
- Icarus Verilog (free)

**Study approach:** Hardware iteration is slow enough that simulation is where the work actually happens, so this node is about how you convince yourself a design is right before it exists. Understand the self-checking testbench as the only kind that scales: a test that prints waveforms for a human to inspect does not survive the tenth change, while a test that drives stimulus, computes the expected result independently and fails loudly can run on every commit. Understand that the independent model is the point, because a testbench that reimplements the design's logic will agree with the design's bugs. Understand the event-driven simulator's model of time, that signals change at scheduled moments within a timestep, which is what makes race conditions between a testbench and a design real and why clocking the stimulus correctly matters. Understand assertions as checks that live inside the design and fire the moment an assumption is broken, which is how you catch a protocol violation at its cause rather than many cycles later at its symptom. Understand waveform debugging as a last resort rather than a method, and understand that simulation cannot tell you about timing, which is why Phase 3 exists.

**Project:** Build a self-checking testbench for the FIFO or arithmetic block from the previous node: an independent reference model, randomized stimulus, and assertions on the handshake protocol. Make it exit non-zero on failure, wire it into the `make` target from Phase 0, and show it catching a bug you introduce on purpose.

### Functional verification `critical`
**Prerequisites:** Simulation & testbenches
**Unlocks:** Functional safety hardware, ASIC flow & open silicon
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: SystemVerilog for Verification, Spear
- SymbiYosys formal flow (free), why: formal is unusually approachable on small blocks
- UVM reference guide (free), why: the agent, driver, monitor and scoreboard roles, and constrained-random stimulus with functional coverage as the measure of progress

**Study approach:** On a real project verification is more than half the effort and it is a career in its own right, so this node is about how you know when you have tested enough. Understand why directed tests run out: a designer writes tests for the cases they thought of, which are exactly the cases they already handled, so the bugs live in the combinations nobody imagined. Understand constrained-random stimulus as the answer, generating legal but unanticipated input, and understand the constraint as the real design work since an unconstrained generator produces mostly illegal nonsense. Understand coverage as the measure that makes progress visible, and keep the two kinds distinct: code coverage says which lines ran, which is necessary and nearly meaningless, while functional coverage says which scenarios you intended to exercise actually occurred. Understand the layered testbench structure as the reason a verification environment is reusable: a driver that knows the protocol, a monitor that observes it, a scoreboard that compares against the model, and the sequences that choose what to send. Then understand formal property checking as a different kind of answer: instead of sampling the input space it proves a property for all inputs, which is unusually tractable on small control blocks, arbiters and handshakes, and intractable on a whole design.

**Project:** Verify one control block two ways. Build a constrained-random environment with functional coverage and drive it until the coverage goals close, recording which bug each new coverage point exposed. Then state two safety properties and prove them formally on the same block, and write up what each method found that the other did not.

### Python-based verification `desirable`
**Prerequisites:** Simulation & testbenches, Python
**Tracks:** ML accelerators, DSP & communications
**Resources:**
- **Best match:** cocotb documentation (free), why: coroutines against a simulator clock, and how a Python model becomes the reference the design is checked against
- cocotb-test and pytest integration (free), why: it puts hardware tests in a normal CI pipeline

**Study approach:** This node exists because the golden reference for a DSP or accelerator block almost always already exists in Python, and rewriting it in SystemVerilog to check the hardware is both wasteful and unsound. Understand the mechanism: the simulator runs the design while Python coroutines drive and sample it, awaiting clock edges, so the testbench is ordinary Python with access to NumPy, SciPy and whatever model you already trust. Understand why that matters for correctness, because the reference and the implementation then come from genuinely different sources and an agreement between them means something. Understand the cost of the approach honestly: crossing between the simulator and the interpreter every cycle is slow, so this suits block-level checking against an algorithm rather than long system-level runs. Understand how fixed-point comparison is done in practice, which is not an equality check but a bounded error against the model with the tolerance derived from the word lengths you chose, and understand that choosing that tolerance is a design decision you must be able to defend. Understand the packaging advantage: once hardware tests are pytest tests, they run in an ordinary continuous integration pipeline alongside software ones.

**Project:** Test one fixed-point DSP block against a NumPy model through cocotb, with the tolerance computed from the word lengths rather than guessed. Run it from pytest in CI on every commit, and include one case where the hardware and the model disagree within tolerance and explain why that is acceptable.

---

## PHASE 3: FPGA implementation

### FPGA toolchain & synthesis `critical`
**Prerequisites:** SystemVerilog & VHDL
**Unlocks:** Timing closure & STA, Clock domains & CDC, AXI & on-chip interconnect, Peripherals & low-speed buses, High-level synthesis
**Tracks:** All specializations
**Resources:**
- **Best match:** Vivado Design Suite user guides (free), why: the synthesis and implementation guides and how to read the utilization and timing reports; skip the IP catalogue
- Project IceStorm and Yosys open flow (free), why: an open toolchain makes the stages inspectable
- Digilent tutorials (free), why: getting a first bitstream onto a real board, constraints file and all

**Study approach:** This node is where you learn that the vendor tool is a compiler and that you are responsible for what it produced. Understand the stages and what each one can and cannot fix: synthesis turns your HDL into a netlist of device primitives, placement decides which physical LUT and flip-flop each one becomes, routing connects them through fixed switch fabric, and bitstream generation emits the configuration. Understand that routing is where the delay actually appears, which is why a design can synthesize cleanly and still miss timing, and why placement constraints matter later. Understand the reports as the real output alongside the bitstream: the utilization report tells you what the tool inferred, and a block RAM that became flip-flops or a multiplier that became logic is a design error visible only there. Understand the warnings that matter, principally inferred latches, unconnected ports and widths silently truncated, and understand that a design with hundreds of ignored warnings has no reviewable state. Understand why the open flow is worth using alongside the vendor one: the stages are separate inspectable programs, so you can see the netlist between them, which is how the process stops being magic.

**Project:** Take one design through to a bitstream on a real board, then read the reports properly: account for every resource the utilization report lists, resolve every warning, and show one case where the tool inferred something other than what you intended and what you changed to fix it.

### Timing closure & STA `critical`
**Prerequisites:** FPGA toolchain & synthesis
**Unlocks:** Floorplanning & resource use, Capstone: hardware system, ASIC flow & open silicon
**Tracks:** All specializations
**Resources:**
- **Best match:** Vendor timing constraint user guides (free), why: how to declare a clock, an input and output delay, a false path and a multicycle path, since an unconstrained design is not analysed rather than fast
- Book: Constraining Designs for Synthesis and Timing Analysis, Gangadharan
- ZipCPU timing posts (free), why: worked accounts of real critical paths and the pipelining that fixed them

**Study approach:** This is the node that separates a design that simulates from one that runs, and the single most important thing to understand is that static timing analysis checks nothing you did not declare. A clock you never defined is not analysed, and a design reporting no violations may simply have no constraints, so the first question about any timing report is what it was asked to check. Understand the arithmetic of a path: the clock period must cover the launch register's output delay, the combinational logic, the routing, and the destination's setup requirement, plus any clock skew between them, and the slack is what is left over. Understand that negative slack on setup is a speed problem you fix by shortening the path, through pipelining, retiming or restructuring the logic, while a hold violation is a different animal, is independent of clock frequency and usually means a path is too short or a crossing is wrong. Understand the constraints you will actually write: the clock definition, input and output delays that describe the board outside the chip, and the exceptions, where a false path says this is never timed and a multicycle path says this has more than one period, both of which are assertions you had better be right about because the tool will believe you.

**Project:** Take a design that fails timing and close it, documenting each step: the original critical path with its slack, what you changed, and the new slack. Then do the reverse as an experiment: declare a false path that is not actually false, show that the tool reports success, and show the design failing on hardware.

### Clock domains & CDC `critical`
**Prerequisites:** FPGA toolchain & synthesis
**Tracks:** All specializations
**Resources:**
- **Best match:** Cummings papers on CDC and asynchronous FIFO design (free), why: the canonical treatment, still unmatched
- Vendor CDC analysis tooling docs (free), why: what the tool treats as a legal crossing and which reported violations are real metastability risks

**Study approach:** This node covers the single most common source of bugs that pass simulation and fail intermittently on hardware, and the reason is physical rather than logical. Understand metastability as the root: a flip-flop sampled while its input is changing can hang between levels and settle unpredictably after an unbounded time, so any signal crossing from one clock domain to another breaks the setup and hold requirement by definition and cannot be used directly. Understand the two-flop synchronizer as the standard answer for a single control bit, and understand exactly why it is not a general solution: it makes one bit safe, so a multi-bit value synchronized bit by bit can be sampled mid-change and produce a combination that never existed. Understand the correct patterns that follow, an asynchronous FIFO with Gray-coded pointers so only one bit changes at a time, or a handshake where data is held stable while a synchronized flag crosses. Understand reset as the same problem wearing different clothes: a reset released asynchronously relative to a clock can take effect on different cycles in different registers, which is why reset synchronization and release ordering are design decisions. Understand that simulation will not find any of this, which is why the crossing analysis tool exists.

**Project:** Build a data path between two genuinely unrelated clocks twice: once with per-bit synchronizers and once with a Gray-coded asynchronous FIFO. Show the incoherent values the first produces, run the vendor crossing analysis on both, and explain every violation it reports and why it is or is not real.

### Floorplanning & resource use `desirable`
**Prerequisites:** Timing closure & STA
**Tracks:** ML accelerators, DSP & communications
**Resources:**
- **Best match:** Vendor implementation and floorplanning guides (free), why: placement constraints and physical partitioning, and which implementation strategies are worth trying before you hand-place anything
- Device datasheets for resource counts (free), why: how many LUTs, flip-flops, block RAMs and DSP slices the part actually has, which is the budget a floorplan is drawn against

**Study approach:** This is what you reach for when a design meets function but not timing or area, and the knowledge is mostly about budgets and physical reality. Understand the device as a fixed grid of heterogeneous resources: LUTs and flip-flops distributed in logic blocks, block RAMs and DSP slices in columns, and clocking resources in regions, so where a block lands determines how far its signals must travel and therefore its delay. Understand that the tool places well on average and badly in specific places, which is why a hand-placed constraint on one critical module can close timing that no amount of restructuring would. Understand resource budgeting as an argument made before implementation: counting the multipliers and memories a design needs against what the part has tells you whether the architecture is feasible, and discovering that after writing the HDL is expensive. Understand the substitution trade, that an operation can be built from DSP slices or from logic, and a memory from block RAM or from distributed flip-flops, so a design that exhausts one resource can often be rebalanced onto another. Understand that aggressive floorplanning is a late and brittle instrument: it ties a design to a device and a tool version, so reach for it after the architectural options are gone.

**Project:** Take a design that fits but misses timing and close it twice: once by pipelining or restructuring, once by placement constraints alone. Report the achieved clock, the resource use and the build time for each, and state which you would ship and why.

---

## PHASE 4: Interfaces & memory

### AXI & on-chip interconnect `critical`
**Prerequisites:** FPGA toolchain & synthesis
**Unlocks:** External memory & DDR, High-speed serial & PCIe, Ethernet & network offload, SoC FPGA & processor integration
**Tracks:** All specializations
**Resources:**
- **Best match:** ARM AMBA AXI specification (free), why: reading the spec once removes a great deal of guesswork
- Vendor AXI IP guides (free), why: the interconnect, DMA and register-interface IP, and the handshake rules a custom block must obey to be connectable

**Study approach:** AXI is the lingua franca for connecting blocks inside an FPGA and to a processor, so this node is about a protocol you will implement, debug and read specifications for repeatedly. Understand the handshake first, because everything else is built on it: a transfer happens when valid and ready are both high on a clock edge, the source must not withdraw valid once asserted, and neither side may make its signal depend combinationally on the other's in the same cycle, which is the rule that prevents the deadlock beginners create. Understand why there are three flavours and when each is right: AXI4-Lite for a handful of control registers, full AXI4 with bursts for moving blocks of data to memory, and AXI-Stream for continuous dataflow with no addresses at all, which is what a DSP or accelerator pipeline actually wants. Understand the independence of the channels, that address, data and response travel separately and can overlap, which is what allows multiple outstanding transactions and therefore throughput, and is also why ordering rules and identifiers exist. Understand burst length and alignment as the practical performance lever, since a long aligned burst is many times more efficient than the same bytes requested singly. Understand DMA as the reason this matters: moving data without the processor in the loop is the whole point.

**Project:** Implement an AXI4-Lite register interface and an AXI-Stream data path on one custom block, connect it to a processor, and drive it from software. Then measure the throughput with single transfers against long bursts through a DMA engine and report both numbers with the efficiency you achieved.

### Peripherals & low-speed buses `critical`
**Prerequisites:** FPGA toolchain & synthesis
**Unlocks:** Microcontrollers & bare metal, Board bring-up & debug
**Tracks:** All specializations
**Resources:**
- **Best match:** Datasheets for a real sensor and a real ADC (free), why: the register map, the timing diagrams and the electrical limits; reading these two documents end to end is the actual skill this node teaches
- Sigrok and PulseView logic analyser software (free), why: cheap capture hardware plus free software solves most bus problems

**Study approach:** These buses are unglamorous and universal, and most bring-up time is actually spent here, so the knowledge is practical and specific. Understand that SPI and I2C solve the same problem with opposite trade-offs: SPI is fast, simple and needs a chip-select line per device, while I2C is two wires shared by many devices at the cost of addressing, speed and a protocol with real failure modes. Understand I2C's specific hazards, that it is open-drain and needs pull-up resistors sized to the bus capacitance, that a device can stretch the clock, and that an interrupted transfer can leave a slave holding the bus so your recovery sequence matters. Understand SPI's one real ambiguity, the clock polarity and phase setting, since getting it wrong gives you data shifted by a bit rather than nothing at all, which is harder to spot. Understand UART as asynchronous and therefore dependent on both ends agreeing a baud rate within a tolerance, which is why a slightly wrong clock gives you plausible garbage. Understand PWM as a digital output with an average value, and the resolution against frequency trade that follows from the counter width. Understand that a logic analyser turns all of this from guesswork into observation, which is the actual lesson.

**Project:** Bring up one real sensor over I2C and one real converter over SPI from your own HDL or bare-metal code, with no vendor library. Capture both buses on a logic analyser, annotate one complete transaction against the datasheet's timing diagram, and show the capture of one failure and the fix.

### External memory & DDR `desirable`
**Prerequisites:** AXI & on-chip interconnect
**Tracks:** ML accelerators, DSP & communications
**Resources:**
- **Best match:** Vendor memory interface solutions guides (free), why: controller latency and efficiency figures, address mapping, and why burst length and access order decide achieved bandwidth
- Papers on the roofline model (free), why: it frames whether you are compute- or memory-bound

**Study approach:** External memory is the bottleneck in almost every accelerator, which is why arithmetic throughput alone is a misleading number, and this node is about why. Understand that DDR is not random access in any useful sense: it is organized into banks, rows and columns, and reading a new row requires closing the current one and activating another, which costs many cycles. So accesses that walk sequentially within a row are fast and accesses that jump between rows are slow, and the same total bytes can differ several-fold in time depending only on order. Understand the controller's job and its cost, refresh stealing bandwidth periodically, and the latency it adds that no buffering removes. Understand the distinction between latency and bandwidth, since a pipeline can hide latency with enough outstanding requests but nothing hides insufficient bandwidth. Understand the roofline framing as the tool for deciding where to spend effort: compute the arithmetic intensity of your design, operations per byte moved, and compare it against the ratio the device offers, because that tells you immediately whether you are compute-bound or memory-bound and therefore whether a faster datapath can help at all. Understand on-chip buffering and data reuse as the real optimization, since the cheapest byte is the one you do not fetch twice.

**Project:** Measure your board's achieved memory bandwidth three ways: long sequential bursts, short random accesses, and a strided pattern that crosses rows. Report each as a fraction of the theoretical peak, then place one kernel on the roofline and state whether optimizing its arithmetic could possibly help.

### High-speed serial & PCIe `desirable`
**Prerequisites:** AXI & on-chip interconnect
**Unlocks:** Software-defined radio & RF, Signal integrity & PCB
**Tracks:** ML accelerators, DSP & communications, Real-time & instrumentation
**Resources:**
- **Best match:** Vendor transceiver wizard and PCIe IP guides (free), why: lane rates and reference clocks, equalization settings, and how a PCIe endpoint's DMA is presented to a host driver
- Book: High-Speed Digital Design, Johnson & Graham (paid)

**Study approach:** This node is how an accelerator or an instrument talks to a computer at speed, and it is the point where digital design starts touching analogue reality. Understand the serial link as a chain of problems solved in layers: a parallel word is serialized onto one differential pair, the receiver has no separate clock so it must recover one from the data transitions, and that only works if the data has enough transitions, which is why line coding exists. Understand 8b/10b and 64b/66b as exactly that mechanism, guaranteeing transition density and DC balance at a bandwidth overhead, and understand comma characters and alignment as how a receiver finds the word boundary in a stream of bits. Understand that the physical channel attenuates and distorts, which is what pre-emphasis at the transmitter and equalization at the receiver compensate, and that these are settings you will tune against a measured bit error rate rather than get right by calculation. Understand PCIe as a layered protocol on top of that, with packets, flow control and configuration space, and understand what matters practically: it is a memory-mapped relationship with a host, so your design appears as address space, and the performance question is whether the host or the device moves the data, which is why a DMA engine mastering the bus beats the host reading registers by a wide margin.

**Project:** Bring up one multi-gigabit link, either a PCIe endpoint to a host or a board-to-board transceiver link. Measure the bit error rate, sweep one equalization setting and plot its effect, then measure sustained throughput with host-driven reads against device-driven DMA and report both.

### Ethernet & network offload `desirable`
**Prerequisites:** AXI & on-chip interconnect
**Tracks:** DSP & communications, Real-time & instrumentation
**Resources:**
- **Best match:** Open-source Ethernet MAC cores (free), why: readable implementations of the MII and RGMII interface and of frame handling, which is how the PHY boundary stops being a black box
- IEEE 1588 PTP overview material (free), why: time synchronization is what makes distributed measurement possible

**Study approach:** Ethernet is the usual way data leaves an instrument or a real-time node, so the knowledge here is about the boundary between your logic and a standard network. Understand the split between MAC and PHY and the interface between them, since that is where your design actually connects and where the common bring-up failures live, principally clocking and delay on the data lines. Understand the frame as the unit, with its preamble, addressing, length and the checksum that the receiver uses to discard corruption silently, which is why a working link can still drop traffic for reasons invisible from your side. Understand what offload means and why it is worth hardware: generating and checking UDP packets in fabric means data leaves the device without a processor or an operating system in the path, which removes both the latency and the jitter that software introduces. Understand why that distinction matters more than throughput for instrumentation. Understand precision time protocol as the mechanism that makes distributed measurement possible: by timestamping synchronization messages in hardware at the point they cross the interface, independent nodes can agree on time closely enough to correlate measurements taken in different places, and doing those timestamps in software destroys the accuracy the protocol exists to provide.

**Project:** Build a UDP transmitter in fabric that streams sampled data to a host with no processor in the path, and measure its sustained rate and packet loss. Then add hardware timestamping on transmit, and show the jitter difference between your hardware path and an equivalent software sender.

---

## PHASE 5: Embedded & software

### Microcontrollers & bare metal `critical`
**Prerequisites:** C++, Peripherals & low-speed buses
**Unlocks:** RTOS & real-time scheduling, Linux drivers & device tree, SoC FPGA & processor integration, Board bring-up & debug
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Making Embedded Systems, White, why: the best single introduction to the discipline
- ARM Cortex-M reference manuals (free), why: the interrupt controller and vector table, the memory map, and the systick and sleep modes
- Bare-metal programming guides (free), why: the startup sequence, the linker script and the vector table, which is what runs before main

**Study approach:** Working without a vendor abstraction layer is the point of this node, because the abstraction is exactly what hides the mechanisms you need to understand. Understand what runs before `main`: the reset vector, the startup code that initialises the stack pointer, copies initialized data from flash to RAM and zeroes the rest, and the linker script that decided where all of those regions are. A linker script is not boilerplate, it is the memory map, and most bare-metal confusion is really a misunderstanding of it. Understand interrupts properly: the vector table, how a handler is entered and what is saved, interrupt priorities, and why a handler must be short and must communicate with the main loop through something safe to touch concurrently, which is where `volatile` earns its place. Understand DMA as the way data moves without the processor, and the specific hazard it brings, that a buffer written by DMA and read through a cache needs explicit coherency handling. Understand register-level programming as reading a reference manual and writing bits, and understand clock and power configuration as the usual reason a peripheral is silent while the code looks correct.

**Project:** Bring up one microcontroller from reset with your own startup code and linker script, no vendor framework. Drive one peripheral through DMA with a completion interrupt, and measure the interrupt latency with a GPIO pin and a scope rather than trusting the datasheet figure.

### RTOS & real-time scheduling `critical`
**Prerequisites:** Microcontrollers & bare metal
**Unlocks:** Motor control & power electronics
**Tracks:** Real-time & instrumentation, Safety-critical hardware
**Resources:**
- **Best match:** FreeRTOS documentation and book (free), why: the scheduler and priorities, queues and semaphores, and priority inversion as the failure they prevent
- Zephyr documentation (free), why: the device driver model and Kconfig, which is how one codebase targets many boards
- Papers on rate-monotonic scheduling (free), why: the analysis is what makes the guarantee real

**Study approach:** Real-time means provably meeting a deadline, not being fast on average, and that distinction is the entire content of this node. Understand that the useful question is never the average response time but the worst case, because a control loop that meets its deadline 999 times in 1000 has failed. Understand preemptive priority scheduling as the mechanism, and understand the two classic failures it creates. Priority inversion: a high-priority task blocks on a resource held by a low-priority one, which is itself preempted by something in the middle, so the highest-priority task waits on the lowest, and priority inheritance exists to break that chain. Unbounded blocking: any operation without a bounded duration in a real-time path destroys the guarantee, which rules out dynamic allocation, unbounded loops and lock contention. Understand jitter as separate from latency, since a task that runs late but consistently can be compensated while one that varies cannot. Understand worst-case execution time as something measured and bounded rather than assumed, and understand rate-monotonic analysis as what converts a set of periods and execution times into a proof that the set is schedulable, which is what makes the guarantee real rather than hopeful.

**Project:** Build a two-rate control application, a fast loop and a slow one, on an RTOS. Measure the worst-case jitter of the fast loop over hours rather than seconds, then induce a priority inversion deliberately, show it in the measurement, and fix it with priority inheritance.

### Linux drivers & device tree `desirable`
**Prerequisites:** Microcontrollers & bare metal, Linux & CLI
**Tracks:** Real-time & instrumentation, ML accelerators
**Resources:**
- **Best match:** Book: Linux Device Drivers (free online)
- Device tree documentation (free), why: how hardware is described to a kernel as data rather than code, and how a binding maps a node to a driver
- Vendor SoC Linux guides (free), why: the boot chain from first-stage loader to kernel, and how fabric logic is exposed to Linux as a device-tree node

**Study approach:** This node is how custom FPGA logic becomes something an application can simply open and read, and the knowledge is about the kernel's boundaries. Understand the fundamental split, that kernel code can touch hardware and cannot be trusted to fail gracefully, so a driver's job is to expose a narrow, safe interface and get the policy decisions into userspace. Understand the device tree as the mechanism that keeps a driver generic: hardware is described to the kernel as data, a node naming a compatible string, register ranges and interrupts, and a binding is what matches that node to a driver, which is why adding your fabric peripheral is a data change rather than a code change. Understand memory mapping and the cache problem as the practical core: a buffer shared between fabric and a processor must be allocated so that both see the same bytes, which means either coherent allocation or explicit cache maintenance, and getting it wrong produces data that is stale rather than absent, which is far harder to diagnose. Understand the interface choices and their costs, since a character device read is simple and copies, while mapping a buffer into userspace avoids the copy and hands the application a loaded weapon.

**Project:** Write a platform driver for a block of your own fabric logic, matched through a device-tree node, exposing a DMA buffer to userspace. Measure the throughput of a copying read against a memory-mapped one, and demonstrate the stale-data failure you get from skipping cache maintenance.

### SoC FPGA & processor integration `critical`
**Prerequisites:** AXI & on-chip interconnect, Microcontrollers & bare metal
**Unlocks:** Hardware security & root of trust, Capstone: hardware system, Quantum control electronics
**Tracks:** All specializations
**Resources:**
- **Best match:** Vendor SoC technical reference manuals (free), why: the clock and reset tree, the interconnect and the memory map; these answer why a peripheral is silent when the code looks right
- LiteX and VexRiscv open SoC builder (free), why: it makes the partitioning question concrete and cheap to try

**Study approach:** This is the central judgement call of the whole path: given a processor and a fabric on one device, deciding what belongs in each. Understand the criteria honestly, because the instinct to put everything in hardware is usually wrong. Fabric wins where the work is a fixed, parallel, high-rate dataflow, or where timing must be deterministic to the cycle, or where the latency of a software round trip is itself the problem. Software wins everywhere else, which is most places: anything irregular, anything that changes often, anything a person must configure, and anything where development cost dominates. Understand that the decision is also a maintenance decision, since a change to fabric is a rebuild, a timing closure and a bitstream, while a change to software is a recompile. Understand the memory and interconnect model as what makes the partition work: the processor and the fabric share memory through an interconnect with its own latency and bandwidth, so a design that passes data back and forth frequently can be slower than either alternative alone. Understand the boot and configuration order, which part comes up first and loads the other, because that determines what can be updated in the field and what cannot. Understand a soft core as the option that makes the partition adjustable rather than fixed by the part you bought.

**Project:** Implement one algorithm three ways on the same device: entirely in software, entirely in fabric, and split with the dataflow in fabric and the control in software. Measure latency, throughput, resource use and the lines of code for each, then write the argument for which you would ship.

### Board bring-up & debug `critical`
**Prerequisites:** Microcontrollers & bare metal, Peripherals & low-speed buses
**Unlocks:** Functional safety hardware, Capstone: hardware system, Signal integrity & PCB, Power & thermal design, Production test & manufacturing
**Tracks:** All specializations
**Resources:**
- **Best match:** Vendor integrated logic analyser guides, ILA and SignalTap (free), why: instrumenting a live design, trigger conditions and capture depth, and the timing and area cost the probe itself adds
- Book: Debugging, Agans, why: the method generalises past hardware
- Buy the cheapest usable scope and use it

**Study approach:** This is the skill that is hardest to learn from a book, and the knowledge is a method rather than a set of facts. Understand that bring-up is bisection applied to a physical system: you establish what is known good, and you do not debug the design until power, clocks and configuration are proven, because every hour spent on logic that has no clock is wasted. So the order is fixed: supplies at the right voltages in the right sequence, then the clock present at the right frequency at the pin rather than at the oscillator, then configuration and JTAG reaching the device, then the design. Understand power sequencing as a real failure mode, since rails coming up in the wrong order can leave a device latched or damaged. Understand the instruments and what each one is for: a multimeter for presence, a scope for shape and timing, a logic analyser for protocol, and an integrated logic analyser inside the fabric for signals that exist nowhere else. Understand the cost of that last one, that it consumes resources and routing and can itself change timing, so what you observe is not quite the design you shipped. Understand the discipline that makes this bearable, changing one thing at a time and writing down what you observed, because a board that works after six simultaneous changes has taught you nothing.

**Project:** Bring up one board from powered off to a running design, keeping a written log: each measurement, each hypothesis, and what each change did. Capture the power sequence and the clock on a scope, then use an integrated logic analyser to find one bug that simulation did not show, and report its timing and resource cost.

---

## PHASE 6: Domain depth

### Digital signal processing `critical`
**Prerequisites:** Number formats & fixed point, SystemVerilog & VHDL
**Unlocks:** Data converters & signal chain, Software-defined radio & RF
**Tracks:** DSP & communications, Real-time & instrumentation
**Resources:**
- **Best match:** Book: Understanding Digital Signal Processing, Lyons, why: the clearest engineering treatment
- dspguide.com (free), why: convolution, the FFT and filter design explained with almost no formalism, as the plain-language companion to Lyons
- Vendor FIR and FFT IP guides (free), why: the throughput against resource trade in the configuration options, and the coefficient width and scaling choices that set the noise floor

**Study approach:** This node is signal processing implemented in fixed point on real hardware with real resource limits, rather than in floating point on a laptop, and the difference is the subject. Understand sampling and aliasing as the one error that cannot be undone: a component above half the sampling rate folds down and becomes indistinguishable from a real signal, so the anti-alias filter is analogue and lives before the converter, and no digital processing can recover from its absence. Understand the filter as a structure with a cost: an FIR filter is a chain of multiply-accumulate operations, so its length is directly multipliers and memory, it is unconditionally stable and its phase can be linear, while an IIR filter achieves a sharper response with far fewer coefficients but has feedback, which means stability depends on coefficient precision and quantizing a pole too coarsely can make it oscillate. Understand decimation and interpolation as the main efficiency instrument, since filtering at a lower rate costs proportionally less, and understand why the filter must come before the decimator rather than after. Understand the FFT as a restructuring of the same arithmetic that turns an order-N-squared computation into N log N, and understand its real hardware cost as memory and data ordering rather than multiplies.

**Project:** Implement a decimating FIR filter in fixed point on hardware, with the word lengths justified by a noise analysis rather than chosen by feel. Measure the achieved stopband attenuation against your design target and the resource use against a non-decimated equivalent, and show one coefficient quantization that breaks the response.

### Data converters & signal chain `critical`
**Prerequisites:** Electronics fundamentals, Digital signal processing
**Unlocks:** Motor control & power electronics, Quantum control electronics
**Tracks:** DSP & communications, Real-time & instrumentation
**Resources:**
- **Best match:** Analog Devices, The Data Conversion Handbook (free), why: the reference the industry actually uses
- Texas Instruments precision analogue application notes (free), why: noise budgets, reference and grounding choices, and anti-alias filtering, which decide the measurement before any sampling happens

**Study approach:** A measurement is won or lost before any digital processing happens, and this node is about that part. Understand that a converter's bit count is a marketing number and the effective number of bits is the measurement: noise, distortion and clock jitter all consume resolution, so a 16-bit part delivering 12 effective bits is ordinary rather than defective. Understand the noise budget as something you assemble, adding the quantization floor, the converter's own noise, the amplifier and reference noise and whatever the board couples in, because the dominant term is almost never the one you expected. Understand aperture jitter as the subtle killer at high frequencies: an uncertainty in when the sample was taken becomes an error in what was sampled, proportional to the signal's slew rate, which is why a fast input needs a clean sampling clock more than it needs more bits. Understand the reference as the definition of the measurement, since all accuracy is relative to it and its drift is your drift. Understand the analogue front end as part of the converter rather than something before it, with its anti-alias filtering, gain and impedance matching, and understand oversampling and averaging as the honest way to buy resolution with time.

**Project:** Characterise one real converter rather than trusting its datasheet: measure its effective number of bits with a coherent sine input and an FFT, then degrade the sampling clock deliberately and show the effective resolution falling. Write up the noise budget you assembled and which term dominated.

### Software-defined radio & RF `desirable`
**Prerequisites:** Digital signal processing, High-speed serial & PCIe
**Tracks:** DSP & communications
**Resources:**
- **Best match:** GNU Radio tutorials (free), why: building a receive chain block by block, so mixing, decimation and demodulation become something you have watched work
- Book: Software-Defined Radio for Engineers (free PDF), why: it is free, rigorous and paired with hardware exercises
- RTL-SDR for cheap experimentation

**Study approach:** This node is the bridge from digital design into communications, radar and test equipment, and it rests on one idea worth getting exactly right. Understand complex sampling: representing a real signal by its in-phase and quadrature components lets you distinguish frequencies above a reference from those below it, which a single real sample cannot do, and that is why every modern receiver is complex from the mixer onward. Understand mixing as multiplication that shifts a spectrum, so down-conversion moves a band to baseband and up-conversion moves it back, and understand the image that appears as a consequence and why filtering or quadrature balance is what suppresses it. Understand that modulation is a mapping from bits to points in the complex plane and demodulation is deciding which point was sent, which makes the receiver's real problems clear: carrier frequency and phase offset rotate the constellation, timing offset samples between symbols, and both must be tracked by loops rather than assumed. Understand the channelizer as the efficient structure for splitting a wide band into many narrow ones, reusing the decimation insight from the filtering node. Understand that the specification lives in the error vector magnitude and the bit error rate, not in whether a demodulator produces plausible output.

**Project:** Build a receive chain on hardware that down-converts, filters and demodulates one real signal, with carrier and timing recovery. Report the error vector magnitude and the bit error rate against signal-to-noise ratio, and show what each recovery loop contributes by disabling it.

### Motor control & power electronics `desirable`
**Prerequisites:** Data converters & signal chain, RTOS & real-time scheduling
**Tracks:** Real-time & instrumentation
**Resources:**
- **Best match:** Texas Instruments InstaSPIN and motor control application notes (free), why: the current and velocity loop structure, sensorless position estimation, and the PWM and ADC timing they depend on
- Vendor FOC reference designs (free), why: the current-loop timing, ADC sampling aligned to PWM, and the fault handling that protects the hardware
- See also the Control & Robotics roadmap

**Study approach:** This is where hardware meets the Control and Robotics path, and it is a common industrial entry point. Understand the physical premise: torque in a three-phase motor comes from the angle between the rotor's field and the stator's, so controlling torque means controlling current with knowledge of rotor position, which is what field-oriented control does by transforming the three phase currents into a rotating frame where torque and flux become two independent, controllable quantities. Understand why that transformation is the whole idea, since it turns a coupled nonlinear problem into two ordinary loops. Understand the timing as the hard engineering: the current loop must run fast relative to the electrical dynamics, and the current must be sampled at a specific instant within the PWM period when the switching noise has settled and the measurement is representative, which is why the converter trigger is tied to the PWM counter rather than to a timer. Understand the sensing chain and its limits, shunt or Hall measurement with its bandwidth and offset, and the encoder or sensorless estimate with its resolution and latency, because the loop can be no better than its feedback. Understand the protection paths as non-negotiable and as fast as possible: overcurrent must act in hardware, because software is too slow to save the transistors.

**Project:** Implement a current loop with field-oriented control for one real motor, with the converter sampling synchronized to the PWM. Measure the current loop's step response and the torque ripple, and verify the hardware overcurrent trip by inducing a fault and capturing how fast it acted.

### High-level synthesis `critical`
**Prerequisites:** FPGA toolchain & synthesis, C++
**Unlocks:** ML accelerator architecture
**Tracks:** ML accelerators
**Resources:**
- **Best match:** Vitis HLS user guide (free), why: the pragmas that decide pipelining, unrolling, array partitioning and interface type, which are where the performance actually comes from
- Book: Parallel Programming for FPGAs (free PDF), why: it teaches the mental model rather than the tool menus

**Study approach:** High-level synthesis is productive for dataflow and arithmetic and still requires you to know the hardware it produces, which is the tension this node teaches. Understand what the tool actually does: it schedules operations into clock cycles and allocates hardware to them, so your C++ is a specification of behaviour and the pragmas are how you constrain the schedule. Understand the pipeline directive as the central one, since requesting a new input every cycle forces the tool to find a schedule that achieves it, and the initiation interval it reports is the real performance number. Understand why it fails when it fails: a loop-carried dependency means this cycle's result is needed as next cycle's input, and no pragma removes it, so the fix is restructuring the algorithm. Understand array partitioning as the other recurring fix, because an array becomes a memory with a limited number of ports, so a loop body wanting four elements per cycle from a single-port memory cannot be pipelined until the array is split. Understand the interface pragmas as the decision about how the block connects, stream or memory-mapped, which determines whether it fits the surrounding system at all. Understand the honest limit: HLS is excellent for regular computation and poor for control-dominated logic, and its output needs the same timing closure as anything handwritten.

**Project:** Take one kernel from C++ to hardware with HLS, starting from the unoptimized version and reporting the initiation interval and resource use at each step. Include one case where a loop-carried dependency blocked pipelining and show the algorithmic change that fixed it, then compare the final result against a handwritten HDL version.

### ML accelerator architecture `critical`
**Prerequisites:** High-level synthesis, Number formats & fixed point
**Tracks:** ML accelerators
**Resources:**
- **Best match:** Book: Efficient Processing of Deep Neural Networks, Sze et al., why: the standard text on the subject
- FINN and hls4ml projects (free), why: how a trained network becomes a streaming dataflow architecture, and where the per-layer resource and throughput trade is made
- Google TPU architecture papers (free), why: the systolic-array datapath and the argument that on-chip memory and data reuse, not arithmetic, set the ceiling

**Study approach:** This node connects to the Edge AI path from the other side of the interface, and its central message is that arithmetic is the cheap part. Understand the memory argument first: a convolution or matrix multiply has far more arithmetic than data, so the question is whether that data can be reused on chip rather than refetched, and a design that refetches is bound by external bandwidth no matter how many multipliers it has. Understand the systolic array as the structural answer, where data flows through a grid of processing elements and each value is used by many of them as it passes, so one fetch feeds many operations. Understand dataflow as the choice you are actually making: which tensor stays resident while the others stream, weight-stationary or output-stationary and so on, because that choice determines the buffer sizes, the access pattern and the achievable reuse, and it is the architecture rather than a tuning knob. Understand the on-chip buffer hierarchy as the budget that constrains all of it, since tile sizes follow from buffer capacity. Understand utilization as the number that exposes the truth, because a design quoted in peak operations per second while running at a fraction of them is memory-starved, and understand that layer shapes vary so a fixed architecture is efficient on some and idle on others.

**Project:** Build an accelerator for one layer type with an explicit dataflow choice, and report its achieved utilization rather than its peak. Then measure the same design on two layer shapes with different arithmetic intensity, show the performance difference, and explain it from the buffer sizes and the data reuse your dataflow achieves.

### Quantization for hardware `desirable`
**Prerequisites:** Number formats & fixed point
**Tracks:** ML accelerators
**Resources:**
- **Best match:** Brevitas and FINN documentation (free), why: quantization-aware training at low bit widths, and how a quantized network becomes a streaming dataflow architecture
- MIT 6.5940 TinyML and Efficient AI Computing (free lectures), why: the pruning and quantization lectures are the relevant half
- Papers on QAT (free), why: how quantization is simulated during training and why straight-through estimation is needed to get a gradient through a rounding step

**Study approach:** This node is the bridge between a model trained in floating point and a datapath that can afford to run it. Understand quantization as a change of number system rather than a compression: a tensor becomes integers with a scale and a zero point, so arithmetic becomes integer arithmetic, which is what makes it cheap in fabric where a floating-point multiplier is expensive and an integer one is not. Understand that the scale must be derived from a range, which is why calibration data is needed and why a calibration set unlike production data produces a model that is fast and wrong. Understand per-channel against per-tensor scaling as the usual accuracy recovery, since one outlier channel otherwise forces a range that wastes resolution on all the others. Understand why training with quantization simulated in the loop beats quantizing afterwards at low bit widths, and understand the mechanism that makes it possible, that rounding has zero gradient almost everywhere so the gradient is passed straight through the rounding step during the backward pass. Understand the hardware payoff that justifies the effort, because narrower words mean smaller multipliers, less memory and less bandwidth, all at once, and understand binary and ternary networks as the extreme where multiplication disappears entirely and the accuracy cost becomes task-dependent.

**Project:** Take one small network from floating point to a low bit width twice, once calibrated after training and once with quantization simulated during training, and report the accuracy of each. Then implement the quantized datapath in fabric and report the resource and bandwidth saving against a wider version.

### Functional safety hardware `critical`
**Prerequisites:** Functional verification, Board bring-up & debug
**Unlocks:** DO-254 & certification flows
**Tracks:** Safety-critical hardware, Real-time & instrumentation
**Resources:**
- **Best match:** IEC 61508 and ISO 26262 overview material (free), why: how a safety integrity or automotive safety integrity level is assigned, and the hardware metrics that follow from it, namely diagnostic coverage and failure rates
- Book: Functional Safety for Embedded Systems, Hobbs
- Vendor safety-certified IP documentation (free), why: the safety manual and its assumptions of use, which state what the certification does and does not cover

**Study approach:** This node is what lets a device be trusted where a failure injures someone, and the knowledge is a way of arguing rather than a set of features. Understand that the argument starts from hazards rather than from design: you identify what harm the system could cause, how severe and how likely it is and how easily it could be avoided, and the required integrity level follows from that, which then determines the quantitative targets the hardware must meet. Understand the distinction between random and systematic failure, because it governs everything: a random hardware failure is a component breaking at an estimable rate and is handled with redundancy and diagnostics, while a systematic failure is a design being wrong and no amount of operating time reveals it, so it is handled with process, review and verification. Understand diagnostic coverage as the central metric, the fraction of dangerous failures a self-test actually detects, and understand the failure-mode analysis that produces it as an exercise in asking what each part does when it breaks. Understand the standard mitigations and their costs: redundancy with comparison, lockstep execution, and a defined safe state the system falls into when a check fails, which is usually the cheapest real protection. Understand that a vendor's certified IP comes with assumptions of use, and that violating one voids the certification you paid for.

**Project:** Write a failure-mode analysis for one hardware function: each component, its failure modes, the diagnostic that detects each one, and the resulting coverage. Then implement the diagnostics and the safe state in fabric, and show by fault injection that each one detects what you claimed and acts within the time you specified.

### DO-254 & certification flows `desirable`
**Prerequisites:** Functional safety hardware
**Tracks:** Safety-critical hardware
**Resources:**
- **Best match:** RTCA DO-254 summaries and vendor certification kits (free), why: the design assurance levels and the required life-cycle data, which is what the certification evidence actually consists of
- Published DO-254 process case studies (free), why: how a real programme organized its requirements, traceability and verification evidence, which the standard's summaries never show

**Study approach:** Airborne electronic hardware assurance is slow, documentation-heavy and a durable niche, and understanding why it is durable is part of the knowledge. Understand that the design assurance level is assigned from the consequence of failure at aircraft level, and that it determines the rigour of the process rather than the design itself, which is the thing newcomers find hardest to accept: two identical devices can require vastly different evidence depending on what they are used for. Understand traceability as the deliverable, where every requirement maps to a design element, to the verification that exercises it and to the result, in both directions, so an untraceable requirement and an unjustified piece of logic are both findings. Understand that at the highest levels the evidence demands independence, meaning the person who verifies is not the person who designed, which shapes how teams are organized. Understand elemental analysis and the obligation to show that verification actually reached the implementation rather than merely satisfying the requirements on paper. Understand tool qualification, that if you rely on a tool's output without reviewing it then the tool itself needs assurance, which is why certification kits exist and why changing tool versions mid-programme is expensive. Understand that the moat is the experience of having produced acceptable evidence once.

**Project:** Take one small block you have already built and produce a traceable assurance package for it: requirements, design references, verification cases, results and a matrix linking them in both directions. Then identify its gaps honestly against a published case study and state what a real programme would require that you did not do.

### Hardware security & root of trust `desirable`
**Prerequisites:** SoC FPGA & processor integration
**Tracks:** Safety-critical hardware
**Resources:**
- **Best match:** Vendor secure boot and bitstream security guides (free), why: the chain of trust from an immutable boot ROM upward, where keys are stored, and what bitstream encryption does and does not prevent
- ChipWhisperer side-channel platform (free tooling), why: the attacks become concrete rather than theoretical
- See also the AI Security roadmap

**Study approach:** This node connects to the AI Security path from the silicon end, and the framing that matters is that security here is about what an attacker with physical access can do. Understand the root of trust as the one thing that cannot be updated: an immutable boot ROM verifies the next stage's signature before running it, and that stage verifies the next, so trust extends upward from something unchangeable, and a chain with one unverified link provides no assurance at all. Understand where keys live and why that is the hard problem, since a key in external flash is readable and a key in on-chip fuses or a physical unclonable function is not, and understand that a PUF derives a device-unique value from manufacturing variation rather than storing one. Understand bitstream encryption and authentication as two separate properties: encryption stops someone reading your design, authentication stops someone running theirs on your device, and only the second protects the system's behaviour. Understand side-channel attacks as the reason cryptographic correctness is insufficient, because power consumption and timing leak information about the key being processed, and understand fault injection through voltage or clock glitching as the complementary attack that makes a device skip the check rather than pass it. Understand that these attacks are practical with modest equipment, which is what the tooling demonstrates.

**Project:** Implement a verified boot chain on an SoC FPGA with bitstream authentication enabled, and document what each stage verifies. Then mount one power-analysis or glitching attack against an unprotected implementation of a cryptographic operation, show that it recovers the key or skips the check, and implement one countermeasure and remeasure.

---

## PHASE 7: Production & capstone

### Capstone: hardware system `critical`
**Prerequisites:** SoC FPGA & processor integration, Timing closure & STA, Board bring-up & debug
**Unlocks:** Technical leadership
**Tracks:** All specializations
**Resources:**
- **Best match:** No course. Ship it on a real board and publish the numbers: resource use, achieved clock, measured latency and throughput, and what failed first

**Study approach:** A capstone teaches what no single course can: how the parts interact, and which of your beliefs about them were wrong. Understand that the specification comes first and in writing, because a design with no stated target cannot be judged, and committing to a clock rate, a latency, a resource budget and a set of functional requirements before building is what makes the result a result rather than a demonstration. Understand that the integration is where the unexpected lives: blocks that each met timing in isolation can fail together, a clock crossing between two correct modules is a new risk, and the resource total is not the sum you estimated. Understand that measurement on hardware is the only acceptable evidence, and that the numbers which matter are resource use against the device, achieved clock against your target, and measured latency and throughput against your specification, not simulated figures. Understand why reporting what failed first is the most valuable part of the write-up: it is the only section that proves you took the design to real silicon rather than to a simulator, and it is the part a hiring engineer reads. Reuse one of your earlier designs as the core so the quarter goes into integration and measurement rather than into starting again.

**Project:** Ship one complete design on a real board: written specification first, then simulation, verification with coverage, timing closure with the final report, bring-up, and measurement against every number you committed to. Publish the repository, the specification, the resource and timing reports, the measured latency and throughput, and an honest account of what failed first and why.

### Technical leadership `desirable`
**Prerequisites:** Capstone: hardware system
**Tracks:** All specializations
**Resources:**
- **Best match:** Book: Staff Engineer, Will Larson, free web edition at staffeng.com, why: how influence works without authority, and why writing is the instrument that scales it
- Write specifications and design reviews, why: in hardware the specification is the deliverable

**Study approach:** Technical leadership here is influence without authority, with one feature specific to hardware: the specification is the deliverable, so the writing is the work rather than a report about it. Understand that a specification is a contract between people who will not talk again for months, which is why ambiguity in it is expensive in a way that ambiguity in a design document is not, and why the test of a specification is whether someone else builds the right thing from it unaided. Understand the design review as the field's main quality instrument, and understand what makes one useful: reviewing against stated requirements rather than against taste, and inviting the verification and board engineers early, because the cheapest time to find an untestable requirement is before it is implemented. Understand the hardware and software boundary as the negotiation you will spend most of your political energy on, since the two sides have different iteration costs, different vocabularies and different ideas of what is easy, and the engineer who can argue both sides decides the architecture. Understand that saying no to a feature that should be software, or to a request for fabric where a processor would do, is the specific leadership skill this field needs most.

**Project:** Write a specification for a block you will not implement yourself, hand it to someone else, and compare what they built against what you meant. Then run a documented design review of someone else's work against its requirements, and publish what the specification failed to say.

### Signal integrity & PCB `desirable`
**Prerequisites:** Board bring-up & debug, High-speed serial & PCIe
**Tracks:** Real-time & instrumentation, DSP & communications
**Resources:**
- **Best match:** Book: High-Speed Digital Design, Johnson & Graham (paid), why: the classic and still correct
- KiCad (free)
- Vendor PCB layout guidelines for your device (free), why: stack-up, decoupling placement and the length and impedance rules for the memory and transceiver interfaces; these are requirements, not suggestions

**Study approach:** This is the point at which a design stops being logic and becomes physics, usually discovered the hard way, and the knowledge is a small set of ideas with large consequences. Understand that every signal travels as a wave along a transmission line formed by the trace and its reference plane, so impedance is a property of that geometry and a discontinuity in it, a connector, a via, a missing plane, causes a reflection that looks like ringing or a false edge. Understand that the return current is the half everyone forgets: it flows in the reference plane directly beneath the trace, so a split or a gap in that plane forces it to detour, which creates both radiated emission and crosstalk, and is the real reason layer stack-up and plane integrity are design rules rather than preferences. Understand crosstalk as coupling between adjacent traces that grows with parallel length and shrinks with separation, which is why spacing rules exist on fast buses. Understand that the frequency that matters is set by the edge rate rather than the clock, so a slow signal with a fast edge radiates. Understand electromagnetic compatibility as a pass-or-fail gate late in a project, which is why these decisions cannot be deferred.

**Project:** Lay out one small board with a controlled-impedance differential pair and a deliberately compromised trace, one crossing a plane split or lacking termination. Measure both with a scope, show the reflection and the degraded eye on the bad one, and write up the layout rule each result demonstrates.

### Power & thermal design `desirable`
**Prerequisites:** Electronics fundamentals, Board bring-up & debug
**Tracks:** Real-time & instrumentation
**Resources:**
- **Best match:** Vendor power estimation tools and guides (free), why: static against dynamic power, how switching activity drives the estimate, and why an early estimate from a simulation beats a measurement that arrives after the board is built
- Analog Devices power management application notes (free), why: regulator selection and sequencing, decoupling and the return-path thinking behind a stable supply

**Study approach:** FPGAs and accelerators are power-limited long before they are area-limited, which shapes what a design can be, and this node is about that constraint. Understand where the power goes: static leakage that is paid whenever the device is on and rises with temperature, and dynamic power proportional to switching activity, capacitance and the square of the voltage, which is why activity and clock rate are the levers a designer actually controls. Understand that this makes power a design decision rather than a board decision, since clock gating, reducing data movement and lowering the toggle rate change it more than any regulator choice. Understand the supply as a network with impedance rather than a source of voltage: a current step demands charge faster than a regulator can respond, so local capacitance supplies it, and decoupling is sized and placed for that transient rather than chosen by habit. Understand sequencing as a correctness requirement, because rails coming up in the wrong order can latch or damage a device. Understand the thermal path as the real limit, from junction through package to ambient, where every interface has a resistance and the junction temperature is what derates the part or shortens its life, and understand that leakage rising with temperature makes this a loop that can run away.

**Project:** Estimate one design's power from switching activity before building it, then measure the actual rail currents and compare. Run the device to thermal equilibrium under load, record the junction temperature and the achieved clock, then reduce the activity through clock gating and show the change in both.

### Production test & manufacturing `desirable`
**Prerequisites:** Board bring-up & debug
**Tracks:** Real-time & instrumentation, Safety-critical hardware
**Resources:**
- **Best match:** IEEE 1149.1 JTAG boundary scan overview (free), why: the TAP state machine and the boundary-scan register, which is how a populated board is tested for shorts and opens without a single probe
- Published design-for-test guidance (free), why: test points, scan insertion and built-in self-test, and the argument that testability is a design decision rather than a manufacturing one

**Study approach:** This node is the difference between one working board and ten thousand of them, and the shift in thinking is from does it work to how do I know this one works. Understand that manufacturing failures are different from design failures: the design is already proven, so what you are hunting is an open joint, a short, a missing or wrong component and a part damaged in assembly, and those are found by structural tests rather than functional ones. Understand boundary scan as the instrument for exactly that, where a shift register at every pin lets a tester drive and observe connections with no probe touching the board, which is why it is the standard answer for dense assemblies. Understand built-in self-test as the complement, logic the device runs on itself at power-up, and understand its real value in the field rather than in the factory. Understand that test coverage and test time are in direct tension with cost, since every second on the fixture is money at volume, so the question is which tests buy the most confidence per second. Understand calibration as the recognition that some parameters cannot be made identical and must instead be measured per unit and stored, which is how an instrument achieves an accuracy its components do not have. Understand field firmware update as a reliability problem, where the update must be interruptible without bricking the unit.

**Project:** Write a production test for one board: a boundary-scan check for connectivity, a self-test for the device, a per-unit calibration whose values are stored on the board, and a pass-or-fail report. Report the test time and state which failure modes it catches and which it cannot.

### ASIC flow & open silicon `desirable`
**Prerequisites:** Timing closure & STA, Functional verification
**Tracks:** ML accelerators, DSP & communications
**Resources:**
- **Best match:** LibreLane, the maintained OpenLane successor, with the Sky130 open PDK (free), why: a genuine tapeout flow you can run at home
- Tiny Tapeout shuttles (paid), why: with Efabless gone since 2025, this is the affordable path to real silicon
- Zero to ASIC course (paid), why: a guided route through a real tapeout flow, for when the open tooling alone leaves too many gaps

**Study approach:** The ASIC flow has a different economics from FPGA, with far higher stakes per mistake, and understanding the difference is the point. Understand what changes when the fabric is no longer fixed: you choose the clock tree, the power distribution and the physical arrangement, you gain enormous efficiency in power and area, and you lose the ability to fix anything after manufacture, which is why verification effort rises sharply rather than proportionally. Understand the flow's stages and what each enforces: synthesis to standard cells, placement, clock-tree synthesis, routing, then the physical checks where design-rule checking asks whether the layout can be manufactured and layout-versus-schematic asks whether what you drew is what you designed, both of which are pass-or-fail gates with no partial credit. Understand that timing must now be closed across process, voltage and temperature corners rather than one, because a part that works at nominal and fails cold is a dead part. Understand the cost structure as the thing that drives every decision, since mask and shuttle costs mean a respin is measured in months and serious money, which is why sign-off is a formal process rather than a judgement call. Understand the open shuttle programmes as what makes a real tapeout affordable enough to learn from.

**Project:** Take one small block through an open standard-cell flow to a clean result: synthesized, placed, routed, with design-rule and layout-versus-schematic checks passing and timing closed across corners. Report area, power and achieved clock against the same block's FPGA implementation, and submit it to a shuttle if the budget allows.

### Quantum control electronics `frontier`
**Prerequisites:** Data converters & signal chain, SoC FPGA & processor integration
**Tracks:** Real-time & instrumentation (elective)
**Resources:**
- **Best match:** QICK open-source qubit controller on RFSoC (free), why: a working firmware and software stack for pulse generation and readout, which shows what sub-microsecond feedback actually costs in fabric
- Krantz et al., A Quantum Engineer's Guide to Superconducting Qubits (free arXiv), why: the control and readout sections, which state the pulse shapes, timing and signal levels your electronics must actually deliver
- See also the Quantum AI roadmap

**Study approach:** The Quantum AI path treats this as its highest-moat entry point precisely because almost nobody arrives with these skills, and this path is the ramp to it. Understand the control problem as a latency budget rather than a signal-generation problem: a qubit holds its state for a limited time, so any operation that depends on a measurement result, active reset or an error-correction decision, must complete inside that window, which means the decision has to be made in fabric rather than on a host, and that constraint is what makes this hardware work rather than software work. Understand the signal chain in both directions: a shaped baseband pulse is generated, up-converted and delivered into a cryogenic environment, and a returning readout signal is amplified, down-converted and integrated into a discrimination decision, so this is the converter and RF node's material applied under a hard deadline. Understand why amplitude and timing accuracy translate directly into gate fidelity, which is why calibration is continuous rather than a one-off. Understand the cryogenic constraint as an engineering boundary, since every line into the refrigerator carries heat and there are only so many, which is why multiplexed readout matters. Understand that this is marked frontier honestly: the field is small, the employers are few and the horizon is long.

**Project:** Build a pulse generation and readout path on an RFSoC or equivalent, with the feedback decision made in fabric, and measure the round-trip latency from the end of acquisition to the start of the conditional pulse. Report it against the coherence time you are targeting, and characterise your pulse amplitude and timing accuracy.

---

## Parallel Track: English Proficiency (Highest ROI)

Hardware documentation is not translated. The datasheet, the reference manual, the application note, the errata sheet and the standard are English-first, and they are the primary sources: there is no secondary literature that covers a specific part's timing diagram or a specific device's clocking restrictions. Reading them precisely is therefore a technical skill rather than a convenience, and the precision matters more here than on a software path because these documents are contracts. An erratum misread is a board respin.

Reading is the low bar. The return comes from writing, because in hardware the specification is the deliverable: a block is reviewed against a written document, implemented by someone who may never speak to you, and verified against what the document says rather than what you meant. An engineer who cannot write a specification another engineer can build from stays junior whatever their design skill.

**Practice:** read one application note a week end to end and write down what it constrains and what it leaves to you; write every specification, design review and bring-up log in English; and publish one measured result a quarter. The habit matters more than the audience.

---

## Critical Path (Summary)

The spine, in dependency order. Every specialization runs through all of it:

**Electronics fundamentals → Digital logic design → Sequential logic & FSMs → SystemVerilog & VHDL → Simulation & testbenches → Functional verification → FPGA toolchain & synthesis → Timing closure & STA → AXI & on-chip interconnect → SoC FPGA & processor integration → Capstone: hardware system → Technical leadership**

With C++, Python, Linux and Git as ungated starting nodes; Number formats & fixed point and Computer architecture alongside the logic courses in Phase 1; Clock domains & CDC beside timing closure in Phase 3; and Peripherals, Microcontrollers and Board bring-up & debug carrying the physical half of Phases 4 and 5.

Three observations about this ordering. Verification is a critical spine node in Phase 2, before the FPGA toolchain, because the habit of checking a design against an independent model has to exist before there is a bitstream to hide behind; teams that reverse this order debug on hardware, which is the slowest place to do it. Timing closure and clock-domain crossing sit together in Phase 3 rather than near the end, because they are not finishing touches: they are the two reasons a design that simulates does not run, and a reader who meets them late has already built habits that will have to be unlearned. Board bring-up is a spine node rather than a specialization, because every track eventually has to make a physical board work, and it is the skill that is hardest to acquire from reading.

---

## Specializations, Phase by Phase

Each specialization is the spine plus the branch courses below. Phases 0 and 1 are spine only, so every specialization shares them, and Phase 6 is branch only, so it is where the tracks diverge most.

| Phase | Spine (every specialization) | ML accelerators | Real-time & instrumentation | DSP & communications | Safety-critical hardware |
|---|---|---|---|---|---|
| P0 | Electronics fundamentals, C++, Python, Linux & CLI, Git & version control |  |  |  |  |
| P1 | Digital logic design, Sequential logic & FSMs, Number formats & fixed point, Computer architecture |  |  |  |  |
| P2 | SystemVerilog & VHDL, Simulation & testbenches, Functional verification | Python-based verification |  | Python-based verification |  |
| P3 | FPGA toolchain & synthesis, Timing closure & STA, Clock domains & CDC | Floorplanning & resource use |  | Floorplanning & resource use |  |
| P4 | AXI & on-chip interconnect, Peripherals & low-speed buses | External memory & DDR, High-speed serial & PCIe | High-speed serial & PCIe, Ethernet & network offload | External memory & DDR, High-speed serial & PCIe, Ethernet & network offload |  |
| P5 | Microcontrollers & bare metal, SoC FPGA & processor integration, Board bring-up & debug | Linux drivers & device tree | RTOS & real-time scheduling, Linux drivers & device tree |  | RTOS & real-time scheduling |
| P6 |  | High-level synthesis, ML accelerator architecture, Quantization for hardware | Digital signal processing, Data converters & signal chain, Motor control & power electronics, Functional safety hardware | Digital signal processing, Data converters & signal chain, Software-defined radio & RF | Functional safety hardware, DO-254 & certification flows, Hardware security & root of trust |
| P7 | Capstone: hardware system, Technical leadership | ASIC flow & open silicon | Signal integrity & PCB, Power & thermal design, Production test & manufacturing | Signal integrity & PCB, ASIC flow & open silicon | Production test & manufacturing |

English working fluency is an elective open to every specialization, and *Quantum control electronics* is a frontier elective on the Real-time track; both sit outside the 2-to-5-courses-per-phase count. Several courses are shared by more than one specialization: *High-speed serial & PCIe* by three, *Python-based verification*, *Floorplanning & resource use*, *External memory & DDR*, *Ethernet & network offload*, *Linux drivers & device tree*, *RTOS & real-time scheduling*, *Digital signal processing*, *Data converters & signal chain*, *Functional safety hardware*, *Signal integrity & PCB*, *Production test & manufacturing* and *ASIC flow & open silicon* by two. That overlap is real rather than an artifact: the four tracks are different applications of one body of digital design.

---

## Books, Essential Reading

Every book here is already named in a node. In priority order:

| # | Book | Phase | Priority | Cost | Why |
|---|------|-------|----------|------|-----|
| 1 | **Digital Design and Computer Architecture**, Harris & Harris | P1 | `critical` | (paid) | Gates to a working CPU in one volume, and the sequential and architecture chapters serve three nodes. The single most useful book on this path. |
| 2 | **SystemVerilog for Design**, Sutherland | P2 | `critical` | (paid) | The synthesizable subset, and what each construct infers. |
| 3 | **SystemVerilog for Verification**, Spear | P2 | `critical` | (paid) | Constrained-random stimulus, coverage and the layered testbench. Verification is more than half the effort, and this is its text. |
| 4 | **Constraining Designs for Synthesis and Timing Analysis**, Gangadharan | P3 | `critical` | (paid) | Timing constraints treated as the subject they are rather than as tool trivia. |
| 5 | **Making Embedded Systems**, White | P5 | `critical` | (paid) | The best single introduction to embedded discipline, read before any vendor framework. |
| 6 | **The Art of Electronics**, Horowitz & Hill | P0 | `critical` | (paid) | The reference practising engineers keep on the desk. A lookup book, not a read-through. |
| 7 | **High-Speed Digital Design**, Johnson & Graham | P4, P7 | `desirable` | (paid) | Transmission lines, return paths and crosstalk. Serves both the high-speed serial and the signal-integrity nodes. |
| 8 | **Understanding Digital Signal Processing**, Lyons | P1, P6 | `critical` | (paid) | DSP and Real-time tracks. The clearest engineering treatment, and its fixed-point chapters serve Phase 1. |
| 9 | **Efficient Processing of Deep Neural Networks**, Sze et al. | P6 | `critical` | (paid) | ML accelerators track. The standard text on dataflow and the memory argument. |
| 10 | **Functional Safety for Embedded Systems**, Hobbs | P6 | `critical` | (paid) | Safety track. How safety requirements become real engineering. |
| 11 | **Parallel Programming for FPGAs** | P6 | `critical` | (free) | ML accelerators track. Free PDF, and it teaches the mental model rather than the tool menus. |
| 12 | **Software-Defined Radio for Engineers** | P6 | `desirable` | (free) | DSP track. Free, rigorous and paired with hardware exercises. |
| 13 | **Linux Device Drivers** | P5 | `desirable` | (free) | Free online. For the tracks that expose fabric to an application. |
| 14 | **The Data Conversion Handbook**, Analog Devices | P6 | `critical` | (free) | DSP and Real-time tracks. Free, and the reference the industry actually uses. |
| 15 | **Debugging**, Agans | P5 | `desirable` | (paid) | Short, and its method generalises past hardware. Read it before your first bring-up, not after. |
| 16 | **Computer Architecture**, Hennessy & Patterson | P1 | `desirable` | (paid) | Depth beyond Harris & Harris, and the quantitative framing behind the roofline argument. |
| 17 | **Digital Design Principles**, Wakerly | P1 | `desirable` | (paid) | An alternative to Harris & Harris if its treatment of sequential logic suits you better. |
| 18 | **A Tour of C++**, Stroustrup | P0 | `desirable` | (paid) | Modern C++ quickly, for the HLS and firmware nodes. |
| 19 | **Staff Engineer**, Will Larson | P7 | `desirable` | (free; paid print) | Free at staffeng.com. For the individual-contributor leadership path. |

---

## Certifications

Blunt assessment: certifications carry less weight on this path than on any other on this site, and chasing them is close to wasted effort. Hiring here is done on evidence of designs that worked. The two large FPGA vendors run training and certification programmes around their own toolchains, and the only honest reasons to take one are that an employer is paying, that a customer or a programme requires it, or that the structured course gets you through a tool you were avoiding. No credential on this path substitutes for a measured design.

What substitutes for a credential, in every specialization: a public repository with a written specification, a verification environment with closed coverage, the final timing report, and measurements taken on a real board, resource use, achieved clock, latency and throughput, next to the targets you committed to before building. Add, for the safety track, one traceable assurance package; for the accelerator track, achieved utilization rather than peak numbers; for the DSP track, an error vector magnitude or bit error rate against signal-to-noise ratio; and for the real-time track, a worst-case jitter measurement taken over hours.

The adjacent credentials that do carry weight are not FPGA ones. A functional-safety qualification matters in the safety track, and English certification matters for international work, which is why it is a node rather than an aside.

---

## Cost & Time

**Money, and this is the one path on this site you cannot study on a laptop alone.** Most of the learning material is free: the open toolchain, the simulators, HDLBits, nandgame, the vendor documentation and user guides, dspguide, the free PDFs listed above, and the vendor tools themselves in their no-cost editions, which cover the small and mid-range devices this roadmap targets. The spending is on hardware, and it comes in three tiers. The entry tier is a low-cost FPGA development board and a cheap logic analyser, which together get you through Phase 3. The second tier arrives with Phase 4 and 5 and is a board with external memory, a transceiver and a processor on it, plus real sensors and converters for the instrumentation and DSP tracks. The third tier is test equipment, and an oscilloscope is the expensive item; buy the cheapest one you can actually use rather than waiting for a better one, because no scope at all is what blocks bring-up. Books are the other real cost, since several of the core texts are paid and not available free. Check current prices before buying anything: board, tool and book prices move, and the vendor tool licensing terms for larger devices change between releases.

**Buy late and buy once per phase.** The common and expensive mistake is an advanced board bought in Phase 0 out of enthusiasm and used as a paperweight until Phase 5, by which time a better one exists. The second mistake is an ASIC shuttle submission before the FPGA work is solid.

**Time.** Each phase is a quarter of consistent part-time study, so one specialization from Phase 0 to Phase 7 is eight quarters, about two years. An electronics, electrical or computer engineering graduate will move through Phase 0 and much of Phase 1 quickly, since that material is their degree; a software engineer will not, and should expect Phase 0 and Phase 1 to take their full time because the physical intuitions are genuinely new. The capstone is a quarter of its own and is not a weekend.

**Where the time actually goes.** Expect less of it on writing HDL than you would guess, and far more on verification, on timing closure, and on bring-up. On a real project verification exceeds design effort, and a single clock-domain or timing problem can consume a week. Tool runtimes are their own tax: a synthesis and implementation run for a mid-size design takes long enough that the discipline of simulating first is economic rather than virtuous.

---

## Sources & Notes

Resource names, tool editions and prices change often. Verify before paying for anything. Where a specific course or document title could not be confirmed, this document names the provider and the topic rather than inventing a title, which is why several resources read as "vendor" plus a subject: the vendors rename and reorganise these documents between tool releases, and the topic is stable while the title is not.

**How this path was created.** Before it existed, the site held a handful of hardware-adjacent nodes scattered across three graphs and none of them taught digital design. What the [Edge AI roadmap](#/roadmap) calls hardware is software running on somebody else's silicon; the [Control & Robotics roadmap](#/control-roadmap) has one embedded node; the [Quantum AI roadmap](#/quantum-roadmap) has two and treats them as its highest-moat entry point precisely because almost nobody arrives with them. HDL, timing closure, verification and board bring-up were taught nowhere and sit on no other path's spine, which is why this is a path rather than a specialization. It is also a supplier to those three: accelerators feed Edge AI, real-time execution feeds Control, and the converter and RF signal chain feeds the Quantum hardware track. Those cross-links are named inside the nodes rather than duplicated as courses, which is why three resources here are a pointer to another roadmap on this site.

**Facts checked on 2026-08-29**, when this path's course resources were last verified. These move; re-check before relying on one.
- **Open silicon:** LibreLane is the maintained successor to OpenLane, and the Sky130 open process design kit is the usual target. Efabless, which ran the best-known free shuttle programme, has been gone since 2025, so Tiny Tapeout is the affordable route to real silicon and it is paid.
- **Vendor tools:** the no-cost editions of the major vendor suites cover the small and mid-range devices this roadmap targets; larger devices need a paid licence, and which devices fall on which side changes between releases.
- **Standards named in nodes:** IEC 61508 and ISO 26262 for functional safety, RTCA DO-254 for airborne electronic hardware, IEEE 1149.1 for boundary scan, IEEE 1588 for precision time protocol, and the ARM AMBA AXI specification. Standards bodies revise these on long cycles; the editions were not re-verified for this document.
- **Qiskit and the quantum tooling** named in *Quantum control electronics* are covered, with their own dated facts, in the Quantum AI roadmap.

**Demand evidence.** Every figure in the Executive Summary is recorded, with its source, edition, horizon and geography, in `.claude/skills/career-roadmaps/references/market-claims-ledger.md`, where the rows for this path are L03, L12, L25, L38 and L39, plus L42 for the Chilean figures and L16 for the Cedefop EU projection. Every row was read on 2026-09-26; the BLS projections themselves are the 2025 to 2035 round released on 27 August 2026. The ledger's rule that contradicting signals are cited on both sides or not at all is why the McKinsey posting decline appears in the same block as the semiconductor shortfall projections: the supply side and the posting side disagree, both are in the record, and neither cancels the other.
