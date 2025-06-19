<script>
	const { text, sousText, title, color, ctaLink, ctaText } = $props();
</script>

<div class="flex flex-col justify-center items-center">
	<div class="gap-4 w-[650px] flex flex-col items-center">
		<h4 class="font-sink text-[40px] uppercase text-center leading-[90%]">
			{title}
		</h4>
		<h2 class="font-sink text-[56px] uppercase text-center leading-[90%]">
			{title}
		</h2>
		<p class="font-dm text-[16px] text-center">{text}</p>
		<a
			style="background-color: {color} border-color:{color}"
			class="border-2 py-[5px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-accents"
			href={ctaLink}
		>
			{ctaText}
		</a>
	</div>
</div>
