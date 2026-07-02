import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../ai_security_roadmap.md?raw'

export default function SecurityRoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      subtitleToSkip="Application, Cloud & AI Security Engineer Path"
      title="Full roadmap"
      subtitle="The complete reference document: phases, priorities, resources, study approaches and projects. Companion to the curriculum graph."
    />
  )
}
