#!/usr/bin/env python3
"""Structural checks for the curriculum data modules at the repo root.

The four *_malla.js files are data only, so a mistake in them is not a syntax
error the build would catch: it is a node pointing at a prerequisite that does
not exist, two nodes stacked on the same row, or a track nobody uses. Those
render as a silently wrong graph. This script catches them before deploy.

Run from the repo root:

    python3 tools/check_curriculum.py

Exits non-zero if any file has an error. Warnings do not fail the run.
"""

from __future__ import annotations

import collections
import pathlib
import re
import sys

FILES = [
    "edge_ai_malla_v3.js",
    "control_robotics_malla.js",
    "ai_security_malla.js",
    "quantum_ai_malla.js",
]

VALID_PRIORITIES = {"critical", "desirable", "frontier"}
VALID_KINDS = {"spine", "branch", "elective"}


def block(src: str, decl: str, close: str) -> str:
    start = src.index(decl)
    end = src.index(close, start)
    return src[start + len(decl):end]


def parse_phases(src: str) -> list[str]:
    return re.findall(r'id:\s*"([^"]+)"', block(src, "export const PHASES = [", "\n];"))


def parse_tracks(src: str) -> list[str]:
    return re.findall(r"^\s{2}(\w+):", block(src, "export const TRACKS = {", "\n};"), re.M)


def parse_courses(src: str) -> list[dict]:
    body = block(src, "export const COURSES = [", "\n];") + "\n];"
    entries = re.findall(
        r'\{\s*id:\s*"([^"]+)"(.*?)\n\s*(?=\{\s*id:|\]\s*;)', body, re.S
    )
    courses = []
    for cid, rest in entries:
        phase = re.search(r'phase:\s*"([^"]+)"', rest)
        row = re.search(r"row:\s*(\d+)", rest)
        priority = re.search(r'priority:\s*"([^"]+)"', rest)
        kind = re.search(r'kind:\s*"([^"]+)"', rest)
        tracks = re.search(r"tracks:\s*\[([^\]]*)\]", rest)
        prereqs = re.search(r"prereqs:\s*\[([^\]]*)\]", rest)
        courses.append(
            {
                "id": cid,
                "phase": phase.group(1) if phase else None,
                "row": int(row.group(1)) if row else None,
                "priority": priority.group(1) if priority else None,
                "kind": kind.group(1) if kind else None,
                "tracks": re.findall(r'"([^"]+)"', tracks.group(1)) if tracks else None,
                "prereqs": re.findall(r'"([^"]+)"', prereqs.group(1)) if prereqs else None,
                "has_desc": bool(re.search(r'desc:\s*"', rest)),
                "has_res": bool(re.search(r'res:\s*"', rest)),
            }
        )
    return courses


def find_cycles(courses: list[dict]) -> list[list[str]]:
    """Return prerequisite cycles, if any. A cycle is unsatisfiable."""
    graph = {c["id"]: list(c["prereqs"] or []) for c in courses}
    state: dict[str, int] = {}
    cycles: list[list[str]] = []

    def walk(node: str, path: list[str]) -> None:
        state[node] = 1
        for nxt in graph.get(node, []):
            if nxt not in graph:
                continue
            if state.get(nxt) == 1:
                cycles.append(path[path.index(nxt):] + [nxt])
            elif state.get(nxt) is None:
                walk(nxt, path + [nxt])
        state[node] = 2

    for cid in graph:
        if state.get(cid) is None:
            walk(cid, [cid])
    return cycles


def check(path: pathlib.Path) -> tuple[list[str], list[str]]:
    src = path.read_text(encoding="utf-8")
    phases = parse_phases(src)
    tracks = parse_tracks(src)
    courses = parse_courses(src)

    errors: list[str] = []
    warnings: list[str] = []

    if not courses:
        return ([f"{path.name}: parsed zero courses, the file shape changed"], [])

    ids = [c["id"] for c in courses]
    idset = set(ids)
    phase_index = {p: i for i, p in enumerate(phases)}

    for cid, count in collections.Counter(ids).items():
        if count > 1:
            errors.append(f"duplicate course id {cid!r} appears {count} times")

    rows_by_phase: dict[str, list[tuple[int, str]]] = collections.defaultdict(list)
    used_tracks: set[str] = set()

    for c in courses:
        cid = c["id"]
        if c["phase"] not in phase_index:
            errors.append(f"{cid}: unknown phase {c['phase']!r}")
        if c["priority"] not in VALID_PRIORITIES:
            errors.append(f"{cid}: unknown priority {c['priority']!r}")
        if c["kind"] not in VALID_KINDS:
            errors.append(f"{cid}: unknown kind {c['kind']!r}")
        if c["row"] is None:
            errors.append(f"{cid}: missing row")
        if c["tracks"] is None:
            errors.append(f"{cid}: missing tracks")
        if c["prereqs"] is None:
            errors.append(f"{cid}: missing prereqs")
        if not c["has_desc"]:
            errors.append(f"{cid}: missing desc")
        if not c["has_res"]:
            errors.append(f"{cid}: missing res")

        for t in c["tracks"] or []:
            if t == "all":
                continue
            if t not in tracks:
                errors.append(f"{cid}: unknown track {t!r}")
            used_tracks.add(t)

        if c["kind"] == "spine" and c["tracks"] != ["all"]:
            errors.append(f"{cid}: kind is spine but tracks is {c['tracks']}, expected ['all']")
        if c["kind"] == "branch" and c["tracks"] == ["all"]:
            errors.append(f"{cid}: kind is branch but tracks is ['all']")

        for p in c["prereqs"] or []:
            if p not in idset:
                errors.append(f"{cid}: prereq {p!r} does not exist")
                continue
            parent = next(x for x in courses if x["id"] == p)
            if c["phase"] in phase_index and parent["phase"] in phase_index:
                if phase_index[parent["phase"]] > phase_index[c["phase"]]:
                    errors.append(
                        f"{cid} ({c['phase']}): prereq {p} sits in a later phase "
                        f"({parent['phase']}), so it can never be satisfied"
                    )

        if c["phase"] is not None and c["row"] is not None:
            rows_by_phase[c["phase"]].append((c["row"], cid))

    for phase, rows in rows_by_phase.items():
        counts = collections.Counter(r for r, _ in rows)
        for row, n in counts.items():
            if n > 1:
                stacked = [cid for r, cid in rows if r == row]
                errors.append(f"phase {phase}: row {row} used by {n} nodes {stacked}, they would overlap")
        got = {r for r, _ in rows}
        expected = set(range(len(rows)))
        if got != expected:
            errors.append(
                f"phase {phase}: rows are {sorted(got)}, expected a contiguous "
                f"{sorted(expected)} so the column has no holes"
            )

    for cycle in find_cycles(courses):
        errors.append(f"prerequisite cycle: {' -> '.join(cycle)}")

    for t in tracks:
        if t not in used_tracks:
            warnings.append(f"track {t!r} is defined but no course uses it")

    return errors, warnings


