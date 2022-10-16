import React from 'react';
import Spinner from './Spinner';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
  outlineprimary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
  rounded?: boolean;
  full?: boolean;
  secondary?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  type = 'button',
  secondary,
  isSubmitting,
}) => {
  return (
    <button
      className={`px-3 py-1 rounded text-sm font-semibold  ${
        secondary
          ? 'bg-secondary dark:text-gray-200'
          : 'bg-primary dark:text-white'
      }  mr-2 cursor-pointer 
      } 
       ${isSubmitting && 'cursor-not-allowed opacity-75'}`}
      disabled={isSubmitting}
      type={type}
      onClick={onClick}
    >
      <span className="flex items-center justify-center">
        {isSubmitting && <Spinner />}
        {children}
      </span>
    </button>
  );
};
