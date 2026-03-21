import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/form/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useRegister } from '@/hooks/useAuth';
import { registerSchema, type RegisterData } from '@/services/AuthService';
import {
  IconeEmail,
  IconeSenha,
  IconeSenhaFechada,
  IconeNome,
} from '@/components/ui/icons/Icones';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { Register, isRegisterLoading } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterData) => {
    Register(data.name, data.email, data.password);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('name')}
        label="Nome"
        type="text"
        placeholder="Insira o seu nome"
        error={errors.name?.message}
        rightIcon={<IconeNome />}
      />

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
        placeholder="Insira sua senha"
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
        disabled={isRegisterLoading}
        className="py-4"
      >
        {isRegisterLoading ? 'Continuando...' : 'Continuar'}
      </Button>
    </form>
  );
};
