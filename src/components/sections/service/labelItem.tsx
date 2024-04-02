import React from "react";

function LabelItem({
  item,
}: {
  item: { icons: React.ReactNode; title: string; label: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="bg-gray-500 rounded-full p-2 w-fit">
        <span className="w-12 h-12 text-4xl flex items-center justify-center rounded-full  bg-black text-white p-2">
          {item.icons}
        </span>
      </div>
      <div className="flex items-center flex-col gap-1">
        <h2 className="text font-bold text-black">{item.title}</h2>
        <p className="text-sm text-black">{item.label}</p>
      </div>
    </div>
  );
}

export default LabelItem;
