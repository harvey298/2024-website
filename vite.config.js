// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    plugins: [
        wasm(),
        topLevelAwait()
    ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        project: resolve(__dirname, 'projects/project.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
  },
})