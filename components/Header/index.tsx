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
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';
import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  React.useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

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
      <div className='d-flex align-center '>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {userData ? (
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
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      <AuthDialog visible={authVisible} onClose={closeAuthDialog} />
    </Paper>
  );
};
