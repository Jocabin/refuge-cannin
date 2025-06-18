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

	.clipped-image-back {
		clip-path: polygon(
			58% 0%,
			73% 7%,
			84% 20%,
			100% 36%,
			96% 58%,
			85% 75%,
			70% 91%,
			47% 100%,
			29% 91%,
			13% 78%,
			0% 61%,
			11% 39%,
			27% 22%,
			43% 10%
		);
	}
</style>
