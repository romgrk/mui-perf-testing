import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react/jsx-runtime': '../react/build/node_modules/react/cjs/react-jsx-runtime.production.js',
      'react/jsx-runtime-dev': '../react/build/node_modules/react/cjs/react-jsx-runtime.production.js',
      'react-dom/client': '../react/build/node_modules/react-dom/cjs/react-dom.production.js',
      'react-dom': '../react/build/node_modules/react-dom/cjs/react-dom.production.js',
      'react': '../react/build/node_modules/react/cjs/react.production.js',
    },
  },
  build: {
    minify: false,
  },
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: [
          'fast-jsx',
          ['@babel/plugin-transform-object-rest-spread', { 'loose': true, 'useBuiltIns': false }],
        ]
      }
    })
  ],
})
