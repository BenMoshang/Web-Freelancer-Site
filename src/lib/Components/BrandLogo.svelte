<!-- <a class="logo-text"><span>MY</span> <span>MODERN</span></a> -->

<a href="/" class="brand-logo--2">
	<span class="brand-logo--2__bracket brand-logo--2__bracket--left">&lt;</span>
	<span class="brand-logo--2__text">MODERN</span>
	<span class="brand-logo--2__slash"> &#47;</span>
	<span class="brand-logo--2__bracket brand-logo--2__bracket--right">&gt;</span>
</a>

<style lang="scss">
	.logo-text {
		@include elastic-text-hover;
		@include label-overview;
		font-family: get-ff('display');
		font-size: get-static-fsz('md');
		font-weight: 600;
		color: get-typography-color('primary');
		line-height: 1;
		text-wrap: balance;
		cursor: pointer;
		display: flex;
		inline-size: fit-content;
		flex-direction: column;

		& span {
			display: block;
		}
	}
	.brand-logo--2 {
		@include display-overview;
		@include apply-fsz('body--md');
		@include elastic-text-hover;
		color: get-light-dark('900', '50');

		cursor: pointer;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
		line-height: 1;
		&__bracket {
			font-weight: 600;
			color: get-typography-color('primary');
			@include apply-fsz('body--lg');
			&--left {
			}
		}

		&__slash {
			@include apply-fsz('label');
			color: get-typography-color('primary');

			font-weight: 600;

			margin-left: 0.25rem;
		}
	}
</style>
