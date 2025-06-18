import TextImageBlock from "./components/TextImageBlock.svelte";

export const CUSTOM_COMPONENTS = [
    {
      component: TextImageBlock,
      name: 'Text Image block',
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
      ],
    },
  ]