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
        games: resolve(__dirname, 'games/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        changelog: resolve(__dirname, 'changelog/index.html'),
        factorio: resolve(__dirname, 'factorio/index.html'),
        factorio_archive: resolve(__dirname, 'factorio/archive/index.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
  },
})