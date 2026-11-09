import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base must match the GitHub repo name for GitHub Pages: https://chicagomicrodev.github.io/GWC/
export default defineConfig({
  plugins: [react()],
  base: '/GWC/',
});
