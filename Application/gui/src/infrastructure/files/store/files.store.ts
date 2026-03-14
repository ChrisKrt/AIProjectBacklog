import { atom } from 'nanostores';
import type { FileMetadata } from '../adapters/cloud-storage.adapter';

export const files = atom<FileMetadata[]>([]);
export const filesLoading = atom<boolean>(false);
export const filesError = atom<string | null>(null);
export const currentPath = atom<string>('/');
