import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    federation({
      name: 'csrApp',
      filename: 'csrApp.js',
      remotes: {
        remoteApp: {
          external: 'http://localhost:3001/_next/static/chunks/remoteEntry.js',
          format: 'var',
        },
      },
      exposes: {
        './Button': './src/components/Button',
      },
      shared: ['react', 'react-dom'],
    }),
    [svgr()],
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
      },
    },
    
  },
  server: {
    port: 4173,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  
});
