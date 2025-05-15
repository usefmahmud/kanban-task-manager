import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <div className='flex h-screen gap-12'>{children}</div>;
};

export default AppLayout;
