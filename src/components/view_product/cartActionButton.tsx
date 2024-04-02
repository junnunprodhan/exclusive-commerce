import { IconHeart } from "../assets/globalIcons";
import { IconMinus, IconPlus } from "../assets/productIcons";

function CartActionButton() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <button
            type="button"
            className="text-black uppercase font-medium hover:border-primary border-gray-400 text-xlf flex justify-center items-center rounded-l-md hover:text-white transition-all hover:bg-primary w-10 p-2 h-10 border "
          >
            <IconMinus />
          </button>
          <span className="border-y border-gray-400 h-10 font-bold text-xl flex items-center justify-center px-5">
            2
          </span>
          <button
            type="button"
            className="text-black uppercase font-medium hover:border-primary border-gray-400 text-xlf flex justify-center items-center rounded-r-md hover:text-white transition-all hover:bg-primary w-10 p-2 h-10 border "
          >
            <IconPlus />
          </button>
        </div>
      </div>
      {/* Add to cart */}
      <div>
        <button
          type="button"
          className="text-white uppercase font-medium  border-transparent text-sm  rounded-md  transition-all bg-primary hover:bg-white hover:text-primary hover:border-primary  py-2 px-5 h-10 border "
        >
          Add to cart
        </button>
      </div>
      <div>
        <button
          type="button"
          className="text-gray-500 text-xl uppercase font-medium  border-gray-400 rounded-md hover:text-white hover:border-primary transition-all hover:bg-primary px-2 h-10 border "
        >
          <IconHeart />
        </button>
      </div>
    </div>
  );
}

export default CartActionButton;
