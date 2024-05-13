"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async () => {
    // create a post request to the /api/register route
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
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
    <div className="flex flex-col space-y-4 h-screen justify-center items-center w-full">
      <h2 className="text-xl font-semibold just">Create a new account here</h2>

      <div className="flex flex-col space-y-6 w-1/5">
        <form className="flex flex-col space-y-5 w-full">
          <div className="flex flex-col space-y-2 w-full">
            <label className="flex space-x-4 w-full">Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </div>
          <button
            className="py-2 px-8 w-auto h-auto bg-slate-800 rounded text-white"
            onClick={(e) => {
              e.preventDefault();
              signupUser();
            }}
          >
            Create a new account
          </button>

          <span className="text-center text-sm">
            Already have an account ? Login{" "}
            <Link className="text-cyan-400" href="/login">
              here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
