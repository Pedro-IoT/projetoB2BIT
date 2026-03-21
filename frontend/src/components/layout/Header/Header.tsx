import { IconeLupa, IconeSair } from '@/components/ui/icons/Icones';
import { useAuthStore } from '@/store/authStore';
import { useSearchStore } from '@/store/searchStore';
import { Button } from '@/components/ui/Button/Button';
import { Link } from '@tanstack/react-router';

export function Header() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const searchTerm = useSearchStore(state => state.searchTerm);
  const setSearchTerm = useSearchStore(state => state.setSearchTerm);

  return (
    <header className="border-b-card-bg dark:bg-bg-dark dark:border-b-border-dark w-full border border-x-0 border-t-0">
      <div className="mx-10 grid grid-cols-[1fr_minmax(260px,520px)_1fr] items-center gap-4 px-4 py-3">
        <h1 className="text-primary justify-self-start text-[18px] font-bold dark:text-white">
          Mini Twitter
        </h1>

        <div className="text-secondary-400 border-card-bg dark:bg-card-bg-dark focus-within:border-secondary-400 dark:focus-within:border-border-dark flex items-center gap-2 rounded-md border bg-white px-4 py-2 dark:border-0 dark:focus-within:border">
          <IconeLupa />
          <input
            type="text"
            placeholder="Buscar por post"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="text-secondary-400 placeholder:text-secondary-400 w-full bg-transparent text-sm outline-none"
          />
        </div>

        <div className="justify-self-end">
          {isAuthenticated ? (
            <div>
              <button
                className="bg-primary cursor-pointer rounded-full px-4 py-2 text-white hover:-translate-y-0.5"
                onClick={() => {
                  useAuthStore.getState().logout();
                }}
              >
                <IconeSair />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-39">
                <Button
                  variant="secondary"
                  className="border-card-bg inline-flex border text-[16px] font-bold"
                >
                  <Link
                    to="/register"
                    className="flex h-full w-full items-center justify-center"
                  >
                    Registrar-se
                  </Link>
                </Button>
              </div>
              <div className="w-39">
                <Button
                  variant="primary"
                  className="inline-flex text-[16px] font-bold"
                >
                  <Link
                    to="/login"
                    className="flex h-full w-full items-center justify-center"
                  >
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
