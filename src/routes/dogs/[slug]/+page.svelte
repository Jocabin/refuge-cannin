<script>
	import Button from '$lib/components/button.svelte';

	let { data } = $props();
	let dog = data.dog.data;
	console.log(dog);
</script>

<header class="w-full h-screen p-6">
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
