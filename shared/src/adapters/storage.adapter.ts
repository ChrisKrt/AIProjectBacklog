// Storage adapter using localStorage
import type { StoragePort } from '../ports/storage.port';

export class LocalStorageAdapter implements StoragePort {
  async save(key: string, data: any): Promise<void> {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      throw error;
    }
  }

  async load(key: string): Promise<any> {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      throw error;
    }
  }

  async delete(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to delete from localStorage:', error);
      throw error;
    }
  }

  async exists(key: string): Promise<boolean> {
    return localStorage.getItem(key) !== null;
  }

  async list(prefix?: string): Promise<string[]> {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (!prefix || key.startsWith(prefix))) {
        keys.push(key);
      }
    }
    return keys;
  }
}
