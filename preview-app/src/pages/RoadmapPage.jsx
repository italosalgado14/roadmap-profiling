import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'

import roadmap from '../../../final_roadmap_reference.md?raw'

export default function RoadmapPage() {
  return (
    <section aria-labelledby="roadmap-title">
      <h1 id="roadmap-title" className="page-title">Full roadmap</h1>
      <p className="page-subtitle">
        The complete reference document: phases, priorities, resources, costs and
        time allocation. Companion to the curriculum graph.
      </p>
      <article className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {roadmap}
        </ReactMarkdown>
      </article>
    </section>
  )
}
