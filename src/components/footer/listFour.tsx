import Link from "next/link";
function ListFour() {
  return (
    <div>
      <h2 className="mb-6 text-xl  dark:text-gray-900 text-white">
        Quick Link
      </h2>
      <ul className="text-white dark:text-gray-200 font-medium">
        <li className="mb-4">
          <Link href="/" className="text-[14px] hover:underline font-light">
            Privacy Policy
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/" className="text-[14px] hover:underline font-light">
            Terms Of Use
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/" className="text-[14px] hover:underline font-light">
            FAQ
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/" className="text-[14px] hover:underline font-light">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ListFour;
