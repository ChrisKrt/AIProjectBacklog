import type { PluginLoaderPort, Plugin } from '../ports/plugin-loader.port';

export async function loadPluginUseCase(
  loaderPort: PluginLoaderPort,
  plugin: Plugin
): Promise<void> {
  return loaderPort.loadPlugin(plugin);
}
