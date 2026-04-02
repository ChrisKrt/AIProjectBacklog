// Plugin system contract
export interface PluginContract {
  id: string;
  name: string;
  version: string;
  initialize(): Promise<void>;
  destroy(): Promise<void>;
  getComponent(): any;
}

export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  remoteEntry: string;
  exposedModule: string;
  dependencies?: string[];
}
