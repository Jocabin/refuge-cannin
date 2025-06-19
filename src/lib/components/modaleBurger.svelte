<script>
	import PawPrint from 'phosphor-icons-svelte/IconPawPrintRegular.svelte';
	import Bone from 'phosphor-icons-svelte/IconBoneRegular.svelte';
	import Line from '../assets/line-burger.png';
	import Instagram from 'phosphor-icons-svelte/IconInstagramLogoRegular.svelte';
	import Facebook from 'phosphor-icons-svelte/IconFacebookLogoRegular.svelte';
	import Linkedin from 'phosphor-icons-svelte/IconLinkedinLogoRegular.svelte';

	let isOpen = false;
</script>

<button class="z-50 top-4 right-4 flex-col md:hidden text-xl" on:click={() => (isOpen = !isOpen)}>
	{#if isOpen}
		<a
			class="absolute font-dm font-bold shadow-2xl flex text-xs items-center gap-4 bg-background-1 py-4 px-8 rounded-4xl"
			href="/"
		>
			<PawPrint class="w-15 h-15 text-black text-xl" />
			<p class="text-h5">MENU</p>
		</a>
	{:else}
		<a class="font-dm flex text-xs items-center gap-4 py-4 px-8 rounded-4xl z-50" href="/">
			<Bone class="w-15 h-15 text-black text-xl" />
			<p class="text-h5">MENU</p>
		</a>
	{/if}
</button>

{#if isOpen}
	<div
		class="fixed overflow-hidden w-full h-full inset-0 bg-accents text-text flex flex-col items-center justify-center gap-8 pt-20"
	>
		<div
			class="relative text-6xl font-sink uppercase flex font-normal flex-col gap-8 justify-center"
		>
			<ul>
				<li class="flex flex-col gap-8">
					<a href="/" class="pb-4 border-b-2 border-opacity-20">Ressources</a>
					<a href="/projets" class="pb-4 border-b-2 border-opacity-20">Nous soutenir</a>
					<a href="/cv" class="pb-4 border-b-2 border-opacity-20 font-bold">Le refuge</a>
					<a href="/contact" class="pb-4 border-b-2 border-opacity-20">Les chiens</a>
					<a href="/contact" class="hover:underline">Bénévolat</a>
				</li>
			</ul>
		</div>
		<p class="text-center text-4xl font-just">On se retrouve <br />ici aussi ?</p>
		<img src={Line} alt="" />
		<div class="flex items-end justify-end pl-[10rem]">
			<ul>
				<li class="text-5xl">
					<a href="/">
						<Instagram />
					</a>
					<a href="/">
						<Facebook />
					</a>
					<a href="/">
						<Linkedin />
					</a>
				</li>
			</ul>
		</div>
	</div>
{/if}
