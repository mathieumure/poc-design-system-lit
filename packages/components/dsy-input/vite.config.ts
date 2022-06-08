import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/dsy-input.ts',
      fileName: 'dsy-input',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
