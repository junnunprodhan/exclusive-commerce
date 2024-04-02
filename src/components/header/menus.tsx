"use client";
import { menus } from "@/constants/data";
import { RootState } from "@/store/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import MobileSearch from "./mobilesearch";
function Menus() {
  const pathname = usePathname();
  const { mobileMenu } = useSelector((s: RootState) => s.toggleState);
  const { status } = useSession();

  return (
    <>
      <div
        className={`${
          !mobileMenu && "hidden"
        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        id="navbar-search"
      >
        <MobileSearch />
        <ul className="flex flex-col p-4 gap-3 md:p-0 mt-4 font-medium border border-gray-100 rounded bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {menus.map((item, index) => {
            if (
              status === "authenticated" &&
              item.pathname === "/auth/signin"
            ) {
              return (
                <li key={index}>
                  <Link
                    href="/account"
                    className={`block relative hover:after:scale-100 ${
                      pathname === "/account"
                        ? "md:after:scale-100 after:scale-0 bg-gray-300  md:bg-inherit"
                        : "after:scale-0"
                    } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gray-400  after:transition-all py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:p-0 `}
                    aria-current="page"
                  >
                    Profile
                  </Link>
                </li>
              );
            }
            return (
              <li key={index}>
                <Link
                  href={item.pathname}
                  className={`block relative hover:after:scale-100 ${
                    pathname === item.pathname
                      ? "md:after:scale-100 after:scale-0 bg-gray-300  md:bg-inherit"
                      : "after:scale-0"
                  } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gray-400  after:transition-all py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:p-0 `}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          {/* Categories */}
          <li className="block md:hidden">
            <Link
              href="/"
              className={`block relative hover:after:scale-100 ${
                pathname === "/categories"
                  ? "md:after:scale-100 after:scale-0 bg-gray-300  md:bg-inherit"
                  : "after:scale-0"
              } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gray-400  after:transition-all py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:p-0 `}
              aria-current="page"
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menus;
