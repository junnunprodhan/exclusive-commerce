"use client";
import TabsOne from "@/components/pages/forget/tabsOne";
import TabsTwo from "@/components/pages/forget/tabsTwo";
import { useState } from "react";

function TabsWrapper() {
  const [tabs, setTabs] = useState<"ONE" | "TWO">("ONE");
  return (
    <div className="py-10 mx-auto md:w-2/4 w-full flex flex-col gap-2">
      {tabs == "ONE" ? (
        <TabsOne setTabs={setTabs} />
      ) : (
        <TabsTwo setTabs={setTabs} />
      )}
    </div>
  );
}

export default TabsWrapper;
