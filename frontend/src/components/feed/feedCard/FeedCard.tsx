import { IconeLike, IconeLikePreenchido } from '@/components/ui/icons/Icones';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';
//import { usetoggleLike, useDeletePost, useEditPost } from '@/hooks/usePosts';

type FeedCardProps = {
  id: number;
  title: string;
  content: string;
  image?: string;
  authorId: number;
  createdAt: string;
  authorName: string;
  likesCount: number;
};

export const FeedCard = (props: FeedCardProps) => {
  const isAuthtenticated = useAuthStore(state => state.isAuthenticated);
  const [isLiked, setIsLiked] = useState(false);
  //const toggleLike = usetoggleLike();
  //const deletePost = useDeletePost();
  //const editPost = useEditPost();
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
    <div className="border-card-bg mt-8 flex w-160 flex-col rounded-lg border bg-white p-4">
      <div className="flex items-start">
        <h3 className="text-[16px] font-bold text-[#314158]">
          {props.authorName}
        </h3>
        <p className="text-secondary-400 ml-2.5 text-[14px]">
          {'@' + nameNormalized}
        </p>
        <p className="text-secondary-400 ml-2.5 text-[14px]">·</p>
        <p className="text-secondary-400 ml-2.5 text-[14px]">
          {formatDatePt(props.createdAt)}
        </p>
        {/* {isAuthtenticated && <button>...</button>} */}
      </div>
      <div>
        <h1 className="mt-3 mb-2 text-lg font-bold text-[#314158]">
          {props.title}
        </h1>
        <p className="mb-3 text-[16px] font-normal text-[#314158]">
          {props.content}
        </p>
        {props.image && (
          <img src={props.image} alt="Post image" className="h-auto w-full" />
        )}
      </div>
      <div className="flex items-center">
        <p className="mr-2.5 text-[#EB5757]">{props.likesCount}</p>
        <button onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <IconeLikePreenchido /> : <IconeLike />}
        </button>
      </div>
    </div>
  );
};
