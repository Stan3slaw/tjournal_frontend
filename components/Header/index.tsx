import React from 'react';
import Link from 'next/link';

import { Paper, Button, IconButton, Avatar, List, ListItem } from '@material-ui/core';

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
import { PostType } from '../../utils/api/types';
import { Api } from '../../utils/api';

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [posts, setPosts] = React.useState<PostType[]>([]);

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

  const handleChangeInput = async (e: any) => {
    setSearchValue(e.target.value);
    try {
      const { posts } = await Api().post.search({ title: e.target.value });
      setPosts(posts);
    } catch (err) {
      console.warn(err);
    }
  };

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
          <input value={searchValue} onChange={handleChangeInput} placeholder='Поиск' />
          {posts.length > 0 && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                {posts.map((obj) => (
                  <Link key={obj.id} href={`/news/${obj.id}`}>
                    <a>
                      <ListItem button>{obj.title}</ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
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
