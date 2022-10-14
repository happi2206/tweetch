import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Props {
  image: string;
  title: string;
  viewers: string;
  tag1: string;
  tag2?: string;
}

const CategoriesItem = (props: Props) => {
  return (
    <div className="p-2">
      <Image src={props.image} width="261" height="350" alt="/" />
      <div>
        <p className="font-bold">{props.title}</p>
        <p className="text-sm text-gray-500 py-[2px]">{props.viewers}</p>
        <div className="flex">
          <div>
            <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
              {props.tag1}
            </p>
          </div>
          <div>
            {props.tag2 && (
              <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
                {props.tag2}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItem;
