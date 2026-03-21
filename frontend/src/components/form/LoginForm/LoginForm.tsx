import { useState } from 'react';
import { Input } from '@/components/form/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useLogin } from '@/hooks/useAuth';
import { handleSubmitLogin } from '@/services/AuthService';
import { toast } from 'react-toastify';
import {
  IconeEmail,
  IconeSenha,
  IconeSenhaFechada,
} from '@/components/ui/icons/Icones';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { Login, isLoginLoading } = useLogin();

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={e => {
        const dataOrError = handleSubmitLogin(e);
        if (dataOrError instanceof Error) {
          toast.error('Credenciais inválidas');
          return;
        }
        Login(dataOrError.email, dataOrError.password);
      }}
    >
      <Input
        name="email"
        label="E-mail"
        type="email"
        placeholder="Insira o seu e-mail"
        rightIcon={<IconeEmail />}
      />

      <Input
        name="password"
        label="Senha"
        type={showPassword ? 'text' : 'password'}
        placeholder="Insira a sua senha"
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
