import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Tooltip from './Tooltip';

interface Props {
  expandWidth: (expand: boolean) => void;
  expanded: boolean;
}
const StreamChat = ({ expandWidth, expanded }: Props) => {
  return (
    <div
      className={`relative h-[97vh]  ${
        expanded ? 'w-96 min-w-[16rem]' : 'hidden'
      } duration-500    overflow-y-scroll  bg-[#18181B] z-50`}
    >
      <div className="flex items-center justify-between p-2 text-gray-200 border-b border-gray-400">
        <div
          className="hidden w-18 md:block"
          onClick={() => expandWidth(!expanded)}
        >
          <span className="w-full text-white cursor-pointer">
            <Icon icon={`mdi:arrow-expand-right`} />
          </span>
        </div>
        <p className="text-xs font-semibold uppercase">Stream Chat</p>
        <Tooltip content={<span>Community</span>} direction="right">
          <span>
            <Icon icon="eva:people-outline" />
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default StreamChat;
