<script lang="ts">
	export let data: any;

	let phoneArr = data.address.phone.split(',');
	let addressArr = data.address.address.split(',');
</script>

<section class="container">
	<h2 class="sr-only">Contact Brand</h2>

	{#if data}
		<div class="contact">
			<div>
				<span class="contact__title">Leadership</span>
				<div class="contact__members">
					{#each data.members as member}
						<div>
							<span class="name">
								{member.name}
							</span>
							<span>
								{member.info}
							</span>
							<span>
								{member.position}
							</span>
							<span>
								{member.status}
							</span>
						</div>
					{/each}
				</div>
			</div>
			<address>
				<span class="contact__title">Contact</span>
				<div class="contact__address">
					<div>
						<span>email:</span>
						<a href={`mailto:${data.address.email}`}> {data.address.email}</a>
					</div>
					<div class="contact__phone">
						<span>phone:</span>
						<div>
							{#each phoneArr as phone}
								<a href={`tel:${phone}`}>{phone}</a><br />
							{/each}
						</div>
					</div>
					<div class="contact__address">
						<span>address:</span>
						<div>
							{#each addressArr as address}
								{address}<br />
							{/each}
						</div>
					</div>
				</div>
			</address>
		</div>
	{/if}
</section>

<style lang="scss">
	.contact {
		margin-block: 64px;
		display: flex;
		justify-content: space-between;
		gap: 24px;
		flex-wrap: wrap;
		width: 100%;

		&__title {
			font-size: 1rem;
			line-height: 1.3;
		}
		&__members {
			display: flex;
			flex-direction: column;
			gap: 8px;
			margin-top: 8px;

			> div {
				display: flex;
				flex-direction: column;
				font-weight: 300;

				line-height: 1.3;
			}

			.name {
				font-weight: 500;
				font-size: 1.15rem;
				display: block;
			}
		}

		&__address {
			margin-top: 8px;
			font-weight: 300;
			display: flex;
			flex-direction: column;
			gap: 2px;
			line-height: 1.3;
			span {
				font-weight: 400;
				min-width: 65px;
			}

			a {
				text-decoration-color: transparent;
				color: rgb(255, 0, 0);

				&:hover {
					text-decoration-color: currentColor;
				}
			}
			> div {
				display: flex;
				flex-direction: row;
				gap: 4px;
			}
		}
	}
</style>
