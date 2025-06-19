<script>
	import Picture3 from '$lib/assets/picture-3.png';
	import Button from './Button.svelte';
</script>

<div class="flex w-screen py-[12px] px-[16px]">
	<div
		class="bg-secondary rounded-3xl h-[456px] overflow-hidden mx-auto flex items-end relative w-full"
	>
		<!-- SVG de fond -->
		<svg
			class="absolute inset-0 w-full h-full mix-blend-overlay pointer-events-none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1392 453"
			fill="none"
			preserveAspectRatio="none"
		>
			<g filter="url(#filter0_n_438_3833)">
				<rect
					x="-2"
					width="1396"
					height="453"
					rx="24"
					fill="url(#paint0_radial_438_3833)"
					fill-opacity="0.6"
				/>
			</g>
			<defs>
				<filter id="filter0_n_438_3833" />
				<radialGradient id="paint0_radial_438_3833" />
			</defs>
		</svg>

		<!-- Contenu -->
		<div class="relative z-10 w-full h-[456px] flex items-center justify-between px-[32px]">
			<div class="w-[30%]">
				<img class="w-full max-w-[800px]" src={Picture3} alt="Visuel newsletter" />
			</div>
			<div class="w-[60%] space-y-4">
				<h2 class="font-sink text-[35px] leading-[90%] uppercase md:text-[48px] text-title-pink">
					Suivez leurs histoires
				</h2>
				<p class="text-lg text-black">
					Recevez chaque mois des nouvelles du refuge, des portraits de chiens à l’adoption, des
					conseils et des actions à soutenir.
				</p>
				<div class="flex gap-4 items-center">
					<input
						type="email"
						placeholder="Votre adresse e–mail"
						class="rounded-full px-4 py-2 w-[600px] border bg-background-1 border-black"
					/>
					<Button>Je m’abonne</Button>
				</div>
				<label class="flex items-center gap-2 text-sm underline">
					<input type="checkbox" />
					J’accepte de recevoir des e–mails de la part du refuge
				</label>
			</div>
		</div>
	</div>
</div>