def check_overlay(root: pathlib.Path) -> list[str]:
    """The personal overlay must only reference things the catalog actually has.

    This is the drift the catalog/personal split introduces: rename a course or
    an option and the overlay silently points at nothing.
    """
    errors: list[str] = []
    overlay_path = root / "my_path.js"
    options_path = root / "career_options.js"
    if not overlay_path.exists() or not options_path.exists():
        return ["my_path.js or career_options.js is missing"]

    overlay = overlay_path.read_text(encoding="utf-8")
    options_src = options_path.read_text(encoding="utf-8")

    option_ids = set(re.findall(r'^\s{4}id:\s*"([^"]+)"', options_src, re.M))
    if not option_ids:
        return ["career_options.js: parsed zero options, the file shape changed"]

    graph_match = re.search(r'graph:\s*"([^"]+)"', overlay)
    graph_id = graph_match.group(1) if graph_match else None
    course_ids: set[str] = set()
    graph_file = None
    for name in FILES:
        src = (root / name).read_text(encoding="utf-8")
        if re.search(r'id:\s*"%s"' % re.escape(graph_id or ""), src.split("export default")[-1]):
            graph_file = name
            course_ids = {c["id"] for c in parse_courses(src)}
            break
    if graph_file is None:
        return [f"my_path.js targets graph {graph_id!r}, which no data module declares"]

    verdict_block = block(overlay, "verdicts: {", "\n  },")
    for oid in re.findall(r'"([^"]+)":\s*\{\s*verdict:', verdict_block):
        if oid not in option_ids:
            errors.append(f"my_path.js: verdict for unknown option {oid!r}")
    for verdict in re.findall(r'verdict:\s*"([^"]+)"', verdict_block):
        if verdict not in {"primary", "hedge", "ignore"}:
            errors.append(f"my_path.js: unknown verdict {verdict!r}")

    override_block = block(overlay, "priorityOverrides: {", "\n  },")
    for cid, priority in re.findall(r'(\w+):\s*"([^"]+)"', override_block):
        if cid not in course_ids:
            errors.append(f"my_path.js: priority override for unknown course {cid!r}")
        if priority not in VALID_PRIORITIES:
            errors.append(f"my_path.js: override {cid} has unknown priority {priority!r}")

    for cid in re.findall(r'items:\s*\[([^\]]*)\]', overlay):
        for item in re.findall(r'"([^"]+)"', cid):
            if item not in course_ids:
                errors.append(f"my_path.js: sequence references unknown course {item!r}")

    return errors


def main() -> int:
    root = pathlib.Path(__file__).resolve().parent.parent
    failed = False

    for name in FILES:
        path = root / name
        if not path.exists():
            print(f"FAIL {name}: file not found")
            failed = True
            continue

        errors, warnings = check(path)
        courses = parse_courses(path.read_text(encoding="utf-8"))
        phases = parse_phases(path.read_text(encoding="utf-8"))
        tracks = parse_tracks(path.read_text(encoding="utf-8"))
        summary = f"{len(phases)} phases, {len(courses)} topics, {len(tracks)} tracks"

        if errors:
            failed = True
            print(f"FAIL {name} ({summary})")
            for e in errors:
                print(f"       {e}")
        else:
            print(f"ok   {name} ({summary})")
        for w in warnings:
            print(f"     warning: {w}")

    overlay_errors = check_overlay(root)
    if overlay_errors:
        failed = True
        print("FAIL my_path.js / career_options.js")
        for e in overlay_errors:
            print(f"       {e}")
    else:
        print("ok   my_path.js overlay matches the catalog")

    print()
    print("curriculum check failed" if failed else "curriculum check passed")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
