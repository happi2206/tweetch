import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  image: string;
  title: string;
  viewers: string;
  tag1: string;
  tag2?: string;
  search?: string;
}

const CategoriesItem = (props: Props) => {
  return (
    <Link href={`search/${props.title}`}>
      <div className="p-2 cursor-pointer ">
        <Image
          src={props.image}
          width="261"
          height="350"
          alt="/"
          className="videopreview"
        />
        <div>
          <p className="text-sm font-bold">{props.title}</p>
          <p className="text-xs text-gray-500 py-[2px]">{props.viewers}</p>
          <div className="flex space-x-2">
            <div>
              <p className="text-xs bg-gray-700 rounded-full inline-block p-[2px] px-3">
                {props.tag1}
              </p>
            </div>
            <div>
              {props.tag2 && (
                <p className="text-xs bg-gray-700 rounded-full inline-block p-[2px] px-3">
                  {props.tag2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesItem;
