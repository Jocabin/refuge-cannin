<script>
	import ArrowRight from 'phosphor-icons-svelte/IconArrowRightRegular.svelte';

	let { card } = $props();
</script>

<a
	href={card.link}
	style="background-color: {card.color};"
	class="shrink-0 md:shrink md:basis-[30%] w-[316px] h-[325px] flex flex-col rounded-2xl bg-cover bg-center py-[16px] px-[16px] justify-between snap-start"
>
	<img class="w-[100px]" src={card.img} alt="" />
	<div class="flex items-center justify-between">
		<p
			class="max-w-[237px] font-sink text-[30px] leading-[40px] text-text uppercase iv break-words"
		>
			{card.title}
		</p>
		<ArrowRight class="w-20 h-20 text-black text-xl" />
	</div>
</a>
