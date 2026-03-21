import { useThemeStore } from '@/store/themeStore';
import { IconeSol, IconeLua } from '@/components/ui/icons/Icones';

export function ButtonTheme() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="dark:text-footer-400 dark:hover:text-primary cursor-pointer"
    >
      {theme === 'light' ? <IconeLua /> : <IconeSol />}
    </button>
  );
}
