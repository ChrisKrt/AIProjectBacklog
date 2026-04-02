<script lang="ts">
  import type { PluginContract } from '@aiproject/shared';

  export let plugin: PluginContract;

  console.log('Example plugin loaded:', plugin.name);
</script>

<div class="plugin">
  <h2>{plugin.name}</h2>
  <p>Version: {plugin.version}</p>
  <p>This is an example plugin component.</p>
</div>

<style>
  .plugin {
    padding: 1rem;
    border: 2px dashed #ccc;
    border-radius: 8px;
    margin: 1rem 0;
  }
</style>
