import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify/unstyled';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  );
}
