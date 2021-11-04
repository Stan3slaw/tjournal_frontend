import React from 'react';
import Link from 'next/link';

import { Paper, Button, IconButton, Avatar } from '@material-ui/core';

import {
  Menu as MenuIcon,
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  NotificationsNoneOutlined as NotificationIcon,
  ExpandMoreOutlined as ArrowBottomIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className='d-flex align-center'>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Link href='/'>
          <a>
            <img height={35} className='mr-20' src='/static/img/logo.svg' alt='Logo' />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder='Поиск' />
        </div>

        <Link href='/write'>
          <a>
            <Button variant='contained' className={styles.penButton}>
              Новая запись
              {/* <PenIcon /> */}
            </Button>
          </a>
        </Link>
      </div>
      <div className='d-flex align-center'>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href='/profile/1'>
          <a className='d-flex align-center'>
            <Avatar
              className={styles.avatar}
              alt='Remy Sharp'
              src='http://www.old.ujd.edu.pl/media/pracownicy/f33439ed234f8f866335fbe7b600d767.jpg'
            />
            <ArrowBottomIcon />
          </a>
        </Link>
      </div>
    </Paper>
  );
};
