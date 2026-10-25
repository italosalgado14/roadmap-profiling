import MallaPageShell from '../components/MallaPageShell.jsx'
import graph from '../../../data_platform_malla.js'

export default function DataMallaPage() {
  return (
    <MallaPageShell
      graph={graph}
      note="Pipelines, modeling, lakehouse and streaming, data quality and governance, and the platforms analytics and ML teams build on. Split out of Edge AI, because its spine is data, not C++ and model export."
    />
  )
}
