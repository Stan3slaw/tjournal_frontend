import React from 'react';
import { setCookie } from 'nookies';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterFormSchema } from '../../../utils/validation';
import { FormField } from '../../FormField';
import { Button } from '@material-ui/core';
import { CreateUserDto } from '../../../utils/api/types';
import { UserApi } from '../../../utils/api';
import { Alert } from '@material-ui/lab';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const form = useForm({ resolver: yupResolver(RegisterFormSchema), mode: 'onChange' });
  const onSubmit = async (createUserDto: CreateUserDto) => {
    try {
      const data = await UserApi.register(createUserDto);
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '',
      });
      setErrorMessage('');
      console.log(data);
    } catch (err) {
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
