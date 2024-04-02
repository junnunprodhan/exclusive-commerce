import Link from "next/link";
interface Props {
  item: {
    title: string;
    icon: JSX.Element;
    pathname: string;
  };
  cartItem: number;
  currentPath: string;
}

function Tab({ item, currentPath, cartItem }: Props) {
  return (
    <Link
      href={item.pathname}
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <div
        className={`relative ${
          item.pathname === currentPath ? "text-primary" : "text-gray-500"
        } text-3xl group-hover:text-primary`}
      >
        {item.icon}
        {item.pathname === "/cart" && (
          <span className="absolute inline-flex items-center justify-center w-[18px] h-[18px] text-xs font text-white bg-red-500 rounded-full -top-[6px] -right-2 dark:border-gray-900">
            {cartItem}
          </span>
        )}
      </div>
      <span
        className={`text-sm ${
          item.pathname === currentPath ? "text-primary" : "text-gray-500"
        } group-hover:text-primary`}
      >
        {item.title}
      </span>
    </Link>
  );
}

export default Tab;
