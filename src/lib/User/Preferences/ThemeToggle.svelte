<script lang="ts">
	import { theme } from '$lib/Stores/theme';

	let isDark = $state(true);

	// Update theme and save preference
	function toggleTheme() {
		isDark = !isDark;
		theme.set(isDark ? 'dark' : 'light');
	}

	// Subscribe to theme store changes
	$effect(() => {
		const unsubscribe = theme.subscribe((value) => {
			isDark = value === 'dark';
		});
		return unsubscribe;
	});
</script>

<label for="themeToggle" class="theme-toggle">
	<input
		type="checkbox"
		id="themeToggle"
		class="theme-toggle__input"
		checked={isDark}
		onchange={toggleTheme}
	/>
	<svg
		width="18"
		height="18"
		viewBox="0 0 20 20"
		fill="currentColor"
		stroke="none"
		class="theme-toggle__icon"
	>
		<mask id="moon-mask">
			<rect x="0" y="0" width="20" height="20" fill="white"></rect>
			<circle cx="11" cy="3" r="8" fill="black"></circle>
		</mask>
		<circle class="theme-toggle__sun-moon" cx="10" cy="10" r="8" mask="url(#moon-mask)"></circle>
		<g>
			<circle class="theme-toggle__ray theme-toggle__ray--1" cx="18" cy="10" r="1.5"></circle>
			<circle class="theme-toggle__ray theme-toggle__ray--2" cx="14" cy="16.928" r="1.5"></circle>
			<circle class="theme-toggle__ray theme-toggle__ray--3" cx="6" cy="16.928" r="1.5"></circle>
			<circle class="theme-toggle__ray theme-toggle__ray--4" cx="2" cy="10" r="1.5"></circle>
			<circle class="theme-toggle__ray theme-toggle__ray--5" cx="6" cy="3.1718" r="1.5"></circle>
			<circle class="theme-toggle__ray theme-toggle__ray--6" cx="14" cy="3.1718" r="1.5"></circle>
		</g>
	</svg>
</label>

<style lang="scss">
	/* Theme toggle styling from joshwcomeau.com but using pure CSS */
	.theme-toggle {
		color: get-light-dark('800', '200');
		position: relative;
		cursor: pointer;

		&__input {
			position: absolute;
			inset: 0;
			margin: auto;
			width: 100%;
			height: 100%;
			cursor: pointer;
			opacity: 0;
			z-index: 1;

			&:checked + svg {
				transform: rotate(90deg);

				mask > circle {
					transform: translate(1rem, -0.1875rem);
				}

				.theme-toggle__sun-moon {
					transform: scale(0.55);
				}

				.theme-toggle__ray {
					animation: showRay1832 0.4s ease 0s 1 forwards;
				}
			}
		}

		svg {
			position: relative;
			width: get-responsive-fsz('label');
			height: get-responsive-fsz('label');
			transition: transform 0.4s ease;
			transform: rotate(40deg);

			mask > circle {
				transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
				transform: translate(0rem, 0rem);
			}
		}

		&__sun-moon {
			transform-origin: center center;
			transition: inherit;
			transform: scale(1);
		}

		&__ray {
			transform-origin: center center;
			transform: scale(0);

			&--2 {
				animation-delay: 0.05s !important;
			}

			&--3 {
				animation-delay: 0.1s !important;
			}

			&--4 {
				animation-delay: 0.17s !important;
			}

			&--5 {
				animation-delay: 0.25s !important;
			}

			&--6 {
				animation-delay: 0.29s !important;
			}
		}
	}

	@keyframes showRay1832 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
