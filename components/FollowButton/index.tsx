import React from 'react';
import { Button } from '@material-ui/core';
import { AddOutlined as AddIcon, CheckOutlined as CheckIcon } from '@material-ui/icons';

import styles from './FollowButton.module.scss';

export const FollowButton: React.FC = () => {
  const [followed, setFollowed] = React.useState(false);

  return (
    <Button
      style={{ minWidth: 30, width: 35, height: 30 }}
      variant='contained'
      onClick={() => setFollowed(!followed)}>
      {!followed ? <AddIcon /> : <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} />}
    </Button>
  );
};
