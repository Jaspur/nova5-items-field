import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist/js',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'resources/js/entry.js'),
      name: 'Nova5ItemsField',
      fileName: () => 'field.js',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()]
});
