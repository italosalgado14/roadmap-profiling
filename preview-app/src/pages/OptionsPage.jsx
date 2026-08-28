import { useMemo, useState } from 'react'
import { OPTIONS } from '../../../career_options.js'
import overlay from '../../../my_path.js'

const VERDICT_LABEL = {
  primary: 'Primary bet',
  hedge: 'Hedge',
  ignore: 'Ruled out on purpose',
}

const FILTERS = [
  { id: 'all', label: 'All options' },
  { id: 'roadmap', label: 'Has a full roadmap' },
  { id: 'primary', label: 'Primary' },
  { id: 'hedge', label: 'Hedge' },
  { id: 'ignore', label: 'Ruled out' },
]

export default function OptionsPage() {
  const [filter, setFilter] = useState('all')

  const rows = useMemo(() => OPTIONS.map(o => ({
    ...o,
    verdict: overlay.verdicts?.[o.id]?.verdict ?? null,
    why: overlay.verdicts?.[o.id]?.why ?? null,
  })), [])

  const shown = rows.filter(r => {
    if (filter === 'all') return true
    if (filter === 'roadmap') return r.depth === 'roadmap'
    return r.verdict === filter
  })

  return (
    <section aria-labelledby="options-title">
      <h1 id="options-title" className="page-title">The wide map</h1>
      <p className="page-subtitle">
        Every career option this site considers, described neutrally. {OPTIONS.length} options,
        four of which have a full curriculum behind them. Use this page to decide which
        path is worth your time before opening any roadmap.
      </p>

      <div className="verdict-notice">
        <strong>About the verdict column.</strong> The description of each option is meant to be
        neutral and useful to anyone. The verdict is not: it is one person's decision, published so
        that the reasoning is inspectable and the options that were <em>deliberately</em> ruled out
        stay visible. Your circumstances are different, so disagree freely. The verdicts live in a
        single overlay file and can be replaced with your own from the{' '}
        <a href="#/my-path">My path</a> page.
      </div>

      <nav className="option-filters" aria-label="Filter options">
        {FILTERS.map(f => (
          <button
            key={f.id}
            type="button"
            className={`roadmap-tab ${filter === f.id ? 'active' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <p className="option-count">{shown.length} of {rows.length} shown.</p>

      <div className="option-grid">
        {shown.map(o => (
          <article key={o.id} className={`option-card verdict-${o.verdict ?? 'none'}`}>
            <header>
              <h2>{o.name}</h2>
              {o.verdict && (
                <span className={`verdict-badge verdict-${o.verdict}`}>
                  {VERDICT_LABEL[o.verdict]}
                </span>
              )}
            </header>

            <p className="option-job">{o.job}</p>

            <dl className="option-meta">
              <dt>Who hires, Chile</dt><dd>{o.hiring.cl}</dd>
              <dt>Who hires, Germany</dt><dd>{o.hiring.de}</dd>
              <dt>Who hires, Canada</dt><dd>{o.hiring.ca}</dd>
              <dt>Getting in</dt><dd>{o.entry}</dd>
            </dl>

            <p className="option-fit">{o.fit}</p>

            {o.why && (
              <p className="option-why">
                <strong>One person's verdict:</strong> {o.why}
              </p>
            )}

            <footer>
              {o.depth === 'roadmap'
                ? <a className="option-link" href={o.route}>Open the roadmap</a>
                : <span className="option-nolink">Card only, no full curriculum on this site yet</span>}
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
