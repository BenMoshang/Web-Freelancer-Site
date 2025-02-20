<script lang="ts">
	// Types for injectable data
	interface OpeningContent {
		titleFirstHalf: string;
		titleSecondHalf: string;
		subtitle: string;
	}

	// Updated hero content with refined copy
	const openingInjectable: OpeningContent = {
		titleFirstHalf: 'MODERN WEB',
		titleSecondHalf: 'DEVELOPMENT',
		subtitle: 'your vision, our expertise'
	};
</script>

<section class="opening">
	<div class="opening__title-container">
		<h2 class="opening__title-text">AS INTERNET GROWS, WEBS ITES BECOME OUTDATED</h2>
	</div>
</section>

<style scoped lang="scss">
	.opening {
		@extend %page-grid-item;
		position: relative;
		display: grid;
		inline-size: 100%;
		block-size: 100%;
		contain: layout size;
		overflow: hidden;
		place-content: center;
		transform-origin: center;
		&__title-container {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&__title-text {
				position: relative;
				z-index: 1;
				background-clip: text;
				-webkit-background-clip: text;
				color: transparent;
				background-color: get-light-dark('500', '600', 0.38, 1);
			}
		}
		&__background {
			--stroke-width: 3;
			--stroke-linejoin: round;
			--gradient-start: currentColor;
			--gradient-end: currentColor;
			--feather-amount: 15.625rem;
			position: absolute;
			inset: 0;
			margin-bottom: 0;
			z-index: -2;
			block-size: 100%;
			inline-size: 100%;
			object-fit: contain;
			color: get-light-dark('500', '600', 0.38, 1);
			mix-blend-mode: soft-light;
			contain: strict;
			rotate: 180deg;

			& path {
				position: relative;
				object-fit: contain;
				stroke-width: var(--stroke-width);
				stroke-linejoin: var(--stroke-linejoin);
			}
		}
	}
</style>
