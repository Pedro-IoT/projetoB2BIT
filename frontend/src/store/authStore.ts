import { create } from 'zustand';
import { logout } from '@/services/AuthService';

type User = {
  id: number;
  name: string;
  email: string;
};

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

const storedUser = localStorage.getItem('user');
const parsedUser = storedUser ? (JSON.parse(storedUser) as User) : null;

export const useAuthStore = create<AuthState>(set => ({
  token: localStorage.getItem('token'),
  user: parsedUser,
  isAuthenticated: !!localStorage.getItem('token'),

  setAuth: (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ token, user, isAuthenticated: true });
  },
  logout: () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ token: null, user: null, isAuthenticated: false });
  },
}));
