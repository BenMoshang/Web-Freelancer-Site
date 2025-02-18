<script lang="ts">
	// Define hero content for injection
	const heroInjectable = {
		label: 'FREELANCE AGENCY',
		description: `Premium tailored web services for brands to connect better with their audiences.`
	};
</script>

<section class="hero">
	<div class="hero__title-container">
		<div class="hero__title-container-header">
			<div class="hero__title-container-header-circle-group">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<small>MODERN WEB DEVELOPMENT</small>
		</div>
		<!-- Hero Titles -->
		<h1 data-text="DESIGN" class="hero__title hero__title--first">DESIGN</h1>
		<h1 data-text="DEVELOP" class="hero__title hero__title--second">DEVELOP</h1>
		<h1 data-text="DEPLOY" class="hero__title hero__title--third">DEPLOY</h1>
	</div>

	<div class="hero__description-container">
		<p class="hero__description-container-description">
			{heroInjectable.description}
		</p>
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
</section>

<style scoped lang="scss">
	* {
		box-sizing: border-box;
	}

	.hero {
		@extend %page-grid-item;
		@include apply-br;
		@include apply-padding('2xl', 'block', false);
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100svh;
		margin: 0 auto;
		align-content: center;

		@include apply-gap('3xl');

		&__title-container {
			@include apply-br;
			@include apply-gap('lg');
			@include apply-padding('md', 'inline', false);
			@include apply-padding('md', 'bottom', false);

			$border-color: get-light-dark('500', '700', 0.38, 0.5);
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			border: 0.25rem dashed $border-color;
			overflow-x: clip;

			&-header {
				@include apply-padding('sm', 'block', false);
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 0.125rem dashed $border-color;

				&-circle-group {
					display: flex;
					justify-content: space-between;
					align-items: center;

					@include apply-gap('sm');
					inline-size: min-content;
				}

				// Circular indicators styling
				& span {
					inline-size: 0.25rem;
					block-size: 0.25rem;
					border-radius: 50%;
					background: $border-color;
				}

				// Optional small text styling (if needed)
				& small {
					@extend %global__label;
					margin-inline: auto;
					color: get-light-dark('500', '700');
					font-size: 0.75rem;
					text-transform: small-caps;
					text-wrap: nowrap;
				}
			}
		}

		&__title {
			@extend %global__display--h1;
			@include apply-gradient-text;
			position: relative;

			&::after {
				content: attr(data-text);
				position: absolute;
				z-index: -1;
				inset: 0;
				margin: auto;
				isolation: isolate;

				@include apply-3d-text-shadow;
			}
		}

		&__description-container {
			display: flex;
			flex-direction: column;
			justify-content: center;

			&-description {
				@include apply-margin('lg', 'bottom');
				@extend %global__body--lg;
				@include apply-typography-color('secondary');
				inline-size: 100%;
				max-inline-size: 80ch;
				text-wrap: pretty;
			}

			&-button {
				@include cta-styles;
				text-align: left;
			}
		}
	}
</style>
