import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { pigment } from '@pigment-css/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    terserOptions: {
      compress: false,
      mangle: false,
    },
  },
  plugins: [
    pigment({
      theme: {
        color: 'red',
      }
    }),
    react(),
  ],
})
