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
						<a href={`mailto:${data.address.email}`}> {data.address.email}</a>
					</div>
					<div class="contact__phone">
						<div>
							{#each phoneArr as phone}
								<a href={`tel:${phone}`}>{phone}</a><br />
							{/each}
						</div>
					</div>
					<div class="contact__address">
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
		gap: 32px;
		flex-wrap: wrap;
		width: 100%;
		font-size: 0.875rem;

		&__title {
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
			gap: 6px;
			line-height: 1.3;

			a {
				text-decoration-color: transparent;
				color: rgb(255, 0, 0);

				&:hover {
					text-decoration-color: currentColor;
				}
			}
		}
	}
</style>
