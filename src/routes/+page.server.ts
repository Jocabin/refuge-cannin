import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
        const res = await fetch('/api/items');
        // const items = await res.json();

        // Or return static data
        return {
                title: 'Welcome to SvelteKit',
        };
}) satisfies PageServerLoad;