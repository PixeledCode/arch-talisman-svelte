<script>
	import { urlFor } from '$lib/sanity';

	export /**
	 * @type {any}
	 */
	let data;

	/**
	 * @param {string} pos
	 * @param {number} width
	 * @param {number} height
	 */
	function imageSrc(pos, width, height) {
		return urlFor(data[pos].main_image).size(width, height).auto('format').quality(100).url();
	}
</script>

<section class="container projects">
	<h2 class="sr-only">Projects</h2>
	{#if data && Object.values(data).length}
		<div class="projects__left">
			<div class="large-1">
				<img
					src={imageSrc('large-1', 290, 500)}
					width={290}
					height={500}
					alt={data['large-1'].main_image.alt}
				/>
			</div>
			<div class="small-1">
				<img
					width={290}
					height={242}
					src={imageSrc('small-1', 290, 242)}
					alt={data['small-1'].main_image.alt}
				/>
			</div>
			<div class="small-3">
				<img
					width={290}
					height={242}
					src={imageSrc('small-3', 290, 242)}
					alt={data['small-3'].main_image.alt}
				/>
			</div>
		</div>
		<div class="projects__right">
			<div class="small-2">
				<img
					width={290}
					height={242}
					src={imageSrc('small-2', 290, 242)}
					alt={data['small-2'].main_image.alt}
				/>
			</div>
			<div class="small-4">
				<img
					width={290}
					height={242}
					src={imageSrc('small-4', 290, 242)}
					alt={data['small-4'].main_image.alt}
				/>
			</div>
			<div class="large-2">
				<img
					src={imageSrc('large-2', 290, 500)}
					width={290}
					height={500}
					alt={data['large-2'].main_image.alt}
				/>
			</div>
		</div>
	{/if}
</section>

<style lang="scss">
	.projects {
		display: flex;
		gap: 3px;
		margin-top: 64px;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 2px;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		}

		> div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 3px;
		}

		.large-1,
		.large-2 {
			grid-row: 1/3;
		}

		.large-2 {
			grid-column: 2/3;
		}

		@media (max-width: 540px) {
			flex-wrap: wrap;
		}
	}
</style>
