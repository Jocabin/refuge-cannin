<script>
	let { title, text, img, color, children } = $props();
</script>

<div class="p-5">
	<div
		class="rounded-3xl w-full md:p-10 flex flex-col justify-end items-start min-h-screen"
		style="background-color: {color};"
	>
		<div class="flex flex-row justify-between w-full md:pt-32">
			<div class="flex flex-col gap-3 w-full">
				<h3
					class="max-w-[830px] font-sink text-title-pink text-[69px] leading-[80px] md:text-[120px] md:leading-[90%] uppercase"
				>
					{title}
				</h3>
				<p class="max-w-[700px]">{text}</p>
			</div>

			<div>
				<img src={img} class="object-cover" width="600" alt="" />
			</div>
		</div>

		<div class="w-full">
			{@render children()}
		</div>
	</div>
</div>
