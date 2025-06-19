<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/custom-components.js';

	let { data } = $props();

	const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
	<title>{data?.content?.name} | Le Refuge Cannin</title>
</svelte:head>

<main class=" bg-background-2 overflow-hidden flex flex-col gap-[24px]">
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
