import { useState, useCallback, useMemo } from "react";

// Shared renderer for every curriculum graph on the site.
//
// The career paths differ only in their data, so the data lives at the
// repo root (one module per path) and this component draws it. Anything that
// is identical across all paths (priority levels, node kinds, layout
// geometry) is defined here rather than repeated per path.

// ─── Priority (absolute importance) ────────────────────────────────────
// Colours come from the console palette in index.css, so they follow the
// light and dark themes. Frontier is magenta rather than green: green means
// "done" on this graph, and a finished card must not look like a frontier one.
const PRIORITY = {
  critical:  { color: "var(--c-red)",     label: "Critical"  },
  desirable: { color: "var(--c-amber)",   label: "Desirable" },
  frontier:  { color: "var(--c-magenta)", label: "Frontier"  },
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

const SPINE_COLOR = "var(--text-alt)";

// ─── Layout ───────────────────────────────────────────────────────────
// Sized for a monospace face: at 10px a glyph is about 6px wide, so a 150px
// card fits the longest label (46 characters) on two lines.
const W = 150, H = 54, GX = 28, GY = 8, PT = 48, PB = 12, PX = 8, STRIPE = 3;
const CW = W + 2 * PX;
// How far a same-column edge bulges into the gutter to clear the cards it
// would otherwise pass behind. There is PX + GX = 36px of clear space beside
// a card, so 18px stays well inside it.
const BULGE = 18;

function trackColorsFor(course, tracks) {
  if (course.kind === "spine" || course.tracks.includes("all")) return [SPINE_COLOR];
  return course.tracks.map(t => tracks[t]?.color).filter(Boolean);
}

// With no specialization picked, only the spine counts as the path, so every
// track-tagged course stays dimmed until its track is selected.
function isInActiveTracks(course, active) {
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
    fontSize: 12, padding: "0 8px", cursor: "pointer", fontWeight: 700,
    border: `2px solid ${tracks[id].color}`,
    background: on ? tracks[id].color : "transparent",
    color: on ? "var(--bg)" : tracks[id].color,
  });
  return (
    <div style={{
      display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8,
      marginBottom: "0.6rem", paddingBottom: "0.6rem",
      borderBottom: "2px solid var(--text)",
    }}>
      <span style={{
        fontSize: 11, fontWeight: 800, textTransform: "uppercase",
        color: "var(--c-cyan)", marginRight: 2,
      }}>
        Specialization
      </span>
      {trackIds.map(id => (
        <button key={id} type="button" onClick={() => onToggle(id)} aria-pressed={active.has(id)} style={btnStyle(id, active.has(id))}>
          {tracks[id].label}
        </button>
      ))}
      {active.size > 0 && (
        <button type="button" onClick={onClear} style={{
          fontSize: 12, padding: 0, cursor: "pointer", marginLeft: 2,
          color: "var(--text-alt)", background: "transparent", border: 0,
        }}>[clear]</button>
      )}
      <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-alt)" }}>
        <strong style={{ color: "var(--c-green)" }}>{count}</strong>/{total} done
        {total > 0 && ` (${Math.round((count / total) * 100)}%)`}
      </span>
    </div>
  );
}

