import { useState } from 'react'
import { OPTIONS } from '../../../career_options.js'

// The wide map is deliberately opinion-free. Every option is described the same
// way and none is ranked, because a ranking is only meaningful relative to one
// person's circumstances. The ranking still exists, it just lives on the My path
// page where it is clearly one reader's, alongside the reasons.
const FILTERS = [
  { id: 'all', label: 'All options' },
  { id: 'roadmap', label: 'Full roadmap' },
  { id: 'graph', label: 'Curriculum graph' },
  { id: 'card', label: 'Overview only' },
]

const LINK_LABEL = { roadmap: 'Open the roadmap', graph: 'Open the curriculum graph' }

export default function OptionsPage() {
  const [filter, setFilter] = useState('all')

  const shown = OPTIONS.filter(o => {
    if (filter === 'all') return true
    return o.depth === filter
  })

  return (
    <section aria-labelledby="options-title">
      <h1 id="options-title" className="page-title">The wide map</h1>
      <p className="page-subtitle">
        Every career option this site considers, described the same way and in no
        particular order. {OPTIONS.length} options, six of which have a curriculum
        behind them. Read this to work out which path is worth your time.
      </p>

      <div className="verdict-notice">
        <strong>No option here is recommended over another.</strong> What counts as the right
        path depends on where you live, what you already know and what you want, none of which
        this page knows. One reader's route through these options, including the ones ruled out
        and why, lives on the <a href="#/my-path">My path</a> page, clearly marked as one
        person's decision rather than advice.
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

      <p className="option-count">{shown.length} of {OPTIONS.length} shown.</p>

      <div className="option-grid">
        {shown.map(o => (
          <article key={o.id} className="option-card">
            <header>
              <h2>{o.name}</h2>
            </header>

            <p className="option-job">{o.job}</p>

            <dl className="option-meta">
              <dt>Who hires, Chile</dt><dd>{o.hiring.cl}</dd>
              <dt>Who hires, Germany</dt><dd>{o.hiring.de}</dd>
              <dt>Who hires, Canada</dt><dd>{o.hiring.ca}</dd>
              <dt>Getting in</dt><dd>{o.entry}</dd>
            </dl>

            <p className="option-fit">{o.fit}</p>

            <footer>
              {o.route
                ? <a className="option-link" href={o.route}>{LINK_LABEL[o.depth]}</a>
                : <span className="option-nolink">Overview only, no curriculum on this site yet</span>}
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
