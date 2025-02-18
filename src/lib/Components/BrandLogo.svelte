<a href="/" class="brand-logo">
	<span class="brand-logo__bracket">&lt;</span>
	<span class="brand-logo__text">MODERN</span>
	<span class="brand-logo__slash">/</span>
	<span class="brand-logo__bracket">&gt;</span>
</a>

<style lang="scss">
	.brand-logo {
		@include display-overview;
		@include apply-fsz('body--md');
		@include elastic-text-hover;
		color: get-typography-color('primary');
		cursor: pointer;
		text-decoration: none;
		display: flex;
		align-items: center;
		width: fit-content;
		line-height: 1;

		&__bracket {
			font-weight: 600;
			@include apply-fsz('body--lg');
		}

		&__slash {
			@include apply-fsz('label');
			font-weight: 600;
			margin-left: 0.25rem;
		}
	}
</style>
