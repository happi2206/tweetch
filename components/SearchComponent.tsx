import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const route = useRouter();
  const getSearchValue = () => {
    route.push(`/search/${searchValue}`);
  };
  return (
    <div className="hidden md:flex grow-[2] items-center justify-center">
      <div className=" text-gray-200 flex justify-between  max-w-[400px] w-full m-auto ">
        <div className="w-full rounded-l bg-secondary">
          <input
            type="text"
            className="w-full px-2 py-2 text-sm text-white bg-transparent border-none focus:outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                getSearchValue();
              }
            }}
          />
        </div>
        <div
          onClick={getSearchValue}
          className="flex items-center px-2 py-2 bg-[#3a3a3d] rounded-r-md cursor-pointer"
        >
          <Icon icon="akar-icons:search" />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
