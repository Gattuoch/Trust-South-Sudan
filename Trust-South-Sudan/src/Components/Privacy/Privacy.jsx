import React, { useState } from "react";

export default function PrivacyPolicy() {
  // State to track which sections are open
  const [openSections, setOpenSections] = useState({});

  // Toggle a section
  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Section data
  const sections = [
    {
      key: "info",
      title: "1. Information We Collect",
      content: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, or other contact details you provide through forms or
            newsletter subscriptions.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, IP address,
            pages visited, and other anonymous usage data collected automatically
            through cookies and analytics tools.
          </li>
        </ul>
      ),
    },
    {
      key: "usage",
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>To respond to inquiries and provide requested services.</li>
          <li>To send updates, newsletters, and organizational announcements.</li>
          <li>To improve our website and services based on user behavior and feedback.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      ),
    },
    {
      key: "sharing",
      title: "3. Sharing Your Information",
      content: (
        <p className="text-gray-700">
          We do not sell your personal data. We may share information with trusted
          third-party service providers for website hosting, analytics, or email services.
        </p>
      ),
    },
    {
      key: "cookies",
      title: "4. Cookies",
      content: (
        <p className="text-gray-700">
          We use cookies to enhance user experience, track website usage, and for analytics
          purposes. You can manage or disable cookies in your browser settings.
        </p>
      ),
    },
    {
      key: "security",
      title: "5. Security",
      content: (
        <p className="text-gray-700">
          We implement reasonable measures to protect your information but cannot guarantee
          complete security of data transmitted online.
        </p>
      ),
    },
    {
      key: "rights",
      title: "6. Your Rights",
      content: (
        <p className="text-gray-700">
          You may request access, correction, or deletion of your personal information by
          contacting us at <strong>[insert contact email]</strong>.
        </p>
      ),
    },
    {
      key: "changes",
      title: "7. Changes to This Policy",
      content: (
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. The latest version will always
          be posted on this website.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
      <p className="text-gray-600">Effective Date: February 2026</p>

      <p className="text-gray-700">
        Trust South Sudan (“we,” “our,” or “us”) is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, and safeguard
        your information when you visit our website{" "}
        <a
          href="https://trust-south-sudan.vercel.app"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          trust-south-sudan.vercel.app
        </a>
        .
      </p>

      {sections.map((section) => (
        <section key={section.key} className="space-y-2">
          <button
            onClick={() => toggleSection(section.key)}
            className="w-full text-left flex justify-between items-center text-2xl font-semibold text-gray-800 focus:outline-none"
          >
            {section.title}
            <span className="text-gray-500 text-xl">
              {openSections[section.key] ? "−" : "+"}
            </span>
          </button>
          {openSections[section.key] && <div className="mt-2">{section.content}</div>}
        </section>
      ))}
    </div>
  );
}
