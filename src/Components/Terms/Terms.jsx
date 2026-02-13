import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function TermsOfService({ onAgree }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [selection, setSelection] = useState(null); // 'agree' | 'disagree' | null

  // Redirect if user disagrees
  useEffect(() => {
    if (selection === "disagree") {
      window.location.href = "https://www.google.com";
    }
  }, [selection]);

  // Handle Agree button click
  const handleAgree = () => {
    if (selection !== "agree") {
      alert("Please select 'I agree' to continue.");
      return;
    }

    try {
      localStorage.setItem("tosAgreed", "true");
    } catch (e) {
      console.warn("LocalStorage not available", e);
    }

    if (typeof onAgree === "function") {
      onAgree();
    }

    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  // Auto-redirect if already agreed
  useEffect(() => {
    const alreadyAgreed = localStorage.getItem("tosAgreed") === "true";
    if (alreadyAgreed && location.pathname !== "/") {
      navigate("/");
    }
  }, [navigate, location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-700 mb-6">
          <strong>Effective Date:</strong> February 2026
        </p>
        <p className="text-gray-700 mb-6">
          By accessing or using{" "}
          <a
            href="https://trust-south-sudan.vercel.app"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            trust-south-sudan.vercel.app
          </a>
          , you agree to the following terms:
        </p>

        <div className="space-y-4 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Use of Website</h2>
            You agree to use the website for lawful purposes only. You must not engage in activities that could harm the website, its users, or Trust South Sudan.
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Intellectual Property</h2>
            All content, logos, images, and materials are the property of Trust South Sudan or its partners. Unauthorized use is prohibited.
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Limitation of Liability</h2>
            Trust South Sudan is not liable for any damages arising from the use or inability to use the website.
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. External Links</h2>
            Our website may contain links to external sites. We are not responsible for the content or policies of those sites.
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Termination</h2>
            We reserve the right to suspend or terminate access to our website for violations of these Terms of Service.
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6. Governing Law</h2>
            These terms are governed by the laws applicable in South Sudan.
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="agree"
              name="tos"
              className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={selection === "agree"}
              onChange={() => setSelection("agree")}
            />
            <label htmlFor="agree" className="text-gray-700">
              I have read and agree to the Terms of Service
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="disagree"
              name="tos"
              className="w-5 h-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              checked={selection === "disagree"}
              onChange={() => setSelection("disagree")}
            />
            <label htmlFor="disagree" className="text-gray-700">
              I do not agree
            </label>
          </div>
        </div>

        <button
          onClick={handleAgree}
          className={`mt-6 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition ${
            selection !== "agree" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selection !== "agree"}
        >
          Agree and Continue
        </button>
      </div>
    </div>
  );
}
