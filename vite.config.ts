import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'

const { alias } = require('./configs/project/alias-config');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [vue()],
  build: {
    outDir: 'dist/lib',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ExperimentUI',
      fileName: 'experiment-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
