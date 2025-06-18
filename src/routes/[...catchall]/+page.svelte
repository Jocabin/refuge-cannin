<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';

	let { data } = $props();
	const canShowContent = data.content || isPreviewing();
</script>

<main>
	{#if canShowContent}
		<Content model={'page'} content={data.content} apiKey={PUBLIC_BUILDER_IO_KEY} />
	{:else}
		Content Not Found
	{/if}
</main>
