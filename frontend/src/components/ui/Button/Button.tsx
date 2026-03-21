import { ButtonHTMLAttributes } from 'react';
import { Link } from '@tanstack/react-router';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'post'
    | 'navigationActive'
    | 'navigationInactive';
}

export const Button = ({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'font-medium transition-colors duration-200 flex items-center justify-center cursor-pointer';
  const variantStyles = {
    primary:
      'rounded-full w-full bg-primary text-white filter hover:translate-y-[-2px] py-2 text-lg shadow-xs',
    secondary:
      'rounded-full w-full bg-transparent text-secondary-400 py-2 px-4 hover:translate-y-[-2px]',
    post: 'rounded-full w-23 bg-primary text-white h-[33px] hover:translate-y-[-2px]',
    navigationActive:
      '!font-bold rounded-none px-6 py-2 border-b-[3px] border-b-primary bg-transparent text-primary',
    navigationInactive:
      '!font-bold rounded-none px-6 py-2 border-b border-b-secondary-400/20 bg-transparent text-secondary-400 hover:text-primary',
  };
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
