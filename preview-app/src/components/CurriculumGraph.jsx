import { useState, useCallback, useMemo } from "react";

// Shared renderer for every curriculum graph on the site.
//
// The four career paths differ only in their data, so the data lives at the
// repo root (one module per path) and this component draws it. Anything that
// is identical across all four paths (priority levels, node kinds, layout
// geometry) is defined here rather than repeated per path.

// ─── Priority (absolute importance) ────────────────────────────────────
const PRIORITY = {
  critical:  { bg: "#fef2f2", border: "#ef4444", text: "#991b1b", label: "Critical"  },
  desirable: { bg: "#fefce8", border: "#eab308", text: "#854d0e", label: "Desirable" },
  frontier:  { bg: "#f0fdf4", border: "#22c55e", text: "#166534", label: "Frontier"  },
};

// ─── Kind (role in the path) ───────────────────────────────────────────
//   spine    → required for every track
//   branch   → required only if you commit to a matching track
//   elective → optional cross-cutting; pick if you have time
const KINDS = {
  spine:    { label: "Spine",    desc: "Required for every track"          },
  branch:   { label: "Branch",   desc: "Required only for chosen track(s)" },
  elective: { label: "Elective", desc: "Optional, cross-cutting"           },
};

const SPINE_COLOR = "#64748b";

// ─── Layout ───────────────────────────────────────────────────────────
const W = 126, H = 50, GX = 28, GY = 8, PT = 40, PB = 12, PX = 8, STRIPE = 3;
const CW = W + 2 * PX;
// How far a same-column edge bulges into the gutter to clear the cards it
// would otherwise pass behind. There is PX + GX = 36px of clear space beside
// a card, so 18px stays well inside it.
const BULGE = 18;

function trackColorsFor(course, tracks) {
  if (course.kind === "spine" || course.tracks.includes("all")) return [SPINE_COLOR];
  return course.tracks.map(t => tracks[t]?.color).filter(Boolean);
}

function isInActiveTracks(course, active) {
  if (active.size === 0) return true;
  if (course.kind === "spine" || course.tracks.includes("all")) return true;
  return course.tracks.some(t => active.has(t));
}

// Path for one dependency edge.
//
// Cross-column edges curve through the gutter between phases. Same-column
// edges used to be drawn as a straight vertical line from the bottom of the
// source to the top of the target, which meant any edge spanning more than one
// row ran behind every card in between and was invisible. Adjacent rows still
// get the short straight drop; longer ones are routed out into the gutter.
function edgePath(from, to, pos, colOf, lastCol) {
  const fp = pos[from.id], tp = pos[to.id];
  const fc = colOf[from.phase], tc = colOf[to.phase];

  if (fc !== tc) {
    const x1 = fp.x + W, y1 = fp.y + H / 2;
    const x2 = tp.x,     y2 = tp.y + H / 2;
    const mx = (x1 + x2) / 2;
    return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  }

  if (Math.abs(to.row - from.row) <= 1) {
    const x1 = fp.x + W / 2, y1 = fp.y + H;
    const x2 = tp.x + W / 2, y2 = tp.y;
    return `M${x1},${y1} L${x2},${y2}`;
  }

  // The last column has no gutter to its right, so it bulges left instead.
  const dir = fc === lastCol ? -1 : 1;
  const x1 = dir === 1 ? fp.x + W : fp.x;
  const x2 = dir === 1 ? tp.x + W : tp.x;
  const y1 = fp.y + H / 2, y2 = tp.y + H / 2;
  const bx = x1 + dir * BULGE;
  return `M${x1},${y1} C${bx},${y1} ${bx},${y2} ${x2},${y2}`;
}

// ═══════════════════════════════════════════════════════════════════════
// ─── Subcomponents ─────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════

