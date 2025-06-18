<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	const { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
