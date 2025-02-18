<script lang="ts">
	import Header from './Layout/Header.svelte';
	import Footer from './Layout/Footer.svelte';
	import SmoothScroll from '../lib/Components/SmoothScroll.svelte';
	// import Cursor from '../lib/Components/Cursor.svelte';
	// import SmoothScroll from '../lib/Components/SmoothScroll.svelte';
</script>

<!-- todo: add a personality web questionaire -->
<svelte:head></svelte:head>
<Header />

<slot />

<!-- <Footer /> -->

<style global lang="scss">
</style>
