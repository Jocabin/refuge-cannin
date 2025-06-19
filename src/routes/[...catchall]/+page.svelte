<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/custom-components.js';
	import Headerhero from '$lib/components/headerhero.svelte';
	import SlideElements from '$lib/components/slideElements.svelte';
	import Adopter from '$lib/components/adopter.svelte';
	import PictureDogBoy from '$lib/assets/picture-dog-and-boy.png';
	import PictureDogWomen from '$lib/assets/picture-dog-and-women.png';
	import TennisBall from '$lib/assets/tenis-ball-pink.png';
	import Picture2 from '$lib/assets/picture-2.png';

	let { data } = $props();
	const canShowContent = data.content || isPreviewing();
</script>

<main class=" bg-background-2 overflow-hidden flex flex-col gap-[24px]">
	{#if canShowContent}
		<Content
			model={'page'}
			content={data.content}
			apiKey={PUBLIC_BUILDER_IO_KEY}
			customComponents={CUSTOM_COMPONENTS}
		/>
	{:else}
		Content Not Found
	{/if}

	<Adopter />

	<!-- BLOC 5 -->
	<div class="w-screen h-[130vh] flex items-center justify-between relative bottom-20">
		<div class="relative top-30">
			<img class="w-[800px] relative top-30" src={PictureDogBoy} alt="" />
			<img class="w-[600px] relative -top-50" src={PictureDogWomen} alt="" />
		</div>
		<div class="w-[750px] flex flex-col items-start justify-start pr-[10%] pl-[5%] gap-[18px]">
			<img class="w-[100px] relative left-30 -bottom-5" src={TennisBall} alt="" />
			<h2 class="font-sink text-[35px] leading-[90%] uppercase md:text-[58px] text-text">
				Ici, c’est love, <br />gamelle & dodo.
			</h2>
			<p class="font-dm text-[16px]">
				Ateliers, apprentissage, sont prêts à débouler chez vous patatipatata. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<button
				class="bg-accents py-[16px] px-[32px] border-2 border-accents rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-accents"
				>Le refuge</button
			>
		</div>
	</div>

	<!-- BLOC 6 -->
	<div class="-rotate-2 relative -top-0 mb-30">
		<SlideElements />
	</div>

	<!-- BLOC 7 -->
	<div class="py-[12px] px-[16px] flex">
		<div
			class="div bg-primary rounded-3xl h-[800px] overflow-hidden mx-auto flex items-center justify-between relative"
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
			<div
				class="w-[1393px] py-4 px-4 flex justify-center items-center relative gap-[90px] md:py-10 md:px-10"
			>
				<div class="w-[454px] flex flex-col gap-[10px] items-start">
					<h2 class="font-sink text-[58px] text-title-green leading-[90%] uppercase">
						Faites une bonne action… sans rien lâcher sur le style.
					</h2>
					<p class="font-dm text-[16px]">
						Organisation, bricolage, manutention, gestion de stock ? Vous êtes de ceux qui aiment
						que ça roule en coulisse.
					</p>
					<p class="font-dm text-[16px]">
						Chaque article de notre boutique solidaire soutient directement le refuge. Un collier,
						un tote bag, une friandise : vous faites plaisir et vous aidez concrètement les chiens à
						trouver un nouveau départ. Une belle façon de soutenir… sans faire un don.
					</p>
					<button
						class="bg-white border-white border-2 py-[16px] px-[32px] rounded-4xl font-dm transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-white"
						>Découvrir la boutique</button
					>
				</div>
				<div>
					<img class="w-[518px]" src={Picture2} alt="" />
				</div>
			</div>
		</div>
	</div>
</main>
