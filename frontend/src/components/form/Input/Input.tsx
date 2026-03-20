import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, rightIcon, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-');

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-secondary-400 text-base font-medium"
          >
            {label}
          </label>
        )}

        <div className="relative w-full">
          <input
            ref={ref}
            id={inputId}
            className={`border-card-bg placeholder:text-secondary-400 focus:ring-primary w-full rounded-lg border bg-transparent px-4 py-3 text-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1 ${rightIcon ? 'pr-12' : ''} ${error ? 'ring-2 ring-red-500' : ''} ${className || ''}`}
            {...props}
          />

          {rightIcon && (
            <div className="absolute top-1/2 right-4 flex -translate-y-1/2 items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
