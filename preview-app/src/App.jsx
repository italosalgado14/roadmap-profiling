import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import StrategyPage from './pages/StrategyPage.jsx'
import MallaPage from './pages/MallaPage.jsx'
import RoadmapPage from './pages/RoadmapPage.jsx'
import ControlMallaPage from './pages/ControlMallaPage.jsx'
import ControlRoadmapPage from './pages/ControlRoadmapPage.jsx'
import SecurityMallaPage from './pages/SecurityMallaPage.jsx'
import SecurityRoadmapPage from './pages/SecurityRoadmapPage.jsx'
import QuantumMallaPage from './pages/QuantumMallaPage.jsx'
import QuantumRoadmapPage from './pages/QuantumRoadmapPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="app-brand">
            <strong>Engineering Roadmaps</strong>
            <span>Career strategy, curriculum graphs &amp; learning plans</span>
          </div>
          <nav className="app-nav" aria-label="Primary">
            <NavLink to="/strategy" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Career Strategy
            </NavLink>
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
            <NavLink to="/security-malla" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              AI Security · Graph
            </NavLink>
            <NavLink to="/security-roadmap" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              AI Security · Roadmap
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
            <Route path="/" element={<Navigate to="/strategy" replace />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="/malla" element={<MallaPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/control-malla" element={<ControlMallaPage />} />
            <Route path="/control-roadmap" element={<ControlRoadmapPage />} />
            <Route path="/security-malla" element={<SecurityMallaPage />} />
            <Route path="/security-roadmap" element={<SecurityRoadmapPage />} />
            <Route path="/quantum-malla" element={<QuantumMallaPage />} />
            <Route path="/quantum-roadmap" element={<QuantumRoadmapPage />} />
            <Route path="*" element={<Navigate to="/strategy" replace />} />
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
