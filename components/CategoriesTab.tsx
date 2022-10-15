import React from 'react';
import Remote from '../public/assets/images/console.svg';
import Mic from '../public/assets/images/microphone.svg';
import Headphones from '../public/assets/images/headphones.svg';
import Trophy from '../public/assets/images/trophy.svg';
import Paint from '../public/assets/images/pallette.svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const CategoriesTab = ({ currentTab }: { currentTab?: string }) => {
  const categories = [
    {
      image: Remote,
      title: 'Games',
      link: '/category/games',
    },
    {
      image: Mic,
      title: 'IRL',
      link: '/category/irl',
    },
    {
      image: Headphones,
      title: 'Music',
      link: '/category/music',
    },
    {
      image: Trophy,
      title: 'Esports',
      link: '/category/sports',
    },
    {
      image: Paint,
      title: 'Creative',
      link: '/category/creative',
    },
  ];

  return (
    <div className="p-2 md:p-8">
      <div className="grid gap-4 py-8 border-t border-gray-700 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map(
          (
            category: { image: StaticImageData; title: string; link: string },
            index: React.Key
          ) => (
            <div
              key={index}
              className={`cursor-pointer w-full h-[50px] bg-primary hover:bg-purple-600 flex justify-between items-center px-4 rounded-lg ${
                currentTab === category.link && 'border-4 border-white'
              } `}
            >
              <Link href={category.link}>
                <div className="flex items-center justify-between w-full">
                  <p className="text-2xl font-bold">{category.title}</p>
                  <Image src={category.image} alt="/" />
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CategoriesTab;
