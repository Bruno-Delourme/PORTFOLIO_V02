import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: 'http://localhost:3001/',
    port: 3001, 
    hmr: {
      overlay: true, 
    },
  },
  build: {
    outDir: 'dist', 
  },
});
