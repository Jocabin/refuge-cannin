<script>
	import LineH from '$lib/assets/line-h.png';
	import Card from './Card.svelte';
	let { title, cards } = $props();
</script>

<div class="flex-col items-center justify-between md:flex mx-auto relative bottom-10">
	<div
		class="w-full py-24 flex flex-col items-start md:items-center justify-start md:justify-center gap-[48px] md:flex"
	>
		<div class="flex flex-col items-start md:flex-row md:items-center">
			<h3
				class="max-w-[550px] break-words h-fit font-sink text-[36px] text-left leading-[90%] md:text-[58px] md:text-center uppercase py-[12px] px-[16px]"
			>
				{title}
			</h3>
			<div class="flex flex-col right-[350px] md:flex py-[12px] px-[16px]">
				<p class="font-just ml-[45px] text-[42px]">WOOF!</p>
				<div>
					<img class="w-[50px] h-auto" src={LineH} alt="" />
				</div>
			</div>
		</div>
		<!-- Conteneur scrollable uniquement sur mobile -->
		<div class="overflow-hidden w-full whitespace-nowrap md:w-auto md:overflow-auto">
			<div
				class="-mx-4 px-4 flex overflow-x-scroll snap-x scroll-smooth flex-nowrap gap-[32px] md:mx-0 md:px-0 md:overflow-visible md:flex-wrap"
			>
				{#each cards as card}
					<Card {card} />
				{/each}
			</div>
		</div>
	</div>
</div>
