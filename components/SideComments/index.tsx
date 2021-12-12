import React from 'react';
import clsx from 'clsx';

import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';
import { CommentItem } from './CommentItem';

import data from '../../data';
import { Api } from '../../utils/api';
import { CommentType } from '../../utils/api/types';
import { useComments } from '../../hooks/useComments';

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);
  const { comments } = useComments();

  const toogleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toogleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible &&
        comments.map((obj) => (
          <CommentItem key={obj.id} text={obj.text} user={obj.user} post={obj.post} />
        ))}
    </div>
  );
};
