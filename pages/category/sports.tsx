import React from 'react';
import CategoriesTab from '../../components/CategoriesTab';
import { useRouter } from 'next/router';
import CategoryHeader from '../../components/CategoryHeader';

const Sports = () => {
  const router = useRouter();
  return (
    <div className="categoriestab">
      <CategoryHeader
        title="Esports"
        description="Live tournaments, match highlights, and your favorite pro players all in one place"
      />

      <CategoriesTab currentTab={router.pathname} />
    </div>
  );
};

export default Sports;
