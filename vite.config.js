import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@salesforce-ux/design-system/assets',
          dest: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@salesforce-ux/design-system': path.resolve(
        __dirname,
        'node_modules/@salesforce-ux/design-system'
      ),
    },
  },
  css: {
    // Disable lightningcss minifier — SLDS uses :nth-child(An+B of <selector>)
    // syntax that lightningcss does not yet support.
    transformer: 'postcss',
  },
  build: {
    cssMinify: false,
  },
})
