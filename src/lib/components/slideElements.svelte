<script>
	import PawPrint from 'phosphor-icons-svelte/IconPawPrintFill.svelte';
	import { onMount } from 'svelte';
	let container;
	let content;

	onMount(() => {
		const animate = () => {
			const totalWidth = content.offsetWidth;
			let current = 0;

			const step = () => {
				current -= 1;
				if (Math.abs(current) >= totalWidth / 2) current = 0;

				content.style.transform = `translateX(${current}px)`;
				requestAnimationFrame(step);
			};

			step();
		};

		animate();
	});
</script>

<div
	class="flex h-[8vh] gap-6 animate-scroll-left whitespace-nowrap bg-secondary overflow-hidden"
	bind:this={container}
>
	<div class="flex gap-4 scroll-content justify-center items-center" bind:this={content}>
		<!-- Contenu dupliqué pour boucle fluide -->
		{#each Array(2) as _}
			<h3 class="font-sink text-4xl uppercase mb-[-3px]">LE REFUGE LE PLUS WOOF de gironde</h3>
			<PawPrint class="text-black text-4xl inline-block shrink-0" />
			<h3 class="font-sink text-4xl uppercase mb-[-3px]">LE REFUGE LE PLUS WOOF de gironde</h3>
			<PawPrint class="text-black text-4xl inline-block shrink-0" />
			<h3 class="font-sink text-4xl uppercase mb-[-3px]">LE REFUGE LE PLUS WOOF de gironde</h3>
			<PawPrint class="text-black text-4xl inline-block shrink-0" />
			<h3 class="font-sink text-4xl uppercase mb-[-3px]">LE REFUGE LE PLUS WOOF de gironde</h3>
			<PawPrint class="text-black text-4xl inline-block shrink-0" />
			<h3 class="font-sink text-4xl uppercase mb-[-3px]">LE REFUGE LE PLUS WOOF de gironde</h3>
			<PawPrint class="text-black text-4xl inline-block shrink-0" />
			<h3 class="font-sink text-4xl uppercase mb-[-3px]">LE REFUGE LE PLUS WOOF de gironde</h3>
			<PawPrint class="text-black text-4xl inline-block shrink-0" />
		{/each}
	</div>
</div>
