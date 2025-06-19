<script>
	let { text, title, img, color, colorTitle, cards } = $props();
</script>

<div class="flex flex-col gap-[8px]">
	{#each cards as card, i}
		{@const r = card.data}
		<div
			class="w-[600px] px-[24px] py-[16px] flex flex-col rounded-2xl"
			style="background-color:{card.color};"
		>
			<div class="flex items-end justify-start gap-4">
				<img class="pb-2" src={card.img} alt="" />
				<h3 class="font-sink text-start text-[25px] uppercase" style="color:{card.colorTitle};">
					{card.title}
				</h3>
			</div>
			<p>{card.text}</p>
		</div>
	{/each}
</div>
