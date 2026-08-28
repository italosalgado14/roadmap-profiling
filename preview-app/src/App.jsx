import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import OptionsPage from './pages/OptionsPage.jsx'
import MyPathPage from './pages/MyPathPage.jsx'
import StrategyPage from './pages/StrategyPage.jsx'
import MallaPage from './pages/MallaPage.jsx'
import RoadmapPage from './pages/RoadmapPage.jsx'
import ControlMallaPage from './pages/ControlMallaPage.jsx'
import ControlRoadmapPage from './pages/ControlRoadmapPage.jsx'
import SecurityMallaPage from './pages/SecurityMallaPage.jsx'
import SecurityRoadmapPage from './pages/SecurityRoadmapPage.jsx'
import QuantumMallaPage from './pages/QuantumMallaPage.jsx'
import QuantumRoadmapPage from './pages/QuantumRoadmapPage.jsx'

const CATALOG = [
  ['/options', 'Wide map'],
  ['/strategy', 'Career strategy'],
]

const PATHS = [
  ['/malla', 'Edge AI · Graph'],
  ['/roadmap', 'Edge AI · Roadmap'],
  ['/control-malla', 'Control & Robotics · Graph'],
  ['/control-roadmap', 'Control & Robotics · Roadmap'],
  ['/security-malla', 'AI Security · Graph'],
  ['/security-roadmap', 'AI Security · Roadmap'],
  ['/quantum-malla', 'Quantum AI · Graph'],
  ['/quantum-roadmap', 'Quantum AI · Roadmap'],
]

const link = ([to, label]) => (
  <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
    {label}
  </NavLink>
)

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="app-brand">
            <strong>Engineering Roadmaps</strong>
            <span>A catalog of engineering career paths, and one person's path through it</span>
          </div>
          <nav className="app-nav" aria-label="Primary">
            <span className="nav-group">Catalog</span>
            {CATALOG.map(link)}
            {PATHS.map(link)}
            <span className="nav-group">Personal</span>
            {link(['/my-path', 'My path'])}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/options" replace />} />
            <Route path="/options" element={<OptionsPage />} />
            <Route path="/my-path" element={<MyPathPage />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="/malla" element={<MallaPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/control-malla" element={<ControlMallaPage />} />
            <Route path="/control-roadmap" element={<ControlRoadmapPage />} />
            <Route path="/security-malla" element={<SecurityMallaPage />} />
            <Route path="/security-roadmap" element={<SecurityRoadmapPage />} />
            <Route path="/quantum-malla" element={<QuantumMallaPage />} />
            <Route path="/quantum-roadmap" element={<QuantumRoadmapPage />} />
            <Route path="*" element={<Navigate to="/options" replace />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <span>
            Built with Vite + React ·{' '}
            <a href="https://github.com/italosalgado14/roadmap-profiling" target="_blank" rel="noreferrer">Source on GitHub</a>
          </span>
        </footer>
      </div>
    </HashRouter>
  )
}
