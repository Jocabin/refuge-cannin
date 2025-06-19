<script>
	import ChienFooter from './icons/ChienFooter.svelte';
	import Facebook from './icons/Facebook.svelte';
	import IconBackForm from './icons/IconBackForm.svelte';
	import Insta from './icons/Insta.svelte';
	import Linkedin from './icons/Linkedin.svelte';
	import ImagePatch from './ImagePatch.svelte';
	import image from '$lib/assets/image.jpg';
	import Button from '$lib/components/button.svelte';
</script>

<footer class="flex flex-col gap-6">
	<section class="flex flex-col justify-center items-center gap-6 p-20">
		<h2 class=" font-sink text-[58px] text-center">Suivez <br /> notre aventure</h2>

		<ul class="flex flex-row gap-6">
			<li class="relative w-[76px] h-[76px] flex items-center justify-center">
				<IconBackForm />
				<a href="https://www.instagram.com/refuge_canin_solidaire/" class="z-10">
					<Insta />
				</a>
			</li>
			<li class="relative w-[76px] h-[76px] flex items-center justify-center">
				<IconBackForm />
				<a
					href="https://www.facebook.com/people/Refuge-Canin-Solidaire/61550588195795/"
					class="z-10"
				>
					<Facebook />
				</a>
			</li>
			<li class="relative w-[76px] h-[76px] flex items-center justify-center">
				<IconBackForm />
				<a href="https://www.linkedin.com/company/refuge-canin-solidaire" class="z-10">
					<Linkedin />
				</a>
			</li>
		</ul>
	</section>

	<section
		class="flex flex-row justify-center items-center gap-6 w-full p-6 bg-secondary rounded-3xl"
	>
		<svg
			class="mix-blend-overlay w-full h-full absolute inset-0"
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

		<div class="w-[400px]">
			<ImagePatch img={image} imgAlt="" />
		</div>

		<div class="flex flex-col gap-6 flex-1">
			<h2 class="font-sink text-[58px]">Suivez leurs histoires</h2>
			<p>
				Recevez chaque mois des nouvelles du refuge, des portraits de chiens à l’adoption, des
				conseils et des actions à soutenir.
			</p>

			<form action="" class="flex flex-row gap-8">
				<input
					type="email"
					placeholder="Votre email"
					class="p-4 px-5 border-text border-2 rounded-full bg-white flex-1"
				/>
				<Button text="Je m'abonne" color="#7F82DD" textColor="#010344" />
			</form>

			<label class="flex items-center gap-2 text-sm underline">
				<input type="checkbox" />
				J’accepte de recevoir des e–mails de la part du refuge
			</label>
		</div>
	</section>

	<section class="bg-accents flex flex-row justify-between items-center overflow-hidden rounded-t-">
		<div class="flex flex-col justify-between items-start">
			<div
				class="p-6 uppercase text-text font-bold letter tracking-wide flex flex-row flex-wrap gap-16 mt-11"
			>
				<section>
					<h2 class="opacity-50 mb-6">plan du site</h2>
					<ul class="flex flex-col gap-2">
						<li><a href="/">Ressources</a></li>
						<li><a href="/">nous Soutenir</a></li>
						<li><a href="/">Le refuge</a></li>
						<li><a href="/">Les chiens</a></li>
						<li><a href="/">Bénévolat</a></li>
					</ul>
				</section>

				<section>
					<h2 class="opacity-50 mb-6">Légal</h2>
					<ul class="flex flex-col gap-2">
						<li><a href="/">Mentions légales</a></li>
						<li><a href="/">Conditions d’adoption</a></li>
						<li><a href="/">Politique de confidentialité </a></li>
						<li><a href="/">Cookies</a></li>
					</ul>
				</section>

				<section>
					<h2 class="opacity-50 mb-6">Outils</h2>
					<ul class="flex flex-col gap-2">
						<li><a href="/">Newsletter</a></li>
						<li><a href="/">FAQ</a></li>
						<li><a href="/">Cookies</a></li>
						<li><a href="/">Contact</a></li>
					</ul>
				</section>

				<section class="flex flex-col justify-end gap-8 w-fit">
					<h2 class="font-just text-3xl text-center">On se retrouve <br /> ici aussi ?</h2>

					<div class="flex flex-row gap-4 ml-28">
						<svg
							class="-translate-y-5"
							xmlns="http://www.w3.org/2000/svg"
							width="31"
							height="28"
							viewBox="0 0 31 28"
							fill="none"
						>
							<path
								d="M29.0871 26.698C20.0836 23.5062 -0.139443 13.5047 1.32242 1.00022"
								stroke="#010344"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>

						<ul class="flex flex-row gap-6">
							<li>
								<a href="https://www.instagram.com/refuge_canin_solidaire/">
									<Insta />
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/people/Refuge-Canin-Solidaire/61550588195795/">
									<Facebook />
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/company/refuge-canin-solidaire">
									<Linkedin />
								</a>
							</li>
						</ul>
					</div>
				</section>
			</div>

			<div class="translate-y-4 md:translate-y-14">
				<p class="font-just text-5xl md:text-[113px] leading-[1] rotate-[-4.613deg]">Refuge</p>
				<p class="font-sink text-6xl md:text-[170px] leading-[1]">Cannin solidaire</p>
			</div>
		</div>

		<ChienFooter />
	</section>
</footer>
