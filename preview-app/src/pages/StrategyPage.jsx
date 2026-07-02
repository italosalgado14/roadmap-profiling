import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import strategy from '../../../career_strategy.md?raw'

export default function StrategyPage() {
  return (
    <section aria-labelledby="strategy-title">
      <article className="markdown roadmap-section">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{strategy}</ReactMarkdown>
      </article>
    </section>
  )
}
