import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      // thank-you.html is a second standalone page — it is where the conversion tag fires.
      input: {
        main: 'index.html',
        thankYou: 'thank-you.html',
      },
    },
  },
})
