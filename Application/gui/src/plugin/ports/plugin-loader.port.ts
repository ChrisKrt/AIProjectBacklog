export interface Plugin {
  id: string;
  name: string;
  version: string;
  remoteEntry: string;
  exposedModules: string[];
}

export interface PluginLoaderPort {
  loadPlugin(plugin: Plugin): Promise<void>;
  unloadPlugin(pluginId: string): Promise<void>;
  getLoadedPlugins(): Plugin[];
}
