<script>
	import { onMount } from 'svelte';

	// Current position of the ring
	let posX = 0;
	let posY = 0;
	// Target position from the mouse event
	let targetX = 0;
	let targetY = 0;

	// Easing factor for smooth movement (0 < easing < 1)
	const easing = 1;

	const handleMouseMove = (event) => {
		targetX = event.clientX;
		targetY = event.clientY;
	};

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);

		const animate = () => {
			// Update current positions using linear interpolation (lerp)
			posX += (targetX - posX) * easing;
			posY += (targetY - posY) * easing;
			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<!-- Apply the transform so that the center of the ring follows the cursor -->
<div class="cursor" style:transform={`translate(${posX - 12}px, ${posY - 12}px)`}></div>

<style lang="scss">
	.cursor {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999; /* 1 less than header (1000) to avoid overlap */
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background: rgb(255 255 255 / 89.3%);
		mix-blend-mode: difference;
		pointer-events: none; /* Ensures the ring doesn't interfere with page interactions */
	}

	@media (min-width: $MOBILE_BREAKPOINT) {
		.cursor {
			display: none;
		}
	}
</style>
