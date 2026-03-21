import { IconeImagem } from '@/components/ui/icons/Icones';
import { Button } from '@/components/ui/Button/Button';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from '@tanstack/react-router';
import { useCreatePost } from '@/hooks/usePost';
import type { PostData } from '@/services/PostService';
import { toast } from 'react-toastify';

export const FeedForm = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const navigate = useNavigate();
  const { CreatePost, isCreating } = useCreatePost();

  return (
    <div className="border-card-bg mt-8 w-160 rounded-lg border bg-white p-4 shadow-md">
      <form
        onSubmit={e => {
          e.preventDefault();

          if (!isAuthenticated) {
            navigate({ to: '/login' });
            return;
          }

          const formData = new FormData(e.currentTarget);
          const text = (formData.get('postText') as string)?.trim() ?? '';

          if (!text) {
            toast.error('Escreva algo para postar.');
            return;
          }

          const [firstLine, ...rest] = text.split('\n');
          if (firstLine === undefined) {
            toast.error('O titulo precisa ter pelo menos 3 caracteres.');
            return;
          }
          const title = firstLine.trim();
          const content = rest.join('\n').trim() || firstLine.trim();

          if (title.length < 3) {
            toast.error('O titulo precisa ter pelo menos 3 caracteres.');
            return;
          }

          const payload: PostData = {
            title,
            content,
          };

          CreatePost(payload);
          e.currentTarget.reset();
        }}
      >
        <textarea
          name="postText"
          placeholder="E ai, o que esta rolando?"
          className="focus:border-primary max-h-18 min-h-15 w-full resize-none rounded-lg border-none p-4 text-[18px] text-[#314158] focus:outline-none"
          rows={4}
        />
        <div className="border-t-card-bg mt-2 flex h-11.5 items-center justify-between border-t pt-2">
          <button
            type="button"
            className="mr-2 cursor-pointer hover:-translate-y-0.5"
            onClick={() => {
              if (!isAuthenticated) {
                navigate({ to: '/login' });
              } else {
                // TODO: Implementar upload de imagem
              }
            }}
          >
            <IconeImagem />
          </button>
          <Button type="submit" variant="post" disabled={isCreating}>
            {isCreating ? 'Postando...' : 'Postar'}
          </Button>
        </div>
      </form>
    </div>
  );
};
