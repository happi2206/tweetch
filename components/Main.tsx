import React from 'react';
import Categories from './Categories';
import Header from './Header';
import CategoriesTab from './CategoriesTab';

const Main = () => {
  return (
    <div className="relative">
      <Header />
      <CategoriesTab />
      <Categories />
    </div>
  );
};

export default Main;
