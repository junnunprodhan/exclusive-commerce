"use client";
import { usePathname } from "next/navigation";
import { IconHeart } from "../assets/globalIcons";
import { IconHome } from "../assets/menuIcons";
import { IconCart3 } from "../assets/productIcons";
import { IconUser } from "../assets/userIcons";
import Tab from "./tab";

function MobileTabMenu() {
  const pathname = usePathname();
  const cartItems = 3;
  return (
    <>
      <div className="fixed md:hidden block bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {mobileTabs.map((item, index) => (
            <Tab
              cartItem={cartItems}
              currentPath={pathname}
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileTabMenu;

const mobileTabs = [
  {
    title: "Home",
    pathname: "/",
    icon: <IconHome />,
  },
  {
    title: "Wishlist",
    pathname: "/wishlist",
    icon: <IconHeart />,
  },
  {
    title: "Cart",
    pathname: "/cart",
    icon: <IconCart3 />,
  },
  {
    title: "Account",
    pathname: "/account",
    icon: <IconUser />,
  },
];
