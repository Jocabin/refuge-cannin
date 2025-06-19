<script>
	import { environment, lifestyle, entourage } from '$lib/select-datas';
	import Button from './button.svelte';

	let envSearch = $state('');
	let lifestyleSearch = $state('');
	let entourageSearch = $state('');
</script>

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
			link="/nos-chiens-a-ladoption?env={envSearch}&quotidien={lifestyleSearch}&entourage={entourageSearch}"
		/>
	</div>
</nav>
