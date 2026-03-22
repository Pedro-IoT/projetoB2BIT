import { useEffect, useState, useRef, useCallback } from 'react';
import { FeedCard } from '@/components/feed/feedCard/FeedCard';
import { FeedForm } from '@/components/form/feedForm/FeedForm';
import { useGetPosts } from '@/hooks/usePost';
import { useSearchStore } from '@/store/searchStore';
import { toast } from 'react-toastify';

export const FeedPage = () => {
  const searchTerm = useSearchStore(state => state.searchTerm);
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const {
    posts,
    isLoadingPosts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetPosts(debouncedSearch || undefined);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoadingPosts || isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0]?.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoadingPosts, isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  useEffect(() => {
    if (error) {
      toast.error('Falha ao carregar os posts.');
    }
  }, [error]);

  if (isLoadingPosts) {
    return (
      <div className="flex flex-col items-center pb-24">
        <FeedForm />
        <p className="text-secondary-400 mt-8 text-center text-lg">
          Carregando posts...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pb-24">
      <FeedForm />

      {posts.length === 0 ? (
        <p className="text-secondary-400 mt-8 text-center text-lg">
          {debouncedSearch
            ? 'Nenhum post encontrado para sua busca.'
            : 'Nenhum post encontrado. Seja o primeiro a postar!'}
        </p>
      ) : (
        <>
          {posts.map(post => (
            <FeedCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorId={post.authorId}
              createdAt={post.createdAt}
              authorName={post.authorName}
              likesCount={post.likesCount}
              isLikedByUser={post.isLikedByUser}
              {...(post.image ? { image: post.image } : {})}
            />
          ))}

          <div ref={loadMoreRef} className="h-10 w-full" />

          {isFetchingNextPage && (
            <p className="text-secondary-400 mt-4 text-center text-lg">
              Carregando mais posts...
            </p>
          )}
        </>
      )}
    </div>
  );
};
