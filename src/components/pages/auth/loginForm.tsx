"use client";
import Button from "@/components/global/button";
import { brandInfo } from "@/constants/default_config";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function LoginForm() {
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });

  // Search parameters
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const callbackUrl = searchParams.get("callbackUrl");

  // Login with form data
  function loginWithFormData() {
    signIn("credentials", { ...formData, callbackUrl: "/" });
  }

  // Login with google
  function loginWithGoogle() {
    signIn("google", { callbackUrl: callbackUrl || "/" });
  }

  // Error Toast
  useEffect(() => {
    if (error) {
      toast.error("Invalid email or password !");
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-5 xl:px-10 ">
      <div>
        <h2 className="text-black text-3xl">Log in to {brandInfo.brandName}</h2>
        <span className="text-xs font-medium text-black">
          Enter your details below
        </span>
      </div>
      {/* form */}
      <ul className="flex flex-col gap-2">
        <li>
          <input
            name="username"
            type="text"
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, emailOrPhone: target.value }))
            }
            className="block w-full py-2 pr-10 text-sm font-light focus:placeholder-black transition text-black border-b border-gray-400 focus:outline-none focus:border-gray-500 "
            placeholder="Email or phone number"
          />
        </li>
        <li>
          <input
            name="password"
            type="text"
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, password: target.value }))
            }
            className="block w-full py-2 pr-10 text-sm font-light focus:placeholder-black transition text-black border-b border-gray-400 focus:outline-none focus:border-gray-500 "
            placeholder="Password"
          />
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Button onClick={loginWithFormData} title="Login" />
          <button className="text-primary focus:outline-none hover:brightness-75 text-sm">
            Forget Password ?
          </button>
        </div>
        <button
          onClick={loginWithGoogle}
          className="border border-gray-400 rounded hover:bg-gray-100 hover:border-gray-500 transition-all text-xs  py-3 focus:outline-none"
        >
          Login with Google
        </button>
      </div>
      {/* Forget */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-600">Already have an account ?</span>
        <Link
          className="font-medium text-sm hover:text-gray-600 underline text-black"
          href={`/auth/signup${
            callbackUrl ? "?callbackUrl=" + callbackUrl : ""
          }`}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
