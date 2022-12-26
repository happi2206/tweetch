import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Button } from './Button';
import Input from './Input';
import { signIn } from 'next-auth/react';
const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState('password');
  const [confirmpasswordVisibility, setConfirmPasswordVisibility] =
    useState('password');
  return (
    <div>
      <form className="space-y-5">
        <div className="my-4">
          <Input type="email" label="Email" required />
        </div>
        <div className="my-4">
          <Input
            type={passwordVisibility}
            label="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            togglePasswordType={(text: string) => setPasswordVisibility(text)}
            hasToggle
          />
        </div>
        <div className="my-4">
          <Input
            type={confirmpasswordVisibility}
            label="Confirm Password"
            required
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            togglePasswordType={(text: string) =>
              setConfirmPasswordVisibility(text)
            }
            hasToggle
          />
        </div>

        <div className="pt-4">
          <Button type="submit" full>
            Sign Up
          </Button>
        </div>
      </form>

      <p className="py-5 text-sm text-center">or</p>
      <div className="flex justify-center space-x-4">
        <div className="cursor-pointer" onClick={() => signIn()}>
          <Icon icon="ant-design:github-filled" />
        </div>
        <div className="cursor-pointer" onClick={() => signIn()}>
          <Icon icon="akar-icons:google-fill" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
