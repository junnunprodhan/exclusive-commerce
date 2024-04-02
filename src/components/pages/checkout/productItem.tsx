import ImageFade from "@/components/global/imageFade";

function ProductItem({ item }: { item: Product }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <ImageFade
          className="w-12 rounded opacity-0 duration-500  transition-all"
          src={item.images[0]}
          width={400}
          height={500}
          priority={true}
          alt="Product Image"
        />
        <h2 className="font-medium">{item.title}</h2>
      </div>
      <span className="font-medium">${item.regularPrice}</span>
    </div>
  );
}

export default ProductItem;
