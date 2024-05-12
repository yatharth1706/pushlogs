"use client";
import { useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Welcome to pushlogs</h1>
    </main>
  );
}
