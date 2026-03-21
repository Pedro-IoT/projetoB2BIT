import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Footer from '@/components/layout/Footer/Footer';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-bg-100 dark:bg-dark flex h-dvh flex-col overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
