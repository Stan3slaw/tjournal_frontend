import React from 'react';
import styles from './SideComments.module.scss';

interface CommentItemProps {
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} />
        <a href='#'>
          <b>{user.fullname}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href='#'>
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};
