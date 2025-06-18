<script>
	let { questions } = $props();
</script>

<section>
	<h2>FAQ</h2>

	{#each questions as q}
		<details>
			<summary>{q.title}</summary>
			<p>{q.text}</p>
		</details>
	{/each}
</section>
