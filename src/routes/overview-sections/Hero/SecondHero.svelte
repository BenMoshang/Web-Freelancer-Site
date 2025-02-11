<script lang="ts">
	const heroInjectable = {
		aside: 'MODERN WEB DEVELOPMENT',
		description: `Brand tailored premium digital experiences that connect your audience.`
	};
</script>

<section class="hero">
	<!-- <div class="hero__title-container"> -->

	<h2 class="hero__description">{heroInjectable.description}</h2>
	<!-- </div> -->
</section>

<style scoped lang="scss">
	.hero {
		@extend %page-grid-item;
		@include apply-page-max-inline;
		width: 100%;

		// overscroll-behavior: contain;
		display: flex;
		flex-direction: column;
		// padding-inline: get-static-sp('md');

		&__description {
			@extend %global__body--lg;
			@include apply-max-ch('body');
			grid-area: description;
			place-self: center;
			z-index: 1;
			outline: 1px dashed red;
		}

		&__background {
			position: absolute;
			top: 0;
			left: 0;
			@extend %global__display--h1;
			@include parallax-item(-0.4);
			grid-area: aside;
			z-index: -2;
			font-size: get-static-fsz('x10');
			line-height: 0;
			color: get-light-dark('50', '900');
			opacity: 0.2;
			writing-mode: vertical-rl;
			text-align: right;
			text-wrap: nowrap;
			text-orientation: sideways-left;
			user-select: none;
			pointer-events: none;
			transform-origin: center left;
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
