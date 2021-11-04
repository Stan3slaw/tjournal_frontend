import React from 'react';

import { Dialog, DialogContent, DialogContentText, Typography } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './AuthDialog.module.scss';

import { MainForm } from './forms/Main';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';

interface AuthDialogProps {
  visible: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ visible, onClose }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');
  return (
    <Dialog open={visible} onClose={onClose} maxWidth='xs' fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход в RJ'
              ) : (
                <p onClick={() => setFormType('main')} className={styles.backTitle}>
                  <ArrowBackIcon />К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')} />}
            {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
            {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
