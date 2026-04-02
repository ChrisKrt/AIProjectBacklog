// Port definitions for authentication
export interface AuthenticationPort {
  login(credentials: LoginCredentials): Promise<AuthResult>;
  logout(): Promise<void>;
  refreshToken(): Promise<AuthResult>;
  getCurrentUser(): Promise<User | null>;
}

export interface LoginCredentials {
  username?: string;
  password?: string;
  provider?: string;
}

export interface AuthResult {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
}

export interface User {
  id: string;
  username: string;
  email?: string;
  roles: string[];
  claims: Record<string, any>;
}
