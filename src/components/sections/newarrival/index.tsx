import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import { getArrivalSSG } from "@/hooks/getArrival";
import GridList from "./gridlist";

async function NewArrival() {
  const url = `${process.env.NEXTAUTH_URL}/api/arrival`;
  const { arrival } = await getArrivalSSG(url);

  return (
    <div className="container border-b">
      <div className="flex py-5 flex-col gap-4">
        <SectionLabel label="Featured" />
        {/* Section Heading */}
        <SectionHeading title="New Arrival" />
      </div>
      <div className="py-5">
        {arrival.length && arrival.length > 3 && (
          <GridList arrivalList={arrival} />
        )}
      </div>
    </div>
  );
}

export default NewArrival;
