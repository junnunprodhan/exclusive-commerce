'use client'
import { IconSearch } from "../assets/globalIcons";
import { IconBars } from "../assets/menuIcons";
import {useDispatch, useSelector} from "react-redux";
import {toggleMobileMenu} from "@/slices/toggleSlice";

function MobileMenuButton() {
    const dispatch  = useDispatch()

  return (
    <div className="md:hidden">
      {/* Mobile Search button */}
      <button
        onClick={()=>dispatch(toggleMobileMenu())}
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className=" text-gray-500 text-xl  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg  p-2.5 mr-1"
      >
        <IconSearch />
      </button>
      {/* Mobile Menu Button */}
      <button
        onClick={()=>dispatch(toggleMobileMenu())}
        type="button"
        className="inline-flex text-xl  items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <IconBars />
      </button>
    </div>
  );
}

export default MobileMenuButton;
