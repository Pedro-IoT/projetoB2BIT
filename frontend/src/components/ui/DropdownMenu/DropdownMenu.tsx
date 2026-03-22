import { useState, useRef, useEffect } from 'react';
import { IconeTresPontos } from '@/components/ui/icons/Icones';

type DropdownMenuItem = {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
};

type DropdownMenuProps = {
  items: DropdownMenuItem[];
};

export const DropdownMenu = ({ items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-secondary-400 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Menu de opções"
      >
        <IconeTresPontos />
      </button>

      {isOpen && (
        <div className="dark:bg-card-bg-dark absolute right-0 z-10 mt-1 w-32 rounded-md border border-gray-200 bg-white shadow-lg">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className={`dark:hover:bg-card-bg-dark w-full px-4 py-2 text-left text-sm filter transition-colors first:rounded-t-md last:rounded-b-md hover:bg-gray-100 dark:hover:brightness-125 ${
                item.variant === 'danger'
                  ? 'text-red-600 hover:bg-red-50'
                  : 'text-gray-700 dark:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
