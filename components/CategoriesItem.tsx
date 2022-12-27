import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  image: string;
  title: string;
  viewers: string;
  tag1: string;
  tag2?: string;
  search?: string;
}

const CategoriesItem = (props: Props) => {
  const [color, setColor] = useState('');
  const colors = ['red', 'green', 'yellow', 'blue'];
  const rando = Math.floor(Math.random() * 3);
  const temp = colors[rando];
  console.log('tea,', temp);

  // for (let i = 0; i < colors.length; i++) {
  //   const tem = colors[rando];
  //   console.log(tem);
  //   console.log(color);
  // }
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  console.log(`#${randomColor}`);
  return (
    <Link href={`search/${props.title}`}>
      <div className="p-2 cursor-pointer ">
        <Image
          src={props.image}
          width="261"
          height="350"
          alt="/"
          className="videopreview"
          style={{ boxShadow: '' }}
        />
        <div>
          <p className="text-sm font-bold">{props.title}</p>
          <p className="text-xs text-gray-500 py-[2px]">{props.viewers}</p>
          <div className="flex space-x-2">
            <div>
              <p className="tags">{props.tag1}</p>
            </div>
            <div>{props.tag2 && <p className="tags">{props.tag2}</p>}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesItem;
