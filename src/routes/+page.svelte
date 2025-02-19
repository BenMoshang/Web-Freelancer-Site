<script lang="ts">
	import HeroSection from './overview-sections/Hero/HeroSection.svelte';
	import OpeningSection from './overview-sections/Opening/OpeningSection.svelte';
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
	<OpeningSection />
	<!-- <SecondHero /> -->
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
		@include apply-padding('sm', 'inline');
		@extend %page-grid-container;
		z-index: 2;
		inline-size: 100%;
		block-size: 100%;
		margin: 0 auto;
		overflow-x: clip;
		place-content: center;

		// scrollbar-width: none;
		scroll-behavior: smooth;

		&::after {
			content: '';
			position: fixed;
			z-index: -2;
			inset: 0;
			inline-size: 100%;
			block-size: 100%;
			margin: auto;
			background: get-light-dark('page-background', 'page-background');
			transform: translateZ(0);
			opacity: 0.08;
			pointer-events: none;
			will-change: filter;

			@media (prefers-color-scheme: dark) {
				filter: url('#noiseFilter2') contrast(300%) brightness(120%) opacity(1);
			}

			@media (prefers-color-scheme: light) {
				filter: url('#noiseFilter') contrast(300%) brightness(50%) opacity(1);
				opacity: unset;
			}
		}
	}
</style>
