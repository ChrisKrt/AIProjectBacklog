// Environment configuration following 12-Factor principles
interface EnvConfig {
  appName: string;
  appVersion: string;
  features: {
    authEnabled: boolean;
    offlineMode: boolean;
    pluginsEnabled: boolean;
  };
  oidc?: {
    authority: string;
    clientId: string;
    redirectUri: string;
  };
  storage: {
    type: 'local' | 'cloud';
    endpoint?: string;
  };
  policyEngine: {
    enabled: boolean;
  };
  localization: {
    defaultLocale: string;
    supportedLocales: string[];
  };
}

export const config: EnvConfig = {
  appName: import.meta.env.VITE_APP_NAME || 'OneBookshelf',
  appVersion: import.meta.env.VITE_APP_VERSION || '0.1.0',
  features: {
    authEnabled: import.meta.env.VITE_FEATURE_AUTH_ENABLED === 'true',
    offlineMode: import.meta.env.VITE_FEATURE_OFFLINE_MODE !== 'false',
    pluginsEnabled: import.meta.env.VITE_FEATURE_PLUGINS_ENABLED === 'true',
  },
  oidc: import.meta.env.VITE_OIDC_AUTHORITY
    ? {
        authority: import.meta.env.VITE_OIDC_AUTHORITY,
        clientId: import.meta.env.VITE_OIDC_CLIENT_ID || '',
        redirectUri: import.meta.env.VITE_OIDC_REDIRECT_URI || window.location.origin,
      }
    : undefined,
  storage: {
    type: (import.meta.env.VITE_STORAGE_TYPE as 'local' | 'cloud') || 'local',
    endpoint: import.meta.env.VITE_CLOUD_STORAGE_ENDPOINT,
  },
  policyEngine: {
    enabled: import.meta.env.VITE_POLICY_ENGINE_ENABLED === 'true',
  },
  localization: {
    defaultLocale: import.meta.env.VITE_DEFAULT_LOCALE || 'en',
    supportedLocales: (import.meta.env.VITE_SUPPORTED_LOCALES || 'en,de').split(','),
  },
};
