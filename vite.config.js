import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  base: "/Portfolio", // Hosted on Github Pages
  resolve: {
    alias:{
      '@': path.resolve(__dirname, "./src"),
    },
  },
  build:{
    sourcemap: false,
  }
});
