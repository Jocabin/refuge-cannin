<script lang="ts">
	let { children, onclick } = $props();
</script>

<button {onclick} class="bg-text rounded-full text-white px-10 py-6 font-semibold font-dm">
	{@render children()}
</button>
