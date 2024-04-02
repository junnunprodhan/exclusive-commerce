import ImageFade from "../global/imageFade";

function DownloadFeature() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-light text-white">
        Save your s3 with new your only
      </span>
      <div className=" flex gap-1 items-center">
        <div className="">
          <div className="flex rounded ">
            <ImageFade
              className="w-[450px] opacity-0 bg-white rounded duration-500  transition-all"
              src="/info/qr_code.svg"
              width={400}
              height={500}
              priority={true}
              alt="Cover Image"
            />
          </div>
        </div>
        <div className=" flex flex-col">
          <button className="text-xs py-1">
            <ImageFade
              className="w-full opacity-0 duration-500  transition-all"
              src="/info/google_play.png"
              width={400}
              height={500}
              priority={true}
              alt="Cover Image"
            />
          </button>
          <button className="text-xs py-1">
            <ImageFade
              className="w-full opacity-0 duration-500  transition-all"
              src="/info/apple_store.png"
              width={400}
              height={500}
              priority={true}
              alt="Cover Image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DownloadFeature;
