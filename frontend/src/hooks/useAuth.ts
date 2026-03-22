import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { login, register } from '@/services/AuthService';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-toastify';
import { unknown } from 'zod';
import { AxiosError } from 'node_modules/axios/index.cjs';

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setAuth = useAuthStore(state => state.setAuth);
  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    mutationKey: ['login'],
    onSuccess: data => {
      setAuth(data.token, data.user);
      navigate({ to: '/feed' });
    },
  });

  const handleLogin = async (email: string, password: string) => {
    try {
      await toast.promise(loginMutation.mutateAsync({ email, password }), {
        pending: 'Realizando login...',
        success: 'Login realizado com sucesso!',
        error: 'Falha no login. Verifique suas credenciais.',
      });
    } catch (error) {}
  };

  return { Login: handleLogin, isLoginLoading: loginMutation.isPending };
};

export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const registerMutation = useMutation({
    mutationFn: ({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    }) => register({ name, email, password }),
    mutationKey: ['register'],
    onSuccess: () => {
      navigate({ to: '/feed' });
    },
  });

  const handleRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await toast.promise(
        registerMutation.mutateAsync({ name, email, password }),
        {
          pending: 'Realizando registro...',
          success: 'Registro realizado com sucesso!',
          error: {
            render({ data }: any) {
              if (data?.response?.status === 400) {
                return 'Email já está em uso. Por favor, use outro email.';
              }
              return 'Falha no registro. Verifique suas informações.';
            },
          },
        }
      );
    } catch (error) {}
  };

  return {
    Register: handleRegister,
    isRegisterLoading: registerMutation.isPending,
  };
};
