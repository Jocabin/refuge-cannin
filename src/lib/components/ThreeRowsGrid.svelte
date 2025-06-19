<script>
	let { title, text, title2, text2, color, color1, ctaText, ctaLink, rows } = $props();
</script>

<section class="flex flex-col justify-center items-center gap-10 py-24">
	<h2
		class="w-[350px] md:w-[1012px] font-sink text-[56px] uppercase text-center leading-[90%] pb-2"
	>
		{title}
	</h2>
	<h2
		class="w-[350px] md:w-[1012px] font-sink text-[40px] md:text-[56px] uppercase text-center leading-[90%] pb-2"
	>
		{title2}
	</h2>
	<p class="w-[350px] md:w-[800px] font-dm text-[16px] text-center pb-[16px]">{text2}</p>
	<div class="flex flex-col justify-center items-center gap-[32px]">
		<div class="flex flex-col md:flex-row gap-[32px]">
			{#each rows as row}
				<div
					class="w-[312px] h-[312px] px-[16px] py-[16px] flex flex-col rounded-2xl justify-between text-start"
					style="background-color: {row.color}"
				>
					<h3 class="w-[200px] font-sink text-[40px] uppercase leading-[90%]">{row.title}</h3>
					<ul>
						<li>
							<p class="font-dm text-[16px]">{row.text}</p>
						</li>
					</ul>
				</div>
			{/each}
		</div>
		{#if ctaText && ctaText.trim() !== ''}
			<a
				href={ctaLink}
				class="border-2 py-[5px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent"
				style="background-color: {color1}; border-color: {color1}; hover:background-transparent"
				>{ctaText}
			</a>
		{/if}
	</div>
</section>
