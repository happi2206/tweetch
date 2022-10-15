import React from 'react';

import SideBar from '../components/SideBar';

interface Props {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="pt-[60px] flex w-full">
      <SideBar />

      <div className="w-full h-screen overflow-y-auto">{children}</div>
    </div>
  );
};

export default DefaultLayout;
