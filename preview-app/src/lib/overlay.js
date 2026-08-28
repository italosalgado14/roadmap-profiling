// Persistence and file exchange for the personal overlay.
//
// Progress lives in localStorage, per graph, on the reader's own device. It
// never reaches a server. Every access is wrapped because localStorage throws
// rather than returning null in private windows and when site data is blocked,
// and a graph that cannot render because storage is disabled would be a poor
// trade for a convenience feature.

const KEY = (graphId) => `roadmap-profiling:overlay:${graphId}`

export function loadProgress(graphId) {
  try {
    const raw = window.localStorage.getItem(KEY(graphId))
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return {
      done: Array.isArray(parsed.done) ? parsed.done : [],
      tracks: Array.isArray(parsed.tracks) ? parsed.tracks : [],
    }
  } catch {
    return null
  }
}

export function saveProgress(graphId, value) {
  try {
    window.localStorage.setItem(KEY(graphId), JSON.stringify(value))
  } catch {
    // Storage unavailable or full. The session still works, it just will not
    // survive a reload, which is the correct thing to degrade to.
  }
}

export function clearProgress(graphId) {
  try {
    window.localStorage.removeItem(KEY(graphId))
  } catch {
    // nothing to do
  }
}

export function downloadOverlay(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function readOverlayFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('the file could not be read'))
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result))
        if (typeof parsed !== 'object' || parsed === null) throw new Error('not an overlay object')
        resolve(parsed)
      } catch (err) {
        reject(new Error(err.message || 'not valid JSON'))
      }
    }
    reader.readAsText(file)
  })
}
