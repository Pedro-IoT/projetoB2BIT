import axios from 'axios';
import { z } from 'zod';

const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'O título do post não pode ter menos de 3 caracteres' }),
  content: z
    .string()
    .min(1, { message: 'O conteúdo do post não pode ser vazio' }),
  image: z.url({ message: 'A imagem deve ser uma URL válida' }).optional(),
});

export type PostData = z.infer<typeof postSchema>;

export type PostResponse = {
  id: number;
  title: string;
  content: string;
  image?: string;
  authorId: number;
  createdAt: string;
  authorName: string;
  likesCount: number;
  isLikedByUser: boolean;
};

export type GetPostsResponse = {
  posts: PostResponse[];
  total: number;
  page: number;
  limit: number;
};

const api = axios.create({
  baseURL: 'http://localhost:3000/posts',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export async function createPost(data: PostData) {
  try {
    const response = await api.post('/', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post');
  }
}

export function handleSubmitPost(
  e: React.SubmitEvent<HTMLFormElement>
): PostData | Error {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const rawImage = formData.get('image');

  const data = {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    image:
      typeof rawImage === 'string' && rawImage.trim() !== ''
        ? rawImage
        : undefined,
  };
  const validationResult = postSchema.safeParse(data);
  if (!validationResult.success) {
    throw new Error(validationResult.error.message);
  }
  return validationResult.data;
}

export async function getPosts(
  search?: string,
  page: number = 1
): Promise<GetPostsResponse> {
  try {
    const response = await api.get<GetPostsResponse>('/', {
      params: { search, page },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
}

export async function deletePost(postId: number) {
  try {
    await api.delete(`/${postId}`);
  } catch (error) {
    throw new Error('Failed to delete post');
  }
}

export async function editPost(postId: number, data: PostData) {
  try {
    const response = await api.put(`/${postId}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit post');
  }
}

export function HandleSubmitEditPost(
  e: React.SubmitEvent<HTMLFormElement>
): PostData | Error {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const rawImage = formData.get('image');

  const data = {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    image:
      typeof rawImage === 'string' && rawImage.trim() !== ''
        ? rawImage
        : undefined,
  };
  const validationResult = postSchema.safeParse(data);
  if (!validationResult.success) {
    throw new Error(validationResult.error.message);
  }
  return validationResult.data;
}

export async function toggleLike(postId: number) {
  try {
    const response = await api.post(`/${postId}/like`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to toggle like');
  }
}
