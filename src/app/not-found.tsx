import { IconHome } from "@/components/assets/menuIcons";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/global/breadcrumb";
import Header from "@/components/header";
import Link from "next/link";

const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Not found",
    icon: null,
    pathname: null,
  },
];

function NotFound() {
  return (
    <>
      <Header />
      <div className="container ">
        <div className="mt-10">
          <Breadcrumb crumb={breadcrumb} />
        </div>
        <div className="flex flex-col min-h-[85vh] items-center justify-center lg:gap-10 gap-5">
          <h2 className="lg:text-6xl text-4xl font-medium text-black text-center">
            404 Not Found
          </h2>
          <span className="text-sm text-black text-center">
            Your visited page not found. You may go home page.
          </span>
          <Link
            href="/"
            className="text-white  font-medium  border-transparent text-sm  rounded  transition-all bg-primary hover:bg-white hover:text-primary hover:border-primary  py-3 px-10  border "
          >
            Back to home page
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
