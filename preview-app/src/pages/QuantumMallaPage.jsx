import Malla from '../../../quantum_ai_malla.jsx'

export default function QuantumMallaPage() {
  return (
    <section aria-labelledby="malla-title">
      <h1 id="malla-title" className="page-title">Curriculum graph</h1>
      <p className="page-subtitle">
        9 phases, 54 topics, 5 specialization tracks. Toggle a track to filter the graph;
        click a node to highlight its dependency chain; tick the checkbox to mark progress.
      </p>
      <Malla />
    </section>
  )
}
