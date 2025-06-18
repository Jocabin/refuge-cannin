<script>
	let { img, imgAlt } = $props();
</script>

<div class="clipped-image rotate-180 bg-red-400 flex justify-center items-center w-fit p-10">
	<img width="500" src={img} alt={imgAlt} class="clipped-image -rotate-180" />
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
