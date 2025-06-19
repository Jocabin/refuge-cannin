<script>
	import Icon from '../assets/icon-header.png';
	import DropDown from './DropDown.svelte';
	import ModaleBurger from './modaleBurger.svelte';
	import CaretDown from 'phosphor-icons-svelte/IconCaretDownRegular.svelte';
	import ArrowRight from 'phosphor-icons-svelte/IconArrowRightRegular.svelte';
</script>

<header class="flex flex-col">
	<div
		class="flex items-center gap-4 justify-between px-10 bg-transaprent mt-[20px] z-100 md:flex-row md:items-center md:justify-center"
	>
		<!-- ICON HEADER -->

		<a
			href="/"
			class="shadow-3xl w-[60px] h-[60px] bg-background-1 flex items-center justify-center rounded-4xl px-2 py-2 z-100"
		>
			<img class="rounded-4xl bg-accents overflow-hidden" src={Icon} alt="" />
		</a>
		<ul
			class="hidden shadow-3xl bg-transparent rounded-4xl py-4 items-center text-xs md:items-stretch md:py-[8px] md:px-[8px] md:flex md:bg-background-1"
		>
			<!-- DROP DOWN 1  -->
			<li class="group flex font-dm font-bold text-[16px]">
				<a
					class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
					href="/"
					>L’association
					<CaretDown class="text-xl" /></a
				>

				<DropDown
					className="hidden group-hover:block absolute left-62 top-15 transition-all duration-300"
				>
					<ul
						class=" flex flex-col bg-background-1 w-[300px] divide-y divide-[rgba(1,3,68,0.05)] gap-[16px] px-4 py-4 rounded-2xl"
					>
						<li class="group/asso pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Qui sommes nous ? </a>
							<ArrowRight
								class="flex justify-end items-end opacity-0 group-hover/asso:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
						<li class="group/asso pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Notre refuge</a>
							<ArrowRight
								class="opacity-0 group-hover/asso:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
					</ul>
				</DropDown>
			</li>
			<!-- DROP DOWN 2  -->

			<li class="group flex font-dm font-bold text-[16px]">
				<a
					class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
					href="/"
					>Adopter
					<CaretDown class="text-xl" /></a
				>
				<DropDown
					className="hidden group-hover:block absolute left-100 top-15 transition-all duration-300"
				>
					<ul
						class=" flex flex-col bg-background-1 w-[300px] divide-y divide-[rgba(1,3,68,0.05)] gap-[16px] px-4 py-4 rounded-2xl"
					>
						<li class="group/adopt pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Nos chiens à l’adoption</a>
							<ArrowRight
								class="flex justify-end items-end opacity-0 group-hover/adopt:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
						<li class="group/adopt pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Comment se passe l’adoption ?</a>
							<ArrowRight
								class="opacity-0 group-hover/adopt:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
					</ul>
				</DropDown>
			</li>
			<!-- DROP DOWN 3  -->

			<li class="group flex font-dm font-bold text-[16px]">
				<a
					class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
					href="/"
					>Soutenir
					<CaretDown class="text-xl" />
				</a>
				<DropDown
					className="hidden group-hover:block absolute left-135 top-15 transition-all duration-300"
				>
					<ul
						class=" flex flex-col bg-background-1 w-[300px] divide-y divide-[rgba(1,3,68,0.05)] gap-[16px] px-4 py-4 rounded-2xl"
					>
						<li class="group/soutenir pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Devenir bénévole</a>
							<ArrowRight
								class="flex justify-end items-end opacity-0 group-hover/soutenir:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
						<li class="group/soutenir pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Devenir adhérent</a>
							<ArrowRight
								class="opacity-0 group-hover/soutenir:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
						<li class="group/soutenir pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Devenir partenaire</a>
							<ArrowRight
								class="opacity-0 group-hover/soutenir:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
						<li class="group/soutenir pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Boutique</a>
							<ArrowRight
								class="opacity-0 group-hover/soutenir:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
						<li class="group/soutenir pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Faire un don</a>
							<ArrowRight
								class="opacity-0 group-hover/soutenir:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
					</ul>
				</DropDown>
			</li>
			<!-- DROP DOWN 4  -->

			<li class="group assohover flex font-dm font-bold text-[16px]">
				<a
					class="flex items-center bg-transparent gap-2 rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
					href="/"
					>Ressources
					<CaretDown class="text-xl" /></a
				>
				<DropDown
					className="hidden group-hover:block absolute left-165 top-15 transition-all duration-300"
				>
					<ul
						class=" flex flex-col bg-background-1 w-[300px] divide-y divide-[rgba(1,3,68,0.05)] gap-[16px] px-4 py-4 rounded-2xl"
					>
						<li class="group/soutenir pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Guide pratiques</a>
							<ArrowRight
								class="flex justify-end items-end opacity-0 group-hover/soutenir:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
						<li class="group/soutenir pb-4 flex justify-between items-center">
							<a class="font-dm text-[16px] font-bold" href="/">Numéros d’urgence</a>
							<ArrowRight
								class="opacity-0 group-hover/soutenir:opacity-100 transition-opacity duration-300 w-4 h-4"
							/>
						</li>
					</ul>
				</DropDown>
			</li>
			<li class="group assohover flex font-dm font-bold text-[16px]">
				<a
					class="flex items-center bg-transparent rounded-4xl py-[16px] px-[16px] hover:bg-accents focus:bg-accents"
					href="/">Blog</a
				>
			</li>
			<li class="group assohover flex font-dm font-bold text-[16px]">
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
	</div>
	<div
		class="flex items-center gap-4 justify-between px-10 bg-transaprent mt-[20px] z-100 md:items-center md:justify-center"
	>
		<!-- DROP DOWN -->
		<div>
			<ul class="flex gap-10 h-autpo w-auto">
				<li></li>
			</ul>
		</div>
	</div>
	<!-- Mobile menu button-->
	<ModaleBurger />
</header>
