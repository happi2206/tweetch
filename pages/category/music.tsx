import React from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
const Music = () => {
  const router = useRouter();
  return (
    <div className="relative mt-20">
      <div className="px-8 space-y-4">
        <h3 className="text-6xl font-bold text-gray-200">Music</h3>
        <p className="font-semibold text-gray-400 ">
          Your favorite artists and all the best live performances, music
          production, and special events
        </p>
      </div>
      <CategoriesTab currentTab={router.pathname} />
    </div>
  );
};

export default Music;
