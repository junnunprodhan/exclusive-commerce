import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import TabsWrapper from "@/components/pages/forget/tabsWrapper";

function ForgetPassword() {
  return (
    <div className="container mb-20  min-h-screen">
      <div className="py-10">
        <Breadcrumb crumb={breadcrumb} />
      </div>
      <TabsWrapper />
    </div>
  );
}

export default ForgetPassword;
const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Forget password",
    icon: null,
    pathname: null,
  },
];
