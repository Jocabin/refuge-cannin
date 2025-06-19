<script>
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import { fetchEntries } from '@builder.io/sdk-svelte';
	import CardList from './CardList.svelte';

	let dogs = $state([]);

	$effect(() => {
		fetchEntries({
			model: 'chien',
			apiKey: PUBLIC_BUILDER_IO_KEY,
			options: { limit: 3 }
		}).then((data) => {
			dogs = data;
		});
	});
</script>

<section class="p-20 flex flex-col gap-16">
	<h2 class="font-sink text-6xl uppercase">Nos vedettes</h2>

	<CardList results={dogs} />
</section>
