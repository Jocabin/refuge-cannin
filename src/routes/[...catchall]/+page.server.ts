import { fetchEntries, fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';

export async function load(event) {
const content = await fetchOneEntry({
        model: 'page',
        apiKey: PUBLIC_BUILDER_IO_KEY,
        options: {
                ...getBuilderSearchParams(event.url.searchParams),
                cachebust: true,
        },
        userAttributes: {
                urlPath: event.url.pathname || '/',
        },
});

  const dogs = fetchEntries({
        model: 'chien',
        apiKey: PUBLIC_BUILDER_IO_KEY
  })
  
  return { content, dogs };
}