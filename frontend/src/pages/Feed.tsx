import { useEffect } from 'react';
import { FeedCard } from '@/components/feed/feedCard/FeedCard';
import { FeedForm } from '@/components/form/feedForm/FeedForm';
import { useGetPosts } from '@/hooks/usePost';
import { toast } from 'react-toastify';

export const FeedPage = () => {
  const { posts, isLoadingPosts, error } = useGetPosts();

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
          Nenhum post encontrado. Seja o primeiro a postar!
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
            {...(post.image ? { image: post.image } : {})}
          />
        ))
      )}
    </div>
  );
};
