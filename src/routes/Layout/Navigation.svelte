<script lang="ts">
	let { isOpen, navItems } = $props();

	// Track whether animations have completed and if element should be shown
	let isTransitionComplete = $state(false);
	let shouldShow = $state(false);

	// Handle animation states

	// Handle animation states
	$effect(() => {
		if (isOpen) {
			shouldShow = true;
			isTransitionComplete = false;
			setTimeout(() => {
				isTransitionComplete = true;
			}, 500);
		} else {
			isTransitionComplete = false;
			// Wait for exit animation to complete before removing from DOM
			setTimeout(() => {
				shouldShow = false;
			}, 500);
		}
	});
</script>

<!-- todo: redo this styling  -->
<!-- todo: import header navitems here -->
{#if shouldShow}
	<nav
		class="nav"
		class:nav--active={isOpen}
		class:nav--inactive={!isOpen}
		class:nav--transition-complete={isTransitionComplete}
		aria-label="Main Navigation"
	>
		<ul class="nav__list" role="menubar" aria-label="Main menu">
			{#each navItems as { href, text }}
				<li class="nav__list-item" role="none">
					<a
						{href}
						class="nav__link"
						role="menuitem"
						aria-current={href === '/' ? 'page' : undefined}
						tabindex={isOpen ? 0 : -1}
					>
						<span class="nav__link-text">{text}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style scoped lang="scss">
	a {
		color: red;
	}
	/*=============================================
=          Navigation Background         =
=============================================*/
	$cubic: cubic-bezier(0.95, 0.05, 0.795, 0.035);
	$nav-timing: 0.4s;
	.nav {
		$background-opacity: 0.9;

		position: fixed;
		inset: 0;
		margin: auto;
		z-index: 999;
		min-inline-size: 100vw;
		min-block-size: 100svh;
		background: light-dark(hsl(240, 4%, 92%, 0), hsla(240, 8%, 18%, 0));
		backdrop-filter: blur(0);
		opacity: 0;
		transition:
			transform $nav-timing $cubic,
			opacity $nav-timing $cubic,
			backdrop-filter $nav-timing $cubic,
			background $nav-timing $cubic;

		&--active {
			background: light-dark(hsl(240, 4%, 92%, 0.6), hsla(240, 8%, 18%, 0.6));
			backdrop-filter: blur(1.25rem);
			-webkit-backdrop-filter: blur(1.25rem);
			opacity: 1;
			-webkit-animation: scale-in-tr $nav-timing cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
			animation: scale-in-tr $nav-timing cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		}
		&--inactive {
			background: light-dark(hsl(240, 4%, 92%, 0), hsla(240, 8%, 18%, 0));
			backdrop-filter: blur(0);
			-webkit-backdrop-filter: blur(0);
			opacity: 0;
			-webkit-animation: scale-out-tr $nav-timing cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
			animation: scale-out-tr $nav-timing cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
		}
	}

	/*=============================================
=          Navigation Content         =
=============================================*/

	.nav__list {
		padding-top: $PAGE_HEADER_HEIGHT;
		@include flex-column;
		gap: get-static-sp('3xl');
		align-content: center;
		justify-content: center;
		list-style: none;
		inline-size: 100%;
		block-size: 100%;
		position: absolute;
		padding-inline: get-static-sp('md');
		padding-block: get-static-sp('xl');

		inset: 0;
		margin: auto;
	}

	.nav__list-item {
		opacity: 0;
		transform: translateY(1.25rem);

		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				transition:
					transform $nav-timing cubic-bezier(0.77, 0, 0.175, 1) #{$i * 0.1 + 0.2}s,
					opacity $nav-timing cubic-bezier(0.77, 0, 0.175, 1) #{$i * 0.1 + 0.2}s;
			}
		}

		.nav--transition-complete & {
			opacity: 1;
			transform: translateY(0);
		}
	}
	/*=============================================
=          Navigation Typography styling         =
=============================================*/
	.nav__link {
		@include link-effect;
		font-family: get-ff('display');
		line-height: 1;
		font-weight: get-fw('display');
		font-size: get-static-fsz('x7');
		text-decoration: none;

		text-align: left;

		& span {
			color: _get-typography-color('secondary');
			color: _get-typography-color('primary');
		}
	}

	@media (min-width: $MOBILE_BREAKPOINT) {
		.nav {
			display: none;
		}
	}
</style>
