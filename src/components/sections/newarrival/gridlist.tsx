import ArrivalLabel from "./arrivalLabel";

function GridList({ arrivalList }: { arrivalList: Arrival[] }) {
  return (
    <div className="md:flex md:gap-5">
      <div>
        <ArrivalLabel descCollapse={true} item={arrivalList[0]} />
      </div>
      <div className="flex flex-col md:gap-5 gap-1">
        {/* Total component Height */}
        <div className="md:h-72 h-52 md:mt-0 mt-1 ">
          <ArrivalLabel descCollapse={true} item={arrivalList[1]} />
        </div>
        <div className="grid grid-cols-2 md:gap-5 gap-1">
          <div>
            <ArrivalLabel descCollapse={false} item={arrivalList[2]} />
          </div>
          <div>
            <ArrivalLabel descCollapse={false} item={arrivalList[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridList;
