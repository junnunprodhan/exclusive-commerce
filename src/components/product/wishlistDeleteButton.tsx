import { IconDeleteBin6Line } from "../assets/productIcons";

function WishlistDeleteButton() {
  return (
    <div className="gap-2 p-2 flex flex-col">
      <button
        type="button"
        className="text-gray-500 bg-white hover:bg-gray-300 rounded-full p-[6px] inline-flex items-center  dark:bg-gray-600 dark:hover:bg-gray-700 "
      >
        <IconDeleteBin6Line />
      </button>
    </div>
  );
}

export default WishlistDeleteButton;
