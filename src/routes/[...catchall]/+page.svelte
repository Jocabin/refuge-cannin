<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import type { PageProps } from './$types';
	import Button from '$lib/components/button.svelte';

	let { data }: PageProps = $props();
	const model = 'page';

	const canShowContent = data.content || isPreviewing();

	console.log(data);
</script>

<main>
	<div>
		<ul>
			{#each data.pages as dog}
				<li>
					<img src={dog.data.img} alt="" />
					<h3>{dog.data.name}</h3>
				</li>
			{/each}
		</ul>
	</div>
	{#if canShowContent}
		<div>page Title: {data.content?.data?.title || 'Unpublished'}</div>
		<Content {model} content={data.content} apiKey={PUBLIC_BUILDER_IO_KEY} />
	{:else}
		Content Not Found
	{/if}

	<div>
		<Button text="coucou"></Button>
	</div>
</main>
