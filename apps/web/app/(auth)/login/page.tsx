"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signInUser = async () => {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-4">
      <div className="grid w-4/5 h-[85%] grid-cols-2 mx-auto items-center justify-center">
        <div className="flex flex-col w-[90%] space-y-6 mx-auto">
          <section className="flex items-center space-x-4">
            <Image src="/appLogo.png" width={40} height={40} alt="Logo" />
            <h1 className="text-xl font-medium">PushLogs</h1>
          </section>
          <h2 className="text-lg font-normal text-left">
            Login to your account
          </h2>

          <div className="flex flex-col w-[80%] space-y-6">
            <form className="flex flex-col w-full space-y-5">
              <div className="flex flex-col w-full space-y-2">
                <label className="flex w-full space-x-4">Email:</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your email here"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your password here"
                />
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
                onClick={(e) => {
                  e.preventDefault();
                  signInUser();
                }}
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
