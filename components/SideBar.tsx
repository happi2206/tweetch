import React, { useState } from 'react';
import { rec_channels, top_channels } from '../data/users';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Tooltip from './Tooltip';
const SideBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className={`relative   ${
        visible ? 'w-64 min-w-[16rem]' : 'w-20'
      } duration-500 h-screen overflow-y-auto p-2 bg-[#1F1F23]`}
    >
      <div className="mt-20">
        <div
          className={`flex items-center ${
            visible ? 'justify-between' : 'justify-center'
          }`}
        >
          <p
            className={`${
              visible ? 'flex' : 'hidden'
            }  text-xs font-bold uppercase`}
          >
            Recommended Channels
          </p>

          <div
            className="hidden w-18 md:block"
            onClick={() => setVisible(!visible)}
          >
            <Tooltip content={<span>Expand</span>} direction="left">
              <span className="w-full text-white cursor-pointer">
                <Icon icon={`mdi:arrow-expand-${visible ? 'left' : 'right'}`} />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
      {rec_channels.map((item, index) => (
        <div
          key={index}
          className="inline-flex justify-center items-center w-full py-[2px]"
        >
          <div>
            <img
              src={item.avatar}
              width="30"
              height="30"
              alt="/"
              className="rounded-[50%]"
            />
          </div>
          <div
            className={`justify-between ${visible ? 'flex' : 'hidden'} w-full`}
          >
            <div>
              <p className="text-sm">{item.username}</p>
              <p className="text-xs text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center text-xs">
              <Icon icon="ci:dot-03-m" width={20} />
              {item.rank}K
            </p>
          </div>
        </div>
      ))}
      <div>
        <p
          className={`${
            visible ? 'flex' : 'hidden'
          }  py-4 text-sm font-bold uppercase `}
        >
          Top Channels
        </p>
        <p></p>
      </div>
      {top_channels.map((item, index) => (
        <div
          key={index}
          className="inline-flex items-center justify-center w-full py-[2px]"
        >
          <div>
            <Image src={item.avatar} width="30" height="30" alt="/" />
          </div>
          <div
            className={`justify-between ${visible ? 'flex' : 'hidden'} w-full`}
          >
            <div>
              <p className="text-sm">{item.username}</p>
              <p className="text-xs text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center text-xs">{item.rank}K</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
