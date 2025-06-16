<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import type { PageProps } from './$types';
	import Button from '$lib/components/Button.svelte';

	let { data }: PageProps = $props();
	const model = 'page';

	const canShowContent = data.content || isPreviewing();

	console.log(data);
</script>

<main>
	<div>
		<Button>jjjj</Button>
		<Button>Appartement</Button>
	</div>
	{#if canShowContent}
		<div>page Title: {data.content?.data?.title || 'Unpublished'}</div>
		<Content {model} content={data.content} apiKey={PUBLIC_BUILDER_IO_KEY} />
	{:else}
		Content Not Found
	{/if}
</main>
