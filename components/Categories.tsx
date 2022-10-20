import React from 'react';
import CategoriesItem from './CategoriesItem';
import { categoryData } from '../data/categories';
const Categories = () => {
  return (
    <div id="categories" className="px-2 md:px-8">
      <h2 className="px-2 text-xl font-bold text-gray-200">
        <span className="text-[#9147ff]">Categories</span> we think you&apos;ll
        like
      </h2>

      <div className="grid grid-cols-2 gap-2 py-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 2xl:grid-cols-10">
        {categoryData.map((item) => (
          <CategoriesItem
            image={item.image}
            title={item.title}
            viewers={item.viewers}
            tag1={item.tag1}
            tag2={item.tag2}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
