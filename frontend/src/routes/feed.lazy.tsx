import { createLazyFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/layout/Header/Header';
import { FeedPage } from '@/pages/Feed';

export const Route = createLazyFileRoute('/feed')({
  component: Feed,
});

function Feed() {
  return (
    <>
      <Header />
      <FeedPage />
    </>
  );
}
