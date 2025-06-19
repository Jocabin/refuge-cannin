<script>
	let { title, text, img, color, children } = $props();
</script>

<div
	class="rounded-3xl mx-5 w-screen md:p-10 h-[850px] overflow-hidden flex flex-col justify-end items-start relative md:h-screen"
	style="background-color: {color};"
>
	{#if false}
		<button
			class="bg-third border-2 border-third py-[16px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-third"
			>Voir les chiens à l’adoption</button
		>

		<svg
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
		</svg>
	{/if}

	<div class="flex flex-row justify-between relative">
		<div class="flex flex-col gap-3">
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
