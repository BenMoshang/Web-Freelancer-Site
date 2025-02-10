import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Restrict file access outside the project root for better security
			allow: ['..']
		},
		//ben desktop
		// host: '192.168.0.167',
		//ben laptop
		host: '192.168.0.85',
		port: 3000
	},
	build: {
		// To improve performance by reducing the size of the built files
		minify: 'esbuild',
		target: 'esnext',
		cssCodeSplit: true,
		cssMinify: true,
		rollupOptions: {
			output: {
				manualChunks: {
					'gsap-core': ['gsap']
				}
			}
		}
	},
	optimizeDeps: {
		// Optimize SvelteKit and Vite dependencies for better build times
		exclude: ['svelte']
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: '@use "$lib/scss/main.scss" as *;',
				includePaths: ['./src/lib/scss']
			}
		}
	}
} satisfies UserConfig);
