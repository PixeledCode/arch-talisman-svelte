<script>
	import Project from '$lib/pages/home/Project.svelte';
	import Contact from '$lib/pages/home/Contact.svelte';
	import Header from '$lib/header/Header.svelte';

	export let data;
	export let { home, projects } = data;
</script>

<svelte:head>
	<title>ArchTalisman</title>
	<meta name="description" content="ArchTalisman home page" />
</svelte:head>

<Header data={home[0].sub_brand} />
<Project data={projects} />
<Contact data={home[0]} />
