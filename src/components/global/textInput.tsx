import React from "react";

interface Props {
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  name: string;
  id?: string | undefined;
  value?: string | number | readonly string[] | undefined
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined
}
function TextInput({value,onKeyUp, placeholder, onClick, id, name, onChange, type }: Props) {
  return (
    <input
      name={name}
      id={id}
      value={value}
      onClick={onClick}
      onKeyUp={onKeyUp}
      onChange={onChange}
      type={type || "text"}
      className="block w-full p-2 pr-10 text-sm font-light text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white"
      placeholder={placeholder}
    />
  );
}

export default TextInput;
