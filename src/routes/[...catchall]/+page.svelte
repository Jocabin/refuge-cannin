<script lang="ts">
	import { isPreviewing, Content } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/custom-components.js';
	import Headerhero from '$lib/components/headerhero.svelte';
	import SlideElements from '$lib/components/slideElements.svelte';
	import LineH from '$lib/assets/line-h.png';
	import DogHome from '$lib/assets/doghome.png';
	import DogDanse from '$lib/assets/dogdanse.png';
	import DogTrot from '$lib/assets/dogtrot.png';
	import ArrowRight from 'phosphor-icons-svelte/IconArrowRightRegular.svelte';

	let { data } = $props();
	const canShowContent = data.content || isPreviewing();
</script>

<main class=" bg-background-2 overflow-hidden">
	<div class="py-[12px] px-[16px]">
		<Headerhero />
	</div>
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

	<div class="w-screen h-screen flex-col items-center justify-center md:flex mx-auto">
		<div
			class="w-screen h-screen flex flex-col items-start md:items-center justify-start md:justify-center gap-[48px] md:flex"
		>
			<div class="flex flex-col items-start md:flex-row md:items-center">
				<h3
					class="font-sink text-[36px] text-left leading-[90%] md:text-center md:text-[58px] uppercase py-[12px] px-[16px]"
				>
					On n’est pas Tinder, <br class="hidden md:block" /> mais ici aussi on fait <br /> matcher des
					âmes.
				</h3>
				<div class="flex flex-col md:flex py-[12px] px-[16px]">
					<h6 class="font-just ml-[45px] text-[42px]">WOOF!</h6>
					<div>
						<img class="w-[50px] h-auto" src={LineH} alt="" />
					</div>
				</div>
			</div>
			<!-- Conteneur scrollable uniquement sur mobile -->
			<div class="overflow-hidden w-full whitespace-nowrap md:w-auto md:overflow-auto">
				<div
					class="-mx-4 px-4 flex overflow-x-scroll snap-x scroll-smooth flex-nowrap gap-[32px] md:mx-0 md:px-0 md:overflow-visible md:flex-wrap"
				>
					<!-- Carte 1 -->
					<div
						class="shrink-0 md:shrink md:basis-[30%] bg-primary w-[316px] h-[325px] flex flex-col rounded-2xl bg-cover bg-center py-[16px] px-[16px] justify-between snap-start"
					>
						<img class="w-[100px]" src={DogHome} alt="" />
						<div class="flex items-end justify-between">
							<h3 class="font-sink text-[40px] leading-[40px]">Adopter <br /> un chien</h3>
							<ArrowRight class="w-20 h-20 text-black text-xl" />
						</div>
					</div>

					<!-- Carte 2 -->
					<div
						class="shrink-0 md:shrink md:basis-[30%] bg-secondary w-[316px] h-[325px] flex flex-col rounded-2xl bg-cover bg-center py-[16px] px-[16px] justify-between snap-start"
					>
						<img class="w-[100px]" src={DogDanse} alt="" />
						<div class="flex items-end justify-between">
							<h3 class="font-sink text-[40px] leading-[40px]">Soutenir le <br /> refuge</h3>
							<ArrowRight class="w-20 h-20 text-black text-xl" />
						</div>
					</div>

					<!-- Carte 3 -->
					<div
						class="shrink-0 md:shrink md:basis-[30%] bg-[url('$lib/assets/content-red-home-page.png')] w-[316px] h-[325px] flex flex-col rounded-2xl bg-cover bg-center py-[16px] px-[16px] justify-between snap-start"
					>
						<img class="w-[100px]" src={DogTrot} alt="" />
						<div class="flex items-end justify-between">
							<h3 class="font-sink text-[40px] leading-[40px]">Devenir <br /> bénévole</h3>
							<ArrowRight class="w-20 h-20 text-black text-2xl" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
