import { atom } from 'nanostores';
import type { Plugin } from '../ports/plugin-loader.port';

export const loadedPlugins = atom<Plugin[]>([]);
export const pluginsLoading = atom<boolean>(false);
export const pluginsError = atom<string | null>(null);
