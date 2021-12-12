import type { GetServerSideProps, NextPage } from 'next';

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

import { Api } from '../utils/api';
import { UserResponse } from '../utils/api/types';

interface RatingPageProps {
  users: UserResponse[];
}

const Rating: NextPage<RatingPageProps> = ({ users }) => {
  return (
    <MainLayout>
      <Paper elevation={0} className='pl-20 pt-20 pr-20 mb-20'>
        <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
          Рейтинг пользователей
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
            {users.map((obj) => (
              <TableRow key={obj.id}>
                <TableCell component='th' scope='row'>
                  <span className='mr-15'>{obj.id}</span>
                  {obj.fullName}
                </TableCell>
                <TableCell align='right'>{obj.commentsCount * 2}</TableCell>
                <TableCell align='right'>
                  <FollowButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const users = await Api().user.getAll();

    return {
      props: { users },
    };
  } catch (err) {
    console.log('Rating page', err);
    return { props: {}, redirect: { destination: '/', permanent: false } };
  }
};

export default Rating;
