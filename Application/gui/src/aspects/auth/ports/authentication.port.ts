export interface AuthenticationPort {
  login(credentials: LoginCredentials): Promise<AuthResult>;
  logout(): Promise<void>;
  refreshToken(): Promise<AuthResult>;
  isAuthenticated(): boolean;
  getCurrentUser(): User | null;
}

export interface LoginCredentials {
  username?: string;
  password?: string;
  redirectUri?: string;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
}
