import MallaPageShell from '../components/MallaPageShell.jsx'
import graph from '../../../applied_ai_malla.js'

export default function AppliedMallaPage() {
  return (
    <MallaPageShell
      graph={graph}
      note="Building products on foundation models: retrieval, agents, evaluation and serving. Its own path rather than an Edge AI track, because the spine is Python and backend services, not C++ and model export."
    />
  )
}
