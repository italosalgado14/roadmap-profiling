import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../final_roadmap_reference.md?raw'

export default function RoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      subtitleToSkip="Edge AI / Physical AI Specialist Path"
      title="Full roadmap"
      subtitle="The complete reference document: phases, priorities, resources, costs and time allocation. Companion to the curriculum graph."
    />
  )
}
