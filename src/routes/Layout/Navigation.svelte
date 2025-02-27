<script lang="ts">
	let { isOpen, navItems } = $props();

	// Track whether animations have completed and if element should be shown
	let isTransitionComplete = $state(false);
	let shouldShow = $state(false);

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

<style scoped>
	a {
		color: red;
	}

	/* =============================================
=          Navigation Background         =
============================================= */
	.nav {
		position: fixed;
		z-index: 999;
		inset: 0;
		min-width: 100vw;
		min-height: 100svh;
		margin: auto;
		background: rgba(236, 236, 241, 0);
		transition:
			transform 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035),
			opacity 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035),
			backdrop-filter 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035),
			background 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035);
		backdrop-filter: blur(0);
		opacity: 0;
	}

	.nav--active {
		background: rgba(236, 236, 241, 0.6);
		animation: scale-in-tr 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		backdrop-filter: blur(1.25rem);
		opacity: 1;
	}

	.nav--inactive {
		background: rgba(236, 236, 241, 0);
		animation: scale-out-tr 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
		backdrop-filter: blur(0);
		opacity: 0;
	}

	/* =============================================
=          Navigation Content         =
============================================= */

	.nav__list {
		position: absolute;
		inset: 0;
		gap: 3rem;
		width: 100%;
		height: 100%;
		margin: auto;
		padding-top: 80px;
		padding-block: 2rem;
		padding-inline: 1rem;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.nav__list-item {
		transform: translateY(1.25rem);
		opacity: 0;
		transition:
			transform 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.3s,
			opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.3s;
	}

	.nav__list-item:nth-child(1) {
		transition:
			transform 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.3s,
			opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.3s;
	}

	.nav__list-item:nth-child(2) {
		transition:
			transform 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s,
			opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.4s;
	}

	.nav__list-item:nth-child(3) {
		transition:
			transform 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.5s,
			opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
	}

	.nav__list-item:nth-child(4) {
		transition:
			transform 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
			opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.6s;
	}

	.nav__list-item:nth-child(5) {
		transition:
			transform 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.7s,
			opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.7s;
	}

	.nav--transition-complete .nav__list-item {
		transform: translateY(0);
		opacity: 1;
	}

	/* =============================================
=          Navigation Typography styling         =
============================================= */
	.nav__link {
		font-family: system-ui, sans-serif;
		font-size: 2.25rem;
		font-weight: 700;
		line-height: 1;
		text-align: left;
		text-decoration: none;
		position: relative;
	}

	.nav__link span {
		color: inherit;
	}

	.nav__link span::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: -4px;
		left: 0;
		background-color: currentColor;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.3s ease;
	}

	.nav__link:hover span::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	@media (min-width: 768px) {
		.nav {
			display: none;
		}
	}

	/* Add the missing keyframe animations */
	@keyframes scale-in-tr {
		0% {
			transform: scale(0);
			transform-origin: top right;
			opacity: 0;
		}
		100% {
			transform: scale(1);
			transform-origin: top right;
			opacity: 1;
		}
	}

	@keyframes scale-out-tr {
		0% {
			transform: scale(1);
			transform-origin: top right;
			opacity: 1;
		}
		100% {
			transform: scale(0);
			transform-origin: top right;
			opacity: 0;
		}
	}
</style>
