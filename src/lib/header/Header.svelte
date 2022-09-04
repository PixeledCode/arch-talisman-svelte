<header class="container">
	<h1>
		<span>Arch</span>Talisman
	</h1>
	<span>India's Leading Design Office</span>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 72px;

		& > span {
			text-transform: uppercase;
			font-size: 1.5rem;
			font-weight: 300;

			@media (max-width: 500px) {
				font-size: 1rem;
			}
		}
	}

	h1 {
		text-transform: uppercase;
		font-size: 3rem;
		color: rgb(95, 85, 85);
		line-height: 1;

		span {
			color: rgb(141, 3, 3);
		}

		@media (max-width: 500px) {
			font-size: 2rem;
		}
	}
</style>
