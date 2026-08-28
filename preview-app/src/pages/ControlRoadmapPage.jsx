import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../control_robotics_roadmap.md?raw'

export default function ControlRoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      title="Control & Robotics: full roadmap"
      subtitle="The complete reference for the control-systems and robotics-control career: phases, priorities, resources and projects. Companion to the curriculum graph."
    />
  )
}
