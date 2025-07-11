import Text from "$lib/components/Text.svelte";
import TextImageBlock from "$lib/components/TextImageBlock.svelte";
import ThreeRowsGrid from "$lib/components/ThreeRowsGrid.svelte";
import Faq from "$lib/components/FAQ.svelte";
import ImagePatch from "./components/ImagePatch.svelte";
import DogsGrid from "./components/DogsGrid.svelte";
import AdoptionSeul from "./components/AdoptionSeul.svelte";
import CardSlider from "./components/CardSlider.svelte";
import Adopter from "./components/adopter.svelte";
import BlocTextCtaImg from "./components/BlocTextCtaImg.svelte";
import Vedettes from "./components/Vedettes.svelte";
import Headerhero from "./components/headerhero.svelte";
import Button from "./components/button.svelte";
import SearchBar from "./components/SearchBar.svelte";
import PinkSlider from "./components/PinkSlider.svelte";
import HeaderheroOther from "./components/headerheroOther.svelte";
import BlocTextAndTitle from "./components/BlocTextAndTitle.svelte";
import BlocTextCta from "./components/BlocTextCta.svelte";
import FiveCardsColorTitle from "./components/FiveCardsColorTitle.svelte";
import ThreeCardsColorTitle from "./components/ThreeCardsColorTitle.svelte";
import ThreeDogsGrid from "./components/ThreeDogsGrid.svelte";
import LayoutDog from "./components/LayoutDog.svelte";
import HeaderHeroDog from "./components/HeaderHeroDog.svelte";
import BenevoleForm from "./components/BenevoleForm.svelte";

