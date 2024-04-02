import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import { getSubcategories } from "@/hooks/getSubcategories";
import CategorySlider from "./categorySlider";

async function Categories() {
  const url = `${process.env.NEXTAUTH_URL}/api/subcategories`;
  const { subcategories } = await getSubcategories(url);
  return (
    <div className="container py-10 border-b relative">
      <div className="py-5 flex flex-col gap-4">
        <SectionLabel label="Categories" />
        {/* Section Heading */}
        <SectionHeading title="Browse By Category"/>
      </div>
      <div className="py-5">
        <CategorySlider subcategories={subcategories} />
      </div>
    </div>
  );
}

export default Categories;
