import React from 'react';
import { Api } from '../utils/api';
import { CommentType } from '../utils/api/types';

type UseCommentsProps = {
  comments: CommentType[];
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = React.useState<CommentType[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const comments = await Api().comment.getAll(postId);
        setComments(comments);
      } catch (err) {
        console.warn('Fetch comments', err);
      }
    })();
  }, []);
  return { comments, setComments };
};
