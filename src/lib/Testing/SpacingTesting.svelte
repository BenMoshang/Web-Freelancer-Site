<section class="spacing">
	<section class="spacing--x1">
		<div class="box"></div>
		<div class="box"></div>
	</section>
</section>

<!-- <section class="spacing--x1">
		<div class="box"></div>
		<div class="box"></div>
	</section>
	<section class="spacing--x2">
		<div class="box"></div>
		<div class="box"></div>
	</section>
	<section class="spacing--x3">
		<div class="box"></div>
		<div class="box"></div>
	</section>
	<section class="spacing--h1">
		<div class="box"></div>
		<div class="box"></div>
	</section>
	<section class="spacing--2xl">
		<div class="box"></div>
		<div class="box"></div>
	</section>
	<section class="spacing--3xl">
		<div class="box"></div>
		<div class="box"></div>
	</section> 
	
	-->
<style lang="scss">
	.spacing {
		& > * {
			display: flex;
			flex-direction: column;
		}

		&--x1 {
			gap: get-static-_get-spacing-type('x1');
		}

		&--x2 {
			gap: get-static-_get-spacing-type('x2');
		}

		&--x3 {
			gap: get-static-_get-spacing-type('x3');
		}

		&--h1 {
			gap: get-static-_get-spacing-type('x4');
		}

		&--x5 {
			gap: get-static-_get-spacing-type('x5');
		}

		&--x6 {
			gap: get-static-_get-spacing-type('x6');
		}

		&--x7 {
			gap: get-static-_get-spacing-type('x7');
		}

		&--x8 {
			gap: get-static-_get-spacing-type('x8');
		}

		&--x9 {
			gap: get-static-_get-spacing-type('x9');
		}

		&--x10 {
			gap: get-static-_get-spacing-type('x10');
		}
	}

	.box {
		width: 100px;
		height: 100px;
		outline: 1px dashed red;
	}
</style>
