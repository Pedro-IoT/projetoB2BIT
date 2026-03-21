import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  PostData,
  createPost,
  deletePost,
  editPost,
  getPosts,
  toggleLike,
  type GetPostsResponse,
} from '@/services/PostService';
import { toast } from 'react-toastify';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: (data: PostData) => createPost(data),
    mutationKey: ['createPost'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post criado com sucesso!');
    },
    onError: () => {
      toast.error('Falha ao criar post. Tente novamente.');
    },
  });

  const handleCreatePost = async (data: PostData) => {
    await toast.promise(createPostMutation.mutateAsync(data), {
      pending: 'Criando post...',
      success: 'Post criado com sucesso!',
      error: 'Falha ao criar post. Tente novamente.',
    });
  };

  return {
    CreatePost: handleCreatePost,
    isCreating: createPostMutation.isPending,
  };
};

export const useGetPosts = () => {
  const {
    data,
    isLoading: isLoadingPosts,
    error,
  } = useQuery<GetPostsResponse, Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return {
    posts: data?.posts ?? [],
    isLoadingPosts,
    error,
  };
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const deletePostMutation = useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    mutationKey: ['deletePost'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post deletado com sucesso!');
    },
    onError: () => {
      toast.error('Falha ao deletar post. Tente novamente.');
    },
  });

  const handleDeletePost = async (postId: number) => {
    await toast.promise(deletePostMutation.mutateAsync(postId), {
      pending: 'Deletando post...',
      success: 'Post deletado com sucesso!',
      error: 'Falha ao deletar post. Tente novamente.',
    });
  };

  return {
    deletePost: handleDeletePost,
    isDeleting: deletePostMutation.isPending,
  };
};

export const useEditPost = () => {
  const queryClient = useQueryClient();
  const editPostMutation = useMutation({
    mutationFn: ({ postId, data }: { postId: number; data: PostData }) =>
      editPost(postId, data),
    mutationKey: ['editPost'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post editado com sucesso!');
    },
    onError: () => {
      toast.error('Falha ao editar post. Tente novamente.');
    },
  });

  const handleEditPost = async (postId: number, data: PostData) => {
    await toast.promise(editPostMutation.mutateAsync({ postId, data }), {
      pending: 'Editando post...',
      success: 'Post editado com sucesso!',
      error: 'Falha ao editar post. Tente novamente.',
    });
  };

  return {
    editPost: handleEditPost,
    isEditing: editPostMutation.isPending,
  };
};

export const useToggleLike = () => {
  const queryClient = useQueryClient();
  const toggleLikeMutation = useMutation({
    mutationFn: (postId: number) => toggleLike(postId),
    mutationKey: ['toggleLike'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: () => {
      toast.error('Falha ao curtir/descurtir post. Tente novamente.');
    },
  });

  const handleToggleLike = async (postId: number) => {
    await toast.promise(toggleLikeMutation.mutateAsync(postId), {
      pending: 'Processando...',
      success: 'Ação realizada com sucesso!',
      error: 'Falha ao reagir ao post. Tente novamente.',
    });
  };

  return {
    toggleLike: handleToggleLike,
    isTogglingLike: toggleLikeMutation.isPending,
  };
};
