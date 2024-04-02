import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import Button from "@/components/global/button";
import TextInput from "@/components/global/textInput";
import BillingForm from "@/components/pages/checkout/billingForm";
import ProductItem from "@/components/pages/checkout/productItem";
import { products } from "@/constants/dummy";
const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Checkout",
    icon: null,
    pathname: null,
  },
];
function Checkout() {
  return (
    <div className="container pb-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="py-10">
        <Breadcrumb crumb={breadcrumb} />
      </div>
      {/* Billing Details */}
      <div className="py-10">
        <h2 className="text-black text-4xl font-medium">Billing Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 lg:gap-20 gap-10">
          <ul className="flex flex-col gap-5">
            <BillingForm />
          </ul>
          <div className="flex flex-col gap-10">
            {/* Products */}
            <div className="flex flex-col gap-5">
              {products.slice(0, 3).map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
            </div>
            {/* Subtotal */}
            <ul className="flex flex-col divide-y divide-gray-400">
              <li className="flex items-center justify-between py-3">
                <span className="font-medium">Subtotal:</span>
                <span className="font-medium">$122</span>
              </li>
              <li className="flex items-center justify-between py-3">
                <span className="font-medium">Shipping:</span>
                <span className="font-medium">Free</span>
              </li>
              <li className="flex items-center justify-between py-3">
                <span className="font-medium">Total:</span>
                <span className="font-medium">$122</span>
              </li>
            </ul>
            {/* Payment Method */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                {/* Back Payment */}
                <div className="flex cursor-pointer items-center mr-4">
                  <input
                    type="radio"
                    className="accent-primary  w-6 h-6"
                    id="bank-method"
                    name="payment"
                  />

                  <label
                    htmlFor="bank-method"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    Bank
                  </label>
                </div>
                <h2>Bkash, Nagat, Rocket</h2>
              </div>
              <div className="flex justify-between items-center">
                {/* Cash on delivery */}
                <div className="flex cursor-pointer items-center mr-4">
                  <input
                    type="radio"
                    className="accent-primary  w-6 h-6"
                    id="cash-on-delivery-method"
                    name="payment"
                  />

                  <label
                    htmlFor="cash-on-delivery-method"
                    className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    Cash on delivery
                  </label>
                </div>
              </div>
              {/* Coupon */}
              <div className="flex gap-3 items-center">
                <div className="w-3/5">
                  <TextInput name="coupon" placeholder="Coupon Code" />
                </div>
                <div className=" flex w-2/5 flex-col">
                  <Button title="Apply Coupon" />
                </div>
              </div>
              {/* Order  */}
              <Button title="Place order" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
