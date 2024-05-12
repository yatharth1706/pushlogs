"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <h2>Sign up here</h2>

      <div>
        <form>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              signupUser();
            }}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
