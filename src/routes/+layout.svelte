<script lang="ts">
	import Header from './Layout/Header.svelte';
	import Footer from './Layout/Footer.svelte';
	import SmoothScroll from '../lib/Components/SmoothScroll.svelte';
	// import Cursor from '../lib/Components/Cursor.svelte';
	// import SmoothScroll from '../lib/Components/SmoothScroll.svelte';
</script>

<!-- todo: on mobile replace burger with the word menu and pricing how better off is -->
<!-- todo: add a personality web questionaire -->
<!-- todo: fix line height variables to match typography ratio -->
<!-- todo: change highlight color -->
<svelte:head></svelte:head>
<Header />

<slot />

<!-- <Footer /> -->

<style global lang="scss">
</style>
