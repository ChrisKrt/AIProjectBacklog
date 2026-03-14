import type { AuthenticationPort, AuthResult } from '../ports/authentication.port';

export async function refreshTokenUseCase(authPort: AuthenticationPort): Promise<AuthResult> {
  return authPort.refreshToken();
}
