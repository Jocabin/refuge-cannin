import { PUBLIC_BUILDER_IO_KEY } from '$env/static/public';
import { fetchOneEntry } from '@builder.io/sdk-svelte';
import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
        const dog = await fetchOneEntry({
                model: 'chien',
                apiKey: PUBLIC_BUILDER_IO_KEY,
                options: {
                        query: {
                                'data.name': { $regex: `^${params.slug}$`, $options: 'i' }
                        }
                }
        });

        if (!dog) {
            throw error(404, 'Not Found');
        }
        return { dog };      
};