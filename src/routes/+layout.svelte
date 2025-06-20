<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	const { children } = $props();

	let showHeader = $state(false);
	let last = 0;

	function scroll() {
		const scroll = window.scrollY;

		if (scroll < last) {
			showHeader = true;
			last = scroll;
		}

		if (scroll > last) {
			showHeader = false;
			last = scroll;
		}
	}
</script>

<svelte:window onscroll={scroll} />

{#if showHeader}
	<Header />
{/if}
{@render children()}
<Footer />
