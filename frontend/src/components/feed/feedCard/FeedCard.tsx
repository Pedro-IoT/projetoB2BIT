import { IconeLikeAnimado } from '@/components/ui/icons/Icones';
import { DropdownMenu } from '@/components/ui/DropdownMenu/DropdownMenu';
import { EditPostModal } from '@/components/ui/Modal/EditPostModal';
import { useAuthStore } from '@/store/authStore';
import { useDeletePost, useToggleLike } from '@/hooks/usePost';
import { useState } from 'react';

type FeedCardProps = {
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

export const FeedCard = (props: FeedCardProps) => {
  const user = useAuthStore(state => state.user);
  const [isLiked, setIsLiked] = useState(props.isLikedByUser);
  const [likesCount, setLikesCount] = useState(props.likesCount);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { deletePost } = useDeletePost();
  const { toggleLike } = useToggleLike();

  const handleToggleLike = async () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => (isLiked ? prev - 1 : prev + 1));
    try {
      await toggleLike(props.id);
    } catch {
      setIsLiked(isLiked);
      setLikesCount(props.likesCount);
    }
  };

  const isAuthor = user?.id === props.authorId;
  const nameNormalized = props.authorName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9_]/g, '');
  const formatDatePt = (createdAt: string) => {
    const [datePart] = createdAt.split(' ');
    if (!datePart) return createdAt;
    const [year, month, day] = datePart.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="border-card-bg dark:border-border-dark dark:bg-bg-dark mt-8 flex w-160 flex-col rounded-lg border bg-white p-4">
      <div className="flex items-start">
        <h3 className="text-[16px] font-bold text-[#314158] dark:text-white">
          {props.authorName}
        </h3>
        <p className="text-secondary-400 ml-2.5 text-[14px]">
          {'@' + nameNormalized}
        </p>
        <p className="text-secondary-400 ml-2.5 text-[14px]">·</p>
        <p className="text-secondary-400 ml-2.5 text-[14px]">
          {formatDatePt(props.createdAt)}
        </p>
        {isAuthor && (
          <div className="ml-auto">
            <DropdownMenu
              items={[
                {
                  label: 'Editar',
                  onClick: () => setIsEditModalOpen(true),
                },
                {
                  label: 'Excluir',
                  onClick: () => deletePost(props.id),
                  variant: 'danger',
                },
              ]}
            />
          </div>
        )}
      </div>
      <div>
        <h1 className="mt-3 mb-2 text-lg font-bold text-[#314158] dark:text-white">
          {props.title}
        </h1>
        <p className="mb-3 text-[16px] font-normal text-[#314158] dark:text-[#CBD5E1]">
          {props.content}
        </p>
        {props.image && (
          <img src={props.image} alt="Post image" className="h-auto w-full" />
        )}
      </div>
      <div className="flex items-center">
        <p className="mr-2.5 text-[#EB5757]">{likesCount}</p>
        <button
          onClick={handleToggleLike}
          className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
        >
          <IconeLikeAnimado isLiked={isLiked} />
        </button>
      </div>

      <EditPostModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        post={{
          id: props.id,
          title: props.title,
          content: props.content,
          ...(props.image && { image: props.image }),
        }}
      />
    </div>
  );
};