export const CUSTOM_COMPONENTS = [
        {
                component: TextImageBlock,
                name: 'Bloc Texte et Image',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                                defaultValue: 'Titre de section',
                        },
                        {
                                name: 'text',
                                type: 'string',
                                defaultValue: 'Texte de section',
                        },
                        {
                                name: 'img',
                                type: 'file',
                        },
                        {
                                name: 'imgAlt',
                                type: 'string',
                                defaultValue: 'Description alternative de l\'image',
                        },
                        {
                                name: 'isImagebackground',
                                type: 'boolean',
                                defaultValue: false,
                        },
                        {
                                name: 'isImageTexture',
                                type: 'boolean',
                                defaultValue: false,
                        },
                        {
                                name: 'reverseOrder',
                                type: 'boolean',
                                defaultValue: false,
                        },
                        {
                                name: 'ctaText',
                                type: 'string',
                                defaultValue: "Call to action",
                        },
                        {
                                name: 'ctaLink',
                                type: 'string',
                                defaultValue: "/",
                        },
                        {
                                name: 'color',
                                type: 'color',
                        },
                ],
        },
        {
                component: Text,
                name: 'Texte Amélioré',
                inputs: [
                        {
                                name: 'type',
                                type: 'enum',
                                enum: ['h1', 'h2', 'h3', 'p'],
                                defaultValue: 'p'
                        },
                        {
                                name: 'text',
                                type: 'string',
                                defaultValue: 'Lorem ipsum',
                        },
                ]
        },
        {
                component: ThreeRowsGrid,
                name: 'Grille 3 colonnes',
                inputs: [
                        {
                                name: 'title',
                                type: 'string'
                        },
                        {
                                name: 'title2',
                                type: 'string'
                        },
                        {
                                name: 'text2',
                                type: 'string'
                        },
                        {
                                name: 'color1',
                                type: 'color'
                        },
                        {
                                name: 'ctaText',
                                type: 'string'
                        },
                        {
                                name: 'ctaLink',
                                type: 'string'
                        },
                        {
                                name: 'rows',
                                type: 'list',
                                subFields: [

                                        {
                                                name: 'title',
                                                type: 'string',
                                                defaultValue: 'Titre',
                                        },
                                        {
                                                name: 'text',
                                                type: 'string',
                                                defaultValue: 'lorem ipsum'
                                        },
                                        {
                                                name: 'color',
                                                type: 'color'
                                        },
                                ]
                        }
                ]
        },
        {
                component: Faq,
                name: 'FAQ',
                inputs: [
                        {
                                name: 'questions',
                                type: 'list',
                                subFields: [
                                        {
                                                name: 'title',
                                                type: 'string',
                                                defaultValue: 'titre question'
                                        },
                                        {
                                                name: 'text',
                                                type: 'string',
                                                defaultValue: 'texte question'
                                        }
                                ]
                        }
                ]
        },
        {
                component: ImagePatch,
                name: 'Image PatchWork',
                inputs: [
                        {
                                name: 'img',
                                type: 'file',
                        },
                        {
                                name: 'imgAlt',
                                type: 'string',
                                defaultValue: 'Description alternative de l\'image',
                        },
                        {
                                name: 'color',
                                type: 'color',
                                defaultValue: '#fff'
                        }
                ]
        },
        {
                component: DogsGrid,
                name: 'Grille recherche Chiens',
                inputs: [
                ]
        },
        {
                component: AdoptionSeul,
                name: 'Adoption seule bloc',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'text',
                                type: 'string',
                        },
                        {
                                name: 'ctaText',
                                type: 'string',
                        },
                        {
                                name: 'ctaLink',
                                type: 'string',
                        },
                ]
        },
        {
                component: CardSlider,
                name: 'Slider de cartes',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'cards',
                                type: 'list',
                                subFields: [
                                        {
                                                name: 'link',
                                                type: 'string',
                                                defaultValue: '/'
                                        },
                                        {
                                                name: 'title',
                                                type: 'string',
                                                defaultValue: 'title'
                                        },
                                        {
                                                name: 'img',
                                                type: 'file',
                                        },
                                        {
                                                name: 'color',
                                                type: 'color',
                                        }
                                ]
                        },
                ]
        },
        {
                component: Vedettes,
                name: 'Vedettes',
        },
        {
                component: PinkSlider,
                name: 'Slider de text automatique',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'img',
                                type: 'file',
                        },
                ]
        },
        {
                component: Headerhero,
                name: 'Hero Banner',
                canHaveChildren: true,
                inputs: [
                        {
                                name: 'title',
                                type: 'string'
                        },
                        {
                                name: 'text',
                                type: 'string'
                        },
                        {
                                name: 'color',
                                type: 'color'
                        },
                        {
                                name: 'img',
                                type: 'file'
                        },
                ]
        },
        {
                component: Button,
                name: 'Button',
                inputs: [
                        {
                                name: 'text',
                                type: 'string'
                        },
                        {
                                name: 'color',
                                type: 'color'
                        },
                        {
                                name: 'textColor',
                                type: 'color'
                        },
                        {
                                name: 'link',
                                type: 'string'
                        },
                ]
        },
        {
                component: SearchBar,
                name: 'Module de recherche',
        },
        {
                component: Adopter,
                name: 'Adopter un chien',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'text',
                                type: 'string',
                        },
                        {
                                name: 'color',
                                type: 'color',
                        },
                        {
                                name: 'colorTitle',
                                type: 'color',
                        },
                        {
                                name: 'img',
                                type: 'file',
                        },
                        {
                                name: 'ctaText',
                                type: 'string',
                        },
                        {
                                name: 'ctaLink',
                                type: 'string',
                        },
                        {
                                name: 'woff1',
                                type: 'string',
                        },
                        {
                                name: 'woff2',
                                type: 'string',
                        },
                        {
                                name: 'textList',
                                type: 'string',
                        },
                ]
        },
        {
                component: BlocTextCtaImg,
                name: 'Bloc avec image, texte et bouton',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'text',
                                type: 'string',
                        },
                        {
                                name: 'color',
                                type: 'color',
                        },
                        {
                                name: 'colorTitle',
                                type: 'color',
                        },
                        {
                                name: 'img',
                                type: 'file',
                        },
                        {
                                name: 'ctaText',
                                type: 'string',
                        },
                        {
                                name: 'ctaLink',
                                type: 'string',
                        },
                ]
        },
        {
                component: HeaderheroOther,
                name: 'Header hero autre',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'text',
                                type: 'string',
                        },
                        {
                                name: 'color',
                                type: 'color',
                        },
                        {
                                name: 'colorTitle',
                                type: 'color',
                        },
                        {
                                name: 'img',
                                type: 'file',
                        },
                        {
                                name: 'ctaText',
                                type: 'string',
                        },
                        {
                                name: 'ctaLink',
                                type: 'string',
                        },
                        {
                                name: 'ctaColor',
                                type: 'color',
                        },
                ]
        },
        {
                component: BlocTextAndTitle,
                name: 'Titre et texte',
                inputs: [
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'title2',
                                type: 'string',
                        },
                        {
                                name: 'text',
                                type: 'string',
                        },
                        {
                                name: 'color',
                                type: 'color',
                        },
                ]
        },
        {
                component: BlocTextCta,
                name: 'Bloc avec texte et bouton',
                inputs: [
                        {
                                name: 'sousTitle',
                                type: 'string',
                        },
                        {
                                name: 'title',
                                type: 'string',
                        },
                        {
                                name: 'text',
                                type: 'string',
                        },
                        {
                                name: 'color',
                                type: 'color',
                        },
                        {
                                name: 'ctaText',
                                type: 'string',
                        },
                        {
                                name: 'ctaLink',
                                type: 'string',
                        },
                ]
        },
        {
                component: FiveCardsColorTitle,
                name: 'Cinqs blocs avec textes et images',
                inputs: [
                        {
                                name: 'cards',
                                type: 'list',
                                subFields: [
                                        {
                                                name: 'title',
                                                type: 'string',
                                                defaultValue: 'title'
                                        },
                                        {
                                                name: 'text',
                                                type: 'string',
                                                defaultValue: 'title'
                                        },

                                        {
                                                name: 'img',
                                                type: 'file',
                                        },
                                        {
                                                name: 'colorTitle',
                                                type: 'color',
                                        },
                                        {
                                                name: 'color',
                                                type: 'color',
                                        }
                                ]
                        },
                ]
        },
        {
                component: ThreeCardsColorTitle,
                name: 'Cinqs blocs avec textes et images',
                inputs: [
                        {
                                name: 'cards',
                                type: 'list',
                                subFields: [
                                        {
                                                name: 'title',
                                                type: 'string',
                                                defaultValue: 'title'
                                        },
                                        {
                                                name: 'text',
                                                type: 'string',
                                                defaultValue: 'title'
                                        },

                                        {
                                                name: 'img',
                                                type: 'file',
                                        },
                                        {
                                                name: 'colorTitle',
                                                type: 'color',
                                        },
                                        {
                                                name: 'color',
                                                type: 'color',
                                        }
                                ]
                        },
                ]
        },
        {
                component: ThreeDogsGrid,
                name: 'Grille 3 chiens colonnes',
                inputs: [
                        {
                                name: 'title',
                                type: 'string'
                        },
                        {
                                name: 'title2',
                                type: 'string'
                        },
                        {
                                name: 'text2',
                                type: 'string'
                        },
                        {
                                name: 'ctaColor',
                                type: 'color'
                        },
                        {
                                name: 'ctaText',
                                type: 'string'
                        },
                        {
                                name: 'ctaLink',
                                type: 'string'
                        },
                        {
                                name: 'rows',
                                type: 'list',
                                subFields: [

                                        {
                                                name: 'title',
                                                type: 'string',
                                                defaultValue: 'Titre',
                                        },
                                        {
                                                name: 'text',
                                                type: 'string',
                                                defaultValue: 'lorem ipsum'
                                        },
                                        {
                                                name: 'img',
                                                type: 'file'
                                        },
                                ]
                        }
                ]
        },
        {
                component: LayoutDog,
                name: 'fiche chien avec une image et les informations',
                inputs: [
                        {
                                name: 'img',
                                type: 'file'
                        },
                        {
                                name: 'years',
                                type: 'string'
                        },
                        {
                                name: 'height',
                                type: 'string'
                        },
                        {
                                name: 'sexe',
                                type: 'string'
                        },
                        {
                                name: 'energyLevel',
                                type: 'string'
                        },
                        {
                                name: 'childrenCompatibility',
                                type: 'string'
                        },
                        {
                                name: 'ctaColor',
                                type: 'color'
                        },
                        {
                                name: 'ctaText',
                                type: 'string'
                        },
                        {
                                name: 'ctaLink',
                                type: 'string'
                        },

                ]
        },
        {
                component: HeaderHeroDog,
                name: 'Header hero chien',
                inputs: [
                        {
                                name: 'img',
                                type: 'file'
                        },
                        {
                                name: 'title',
                                type: 'string'
                        },
                        {
                                name: 'ctaColor',
                                type: 'color'
                        },
                        {
                                name: 'ctaText',
                                type: 'string'
                        },
                        {
                                name: 'ctaLink',
                                type: 'string'
                        },

                ]
        },
        {
                component: BenevoleForm,
                name: 'Formulaire Bénévole',
                inputs: [
                        {
                                name: 'text',
                                type: 'string'
                        },
                        {
                                name: 'color',
                                type: 'color'
                        },

                ]
        },
]