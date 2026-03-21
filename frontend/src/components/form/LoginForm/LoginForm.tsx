import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/form/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useLogin } from '@/hooks/useAuth';
import { loginSchema, type LoginData } from '@/services/AuthService';
import {
  IconeEmail,
  IconeSenha,
  IconeSenhaFechada,
} from '@/components/ui/icons/Icones';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { Login, isLoginLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    Login(data.email, data.password);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email')}
        label="E-mail"
        type="email"
        placeholder="Insira o seu e-mail"
        error={errors.email?.message}
        rightIcon={<IconeEmail />}
      />

      <Input
        {...register('password')}
        label="Senha"
        type={showPassword ? 'text' : 'password'}
        placeholder="Insira a sua senha"
        error={errors.password?.message}
        rightIcon={
          <button
            type="button"
            className="text-secondary-400 hover:text-primary flex items-center justify-center transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IconeSenhaFechada /> : <IconeSenha />}
          </button>
        }
      />
      <Button
        type="submit"
        variant="primary"
        disabled={isLoginLoading}
        className="py-4"
      >
        {isLoginLoading ? 'Continuando...' : 'Continuar'}
      </Button>
    </form>
  );
};