function Legend({ tracks, trackIds, hasOverrides }) {
  const swatch = (color) => (
    <div style={{ width: 10, height: 10, border: `2px solid ${color}` }} />
  );
  const item = { display: "flex", alignItems: "center", gap: 5 };
  return (
    <div style={{
      display: "flex", alignItems: "center", flexWrap: "wrap",
      gap: "6px 18px", fontSize: 11, marginBottom: "0.7rem",
      color: "var(--text-alt)",
    }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {Object.entries(PRIORITY).map(([k, v]) => (
          <div key={k} style={item}>{swatch(v.color)}<span>{v.label}</span></div>
        ))}
        <div style={item}>{swatch("var(--c-green)")}<span>Done</span></div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <div style={item}>
          <div style={{ width: 16, height: 3, background: SPINE_COLOR }} />
          <span>Spine stripe</span>
        </div>
        <div style={item}>
          <div style={{ width: 16, height: 3, display: "flex" }}>
            {trackIds.map(t => (
              <div key={t} style={{ flex: 1, background: tracks[t].color }} />
            ))}
          </div>
          <span>Branch / elective stripe (per track)</span>
        </div>
        {hasOverrides && <div style={item}><span>* personal rating</span></div>}
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

  const borderColor = isSel ? "var(--c-blue)" : isDone ? "var(--c-green)" : pr.color;

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
        background: isSel ? "var(--c-blue-bg)" : isDone ? "var(--bg-alt)" : "var(--bg)",
        border: `2px solid ${borderColor}`,
        cursor: "pointer",
        opacity: isDim ? 0.15 : 1,
        transition: "opacity 0.2s",
        overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}>
      {/* Track stripe */}
      <div style={{ height: STRIPE, display: "flex", flexShrink: 0 }}>
        {stripeColors.map((c, i) => (
          <div key={i} style={{ flex: 1, background: c }} />
        ))}
      </div>

      {/* Body: the label on top, then the checkbox, id and priority */}
      <div style={{
        flex: 1, padding: "2px 5px 2px 6px", minHeight: 0,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700, lineHeight: "12px",
          color: isDone ? "var(--text-alt)" : "var(--text)",
          textDecoration: isDone ? "line-through" : "none",
          overflow: "hidden", display: "-webkit-box",
          WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
        }}>{course.label}</span>

        <div style={{
          display: "flex", alignItems: "center", gap: 4,
          fontSize: 8.5, lineHeight: "11px", whiteSpace: "nowrap",
        }}>
          <span
            role="checkbox"
            aria-checked={isDone}
            tabIndex={isDim ? -1 : 0}
            aria-label={`Mark ${course.label} as done`}
            onClick={onToggleDone}
            onKeyDown={activate(onToggleDone)}
            style={{
              flexShrink: 0, cursor: "pointer", fontWeight: 800,
              color: isDone ? "var(--c-green)" : "var(--text-alt)",
            }}>{isDone ? "[x]" : "[ ]"}</span>
          <span style={{
            flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis",
            color: "var(--text-alt)",
          }}>{course.id}</span>
          <span style={{ flexShrink: 0, fontWeight: 700, color: pr.color }}>
            {priority}{overridden ? "*" : ""}
          </span>
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
    : course.tracks.map(t => tracks[t]?.label).filter(Boolean).join(", ");
  // Resources are listed best match first (the career-roadmaps standard), so
  // the first entry is labelled as the one to start with.
  const resources = course.res.split("|").map(r => r.trim()).filter(Boolean);

  const tag = (text, color) => (
    <span style={{
      fontSize: 10, padding: "0 5px", color, border: `2px solid ${color}`,
      fontWeight: 700, textTransform: "uppercase",
    }}>{text}</span>
  );
  const label = (text) => (
    <span style={{
      fontSize: 10, fontWeight: 800, textTransform: "uppercase",
      color: "var(--c-cyan)", marginRight: 6,
    }}>{text}</span>
  );
  const linkBtn = {
    color: "var(--c-blue)", cursor: "pointer", fontSize: 12,
    textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 2,
    background: "none", border: "none", padding: 0, font: "inherit",
  };

  return (
    <div style={{
      marginTop: "0.8rem", padding: "0.7rem 1.5ch",
      background: "var(--bg)", border: "2px solid var(--text)", fontSize: 12,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
            {tag(pr.label, pr.color)}
            {overridden && tag("your rating", "var(--c-blue)")}
            {tag(KINDS[course.kind].label, "var(--c-cyan)")}
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--c-amber)" }}>
              {phase?.label}: {phase?.subtitle}
            </span>
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 800, margin: "8px 0 2px" }}>
            <span style={{ color: "var(--c-green)", fontWeight: 600 }}>$ </span>{course.label}
          </h3>
          <div style={{ fontSize: 12, marginTop: 4 }}>
            {label("Tracks")}<span style={{ color: "var(--text-alt)" }}>{tracksDisplay}</span>
          </div>
          {overridden && (
            <div style={{ fontSize: 11, color: "var(--text-alt)", marginTop: 4 }}>
              The catalog rates this <strong>{PRIORITY[course.priority].label}</strong>. Your overlay raises or lowers it.
            </div>
          )}
        </div>
        <button type="button" onClick={onClose} style={{
          fontSize: 12, padding: 0, cursor: "pointer", flexShrink: 0,
          color: "var(--text-alt)", background: "transparent", border: 0,
        }}>[close]</button>
      </div>

      <p style={{ fontSize: 12.5, margin: "10px 0", lineHeight: 1.6 }}>
        {course.desc}
      </p>

      {course.prereqs.length > 0 && (
        <div style={{ marginBottom: 6 }}>
          {label("Requires")}
          {course.prereqs.map((pid, i) => (
            <span key={pid}>
              <button type="button" onClick={() => onSelect(pid)} style={linkBtn}>{cMap[pid]?.label}</button>
              {i < course.prereqs.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}

      {unlocks.length > 0 && (
        <div style={{ marginBottom: 6 }}>
          {label("Unlocks")}
          {unlocks.map((u, i) => (
            <span key={u.id}>
              <button type="button" onClick={() => onSelect(u.id)} style={linkBtn}>{u.label}</button>
              {i < unlocks.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}

      <div style={{
        marginTop: 8, padding: "6px 1.5ch", lineHeight: 1.55,
        background: "var(--bg-alt)", borderLeft: "2px solid var(--c-green-dim)",
      }}>
        {label("Resources")}
        <ol style={{ margin: "4px 0 0", paddingLeft: "3ch" }}>
          {resources.map((r, i) => (
            <li key={i} style={{ margin: "2px 0" }}>
              {i === 0 && (
                <span style={{ color: "var(--c-green)", fontWeight: 800 }}>best match: </span>
              )}
              <span style={{ color: i === 0 ? "var(--text)" : "var(--text-alt)" }}>{r}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ArrowDefs({ id, color, width }) {
  return (
    <defs>
      <marker id={id} markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="none" strokeWidth={width} style={{ stroke: color }} />
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
        strokeWidth={highlighted ? 2 : 1}
        strokeDasharray={highlighted ? "none" : "3,3"}
        markerEnd={highlighted ? "url(#edge-arrow-hl)" : "url(#edge-arrow)"}
        opacity={dimmed ? 0.08 : highlighted ? 1 : 0.45}
        style={{
          stroke: highlighted ? "var(--c-blue)" : "var(--text-alt)",
          transition: "opacity 0.2s",
        }} />
    );
  };

  const chainPaths = sel ? edges.filter(e => chainEdges.has(e.key)) : [];
  const otherPaths = sel ? edges.filter(e => !chainEdges.has(e.key)) : edges;

  return (
    <div style={{ fontFamily: "var(--font)", padding: "0.5rem 0" }}>
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
      <Legend tracks={tracks} trackIds={trackIds} hasOverrides={Object.keys(priorityOverrides).length > 0} />

      <div style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 6 }}>
        <div style={{ position: "relative", width: TW, height: TH }}>

          {/* Phase columns (background) */}
          {/* A phase is a quarter, so each column header also names its months. */}
          {phases.map((p, col) => (
            <div key={p.id} style={{
              position: "absolute", left: col * (CW + GX), top: 0, width: CW, height: TH - 12,
              background: "var(--bg-alt)", zIndex: 0,
            }}>
              <div style={{
                padding: "5px 8px 4px", borderBottom: "2px solid var(--c-amber)",
                whiteSpace: "nowrap", overflow: "hidden",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "var(--c-amber)" }}>
                    {p.label}
                  </span>
                  <span style={{ fontSize: 9, color: "var(--text-alt)" }}>m{col * 3}-{col * 3 + 3}</span>
                </div>
                <div title={p.subtitle} style={{
                  fontSize: 9, color: "var(--text-alt)", marginTop: 1,
                  overflow: "hidden", textOverflow: "ellipsis",
                }}>{p.subtitle}</div>
              </div>
            </div>
          ))}

          {/* Unhighlighted edges, behind the cards */}
          <svg style={{ ...svgBox, zIndex: 1 }}>
            <ArrowDefs id="edge-arrow" color="var(--text-alt)" width="1" />
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
              <ArrowDefs id="edge-arrow-hl" color="var(--c-blue)" width="1.5" />
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
        <div style={{ fontSize: 12, color: "var(--text-alt)", marginTop: "0.8rem" }}>
          <span style={{ color: "var(--c-green-dim)" }}># </span>
          Pick a specialization above to reveal its courses; the spine shows for every track. Click a course to see its prerequisites,
          what it unlocks, and its resources. Tick [ ] to track progress.
        </div>
      )}
    </div>
  );
}
