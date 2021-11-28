import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { PostActions } from '../PostActions';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

import styles from './FullPost.module.scss';
import { NextPage } from 'next';
import { OutputData } from '@editorjs/editorjs';
import { BlockSharp } from '@material-ui/icons';

interface FullPostProps {
  title: string;
  blocks: OutputData['blocks'];
}

export const FullPost: React.FC<FullPostProps> = ({ title, blocks }) => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className='container'>
        <Typography variant='h4' className={styles.title}>
          {title}
        </Typography>
        {blocks.map((obj) => (
          <Typography
            className={styles.text}
            key={obj.id}
            dangerouslySetInnerHTML={{ __html: obj.data.text }}
          />
        ))}

        <div style={{ width: 250, marginLeft: -12 }}>
          <PostActions />
        </div>
        <div className='d-flex justify-between align-center mt-30 mb-30'>
          <div className={styles.userInfo}>
            <img
              src='http://www.old.ujd.edu.pl/media/pracownicy/f33439ed234f8f866335fbe7b600d767.jpg'
              alt='Avatar'
            />
            <b>Andrzej Zbrzezny</b>
            <span>+1685</span>
          </div>
          <div>
            <Button style={{ height: 40 }} variant='contained' className='mr-15'>
              <MessageIcon />
            </Button>
            <Button variant='contained'>
              <UserAddIcon />
              <b className='ml-10'>Подписаться</b>
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
