"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async () => {
    // create a post request to the /api/register route
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const user = await response.json();
    console.log("user", user);
    // redirect to the login page
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-4">
      <div className="grid w-4/5 h-[85%] grid-cols-2 mx-auto items-center justify-center">
        <div className="flex flex-col w-[90%] space-y-6 mx-auto">
          <section className="flex items-center space-x-4">
            <Image src="/appLogo.png" width={40} height={40} alt="Logo" />
            <h1 className="text-xl font-medium">PushLogs</h1>
          </section>
          <h2 className="text-lg font-normal text-left">Create an account</h2>

          <div className="flex flex-col w-[80%] space-y-6">
            <form className="flex flex-col w-full space-y-5">
              <div className="flex flex-col w-full space-y-2">
                <label className="flex w-full space-x-4">Email:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your name here"
                />
              </div>
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
              <button
                className="w-auto h-auto px-8 py-2 text-white rounded bg-slate-800 hover:bg-slate-700"
                onClick={(e) => {
                  e.preventDefault();
                  signupUser();
                }}
              >
                Sign up
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
                  <span>Sign up with Google</span>
                </button> */}

                <button
                  className="flex space-x-3 justify-center items-center w-auto h-auto px-8 py-2 text-gray-800 border-[1.3px] border-indigo-400 rounded hover:border-indigo-800"
                  onClick={async (e) => {
                    e.preventDefault();
                    await signIn("github", {
                      callbackUrl: "/",
                    });
                  }}
                >
                  <FaGithub className="w-6 h-6" />
                  <span>Sign up with Github</span>
                </button>
              </section>
              <span className="text-sm text-center">
                Already have an account ? Login{" "}
                <Link className="text-indigo-500" href="/login">
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
