<script lang="ts">
  import { t } from '../lib/i18n';
  import { locale, locales, setLocale } from '../lib/i18n';
</script>

<section class="page settings">
  <h1>{$t('pages.settings.title')}</h1>

  <div class="setting-group">
    <label for="language-select">{$t('pages.settings.language')}</label>
    <select
      id="language-select"
      value={$locale}
      onchange={(e) => setLocale((e.target as HTMLSelectElement).value as 'en' | 'de')}
    >
      {#each locales as lang}
        <option value={lang}>{lang.toUpperCase()}</option>
      {/each}
    </select>
  </div>
</section>

<style>
  .settings {
    padding: var(--spacing-xl);
  }

  h1 {
    font-size: var(--font-size-3xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-xl);
  }

  .setting-group {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }

  label {
    font-weight: 500;
    min-width: 8rem;
  }

  select {
    padding: var(--spacing-sm);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-base);
  }
</style>
