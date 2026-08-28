import { useCallback, useEffect, useMemo, useState } from 'react'
import CurriculumGraph from './CurriculumGraph.jsx'
import { loadProgress, saveProgress, clearProgress, downloadOverlay, readOverlayFile } from '../lib/overlay.js'

// Page frame shared by the four curriculum graphs.
//
// The counts in the subtitle are derived from the data rather than typed in, so
// adding a phase, a topic or a track cannot leave the page describing a graph
// that no longer exists.
//
// This is also where the catalog meets the personal layer. The graph itself is
// neutral; this shell loads an overlay (priority overrides, preselected tracks)
// and owns the progress that gets persisted and exported.
export default function MallaPageShell({ graph, note, overlay }) {
  const phases = graph.phases.length
  const topics = graph.courses.length
  const trackCount = Object.keys(graph.tracks).length

  const overrides = overlay?.priorityOverrides ?? {}
  const overrideCount = Object.keys(overrides).length

  const [done, setDone] = useState(() => new Set())
  const [activeTracks, setActiveTracks] = useState(() => new Set())
  const [hydrated, setHydrated] = useState(false)
  const [status, setStatus] = useState('')

  // Restore on mount. A stored overlay wins over the file default, so a reader
  // who has made the path their own is not reset by a redeploy.
  useEffect(() => {
    const stored = loadProgress(graph.id)
    setDone(new Set(stored?.done ?? overlay?.done ?? []))
    setActiveTracks(new Set(stored?.tracks ?? overlay?.tracks ?? []))
    setHydrated(true)
  }, [graph.id, overlay])

  // Persist as an effect rather than inside the state updaters, so a rapid
  // sequence of toggles cannot write a stale pair, and so the empty initial
  // state never overwrites what was just restored.
  useEffect(() => {
    if (!hydrated) return
    saveProgress(graph.id, { done: [...done], tracks: [...activeTracks] })
  }, [hydrated, graph.id, done, activeTracks])

  const toggleDone = useCallback((id) => {
    setDone(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const toggleTrack = useCallback((id) => {
    setActiveTracks(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const clearTracks = useCallback(() => setActiveTracks(new Set()), [])

  const exportOverlay = () => {
    downloadOverlay(`${graph.id}-my-path.json`, {
      version: 1,
      graph: graph.id,
      tracks: [...activeTracks],
      priorityOverrides: overrides,
      done: [...done],
    })
    setStatus('Exported. That file is a complete overlay: edit it, share it, or import it on another machine.')
  }

  const importOverlay = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      const data = await readOverlayFile(file)
      if (data.graph && data.graph !== graph.id) {
        setStatus(`That overlay is for "${data.graph}", not this graph. Nothing changed.`)
      } else {
        const nextDone = new Set(data.done ?? [])
        const nextTracks = new Set(data.tracks ?? [])
        setDone(nextDone)
        setActiveTracks(nextTracks)
        setStatus(`Imported ${nextDone.size} completed topics.`)
      }
    } catch (err) {
      setStatus(`Could not read that file: ${err.message}`)
    }
    event.target.value = ''
  }

  const reset = () => {
    clearProgress(graph.id)
    setDone(new Set())
    setActiveTracks(new Set(overlay?.tracks ?? []))
    setStatus('Progress cleared on this device. The defaults from the overlay file are back.')
  }

  const doneCount = useMemo(() => done.size, [done])

  return (
    <section aria-labelledby="malla-title">
      <h1 id="malla-title" className="page-title">Curriculum graph</h1>
      <p className="page-subtitle">
        {phases} phases, {topics} topics, {trackCount} specialization tracks.
        {note ? ` ${note}` : ''} Toggle a track to filter the graph; click a node to
        highlight its dependency chain; tick the checkbox to mark progress.
      </p>

      <div className="overlay-bar">
        <div>
          <strong>{doneCount}</strong> marked done on this device.
          {overrideCount > 0 && (
            <> Showing <strong>{overrideCount}</strong> personal priority {overrideCount === 1 ? 'override' : 'overrides'} on top of the neutral catalog.</>
          )}
        </div>
        <div className="overlay-actions">
          <button type="button" onClick={exportOverlay}>Export my path</button>
          <label className="overlay-import">
            Import
            <input type="file" accept="application/json,.json" onChange={importOverlay} />
          </label>
          <button type="button" onClick={reset}>Reset</button>
        </div>
      </div>
      {status && <p className="overlay-status" role="status">{status}</p>}

      <CurriculumGraph
        phases={graph.phases}
        tracks={graph.tracks}
        courses={graph.courses}
        srLabel={graph.srLabel}
        priorityOverrides={overrides}
        done={done}
        onToggleDone={toggleDone}
        activeTracks={activeTracks}
        onToggleTrack={toggleTrack}
        onClearTracks={clearTracks}
      />
    </section>
  )
}
