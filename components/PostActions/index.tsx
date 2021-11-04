import React from 'react';

import { IconButton } from '@material-ui/core';
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from '@material-ui/icons';

import styles from './PostActions.module.scss';

export const PostActions: React.FC = () => {
  return (
    <ul className={styles.actions}>
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
