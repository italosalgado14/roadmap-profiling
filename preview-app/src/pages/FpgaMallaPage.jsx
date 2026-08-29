import MallaPageShell from '../components/MallaPageShell.jsx'
import graph from '../../../fpga_hardware_malla.js'

export default function FpgaMallaPage() {
  return (
    <MallaPageShell
      graph={graph}
      note="Digital design, HDL, timing closure and board bring-up. The supplier path: accelerators feed Edge AI, real-time execution feeds Control, and the converter and RF signal chain feeds the Quantum hardware track."
    />
  )
}
