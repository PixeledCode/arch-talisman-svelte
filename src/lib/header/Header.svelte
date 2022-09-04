<script>
	export /**
	 * @type {string}
	 */
	let data;
</script>

<header class="container">
	<h1>
		<span>Arch</span>Talisman
	</h1>
	<span>{data}</span>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 72px;

		& > span {
			font-size: 1.6rem;
			font-weight: 300;

			@media (max-width: 500px) {
				font-size: 1.15rem;
			}

			@media (max-width: 360px) {
				font-size: 0.8rem;
			}
		}
	}

	h1 {
		text-transform: uppercase;
		font-size: 4rem;
		color: rgb(164, 164, 164);
		line-height: 1;

		span {
			color: rgb(255, 0, 0);
		}

		@media (max-width: 500px) {
			font-size: 3rem;
		}

		@media (max-width: 360px) {
			font-size: 2rem;
		}
	}
</style>
