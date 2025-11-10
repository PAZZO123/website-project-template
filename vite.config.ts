import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const isBuild = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    ...(isBuild
      ? [
          viteStaticCopy({
            targets: [
              { src: 'src/**/*', dest: 'src' },
            ],
          }),
        ]
      : []),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
