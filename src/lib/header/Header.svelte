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

		h1 {
			text-transform: uppercase;
			font-size: 4rem;
			color: rgb(164, 164, 164);
			line-height: 1;

			span {
				color: rgb(255, 0, 0);
			}
		}

		& > span {
			font-size: 1.64rem;
			font-weight: 300;
		}

		@media (max-width: 540px) {
			h1 {
				font-size: 3rem;
			}
			& > span {
				font-size: 1.23rem;
			}
		}

		@media (max-width: 420px) {
			h1 {
				font-size: 2.3rem;
			}
			& > span {
				font-size: 0.95rem;
			}
		}
	}
</style>
