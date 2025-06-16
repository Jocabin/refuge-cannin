import { fetchEntries } from '@builder.io/sdk-svelte';
import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';

export async function load() {
  const pages = await fetchEntries({
    model: 'chien',
    apiKey: PUBLIC_BUILDER_IO_KEY
  });
  return { pages };
}


