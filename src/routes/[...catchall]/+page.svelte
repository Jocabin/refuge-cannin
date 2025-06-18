<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/custom-components.js';
	import Headerhero from '$lib/components/headerhero.svelte';

	let { data } = $props();
	const canShowContent = data.content || isPreviewing();
</script>

<main>
	<Headerhero />
	{#if canShowContent}
		<Content
			model={'page'}
			content={data.content}
			apiKey={PUBLIC_BUILDER_IO_KEY}
			customComponents={CUSTOM_COMPONENTS}
		/>
	{:else}
		Content Not Found
	{/if}
</main>
