<script lang="ts">
  import { t } from '../lib/i18n';
</script>

<section class="page about">
  <h1>{$t('pages.about.title')}</h1>
  <p>{$t('pages.about.description')}</p>
</section>

<style>
  .about {
    padding: var(--spacing-xl);
  }

  h1 {
    font-size: var(--font-size-3xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
</style>
