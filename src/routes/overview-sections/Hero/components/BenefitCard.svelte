<script lang="ts">
	let { icon, title, description, subtitle } = $props();
	let isActive = $state(false);
</script>

<article
	class="benefit-card"
	onmouseenter={(e) => (isActive = true)}
	onmouseleave={(e) => (isActive = false)}
>
	<img src={icon} alt={title} class="benefit-card__icon" />
	<h4 class="benefit-card__title">{title}</h4>
	<h5 class="benefit-card__subtitle">{subtitle}</h5>
	<p class="benefit-card__description">{description}</p>
</article>

<style lang="scss">
	/*
	*!TODO: ADD CUSTOM CURSOR WHEN HOVERING OVER THE CARD LIKE 
	*
	*
	*/

	* {
		// outline: 1px dashed red;
	}

	.benefit-card {
		@include shadow-medium;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto-fit;
		max-inline-size: 11.875rem;
		max-block-size: 15.875rem;
		padding: get-static-sp('s16');
		border-radius: $BR_DEFAULT;
		background-color: get-light-dark('lightest', 'darker');
		grid-template-areas: 'title' 'icon' 'subtitle';
		place-content: center center;

		&__icon {
			--icon-size: 100%;
			inline-size: var(--icon-size);
			block-size: var(--icon-size);
			grid-area: icon;
			object-fit: contain;
		}

		&__title {
			@extend %global__heading--h2;
			color: get-light-dark('darkest', 'lightest');
			grid-area: title;
		}

		&__subtitle {
			@extend %global__label;
			grid-area: subtitle;
		}

		&__description {
			height: 0;
			grid-area: description;

			//animates from display none;
			opacity: 0;
			overflow: hidden;
			visibility: hidden;

			&.is-active {
				height: auto;
				opacity: 1;
				overflow: visible;
				visibility: visible;
			}
		}
	}

	svg {
		width: var(--icon-size);
		height: var(--icon-size);
		margin-bottom: get-static-sp('s8');
		grid-area: icon;

		--icon-size: 1.5rem;

		& path {
			fill: get-light-dark('darkest', 'lightest');
			stroke-width: 0.5rem;
		}
	}
</style>
