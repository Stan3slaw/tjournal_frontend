import React from 'react';

import { Typography, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';
import { Api } from '../../utils/api';

interface CommentProps {
  id: number;
  user: {
    fullName: string;
    id: number;
  };
  text: string;
  createdAt: string;
  currentUserId: number | undefined;
  onRemove: (id: number) => void;
}

export const Comment: React.FC<CommentProps> = ({
  id,
  text,
  createdAt,
  user,
  currentUserId,
  onRemove,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = async () => {
    if (window.confirm('Удалить коментарий?')) {
      try {
        await Api().comment.remove(id);
        onRemove(id);
      } catch (err) {
        console.warn('Error removing comment', err);
      } finally {
        handleClose();
      }
    }
  };
  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.fullName[0]}</Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      {user.id === currentUserId && (
        <>
          <span className={styles.replyBtn}>Ответить</span>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted>
            <MenuItem onClick={handleRemove}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};
