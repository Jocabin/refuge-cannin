<script>
	import Adoption from '$lib/assets/liste-adoption.png';

	let { title, text, ctaText, ctaLink } = $props();
</script>

<div class="flex items-center justify-between">
	<div class="w-[750px] flex flex-col items-start justify-start pl-[10%] gap-[18px]">
		<h4 class="font-just text-[25px] md:text-[45px]">Vous n’adoptez pas seul :</h4>
		<h2 class="font-sink text-[35px] leading-[90%] uppercase md:text-[58px] text-title-blue">
			{title}
		</h2>
		<p class="font-dm text-[16px]">
			{text}
		</p>
		<a
			href={ctaLink}
			class="bg-third border-2 border-third py-[16px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-third"
			>{ctaText}</a
		>
	</div>
	<div>
		<img class="w-[600px]" src={Adoption} alt="" />
	</div>
</div>
