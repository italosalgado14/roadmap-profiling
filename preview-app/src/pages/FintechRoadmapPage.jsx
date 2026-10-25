import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../fintech_roadmap.md?raw'

export default function FintechRoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      title="FinTech Engineering: full roadmap"
      subtitle="The complete reference for the fintech engineering career: phases, priorities, resources, study approaches and projects. Companion to the curriculum graph."
    />
  )
}
