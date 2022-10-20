/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../public/assets/images/shinoby.webp';
import { useSession, signOut } from 'next-auth/react';
import { Icon } from '@iconify/react';
import { Button } from './Button';
import SearchComponent from './SearchComponent';
import MenuItems from './MenuItems';
import AuthenticationModal from './AuthenticationModal';

const Navigation = () => {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useState(false);

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
            <span className="hidden pr-3 sm:block">
              <Icon icon="tabler:crown" color="white" width={22} />
            </span>

            <Button secondary onClick={() => setModalOpen(true)}>
              Log In
            </Button>

            <div className="hidden sm:block">
              <Button onClick={() => setModalOpen(true)}>Sign Up</Button>
            </div>

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
            <div>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </div>

            <img
              src={session?.user?.image ? session.user.image : ''}
              width="35"
              height="35"
              className="rounded-full"
              alt="/"
            />

            <p className="pl-3 text-sm"> {session?.user?.name}</p>
          </div>
        )}
      </div>

      <AuthenticationModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(!modalOpen)}
      />
    </div>
  );
};

export default Navigation;
