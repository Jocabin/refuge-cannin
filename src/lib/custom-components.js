import Text from "$lib/components/Text.svelte";
import TextImageBlock from "$lib/components/TextImageBlock.svelte";
import ThreeRowsGrid from "$lib/components/ThreeRowsGrid.svelte";
import Faq from "$lib/components/FAQ.svelte";
import ImagePatch from "./components/ImagePatch.svelte";
import DogsGrid from "./components/DogsGrid.svelte";
import AdoptionSeul from "./components/AdoptionSeul.svelte";
import CardSlider from "./components/CardSlider.svelte";

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
                                name: 'rows',
                                type: 'list',
                                subFields: [
                                        {
                                                name: 'text',
                                                type: 'string',
                                                defaultValue: 'lorem ipsum'
                                        },
                                        {
                                                name: 'img',
                                                type: 'file'
                                        },
                                        {
                                                name: 'imgAlt',
                                                type: 'string',
                                                defaultValue: 'Description alternative de l\'image',
                                        },
                                        {
                                                name: 'ctaText',
                                                type: 'string',
                                                defaultValue: 'Cliquez ici'
                                        },
                                        {
                                                name: 'ctaLink',
                                                type: 'string',
                                                defaultValue: '/'
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
]