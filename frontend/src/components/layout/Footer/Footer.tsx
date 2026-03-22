import { useLocation } from '@tanstack/react-router';
import { ButtonTheme } from '@/components/ui/Button/ButtonTheme';

export default function Footer() {
  const { pathname } = useLocation();

  const isAuthPage = pathname === '/login' || pathname === '/register';
  const isFeedPage = pathname === '/feed' || pathname === '/';

  if (isAuthPage) {
    return (
      <footer className="text-footer-500 hover:text-primary flex h-13.75 w-full items-center justify-end bg-transparent px-10 py-4">
        <ButtonTheme />
      </footer>
    );
  }

  if (isFeedPage) {
    return (
      <footer className="bg-bg-100 dark:bg-dark dark:bg-bg-dark fixed right-0 bottom-0 left-0 z-40 flex h-13.75 w-full items-center px-10 py-4">
        <div className="mx-10 flex w-full items-center justify-between">
          <a
            className="text-primary justify-self-start text-[18px] font-bold dark:text-white"
            href="#feed-page"
          >
            Mini Twitter
          </a>
          <div className="text-footer-500 dark:text-footer-400 hover:text-primary">
            <ButtonTheme />
          </div>
        </div>
      </footer>
    );
  }

  return null;
}
