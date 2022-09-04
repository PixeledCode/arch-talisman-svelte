<script>
	import Alert from '$lib/icons/Alert.svelte';
</script>

<div class="banner" aria-hidden="false" role="alert">
	<div>
		<Alert />
		<span> Website Under Maintenance </span>
	</div>
</div>

<style lang="scss">
	.banner {
		display: flex;
		padding: 12px;
		justify-content: center;
		font-weight: 500;

		background-color: #ffab00;

		> div {
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
</style>
