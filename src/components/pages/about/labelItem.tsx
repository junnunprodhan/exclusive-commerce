export default function LabelItem({
  item,
}: {
  item: {
    id: string;
    icons: JSX.Element;
    title: string;
    label: string;
  };
}) {
  return (
    <div className="border border-gray-300 hover:shadow-lg hover:bg-primary flex flex-col items-center justify-center transition-all cursor-pointer gap-5 p-5 rounded group/label56">
      <div className="group-hover/label56:bg-gray-400 bg-gray-500 rounded-full p-2 w-fit">
        <span className="group-hover/label56:text-black group-hover/label56:bg-white text-white bg-black w-12 h-12 text-4xl flex transition-all items-center justify-center rounded-full   p-2">
          {item.icons}
        </span>
      </div>
      <div className="flex items-center flex-col gap-1">
        <h2 className="group-hover/label56:text-white text-2xl font-bold text-black transition-all">
          {item.title}
        </h2>
        <p className="group-hover/label56:text-white text-sm text-black transition-all">
          {item.label}
        </p>
      </div>
    </div>
  );
}
