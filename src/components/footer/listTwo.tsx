import { brandInfo } from "@/constants/default_config";

function ListTwo() {
  return (
    <div>
      <h2 className="mb-6 text-xl  dark:text-gray-900 text-white">Support</h2>
      <ul className="text-white dark:text-gray-200 font-medium">
        <li className="mb-4">
          <span className="text-[14px] font-light">{brandInfo.address}</span>
        </li>
        <li className="mb-4">
          <span className="text-[14px] font-light">{brandInfo.email}</span>
        </li>
        <li className="mb-4">
          <span className="text-[14px] font-light">{brandInfo.phone}</span>
        </li>
      </ul>
    </div>
  );
}

export default ListTwo;
