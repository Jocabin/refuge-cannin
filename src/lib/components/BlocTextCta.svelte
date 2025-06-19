<script>
	const { text, sousTitle, title, color, ctaLink, ctaText } = $props();
</script>

<div class="w-[100vw] md:w-[30vw] flex flex-col items-center">
	<div class="w-full md:w-auto gap-4 flex flex-col justify-center items-center md:items-start">
		<h4 class="font-just text-[22px] md:text-[25px] uppercase text-start leading-[90%]">
			{sousTitle}
		</h4>
		<h2 class=" font-sink text-[48px] uppercase text-center md:text-start leading-[90%]">
			{title}
		</h2>
		<p class=" font-dm text-[16px] text-center md:text-start">{text}</p>
		{#if ctaText && ctaText.trim() !== ''}
			<a
				href={ctaLink}
				style="background-color:{color}; border-color:{color};"
				class=" border-2 py-[10px] px-[32px] rounded-4xl font-dm"
				>{ctaText}
			</a>
		{/if}
	</div>
</div>
