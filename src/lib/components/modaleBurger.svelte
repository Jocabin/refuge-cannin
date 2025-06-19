<script>
	import X from 'phosphor-icons-svelte/IconXRegular.svelte';
	import List from 'phosphor-icons-svelte/IconListRegular.svelte';
	import CaretDown from 'phosphor-icons-svelte/IconCaretDownRegular.svelte';

	let isOpen = false;
</script>

<button
	class="fixed top-4 right-4 z-[999] flex flex-col md:hidden text-xl shadow-3xl rounded-3xl"
	on:click={() => (isOpen = !isOpen)}
>
	{#if isOpen}
		<a
			class="font-dm font-bold flex text-xs items-center gap-4 bg-background-1 py-4 px-8 rounded-4xl"
			href="/"
		>
			<X class="w-15 h-15 text-black text-xl" />
			<p class="text-h5">Fermer</p>
		</a>
	{:else}
		<a
			class="font-dm flex text-xs items-center gap-4 py-4 px-8 bg-background-1 rounded-4xl"
			href="/"
		>
			<List class="w-15 h-15 text-black text-xl" />
			<p class="text-h5">Menu</p>
		</a>
	{/if}
</button>

{#if isOpen}
	<div
		class="fixed overflow-hidden w-full h-full inset-0 bg-accents text-text flex flex-col items-center justify-end gap-8 pt-20 pb-10"
	>
		<div
			class="relative text-6xl font-sink uppercase flex font-normal flex-col gap-2 justify-center"
		>
			<ul>
				<li class="flex flex-col gap-2">
					<a href="/" class="pb-4 border-b-2 border-opacity-20"
						>L’association
						<CaretDown class="text-xl" /></a
					>
					<a href="/projets" class="pb-4 border-b-2 border-opacity-20"
						>adopter
						<CaretDown class="text-xl" /></a
					>
					<a href="/cv" class="pb-4 border-b-2 border-opacity-20 font-bold"
						>soutenir
						<CaretDown class="text-xl" /></a
					>
					<a href="/contact" class="pb-4 border-b-2 border-opacity-20"
						>ressources
						<CaretDown class="text-xl" /></a
					>
					<a href="/contact" class="pb-4 border-b-2 border-opacity-20">blog </a>
					<a href="/contact" class="">Signalement </a>
				</li>
			</ul>
			<div class="w-[392px] font-dm font-bold shadow-2xl px-2 py-2 bg-background-1 rounded-4xl">
				<ul class="flex justify-between gap-4 items-center w-full">
					<li class="flex w-[50vw] justify-center hover:bg-accents rounded-4xl">
						<a class="font-dm font-bold px-[35px] py-[16px]" href="/">
							<p class="text-[16px]">Contact</p>
						</a>
					</li>
					<li class="flex w-[50vw] justify-center bg-third rounded-4xl">
						<a class="font-dm font-bold px-[35px] py-[16px]" href="/">
							<p class="text-[16px]">Faire un don</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
{/if}
