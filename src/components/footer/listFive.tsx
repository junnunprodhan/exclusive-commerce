import DownloadFeature from "./downloadFeature";
import SocialIcon from "./socialIcon";

function ListFive() {
  return (
    <div>
      <h2 className="mb-6 text-xl  dark:text-gray-900 text-white">
        Download App
      </h2>
      <ul className="text-white dark:text-gray-200 font-medium">
        <li className="mb-4">
          <DownloadFeature />
        </li>
        <li className="mb-4">
          <SocialIcon />
        </li>
      </ul>
    </div>
  );
}

export default ListFive;
