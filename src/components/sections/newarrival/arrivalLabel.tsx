import ImageFade from "@/components/global/imageFade";

function ArrivalLabel({
  item,
  descCollapse,
}: {
  descCollapse: boolean;
  item: Arrival;
}) {
  return (
    <div className="relative cursor-pointer group/arrival h-full w-full ">
      <ImageFade
        className="w-full opacity-0 duration-300 group-hover/arrival:brightness-100 transition-all h-full object-cover rounded brightness-75"
        src={item.image}
        width={1080}
        height={1920}
        priority={true}
        alt="arrival item"
      />
      <div className="absolute md:bottom-5 bottom-2 left-2 md:left-5 z-8 w-full">
        <div className="md:gap-5 gap-1 flex flex-col justify-start">
          <h2 className="text-white text-2xl ">{item.name}</h2>
          <p
            className={`text-white text-xs font-light ${
              descCollapse && "md:max-w-[50%]"
            }`}
          >
            {item.description}
          </p>
          <button className="focus:outline-none group-hover/arrival:ms-5 transition-all hover:text-gray-300 w-fit text-white underline">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArrivalLabel;
