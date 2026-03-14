import type { AuthenticationPort, LoginCredentials, AuthResult } from '../ports/authentication.port';

export async function loginUseCase(
  authPort: AuthenticationPort,
  credentials: LoginCredentials
): Promise<AuthResult> {
  return authPort.login(credentials);
}
