/* GsapParallax.ts - Svelte Action for applying a GSAP-based parallax effect */
import { onMount } from 'svelte';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/*
   useGsapParallax Svelte Action
   This action applies a parallax effect to the bound element using GSAP's ScrollTrigger.
   Options:
      - start: start trigger point (default: 'top bottom')
      - end: end trigger point (default: 'bottom top')
      - yPercent: vertical movement in percent (default: -20)
      - ease: easing (default: 'none')
      - scrub: scrolling scrub after triggered (default: true)
      - scrollTriggerOptions: additional ScrollTrigger options
   Usage:
     <div use:useGsapParallax={{ yPercent: -30, start: 'top top', end: 'bottom top' }}>
         Parallax Element
     </div>
*/
export function useGsapParallax(
	node: HTMLElement,
	options: {
		start?: string;
		end?: string;
		yPercent?: number;
		ease?: string;
		scrub?: boolean | number;
		scrollTriggerOptions?: Record<string, any>;
	} = {}
) {
	const {
		start = 'top bottom',
		end = 'bottom top',
		yPercent = -20,
		ease = 'none',
		scrub = true,
		scrollTriggerOptions = {}
	} = options;

	const tween = gsap.to(node, {
		yPercent,
		ease,
		scrollTrigger: {
			trigger: node,
			start,
			end,
			scrub,
			...scrollTriggerOptions
		}
	});

	return {
		update(newOptions: typeof options) {
			// Reinitialize the tween with updated options
			if (tween.scrollTrigger) {
				tween.scrollTrigger.kill();
			}
			gsap.killTweensOf(node);
			gsap.to(node, {
				yPercent: newOptions.yPercent ?? yPercent,
				ease: newOptions.ease ?? ease,
				scrollTrigger: {
					trigger: node,
					start: newOptions.start ?? start,
					end: newOptions.end ?? end,
					scrub: newOptions.scrub ?? scrub,
					...(newOptions.scrollTriggerOptions ?? {})
				}
			});
		},
		destroy() {
			tween.kill();
			if (tween.scrollTrigger) {
				tween.scrollTrigger.kill();
			}
		}
	};
}
