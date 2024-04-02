import Link from "next/link";
import ImageFade from "../../global/imageFade";

function CartItem({ item }: { item: CartList }) {
  if (!item.product) {
    return (
      <div className="my-20 flex items-center justify-center">
        <span className="text-primary text-xl font-bold">
          Product is Removed
        </span>
      </div>
    );
  } else {
    const { product } = item;
    return (
      <div className="grid grid-cols-5 p-4 hover:bg-gray-100 rounded items-center">
        <div className="md:col-span-2 col-span-5">
          <Link
            className="flex  items-center gap-2 h-full"
            href={{ pathname: "view", query: { product: product.id } }}
          >
            <ImageFade
              className="w-12 h-12 rounded opacity-0 duration-500 transition-all"
              src={product.images[0]}
              width={50}
              height={50}
              priority={true}
              alt="Cover Image"
            />
            <h2 className="text-sm hover:text-primary text-black">
              {product.title}
            </h2>
          </Link>
        </div>
        <div className="md:col-span-3 col-span-5 items-center grid grid-cols-3  ">
          <div className="col-span-1 text-center md:text-left text-sm">
            <span className="text-sm">${product.regularPrice}</span>
          </div>
          <div className="col-span-1 flex justify-center md:justify-normal text-sm">
            <select
              name="quantity"
              defaultValue={1}
              className="text-sm  text-black focus:outline-none rounded-lg  block p-2.5 border border-gray-300"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="col-span-1 text-center md:text-left text-sm">
            <span className="text-sm">${product.regularPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
