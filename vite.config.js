import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
		  // Restrict file access outside the project root for better security
		  allow: [".."],
		},
		host: "10.0.0.123",
		port: 3000,
	  },  build: {
		// To improve performance by reducing the size of the built files
		minify: "esbuild",
		target: "esnext",
	  },  optimizeDeps: {
		// Optimize SvelteKit and Vite dependencies for better build times
		exclude: ["svelte"],
	  },
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "$lib/Scss/index.scss" as *;'
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

