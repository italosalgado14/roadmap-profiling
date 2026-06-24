import Malla from '../../../control_robotics_malla.jsx'

export default function ControlMallaPage() {
  return (
    <section aria-labelledby="control-malla-title">
      <h1 id="control-malla-title" className="page-title">Control &amp; Robotics — curriculum graph</h1>
      <p className="page-subtitle">
        9 phases, 45 topics, 5 specialization tracks. The classical / model-based control
        discipline (sibling to the Edge AI path). Toggle a track to filter the graph; click a
        node to highlight its dependency chain; tick the checkbox to mark progress.
      </p>
      <Malla />
    </section>
  )
}
