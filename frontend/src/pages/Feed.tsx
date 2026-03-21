import { useEffect, useState } from 'react';
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

  const { posts, isLoadingPosts, error } = useGetPosts(
    debouncedSearch || undefined
  );

  useEffect(() => {
    if (error) {
      toast.error('Falha ao carregar os posts.');
    }
  }, [error]);

  if (isLoadingPosts) {
    return (
      <div id="feed-page" className="flex flex-col items-center pb-24">
        <FeedForm />
        <p className="text-secondary-400 mt-8 text-center text-lg">
          Carregando posts...
        </p>
      </div>
    );
  }

  return (
    <div id="feed-page" className="flex flex-col items-center pb-24">
      <FeedForm />

      {posts.length === 0 ? (
        <p className="text-secondary-400 mt-8 text-center text-lg">
          {debouncedSearch
            ? 'Nenhum post encontrado para sua busca.'
            : 'Nenhum post encontrado. Seja o primeiro a postar!'}
        </p>
      ) : (
        posts.map(post => (
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
        ))
      )}
    </div>
  );
};
