// app/signup/page.js
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for storing error messages
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state on submit

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        router.push('/'); // Redirect after successful signup
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Set error message from the server response
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred while signing up.'); // Set a generic error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Randomly - Signup";
  }, [])
  

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

        {error && <div className="mb-4 text-red-500">{error}</div>} {/* Display error message */}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              name="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? (
               <img src="/eye.png" className='w-5 relative bottom-1' alt="" />
              ) : (
               <img src="/eyecross.png" className='w-5 relative bottom-1' alt="" />
              )}
            </button>
          </div>

          {/* Signup Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg transition duration-300"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Signing Up...' : 'Sign Up'} {/* Show loading state */}
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <p className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login">
            <span className="text-blue-400 hover:underline">Login</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
