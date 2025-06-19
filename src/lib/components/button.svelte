<script lang="ts">
	let { children } = $props();
</script>

<button class="bg-text rounded-full text-white px-10 py-6 font-semibold font-dm">
	{@render children()}
</button>
