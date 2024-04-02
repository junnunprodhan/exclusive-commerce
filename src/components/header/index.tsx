import { brandInfo } from "@/constants/default_config";
import Link from "next/link";
import { ArrowRightIcon } from "../assets/menuIcons";
import ListGroup from "../sections/hero/listgroup";
import DesktopSearch from "./desktopsearch";
import IconMenus from "./iconMenus";
import Menus from "./menus";
import MobileMenuButton from "./mobilemenubutton";
import TopHeader from "./topheader";

function Header() {
  return (
    <div className="border-b  border-gray-300 ">
      <TopHeader />
      <div className="container">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 lg:mt-4">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {brandInfo.brandName}
              </span>
            </Link>
            <div className="flex md:order-2 justify-between md:mt-2 md:w-full lg:w-auto gap-7 items-center flex-wrap ">
              {/* Mobile category list */}
              <div className="lg:hidden relative group/category md:block hidden">
                <div className="cursor-pointer flex items-center gap-2  group-hover/category:gap-3 transition-all">
                  <span>Category </span>
                  <span className="rotate-90">
                    <ArrowRightIcon />
                  </span>
                </div>
                <div className="absolute top-full hidden group-hover/category:block z-20 left-0 w-[220px] py-2 rounded bg-white">
                  <ListGroup />
                </div>
              </div>
              <div className="relative hidden md:block">
                {/* Desktop Search Input*/}
                <DesktopSearch />
              </div>
              <IconMenus />
              <MobileMenuButton />
            </div>
            {/* All Menus */}
            <Menus />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
