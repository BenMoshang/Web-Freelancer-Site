<!-- logo in text form -->
<a href="/" class="brand-logo" aria-label="Modern - Return to homepage">
	<span class="brand-logo__bracket" aria-hidden="true">&lt;</span>
	<span class="brand-logo__text">MODERN</span>
	<span class="brand-logo__slash" aria-hidden="true">/</span>
	<span class="brand-logo__bracket" aria-hidden="true">&gt;</span>
</a>

<!-- Improved SVG with a tighter viewBox -->
<!-- <svg
	class="my-modern-logo"
	width="356"
	height="60"
	viewBox="8 6 340 48"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M34.836 48.316L8.148 37.5V27.836L34.836 17.02V24.572L14.74 32.636L34.836 40.7V48.316Z"
		fill="currentColor"
	/>
	<path
		d="M42.108 53.5V6.396H52.54L66.3 29.564L79.868 6.396H90.108V53.5H80.124V24.572L69.372 43.004H62.972L52.092 24.444V53.5H42.108ZM118.624 54.46C104.543 54.46 94.0475 44.348 94.0475 29.948C94.0475 15.548 104.543 5.436 118.624 5.436C132.704 5.436 143.264 15.548 143.264 29.948C143.264 44.348 132.704 54.46 118.624 54.46ZM105.056 29.948C105.056 38.588 110.879 44.348 118.624 44.348C126.368 44.348 132.256 38.588 132.256 29.948C132.256 21.308 126.368 15.548 118.624 15.548C110.879 15.548 105.056 21.308 105.056 29.948ZM147.208 53.5V6.396H161.864C176.712 6.396 186.824 15.548 186.824 29.948C186.824 44.348 176.712 53.5 161.864 53.5H147.208ZM157.832 43.388H161.864C170.376 43.388 175.816 38.588 175.816 29.948C175.816 21.308 170.376 16.508 161.864 16.508H157.832V43.388ZM190.883 53.5V6.396H217.571V16.252H201.507V24.764H217.379V34.62H201.507V43.644H217.827V53.5H190.883ZM245.267 53.5L233.619 35.068V53.5H222.995V6.396H238.995C248.979 6.396 255.123 11.388 255.123 21.052C255.123 27.516 251.219 32.38 244.563 34.044L258.067 53.5H245.267ZM233.619 26.556H238.483C242.067 26.556 244.307 24.444 244.307 21.052C244.307 17.66 242.067 15.548 238.483 15.548H233.619V26.556ZM260.546 53.5V6.396H270.146L288.066 34.364V6.396H298.05V53.5H288.45L270.53 25.596V53.5H260.546Z"
		fill="currentColor"
	/>
	<path d="M302.4 48.508L312.732 15.208H317.34L307.008 48.508H302.4Z" fill="currentColor" />
	<path
		d="M320.724 48.316V40.764L340.82 32.7L320.724 24.636V17.02L347.412 27.836V37.5L320.724 48.316Z"
		fill="currentColor"
	/>
</svg> -->

<style lang="scss">
	.brand-logo {
		@include display-overview;
		@include apply-fsz('body--md');
		@include elastic-text-hover;
		display: flex;
		align-items: center;
		width: fit-content;
		color: get-typography-color('primary');
		line-height: 1;
		text-decoration: none;
		cursor: pointer;

		&__bracket {
			font-weight: 600;

			@include apply-fsz('body--lg');
		}

		&__slash {
			@include apply-fsz('label');
			margin-left: 0.25rem;
			font-weight: 600;
		}
	}

	// .my-modern-logo {
	// 	inline-size: fit-content;
	// 	block-size: 1.25rem;
	// 	object-fit: cover;
	// 	display: block;
	// 	color: get-typography-color('primary');
	// 	fill: currentColor;
	// 	filter: drop-shadow(0 0 0.5rem rgb(0 0 0 / 0.15));
	// 	transition: filter 0.2s ease;

	// 	&:hover {
	// 		filter: drop-shadow(0 0 0.75rem rgb(0 0 0 / 0.25));
	// 	}
	// }
</style>
