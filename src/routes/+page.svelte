<script>
	import Project from '$lib/pages/home/Project.svelte';
	import Contact from '$lib/pages/home/Contact.svelte';

	export let data;
	export let { home, projects } = data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Project data={projects} />
<Contact data={home[0]} />
