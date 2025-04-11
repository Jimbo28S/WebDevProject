import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';  // Import useRouter from Next.js

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();  // Initialize useRouter to handle navigation

  async function handleLogin(e) {
    e.preventDefault();  // Prevent page reload on form submission

    // Make a POST request to your login route
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      // If login is successful, log the token and redirect
      console.log("Logged in!", data.token);

      // Save the token (you can use localStorage or a state manager like Redux)
      localStorage.setItem('token', data.token);  // For example, storing token in localStorage

      // Redirect to the Home page
      router.push("/home");
    } else {
      // If there's an error, alert the user
      alert(data.error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4 flex flex-col items-center justify-center">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
          Log In
        </button>
      </form>

      <div className="flex w-50 h-10 bg-blue-700 border-2 border-blue-500 items-center align-middle justify-center mt-4">
        <Link href="/register">
          <text className="text-white">Create Account</text>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
