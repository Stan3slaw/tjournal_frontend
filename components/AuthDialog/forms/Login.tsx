import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, TextField } from '@material-ui/core';
import { LoginFormSchema } from '../../../utils/validation';
import { FormField } from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({ resolver: yupResolver(LoginFormSchema), mode: 'onChange' });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' type='email' />
          <FormField name='password' label='Пароль' type='password' />

          <div className='d-flex align-center justify-between'>
            <Button
              disabled={!form.formState.isValid}
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
