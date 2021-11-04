import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterFormSchema } from '../../../utils/validation';
import { FormField } from '../../FormField';
import { Button } from '@material-ui/core';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({ resolver: yupResolver(RegisterFormSchema), mode: 'onChange' });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='fullname' label='Имя и фамилия' type='text' />
          <FormField name='email' label='Почта' type='email' />
          <FormField name='password' label='Пароль' type='password' />

          <div className='d-flex align-center justify-between'>
            <Button
              disabled={!form.formState.isValid}
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
