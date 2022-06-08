import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/dsy-button.ts',
      fileName: `dsy-button`,
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
