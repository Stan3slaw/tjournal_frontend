import React from 'react';
import clsx from 'clsx';

import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';
import { CommentItem } from './CommentItem';

import data from '../../data';

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);
  const toogleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toogleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
