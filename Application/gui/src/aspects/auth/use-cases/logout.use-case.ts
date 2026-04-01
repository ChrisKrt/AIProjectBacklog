import type { AuthenticationPort } from '../ports/authentication.port';

export async function logoutUseCase(authPort: AuthenticationPort): Promise<void> {
  return authPort.logout();
}
