<script lang="ts">
	import type { Dish } from "../models/dish";
	export let dishes: Dish[] = [];
	export let addToBasket: (dish: Dish) => void;
</script>

<div class="dish-grid">
	{#each dishes as dish}
		<div class="dish-card">
			<img class="dish-image" src={dish.imageURL} alt={dish.name} />
			<div class="dish-content">
				<h2 class="dish-name">{dish.name}</h2>
				<p class="dish-price">{dish.currencySymbol}{dish.price}</p>
				<p class="dish-details">{dish.details}</p>
				<div class="button-container">
					<button
						class="add-to-basket"
						on:click={() => addToBasket(dish)}
					>
						Add to Basket
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.button-container {
		display: flex;
		justify-content: flex-end;
		padding-top: 10px;
	}
	.dish-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		padding: 2rem;
	}
	.dish-card {
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.dish-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.dish-image {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}

	.dish-content {
		padding: 1rem;
	}
	.dish-name {
		font-size: 1.25rem;
		font-weight: bold;
		margin: 0 0 0.5rem 0;
	}

	.dish-price {
		font-size: 1.1rem;
		color: #e53e3e;
		margin: 0 0 0.5rem 0;
	}
	.dish-details {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
	}
	.add-to-basket {
		align-self: flex-end;
		margin-top: auto;
		background: #e53e3e;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		transition: transform 0.3s ease;
	}
	.add-to-basket:hover {
		background: #c53030;
	}
</style>
