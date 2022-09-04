import { error } from '@sveltejs/kit';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = sanityClient({
	projectId: '18ofk6rv',
	dataset: 'production',
	apiVersion: '2022-09-01',
	useCdn: false
});

const builder = imageUrlBuilder(client);

export async function sanityFetch(id: string) {
	const data = await client.fetch(`*[_type == "${id}"]`);
	if (data) {
		return data;
	}
	throw error(404, 'Not found');
}

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
