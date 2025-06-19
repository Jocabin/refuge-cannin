<script>
	let { text, title, img, color, colorTitle, cards } = $props();
</script>

<div class="w-[75vw] md:w-[58vw] flex flex-col gap-4 md:gap-[8px]">
	{#each cards as card, i}
		{@const r = card.data}
		<div
			class="flex flex-col md:flex-row rounded-2xl px-4 py-4 gap-8"
			style="background-color:{card.color};"
		>
			<div class="flex flex-col rounded-2xl overflow-hidden justify-end">
				<div class="max-w-full flex flex-col items-start justify-start">
					<img class="pb-2" src={card.img} alt="" />
					<h3
						class="font-sink text-start text-[25px] uppercase break-words whitespace-normal"
						style="color:{card.colorTitle};"
					>
						{card.title}
					</h3>
				</div>
			</div>
			<div class="w-[60vw] md:w-[50vw]">
				<p class="break-words whitespace-normal">{card.text}</p>
			</div>
		</div>
	{/each}
</div>
