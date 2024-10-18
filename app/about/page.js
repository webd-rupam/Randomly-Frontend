"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "Randomly - About";
  }, [])
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-8">
    <span className="text-4xl font-bold mb-6 text-center flex gap-3">About <h1 className="text-blue-500">Randomly</h1></span>
      
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Welcome to Randomly!</h2>
        <p className="text-lg mb-4">
          I am Rupam, the sole creator of Randomly, an innovative chat platform designed for individuals seeking anonymous and enjoyable conversations. With a passion for connecting people, I have developed this platform to foster connections without the constraints of personal identification.
        </p>
        
        <h3 className="text-xl font-semibold mb-2 underline text-white">Mission</h3>
        <p className="mb-4">
          My mission is to create a safe space for everyone to engage in random chats while ensuring complete anonymity. Whether you are looking to make new friends or simply enjoy a fun conversation, Randomly is here for you.
        </p>
        
        <h3 className="text-xl font-semibold mb-2 underline text-white">Vision</h3>
        <p className="mb-4">
          I envision a world where people can connect freely, share ideas, and enjoy meaningful interactions without the barriers of identity. Randomly aims to bridge the gap between individuals and provide a platform for spontaneous connections.
        </p>

        <h3 className="text-xl font-semibold mb-2 underline text-white">Get in Touch</h3>
        <p className="mb-4">
          I am always open to feedback and ideas! If you have any suggestions or would like to reach out, feel free to connect with me through the platform or follow me on my social media channels.
        </p>

        <div className="flex justify-center mt-6">
          <Link href="/signup">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg transition duration-300">
              Join Us Now
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/">
          <span className="text-blue-400 hover:underline">Back to Home</span>
        </Link>
      </div>
    </main>
  );
}
