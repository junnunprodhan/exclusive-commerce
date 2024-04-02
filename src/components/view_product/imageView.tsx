"use client";
import { useState } from "react";
import Zoom from "react-zoom-image-hover/dist/esm/components/Zoom";
import ImageFade from "../global/imageFade";

function ImageView({ item }: { item: Product }) {
  const [activeImage, setActiveImage] = useState(item.images[0]);
  return (
    <div className="flex md:flex-row flex-col gap-5 h-full">
      <ul className="md:w-32 w-full flex md:flex-col flex-row gap-2 md:h-full md:order-1 order-2">
        {item.images.slice(0, 4).map((x, i) => (
          <li onClick={() => setActiveImage(x)} key={i}>
            <ImageFade
              className="opacity-0 duration-500 h-auto w-full hover:brightness-90 transition-all cursor-pointer object-cover"
              src={item.images[i]}
              width={720}
              height={1280}
              priority={true}
              alt="preview image"
            />
          </li>
        ))}
      </ul>
      <div className="md:order-2 order-1 w-full h-80 md:h-full md:w-[calc(100%-8rem)] overflow-hidden cursor-pointer bg-gray-200 rounded">
        <Zoom
          height="100%"
          width="100%"
          zoomScale={3}
          src={activeImage || item.images[0]}
        />
      </div>
    </div>
  );
}

export default ImageView;
