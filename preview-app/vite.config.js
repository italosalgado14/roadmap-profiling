import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))

// Base path: on GitHub Pages the site is served at /<repo-name>/.
// Override via BASE_PATH env var when deploying elsewhere.
const base = process.env.BASE_PATH ?? '/roadmap-profiling/'

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    // edge_ai_malla_v3.jsx lives one level up from preview-app/ and imports
    // "react". Force it to resolve to this app's installed copy so we don't
    // need a duplicate node_modules at the repo root.
    alias: {
      react: resolve(here, 'node_modules/react'),
      'react-dom': resolve(here, 'node_modules/react-dom'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    fs: {
      // Let Vite read the .jsx and .md files that live one level up.
      allow: ['..'],
    },
  },
})
