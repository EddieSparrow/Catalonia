import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/public/secondPage.html',
          dest: '',
          transform: (contents) => {
            return contents.toString().replace(/\.(\/src\/public\/)/g, './');
          },
        },
        {
          src: 'src/public/testPage.html',
          dest: '',
          transform: (contents) => {
            return contents.toString().replace(/\.(\/src\/public\/)/g, './');
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.css";`,
      },
    },
  },
});
