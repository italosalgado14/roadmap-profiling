import MallaPageShell from '../components/MallaPageShell.jsx'
import graph from '../../../fintech_malla.js'

export default function FintechMallaPage() {
  return (
    <MallaPageShell
      graph={graph}
      note="Software that moves, records and polices money: ledgers, payment rails, reconciliation, regulation, market systems, credit and fraud models, and tokenized assets. The ledger sits in the spine, ahead of every specialization."
    />
  )
}
