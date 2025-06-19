<script>
	import PictureDog from '$lib/assets/picture-1.png';

	const { text, title, img, color, ctaLink, ctaText, woff1, woff2, textList } = $props();

	const textBtn = false;
</script>

<div class="py-[12px] px-[16px] flex">
	<div
		class="divrounded-3xl h-[600px] overflow-hidden mx-auto flex items-center rounded-2xl justify-between relative"
		style="background-color:{color}"
	>
		<!-- <svg
			class="mix-blend-overlay absolute inset-0 md:w-full md:h-full"
			xmlns="http://www.w3.org/2000/svg"
			width="1395"
			height="800"
			viewBox="0 0 1395 800"
			fill="none"
		>
			<g filter="url(#filter0_n_177_152)">
				<rect
					width="1395"
					height="800"
					rx="24"
					fill="url(#paint0_radial_177_152)"
					fill-opacity="0.6"
				/>
			</g>
			<defs>
				<filter
					id="filter0_n_177_152"
					x="0"
					y="0"
					width="1395"
					height="800"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feTurbulence
						type="fractalNoise"
						baseFrequency="1 1"
						stitchTiles="stitch"
						numOctaves="3"
						result="noise"
						seed="9413"
					/>
					<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
					<feComponentTransfer in="alphaNoise" result="coloredNoise1">
						<feFuncA
							type="discrete"
							tableValues="0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
						/>
					</feComponentTransfer>
					<feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
					<feFlood flood-color="#7F82DD" result="color1Flood" />
					<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
					<feMerge result="effect1_noise_177_152">
						<feMergeNode in="shape" />
						<feMergeNode in="color1" />
					</feMerge>
				</filter>
				<radialGradient
					id="paint0_radial_177_152"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(42.5001 16.4999) rotate(29.6472) scale(1309.99 2320.65)"
				>
					<stop stop-color="#000" />
					<stop offset="1" stop-color="#fff" stop-opacity="0" />
				</radialGradient>
			</defs>
		</svg> -->
		<div
			class="w-[1393px] py-4 px-4 flex justify-center items-center relative gap-[90px] md:py-10 md:px-10"
		>
			<div class="w-[454px] flex flex-col gap-[10px] items-start">
				<h2 class="font-sink text-[58px] text-text leading-[90%] uppercase">
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
				{#if ctaText && ctaText.trim() !== ''}
					<a
						href={ctaLink}
						class="bg-white border-white border-2 py-[5px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-white"
						>{ctaText}
					</a>
				{/if}
				<p
					class="absolute left-80 top-120 font-just text-[41px] font-normal leading-[30px] rotate-10"
				>
					{woff1} <br />
					{woff2}
				</p>
			</div>
			<div>
				<img class="w-[518px]" src={img} alt="" />
			</div>
		</div>
	</div>
</div>
