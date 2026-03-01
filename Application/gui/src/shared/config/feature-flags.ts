import { config } from './env.config';

export const featureFlags = {
  pluginsEnabled: config.featurePluginsEnabled,
  authEnabled: config.featureAuthEnabled,
};
