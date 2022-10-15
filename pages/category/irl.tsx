import React from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
import CategoryHeader from '../../components/CategoryHeader';
const IRL = () => {
  const router = useRouter();
  return (
    <div className="categoriestab">
      <CategoryHeader
        title="IRL"
        description="The home for everything from working out to exploring the world to
          chatting and beyond!"
      />

      <CategoriesTab currentTab={router.pathname} />
    </div>
  );
};

export default IRL;
