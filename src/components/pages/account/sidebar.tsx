import Link from "next/link";

function Sidebar() {
  return (
    <>
      <ul className="space-y-4 list-none text-gray-500  dark:text-gray-400">
        <li>
          <h2 className="text-sm font-medium text-black">Manage My Account</h2>
          <ul className="pl-5 mt-2 list-none space-y-1 ">
            <li>
              <Link href="/" className="text-xs hover:text-primary transition">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/" className="text-xs hover:text-primary transition">
                Address Book
              </Link>
            </li>
            <li>
              <Link href="/" className="text-xs hover:text-primary transition">
                My Account Option
              </Link>
            </li>
            <li>
              <Link href="/" className="text-xs hover:text-primary transition">
                Change Password
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-sm font-medium text-black">My Orders</h2>
          <ul className="pl-5 mt-2 list-none space-y-1 ">
            <li>
              <Link href="/" className="text-xs hover:text-primary transition">
                My Return
              </Link>
            </li>
            <li>
              <Link href="/" className="text-xs hover:text-primary transition">
                My Cancellation
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/wishlist"
            className="text-sm font-medium text-black hover:text-primary transition"
          >
            My WishList
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
