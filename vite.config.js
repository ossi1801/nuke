import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'src/main.js')
      },
      output: {
        entryFileNames: 'app.js',
        format: 'es',
        dir: '.'
      }
    },
    emptyOutDir: false
  }
});
