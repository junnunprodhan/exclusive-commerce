import Link from "next/link";
function ListThree() {
  return (
    <div>
      <h2 className="mb-6 text-xl  dark:text-gray-900 text-white">Account</h2>
      <ul className="text-white dark:text-gray-200 font-medium">
        <li className="mb-4">
          <Link
            href="/account"
            className="text-[14px] hover:underline font-light"
          >
            My Account
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/" className="text-[14px] hover:underline font-light">
            Login / Register
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/cart" className="text-[14px] hover:underline font-light">
            Cart
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/wishlist"
            className="text-[14px] hover:underline font-light"
          >
            Wishlist
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/shop" className="text-[14px] hover:underline font-light">
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ListThree;
