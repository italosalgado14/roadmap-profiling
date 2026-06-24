import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'

function splitSections(md) {
  const lines = md.split('\n')
  const sections = []
  let current = null
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current) sections.push(current)
      current = { heading: line.slice(3).trim(), lines: [line] }
    } else if (current) {
      current.lines.push(line)
    }
  }
  if (current) sections.push(current)
  return sections.map((s) => ({ ...s, body: s.lines.join('\n').trim() }))
}

// Turn the `## `-delimited sections into tabs:
//   - the document subtitle (one H2 right under the H1 title) is skipped
//   - "Executive Summary" becomes the Overview tab
//   - "PHASE N: ..." sections each become a phase tab
//   - everything else is concatenated into a single Reference tab
function buildTabs(sections, subtitleToSkip) {
  const tabs = []
  const phaseRe = /^PHASE (\d+):\s*(.+)$/i
  const referenceBodies = []

  for (const s of sections) {
    if (subtitleToSkip && s.heading === subtitleToSkip) continue
    if (s.heading === 'Executive Summary') {
      tabs.push({ id: 'overview', short: 'Overview', title: s.heading, body: s.body })
      continue
    }
    const m = s.heading.match(phaseRe)
    if (m) {
      tabs.push({
        id: `phase-${m[1]}`,
        short: `Phase ${m[1]}`,
        title: s.heading,
        subtitle: m[2].trim(),
        body: s.body,
      })
      continue
    }
    referenceBodies.push(s.body)
  }

  if (referenceBodies.length) {
    tabs.push({
      id: 'reference',
      short: 'Reference',
      title: 'Reference & Resources',
      body: referenceBodies.join('\n\n---\n\n'),
    })
  }
  return tabs
}

export default function RoadmapView({ source, subtitleToSkip, title, subtitle }) {
  const tabs = useMemo(
    () => buildTabs(splitSections(source), subtitleToSkip),
    [source, subtitleToSkip],
  )
  const [activeId, setActiveId] = useState(tabs[0]?.id)
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0]

  return (
    <section aria-labelledby="roadmap-title">
      <h1 id="roadmap-title" className="page-title">{title}</h1>
      <p className="page-subtitle">{subtitle}</p>

      <nav className="roadmap-tabs" aria-label="Roadmap sections">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`roadmap-tab ${t.id === active?.id ? 'active' : ''}`}
            onClick={() => setActiveId(t.id)}
            aria-current={t.id === active?.id ? 'page' : undefined}
            title={t.subtitle ? `${t.short} — ${t.subtitle}` : t.title}
          >
            {t.short}
          </button>
        ))}
      </nav>

      <article className="markdown roadmap-section">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {active?.body ?? ''}
        </ReactMarkdown>
      </article>
    </section>
  )
}
