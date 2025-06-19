<script>
	import Icon from '../assets/icon-header.png';
	import ModaleBurger from './modaleBurger.svelte';
	import CaretDown from 'phosphor-icons-svelte/IconCaretDownRegular.svelte';
</script>

<header
	class="flex items-center gap-4 justify-between px-10 bg-transaprent mt-[20px] z-100 md:flex-row md:items-center md:justify-center sticky"
>
	<a
		href="/"
		class="shadow-3xl w-[60px] h-[60px] bg-background-1 flex items-center justify-center rounded-4xl px-2 py-2 z-100"
	>
		<img class="rounded-4xl bg-accents overflow-hidden" src={Icon} alt="" />
	</a>
	<ul
		class="hidden shadow-3xl bg-transparent rounded-4xl py-4 items-center text-xs md:items-stretch md:py-[8px] md:px-[8px] md:flex md:bg-background-1"
	>
		<li class="flex font-dm font-bold text-[16px]">
			<a
				class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
				href="/"
				>L’association
				<CaretDown class="text-xl" /></a
			>

			<a
				class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
				href="/"
				>Adopter
				<CaretDown class="text-xl" /></a
			>

			<a
				class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
				href="/"
				>Soutenir
				<CaretDown class="text-xl" />
			</a>

			<a
				class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
				href="/"
				>Ressources
				<CaretDown class="text-xl" /></a
			>

			<a
				class="flex items-center bg-transparent rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
				href="/">Blog</a
			>
			<a
				class="flex items-center bg-transparent rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
				href="/">Signalement</a
			>
		</li>
	</ul>
	<ul>
		<li
			class="font-dm font-bold shadow-3xl flex text-xs items-center bg-transparent rounded-4xl md:text-[16px] md:bg-background-1 md:py-[8px] md:px-[8px]"
		>
			<a
				class="font-dm font-bold flex items-center bg-transparent rounded-4xl md:py-4 md:px-8"
				href="/"
			>
				<p class="hidden md:flex">Contact</p>
			</a>
			<a
				class="font-dm font-bold flex items-center bg-transparent rounded-4xl md:bg-third md:focus:bg-accents md:py-4 md:px-8"
				href="/"
			>
				<p class="hidden md:flex">Faire un don</p>
			</a>
		</li>
	</ul>
	<!-- Mobile menu button-->
	<ModaleBurger />
</header>
