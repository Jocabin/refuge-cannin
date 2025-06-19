<script>
	let { title, text, rows } = $props();
</script>

<section class="flex flex-col justify-center items-center gap-10">
	<h2 class="w-[1012px] font-sink text-[56px] uppercase text-center leading-[90%] pb-2">
		{title}
	</h2>
	<div class="flex justify-center items-center gap-[32px]">
		{#each rows as row}
			<div
				class="w-[312px] h-[312px] px-[16px] py-[16px] flex flex-col rounded-2xl justify-between text-start"
				style="background-color: {row.color}"
			>
				<h3 class="font-sink text-[40px] leading-[90%]">{row.title}</h3>
				<ul>
					<li>
						<p class="font-dm text-[16px]">{row.text}</p>
					</li>
				</ul>
			</div>
		{/each}
	</div>
</section>
