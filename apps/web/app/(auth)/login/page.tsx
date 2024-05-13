"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="flex flex-col space-y-4 h-screen justify-center items-center w-full">
      <h2 className="text-xl font-semibold just">Login here</h2>

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
              signInUser();
            }}
          >
            Submit
          </button>
          <span className="text-center text-sm">
            No account ? Create a new account{" "}
            <Link className="text-cyan-400" href="/signup">
              here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
