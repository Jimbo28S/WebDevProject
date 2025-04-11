import React, { useState } from "react";
import { useRouter } from 'next/router'; // Use Next.js router
import Link from 'next/link';

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Add confirmPassword
  const router = useRouter();
  const permissions = "user";

  // Handle register form submission
  async function handleRegister(e) {
    e.preventDefault(); // Prevent form from reloading the page

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, permissions }),
    });

    const data = await res.json();
    if (res.ok) {
        console.log("User registered successfully");
        // Redirect to login page after registration
    } else {
        alert(data.error || "Registration failed");
    }
}


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>
      <form onSubmit={handleRegister} className="space-y-4 flex flex-col items-center justify-center">
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
          Register
        </button>

        <div className="flex w-50 h-10 bg-blue-700 border-2 border-blue-500 items-center align-middle justify-center">
            <Link href="/">
                <text>Back to Login</text>
            </Link>
        </div>
        
      </form>
    </div>
  );
}

export default RegisterPage;
