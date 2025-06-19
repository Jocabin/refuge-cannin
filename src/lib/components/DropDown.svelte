<script>
	import ArrowRight from 'phosphor-icons-svelte/IconArrowRightRegular.svelte';
	let { text } = $props();
</script>

<div class="bg-background-1 w-auto divide-y divide-[rgba(1,3,68,0.05)]">
	{#if text}
		<div class="group flex w-full items-center justify-between py-2 px-4 cursor-pointer">
			<p class="font-dm text-[16px] font-bold">{text}</p>
			<ArrowRight
				class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-4 h-4"
			/>
		</div>
	{/if}
</div>
