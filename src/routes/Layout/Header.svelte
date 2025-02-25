<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggle from '$lib/User/Preferences/ThemeToggle.svelte';
	import EmailButton from '$lib/Components/EmailButton.svelte';
	import Navigation from './Navigation.svelte';
	import BrandLogo from '$lib/Components/BrandLogo.svelte';

	let hideHeader = false;
	let lastScrollY = 0;
	let isNavOpen = false;

	function toggleNav() {
		isNavOpen = !isNavOpen;
		document.body.style.overflow = isNavOpen ? 'hidden' : '';
	}

	export const navItems = [
		{ href: '/services', text: 'SERVICES' },
		{ href: '/about', text: 'ABOUT' },
		{ href: '/projects', text: 'PROJECTS' },
		{ href: '/contact', text: 'CONTACT' }
	];

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			hideHeader = currentScrollY > lastScrollY && currentScrollY > 100;
			lastScrollY = currentScrollY;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="header" class:hide={hideHeader}>
	<!-- todo: active state for nav links-->
	<BrandLogo />
	<!-- DESKTOP NAV -->
	<nav class="header__nav--desktop">
		<ul class="nav__list" role="menubar" aria-label="Main menu">
			{#each navItems as { href, text }}
				<li class="nav__list-item">
					<a
						{href}
						class="nav__link"
						role="menuitem"
						aria-current={href === '/' ? 'page' : undefined}
					>
						<span>{text}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="header__content-wrapper">
		<ThemeToggle />
		<!-- MOBILE: Menu Toggle -->
		<label for="menu-toggle" class="header__burger">
			<input
				class="header__menu-toggle"
				type="checkbox"
				id="menu-toggle"
				aria-label="Toggle menu"
				onclick={toggleNav}
			/>

			<svg viewBox="0 0 32 32">
				<path
					class="line line-top-bottom"
					d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
				></path>
				<path class="line" d="M7 16 27 16"></path>
			</svg>
		</label>
	</div>
</header>
<Navigation {navItems} isOpen={isNavOpen} />

<style lang="scss">
	@use '../../lib/scss/design-system/main.scss' as *;
	
	/* ==========================
    HEADER & CHILD COMPONENTS
  ========================== */
	.header {
		@include apply-padding('lg', 'block');
		@include apply-padding('md', 'inline');
		@include apply-page-max-inline;

		--header-height: #{$PAGE_HEADER_HEIGHT};
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1000;
		display: grid;
		justify-content: center;
		align-items: center;
		grid-template-columns: repeat(3, 1fr);
		inline-size: 100%;
		block-size: var(--header-height);
		border-radius: $BR_ROUNDED;
		transform: translateY(0);
		transition: transform 0.3s ease-in-out;
		grid-template-areas: 'logo nav content';
		will-change: transform;

		// Remove text decoration from all links in header
		a {
			text-decoration: none;
		}

		// Desktop: limit header width
		@include respond-to('desktop') {
			margin-inline: auto;
		}

		// Modifier: hide header by sliding it up
		&.hide {
			transform: translateY(-120%);
		}

		//==========================
		// Navigation (Desktop)
		//==========================
		&__nav--desktop {
			display: none;

			@include respond-to('desktop') {
				display: block;
			}
		}

		//==========================
		// Header Content Wrapper
		//==========================
		&__content-wrapper {
			display: flex;
			align-items: center;
			gap: get-responsive-sp('md');
			grid-area: content;
			justify-self: end;
		}

		//==========================
		// Burger Menu (Mobile)
		//==========================
		&__burger {
			cursor: pointer;

			input {
				display: none;

				// When the checkbox is checked, animate the SVG burger
				&:checked + svg {
					transform: rotate(-45deg);

					.line-top-bottom {
						stroke-dasharray: 20 300;
						stroke-dashoffset: -32.42;
					}
				}
			}

			svg {
				width: 2em;
				height: 2em;

				// background: get-light-dark('darkest', 'lightest');
				border-radius: $BR_ROUNDED;
				transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
				object-fit: cover;
			}

			.line {
				$color: get-light-dark('800', '200');
				transition:
					stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
					stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
				fill: none;
				stroke: $color;
				stroke-linecap: round;
				stroke-linejoin: round;
				stroke-width: 2;

				&-top-bottom {
					stroke-dasharray: 12 63;
				}
			}
		}
	}

	//==========================
	// Hide burger menu on larger screens
	//==========================
	@include respond-to('desktop') {
		.header__burger {
			display: none;
		}
	}

	/* ==========================
    NAVIGATION LINKS & LIST
  ========================== */
	.nav__list {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		grid-area: nav;
		list-style: none;

		@include apply-gap('lg');
	}

	.nav__link {
		@extend %global__body--md;
		@include link-effect;
		font-size: get-responsive-fsz('label');
		line-height: 1;
	}
</style>
