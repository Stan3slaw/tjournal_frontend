import React from 'react';
import dynamic from 'next/dynamic';

import { Button, Input } from '@material-ui/core';

import styles from './WriteForm.module.scss';
import { Api } from '../../utils/api';
import { PostType } from '../../utils/api/types';
import { OutputData } from '@editorjs/editorjs';
import { useRouter } from 'next/router';

interface WriteFormProps {
  data?: PostType;
}

const Editor = dynamic(
  import('../Editor').then(
    (m) => m.Editor,
    (e) => null as never,
  ),
  { ssr: false },
);

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState(data?.title || '');
  const [blocks, setBlocks] = React.useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setLoading(true);
      const obj = {
        title,
        body: blocks,
      };

      if (data) {
        const post = await Api().post.update(data.id, obj);
      } else {
        const post = await Api().post.create(obj);
        await router.push(`/write/${post.id}`);
      }
    } catch (err) {
      console.warn('Create post', err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.fieldTitle }}
        placeholder='Заголовок'
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        disabled={isLoading || !title || !blocks.length}
        onClick={onAddPost}
        variant='contained'
        color='primary'>
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </div>
  );
};
