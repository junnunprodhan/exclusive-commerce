import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import ImageFade from "@/components/global/imageFade";
import LoginForm from "@/components/pages/auth/loginForm";
const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Sign in",
    icon: null,
    pathname: null,
  },
];
function Login() {
  return (
    <div className="container min-h-screen">
      <div className="flex justify-between py-10">
        <Breadcrumb crumb={breadcrumb} />
      </div>
      <div className="grid md:grid-cols-7 lg:grid-cols-3 gap-5 items-center pb-20">
        <div className="col-span-2 lg:col-span-2 md:col-span-4">
          <ImageFade
            className="opacity-0 duration-500 rounded transition-all block mx-auto md:w-full lg:w-3/5 w-3/5 object-cover"
            width={200}
            height={300}
            src="/images/undraw_secure_login_pdn4.svg"
            priority={true}
            alt="Neil image"
          />
        </div>
        {/* Login Form */}
        <div className="col-span-2 lg:col-span-1 md:col-span-3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
