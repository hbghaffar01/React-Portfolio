import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    VITE_APP_EMAILJS_SERVICE_ID: process.env.VITE_APP_EMAILJS_SERVICE_ID,
    VITE_APP_EMAILJS_TEMPLATE_ID: process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    VITE_APP_EMAILJS_PUBLIC_KEY: process.env.VITE_APP_EMAILJS_PUBLIC_KEY
  }
})
