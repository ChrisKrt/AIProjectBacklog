#!/bin/sh
# Inject runtime environment variables into config.js (ADR-014 - 12-Factor)
cat > /usr/share/nginx/html/config.js << ENVEOF
window.ENV = {
  VITE_APP_NAME: "${VITE_APP_NAME:-AI Project}",
  VITE_APP_VERSION: "${VITE_APP_VERSION:-0.1.0}",
  VITE_FEATURE_PLUGINS_ENABLED: "${VITE_FEATURE_PLUGINS_ENABLED:-false}",
  VITE_FEATURE_AUTH_ENABLED: "${VITE_FEATURE_AUTH_ENABLED:-false}",
  VITE_OIDC_AUTHORITY: "${VITE_OIDC_AUTHORITY:-}",
  VITE_OIDC_CLIENT_ID: "${VITE_OIDC_CLIENT_ID:-}",
  VITE_OIDC_REDIRECT_URI: "${VITE_OIDC_REDIRECT_URI:-}"
};
ENVEOF
