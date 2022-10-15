import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { videointerface, content } from '../interfaces/categories';
interface Props {
  image: string;
  title: string;
  viewers: string;
  tag1: string;
  tag2?: string;
  channelImage: string;
  channelName: string;
}

const VideoPreview = (props: Props) => {
  return (
    <div className="p-2">
      <Image
        src={props.image}
        alt="/"
        width={400}
        height={200}
        className="object-cover"
      />
      <div>
        <p className="font-bold">{props.title}</p>
        <p className="text-sm text-gray-500 py-[2px]">{props.viewers}</p>
        <div className="flex">
          <div>
            {/* <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
              {props.tag1}
            </p> */}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              {' '}
              <Image
                src={props.channelImage}
                alt="/"
                width={20}
                height={20}
                className="object-cover rounded-[50%]"
              />
              <p className="text-xs">{props.channelName}</p>
            </div>
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

export default VideoPreview;
