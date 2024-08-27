import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@emotion\/(.+)$/,
        // @ts-ignore
        replacement: path.join(import.meta.dirname, '../emotion/packages/$1')
      },
    ],
  },
  build: {
    minify: false,
    sourcemap: true,
    terserOptions: {
      compress: false,
      mangle: false,
    },
  },
  plugins: [
    react(),
  ],
})
