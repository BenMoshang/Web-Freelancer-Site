<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { initGsapScroll } from '$lib/animations/scroll.svelte';

	let gsap: any;
	let ScrollTrigger: any;

	// Types for injectable data
	interface HeroContent {
		titleFirstHalf: string;
		titleSecondHalf: string;
		subtitle: string;
	}

	interface Benefit {
		firstHalf: string;
		seperator: string;
		secondHalf: string;
	}

	// Updated hero content with refined copy
	const heroInjectable: HeroContent = {
		titleFirstHalf: 'MODERN WEB',
		titleSecondHalf: 'DEVELOPMENT',
		subtitle: 'your vision, our expertise'
	};

	const benefitsInjectable: Benefit[] = [
		{
			firstHalf: 'AVAILABLE',
			seperator: '•',
			secondHalf: 'EVERYWHERE'
		},
		{
			firstHalf: 'WEB DEVELOPMENT',
			seperator: '•',
			secondHalf: 'DESIGN'
		}
	];
	const ICONS = {
		globe: {
			viewBox: '0 0 512 512',
			path: 'M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z'
		},
		code: {
			viewBox: '0 0 640 512',
			path: 'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
		}
	} as const;

	/* Refs to DOM elements with proper typing */
	let topPanel: HTMLElement;
	let bottomPanel: HTMLElement;
	let heroSection: HTMLElement;
	let heroBackground: SVGSVGElement;
	let doorTimeline: gsap.core.Timeline;

	// Animation configuration
	const ANIMATION_CONFIG = {
		duration: 4,
		ease: 'power1.inOut',
		force3D: true
	} as const;

	function createDoorTimeline() {
		return gsap.timeline({
			scrollTrigger: {
				trigger: heroSection,
				start: 'top top',
				end: '+=100%',
				pin: true,

				pinSpacing: true,
				scrub: 2,
				markers: false,
				anticipatePin: 2,
				fastScrollEnd: false,
				preventOverlaps: true,
				onEnter: () => {
					// Clear any inline styles applied by GSAP when the ScrollTrigger enters
					gsap.set([topPanel, bottomPanel], { clearProps: 'all' });
				}
			}
		});
	}

	function setupAnimations() {
		doorTimeline = createDoorTimeline();

		// Pre-define will-change properties for smoother performance
		gsap.set([topPanel, bottomPanel], { willChange: 'transform' });
		gsap.set(heroSection, { willChange: 'filter, transform' });
		gsap.set(heroBackground, { willChange: 'opacity, transform' });

		// Create the animation sequence for the panels and background
		doorTimeline
			.to(topPanel, {
				yPercent: -100,
				...ANIMATION_CONFIG
			})
			.to(
				bottomPanel,
				{
					yPercent: 100,
					...ANIMATION_CONFIG
				},
				'<'
			)
			.to(
				heroSection,
				{
					filter: 'blur(8px)',
					scale: 1.5,
					...ANIMATION_CONFIG,
					transformOrigin: 'center center'
				},
				'<'
			)
			.to(
				heroBackground,
				{
					opacity: 0,
					scale: 1.2,
					...ANIMATION_CONFIG
				},
				'<'
			)
			// Clean up "will-change" properties after the animation completes
			.add(() => {
				gsap.set([topPanel, bottomPanel, heroSection, heroBackground], {
					willChange: 'auto'
				});
			});
	}

	let gsapContext: gsap.Context;
	onMount(async () => {
		if (browser) {
			const gsapModule = await import('gsap');
			const scrollTriggerModule = await import('gsap/ScrollTrigger');

			gsap = gsapModule.default;
			ScrollTrigger = scrollTriggerModule.ScrollTrigger;

			// Register ScrollTrigger
			gsap.registerPlugin(ScrollTrigger);

			// Initialize scroll functionality
			initGsapScroll();

			// Normalize scroll behavior
			ScrollTrigger.normalizeScroll();

			// Create GSAP context and setup animations
			gsapContext = gsap.context(() => {
				setupAnimations();
			}, heroSection);
		}
	});

	onDestroy(() => {
		if (gsapContext) {
			gsapContext.revert();
		}
		if (doorTimeline) {
			doorTimeline.scrollTrigger?.kill();
			doorTimeline.kill();
		}
	});
</script>

