import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../data_platform_roadmap.md?raw'

export default function DataRoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      title="Data Engineering & Platforms: full roadmap"
      subtitle="The complete reference for the data engineering and data platform career: phases, priorities, resources, study approaches and projects. Companion to the curriculum graph."
    />
  )
}
