"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Page(): JSX.Element {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
      <h1 className="text-xl">Welcome to pushlogs</h1>
      <p>{session?.user ? "You are logged in!" : "You are not logged in"}</p>

      <p>Your email address: {session?.user?.email}</p>

      {session?.user && (
        <button
          className="py-2 px-8 w-auto h-auto bg-slate-800 rounded text-white"
          onClick={() => signOut()}
        >
          Logout
        </button>
      )}

      {!session?.user && (
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="py-2 px-8 rounded w-auto h-auto bg-cyan-400 text-white">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="py-2 px-8 rounded w-auto h-auto bg-white text-gray-900 border border-black">
              Create a new account
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
