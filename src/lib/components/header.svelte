<script>
	import Icon from '../assets/icon-header.png';
	import ModaleBurger from './modaleBurger.svelte';
</script>

<header class="flex justify-center items-center">
	<div
		class="flex items-center gap-4 justify-between px-10 bg-transaprent mt-[48px] md:flex-row md:items-stretch md:justify-center top-0 fixed mx-auto z-50"
	>
		<a href="/" class="shadow-2xl bg-background-1 rounded-4xl py-2 px-2">
			<img class="rounded-3xl bg-accents overflow-hidden" src={Icon} alt="" />
		</a>
		<ul
			class="hidden shadow-2xl bg-transparent rounded-4xl py-4 items-center text-xs md:text-h5 md:items-stretch md:px-4 md:py-2 md:flex md:bg-background-1"
		>
			<li class="flex font-dm font-bold">
				<a
					class="flex items-center bg-transparent px-4 rounded-4xl hover:bg-accents focus:bg-accents"
					href="/">LE REFUGE</a
				>
				<a
					class="flex items-center bg-transparent px-4 rounded-4xl hover:bg-accents focus:bg-accents"
					href="/">LES CHIENS</a
				>
				<a
					class="flex items-center bg-transparent px-4 rounded-4xl hover:bg-accents focus:bg-accents"
					href="/">BÉNÉVOLAT</a
				>
				<a
					class="flex items-center bg-transparent px-4 rounded-4xl hover:bg-accents focus:bg-accents"
					href="/">RESSOURCES</a
				>
			</li>
		</ul>
		<a
			class="font-dm font-bold shadow-2xl flex text-xs items-center bg-transparent rounded-4xl md:text-h5 md:bg-background-1 md:hover:bg-accents md:focus:bg-accents md:py-4 md:px-8"
			href="/"
		>
			<p class="hidden md:flex">NOUS SOUTENIR</p>
		</a>
		<!-- Mobile menu button-->
		<ModaleBurger />
	</div>
</header>
