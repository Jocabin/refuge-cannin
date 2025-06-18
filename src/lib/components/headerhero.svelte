<script>
	import Sitckers1 from '../assets/Stickers-1.png';
	import Sitckers2 from '../assets/Stickers-2.png';
	import HeartBone from '../assets/heart-bone.png';
</script>

<div class="div bg-secondary rounded-3xl h-screen overflow-hidden mx-auto flex items-end relative">
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
	<div class="w-screen py-4 px-4 relative md:py-10 md:px-10">
		<div class="flex justify-between">
			<img
				class="absolute bottom-150 right-0 z-20 w-[150px] h-auto md:w-[200px] md:right-300"
				src={Sitckers1}
				alt=""
			/>
			<img
				class="absolute bottom-140 right-80 z-20 w-[100px] h-auto md:w-[200px]"
				src={HeartBone}
				alt=""
			/>
		</div>
		<div class="flex justify-between">
			<div class="flex flex-col gap-4 items-start">
				<h3
					class="font-sink text-title-pink text-[69px] leading-[80px] md:text-[137px] md:leading-[130px] uppercase"
				>
					Une truffe. <br />Deux cœurs. <br />Une vie transformée.
				</h3>
				<p class="font-just text-4xl text-title-pink">
					Adopter, ce n’est pas choisir au hasard.
					<br /> C’est créer un lien, un vrai.
				</p>
				<button
					class="bg-third py-[16px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-third"
					>Voir les chiens à l’adoption</button
				>
			</div>
			<img
				class="absolute bottom-10 right-0 z-20 w-[130px] h-auto md:w-[250px]"
				src={Sitckers2}
				alt=""
			/>
		</div>
	</div>
</div>
