<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Lenis from '@studio-freight/lenis'; // Adjust the import if necessary

	let lenisInstance: Lenis | null = null; // Add type for Lenis instance
	let rafId: number | null = null; // Add type for requestAnimationFrame ID
	let isActive = true; // Flag to control the RAF loop

	onMount(() => {
		// Check if the user prefers reduced motion
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// Only initialize smooth scrolling if reduced motion is not preferred
		if (!prefersReducedMotion) {
			lenisInstance = new Lenis({
				duration: 0.8,
				easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Add type for easing parameter
				orientation: 'vertical',
				gestureOrientation: 'vertical',
				smoothWheel: true,
				wheelMultiplier: 1.5,
				touchMultiplier: 2,
				infinite: false
			});

			// Define the RAF loop to keep Lenis updated
			const raf = (time: number) => {
				if (!isActive) return; // Exit if the component has been destroyed
				lenisInstance?.raf(time); // Use optional chaining
				rafId = requestAnimationFrame(raf); // Schedule the next frame
			};

			// Start the RAF loop
			rafId = requestAnimationFrame(raf);
		}
	});

	// Clean up when the component unmounts
	onDestroy(() => {
		isActive = false; // Prevent further RAF loop calls
		if (rafId) cancelAnimationFrame(rafId); // Check if rafId exists before canceling
		// If Lenis offers a destroy method, use it to remove internal listeners/cleanup
		if (lenisInstance?.destroy) {
			lenisInstance.destroy();
		}
	});
</script>
