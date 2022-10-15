import React from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
import CategoryHeader from '../../components/CategoryHeader';
const Creative = () => {
  const router = useRouter();
  return (
    <div className="categoriestab">
      <CategoryHeader
        title="Creative"
        description="A place to share creativity through painting, cooking, programming, and more!"
      />

      <CategoriesTab currentTab={router.pathname} />
    </div>
  );
};

export default Creative;
