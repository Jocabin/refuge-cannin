<script>
	// @ts-nocheck
	let { results } = $props();
</script>

<div>
	<p class="mb-4">{results.length} résultats</p>

	<section class="dogGrid">
		{#each results as result, i}
			{@const r = result.data}

			<a
				href="/dogs/{r.name}"
				class="bg-white w-full rounded-lg overflow-hidden flex flex-col max-h-[350px]"
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
			</a>
		{/each}
	</section>
</div>

<style>
	.dogGrid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
		grid-template-rows: repeat(auto-fill, 350px);
	}
</style>
