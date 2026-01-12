
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Allows the app to continue using process.env.API_KEY as per the project requirements
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  base: './', // Vital for GitHub Pages sub-path compatibility
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
