import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Paper, Typography } from '@material-ui/core';

import { PostActions } from '../PostActions';

import styles from './Post.module.scss';

interface PostProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({ id, title, description, imageUrl }) => {
  return (
    <Paper elevation={0} className='p-20' classes={{ root: styles.paper }}>
      <Typography variant='h5' className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
      </Typography>
      <Typography className='mt-10 mb-15'>{description}</Typography>
      <div className={styles.imgContainer}>
        {imageUrl && (
          <Image
            src='https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/'
            alt='img'
            width={600}
            height={500}
          />
        )}
      </div>
      <PostActions />
    </Paper>
  );
};
