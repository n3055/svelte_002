import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: vercel({
      // Explicitly set the Node.js runtime to version 18
    })
  },
  preprocess: vitePreprocess()
};

export default config;
