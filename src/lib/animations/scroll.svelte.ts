/******************************************************
 * scroll.svelte.ts
 * GSAP-based scroll utility for Svelte 5 optimized for performance.
 ******************************************************/

import { onMount, onDestroy } from 'svelte';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Only register plugins in a browser environment
const isBrowser = typeof window !== 'undefined';
if (isBrowser) {
	gsap.registerPlugin(ScrollTrigger);
}

// Determine if we're on a mobile device
const isMobile = isBrowser && window.matchMedia('(max-width: 768px)').matches;

/**
 * Initialize or configure GSAP ScrollTrigger defaults.
 * @param options Optional config object.
 */
export function initGsapScroll(options: gsap.plugins.ScrollTriggerConfigVars = {}) {
	if (isBrowser) {
		ScrollTrigger.config(options);
	}
}

/* -------------------------------------------------------------------
 * scrollLocker: Utility to lock/unlock the page scroll.
 * ------------------------------------------------------------------- */
export const scrollLocker = {
	isLocked: false,
	originalScrollY: 0,
	originalStyle: '',
	touchListener: null as ((e: TouchEvent) => void) | null,
	keyboardListener: null as ((e: KeyboardEvent) => void) | null,

	lock(options: { allowTouchMove?: boolean; allowKeyboardScroll?: boolean } = {}) {
		if (isMobile) {
			console.warn('scrollLocker: scroll locking disabled on mobile for better UX.');
			return;
		}
		const body = document.body;
		this.originalScrollY = window.scrollY;
		this.originalStyle = body.style.cssText;
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${this.originalScrollY}px;
      left: 0;
      right: 0;
      bottom: 0;
      padding-right: ${scrollbarWidth}px;
      ${!options.allowTouchMove ? 'touch-action: none;' : ''}
    `;
		if (!options.allowTouchMove) {
			this.touchListener = (e: TouchEvent) => {
				e.preventDefault();
				e.stopPropagation();
			};
			document.addEventListener('touchmove', this.touchListener, { passive: false });
		}
		if (!options.allowKeyboardScroll) {
			this.keyboardListener = (e: KeyboardEvent) => {
				if (
					['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)
				) {
					e.preventDefault();
					e.stopPropagation();
				}
			};
			document.addEventListener('keydown', this.keyboardListener);
		}
		this.isLocked = true;
	},

	unlock() {
		if (!this.isLocked) return;
		const body = document.body;
		body.style.cssText = this.originalStyle;
		window.scrollTo(0, this.originalScrollY);
		if (this.touchListener) {
			document.removeEventListener('touchmove', this.touchListener);
			this.touchListener = null;
		}
		if (this.keyboardListener) {
			document.removeEventListener('keydown', this.keyboardListener);
			this.keyboardListener = null;
		}
		this.isLocked = false;
	}
};

/* -------------------------------------------------------------------
 * useGsapAnimation: Svelte Action for GSAP from→to tween with ScrollTrigger.
 * ------------------------------------------------------------------- */
export interface GsapAnimationOptions {
	from?: gsap.TweenVars;
	to?: gsap.TweenVars;
	triggerConfig?: Partial<ScrollTrigger.Vars>;
	immediateRender?: boolean;
	lockScroll?: boolean;
}

export function useGsapAnimation(node: HTMLElement, options: GsapAnimationOptions = {}) {
	let anim: gsap.core.Tween;
	let st: ScrollTrigger;
	function setup() {
		const {
			from = {},
			to = {},
			triggerConfig = {},
			immediateRender = false,
			lockScroll = false
		} = options;

		// Optionally lock scroll if specified (disabled on mobile)
		if (lockScroll) {
			if (!isMobile) {
				triggerConfig.onEnter = () => scrollLocker.lock();
				triggerConfig.onLeave = () => scrollLocker.unlock();
				triggerConfig.onEnterBack = () => scrollLocker.lock();
				triggerConfig.onLeaveBack = () => scrollLocker.unlock();
				triggerConfig.onUpdate = (self) => {
					if (self && !scrollLocker.isLocked) scrollLocker.lock();
				};
			} else {
				console.warn('useGsapAnimation: lockScroll disabled on mobile.');
			}
		}

		anim = gsap.fromTo(
			node,
			{ ...from, immediateRender },
			{ ...to, scrollTrigger: { trigger: node, ...triggerConfig } }
		);
		if (anim.scrollTrigger) st = anim.scrollTrigger;
	}

	onMount(() => setup());
	onDestroy(() => {
		if (st) st.kill();
		if (anim) anim.kill();
		if (scrollLocker.isLocked) scrollLocker.unlock();
	});
	return {
		update(newOptions: GsapAnimationOptions) {
			options = newOptions;
			if (st) st.kill();
			if (anim) anim.kill();
			setup();
		},
		destroy() {
			if (st) st.kill();
			if (anim) anim.kill();
			if (scrollLocker.isLocked) scrollLocker.unlock();
		}
	};
}

/* -------------------------------------------------------------------
 * useGsapPin: Svelte Action to pin an element using ScrollTrigger.
 * ------------------------------------------------------------------- */
export interface GsapPinOptions {
	start?: string | number;
	end?: string | number;
	pinSpacing?: boolean;
	scrub?: boolean | number;
	onEnter?: ScrollTrigger.Callback;
	onLeave?: ScrollTrigger.Callback;
	onEnterBack?: ScrollTrigger.Callback;
	onLeaveBack?: ScrollTrigger.Callback;
}

export function useGsapPin(node: HTMLElement, options: GsapPinOptions = {}) {
	let st: ScrollTrigger;
	function setupPin() {
		const {
			start = 'top top',
			end = '+=1000',
			pinSpacing = true,
			scrub = false,
			onEnter,
			onLeave,
			onEnterBack,
			onLeaveBack
		} = options;
		st = ScrollTrigger.create({
			trigger: node,
			start,
			end,
			pin: true,
			pinSpacing,
			scrub,
			onEnter,
			onLeave,
			onEnterBack,
			onLeaveBack
		});
	}
	onMount(() => setupPin());
	onDestroy(() => {
		if (st) st.kill();
	});
	return {
		update(newOptions: GsapPinOptions) {
			options = newOptions;
			if (st) st.kill();
			setupPin();
		},
		destroy() {
			if (st) st.kill();
		}
	};
}
