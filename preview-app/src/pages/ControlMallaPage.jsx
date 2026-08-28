import MallaPageShell from '../components/MallaPageShell.jsx'
import graph from '../../../control_robotics_malla.js'

export default function ControlMallaPage() {
  return (
    <MallaPageShell
      graph={graph}
      note="The classical / model-based control discipline, sibling to the Edge AI path."
    />
  )
}
