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
	<h1 class="opening__title">
		{openingInjectable.titleFirstHalf}
		{openingInjectable.titleSecondHalf}
	</h1>
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
		overscroll-behavior: contain;
		place-content: center;
	}
</style>
