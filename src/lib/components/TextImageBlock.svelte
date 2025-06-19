<script>
	let {
		title,
		text,
		img,
		imgAlt,
		isImagebackground,
		isImageTexture,
		reverseOrder,
		ctaText,
		ctaLink,
		color
	} = $props();
</script>

<section
	class="isolate flex flex-row justify-between items-center gap-4"
	style="{img && isImagebackground ? `background-image: url('${img}');` : ''} background-color:"
	{color}
	class:imageBackground={img && isImagebackground}
	class:bg-blend-multiply={isImageTexture}
>
	<div class="" class:order-2={reverseOrder}>
		{#if title}
			<h2 class="font-sink text-[58px] leading-[90%]">{title}</h2>
		{/if}

		{#if text}
			<p class="font-dm text-[16px] leading-[120%]">{text}</p>
		{/if}

		{#if ctaText}
			<a class="font-dm text-[16px]" href={ctaLink}>{ctaText}</a>
		{/if}
	</div>

	{#if img && !isImagebackground}
		<img width="600" src={img} alt={imgAlt} class:order-1={reverseOrder} />
	{/if}
</section>

<style>
	.imageBackground {
		object-fit: cover;
		background-repeat: no-repeat;
		background-size: auto;
	}
</style>
