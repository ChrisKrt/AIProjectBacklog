<script lang="ts">
  import { t } from './lib/i18n';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Settings from './pages/Settings.svelte';
  import NotFound from './pages/NotFound.svelte';

  let currentPage = $state(window.location.pathname);

  function navigate(path: string) {
    window.history.pushState({}, '', path);
    currentPage = path;
  }

  window.addEventListener('popstate', () => {
    currentPage = window.location.pathname;
  });
</script>

<main>
  <nav>
    <button onclick={() => navigate('/')}>{$t('nav.home')}</button>
    <button onclick={() => navigate('/about')}>{$t('nav.about')}</button>
    <button onclick={() => navigate('/settings')}>{$t('nav.settings')}</button>
  </nav>

  {#if currentPage === '/'}
    <Home />
  {:else if currentPage === '/about'}
    <About />
  {:else if currentPage === '/settings'}
    <Settings />
  {:else}
    <NotFound {navigate} />
  {/if}
</main>

<style>
  main {
    font-family: var(--font-family-base, sans-serif);
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: var(--color-surface, #f5f5f5);
    border-radius: 0.5rem;
  }

  nav button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: var(--color-primary, #1a1a2e);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s;
  }

  nav button:hover {
    background-color: var(--color-primary-hover, #e0e0e0);
  }
</style>
