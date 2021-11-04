import type { NextPage } from 'next';

import {
  Paper,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { MainLayout } from '../layouts/MainLayout';
import { FollowButton } from '../components/FollowButton';

const Rating: NextPage = () => {
  return (
    <MainLayout>
      <Paper elevation={0} className='pl-20 pt-20 pr-20 mb-20'>
        <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
          рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className='mt-10' value={0} indicatorColor='primary' textColor='primary'>
          <Tab label='Август' />
          <Tab label='За 3 месяца' />
          <Tab label='За всё время' />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label='Users table'>
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align='right'>Рейтинг</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                <span className='mr-15'>1</span>Вася Пупкин
              </TableCell>
              <TableCell align='right'>540</TableCell>
              <TableCell align='right'>
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export default Rating;