import Text from "$lib/components/Text.svelte";
import TextImageBlock from "$lib/components/TextImageBlock.svelte";

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
        }
]