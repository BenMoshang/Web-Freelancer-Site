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

	/* =============================================
=          Navigation Background         =
============================================= */
	$cubic: cubic-bezier(0.95, 0.05, 0.795, 0.035);
	$nav-timing: 0.4s;

	.nav {
		$background-opacity: 0.9;
		position: fixed;
		z-index: 999;
		inset: 0;
		min-inline-size: 100vw;
		min-block-size: 100svh;
		margin: auto;
		background: light-dark(hsl(240deg 4% 92% / 0%), hsl(240deg 8% 18% / 0%));
		transition:
			transform $nav-timing $cubic,
			opacity $nav-timing $cubic,
			backdrop-filter $nav-timing $cubic,
			background $nav-timing $cubic;
		backdrop-filter: blur(0);
		opacity: 0;

		&--active {
			background: light-dark(hsl(240deg 4% 92% / 60%), hsl(240deg 8% 18% / 60%));
			animation: scale-in-tr $nav-timing cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
			backdrop-filter: blur(1.25rem);
			opacity: 1;
		}

		&--inactive {
			background: light-dark(hsl(240deg 4% 92% / 0%), hsl(240deg 8% 18% / 0%));
			animation: scale-out-tr $nav-timing cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
			backdrop-filter: blur(0);
			opacity: 0;
		}
	}

	/* =============================================
=          Navigation Content         =
============================================= */

	.nav__list {
		position: absolute;
		inset: 0;
		padding-block: get-static-sp('xl');
		padding-inline: get-static-sp('md');
		gap: get-static-sp('3xl');
		inline-size: 100%;
		block-size: 100%;
		margin: auto;
		padding-top: $PAGE_HEADER_HEIGHT;
		list-style: none;
		place-content: center center;

		@include flex-column;
	}

	.nav__list-item {
		transform: translateY(1.25rem);
		opacity: 0;

		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				transition:
					transform $nav-timing cubic-bezier(0.77, 0, 0.175, 1) #{$i * 0.1 + 0.2}s,
					opacity $nav-timing cubic-bezier(0.77, 0, 0.175, 1) #{$i * 0.1 + 0.2}s;
			}
		}

		.nav--transition-complete & {
			transform: translateY(0);
			opacity: 1;
		}
	}

	/* =============================================
=          Navigation Typography styling         =
============================================= */
	.nav__link {
		@include link-effect;
		font-family: get-ff('display');
		font-size: get-static-fsz('7xl');
		font-weight: get-fw('display');
		line-height: 1;
		text-align: left;
		text-decoration: none;

		& span {
			color: _get-typography-color('primary');
		}
	}

	@media (min-width: $MOBILE_BREAKPOINT) {
		.nav {
			display: none;
		}
	}
</style>
