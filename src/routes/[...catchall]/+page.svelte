<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/custom-components.js';

	let { data } = $props();
	const canShowContent = data.content || isPreviewing();
</script>

<main>
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

	<div class="div bg-[#fbd7fc]">
		<svg
			class="mix-blend-overlay"
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
	</div>
</main>
