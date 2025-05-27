import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,  // Use the PORT from Render or fallback to 5173 for local development
    host: '0.0.0.0',  // Make the server accessible on any network interface
    allowedHosts: ['test-render-v51i.onrender.com'],
  },
})

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
