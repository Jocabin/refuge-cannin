<script>
	let { ctaText, ctaColor, ctaLink, img, years, height, sexe, energyLevel, childrenCompatibility } =
		$props();
</script>

<div class="flex flex-col md:flex-row items-center justify-center gap-8">
	<div class="w-[550px flex justify-center items-center md:justify-start md:items-start">
		<img class=" w-[250px] md:w-[450px]" src={img} alt="" />
	</div>
	<div class="w-[450px] flex flex-col justify-center items-center md:justify-start md:items-start">
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
		<p
			class="font-just text-[40px] text-center leading-[90%] absolute -bottom-30 right-20 md:bottom-10 md:right-20 -rotate-6"
		>
			WoOF! j’adore
			<br />les croquettes...
		</p>
	</div>
</div>
