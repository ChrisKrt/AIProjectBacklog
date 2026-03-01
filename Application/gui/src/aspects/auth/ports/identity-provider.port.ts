import type { AuthResult, User } from './authentication.port';

export interface IdentityProviderPort {
  authenticate(redirectUri?: string): Promise<AuthResult>;
  signOut(): Promise<void>;
  getUser(): Promise<User | null>;
  refreshToken(): Promise<string | null>;
}
