import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../quantum_ai_roadmap.md?raw'

export default function QuantumRoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      subtitleToSkip="Quantum Machine Learning & Quantum Systems Engineer Path"
      title="Full roadmap"
      subtitle="The complete reference document: phases, priorities, resources, costs and time allocation. Companion to the curriculum graph."
    />
  )
}
