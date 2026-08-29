import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../applied_ai_roadmap.md?raw'

export default function AppliedRoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      title="Applied AI: full roadmap"
      subtitle="The complete reference for the LLM application career: phases, priorities, resources, study approaches and projects. Companion to the curriculum graph."
    />
  )
}
