// 12-Factor App configuration (ADR-014)
// Runtime config is injected via window.ENV (Docker pattern) or falls back to import.meta.env

interface AppConfig {
  appName: string;
  appVersion: string;
  featurePluginsEnabled: boolean;
  featureAuthEnabled: boolean;
  oidcAuthority: string;
  oidcClientId: string;
  oidcRedirectUri: string;
}

declare global {
  interface Window {
    ENV?: Partial<Record<string, string>>;
  }
}

function getEnv(key: string, fallback = ''): string {
  return window.ENV?.[key] ?? (import.meta.env[key as keyof ImportMetaEnv] as string) ?? fallback;
}

export const config: AppConfig = {
  appName: getEnv('VITE_APP_NAME', 'AI Project'),
  appVersion: getEnv('VITE_APP_VERSION', '0.1.0'),
  featurePluginsEnabled: getEnv('VITE_FEATURE_PLUGINS_ENABLED', 'false') === 'true',
  featureAuthEnabled: getEnv('VITE_FEATURE_AUTH_ENABLED', 'false') === 'true',
  oidcAuthority: getEnv('VITE_OIDC_AUTHORITY'),
  oidcClientId: getEnv('VITE_OIDC_CLIENT_ID'),
  oidcRedirectUri: getEnv('VITE_OIDC_REDIRECT_URI'),
};
