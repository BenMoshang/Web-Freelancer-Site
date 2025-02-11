<script lang="ts">
	const heroInjectable = {
		aside: 'MODERN WEB DEVELOPMENT',
		description: `Tailored premium digital experiences for brands that connect your audience.`
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
		width: 100%;
		margin: 0 auto;
		// overscroll-behavior: contain;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// padding-inline: get-static-sp('md');

		&__description {
			margin-right: auto;
			@extend %global__body--lg;
			@include apply-max-ch('body');
			z-index: 1;
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
