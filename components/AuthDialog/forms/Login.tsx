import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from '@material-ui/lab/Alert';

import { Button } from '@material-ui/core';
import { LoginFormSchema } from '../../../utils/validation';
import { FormField } from '../../FormField';
import { LoginUserDto } from '../../../utils/api/types';
import { UserApi } from '../../../utils/api/user';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';
import { setCookie } from 'nookies';
import { Api } from '../../../utils/api';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState('');
  const form = useForm({ resolver: yupResolver(LoginFormSchema), mode: 'onChange' });

  const onSubmit = async (loginUserDto: LoginUserDto) => {
    try {
      const data = await Api().user.login(loginUserDto);
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (err: any) {
      console.warn('Login error', err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' type='email' />
          <FormField name='password' label='Пароль' type='password' />
          {errorMessage && (
            <Alert severity='error' className='mb-20'>
              {errorMessage}
            </Alert>
          )}

          <div className='d-flex align-center justify-between'>
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type='submit'
              color='primary'
              variant='contained'>
              Войти
            </Button>
            <Button onClick={onOpenRegister} color='primary' variant='text'>
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
