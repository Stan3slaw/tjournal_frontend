import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { PostActions } from '../PostActions';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

import styles from './FullPost.module.scss';

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className='container'>
        <Typography variant='h4' className={styles.title}>
          Superjet, летящий из Волгограда в Москву, подал сигнал бедствия. Возможно, в полете
          произошла разгерметизация
        </Typography>
        <Typography>
          Самолет SSJ100, летящий из Волгограда в Москву, подал сигнал бедствия. Об этом сообщает
          «Интерфакс» со ссылкой на информированный источник. По данным источника, самолет резко
          снизился над Тамбовской областью.
        </Typography>
        <Typography>
          По данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной
          этого собеседник агентства назвал разгерметизацию.
        </Typography>
        <Typography>Самолет продолжает полет на высоте примерно 3000 метров.</Typography>
        <Typography>
          Источник не уточнил названия авиакомпании и номера рейса. Судя по данным Flightradar24,
          сейчас в небе находится один SSJ100, летящий в Москву из Волгограда. Это — самолет
          «Аэрофлота», выполняющий рейс SU6416. На момент написания заметки он уже пересек
          Тамбовскую область и подлетает к Москве.
        </Typography>

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
