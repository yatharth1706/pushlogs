"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <h2>Login here</h2>

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
              signInUser();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
