import { describe, it, expect } from 'vitest';
import { config } from '../../src/shared/config/env.config';

describe('Environment Configuration', () => {
  it('should have app name configured', () => {
    expect(config.appName).toBeDefined();
    expect(config.appName).toBe('OneBookshelf');
  });

  it('should have app version configured', () => {
    expect(config.appVersion).toBeDefined();
    expect(config.appVersion).toMatch(/^\d+\.\d+\.\d+$/);
  });

  it('should have localization config', () => {
    expect(config.localization.defaultLocale).toBe('en');
    expect(config.localization.supportedLocales).toContain('en');
    expect(config.localization.supportedLocales).toContain('de');
  });

  it('should have feature flags', () => {
    expect(config.features).toBeDefined();
    expect(typeof config.features.authEnabled).toBe('boolean');
    expect(typeof config.features.offlineMode).toBe('boolean');
    expect(typeof config.features.pluginsEnabled).toBe('boolean');
  });
});
