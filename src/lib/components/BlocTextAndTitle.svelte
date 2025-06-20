<script>
	let { text, title, title2 } = $props();
</script>

<div class="flex flex-col justify-center items-center px-10">
	<div class="w-auto md:w-[1080px] flex flex-col items-center">
		<h2 class="font-sink text-[46px] md:text-[56px] uppercase text-center leading-[90%]">
			{title}
		</h2>
		<h2 class="font-sink text-[46px] md:text-[56px] uppercase text-center leading-[90%] pb-[16px]">
			{title2}
		</h2>
		<p class="w-[450px] md:w-[800px] font-dm text-[16px] text-center">{text}</p>
	</div>
</div>
