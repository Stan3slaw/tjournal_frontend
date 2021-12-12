import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';

import { Api } from '../../utils/api';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import { CommentType } from '../../utils/api/types';
import { useComments } from '../../hooks/useComments';

interface PostCommentsProps {
  postId: number;
}

export const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const userData = useAppSelector(selectUserData);
  const [activeTab, setActiveTab] = React.useState(0);
  const { comments, setComments } = useComments(postId);

  const onAddComment = (obj: CommentType) => {
    setComments((prev) => [...prev, obj]);
  };

  const onRemoveComment = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0} className='mt-40 p-30'>
      <div className='container'>
        <Typography variant='h6' className='mb-20'>
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className='mt-20'
          value={activeTab}
          indicatorColor='primary'
          textColor='primary'>
          <Tab label='Популярные' />
          <Tab label='По порядку' />
        </Tabs>
        <Divider />
        {userData && <AddCommentForm onSuccessAdd={onAddComment} postId={postId} />}
        <div className='mb-20' />
        {comments.map((obj) => (
          <Comment
            key={obj.id}
            id={obj.id}
            text={obj.text}
            createdAt={obj.createdAt}
            user={obj.user}
            currentUserId={userData?.id}
            onRemove={onRemoveComment}
          />
        ))}
      </div>
    </Paper>
  );
};
