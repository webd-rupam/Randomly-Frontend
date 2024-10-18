"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function Working() {
  useEffect(() => {
    document.title = "Randomly - How it works";
  }, [])
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">How It Works</h1>

      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-7 text-green-400">Get Started in Just a Few Simple Steps!</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-3">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sign Up</h3>
              <p>Join our community by creating an account. It is quick and easy!</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-3">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Find a Match</h3>
              <p>Start connecting with random users from around the world. Our platform matches you instantly!</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-3">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Start Chatting</h3>
              <p>Engage in conversations, share experiences, and make new friends!</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-3">4</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Stay Anonymous</h3>
              <p>Your privacy is important. Enjoy chatting without revealing your identity.</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm">
          Ready to get started?{' '}
          <Link href="/signup">
            <span className="text-blue-400 hover:underline">Sign Up Now</span>
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <Link href="/">
          <span className="text-blue-400 hover:underline">Back to Home</span>
        </Link>
      </div>
    </main>
  );
}
