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
