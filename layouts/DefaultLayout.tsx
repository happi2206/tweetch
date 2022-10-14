import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/SideBar';

const DefaultLayout = () => {
  return (
    <div className="pt-[60px] flex w-full">
      <SideBar />

      <div className="h-screen overflow-auto">
        <Main />
      </div>
    </div>
  );
};

export default DefaultLayout;
