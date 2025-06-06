<script>
  import { page } from "$app/stores";
  let menuOpen = false;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
</script>

<nav
  class="bg-gradient-to-r from-indigo-900 via-red-700 to-yellow-400 p-4 rounded-full shadow-lg my-4 mx-auto max-w-6xl px-4 sm:px-6 md:px-8"
>
  <button
    class="md:hidden flex items-center px-3 py-2 text-white relative z-50"
    on:click={() => (menuOpen = !menuOpen)}
    aria-label="Toggle navigation"
  >
    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d={menuOpen
          ? "M6 18L18 6M6 6l12 12" // X icon
          : "M4 6h16M4 12h16M4 18h16"}
      />
    </svg>
  </button>

  <!-- Desktop nav -->
  <ul class="hidden md:flex flex-row justify-center gap-8 py-3">
    {#each links as link}
      <li>
        <a
          href={link.path}
          class="text-white text-lg px-4 py-2 rounded transition-colors duration-200 hover:bg-white/20 {$page
            .url.pathname === link.path
            ? 'bg-white/30 font-bold'
            : ''}"
          aria-current={$page.url.pathname === link.path ? "page" : undefined}
        >
          {link.name}
        </a>
      </li>
    {/each}
  </ul>

  <!-- Mobile dropdown nav -->
  {#if menuOpen}
    <ul
      class="flex flex-col gap-2 py-3 md:hidden absolute bg-gradient-to-r left-4 right-5 top-50 rounded-b-lg shadow-lg z-50"
    >
      {#each links as link}
        <li>
          <a
            href={link.path}
            class="text-white text-lg px-4 py-2 rounded transition-colors duration-200 hover:bg-white/20 {$page
              .url.pathname === link.path
              ? 'bg-white/30 font-bold'
              : ''}"
            aria-current={$page.url.pathname === link.path ? "page" : undefined}
            on:click={() => (menuOpen = false)}
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
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

  @media (max-width: 768px) {
    ul {
      gap: 1rem;
    }
  }
</style>
