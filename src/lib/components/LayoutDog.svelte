<script>
	let { ctaText, ctaColor, ctaLink, img, years, height, sexe, energyLevel, childrenCompatibility } =
		$props();
</script>

<div class="flex items-center justify-center">
	<div class="w-[550px]">
		<img class="w-[450px]" src={img} alt="" />
	</div>
	<div class="w-[450px]">
		<p class="font-dm text-[20px] text-title-blue"><b>Âge :</b> {years}</p>
		<p class="font-dm text-[20px] text-title-blue"><b>Taille :</b> {height}</p>
		<p class="font-dm text-[20px] text-title-blue"><b>Sexe : </b>{sexe}</p>
		<p class="font-dm text-[20px] text-title-blue"><b>Niveau d'énergie :</b> {energyLevel}</p>
		<p class="font-dm text-[20px] text-title-blue pb-[48px]">
			<b>Compatible avec les enfants :</b>
			{childrenCompatibility}
		</p>
		{#if ctaText && ctaText.trim() !== ''}
			<a
				href={ctaLink}
				class="border-2 py-[5px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent"
				style="background-color: {ctaColor}; border-color: {ctaColor};"
				>{ctaText}
			</a>
		{/if}
	</div>
</div>