<section class="hero" bind:this={heroSection} aria-label="Hero Section" role="banner">
	<!-- Animated background SVG -->
	<svg
		class="hero__background"
		bind:this={heroBackground}
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 800 800"
		aria-hidden="true"
	>
		<defs>
			<radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
				<stop offset="15%" stop-color="currentColor" stop-opacity="0.5"></stop>
				<stop offset="75%" stop-color="currentColor" stop-opacity="1"></stop>
				<stop offset="100%" stop-color="currentColor" stop-opacity="1"></stop>
			</radialGradient>
		</defs>
		<g fill="currentColor">
			{#each Array(10) as _, i}
				{@const radius = 352 - i * 32}
				{@const opacity = 0.05 + i * 0.086}
				<circle r={radius} cx="400" cy="400" opacity={opacity.toFixed(2)}></circle>
			{/each}
		</g>
	</svg>

	<div class="hero__panel hero__panel--top" bind:this={topPanel} aria-hidden="true">
		<h2 class="hero__subtitle">{heroInjectable.subtitle}</h2>

		<h1 data-text={heroInjectable.titleFirstHalf} class="hero__title hero__title--top">
			{heroInjectable.titleFirstHalf}
		</h1>
	</div>

	<div class="hero__panel hero__panel--bottom" bind:this={bottomPanel}>
		<h1 data-text={heroInjectable.titleSecondHalf} class="hero__title hero__title--bottom">
			{heroInjectable.titleSecondHalf}
		</h1>
		<ul class="hero__benefits" aria-label="Key Benefits">
			{#each benefitsInjectable as benefit, index}
				<li class="hero__benefits-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="10"
						width={index === 0 ? '10' : '12.5'}
						viewBox={index === 0 ? ICONS.globe.viewBox : ICONS.code.viewBox}
						aria-hidden="true"
						fill="currentColor"
						class="hero__benefits-icon"
					>
						<path fill="currentColor" d={index === 0 ? ICONS.globe.path : ICONS.code.path} />
					</svg>
					<strong class="hero__benefits-text">
						<span class="hero__benefits-text--first-half">{benefit.firstHalf}</span>
						<span class="hero__benefits-text--seperator">{benefit.seperator}</span>
						<span class="hero__benefits-text--second-half">{benefit.secondHalf}</span>
					</strong>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	*,
	*::before,
	*::after {
		transform: translateZ(0);
	}

	.hero {
		@extend %page-grid-item;
		position: relative;
		display: grid;
		grid-template: 1fr 1fr / 1fr;
		inline-size: 100%;
		block-size: 100dvh;
		contain: layout size;
		grid-template-areas:
			'top'
			'bottom';
		overflow: hidden;
		overscroll-behavior: contain;
		perspective: 1000px;
		place-content: center;
		transform-style: preserve-3d;

		&__background {
			position: absolute;
			z-index: -1;
			inset: 0;
			inline-size: 100%;
			block-size: 100%;
			color: get-light-dark('500', '600', 0.38, 1);
			contain: strict;
			mix-blend-mode: soft-light;
			object-fit: cover;
			opacity: 0.5;
		}

		&__panel {
			display: flex;
			flex-direction: column;
			inline-size: 100%;
			block-size: 100%;
			transform: translateY(0);
			contain: content;

			&--top {
				justify-content: flex-end;
				grid-area: top;
			}

			&--bottom {
				grid-area: bottom;
			}
		}

		&__title {
			@extend %global__display--h1;
			@include apply-3d-text-shadow;
			position: relative;
			z-index: 2;
			line-height: 1;
			text-align: center;
			contain: content;
			font-kerning: none;
			letter-spacing: -0.05em;
			text-wrap: nowrap;

			&::after {
				@include apply-gradient-text;
				content: attr(data-text);
				position: absolute;
				z-index: -2;
				inset: 0;
				margin: auto;
			}
		}

		&__subtitle {
			@extend %global__label;
			position: relative;
			margin-block-end: get-responsive-sp('lg');
			margin-inline: auto;
			padding-block: get-responsive-sp('xs');
			padding-inline: get-responsive-sp('sm');
			border-radius: 5rem;
			background: get-light-dark('600', '700', 0.38, 0.5);
			text-align: center;
			text-transform: uppercase;
			text-wrap: balance;

			@include apply-shadow('medium', true);

			&::after {
				content: '';
				position: absolute;
				z-index: -1;
				inset: 0;
				border-radius: 5rem;

				@include apply-shadow('low', false);
			}
		}

		&__benefits {
			display: none;
			contain: content;

			@include respond-to('mobile') {
				display: flex;
				justify-content: space-between;
				align-items: center;
				inline-size: 100%;
				margin-block-start: auto;
				margin-inline: auto;
				padding-block-end: get-static-sp('sm');

				@include apply-page-max-inline;
			}
		}

		&__benefits-item {
			@include flex-center;
			contain: content;

			@include apply-gap('xs');
		}

		&__benefits-icon {
			flex-shrink: 0;
			inline-size: 1em;
			block-size: 1em;
			color: get-typography-color('tertiary');
		}

		&__benefits-text {
			@extend %global__label;
			display: inline-flex;
			align-items: center;
			line-height: 0;
			text-wrap: nowrap;

			@include apply-gap('xs');

			&--seperator {
				color: get-typography-color('tertiary');
			}
		}
	}
</style>
