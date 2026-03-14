<script lang="ts">
  import { t } from '../lib/i18n';

  let { navigate } = $props<{ navigate: (path: string) => void }>();
</script>

<section class="page not-found">
  <h1>{$t('pages.notFound.title')}</h1>
  <p>{$t('pages.notFound.description')}</p>
  <button onclick={() => navigate('/')}>{$t('pages.notFound.backHome')}</button>
</section>

<style>
  .not-found {
    padding: var(--spacing-xl);
    text-align: center;
  }

  h1 {
    font-size: var(--font-size-3xl);
    color: var(--color-error);
    margin-bottom: var(--spacing-md);
  }

  p {
    margin-bottom: var(--spacing-xl);
    color: var(--color-text-muted);
  }

  button {
    padding: var(--spacing-sm) var(--spacing-lg);
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-base);
    cursor: pointer;
  }
</style>
