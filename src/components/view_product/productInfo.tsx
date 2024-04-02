import { IconRotate, IconTruckFast } from "../assets/servicesIcons";
import Rating from "../global/rating";
import CartActionButton from "./cartActionButton";

const sizes = ["xs", "s", "m", "l", "xl"];

function ProductInfo({ item }: { item: Product }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <h2 className="text-black font-bold text-2xl">{item.title}</h2>
        <div className="flex items-center gap-2">
          <Rating total={2.6} />
          <span className="text-gray-500 text-xs">(150 Reviews)</span>
          <span className="text-xs">|</span>
          <span className="text-green-600 text-xs">In Stock</span>
        </div>
        <span className="text-2xl text-black">$192.0</span>
        <p className="text-black text-sm">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        {/* Divider */}
        <div className="border-t  border-black"> </div>
        {/* Colors */}
        <div className="flex items-center gap-5">
          <span className="text-black text-xl">Colors:</span>
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="border-black p-0.5 rounded-full flex transition-all w-5 h-5 overflow-hidden border"
            >
              <span className="bg-primary w-full h-full rounded-full"></span>
            </button>
            <button
              type="button"
              className=" rounded-full flex transition-all w-5 h-5 overflow-hidden "
            >
              <span className="bg-slate-500 w-full h-full rounded-full"></span>
            </button>
          </div>
        </div>
        {/* Sizes */}
        <div className="flex items-center gap-5">
          <span className="text-black text-xl">Sizes:</span>
          <div className="flex gap-2 items-center">
            {sizes.map((item) => (
              <button
                key={item}
                type="button"
                className="text-black uppercase font-medium text-sm rounded-md hover:text-white transition-all hover:bg-primary hover:border-primary w-8 py-1  border "
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* Cart and Buy Action */}
        <CartActionButton />
        {/* Delivery method */}
        <div className="border divide-y divide-gray-400 border-gray-400 rounded">
          <div className="flex gap-5 items-center  p-4">
            <span className="text-3xl flex items-center">
              <IconTruckFast />
            </span>
            <div className="flex  flex-col ">
              <span className="text-black font-medium">Free Delivery</span>
              <span className="text-xs underline text-black font-medium">
                Enter your postal code for Delivery Availability
              </span>
            </div>
          </div>
          <div className="flex gap-5 items-center  p-4">
            <span className="text-3xl flex items-center">
              <IconRotate />
            </span>
            <div className="flex  flex-col ">
              <span className="text-black font-medium">Return Delivery</span>
              <span className="text-xs underline text-black font-medium">
                Free 30 Days Delivery Returns. Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
