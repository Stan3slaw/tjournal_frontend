import React from 'react';
import clsx from 'clsx';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SideComments } from '../components/SideComments';

interface MainLayoutProps {
  contentFullWidth?: boolean;
  hideComments?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  className,
}) => {
  return (
    <>
      <Header />
      <div className={clsx('wrapper', className)}>
        <div className='leftSide'>
          <Sidebar />
        </div>
        <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
        {!hideComments && (
          <div className='rightSide'>
            <SideComments />
          </div>
        )}
      </div>
    </>
  );
};
