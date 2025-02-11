<script lang="ts">
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
	<div class="page-container__background--text">{backgroundInjectable.aside}</div>
</main>

<style lang="scss">
	.page-container {
		@extend %page-grid-container;
		@include parallax-container;
		width: 100%;
		overflow-y: auto;
		overflow-x: clip;
		padding-inline: get-static-sp('md');
		padding-top: calc(#{$page-header-height} + 1.25rem);
		// scrollbar-width: none;
		scroll-behavior: smooth;
		position: relative;
		z-index: 2;
		&__background--text {
			position: absolute;
			top: 0;
			right: 0;
			margin: auto;
			@extend %global__display--h1;
			@include parallax-item(-0.4);
			z-index: -2;
			font-size: get-static-fsz('x10');
			line-height: 1;
			color: get-light-dark('300', '900', 0.38, 0.2);
			writing-mode: vertical-lr;
			text-wrap: nowrap;
			text-orientation: sideways;
			user-select: none;
			pointer-events: none;
		}
	}
</style>
