#!/usr/bin/env python3
"""Check that every course names the knowledge rather than just the reading.

Two rules from .claude/skills/career-roadmaps/SKILL.md, over all eight roadmap
documents and all eight curriculum graphs:

  * a resource that points at a body of material (documentation, a user guide,
    a reference, a labs site) must carry a clause saying which concepts to take
    from it;
  * `Study approach` must state the concepts the course rests on, not a reading
    order, and must not tell the reader to go somewhere instead of telling them
    what to learn.

Run from the repo root:

    python3 tools/check_course_knowledge.py

Prints a per-file count of nodes that still fail either rule. This is advisory:
the heuristics flag shape, not substance, so read what it points at.
"""
import pathlib, re, sys, json

ROOT = pathlib.Path(__file__).resolve().parent.parent

MD = ["final_roadmap_reference.md","applied_ai_roadmap.md","control_robotics_roadmap.md",
      "ai_security_roadmap.md","quantum_ai_roadmap.md","fintech_roadmap.md",
      "data_platform_roadmap.md","fpga_hardware_roadmap.md"]
JS = ["edge_ai_malla_v3.js","applied_ai_malla.js","fpga_hardware_malla.js","control_robotics_malla.js",
      "ai_security_malla.js","quantum_ai_malla.js","fintech_malla.js","data_platform_malla.js"]

# A resource that is a pointer to a body of material rather than a finite,
# self-describing unit. Reading one of these without being told which concepts
# to extract is the problem the user reported.
POINTER = re.compile(r"\b(docs?|documentation|user guides?|getting started|tutorials?"
                     r"|playground|references?|handbooks?|wikis?|cookbooks?|examples?|blogs?"
                     r"|sites?|portals?|archives?|librar(?:y|ies)|specs?|specifications?"
                     r"|standards?|whitepapers?|websites?|web|guides?|guidance"
                     r"|application notes?|notes?|cores?|kits?|material|papers?"
                     r"|projects?|posts?|manuals?|lectures?|courses?|summaries|summary"
                     r"|writeups?|advisories|captures?|labs?|series)\b", re.I)
# A clause that says what to take from it: an explicit why/what marker, or a
# colon followed by a real descriptive phrase rather than a bare label.
HAS_WHY = re.compile(r",\s*(why|what|read|focus|take|use it for)\s*:", re.I)
COLON_DESC = re.compile(r":\s+(?:[^\s:]+\s+){5,}", re.I)
# Practice items that merely contain a flagged word; not pointers to material.
NOT_POINTER = re.compile(r"^(practice|write|publish|attend|speak|build|contribute|ship|no course|no formal)", re.I)
VAGUE = re.compile(r"\b(visit|see the docs|read the documentation|follow the guide"
                   r"|follow this|browse|skim through|go through the)\b", re.I)
# Study approach that just sequences resources.
RECIPE = re.compile(r"\b(cover to cover|cover-to-cover|end-to-end|end to end|in a day"
                    r"|in one day|then\s+[A-Z]|first\.|as the on-ramp|for structure"
                    r"|for depth|modules in|playlist|chapters)\b")

def strip_md_links(s):
    return re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)

def audit_md(path):
    txt = (ROOT/path).read_text()
    out = []
    # split into node blocks
    blocks = re.split(r"(?m)^### ", txt)[1:]
    for b in blocks:
        name = b.split("\n",1)[0].strip()
        res_lines = []
        in_res = False
        study = ""
        for line in b.split("\n"):
            if line.startswith("**Resources:"): in_res = True; continue
            if line.startswith("**"):
                in_res = False
                if line.startswith("**Study approach:"):
                    study = line[len("**Study approach:**"):].strip()
                continue
            if in_res and line.strip().startswith("- "):
                res_lines.append(line.strip()[2:])
        bad_res = []
        for r in res_lines:
            r2 = strip_md_links(r)
            ok = HAS_WHY.search(r2) or COLON_DESC.search(r2) or NOT_POINTER.search(r2.lstrip("*- ").replace("Best match:","").strip())
            if VAGUE.search(r2) or (POINTER.search(r2) and not ok):
                bad_res.append(r)
        words = len(study.split())
        # A thin study approach, or one that reads as a reading order rather than
        # a statement of the knowledge. Long paragraphs that name a resource in
        # passing are fine; short ones that do nothing else are not.
        bad_study = bool(study) and (words < 55 or bool(VAGUE.search(study))
                                     or (words < 90 and bool(RECIPE.search(strip_md_links(study)))))
        if not re.search(r"`(critical|desirable|frontier)`", name):
            continue
        if bad_res or bad_study:
            out.append({"node":name,"bad_res":bad_res,"recipe":bad_study,"no_study":not study})
    return out

def audit_js(path):
    txt = (ROOT/path).read_text()
    i = txt.index("export const COURSES")
    txt = txt[i:]
    out = []
    for m in re.finditer(r'\{\s*id:\s*"([^"]+)",(.*?)res:\s*"((?:[^"\\]|\\.)*)"', txt, re.S):
        cid = m.group(1)
        bad = []
        for r in m.group(3).split("|"):
            r = r.strip()
            if not r: continue
            r2 = strip_md_links(r)
            ok = HAS_WHY.search(r2) or COLON_DESC.search(r2) or NOT_POINTER.search(r2)
            if VAGUE.search(r2) or (POINTER.search(r2) and not ok):
                bad.append(r)
        if bad: out.append({"node":cid,"bad_res":bad})
    return out

def audit_blocks(path):
    """Study approach and Project must each start their own block.

    The site renders these documents as CommonMark. A `**Study approach:**`
    line sitting directly under the last Resources bullet is a lazy
    continuation of that bullet, so it renders inside the list item instead of
    as its own paragraph, which hides the part of the course that matters most.
    """
    lines = (ROOT/path).read_text().split("\n")
    bad = []
    for i, line in enumerate(lines):
        m = re.match(r"\*\*(Study approach|Project|Certification)\b", line)
        if m and i and lines[i-1].strip():
            bad.append((i+1, m.group(1)))
    return bad


total = 0
report = {}
for f in MD:
    r = audit_md(f); report[f]=r
    n = sum(len(x["bad_res"]) for x in r)
    glued = audit_blocks(f)
    print(f"{f:34s} nodes flagged {len(r):3d}  bad resources {n:3d}  recipe-style study {sum(1 for x in r if x['recipe']):3d}  glued blocks {len(glued):3d}")
    for ln, label in glued[:5]:
        print(f"{'':34s}   line {ln}: **{label}** has no blank line before it")
    total += len(r) + len(glued)
print()
for f in JS:
    r = audit_js(f); report[f]=r
    n = sum(len(x["bad_res"]) for x in r)
    print(f"{f:34s} nodes flagged {len(r):3d}  bad resources {n:3d}")
print("\nTOTAL md nodes flagged:", total)
pathlib.Path(sys.argv[1] if len(sys.argv)>1 else "/dev/null").write_text(json.dumps(report, indent=1))
