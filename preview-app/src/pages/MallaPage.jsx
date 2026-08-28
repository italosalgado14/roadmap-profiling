import MallaPageShell from '../components/MallaPageShell.jsx'
import graph from '../../../edge_ai_malla_v3.js'
import overlay from '../../../my_path.js'

export default function MallaPage() {
  return <MallaPageShell graph={graph} overlay={overlay} />
}
