<script lang="ts">
	let { onclick, color, text, textColor, link } = $props();
</script>

{#if link}
	<a
		href={link}
		class="w-fit block rounded-full px-10 py-6 font-semibold font-dm"
		style="background-color: {color}; color: {textColor};"
	>
		{text}
	</a>
{:else}
	<button
		{onclick}
		class="w-fit rounded-full px-10 py-6 font-semibold font-dm"
		style="background-color: {color}; color: {textColor};"
	>
		{text}
	</button>
{/if}
