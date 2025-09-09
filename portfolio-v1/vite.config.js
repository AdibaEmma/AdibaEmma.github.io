import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/index.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS options can be configured here if needed
      }
    }
  },
  server: {
    port: 3000
  }
})