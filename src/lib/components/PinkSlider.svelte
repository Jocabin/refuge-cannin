<script>
	import PawPrint from 'phosphor-icons-svelte/IconPawPrintFill.svelte';
	import { onMount } from 'svelte';
	let container;
	let content;
	const { title, img } = $props();

	onMount(() => {
		const totalWidth = content.offsetWidth;
		let current = 0;

		const step = () => {
			current -= 1;

			// Une boucle plus fluide : recommence quand le bloc est totalement passé
			if (Math.abs(current) >= totalWidth / 2) current = 0;

			content.style.transform = `translateX(${current}px)`;
			requestAnimationFrame(step);
		};

		step();
	});
</script>

<div
	class="flex h-[8vh] gap-6 animate-scroll-left items-center justify-center whitespace-nowrap bg-secondary overflow-hidden -rotate-3"
	bind:this={container}
>
	<div class="flex gap-4 scroll-content justify-center items-center" bind:this={content}>
		<!-- Contenu dupliqué pour boucle fluide -->
		<div
			class="flex items-center justify-center h-[8vh] gap-6 whitespace-nowrap bg-secondary overflow-hidden"
			bind:this={container}
		>
			<div class="flex gap-4 scroll-content" bind:this={content}>
				{#each Array(3) as _}
					{#each Array(8) as __}
						<h3 class="font-sink text-4xl uppercase mb-[-3px]">{title}</h3>
						<img src={img} class="text-black text-4xl shrink-0" />
					{/each}
				{/each}
			</div>
		</div>
	</div>
</div>
