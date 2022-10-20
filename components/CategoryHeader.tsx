import React from 'react';

interface Props {
  title: string | string[];
  description: string;
}

const CategoryHeader = ({ title, description }: Props) => {
  return (
    <div className="inner">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CategoryHeader;
