import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'h', 
    jsxFragment: 'Fragment', 
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  },
});
