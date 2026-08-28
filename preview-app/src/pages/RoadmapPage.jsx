import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../final_roadmap_reference.md?raw'

export default function RoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      title="Edge AI: full roadmap"
      subtitle="The complete reference document: phases, priorities, resources, costs and time allocation. Companion to the curriculum graph."
    />
  )
}
