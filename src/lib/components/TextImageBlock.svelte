<script>
	let { title, text, img, imgAlt, reverseOrder, ctaText, ctaLink } = $props();
</script>

<section class="flex flex-row justify-between items-center gap-4">
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

	{#if img}
		<img width="600" src={img} alt={imgAlt} class:order-1={reverseOrder} />
	{/if}
</section>
