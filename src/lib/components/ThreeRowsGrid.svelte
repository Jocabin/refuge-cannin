<script>
	let { rows } = $props();
</script>

<section class="flex flex-row gap-4">
	{#each rows as row}
		<div>
			<p>{row.text}</p>
			<a href={row.ctaLink}>{row.ctaText}</a>
			<img src={row.img} alt={row.imgAlt} width="400" />
		</div>
	{/each}
</section>
