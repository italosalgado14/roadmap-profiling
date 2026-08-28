import { useEffect, useState } from 'react'
import overlay from '../../../my_path.js'
import graph from '../../../edge_ai_malla_v3.js'
import { OPTIONS } from '../../../career_options.js'
import { loadProgress, downloadOverlay, readOverlayFile, saveProgress, clearProgress } from '../lib/overlay.js'

const optionName = (id) => OPTIONS.find(o => o.id === id)?.name ?? id
const courseLabel = (id) => graph.courses.find(c => c.id === id)?.label ?? id

export default function MyPathPage() {
  const [progress, setProgress] = useState({ done: [], tracks: [] })
  const [status, setStatus] = useState('')

  useEffect(() => {
    const stored = loadProgress(graph.id)
    setProgress({
      done: stored?.done ?? overlay.done ?? [],
      tracks: stored?.tracks ?? overlay.tracks ?? [],
    })
  }, [])

  const verdicts = Object.entries(overlay.verdicts ?? {})
  const primary = verdicts.filter(([, v]) => v.verdict === 'primary')
  const hedges = verdicts.filter(([, v]) => v.verdict === 'hedge')
  const ruledOut = verdicts.filter(([, v]) => v.verdict === 'ignore')

  const exportAll = () => {
    downloadOverlay('my-path.json', {
      version: 1,
      graph: graph.id,
      tracks: progress.tracks,
      priorityOverrides: overlay.priorityOverrides ?? {},
      verdicts: overlay.verdicts ?? {},
      done: progress.done,
      sequence: overlay.sequence ?? [],
    })
    setStatus('Exported. Edit that file and import it back to make this path yours.')
  }

  const importAll = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      const data = await readOverlayFile(file)
      const next = { done: data.done ?? [], tracks: data.tracks ?? [] }
      setProgress(next)
      saveProgress(graph.id, next)
      setStatus(`Imported ${next.done.length} completed topics. Verdict and priority changes need an edit to my_path.js for now.`)
    } catch (err) {
      setStatus(`Could not read that file: ${err.message}`)
    }
    event.target.value = ''
  }

  const reset = () => {
    clearProgress(graph.id)
    setProgress({ done: [], tracks: overlay.tracks ?? [] })
    setStatus('Progress cleared on this device.')
  }

  const pct = graph.courses.length
    ? Math.round((progress.done.length / graph.courses.length) * 100)
    : 0

  return (
    <section aria-labelledby="mypath-title">
      <h1 id="mypath-title" className="page-title">My path</h1>
      <p className="page-subtitle">
        The personal layer. Everything here is an overlay on top of the neutral catalog:
        which options were chosen and which were ruled out, where personal priorities differ
        from the catalog's, the calendar the phases deliberately do not encode, and the
        progress stored in this browser.
      </p>

      <div className="verdict-notice">
        <strong>This page is one person's path.</strong> The catalog it sits on is meant for
        everyone; this overlay is not. Export it, change it, and it becomes yours. Progress is
        kept in this browser only and is never uploaded.
      </div>

      <div className="overlay-bar">
        <div><strong>{progress.done.length}</strong> of {graph.courses.length} topics done ({pct}%) on the Edge AI graph.</div>
        <div className="overlay-actions">
          <button type="button" onClick={exportAll}>Export my path</button>
          <label className="overlay-import">
            Import
            <input type="file" accept="application/json,.json" onChange={importAll} />
          </label>
          <button type="button" onClick={reset}>Reset</button>
        </div>
      </div>
      {status && <p className="overlay-status" role="status">{status}</p>}

      <h2 className="section-title">The decision</h2>
      <div className="verdict-columns">
        <div>
          <h3>Primary</h3>
          {primary.map(([id, v]) => (
            <div key={id} className="verdict-item"><strong>{optionName(id)}</strong><p>{v.why}</p></div>
          ))}
        </div>
        <div>
          <h3>Hedges</h3>
          {hedges.map(([id, v]) => (
            <div key={id} className="verdict-item"><strong>{optionName(id)}</strong><p>{v.why}</p></div>
          ))}
        </div>
        <div>
          <h3>Ruled out on purpose</h3>
          {ruledOut.map(([id, v]) => (
            <div key={id} className="verdict-item"><strong>{optionName(id)}</strong><p>{v.why}</p></div>
          ))}
        </div>
      </div>

      <h2 className="section-title">Sequence, 12 to 18 months</h2>
      <p className="section-note">
        The graph's phases are capability tiers, not dates. This is the calendar.
      </p>
      <ol className="sequence">
        {(overlay.sequence ?? []).map(step => (
          <li key={step.window}>
            <div className="sequence-head">
              <strong>{step.window}</strong>
              <span>{step.focus}</span>
            </div>
            <div className="sequence-items">
              {step.items.map(id => (
                <span key={id} className={`chip ${progress.done.includes(id) ? 'chip-done' : ''}`}>
                  {courseLabel(id)}
                </span>
              ))}
            </div>
            <p>{step.note}</p>
          </li>
        ))}
      </ol>

      <h2 className="section-title">Priority overrides</h2>
      <p className="section-note">
        Where this reader's priorities differ from the neutral catalog. These are exactly the
        judgements that were wrong to encode globally.
      </p>
      <table className="overrides">
        <thead>
          <tr><th>Topic</th><th>Catalog</th><th>This overlay</th></tr>
        </thead>
        <tbody>
          {Object.entries(overlay.priorityOverrides ?? {}).map(([id, priority]) => (
            <tr key={id}>
              <td>{courseLabel(id)}</td>
              <td>{graph.courses.find(c => c.id === id)?.priority ?? 'unknown'}</td>
              <td><strong>{priority}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="section-note">
        See the whole thing applied on the <a href="#/malla">Edge AI graph</a>, where overridden
        nodes are marked, or the reasoning behind the choice on the{' '}
        <a href="#/options">wide map</a>.
      </p>
    </section>
  )
}
