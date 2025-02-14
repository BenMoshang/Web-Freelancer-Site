<!-- <section>
	<div class="shadow-test shadow-test--low">
		<p>Low Shadow</p>
	</div>

	<div class="shadow-test shadow-test--medium">
		<p>Medium Shadow</p>
	</div>

	<div class="shadow-test shadow-test--high">
		<p>High Shadow</p>
	</div>
</section>

<style lang="scss">
	section {
		padding-inline: 1rem;
		padding-top: 10rem;
		@include flex-column-center;
		gap: 2rem;
		@extend %page-grid-item;
	}

	.shadow-test {
		padding: 2rem;
		background: get-light-dark('100', '900');
		border-radius: 0.5rem;
		width: 100%;
		max-width: 20rem;
		text-align: center;

		&--low {
			@include shadow-low;
		}

		&--medium {
			@include shadow-medium;
		}

		&--high {
			@include shadow-high;
		}
	}
</style> -->
