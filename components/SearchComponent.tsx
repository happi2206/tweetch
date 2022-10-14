import React from 'react';
import { Icon } from '@iconify/react';
const SearchComponent = () => {
  return (
    <div className="hidden md:flex grow-[2] items-center justify-center">
      <div className=" text-gray-200 flex justify-between  max-w-[400px] w-full m-auto ">
        <div className="w-full rounded-l bg-secondary">
          <input
            type="text"
            className="w-full px-2 py-2 text-sm text-white bg-transparent border-none focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center px-2 py-2 bg-[#3a3a3d] rounded-r-md cursor-pointer">
          <Icon icon="akar-icons:search" />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
