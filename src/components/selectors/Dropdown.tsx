import React from 'react';

interface DropdownProps {
  name: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  defaultValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  value,
  options,
  defaultValue,
  placeholder = '-',
  disabled,
  onChange,
}) => {
  return (
    <select
      className='text-gray-900 w-full'
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
    >
      <option value='-'>{placeholder}</option>
      {options.map(({ value, label }, index) => (
        <option value={value} key={index}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
