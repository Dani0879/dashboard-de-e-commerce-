import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Base para GitHub Pages: nombre exacto del repo
  base: '/dashboard-de-e-commerce-/',
  plugins: [react()],
})
