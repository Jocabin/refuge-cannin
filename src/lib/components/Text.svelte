<script>
	let { type, text } = $props();
</script>

<div class="">
	{#if type === 'h1'}
		<h1 class="text-3xl">{text}</h1>
	{:else if type === 'h2'}
		<h2 class="text-2xl">{text}</h2>
	{:else if type === 'h3'}
		<h3 class="text-xl">{text}</h3>
	{:else if type === 'p'}
		<p>{text}</p>
	{:else}
		<span>a pas</span>
	{/if}
</div>
