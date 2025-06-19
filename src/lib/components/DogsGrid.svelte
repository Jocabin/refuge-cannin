<script>
	// @ts-nocheck

	import { fetchEntries } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import Button from './button.svelte';
	import { page } from '$app/state';
	import CardList from './CardList.svelte';
	import { environment, lifestyle, entourage } from '$lib/select-datas';

	/**
	 * @type {string | any[]}
	 */
	let dogs = $state([]);
	let envSearch = $state(page.url.searchParams.get('env') ?? '');
	let lifestyleSearch = $state(page.url.searchParams.get('quotidien') ?? '');
	let entourageSearch = $state(page.url.searchParams.get('entourage') ?? '');

	function getOptionvalue(text, arr) {
		return arr.find((el) => el.value === text)?.text ?? '';
	}

	function filterDogs() {
		return dogs.filter((dog) => {
			const r = dog.data;

			const matchesEnv =
				r.environement == getOptionvalue(envSearch, environment) || envSearch === '';
			const matchesLifestyle =
				r.quotidien == getOptionvalue(lifestyleSearch, lifestyle) || lifestyleSearch === '';
			const matchesEntourage =
				r.entourage == getOptionvalue(entourageSearch, entourage) || entourageSearch === '';

			return matchesEnv && matchesLifestyle && matchesEntourage;
		});
	}

	let results = $state([]);

	$effect(() => {
		fetchEntries({
			model: 'chien',
			apiKey: PUBLIC_BUILDER_IO_KEY
		}).then((data) => {
			dogs = data;
			results = filterDogs();
		});
	});
</script>

<section class="p-20 flex flex-col gap-16">
	<h2 class="font-just text-4xl -rotate-3">Tu es le <br /> maitre parfait ?</h2>

	<nav class="flex flex-col gap-4 bg-white rounded-3xl p-8">
		<p class="font-dm font-bold text-text">Recherchez le wouf de votre vie</p>
		<div class="flex flex-row gap-4 justify-between">
			<select
				class="flex-1 bg-white rounded-full border-2 border-text p-6 font-dm font-semibold"
				name=""
				id=""
				bind:value={envSearch}
			>
				{#each environment as o}
					<option value={o.value}>{o.text}</option>
				{/each}
			</select>

			<select
				class="flex-1 bg-white rounded-full border-2 border-text p-6 font-dm font-semibold"
				name=""
				id=""
				bind:value={lifestyleSearch}
			>
				{#each lifestyle as o}
					<option value={o.value}>{o.text}</option>
				{/each}
			</select>

			<select
				class="flex-1 bg-white rounded-full border-2 border-text p-6 font-dm font-semibold"
				name=""
				id=""
				bind:value={entourageSearch}
			>
				{#each entourage as o}
					<option value={o.value}>{o.text}</option>
				{/each}
			</select>

			<Button
				color="#7F82DD"
				textColor="#010344"
				text="Va chercher !"
				onclick={() => {
					results = filterDogs();
				}}
			>
				Rechercher
			</Button>
		</div>
	</nav>

	<CardList {results} />
</section>
