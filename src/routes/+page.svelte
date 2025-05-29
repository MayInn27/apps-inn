<script lang="ts">
	import { dishes } from '$lib/store';

	let basket: any[] = [];

	function addToBasket(dish: { name: any; price?: number; details?: string; image?: string }) {
		basket = [...basket, dish];
	}

	let showBasket = false;
	function toggleBasket() {
		showBasket = !showBasket;
	}
</script>

<main class="container">
	<button class="basket-button" on:click={toggleBasket}>
		🛒 Basket ({basket.length})
	</button>

	{#if showBasket}
		<div class="basket-dialog">
			<h2>Your Basket</h2>
			{#if basket.length > 0}
				<ul>
					{#each basket as item}
						<li class="basket-item">
							<span>{item.name}</span>
							<span>{item.currencySymbol}{item.price}</span>
						</li>
					{/each}
					<h4 class="total-styling">
						Total: &nbsp;
						<b>
							{basket[0]?.currencySymbol}
							{basket.reduce((total, item) => total + parseFloat(item.price || 0), 0).toFixed(2)}</b>
					</h4>
				</ul>
			{:else}
				<p>Your basket is empty.</p>
			{/if}
		</div>
	{/if}

	<h1>Our Menu</h1>
	<div class="dish-grid">
		{#each dishes as dish}
			<div class="dish-card">
				<img class="dish-image" src={dish.image} alt={dish.name} />
				<div class="dish-content">
					<h2 class="dish-name">{dish.name}</h2>
					<p class="dish-price">{dish.currencySymbol}{dish.price}</p>
					<p class="dish-details">{dish.details}</p>
					<div class="button-container">
						<button class="add-to-basket" on:click={() => addToBasket(dish)}>
							Add to Basket
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	.button-container {
		display: flex;
		justify-content: flex-end;
		padding-top: 10px;
	}
	.container {
		max-width: 1200px;
		width: calc(100vw - 40px);
		margin: 0 auto;
		padding: 0 1rem;
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

	.basket-button {
		position: fixed;
		top: 1rem;
		right: 14rem;
		background: #e53e3e;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		transition: transform 0.3s ease;
		z-index: 1000;
	}

	.basket-button:hover {
		background: #c53030; /* Darker red on hover */
	}

	.basket-dialog {
		position: fixed;
		top: 4rem;
		right: 5rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		width: 300px; /* Fixed width */
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
