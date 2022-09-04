<script lang="ts">
	import Banner from '$lib/banner/Banner.svelte';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Banner />
<Header />

<main>
	<slot />
</main>

<style>
</style>
