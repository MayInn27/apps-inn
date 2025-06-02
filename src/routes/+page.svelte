<script lang="ts">
	import { onMount } from 'svelte';
	import { getDishes } from '../services/controller';
	import type { Dish } from '../models/dish';
	import Menu from '../components/Menu.svelte';
	import Basket from '../components/Basket.svelte';

	let dishes: Dish[] = [];
	let basket: Dish[] = [];
	let showBasket = false;

	onMount(async () => {
		try {
			dishes = await getDishes();
		} catch (err) {
			console.error('Failed to load dishes:', err);
		}
	});

	function addToBasket(dish: Dish) {
		const index = basket.findIndex((item) => item.name === dish.name);
		if (index !== -1) {
			// If dish is already in basket, increment quantity
			basket = basket.map((item, i) =>
				i === index ? { ...item, quantity: item.quantity + 1 } : item
			);
		} else {
			// Add new dish with quantity 1
			basket = [...basket, { ...dish, quantity: 1 }];
		}
	}

	function updateQuantity(index: number, newQty: number) {
		if (newQty < 1) return;
		basket = basket.map((item, i) => (i === index ? { ...item, quantity: newQty } : item));
	}

	function removeFromBasket(index: number) {
		basket = basket.filter((_, i) => i !== index);
	}

	function toggleBasket() {
		showBasket = !showBasket;
	}
</script>

<main class="container">
	<button class="basket-button" on:click={toggleBasket}>
		🛒 Basket ({basket.length})
	</button>
	<Basket {basket} {showBasket} {updateQuantity} {removeFromBasket} />
	<h1>Our Menu</h1>
	<Menu {dishes} {addToBasket} />
</main>

<style>
	.container {
		max-width: 1200px;
		width: calc(100vw - 40px);
		margin: 0 auto;
		padding: 0 1rem;
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
</style>
