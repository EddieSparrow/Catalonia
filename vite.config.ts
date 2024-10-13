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
          rename: 'secondPage.html',
        },
        {
          src: 'src/public/testPage.html',
          dest: '',
          rename: 'testPage.html',
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
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'secondPage.html' || assetInfo.name === 'testPage.html') {
            return 'pages/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
});
