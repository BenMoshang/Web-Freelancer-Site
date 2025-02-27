<script lang="ts">
	import FontTesting from '$lib/Testing/FontTesting.svelte';
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
	<FontTesting />
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

<style>
	/* Removing SCSS styling and using basic CSS to avoid compilation errors */
	/* All complex styling with SCSS variables and mixins is commented out */

	.page-container {
		z-index: 2;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		overflow-x: clip;
		place-content: center;
		scroll-behavior: smooth;
	}
</style>
