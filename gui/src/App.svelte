<script lang="ts">
  import { onMount } from 'svelte';
  import { t, currentLocale } from './lib/i18n';
  import { config } from './shared/config/env.config';

  let appName = config.appName;
  let ready = false;

  onMount(() => {
    ready = true;
  });
</script>

<main>
  <header>
    <h1>{appName}</h1>
    <div class="language-switcher">
      <button on:click={() => currentLocale.set('en')}>EN</button>
      <button on:click={() => currentLocale.set('de')}>DE</button>
    </div>
  </header>

  {#if ready}
    <div class="content">
      <section class="welcome">
        <h2>{$t('app.name')}</h2>
        <p>{$t('app.description')}</p>
      </section>

      <nav>
        <ul>
          <li><a href="#home">{$t('nav.home')}</a></li>
          <li><a href="#files">{$t('nav.files')}</a></li>
          <li><a href="#bookshelves">{$t('nav.bookshelves')}</a></li>
          <li><a href="#settings">{$t('nav.settings')}</a></li>
        </ul>
      </nav>

      <section class="status">
        <h3>System Status</h3>
        <ul>
          <li>Auth Enabled: {config.features.authEnabled ? 'Yes' : 'No'}</li>
          <li>Offline Mode: {config.features.offlineMode ? 'Yes' : 'No'}</li>
          <li>Plugins Enabled: {config.features.pluginsEnabled ? 'Yes' : 'No'}</li>
        </ul>
      </section>
    </div>
  {:else}
    <div class="loading">{$t('common.loading')}</div>
  {/if}
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e0e0e0;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  .language-switcher button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    border-radius: 4px;
  }

  .language-switcher button:hover {
    background: #f0f0f0;
  }

  .content {
    display: grid;
    gap: 2rem;
  }

  .welcome {
    text-align: center;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 8px;
  }

  nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    justify-content: center;
  }

  nav a {
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }

  nav a:hover {
    background: #0056b3;
  }

  .status {
    padding: 1.5rem;
    background: #e8f5e9;
    border-radius: 8px;
  }

  .status ul {
    list-style: none;
    padding: 0;
  }

  .status li {
    padding: 0.5rem 0;
  }

  .loading {
    text-align: center;
    padding: 3rem;
    font-size: 1.2rem;
  }
</style>
