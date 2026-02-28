import type { IdentityProviderPort } from '../ports/identity-provider.port';
import type { AuthResult, User } from '../ports/authentication.port';

export class OidcClientAdapter implements IdentityProviderPort {
  async authenticate(_redirectUri?: string): Promise<AuthResult> {
    // OIDC client implementation (e.g., oidc-client-ts)
    throw new Error('OIDC adapter not yet configured');
  }

  async signOut(): Promise<void> {
    throw new Error('OIDC adapter not yet configured');
  }

  async getUser(): Promise<User | null> {
    return null;
  }

  async refreshToken(): Promise<string | null> {
    return null;
  }
}
