import type { PluginLoaderPort } from '../ports/plugin-loader.port';

export async function unloadPluginUseCase(
  loaderPort: PluginLoaderPort,
  pluginId: string
): Promise<void> {
  return loaderPort.unloadPlugin(pluginId);
}
