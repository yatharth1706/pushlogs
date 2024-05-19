"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Page(): JSX.Element {
  const { data: session, status } = useSession();
  console.log("Session", session);
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
      <h1 className="text-xl">Welcome to pushlogs</h1>
      <p>{session?.user ? "You are logged in!" : "You are not logged in"}</p>

      <p>Your email address: {session?.user?.email}</p>

      {session?.user && (
        <button
          className="w-auto h-auto px-8 py-2 text-white rounded bg-slate-800"
          onClick={() => signOut()}
        >
          Logout
        </button>
      )}

      {!session?.user && (
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="w-auto h-auto px-8 py-2 text-white rounded bg-cyan-400">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="w-auto h-auto px-8 py-2 text-gray-900 bg-white border border-black rounded">
              Create a new account
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
