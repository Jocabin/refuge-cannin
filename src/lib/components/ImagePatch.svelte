<script>
	let { img, imgAlt, color = '#fff' } = $props();
</script>

<div
	class="clipped-image rotate-180 flex justify-center items-center p-10 w-full h-full"
	style="background-color: {color};"
>
	<img src={img} alt={imgAlt} class="clipped-image -rotate-180 aspect-square object-cover" />
</div>

<style>
	.clipped-image {
		clip-path: polygon(
			12% 0%,
			46% 12%,
			58% 0%,
			78% 10%,
			100% 30%,
			92% 56%,
			100% 80%,
			72% 100%,
			40% 92%,
			12% 100%,
			0% 72%,
			8% 40%
		);
	}
</style>
