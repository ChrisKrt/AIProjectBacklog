<script lang="ts">
  import { t } from '../lib/i18n';
</script>

<section class="page home">
  <h1>{$t('pages.home.title')}</h1>
  <p>{$t('pages.home.description')}</p>
</section>

<style>
  .home {
    padding: var(--spacing-xl);
  }

  h1 {
    font-size: var(--font-size-3xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }

  p {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
  }
</style>
