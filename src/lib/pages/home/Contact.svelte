<script lang="ts">
	export let data: any;
</script>

<section class="container">
	<h2 class="sr-only">Contact Brand</h2>

	{#if data}
		<div class="contact">
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
			<address class="contact__address">
				<span>Contact</span>
				<div>
					<span>email:</span>
					{data.address.email}
				</div>
				<div>
					<span>phone:</span>
					{data.address.phone}
				</div>
				<div>
					<span>address:</span>
					{data.address.address}
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

		&__members {
			display: flex;
			flex-direction: column;
			gap: 16px;

			> div {
				display: flex;
				flex-direction: column;
				font-weight: 300;
			}

			.name {
				font-weight: 500;
			}
		}
	}

	address {
		> span {
			font-weight: 500;
			font-size: 1.5rem;
		}

		> div {
			font-weight: 300;

			span {
				font-weight: 500;
			}
		}
	}
</style>
