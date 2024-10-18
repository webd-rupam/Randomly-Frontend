"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // For image rendering

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(""); // State for error message
  const [loading, setLoading] = useState(false); // State for loading
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message
    setLoading(true); // Set loading to true

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setLoading(false); // Set loading to false after the request

    if (response.ok) {
      setFormData({ email: "", password: "" });
      router.push('/'); // Redirect on successful login
    } else {
      setError(data.message); // Set error message from API response
    }
  };

  useEffect(() => {
    document.title = "Randomly - Login";
  }, [])
  

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>} {/* Display error message */}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input with Toggle Visibility */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"} // Toggle input type
              name="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
            {/* Toggle Button (Eye Icon) */}
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
            >
              <img
              className='relative top-[10px] w-5 h-5'
                src={showPassword ? "/eye.png" : "/eyecross.png"} // Show appropriate icon
                alt="Toggle password visibility"
              />
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg transition duration-300"
              disabled={loading} // Disable button during loading
            >
              {loading ? "Logging in..." : "Login"} {/* Show loading state */}
            </button>
          </div>
        </form>

        {/* Signup Redirect */}
        <p className="mt-6 text-center text-sm">
          Don't have an account?{' '}
          <Link href="/signup">
            <span className="text-blue-400 hover:underline">Sign up</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
