import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import Logo from '../public/assets/images/shinoby.webp';
import { Menu, Transition } from '@headlessui/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Icon } from '@iconify/react';
import { Button } from './Button';
import SearchComponent from './SearchComponent';
import MenuItems from './MenuItems';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { data: session } = useSession();

  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#18181B] mb-[2px] z-10">
      <div className="flex items-center justify-start grow">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="tweetch logo"
              width="36"
              height="36"
              className="z-10 cursor-pointer"
            />
            <p className="p-4 font-bold text-white hover:text-[#9147ff] cursor-pointer">
              Browse
            </p>
          </div>
        </Link>

        <div className="p-4">
          <MenuItems
            items={[
              { title: 'About' },
              { title: 'Account' },
              { title: 'Settings' },
            ]}
            icon="entypo:dots-three-vertical"
          />
        </div>
      </div>
      <SearchComponent />
      <div className="items-center justify-end hidden md:flex grow">
        {!session ? (
          <div className="flex items-center">
            <span className="pr-3">
              <Icon icon="tabler:crown" color="white" width={22} />
            </span>

            <Button secondary>Log In</Button>
            <Button>Sign Up</Button>

            <MenuItems
              isRight
              items={[
                { title: 'Dark Theme', isToggle: true },
                { title: 'Log In' },
                { title: '', isProfilePic: true },
              ]}
              icon="bx:user"
            />
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/account">
              <Button>Account</Button>
            </Link>

            <Image
              src={session?.user?.image ? session.user.image : ''}
              width="35"
              height="35"
              className="rounded-full"
              alt="/"
            />
          </div>
        )}
      </div>

      <div
        onClick={handleNav}
        className="z-10 block text-white cursor-pointer md:hidden"
      >
        {nav ? (
          <Icon icon="ant-design:close-outlined" />
        ) : (
          <Icon icon="heroicons-solid:menu-alt-2" width={20} />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
        }
      >
        <ul className="text-center">
          {/* {['Home', 'Live Channels', 'Top Categories', 'Account'].map(
            (item, index) => (
              <li key={index}
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold"
              >
                <Link href="/">Home</Link>
              </li>
            )
          )} */}
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#live">Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#categories">Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/account">account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
