import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Tabs from './Tabs';
interface Props {
  modalOpen: boolean;
  closeModal: () => void;
  isSignUp?: boolean;
}
const AuthenticationModal = ({ modalOpen, closeModal }: Props) => {
  const [isLoginText, setIsLoginText] = useState(true);
  return (
    <>
      {modalOpen && (
        <div className="fixed font-sans transition-all duration-300 ease-in-out left-0 sm:-left-2 z-[999] top-0">
          <div
            className="fixed top-0 left-0 z-20 w-screen h-screen overflow-hidden transition-opacity bg-black bg-opacity-75"
            onClick={() => {
              closeModal();
            }}
          ></div>

          <div className="flex items-center content-center w-screen h-screen px-5 md:px-0 sm:justify-center">
            <div
              className={` p-5 z-50 w-full md:w-7/12 xl:w-[30%]  bg-[#18181B] rounded  overflow-x-hidden `}
            >
              <span
                onClick={() => {
                  closeModal();
                }}
                className="flex justify-end pb-1 cursor-pointer -right- z-[1000]"
              >
                <Icon icon="iconoir:cancel" width={23} />
              </span>
              <div className="flex items-center justify-between py-3">
                <div></div>
                <div>
                  <h2 className="text-xl font-bold text-center">
                    {isLoginText ? 'Login to Tweetch 👾 ' : 'Join Tweetch 👩🏾‍🎤 '}
                  </h2>
                  <p className="pt-2 text-xs text-center text-gray-600">
                    You can only login or sign up with github or google for now.
                    (click on the icons to continue)
                  </p>
                </div>
              </div>

              <div className=" mt-4 w-full md:max-w-[380px] mx-auto md:h-auto md:min-h-[300px] py-12 md:py-0">
                <Tabs isloginTab={() => setIsLoginText(!isLoginText)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthenticationModal;
