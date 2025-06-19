<script>
	const { text, sousTitle, title, color, ctaLink, ctaText } = $props();
</script>

<div class="flex flex-col justify-center items-center">
	<div class="gap-4 flex flex-col items-start">
		<h4 class="font-just text-[25px] uppercase text-start leading-[90%]">
			{sousTitle}
		</h4>
		<h2 class="w-[450px] font-sink text-[48px] uppercase text-start leading-[90%]">
			{title}
		</h2>
		<p class="w-[450px] font-dm text-[16px] text-start">{text}</p>
		<a
			style="background-color: {color}; border-color:{color}"
			class="border-2 py-[5px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-accents"
			href={ctaLink}
		>
			{ctaText}
		</a>
	</div>
</div>
