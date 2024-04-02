import NewsLatterInput from "./newsLatterInput";

function ListOne() {
  return (
    <div>
      <h2 className="mb-6 text-xl  dark:text-gray-900 text-white">Exclusive</h2>
      <ul className="text-white dark:text-gray-200 font-medium">
        <li className="mb-4">
          <span className="font-medium">Subscribe</span>
        </li>
        <li className="mb-4">
          <span className="text-[14px] font-light">
            Get 10% off your first order
          </span>
        </li>
        <li className="mb-4">
          <NewsLatterInput />
        </li>
      </ul>
    </div>
  );
}

export default ListOne;
