import { atom } from 'nanostores';
import type { User } from '../ports/authentication.port';

export const isAuthenticated = atom<boolean>(false);
export const currentUser = atom<User | null>(null);
export const authLoading = atom<boolean>(false);
export const authError = atom<string | null>(null);
