<script>
	const { text, title, img, color, ctaLink, ctaText, colorTitle } = $props();
</script>

<div class="flex flex-col justify-center items-center">
	<div class="gap-4 w-[650px] flex flex-col items-center">
		<img class="w-[105px] h-[105px]" src={img} alt="" />
		<h2
			class="font-sink text-[56px] uppercase text-center leading-[90%]"
			style="color:{colorTitle}"
		>
			{title}
		</h2>
		<p class="font-dm text-[16px] text-center">{text}</p>
		<a
			style="background-color: {color} border-color:{color}"
			class="bg-accents border-accents border-2 py-[5px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-accents"
			href={ctaLink}
		>
			{ctaText}
		</a>
	</div>
</div>
