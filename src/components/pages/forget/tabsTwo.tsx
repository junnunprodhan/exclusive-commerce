"use client";

import { CircleSpinner } from "@/components/assets/globalIcons";
import TextInput from "@/components/global/textInput";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setTabs: Dispatch<SetStateAction<"ONE" | "TWO">>;
}
function TabsTwo(Props: Props) {
  return (
    <>
      <TextInput name="forget-password" placeholder="Enter New password" />
      <div className="flex justify-end">
        <button className=" bg-primary text-white rounded hover:brightness-75 transition-all text-xs  py-3 px-5 focus:outline-none">
          <div className="flex justify-center items-center gap-2">
            <span className="w-4 h-4  flex">
              <CircleSpinner />
            </span>
            <span>Submit</span>
          </div>
        </button>
      </div>
    </>
  );
}

export default TabsTwo;
