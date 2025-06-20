<script lang="ts">
	let { onclick = null, color, text, textColor, link = null } = $props();
</script>

{#if link}
	<a
		href={link}
		class="w-fit block rounded-full px-10 py-[8px] font-semibold font-dm"
		style="background-color: {color}; color: {textColor};"
	>
		{text}
	</a>
{:else}
	<button
		{onclick}
		class="w-fit rounded-full px-10 py-[8px] font-semibold font-dm"
		style="background-color: {color}; color: {textColor};"
	>
		{text}
	</button>
{/if}
