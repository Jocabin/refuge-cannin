<script>
	let { children, className } = $props();
</script>

<div class="group-hover:block pt-10 {className}">
	<div
		class="bg-background-1 w-auto divide-y divide-[rgba(1,3,68,0.05)] px-[16px] py-[16px] rounded-2xl group-hover:block"
	>
		{@render children()}
	</div>
</div>
