import RoadmapView from '../components/RoadmapView.jsx'
import roadmap from '../../../fpga_hardware_roadmap.md?raw'

export default function FpgaRoadmapPage() {
  return (
    <RoadmapView
      source={roadmap}
      title="FPGA & Digital Hardware: full roadmap"
      subtitle="The complete reference for the digital hardware career: phases, priorities, resources, study approaches and projects. Companion to the curriculum graph."
    />
  )
}
