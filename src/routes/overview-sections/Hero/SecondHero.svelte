<script lang="ts">
	const heroInjectable = {
		label: 'FREELANCE AGENCY',
		description: `Premium tailored web application services for brands to connect better with their audiences.`
	};
</script>

<section class="hero">
	<div class="hero__background--text">01</div>
	<!-- <div class="hero__title-container"> -->
	<div class="hero__title-container">
		<h1 class="hero__title hero__title--first">DESIGN</h1>
		<h1 class="hero__title hero__title--second">DEVELOP</h1>
		<h1 class="hero__title hero__title--third">DELIVER</h1>
	</div>
	<div class="hero__description-container">
		<p class="hero__description-container-description">{heroInjectable.description}</p>

		<button class="hero__description-container-button">
			<span class="hover-underline-animation">CONTACT US</span>

			<svg
				id="arrow-horizontal"
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="10"
				viewBox="0 0 46 16"
			>
				<path
					id="Path_10"
					data-name="Path 10"
					d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
					transform="translate(30)"
				></path>
			</svg>
		</button>
	</div>

	<!-- </div> -->
</section>

<style scoped lang="scss">
	.hero {
		// outline: 1px solid red;
		@extend %page-grid-item;
		@include apply-br;
		position: relative;

		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		@include apply-gap('3xl');
		width: 100%;
		min-height: 100vh;

		&__background--text {
			position: absolute;
			bottom: 0;
			right: 0;
			margin: auto;
			@extend %global__display--h1;
			color: get-light-dark('50', '900');
			opacity: 50%;
			isolation: isolate;

			font-size: get-static-fsz('x12');
			line-height: 1;
			writing-mode: vertical-lr;
			text-wrap: nowrap;
			text-orientation: sideways;
			user-select: none;
			pointer-events: none;
			z-index: -1; // Changed from -10000 to -1 since we just need it behind the content
		}
		& > * {
			// outline: 1px solid yellowgreen;
		}

		&__title-container {
			@include apply-gap('md');

			// @include apply-br;
			border-inline-start: 0.25rem solid get-light-dark('400', '800', 0.38, 0.5);
			// background: get-background-color('primary');
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			mix-blend-mode: difference;
			align-content: center;
			position: relative; // Added to create stacking context
			z-index: 1; // Added to ensure content stays above background text
		}
		&__title {
			@extend %global__display--h1;
			@include text-pop-up-top;
			// font-size: get-static-fsz('x8');
			color: get-light-dark('900', '50');
			@include apply-margin('xs', 'left');
			position: relative;
			block-size: fit-content;
			inline-size: fit-content;
			isolation: isolate;
			&--first {
				justify-self: start;
			}
			&--second {
				// justify-self: end;
				// text-align: right;
			}
			&--third {
				justify-self: start;
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

		&__description-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative; // Added to create stacking context
			z-index: 1; // Added to ensure content stays above background text

			&-description {
				@include apply-margin('lg', 'bottom');

				@extend %global__body--lg;
				@include apply-typography-color('secondary');
				text-wrap: pretty;
				inline-size: 100%;
				max-inline-size: 80ch;
			}

			&-button {
				@include cta-styles;
				text-align: left;
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
