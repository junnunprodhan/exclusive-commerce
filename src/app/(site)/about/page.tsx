import { IconHome } from "@/components/assets/menuIcons";
import {
  IconBxCheckShield,
  IconHeadphones,
  IconTruckFast,
} from "@/components/assets/servicesIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import ImageFade from "@/components/global/imageFade";
import LabelItem from "@/components/pages/about/labelItem";
import UserCart from "@/components/pages/about/userCart";
import Service from "@/components/sections/service";

const analysisArray = [
  {
    id: "cdcd",
    icons: <IconTruckFast />,
    title: "10.5k ",
    label: "Sallers active our site",
  },
  {
    id: "cdcd2",
    icons: <IconHeadphones />,
    title: "33k",
    label: "Mopnthly Produduct Sale",
  },
  {
    id: "cdcd34",
    icons: <IconBxCheckShield />,
    title: "45.5k",
    label: "Customer active in our site",
  },
  {
    id: "cdcd13c",
    icons: <IconHeadphones />,
    title: "25k",
    label: "Anual gross sale in our site",
  },
];

const users = [
  {
    id: "233",
    images: "",
    name: "Tom Cruise",
    coaptation: "Founder & Chairman",
    twitter: "/",
    instagram: "/",
    linkedin: "/",
  },
  {
    id: "2336",
    images: "",
    name: "Emma Watson",
    coaptation: "Managing Director",
    twitter: "/",
    instagram: "/",
    linkedin: "/",
  },
  {
    id: "2334",
    images: "",
    name: "Will Smith",
    coaptation: "Product Designer",
    twitter: "/",
    instagram: "/",
    linkedin: "/",
  },
];
const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "About",
    icon: null,
    pathname: null,
  },
];

function About() {
  return (
    <div className="container min-h-screen">
      {/* Breadcrumb */}
      <div className="py-10">
        <Breadcrumb crumb={breadcrumb} />
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-5xl text-black font-medium">Our Story</h2>
          <p className="text-xs text-black">
            Launced in 2015, Exclusive is South Asias premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-xs text-black">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        {/* Cover Image */}
        <div className="flex bg-gray-100 rounded">
          <ImageFade
            className="w-full opacity-0 duration-500  transition-all"
            src="https://res.cloudinary.com/kajolroy/image/upload/v1649315822/cld-sample.jpg"
            width={400}
            height={500}
            priority={true}
            alt="Cover Image"
          />
        </div>
      </div>
      {/* Total Calculation Section */}
      <div className="grid grid-cols-2 py-20 gap-5 lg:gap-10 md:grid-cols-4">
        {analysisArray.map((item, index) => (
          <LabelItem key={index} item={item} />
        ))}
      </div>
      {/* User Cart Slider Section */}
      <div className="grid grid-cols-1 gap-5  lg:gap-10 md:grid-cols-3">
        {users.map((item, index) => (
          <UserCart key={index} item={item} />
        ))}
      </div>

      {/* Services Section */}
      <div>
        <Service />
      </div>
    </div>
  );
}

export default About;
