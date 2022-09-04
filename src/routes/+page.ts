import { sanityFetch } from '$lib/sanity';
import type { PageLoad } from './$types';

function sortHomeImages(obj: any[]) {
	const sortedObj: any = {};
	obj.forEach((imgObj) => {
		sortedObj[imgObj.position] = imgObj;
	});
	return sortedObj;
}

export const load: PageLoad = async () => {
	const home = await sanityFetch('home');
	const projects = await sanityFetch('projects');
	const sortedProjects = sortHomeImages(projects);

	return { home, projects: sortedProjects };
};

export const prerender = true;
