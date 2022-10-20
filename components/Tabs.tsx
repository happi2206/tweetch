import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

interface Props {
  isloginTab: (arg: boolean) => void;
}

const Tabs = ({ isloginTab }: Props) => {
  const [loginTab, setLoginTab] = useState(true);

  const handleTab = (tab: boolean) => {
    isloginTab(tab);
    setLoginTab(tab);
  };
  return (
    <div>
      <div className="flex items-center space-x-3 border-b border-gray-700">
        <p
          onClick={() => handleTab(true)}
          className={`text-sm font-bold cursor-pointer pb-1 ${
            loginTab
              ? 'text-purple-400 border-b-2  border-purple-400'
              : 'text-gray-300'
          } `}
        >
          Log In
        </p>
        <p
          onClick={() => handleTab(false)}
          className={`text-sm font-bold cursor-pointer pb-1 ${
            !loginTab
              ? 'text-purple-400 border-b-2  border-purple-400'
              : 'text-gray-300'
          } `}
        >
          Sign Up
        </p>
      </div>

      {loginTab ? <Login /> : <SignUp />}
    </div>
  );
};

export default Tabs;
