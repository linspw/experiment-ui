const path = require('path');
const { alias } = require("./configs/project/alias-config");
import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias,
  },
  // plugins: [vue()],
  build: {
    outDir: 'dist/lib',
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'CoreUI',
      fileName: (format) => `core-ui.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
})
