import { useAuthStore } from '../store/authStore';
import { api } from '../api/client';
import type { User } from '../types';

export function useAuth() {
  const { user, isAuthenticated, login, logout } = useAuthStore();

  const signIn = async (email: string, password: string) => {
    const response = await api.post<{ token: string; user: User }>('auth/login', {
      email,
      password,
    });
    login(response.data.token, response.data.user);
    return response.data;
  };

  const signOut = () => {
    logout();
  };

  return { user, isAuthenticated, signIn, signOut };
}
