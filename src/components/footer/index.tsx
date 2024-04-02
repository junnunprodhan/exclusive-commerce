import { brandInfo } from "@/constants/default_config";
import ListFive from "./listFive";
import ListFour from "./listFour";
import ListOne from "./listOne";
import ListThree from "./listThree";
import ListTwo from "./listTwo";

function Footer() {
  return (
    <>
      {/* Menu section */}
      <footer className="bg-black md:pb-0 pb-16 dark:bg-white">
        <div className="container">
          <div className="mx-auto w-full max-w-screen-xl  py-10">
            <div className="grid grid-cols-2 gap-10  py-6 lg:py-8 md:grid-cols-3 lg:grid-cols-5">
              <ListOne />
              <ListTwo />
              <ListThree />
              <ListFour />
              <ListFive />
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-gray-600 flex items-center justify-center">
          {/* Copyright */}
          <span className=" text-xs md:text-sm text-gray-500 text-center dark:text-gray-700">
            © Copyright {brandInfo.brandName} {new Date().getFullYear()}. All
            right reserved
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
