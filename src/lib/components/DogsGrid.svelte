<script>
	// @ts-nocheck

	import { fetchEntries } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import Button from './Button.svelte';

	/**
	 * @type {string | any[]}
	 */
	let dogs = $state([]);
	let results = $derived(dogs);

	let envSearch = $state('');
	let lifestyleSearch = $state('');
	let entourageSearch = $state('');
	let searchEnabled = $derived(envSearch != '' || lifestyleSearch != '' || entourageSearch != '');

	$effect(() => {
		fetchEntries({
			model: 'chien',
			apiKey: PUBLIC_BUILDER_IO_KEY
		}).then((data) => {
			dogs = data;
		});
	});
</script>

<section class="p-20 flex flex-col gap-16">
	<h2 class="font-just text-4xl -rotate-3">Tu es le <br /> maitre parfait ?</h2>

	<nav class="flex flex-row gap-4">
		<select
			class="flex-1 bg-white rounded-full border-2 border-text p-6 font-dm font-semibold"
			name=""
			id=""
			bind:value={envSearch}
		>
			<option value="" selected>Ton environnement</option>
			<option value="house" selected>Maison</option>
			<option value="appart" selected>Appartement</option>
		</select>

		<select
			class="flex-1 bg-white rounded-full border-2 border-text p-6 font-dm font-semibold"
			name=""
			id=""
			bind:value={lifestyleSearch}
		>
			<option value="" selected>Ton quotidien</option>
		</select>

		<select
			class="flex-1 bg-white rounded-full border-2 border-text p-6 font-dm font-semibold"
			name=""
			id=""
			bind:value={entourageSearch}
		>
			<option value="" selected>Ton entourage</option>
		</select>

		<Button>Rechercher</Button>
	</nav>

	<div>
		<p class="mb-4">{results.length} résultats</p>

		<section class="dogGrid">
			{#each results as result, i}
				{@const r = result.data}

				{#if !searchEnabled}
					<article
						class="bg-white w-full rounded-lg overflow-hidden flex flex-col"
						class:firstOne={i == 0}
					>
						<div class="flex-1 w-full bg-red-50 overflow-hidden">
							<img src={r.gallery[0].img} alt="" class="flex-1 w-full object-cover h-full" />
						</div>
						<div class="font-dm p-4">
							<h2 class="font-bold text-3xl">{r.name}</h2>
							<p>En attente de sa famille idéale</p>
							<p>{r.sex}</p>
							<p>
								{new Date(r.birthdate).toLocaleDateString()} ({Math.floor(
									(new Date() - new Date(r.birthdate)) / (1000 * 60 * 60 * 24 * 365)
								)} ans)
							</p>
						</div>
					</article>
				{/if}
			{/each}
		</section>
	</div>
</section>

<style>
	.dogGrid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
		grid-template-rows: repeat(auto-fill, 350px);
	}

	.firstOne {
		grid-row: 1 / 3;
	}
</style>
