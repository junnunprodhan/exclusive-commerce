import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import Button from "@/components/global/button";
import TextInput from "@/components/global/textInput";
import CartList from "@/components/pages/cart/CartList";
import Link from "next/link";

function Cart() {
  return (
    <div className="container mb-20  min-h-screen">
      <div className="py-10">
        <Breadcrumb crumb={breadcrumb} />
      </div>

      <div>
        {/* Heading */}
        <ul className="grid grid-cols-5 p-4 items-center">
          <li className="col-span-2 text-sm">Product</li>
          <li className="col-span-1 text-sm">Price</li>
          <li className="col-span-1 text-sm">Quality</li>
          <li className="col-span-1 text-sm">Subtotal</li>
        </ul>

        {/* Product */}
        <CartList />

        {/* Action Go back or Sync */}
        <div className="grid gap-5 md:grid-cols-2 py-10 grid-cols-1">
          {/* Coupon Code */}
          <div className="flex flex-col gap-5">
            {/* Action Go back or Sync */}
            <div>
              <Link
                className={`text-black font-medium border bg-white border-gray-300 md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none`}
                href="/"
              >
                Return to shop
              </Link>
            </div>
            <div className="flex gap-2">
              <div>
                <TextInput name="coupon" placeholder="Coupon Code" />
              </div>
              <div>
                <Button title="Apply Coupon" />
              </div>
            </div>
          </div>
          {/* Total Calculation */}
          <div>
            <div className="border border-black p-5 rounded">
              <h2 className="text- font-bold">Cart Total</h2>
              <div className="divide-y divide-gray-400 flex flex-col">
                <div className="flex py-3 justify-between">
                  <span className="text-sm">Subtotal:</span>
                  <span className="text-sm">$110</span>
                </div>
                <div className="flex  py-3 justify-between">
                  <span className="text-sm">Shipping:</span>
                  <span className="text-sm">free</span>
                </div>
                <div className="flex  py-3 justify-between">
                  <span className="text-sm">Total</span>
                  <span className="text-sm">$110</span>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/checkout"
                  className={`text-white border border-gray-300 bg-primary md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none`}
                >
                  <span>Process to checkout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Cart",
    icon: null,
    pathname: null,
  },
];
