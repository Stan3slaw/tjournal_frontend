import React from 'react';
import { setCookie } from 'nookies';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterFormSchema } from '../../../utils/validation';
import { FormField } from '../../FormField';
import { Button } from '@material-ui/core';
import { CreateUserDto } from '../../../utils/api/types';
import { UserApi } from '../../../utils/api/user';
import { Alert } from '@material-ui/lab';
import { setUserData } from '../../../redux/slices/user';
import { useAppDispatch } from '../../../redux/hooks';
import { Api } from '../../../utils/api';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = React.useState('');
  const form = useForm({ resolver: yupResolver(RegisterFormSchema), mode: 'onChange' });

  const onSubmit = async (createUserDto: CreateUserDto) => {
    try {
      const data = await Api().user.register(createUserDto);
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (err: any) {
      console.warn('Registration error', err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='fullName' label='Имя и фамилия' type='text' />
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
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color='primary' variant='text'>
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
