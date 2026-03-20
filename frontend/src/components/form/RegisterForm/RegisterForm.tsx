import { useState } from 'react';
import { Input } from '@/components/form/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import {
  IconeEmail,
  IconeSenha,
  IconeSenhaFechada,
  IconeNome,
} from '@/components/ui/icons/Icones';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-6">
      <Input
        label="Nome"
        type="text"
        placeholder="Insira o seu nome"
        rightIcon={<IconeNome />}
      />

      <Input
        label="E-mail"
        type="email"
        placeholder="Insira o seu e-mail"
        rightIcon={<IconeEmail />}
      />

      <Input
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
      <Button type="submit" variant="primary">
        Continuar
      </Button>
    </form>
  );
};
