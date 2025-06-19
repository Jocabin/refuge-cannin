<script>
	import NoiseFilter from './NoiseFilter.svelte';

	let { title, text, img, color, children } = $props();
</script>

<div class="p-5">
	<div
		class="rounded-3xl w-full md:p-10 flex flex-col justify-end items-start h-screen"
		style="background-color: {color};"
	>
		<div class="flex flex-row justify-between w-full">
			<div class="flex flex-col gap-3 w-full">
				<h3
					class="max-w-[830px] font-sink text-title-pink text-[69px] leading-[80px] md:text-[137px] md:leading-[130px] uppercase"
				>
					{title}
				</h3>
				<p class="max-w-[700px]">{text}</p>
			</div>

			<div>
				<img src={img} class="object-cover" width="400" alt="" />
			</div>
		</div>

		<div class="w-full">
			{@render children()}
		</div>
	</div>
</div>
