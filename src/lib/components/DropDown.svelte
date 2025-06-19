<script>
	import ArrowRight from 'phosphor-icons-svelte/IconArrowRightRegular.svelte';
	let { text } = $props();
</script>

<div
	class=" bg-background-1 h-auto w-auto divide-y-4 divide-y-reverse divide-[rgba(1, 3, 68, 0.05)"
>
	{#if text}
		<div class="group flex w-full">
			<p class="font-dm text-[16px] text-bold">{text}</p>
			<ArrowRight class="hidden transition all duration-300 group:hover:block" />
		</div>
	{/if}
</div>
