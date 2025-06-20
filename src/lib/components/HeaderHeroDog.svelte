<script>
	let { title, ctaColor, ctaLink, ctaText, img } = $props();
</script>

<div class="p-5 mx-[16px]">
	<div
		class="rounded-3xl w-full py-4 px-4 md:p-10 flex flex-col justify-end items-stretch h-[90vh]"
		style="background-image: url({img}); background-size: cover; background-repeat: no-repeat; background-position: top center;"
	>
		<!-- <NoiseFilter /> -->

		<div class="flex justify-between">
			<div class="flex w-full gap-3 justify-between items-end order-2 md:order-1">
				<h3 class="font-sink text-background-1 text-[68px] leading-[60%] md:text-[130px] uppercase">
					{title}
				</h3>
				{#if ctaText && ctaText.trim() !== ''}
					<a
						href={ctaLink}
						style="background-color:{ctaColor}; border-color:{ctaColor};"
						class=" border-2 py-[10px] px-[32px] rounded-4xl font-dm"
						>{ctaText}
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
