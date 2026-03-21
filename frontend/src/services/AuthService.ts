import axios from 'axios';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ message: 'E-mail inválido' }),
  password: z
    .string()
    .min(4, { message: 'Senha deve ter pelo menos 4 caracteres' }),
});

export type LoginData = z.infer<typeof loginSchema>;

type LoginResponse = {
  token: string;
  user: { id: number; name: string; email: string };
};

export const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export async function login(data: LoginData): Promise<LoginResponse> {
  try {
    const response = await api.post('/auth/login', data);
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
}

export function handleSubmitLogin(
  e: React.SubmitEvent<HTMLFormElement>
): LoginData | Error {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const validation = loginSchema.safeParse(data);
  if (!validation.success) {
    return new Error('Credenciais inválidas');
  }
  return validation.data;
}

export const registerSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
  email: z.email({ message: 'E-mail inválido' }),
  password: z
    .string()
    .min(4, { message: 'Senha deve ter pelo menos 4 caracteres' }),
});

export type RegisterData = z.infer<typeof registerSchema>;

export async function register(data: RegisterData) {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
}

export function handleSubmitRegister(
  e: React.SubmitEvent<HTMLFormElement>
): RegisterData | Error {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const validation = registerSchema.safeParse(data);
  if (!validation.success) {
    return new Error('Dados de registro inválidos');
  }
  return validation.data;
}

export async function logout() {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    throw new Error('Logout failed');
  }
}
