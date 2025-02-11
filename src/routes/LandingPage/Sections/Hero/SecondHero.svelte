<script lang="ts">
	const heroInjectable = {
		aside: 'MODERN WEB DEVELOPMENT',
		description: `Brand tailored premium digital experiences that connect your audience.`
	};
</script>

<section class="hero">
	<!-- <div class="hero__title-container"> -->
	<aside class="hero__aside">
		<div class="hero__aside-background">{heroInjectable.aside}</div>
	</aside>
	<div class="hero__content">
		<h2 class="hero__content-description">{heroInjectable.description}</h2>
	</div>
	<!-- </div> -->
</section>

<style scoped lang="scss">
	.hero {
		@include parallax-container(1);
		@include apply-page-max-inline;
		scroll-behavior: smooth;
		@extend %page-grid-item;
		inline-size: 100%;
		display: grid;
		overflow-y: hidden;
		place-content: center;
		grid-template-columns: subgrid;
		grid-template-areas: 'aside content';
		margin: 0 auto;
		// overscroll-behavior: contain;
		padding-inline: get-static-sp('md');

		& > * {
			// outline: 1px dashed yellow;
		}

		@include respond-to('desktop') {
			margin-inline: auto;
		}
		&__content {
			@include parallax-item(0.5);
			position: absolute;
			inset: 0;
			margin: auto;
			inline-size: fit-content;
			block-size: fit-content;
			&-description {
				@extend %global__display--h1;
				text-align: right;
				text-wrap: nowrap;
				grid-area: title;
				z-index: 1;
				opacity: 0.95;
				transform-origin: center right;
			}
		}
		&__aside {
			@include parallax-item(-0.5);
			display: grid;
			grid-template-columns: subgrid;
			grid-area: aside;
			z-index: -2;

			&-background {
				@extend %global__display--h1;
				font-size: get-static-fsz('x12');
				line-height: 0.6;
				color: get-light-dark('50', '900');
				opacity: 0.3;
				writing-mode: vertical-rl;
				text-align: right;
				text-wrap: nowrap;
				text-orientation: sideways-left;
				user-select: none;
				pointer-events: none;
				transform-origin: center left;
			}
		}
	}

	// &__title-container {
	// 	// @include apply-padding('md', 'inline', false);

	// 	grid-area: title;
	// 	display: grid;
	// 	inline-size: min-content;
	// 	align-items: start;
	// 	justify-items: center;
	// 	block-size: min-content;
	// 	grid-template-columns: repeat(3, 1fr);
	// 	grid-template-rows: repeat(1, 1fr);
	// 	grid-template-areas: 'title-first title-second title-third';
	// 	@include apply-gap('lg');
	// 	// rotate: -90deg;
	// }
</style>