function TrackFilter({ tracks, trackIds, active, onToggle, onClear, count, total }) {
  const btnStyle = (id, on) => ({
    fontSize: 11, padding: "4px 9px", borderRadius: 6, cursor: "pointer",
    border: `1px solid ${tracks[id].color}`,
    background: on ? tracks[id].color : "transparent",
    color: on ? "#fff" : tracks[id].color,
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
      {trackIds.map(id => (
        <button key={id} onClick={() => onToggle(id)} aria-pressed={active.has(id)} style={btnStyle(id, active.has(id))}>
          {tracks[id].label}
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

function Legend({ tracks, trackIds }) {
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
            {trackIds.map(t => (
              <div key={t} style={{ flex: 1, background: tracks[t].color }} />
            ))}
          </div>
          <span>Branch / elective stripe (per track)</span>
        </div>
      </div>
    </div>
  );
}

function CourseNode({ course, priority, overridden, tracks, pos, isSel, isDim, isDone, onSelect, onToggleDone }) {
  const pr = PRIORITY[priority];
  const stripeColors = trackColorsFor(course, tracks);

  const activate = (fn) => (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    fn(e);
  };

  return (
    <div
      role="button"
      tabIndex={isDim ? -1 : 0}
      aria-label={`${course.label}. ${pr.label}. ${isDone ? "Marked done" : "Not done"}.`}
      aria-pressed={isSel}
      onClick={onSelect}
      onKeyDown={activate(onSelect)}
      style={{
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
          <div
            role="checkbox"
            aria-checked={isDone}
            tabIndex={isDim ? -1 : 0}
            aria-label={`Mark ${course.label} as done`}
            onClick={onToggleDone}
            onKeyDown={activate(onToggleDone)}
            style={{
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
          {course.id}{overridden ? " ·override" : ""}
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ course, priority, overridden, courses, cMap, phases, tracks, onClose, onSelect }) {
  const pr = PRIORITY[priority];
  const phase = phases.find(p => p.id === course.phase);
  const unlocks = courses.filter(c => c.prereqs.includes(course.id));
  const tracksDisplay = course.tracks.includes("all")
    ? "All specializations"
    : course.tracks.map(t => tracks[t]?.label).filter(Boolean).join(" · ");

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
            {overridden && tag("your rating", "#4338ca", "#eef2ff")}
            {tag(KINDS[course.kind].label, "#475569", "#f1f5f9")}
            <span style={{ fontSize: 9, color: "var(--color-text-tertiary)" }}>
              {phase?.label} · {phase?.subtitle}
            </span>
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "4px 0 0" }}>{course.label}</h3>
          <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 2 }}>
            <strong style={{ color: "var(--color-text-secondary)", fontWeight: 500 }}>Tracks:</strong> {tracksDisplay}
          </div>
          {overridden && (
            <div style={{ fontSize: 10, color: "var(--color-text-tertiary)", marginTop: 2 }}>
              The catalog rates this <strong>{PRIORITY[course.priority].label}</strong>. Your overlay raises or lowers it.
            </div>
          )}
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
              <button type="button" onClick={() => onSelect(pid)} style={{
                color: "var(--color-text-info, #2563eb)",
                cursor: "pointer", textDecoration: "underline", fontSize: 11,
                background: "none", border: "none", padding: 0, font: "inherit",
              }}>{cMap[pid]?.label}</button>
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
              <button type="button" onClick={() => onSelect(u.id)} style={{
                color: "var(--color-text-info, #2563eb)",
                cursor: "pointer", textDecoration: "underline", fontSize: 11,
                background: "none", border: "none", padding: 0, font: "inherit",
              }}>{u.label}</button>
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

function ArrowDefs({ id, color, width }) {
  return (
    <defs>
      <marker id={id} markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="none" stroke={color} strokeWidth={width} />
      </marker>
    </defs>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// ─── Main component ────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════

export default function CurriculumGraph({
  phases, tracks, courses, srLabel,
  priorityOverrides = {},
  done: doneProp,
  onToggleDone: onToggleDoneProp,
  activeTracks: activeTracksProp,
  onToggleTrack, onClearTracks,
}) {
  const [sel, setSel] = useState(null);
  const [localDone, setLocalDone] = useState(() => new Set());
  const [localTracks, setLocalTracks] = useState(() => new Set());

  // The page can own progress and track selection so it can persist and export
  // them. Without those props the graph still works on its own state.
  const done = doneProp ?? localDone;
  const activeTracks = activeTracksProp ?? localTracks;

  const priorityOf = useCallback(
    (c) => priorityOverrides[c.id] ?? c.priority,
    [priorityOverrides],
  );

  const trackIds = useMemo(() => Object.keys(tracks), [tracks]);
  const colOf = useMemo(
    () => Object.fromEntries(phases.map((p, i) => [p.id, i])),
    [phases],
  );
  const cMap = useMemo(
    () => Object.fromEntries(courses.map(c => [c.id, c])),
    [courses],
  );

  const ancestorsOf = useCallback((id, v = new Set()) => {
    cMap[id]?.prereqs.forEach(p => {
      if (!v.has(p)) { v.add(p); ancestorsOf(p, v); }
    });
    return v;
  }, [cMap]);

  const descendantsOf = useCallback((id, v = new Set()) => {
    courses.filter(c => c.prereqs.includes(id)).forEach(c => {
      if (!v.has(c.id)) { v.add(c.id); descendantsOf(c.id, v); }
    });
    return v;
  }, [courses]);

  const chain = useMemo(() => {
    if (!sel) return new Set();
    return new Set([sel, ...ancestorsOf(sel), ...descendantsOf(sel)]);
  }, [sel, ancestorsOf, descendantsOf]);

  const chainEdges = useMemo(() => {
    const s = new Set();
    if (!sel) return s;
    courses.forEach(c => c.prereqs.forEach(p => {
      if (chain.has(c.id) && chain.has(p)) s.add(`${p}->${c.id}`);
    }));
    return s;
  }, [sel, chain, courses]);

  const relevantSet = useMemo(() => {
    if (activeTracks.size === 0) return new Set(courses.map(c => c.id));
    return new Set(courses.filter(c => isInActiveTracks(c, activeTracks)).map(c => c.id));
  }, [activeTracks, courses]);

  const doneInRelevant = useMemo(
    () => [...done].filter(id => relevantSet.has(id)).length,
    [done, relevantSet],
  );

  const toggleDone = (id, e) => {
    e.stopPropagation();
    if (onToggleDoneProp) { onToggleDoneProp(id); return; }
    setLocalDone(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const toggleTrack = (id) => {
    if (onToggleTrack) { onToggleTrack(id); return; }
    setLocalTracks(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const clearTracks = () => {
    if (onClearTracks) { onClearTracks(); return; }
    setLocalTracks(new Set());
  };

  const maxRows = Math.max(...phases.map(p => courses.filter(c => c.phase === p.id).length));
  const TH = PT + maxRows * H + Math.max(0, maxRows - 1) * GY + PB + 12;
  const TW = phases.length * CW + (phases.length - 1) * GX;

  const pos = useMemo(() => {
    const p = {};
    courses.forEach(c => {
      const col = colOf[c.phase];
      p[c.id] = { x: col * (CW + GX) + PX, y: PT + c.row * (H + GY) };
    });
    return p;
  }, [courses, colOf]);

  const edges = useMemo(() => {
    const lastCol = phases.length - 1;
    const a = [];
    courses.forEach(c => c.prereqs.forEach(p => {
      if (!pos[p] || !pos[c.id]) return;
      a.push({
        f: p,
        t: c.id,
        key: `${p}->${c.id}`,
        d: edgePath(cMap[p], c, pos, colOf, lastCol),
      });
    }));
    return a;
  }, [courses, phases, pos, cMap, colOf]);

  const sc = sel ? cMap[sel] : null;

  const svgBox = {
    position: "absolute", top: 0, left: 0, width: TW, height: TH,
    pointerEvents: "none",
  };

  const renderEdge = (e, highlighted) => {
    const dimmed = highlighted
      ? false
      : (sel && !chainEdges.has(e.key)) || !relevantSet.has(e.f) || !relevantSet.has(e.t);
    return (
      <path key={e.key} d={e.d} fill="none"
        stroke={highlighted ? "#3b82f6" : "var(--color-border-secondary)"}
        strokeWidth={highlighted ? 1.5 : 0.75}
        strokeDasharray={highlighted ? "none" : "3,2"}
        markerEnd={highlighted ? "url(#edge-arrow-hl)" : "url(#edge-arrow)"}
        opacity={dimmed ? 0.08 : highlighted ? 1 : 0.4}
        style={{ transition: "opacity 0.2s" }} />
    );
  };

  const chainPaths = sel ? edges.filter(e => chainEdges.has(e.key)) : [];
  const otherPaths = sel ? edges.filter(e => !chainEdges.has(e.key)) : edges;

  return (
    <div style={{ fontFamily: "var(--font-sans, system-ui)", padding: "0.5rem 0" }}>
      <h2 className="sr-only">
        {srLabel} with {phases.length} phases, {trackIds.length} specialization tracks,
        and prerequisite dependencies
      </h2>

      <TrackFilter
        tracks={tracks}
        trackIds={trackIds}
        active={activeTracks}
        onToggle={toggleTrack}
        onClear={clearTracks}
        count={doneInRelevant}
        total={relevantSet.size}
      />
      <Legend tracks={tracks} trackIds={trackIds} />

      <div style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 6 }}>
        <div style={{ position: "relative", width: TW, height: TH }}>

          {/* Phase columns (background) */}
          {phases.map((p, col) => (
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

          {/* Unhighlighted edges, behind the cards */}
          <svg style={{ ...svgBox, zIndex: 1 }}>
            <ArrowDefs id="edge-arrow" color="var(--color-border-secondary)" width="1" />
            {otherPaths.map(e => renderEdge(e, false))}
          </svg>

          {/* Course nodes */}
          {courses.map(c => {
            const inChain = sel ? chain.has(c.id) : true;
            const inTrack = relevantSet.has(c.id);
            const isDim = (sel && !inChain) || !inTrack;
            return (
              <CourseNode key={c.id}
                course={c}
                priority={priorityOf(c)}
                overridden={Boolean(priorityOverrides[c.id])}
                tracks={tracks}
                pos={pos[c.id]}
                isSel={sel === c.id}
                isDim={isDim}
                isDone={done.has(c.id)}
                onSelect={() => setSel(sel === c.id ? null : c.id)}
                onToggleDone={(e) => toggleDone(c.id, e)} />
            );
          })}

          {/* Highlighted chain, drawn above the cards so a selected dependency
              chain is never hidden behind the nodes it passes. */}
          {chainPaths.length > 0 && (
            <svg style={{ ...svgBox, zIndex: 20 }}>
              <ArrowDefs id="edge-arrow-hl" color="#3b82f6" width="1.5" />
              {chainPaths.map(e => renderEdge(e, true))}
            </svg>
          )}
        </div>
      </div>

      {sc ? (
        <DetailPanel
          course={sc}
          priority={priorityOf(sc)}
          overridden={Boolean(priorityOverrides[sc.id])}
          courses={courses}
          cMap={cMap}
          phases={phases}
          tracks={tracks}
          onClose={() => setSel(null)}
          onSelect={setSel} />
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
