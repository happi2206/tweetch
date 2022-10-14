import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
interface Items {
  items: { title: string; isToggle?: boolean; isProfilePic?: boolean }[];
  icon: string;
  isRight?: boolean;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const MenuItems = ({ items, icon, isRight }: Items) => {
  return (
    <Menu as="div" className="relative text-left">
      <div className="flex">
        <Menu.Button>
          <Icon icon={icon} color="white" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`origin-top-left absolute ${
            isRight ? 'right-0' : 'left-0'
          }  mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1 text-white">
            <>
              {items &&
                items.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm cursor-pointer'
                        )}
                      >
                        {item.title}
                      </p>
                    )}
                  </Menu.Item>
                ))}
            </>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuItems;
