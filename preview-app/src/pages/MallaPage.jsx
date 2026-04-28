import Malla from '../../../edge_ai_malla_v3.jsx'

export default function MallaPage() {
  return (
    <section aria-labelledby="malla-title">
      <h1 id="malla-title" className="page-title">Curriculum graph</h1>
      <p className="page-subtitle">
        9 phases, 41 topics, 4 specialization tracks. Toggle a track to filter the graph;
        click a node to highlight its dependency chain; tick the checkbox to mark progress.
      </p>
      <Malla />
    </section>
  )
}
