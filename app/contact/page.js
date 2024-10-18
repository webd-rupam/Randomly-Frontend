"use client";

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function Contact() {
  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Randomly - Contact";
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      setForm({ email: "", name: "", message: "" }); // Clear the form
    } else {
      toast.error('Oops! Message cannot be sent at this moment.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }

    setLoading(false);
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="dark"
      />

      <main className={`min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-8 ${loading ? 'filter blur-sm' : ''}`}>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
            <span className="relative flex h-7 w-7">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-7 w-7 bg-blue-500"></span>
            </span>
          </div>
        )}

        <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h1>

        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-400">We Would Love to Hear From You!</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                required
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Type your message here"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg transition duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <Link href="/">
            <span className="text-blue-400 hover:underline">Back to Home</span>
          </Link>
        </div>
      </main>
    </>
  );
}
