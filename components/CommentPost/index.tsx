import React from 'react';
import { IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import styles from './CommentPost.module.scss';

export const CommentPost = () => {
  return (
    <Paper elevation={0} className='p-20' classes={{ root: styles.paper }}>
      <Typography variant='h6' className={styles.title}>
        <a href='#'>Title</a>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Typography>
      <Typography className='mt-10 mb-15'>Texxtt</Typography>
    </Paper>
  );
};
