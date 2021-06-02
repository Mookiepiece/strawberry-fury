import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@docs': path.resolve(__dirname, './src'),
      '🦄': path.resolve(__dirname, '../strawberry-fury/src'),
      starfall: path.resolve(__dirname, '../starfall/src'),
      '@starfall': path.resolve(__dirname, '../starfall/src'),
      '@strawberry': path.resolve(__dirname, '../strawberry-fury/src'),
    },
  },
  server: {
    port: 8888,
  },
  base: '/strawberry-fury/',
});
