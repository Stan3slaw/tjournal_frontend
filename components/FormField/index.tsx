import React from 'react';
import { useFormContext } from 'react-hook-form';

import { TextField } from '@material-ui/core';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
  const { formState, register } = useFormContext();
  return (
    <TextField
      className='mb-20'
      size='small'
      variant='outlined'
      fullWidth
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      label={label}
      type={type}
      {...register(name)}
    />
  );
};
