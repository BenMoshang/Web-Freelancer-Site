<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	const heroInjectable = {
		titleFirstHalf: 'MODERN',
		titleSecondHalf: 'WEB',
		titleThirdHalf: 'DEVELOPMENT',
		subtitle: 'FUTURE-READY WEBSITES, BUILT TODAY'
	};
</script>

<section class="hero">
	<div class="hero__title-container">
		<h1 class="hero__title hero__title--first">{heroInjectable.titleFirstHalf}</h1>
		<h1 class="hero__title hero__title--second">{heroInjectable.titleSecondHalf}</h1>
		<h1 class="hero__title hero__title--third">{heroInjectable.titleThirdHalf}</h1>
	</div>
</section>

<style scoped lang="scss">
	.hero {
		@extend %page-grid-item;
		overscroll-behavior: contain;
		padding-block-start: calc(#{$page-header-height} + #{get-static-sp('lg')});
		min-block-size: 100dvh; /* One full viewport height */
		inline-size: 100%;
		overflow: hidden; /* No scroll bars inside hero itself */
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(12.5rem, 1fr));
		grid-template-columns: repeat(1, 1fr);
		grid-template-areas:
			'title'
			'subtitle'
			'content';

		&__title-container {
			@include apply-padding('md', 'inline', false);
			@include apply-page-max-inline;
			grid-area: title;
			display: grid;
			grid-template-columns: subgrid;
			grid-template-rows: repeat(3, 1fr);
			grid-template-areas:
				'title-first'
				'title-second'
				'title-third';
			@include apply-gap('lg');
		}

		&__title {
			@extend %global__display--h1;
			text-align: left;
			color: get-light-dark('darkest', 'lightest');
			&--first {
				grid-area: title-first;
			}

			&--second {
				grid-area: title-second;
				text-align: right;
			}

			&--third {
				grid-area: title-third;
			}
		}
	}
</style>
