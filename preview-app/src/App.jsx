import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom'
import OptionsPage from './pages/OptionsPage.jsx'
import MyPathPage from './pages/MyPathPage.jsx'
import StrategyPage from './pages/StrategyPage.jsx'
import MallaPage from './pages/MallaPage.jsx'
import AppliedMallaPage from './pages/AppliedMallaPage.jsx'
import RoadmapPage from './pages/RoadmapPage.jsx'
import ControlMallaPage from './pages/ControlMallaPage.jsx'
import ControlRoadmapPage from './pages/ControlRoadmapPage.jsx'
import SecurityMallaPage from './pages/SecurityMallaPage.jsx'
import SecurityRoadmapPage from './pages/SecurityRoadmapPage.jsx'
import QuantumMallaPage from './pages/QuantumMallaPage.jsx'
import QuantumRoadmapPage from './pages/QuantumRoadmapPage.jsx'

// Eleven routes with a real hierarchy: two catalog entries, four career paths
// with two views each, and one personal page. As a flat row of buttons that
// wrapped onto three lines and flattened the structure away. A sidebar shows
// the grouping, keeps the current page visible while scrolling, collapses when
// a graph needs the horizontal room, and has space to grow.
const CATALOG = [
  { to: '/options', label: 'Wide map', hint: 'All career options' },
  { to: '/strategy', label: 'Career strategy', hint: 'Which path to commit to' },
]

const PATHS = [
  { name: 'Edge AI / Physical AI', graph: '/malla', roadmap: '/roadmap' },
  { name: 'Applied AI / LLM', graph: '/applied-malla' },
  { name: 'Control & Robotics', graph: '/control-malla', roadmap: '/control-roadmap' },
  { name: 'AI Security', graph: '/security-malla', roadmap: '/security-roadmap' },
  { name: 'Quantum AI', graph: '/quantum-malla', roadmap: '/quantum-roadmap' },
]

const PERSONAL = [
  { to: '/my-path', label: 'My path', hint: 'One reader’s overlay' },
]

const NAV_KEY = 'roadmap-profiling:nav-open'
const NARROW = 900

function readNavOpen() {
  try {
    const stored = window.localStorage.getItem(NAV_KEY)
    if (stored !== null) return stored === '1'
    return window.innerWidth > NARROW
  } catch {
    return true
  }
}

const activeClass = ({ isActive }) => (isActive ? 'active' : undefined)

function SideNav({ onNavigate }) {
  return (
    <nav className="side-nav" aria-label="Primary">
      <p className="side-group">Catalog</p>
      <ul className="side-list">
        {CATALOG.map(item => (
          <li key={item.to}>
            <NavLink to={item.to} className={activeClass} onClick={onNavigate}>
              <span>{item.label}</span>
              <small>{item.hint}</small>
            </NavLink>
          </li>
        ))}
      </ul>

      <p className="side-group">Career paths</p>
      <ul className="side-list side-paths">
        {PATHS.map(path => (
          <li key={path.name}>
            <span className="side-path-name">{path.name}</span>
            <span className="side-path-links">
              <NavLink to={path.graph} className={activeClass} onClick={onNavigate}>Graph</NavLink>
              {path.roadmap
                ? <NavLink to={path.roadmap} className={activeClass} onClick={onNavigate}>Roadmap</NavLink>
                : <span className="side-path-soon" title="No long-form roadmap for this path yet">Graph only</span>}
            </span>
          </li>
        ))}
      </ul>

      <p className="side-group">Personal</p>
      <ul className="side-list">
        {PERSONAL.map(item => (
          <li key={item.to}>
            <NavLink to={item.to} className={activeClass} onClick={onNavigate}>
              <span>{item.label}</span>
              <small>{item.hint}</small>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Shell() {
  const [navOpen, setNavOpen] = useState(readNavOpen)
  const location = useLocation()

  useEffect(() => {
    try { window.localStorage.setItem(NAV_KEY, navOpen ? '1' : '0') } catch { /* storage unavailable */ }
  }, [navOpen])

  // On a narrow screen the sidebar stacks above the content, so following a
  // link should close it. On a wide screen it is a permanent column and stays.
  const closeOnNarrow = () => {
    try { if (window.innerWidth <= NARROW) setNavOpen(false) } catch { /* no window */ }
  }

  return (
    <div className={`app-shell ${navOpen ? '' : 'nav-collapsed'}`}>
      <header className="app-header">
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={() => setNavOpen(v => !v)}
        >
          <span aria-hidden="true">{navOpen ? '‹' : '≡'}</span>
          <span className="sr-only">{navOpen ? 'Hide navigation' : 'Show navigation'}</span>
        </button>
        <div className="app-brand">
          <strong>Engineering Roadmaps</strong>
          <span>A catalog of engineering career paths, and one reader&apos;s path through it</span>
        </div>
      </header>

      <div className="app-body">
        {navOpen && (
          <aside id="site-nav" className="app-sidebar">
            <SideNav onNavigate={closeOnNarrow} />
          </aside>
        )}

        <main key={location.pathname}>
          <Routes>
            <Route path="/" element={<Navigate to="/options" replace />} />
            <Route path="/options" element={<OptionsPage />} />
            <Route path="/my-path" element={<MyPathPage />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="/malla" element={<MallaPage />} />
            <Route path="/applied-malla" element={<AppliedMallaPage />} />
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
      </div>

      <footer className="app-footer">
        <span>
          Built with Vite + React ·{' '}
          <a href="https://github.com/italosalgado14/roadmap-profiling" target="_blank" rel="noreferrer">Source on GitHub</a>
        </span>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}
