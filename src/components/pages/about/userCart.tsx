import Link from "next/link";
import {
  IconInstagramLogo,
  IconLinkedinLine,
  IconTwitterLogo,
} from "../../assets/socialIcon";
import ImageFade from "../../global/imageFade";

interface Props {
  item: {
    id: string;
    images: string;
    name: string;
    coaptation: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}
function UserCart({ item }: Props) {
  return (
    <div className="py-3 sm:py-4">
      <div className="flex flex-col ">
        <div className="flex-shrink-0">
          <ImageFade
            className="opacity-0 duration-500 rounded transition-all w-full h-full object-cover"
            width={300}
            height={500}
            src="https://res.cloudinary.com/kajolroy/image/upload/v1695550795/client%20Image/man_n39uyh.jpg"
            priority={true}
            alt="Neil image"
          />
        </div>
        <div className="mt-5">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-900 truncate dark:text-white">
              {item.name}
            </h2>
            <p className="text-sm text-black truncate dark:text-gray-400">
              {item.coaptation}
            </p>
          </div>
          <div className="flex gap-2 my-2 text-base font-semibold text-gray-900 dark:text-white">
            <Link
              href="/"
              target="_blank"
              className="hover:text-primary text-black"
            >
              <IconTwitterLogo />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="hover:text-primary text-black"
            >
              <IconInstagramLogo />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="hover:text-primary text-black"
            >
              <IconLinkedinLine />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
