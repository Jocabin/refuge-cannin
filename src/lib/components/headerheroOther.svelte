<script>
	import NoiseFilter from './NoiseFilter.svelte';

	let { title, text, img, color, colorTitle } = $props();
</script>

<div class="p-5">
	<div
		class="rounded-3xl w-full py-4 px-4 md:p-10 flex flex-col justify-end items-stretch h-[800px]"
		style="background-color: {color};"
	>
		<!-- <NoiseFilter /> -->

		<div class="flex flex-col md:flex-row justify-between">
			<div class="flex flex-col gap-3 order-2 md:order-1">
				<h3
					style="color:{colorTitle}"
					class="max-w-[1000px] font-sink text-title-pink text-[68px] leading-[90%] md:text-[130px] uppercase"
				>
					{title}
				</h3>
				<p class="max-w-[700px]">{text}</p>
			</div>

			<div class="order-1 md:order-2 relative bottom-30 left-20 md:left-10 lg:left-10">
				<img src={img} class=" w-[300px] md:w-[400px] object-cover" alt="" />
			</div>
		</div>
	</div>
</div>
