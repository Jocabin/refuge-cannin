<script>
	let { text, title, img, color, colorTitle, cards } = $props();
</script>

<div class="w-[80vw] md:w-[58vw] flex flex-col gap-4 md:gap-[8px]">
	{#each cards as card, i}
		{@const r = card.data}
		<div
			class=" px-4 py-4 flex flex-col rounded-2xl overflow-hidden"
			style="background-color:{card.color};"
		>
			<div class="max-w-full flex items-end justify-start gap-4">
				<img class="pb-2" src={card.img} alt="" />
				<h3
					class="font-sink text-start text-[25px] uppercase break-words whitespace-normal"
					style="color:{card.colorTitle};"
				>
					{card.title}
				</h3>
			</div>
			<p class="break-words whitespace-normal">{card.text}</p>
		</div>
	{/each}
</div>
