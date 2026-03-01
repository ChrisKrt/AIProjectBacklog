import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // Using custom manifest.webmanifest in public/
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
    federation({
      name: 'host',
      remotes: {},
      shared: ['svelte'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      $src: '/src',
      $lib: '/src/lib',
      $shared: '/src/shared',
    },
  },
});
