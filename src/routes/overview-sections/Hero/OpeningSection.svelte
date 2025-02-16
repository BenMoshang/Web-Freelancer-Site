<script lang="ts">
	const openingInjectable = {
		titleFirstHalf: 'MY MODERN',
		titleSecondHalf: 'SITE'
	};
</script>

<section class="opening" bind:this={openingSection} role="banner" aria-label="opening Section">
	<!-- TODO: animate text how the website better off has it!!! -->

	<h1
		data-text={openingInjectable.titleFirstHalf + ' ' + openingInjectable.titleSecondHalf}
		class="opening__title opening__title--bottom"
	>
		{openingInjectable.titleFirstHalf + ' ' + openingInjectable.titleSecondHalf}
	</h1>
</section>

<style scoped lang="scss">
	.opening {
		@extend %page-grid-item;

		z-index: 50000;
		background: get-light-dark('page-background', 'page-background');

		&__title {
			@extend %global__display--h1;
			// @include apply-gradient-text('700', '900', '100', '300', 145deg);

			position: relative;
			letter-spacing: -0.05em;
			text-align: center;

			&::after {
				@include apply-3d-text-shadow;
				content: attr(data-text);
				position: absolute;
				inset: 0;
				margin: auto;
				z-index: -1;
			}
		}
	}
</style>
