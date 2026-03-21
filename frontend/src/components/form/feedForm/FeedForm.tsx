import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { IconeImagem } from '@/components/ui/icons/Icones';
import { Button } from '@/components/ui/Button/Button';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from '@tanstack/react-router';
import { useCreatePost } from '@/hooks/usePost';
import type { PostData } from '@/services/PostService';

const feedFormSchema = z
  .object({
    postText: z.string().min(3, 'Escreva algo para postar.'),
    imageUrl: z.url('Insira uma URL válida.').optional().or(z.literal('')),
  })
  .refine(
    data => {
      const firstLine = data.postText.trim().split('\n')[0];
      return firstLine !== undefined && firstLine.length >= 3;
    },
    {
      message: 'O título (primeira linha) precisa ter pelo menos 3 caracteres.',
      path: ['postText'],
    }
  );

type FeedFormData = z.infer<typeof feedFormSchema>;

export const FeedForm = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const navigate = useNavigate();

  const { CreatePost, isCreating } = useCreatePost();
  const [showUrlInput, setShowUrlInput] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedFormData>({
    resolver: zodResolver(feedFormSchema),
  });

  const onSubmit = (data: FeedFormData) => {
    if (!isAuthenticated) {
      navigate({ to: '/login' });
      return;
    }

    const text = data.postText.trim();
    const [firstLine, ...rest] = text.split('\n');
    if (firstLine === undefined) return;
    const title = firstLine.trim();
    const content = rest.join('\n').trim() || title;

    const payload: PostData & { image?: string } = {
      title,
      content,
      ...(data.imageUrl && { image: data.imageUrl }),
    };

    CreatePost(payload);

    reset();
    setShowUrlInput(false);
  };

  return (
    <div className="border-card-bg dark:border-border-dark dark:bg-bg-dark dark:text-border-dark mt-8 w-160 rounded-lg border bg-white p-4 shadow-md transition-all">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register('postText')}
          placeholder="E ai, o que esta rolando?"
          className={`focus:border-primary dark:placeholder:text-border-dark dark:text-border-dark max-h-18 min-h-15 w-full resize-none rounded-lg border p-4 text-[18px] text-[#314158] focus:outline-none ${
            errors.postText ? 'border-red-500' : 'border-none'
          }`}
          rows={4}
        />
        {errors.postText && (
          <span className="px-4 text-sm text-red-500">
            {errors.postText.message}
          </span>
        )}

        {showUrlInput && (
          <div className="mt-2 px-4 pb-2">
            <input
              {...register('imageUrl')}
              type="text"
              placeholder="Cole o link da imagem aqui..."
              className={`w-full rounded-md border p-2 text-sm focus:outline-none ${
                errors.imageUrl
                  ? 'border-red-500 focus:border-red-500'
                  : 'focus:border-primary border-gray-300'
              }`}
            />
            {errors.imageUrl && (
              <span className="mt-1 text-xs text-red-500">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
        )}

        <div className="border-t-card-bg dark:border-t-border-dark mt-2 flex h-11.5 items-center justify-between border-t pt-2">
          <button
            type="button"
            className={`mr-2 cursor-pointer transition-colors hover:-translate-y-0.5 ${showUrlInput ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => {
              if (!isAuthenticated) {
                navigate({ to: '/login' });
              } else {
                setShowUrlInput(!showUrlInput);
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
