<script>
	import Button from '$lib/components/button.svelte';
	import ImagePatch from '$lib/components/ImagePatch.svelte';
	import ThreeRowsGrid from '$lib/components/ThreeRowsGrid.svelte';

	let { data } = $props();
	let dog = data.dog.data;
	console.log(data);
</script>

<svelte:head>
	<title>{dog.name} | Le Refuge Cannin</title>
</svelte:head>

<header class="w-full h-screen p-6 pt-12">
	<div
		class="w-full flex justify-between items-end relative h-full rounded-3xl overflow-hidden p-6"
	>
		<div class="absolute inset-0 -z-10 w-full h-full">
			<img src={dog.gallery[0].img} alt="" class=" w-full h-full object-cover" />
			<div class="w-full h-full bg-red-200 z-10"></div>
		</div>

		<h1 class="text-white text-7xl font-sink">{dog.name}</h1>
		<Button color="#FBD7FC" textColor="#010344" text="Partager la fiche" link="/" />
	</div>
</header>

<section class="flex flex-wrap justify-between max-w-[1157px] gap-8 items-center mx-auto p-32">
	<div class="max-w-[500px]">
		<ImagePatch color="#7F82DD" img={dog.gallery[0].img} imgAlt="" />
	</div>

	<div class="flex flex-col gap-12 relative">
		<div>
			{#if dog.birthdate}
				<p>
					Âge: {new Date().getFullYear() - new Date(dog.birthdate).getFullYear()} an
				</p>
			{/if}
			<p>Taille: {dog?.size ?? 'Moyenne'}</p>
			<p>Sexe: {dog.sex}</p>
			<p>Compatible enfants: {Math.random() > 0.5 ? 'Oui' : 'Non'}</p>
		</div>

		<Button text="Rencontrer {dog.name}" color="#7F82DD" textColor="#000" link="/" />

		<p class="font-just text-4xl -rotate-6">WoOF! j’adore</p>
	</div>
</section>
