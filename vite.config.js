import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite publicar em Vercel, Netlify ou GitHub Pages sem ajustes
export default defineConfig({ plugins: [react()], base: './' });
