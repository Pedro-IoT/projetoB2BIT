import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button/Button';
import { IconeFechar } from '@/components/ui/icons/Icones';
import { useEditPost } from '@/hooks/usePost';

const editPostSchema = z.object({
  title: z.string().min(3, 'O título precisa ter pelo menos 3 caracteres.'),
  content: z.string().min(1, 'O conteúdo não pode ser vazio.'),
  imageUrl: z.string().url('URL inválida').optional().or(z.literal('')),
});

type EditPostFormData = z.infer<typeof editPostSchema>;

type EditPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  post: {
    id: number;
    title: string;
    content: string;
    image?: string;
  };
};

export const EditPostModal = ({
  isOpen,
  onClose,
  post,
}: EditPostModalProps) => {
  const { editPost, isEditing } = useEditPost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPostFormData>({
    resolver: zodResolver(editPostSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
      imageUrl: post.image || '',
    },
  });

  const onSubmit = async (data: EditPostFormData) => {
    await editPost(post.id, {
      title: data.title,
      content: data.content,
      ...(data.imageUrl && { image: data.imageUrl }),
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#314158]">Editar Post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <IconeFechar />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Titulo
            </label>
            <input
              {...register('title')}
              className={`w-full rounded-md border p-2 focus:outline-none ${
                errors.title
                  ? 'border-red-500 focus:border-red-500'
                  : 'focus:border-primary border-gray-300'
              }`}
            />
            {errors.title && (
              <span className="text-sm text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Conteudo
            </label>
            <textarea
              {...register('content')}
              rows={4}
              className={`w-full resize-none rounded-md border p-2 focus:outline-none ${
                errors.content
                  ? 'border-red-500 focus:border-red-500'
                  : 'focus:border-primary border-gray-300'
              }`}
            />
            {errors.content && (
              <span className="text-sm text-red-500">
                {errors.content.message}
              </span>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              URL da Imagem (opcional)
            </label>
            <input
              {...register('imageUrl')}
              className={`w-full rounded-md border p-2 focus:outline-none ${
                errors.imageUrl
                  ? 'border-red-500 focus:border-red-500'
                  : 'focus:border-primary border-gray-300'
              }`}
            />
            {errors.imageUrl && (
              <span className="text-sm text-red-500">
                {errors.imageUrl.message}
              </span>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="post" disabled={isEditing}>
              {isEditing ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
