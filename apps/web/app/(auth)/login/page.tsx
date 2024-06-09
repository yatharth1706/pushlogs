"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const validate = (values: { email: string; password: string }) => {
  const errors: { email?: string; password?: string } = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  }

  return errors;
};

export default function Login() {
  const router = useRouter();

  const signInUser = async (email: string, password: string) => {
    signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then(({ ok, error }) => {
      console.log(ok);
      if (ok) {
        toast("User logged in successfully", {
          type: "success",
          position: "bottom-center",
        });

        setTimeout(() => {
          router.push("/");
        }, 1200);
      } else {
        toast("Invalid email or password", {
          type: "error",
          position: "bottom-center",
        });
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const { email, password } = values;
      await signInUser(email, password);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-4">
      <div className="grid w-4/5 h-[85%] grid-cols-2 mx-auto items-center justify-center">
        <div className="flex flex-col w-[90%] space-y-6 mx-auto">
          <section className="flex items-center space-x-4">
            <Image src="/AppLogo.svg" width={200} height={200} alt="Logo" />
          </section>
          <h2 className="text-lg font-normal text-left">
            Login to your account
          </h2>

          <div className="flex flex-col w-[80%] space-y-6">
            <form
              className="flex flex-col w-full space-y-5"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col w-full space-y-2">
                <label className="flex w-full space-x-4">Email:</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={
                    "w-full px-3 py-2 border border-gray-300 rounded" +
                    (formik.errors.email && formik.touched.email
                      ? " border-red-500"
                      : "")
                  }
                  placeholder="Enter your email here"
                />
                {formik.errors.email && formik.touched.email ? (
                  <small className="text-red-500">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="flex flex-col space-y-2">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={
                    "w-full px-3 py-2 border border-gray-300 rounded" +
                    (formik.errors.password && formik.touched.password
                      ? " border-red-500"
                      : "")
                  }
                  placeholder="Enter your password here"
                />
                {formik.errors.password && formik.touched.password ? (
                  <small className="text-red-500">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <input type="checkbox" name="remember" />
                  <label>Remember me</label>
                </div>
                <div>
                  <Link href="/forgot-password" className="text-indigo-600">
                    Forgot password ?
                  </Link>
                </div>
              </div>
              <button
                className="w-auto h-auto px-8 py-2 text-white rounded bg-slate-800 hover:bg-slate-700"
                type="submit"
              >
                Submit
              </button>
              <div className="text-center">
                <span className="text-sm text-gray-600">OR</span>
              </div>
              <section className="flex flex-col space-y-6">
                {/* <button
                  className="flex justify-center items-center space-x-3 w-auto h-auto px-8 py-2 text-gray-800 border-[1.3px] border-indigo-400 rounded hover:border-indigo-800"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  <FcGoogle className="w-6 h-6" />
                  <span>Sign in with Google</span>
                </button> */}

                <button
                  className="flex space-x-3 justify-center items-center w-auto h-auto px-8 py-2 text-gray-800 border-[1.3px] border-indigo-400 rounded hover:border-indigo-800"
                  onClick={async (e) => {
                    e.preventDefault();
                    await signIn("github", { callbackUrl: "/" });
                  }}
                >
                  <FaGithub className="w-6 h-6" />
                  <span>Sign in with Github</span>
                </button>
              </section>
              <span className="text-sm text-center">
                Don't have an account ? Sign up{" "}
                <Link className="text-indigo-500" href="/signup">
                  here
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className="mx-auto w-[90%] h-full bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl"></div>
      </div>
    </div>
  );
}
