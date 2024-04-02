import { IconStar, IconStarFill, IconStarHalf } from "../assets/productIcons";

function Rating({ total }: { total: number }) {
  return (
    <div className="flex items-center">
      <span className="text-orange-500">
        {total >= 1 ? (
          <IconStarFill />
        ) : total > 0 ? (
          <IconStarHalf />
        ) : (
          <IconStar />
        )}
      </span>
      <span className="text-orange-500">
        {total >= 2 ? (
          <IconStarFill />
        ) : total > 1 ? (
          <IconStarHalf />
        ) : (
          <IconStar />
        )}
      </span>
      <span className="text-orange-500">
        {total >= 3 ? (
          <IconStarFill />
        ) : total > 2 ? (
          <IconStarHalf />
        ) : (
          <IconStar />
        )}
      </span>
      <span className="text-orange-500">
        {total >= 4 ? (
          <IconStarFill />
        ) : total > 3 ? (
          <IconStarHalf />
        ) : (
          <IconStar />
        )}
      </span>
      <span className="text-orange-500">
        {total >= 5 ? (
          <IconStarFill />
        ) : total > 4 ? (
          <IconStarHalf />
        ) : (
          <IconStar />
        )}
      </span>
    </div>
  );
}

export default Rating;
