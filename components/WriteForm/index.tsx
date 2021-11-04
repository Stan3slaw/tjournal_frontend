import React from 'react';
import dynamic from 'next/dynamic';

import { Button, Input } from '@material-ui/core';

import styles from './WriteForm.module.scss';

const Editor = dynamic(
  import('../Editor').then(
    (m) => m.Editor,
    (e) => null as never,
  ),
  { ssr: false },
);

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input classes={{ root: styles.fieldTitle }} placeholder='Заголовок' defaultValue={title} />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant='contained' color='primary'>
        Опубликовать
      </Button>
    </div>
  );
};
