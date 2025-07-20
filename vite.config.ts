import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: '_media',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'resources/assets/app.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) {
            return '[name].css'
          }
          return '[name].[ext]'
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
})
