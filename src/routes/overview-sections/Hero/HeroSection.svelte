<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	// import { initGsapScroll } from '$lib/animations/scroll.svelte';

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
	let heroSection: HTMLElement;

	// GSAP animation functionality is temporarily disabled
	onMount(() => {
		// Animation initialization would go here
	});
</script>

<section class="hero-container" bind:this={heroSection}>
	<div class="hero-content">
		<h2 class="hero-subtitle">{heroInjectable.subtitle}</h2>
		<h1 class="hero-title">
			{heroInjectable.titleFirstHalf}
			{heroInjectable.titleSecondHalf}
		</h1>

		<div class="hero-benefits">
			{#each benefitsInjectable as benefit, index}
				<div class="hero-benefit-item">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="10"
						width={index === 0 ? '10' : '12.5'}
						viewBox={index === 0 ? ICONS.globe.viewBox : ICONS.code.viewBox}
						aria-hidden="true"
						fill="currentColor"
					>
						<path fill="currentColor" d={index === 0 ? ICONS.globe.path : ICONS.code.path} />
					</svg>
					<span class="hero-benefit-text">
						<span>{benefit.firstHalf}</span>
						<span class="separator">{benefit.seperator}</span>
						<span>{benefit.secondHalf}</span>
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Converted from SCSS to basic CSS to avoid compilation errors */
	.hero-container {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: grid;
		place-items: center;
		z-index: 1;
		overflow: hidden;
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 20px;
		padding: 2rem;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: 3.5rem;
		font-weight: 800;
		line-height: 1.1;
		margin: 0;
		position: relative;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0;
	}

	.hero-benefits {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
	}

	.hero-benefit-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.hero-benefit-text {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.875rem;
		font-weight: 600;
	}

	.separator {
		opacity: 0.6;
		margin: 0 0.25rem;
	}
</style>
