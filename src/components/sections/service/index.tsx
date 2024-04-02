import {
  IconBxCheckShield,
  IconHeadphones,
  IconTruckFast,
} from "@/components/assets/servicesIcons";
import LabelItem from "./labelItem";

const services = [
  {
    icons: <IconTruckFast />,
    title: "FREE AND FAST DELIVERY",
    label: "Free delivery for all orders over $140",
  },
  {
    icons: <IconHeadphones />,
    title: "24/7 CUSTOMER SERVICE",
    label: "Friendly 24/7 customer support",
  },
  {
    icons: <IconBxCheckShield />,
    title: "MONEY BACK GUARANTEE",
    label: "We reurn money within 30 days",
  },
];

function Service() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:py-28 py-10 md:grid-cols-3 md:gap-10 gap-5">
        {services.map((item, index) => (
          <LabelItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Service;
