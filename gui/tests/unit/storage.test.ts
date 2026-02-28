import { describe, it, expect } from 'vitest';

describe('Storage Adapter', () => {
  it('should be importable', async () => {
    const { LocalStorageAdapter } = await import(
      '../../../shared/src/adapters/storage.adapter'
    );
    expect(LocalStorageAdapter).toBeDefined();
  });
});
