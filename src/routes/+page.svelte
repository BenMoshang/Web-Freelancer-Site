<script lang="ts">
	import FontTesting from '$lib/Testing/FontTesting.svelte';
	import HeroSection from './overview-sections/Hero/HeroSection.svelte';
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
	<HeroSection />
	<SecondHero />
	<!-- <FontTesting /> -->
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
		@include apply-page-max-inline;
		@include apply-padding('md', 'inline');

		@extend %page-grid-container;
		inline-size: 100%;
		block-size: 100%;
		margin: 0 auto;
		place-content: center;
		overflow-x: clip;
		// scrollbar-width: none;
		scroll-behavior: smooth;
		z-index: 2;

		&::after {
			content: '';
			position: fixed;
			inset: 0;
			margin: auto;
			inline-size: 100%;
			block-size: 100%;
			background: get-light-dark('page-background', 'page-background');
			opacity: 0.08;
			@media (prefers-color-scheme: dark) {
				filter: url(#noiseFilter2) contrast(300%) brightness(120%) opacity(1);
			}

			@media (prefers-color-scheme: light) {
				filter: url(#noiseFilter) contrast(300%) brightness(50%) opacity(1);
				opacity: unset;
			}

			pointer-events: none;
			z-index: -2;
			will-change: filter;
			transform: translateZ(0);
		}
	}
</style>
