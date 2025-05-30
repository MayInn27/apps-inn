<script>
	import { page } from '$app/stores';

	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Contact', path: '/contact' }
	];
</script>

<div class="nav-container">
	<nav>
		<ul>
			{#each links as link}
				<li>
					<a
						href={link.path}
						class:active={$page.url.pathname === link.path}
						aria-current={$page.url.pathname === link.path ? 'page' : undefined}
					>
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.nav-container {
		max-width: 1400px;
		width: calc(100vw - 40px);
		margin: 0 auto;
		padding: 0 1rem;
	}

	nav {
		background: linear-gradient(45deg, #1a2a6c, #b21f1f, #fdbb2d);
		padding: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 50px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 8rem;
	}

	li {
		margin: 0;
	}

	a {
		color: white;
		text-decoration: none;
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.3s ease;
	}

	a:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.active {
		background-color: rgba(255, 255, 255, 0.3);
		font-weight: bold;
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 0 0.5rem;
		}
		nav {
			padding: 0.5rem;
		}
		ul {
			gap: 1rem;
		}
	}
</style>
