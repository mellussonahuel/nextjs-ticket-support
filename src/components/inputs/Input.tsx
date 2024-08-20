import React from 'react';

interface InputProps {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <input
      name={name}
      value={value}
      className='text-gray-900 text-xs p-1 w-full'
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
