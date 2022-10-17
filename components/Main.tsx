import React from 'react';
import Categories from './Categories';
import Header from './Header';
import CategoriesTab from './CategoriesTab';
import LiveChannels from './LiveChannels';

const Main = () => {
  return (
    <div className="relative">
      <Header />
      <LiveChannels />
      <CategoriesTab />
      <Categories />
    </div>
  );
};

export default Main;
