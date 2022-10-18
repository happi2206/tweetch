import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../public/assets/images/shinoby.webp';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Icon } from '@iconify/react';
import { Button } from './Button';
import SearchComponent from './SearchComponent';
import MenuItems from './MenuItems';

const Navigation = () => {
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
      <div className="flex items-center justify-end grow">
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
              <div>
                <Button>Account</Button>
              </div>
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
    </div>
  );
};

export default Navigation;
