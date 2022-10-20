import { Icon } from '@iconify/react';
import React from 'react';

interface Props {
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  value?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  accept?: string;
  required: boolean;
  togglePasswordType?: (text: string) => void;
  hasToggle?: boolean; //
}

const Input = ({
  label,
  placeholder = label,
  onChange,
  type = 'text',
  disabled,
  required,
  accept,
  value,
  id,
  name,
  togglePasswordType,
  hasToggle,
}: Props) => {
  const togglePassword = () => {
    if (!togglePasswordType) return;

    type === 'text'
      ? togglePasswordType('password')
      : togglePasswordType('text');
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <label className="mb-2 text-sm font-bold text-left text-white">
          {label}
        </label>
        <div className="relative">
          <input
            className="w-full h-auto px-2 py-2 text-xs border border-black border-solid rounded-md placeholder:text-gray-400 bg-secondary focus:outline-0 focus:bg-black focus:border-primary focus:border-[3px]"
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            disabled={disabled}
            required={required}
            accept={accept}
            value={value}
            id={id}
            name={name}
          />

          {hasToggle && (
            <div
              className="absolute w-2 cursor-pointer right-4 inset-y-2"
              onClick={togglePassword}
            >
              <Icon icon="akar-icons:eye-open" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
