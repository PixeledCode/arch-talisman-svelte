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
		<div class="large-1">
			<img
				src={imageSrc('large-1', 290, 500)}
				width={290}
				height={500}
				alt={data['large-1'].main_image.alt}
			/>
		</div>
		<ul>
			<li class="small-1">
				<img
					width={290}
					height={242}
					src={imageSrc('small-1', 290, 242)}
					alt={data['small-1'].main_image.alt}
				/>
			</li>
			<li class="small-2">
				<img
					width={290}
					height={242}
					src={imageSrc('small-2', 290, 242)}
					alt={data['small-2'].main_image.alt}
				/>
			</li>
			<li class="small-3">
				<img
					width={290}
					height={242}
					src={imageSrc('small-3', 290, 242)}
					alt={data['small-3'].main_image.alt}
				/>
			</li>
			<li class="small-4">
				<img
					width={290}
					height={242}
					src={imageSrc('small-4', 290, 242)}
					alt={data['small-4'].main_image.alt}
				/>
			</li>
		</ul>
		<div class="large-2">
			<img
				width={290}
				height={500}
				src={imageSrc('large-2', 290, 500)}
				alt={data['large-2'].main_image.alt}
			/>
		</div>
	{/if}
</section>

<style lang="scss">
	.projects {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		gap: 16px;

		margin-top: 64px;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 4px;
			box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			gap: 16px;

			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 16px;
		}
	}
</style>
