import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import MallaPage from './pages/MallaPage.jsx'
import RoadmapPage from './pages/RoadmapPage.jsx'
import ControlMallaPage from './pages/ControlMallaPage.jsx'
import ControlRoadmapPage from './pages/ControlRoadmapPage.jsx'
import QuantumMallaPage from './pages/QuantumMallaPage.jsx'
import QuantumRoadmapPage from './pages/QuantumRoadmapPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="app-brand">
            <strong>Engineering Roadmaps</strong>
            <span>Curriculum graphs &amp; learning plans</span>
          </div>
          <nav className="app-nav" aria-label="Primary">
            <NavLink to="/malla" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Edge AI · Graph
            </NavLink>
            <NavLink to="/roadmap" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Edge AI · Roadmap
            </NavLink>
            <NavLink to="/control-malla" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Control &amp; Robotics · Graph
            </NavLink>
            <NavLink to="/control-roadmap" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Control &amp; Robotics · Roadmap
            </NavLink>
            <NavLink to="/quantum-malla" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Quantum AI · Graph
            </NavLink>
            <NavLink to="/quantum-roadmap" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Quantum AI · Roadmap
            </NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/malla" replace />} />
            <Route path="/malla" element={<MallaPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/control-malla" element={<ControlMallaPage />} />
            <Route path="/control-roadmap" element={<ControlRoadmapPage />} />
            <Route path="/quantum-malla" element={<QuantumMallaPage />} />
            <Route path="/quantum-roadmap" element={<QuantumRoadmapPage />} />
            <Route path="*" element={<Navigate to="/malla" replace />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <span>
            Built with Vite + React ·{' '}
            <a href="https://github.com/" target="_blank" rel="noreferrer">Source on GitHub</a>
          </span>
        </footer>
      </div>
    </HashRouter>
  )
}
