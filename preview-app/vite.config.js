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
    // The curriculum data modules live one level up from preview-app/. They
    // are plain data now and import nothing, but the alias is kept so a root
    // file that ever does import "react" resolves to this app's copy rather
    // than needing a duplicate node_modules at the repo root.
    alias: {
      react: resolve(here, 'node_modules/react'),
      'react-dom': resolve(here, 'node_modules/react-dom'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    fs: {
      // Let Vite read the data and markdown files that live one level up.
      allow: ['..'],
    },
  },
})
