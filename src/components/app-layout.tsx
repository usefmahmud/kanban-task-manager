import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className='font-lxgwen flex h-screen gap-12 overflow-x-auto p-10'>
      {children}
    </div>
  );
};

export default AppLayout;
