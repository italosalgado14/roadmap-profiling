import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import MallaPage from './pages/MallaPage.jsx'
import RoadmapPage from './pages/RoadmapPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="app-brand">
            <strong>Edge AI / Physical AI Roadmap</strong>
            <span>Italo Salgado — learning plan & curriculum graph</span>
          </div>
          <nav className="app-nav" aria-label="Primary">
            <NavLink to="/malla" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Curriculum graph
            </NavLink>
            <NavLink to="/roadmap" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Full roadmap
            </NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/malla" replace />} />
            <Route path="/malla" element={<MallaPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="*" element={<Navigate to="/malla" replace />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <span>
            Content © Italo Salgado · Built with Vite + React ·{' '}
            <a href="https://github.com/" target="_blank" rel="noreferrer">Source on GitHub</a>
          </span>
        </footer>
      </div>
    </HashRouter>
  )
}
