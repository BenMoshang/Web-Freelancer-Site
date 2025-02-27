<section>
	<h1 class="display--h1">LARGEST DISPLAY</h1>
	<h2 class="display--h2">MEDIUM DISPLAY</h2>

	<h2 class="heading--h2">LARGE HEADING</h2>
	<h3 class="heading--h3">MEDIUM HEADING</h3>
	<h4 class="heading--h4">SMALL HEADING</h4>

	<p class="body--lg">LARGE BODY</p>
	<p class="body--md">MEDIUM BODY</p>

	<p class="label">LABEL</p>
</section>

<!-- Commented out SCSS with compilation errors -->
<!-- 
<style lang="scss">
	section {
		position: fixed;
		inset: 0;
		width: 100%;
		margin: auto;
		padding-top: 10rem;
		padding-inline: 1rem;

		@include flex-column-center;
		@extend %page-grid-item;
	}

	.display {
		&--h1 {
			@extend %global__display--h1;
		}

		&--h2 {
			@extend %global__display--h2;
		}
	}

	.heading {
		&--h2 {
			@extend %global__heading--h2;
			text-align: center !important;
		}

		&--h3 {
			@extend %global__heading--h3;
			text-align: center !important;
		}

		&--h4 {
			@extend %global__heading--h4;
			text-align: center !important;
		}
	}

	.body {
		&--lg {
			@extend %global__body--lg;
		}

		&--md {
			@extend %global__body--md;
		}
	}

	.label {
		@extend %global__label;
	}

	* {
		text-align: center !important;
		outline: 1px solid red;
		text-wrap: none !important;
	}
</style>
-->

<!-- Replacement with basic CSS -->
<style>
	section {
		position: fixed;
		inset: 0;
		width: 100%;
		margin: auto;
		padding-top: 10rem;
		padding-inline: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.display--h1 {
		font-size: 4rem;
		font-weight: 800;
		line-height: 1.1;
	}

	.display--h2 {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.heading--h2 {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.2;
		text-align: center !important;
	}

	.heading--h3 {
		font-size: 2rem;
		font-weight: 600;
		line-height: 1.3;
		text-align: center !important;
	}

	.heading--h4 {
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.4;
		text-align: center !important;
	}

	.body--lg {
		font-size: 1.25rem;
		line-height: 1.6;
	}

	.body--md {
		font-size: 1rem;
		line-height: 1.6;
	}

	.label {
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	* {
		text-align: center !important;
		outline: 1px solid red;
		text-wrap: none !important;
	}
</style>
