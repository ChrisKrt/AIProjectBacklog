// Authentication store using nanostores
import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
import type { User } from '@aiproject/shared';

export const currentUser = persistentAtom<User | null>('auth:user', null, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const isAuthenticated = atom<boolean>(false);

currentUser.subscribe((user) => {
  isAuthenticated.set(!!user);
});

export function login(user: User) {
  currentUser.set(user);
}

export function logout() {
  currentUser.set(null);
}
