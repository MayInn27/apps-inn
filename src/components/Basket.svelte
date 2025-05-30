<script lang="ts">
	import type { Dish } from '../models/dish';

	export let basket: Dish[] = [];
	export let showBasket = false;
	export let updateQuantity: (index: number, newQty: number) => void;
	export let removeFromBasket: (index: number) => void;
</script>

{#if showBasket}
	<div class="basket-dialog">
		<h2>Your Basket</h2>
		{#if basket.length > 0}
			<ul>
				{#each basket as item, idx}
					<li class="basket-item">
						<span>{item.name}</span>
						<select
							bind:value={item.quantity}
							on:change={(e) => {
								const target = e.target as HTMLSelectElement | null;
								if (target) updateQuantity(idx, +target.value);
							}}
						>
							{#each Array(10)
								.fill(0)
								.map((_, i) => i + 1) as qty}
								<option value={qty}>{qty}</option>
							{/each}
						</select>
						<span>
							{item.currencySymbol}
							{(
								(typeof item.price === 'number' ? item.price : parseFloat(item.price || '0')) *
								(item.quantity || 1)
							).toFixed(2)}
						</span>
						<button aria-label="Remove item from basket" on:click={() => removeFromBasket(idx)}>
							❌
						</button>
					</li>
				{/each}
				<h4 class="total-styling">
					Total: &nbsp;
					<b>
						{basket[0]?.currencySymbol}
						{basket
							.reduce(
								(total, item) =>
									total +
									(typeof item.price === 'number' ? item.price : parseFloat(item.price || '0')) *
										(item.quantity || 1),
								0
							)
							.toFixed(2)}
					</b>
				</h4>
			</ul>
		{:else}
			<p>Your basket is empty.</p>
		{/if}
	</div>
{/if}

<style>
	.basket-dialog {
		position: fixed;
		top: 4rem;
		right: 5rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		width: 400px; /* Fixed width */
		z-index: 999; /* Ensure it's above other content */
	}

	.basket-dialog h2 {
		margin-top: 2rem;
	}

	.basket-dialog ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		background: #f9f9f9;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.basket-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.total-styling {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
	}

	.basket-dialog li:last-child {
		border-bottom: none;
	}

	.basket-dialog p {
		margin: 0;
		text-align: center;
		color: #666;
	}
</style>
