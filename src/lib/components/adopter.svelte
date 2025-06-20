<script>
	const { text, title, img, color, ctaLink, ctaText, woff1, woff2, textList, colorTitle } =
		$props();

	const textBtn = false;
</script>

<div class="w-full py-[12px] px-[16px] flex">
	<div
		class="divrounded-3xl h-[600px] overflow-hidden w-full flex items-center rounded-2xl justify-between relative"
		style="background-color:{color}"
	>
		<div
			class="mx-auto w-[1393px] py-4 px-4 flex justify-center items-center relative gap-[90px] md:py-10 md:px-10"
		>
			<div class="w-[454px] md:w-[454px] flex flex-col gap-8 items-start">
				<h2
					class="font-sink text-[46px] md:text-[58px] text-text leading-[90%] uppercase"
					style="color: {colorTitle}"
				>
					{title}
				</h2>
				<p class="font-dm text-[16px] leading-[120%]">
					{text}
				</p>
				{#if textList && textList.trim() !== ''}
					<ul>
						<li>
							<p class="font-dm text-[16px] leading-[120%] pb-[48px]">
								{textList}
							</p>
						</li>
					</ul>
				{/if}
				<div class="flex gap-10 justify-center items-center">
					{#if ctaText && ctaText.trim() !== ''}
						<a
							href={ctaLink}
							class="bg-white border-white border-2 py-[5px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-white"
							>{ctaText}
						</a>
					{/if}
					<p class="font-just text-[41px] font-normal leading-[30px] rotate-10">
						{woff1} <br />
						{woff2}
					</p>
				</div>
			</div>
			<div>
				<img class="" src={img} width="380" alt="" />
			</div>
		</div>
	</div>
</div>
