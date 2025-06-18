<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/custom-components.js';
	import Headerhero from '$lib/components/headerhero.svelte';
	import SlideElements from '$lib/components/slideElements.svelte';

	let { data } = $props();
	const canShowContent = data.content || isPreviewing();
</script>

<main class="mx-[12px] my-[16px]">
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

	<SlideElements />
</main>
