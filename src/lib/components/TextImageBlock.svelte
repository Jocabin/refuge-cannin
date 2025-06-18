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
		ctaLink
	} = $props();
</script>

<section
	class="isolate flex flex-row justify-between items-center gap-4"
	style={img && isImagebackground ? `background-image: url('${img}');` : ''}
	class:imageBackground={img && isImagebackground}
	class:mix-blend-multiply={isImageTexture}
>
	<div class="" class:order-2={reverseOrder}>
		{#if title}
			<h2>{title}</h2>
		{/if}

		{#if text}
			<p>{text}</p>
		{/if}

		{#if ctaText}
			<a href={ctaLink}>{ctaText}</a>
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
