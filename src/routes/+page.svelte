<script lang="ts">
	import ShadowTesting from '$lib/Testing/ShadowTesting.svelte';
	import OpeningSection from './overview-sections/Hero/OpeningSection.svelte';
	import SecondHero from './overview-sections/Hero/SecondHero.svelte';
	const backgroundInjectable = {
		aside: 'MODERN WEB DEVELOPMENT'
	};
</script>

<svelte:head>
	<title>My Modern Site</title>
	<meta
		name="description"
		content="Refresh your web presence with our expert web development services tailored for B2B enterprises. 
		Our agency specializes in creating modern, scalable, and innovative digital solutions to drive your business forward. 
		Partner with us for expert web design, development, and digital marketing strategies that deliver measurable results."
	/>
	<!-- Make sure your site is added to the home screen -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<!-- Options: default, black, black-translucent -->
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>

<main class="page-container">
	<SecondHero />
</main>
<svg>
	<filter id="noiseFilter">
		<feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
	</filter>
</svg>

<svg>
	<filter id="noiseFilter2">
		<feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
	</filter>
</svg>

<style lang="scss">
	.page-container {
		@extend %page-grid-container;
		width: 100%;
		block-size: 100%;
		margin: 0 auto;
		place-content: center;
		overflow-x: clip;
		padding-inline: get-static-sp('md');
		padding-top: calc(#{$page-header-height} + 1.25rem);
		// scrollbar-width: none;
		scroll-behavior: smooth;
		z-index: 2;

		&::after {
			content: '';
			position: fixed; // Changed to fixed for better performance
			inset: 0;
			margin: auto;
			inline-size: 100%;
			block-size: 100%;
			opacity: 0.08; // Reduced opacity for subtlety
			background: get-light-dark('page-background', 'page-background');
			filter: url(#noiseFilter2) contrast(300%) // Increased contrast
				brightness(120%) // Normalized brightness
				opacity(1); // Additional opacity control
			pointer-events: none;
			z-index: -2;
			will-change: filter; // Optimize for animation
			transform: translateZ(0); // Force GPU acceleration
		}
	}
</style>
