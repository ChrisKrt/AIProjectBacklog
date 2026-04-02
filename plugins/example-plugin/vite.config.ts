import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import federation from '@originjs/vite-plugin-federation';
import preprocess from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: preprocess(),
    }),
    federation({
      name: 'examplePlugin',
      filename: 'remoteEntry.js',
      exposes: {
        './Plugin': './src/Plugin.svelte',
      },
      shared: ['svelte'],
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
