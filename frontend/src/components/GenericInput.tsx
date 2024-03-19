"use client";
import { useState } from "react";

interface GenericInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const GenericInput = ({ value, setValue }: GenericInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`bg-gray-100 border-2  rounded-lg p-2 ${
        focused ? "border-purple-900" : "border-gray-100"
      }`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`bg-gray-100 px-2 rounded-lg w-full outline-none text-purple-900`}
      />
    </div>
  );
};
