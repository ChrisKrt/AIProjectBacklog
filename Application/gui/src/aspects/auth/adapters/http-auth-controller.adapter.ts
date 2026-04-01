import type { AuthenticationPort, LoginCredentials, AuthResult, User } from '../ports/authentication.port';
import type { IdentityProviderPort } from '../ports/identity-provider.port';

export class HttpAuthControllerAdapter implements AuthenticationPort {
  private user: User | null = null;

  constructor(private readonly identityProvider: IdentityProviderPort) {}

  async login(credentials: LoginCredentials): Promise<AuthResult> {
    return this.identityProvider.authenticate(credentials.redirectUri);
  }

  async logout(): Promise<void> {
    this.user = null;
    await this.identityProvider.signOut();
  }

  async refreshToken(): Promise<AuthResult> {
    const token = await this.identityProvider.refreshToken();
    return { success: token !== null, token: token ?? undefined };
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  getCurrentUser(): User | null {
    return this.user;
  }
}
