"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Randomly - Privacy Policy";
  }, [])
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Privacy Policy</h1>

      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-green-400">Effective Date: October 9, 2024</h2>
        
        <p className="mb-6">
          At Randomly, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2 underline">1. Information We Collect</h3>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Personal Information: Name, email address, and any other information you provide during registration.</li>
          <li>Usage Data: Information about how you use our platform, including your interactions with other users.</li>
          <li>Device Information: Information about your device, such as IP address and browser type.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2 underline">2. How We Use Your Information</h3>
        <p className="mb-4">
          We may use your information for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>To provide and maintain our services.</li>
          <li>To improve, personalize, and expand our platform.</li>
          <li>To communicate with you, including responding to your inquiries and providing customer support.</li>
          <li>To detect and prevent fraud and abuse.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2 underline">3. Data Protection</h3>
        <p className="mb-4">
          We implement a variety of security measures to maintain the safety of your personal information. However, please remember that no method of transmission over the internet, or method of electronic storage, is 100% secure.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2 underline">4. Your Rights</h3>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your personal data, including:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>The right to access your personal data.</li>
          <li>The right to request correction of your personal data.</li>
          <li>The right to request deletion of your personal data.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2 underline">5. Changes to This Privacy Policy</h3>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2 underline">6. Contact Us</h3>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please <a className="text-blue-500" href="/contact">Contact us</a>.
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
