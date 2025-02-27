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

<style>
	/* ==========================
    HEADER & CHILD COMPONENTS
  ========================== */
	.header {
		--header-height: 80px;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1000;
		display: grid;
		justify-content: center;
		align-items: center;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		height: var(--header-height);
		border-radius: 8px;
		transform: translateY(0);
		transition: transform 0.3s ease-in-out;
		grid-template-areas: 'logo nav content';
		will-change: transform;
		padding: 1.5rem 1rem;
	}

	/* Remove text decoration from all links in header */
	.header a {
		text-decoration: none;
	}

	/* Desktop: limit header width */
	@media (min-width: 1024px) {
		.header {
			margin-inline: auto;
		}
	}

	/* Modifier: hide header by sliding it up */
	.header.hide {
		transform: translateY(-120%);
	}

	/* Navigation (Desktop) */
	.header__nav--desktop {
		display: none;
	}

	@media (min-width: 1024px) {
		.header__nav--desktop {
			display: block;
		}
	}

	/* Header Content Wrapper */
	.header__content-wrapper {
		display: flex;
		align-items: center;
		gap: 1rem;
		grid-area: content;
		justify-self: end;
	}

	/* Burger Menu (Mobile) */
	.header__burger {
		cursor: pointer;
	}

	.header__burger input {
		display: none;
	}

	/* When the checkbox is checked, animate the SVG burger */
	.header__burger input:checked + svg {
		transform: rotate(-45deg);
	}

	.header__burger input:checked + svg .line-top-bottom {
		stroke-dasharray: 20 300;
		stroke-dashoffset: -32.42;
	}

	.header__burger svg {
		width: 2em;
		height: 2em;
		border-radius: 8px;
		transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
		object-fit: cover;
	}

	.header__burger .line {
		transition:
			stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
		fill: none;
		stroke: rgba(0, 0, 0, 0.8);
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 2;
	}

	.header__burger .line-top-bottom {
		stroke-dasharray: 12 63;
	}

	/* Hide burger menu on larger screens */
	@media (min-width: 1024px) {
		.header__burger {
			display: none;
		}
	}

	/* NAVIGATION LINKS & LIST */
	.nav__list {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		grid-area: nav;
		list-style: none;
		gap: 1.5rem;
	}

	.nav__link {
		font-size: 0.875rem;
		line-height: 1;
		position: relative;
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
</style>
