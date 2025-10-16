import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ✅ This fixes blank page issue after build
  plugins: [tailwindcss()],
})
