"use client";
import { useState } from "react";
import { IconBxSend } from "../assets/globalIcons";

function NewsLatterInput() {
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative ">
      <input
        type="email"
        id="helper-text"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        className="dark:bg-gray-50 placeholder:text-gray-600 bg-black border border-gray-300 dark:text-gray-900 text-white text-sm rounded focus:outline-none focus:border-gray-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 "
        placeholder="Enter your email "
      />
      <div
        className={`absolute ${
          focus && "text-gray-500"
        } inset-y-0 right-0 flex items-center pr-3 pointer-events-none`}
      >
        <IconBxSend />
        <span className="sr-only">Search icon</span>
      </div>
    </div>
  );
}

export default NewsLatterInput;
