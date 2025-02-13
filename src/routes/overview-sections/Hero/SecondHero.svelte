<script lang="ts">
	const heroInjectable = {
		aside: 'MODERN WEB DEVELOPMENT',
		description: `Tailored premium digital experiences for brands that connect your audience.`
	};
</script>

<section class="hero">
	<!-- <div class="hero__title-container"> -->
	<h1 class="hero__title hero__title--first">MY</h1>
	<h1 class="hero__title hero__title--second">MODERN</h1>
	<h1 class="hero__title hero__title--third">SITE</h1>
	<p class="hero__description">{heroInjectable.description}</p>
	<!-- </div> -->
</section>

<style scoped lang="scss">
	.hero {
		@extend %page-grid-item;
		display: grid;
		place-items: center;
		grid-template-columns: 1fr;
		grid-template-areas: 'title-first' 'title-second' 'title-third';
		grid-template-rows: subgrid;
		width: 100%;
		min-height: 100dvh;
		overflow: hidden;
		overscroll-behavior: contain;

		padding-inline: get-static-sp('md');

		&__title {
			@extend %global__display--h1;
			// @include gradient-text('700', '900', '100', '300', 145deg);

			position: relative;
			letter-spacing: -0.05em;
			text-align: center;
			&--first {
				grid-area: title-first;
			}
			&--second {
				grid-area: title-second;
			}
			&--third {
				grid-area: title-third;
			}
			&::after {
				@include text-pop-up-top;
				content: attr(data-text);
				position: absolute;
				inset: 0;
				margin: auto;
				z-index: -1;
			}
		}
		&__description {
			display: none;
			margin-right: auto;
			text-wrap: balance;
			@extend %global__body--lg;
			max-width: 65ch; // Reduced max-width to prevent orphaned text
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
