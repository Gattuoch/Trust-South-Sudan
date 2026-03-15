import React, { useState, useEffect } from "react";

export default function CookiePolicy({ effectiveDate = "February 2026" }) {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState(null);

  // Check localStorage for existing consent
  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (!storedConsent) {
      setShowBanner(true);
    } else {
      setConsent(storedConsent);
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setConsent("accepted");
    setShowBanner(false);
    // Here you can initialize analytics or other cookies
    console.log("Cookies accepted. Analytics can be initialized.");
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setConsent("rejected");
    setShowBanner(false);
    // Ensure no analytics or cookies are initialized
    console.log("Cookies rejected. Analytics will not run.");
  };

  return (
    <div>
      {/* Cookie Policy Content */}
      <article
        className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg my-12"
        role="region"
        aria-labelledby="cookie-policy-heading"
      >
        <header className="mb-6">
          <h1
            id="cookie-policy-heading"
            className="text-4xl font-extrabold text-gray-900 mb-1"
          >
            Cookie Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: {effectiveDate}</p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            What are cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences, improve performance, and provide usage information so we can enhance the experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            How we use cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We use cookies for a few core purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <span className="font-medium">Preferences:</span> Remembering settings and choices to improve your experience.
            </li>
            <li>
              <span className="font-medium">Performance:</span> Improving site speed and reliability.
            </li>
            <li>
              <span className="font-medium">Analytics:</span> Understanding how visitors use our site so we can make it better.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Managing cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You can manage, disable, or delete cookies through your browser settings. Disabling cookies may affect your experience and prevent some features from working correctly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Third-party cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may allow trusted third parties (for example, analytics providers) to place cookies to help us understand usage patterns. These cookies are controlled by the third party and are subject to their privacy policies.
          </p>
        </section>
      </article>

      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <p className="text-sm md:text-base">
            We use cookies to enhance your experience. You can accept or reject cookies.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleAccept}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-medium"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
