"use client";
import { useState } from "react";
import { IconUser } from "../assets/userIcons";
import AccountDialog from "./account_Dialog";

function HandleUserDialog() {
  const [activeDialog, setActiveDialog] = useState(false);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setActiveDialog((s) => !s)}
          className="flex text-xl items-center justify-center p-1 hover:brightness-90 bg-orange-600 rounded-full text-white "
        >
          <IconUser />
        </button>
        {/* Account Info dropdown */}
        <div
          className={` ${
            activeDialog ? "visible scale-100" : "invisible scale-0"
          } absolute z-20 transition-all duration-200 mt-1 origin-top-right bg-[#0B0D105C] backdrop-blur-md right-0 top-full font-normal  divide-y divide-gray-100 rounded shadow w-52 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <AccountDialog />
        </div>
      </div>
      <div
        onClick={() => setActiveDialog(false)}
        className={`${
          !activeDialog && "hidden"
        } absolute left-0 top-0 bg-transparent h-full w-full z-10`}
      ></div>
    </>
  );
}

export default HandleUserDialog;
