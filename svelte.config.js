import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({
		// SCSS preprocessing configuration
		scss: {
			prependData: `@use '$lib/scss/main.scss' as *;`,
			includePaths: ['./src/lib/scss'],
			renderSync: true, // Synchronous compilation for better performance
			outputStyle: 'compressed' // Minify CSS output
		},
		// Enable source maps for development
		sourceMap: true,
		// Optimize postcss processing
		postcss: true,
		// Template literal preprocessing
		script: {
			typescript: {
				// Enable type checking in components
				typeCheck: true,
				// Optimize TypeScript compilation
				compilerOptions: {
					module: 'esnext',
					target: 'esnext'
				}
			}
		},
		// Style preprocessing options
		style: {
			// Enable CSS module support
			cssModules: true
		}
	}),

	kit: {
		// Configure the adapter
		adapter: adapter(),
		// Optimize asset handling
		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes'
		},
		// Enable inlining of smaller assets
		inlineStyleThreshold: 8192, // 8kb
		// CSP settings for better security
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self']
			}
		},
		// Enable service worker for offline support
		serviceWorker: {
			register: true
		}
	}
};

export default config;
