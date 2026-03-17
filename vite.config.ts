import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // CI sets VITE_BASE_PATH to /<repo-name>/ so the deployed site matches GitHub Pages URL
  base: process.env.VITE_BASE_PATH ?? '/portfolio/',
})
