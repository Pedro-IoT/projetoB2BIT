import { useState } from 'react';
import { Input } from '@/components/form/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useRegister } from '@/hooks/useAuth';
import { handleSubmitRegister } from '@/services/ApiService';
import { toast } from 'react-toastify';
import {
  IconeEmail,
  IconeSenha,
  IconeSenhaFechada,
  IconeNome,
} from '@/components/ui/icons/Icones';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { Register, isRegisterLoading } = useRegister();

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={e => {
        const dataOrError = handleSubmitRegister(e);
        if (dataOrError instanceof Error) {
          toast.error('Informações inválidas');
          return;
        }
        Register(dataOrError.name, dataOrError.email, dataOrError.password);
      }}
    >
      <Input
        name="name"
        label="Nome"
        type="text"
        placeholder="Insira o seu nome"
        rightIcon={<IconeNome />}
      />

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
        placeholder="Insira sua senha"
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
      <Button type="submit" variant="primary" disabled={isRegisterLoading}>
        {isRegisterLoading ? 'Continuando...' : 'Continuar'}
      </Button>
    </form>
  );
};
