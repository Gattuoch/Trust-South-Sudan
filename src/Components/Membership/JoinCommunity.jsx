import { FaHandshake, FaUsers, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";

import heroImage1 from "../../assets/impact5.png";
import heroImage2 from "../../assets/impact6.png";
import heroImage3 from "../../assets/impact4.png";

export default function JoinCommunity() {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Membership data
  const memberships = [
    {
      title: "Founding Members",
      icon: <FaHandshake className="text-emerald-700 text-2xl" />,
      border: "border-emerald-700",
      iconBg: "bg-emerald-50",
      description:
        "Founding Members are those who created and officially registered TRUST SOUTH SUDAN. At the establishment of the organization, they demonstrated exceptional dedication to peace, unity, reconciliation, and sustainable development in South Sudan.",
      criteria: [
        "Proven integrity and strong moral standing in society",
        "Demonstrated commitment to peacebuilding, reconciliation, or community development",
        "Acceptance of the Organization’s Vision, Mission, Core Values, and By-Laws",
      ],
      donation: "$25",
      monthly: "$10/month",
      buttonText: "Join Membership",
      buttonColor: "bg-emerald-700 hover:bg-emerald-800",
    },
    {
      title: "Ordinary Members",
      icon: <FaUsers className="text-emerald-500 text-2xl" />,
      border: "border-emerald-400",
      iconBg: "bg-emerald-50",
      description:
        "Ordinary Members are South Sudanese citizens or residents who voluntarily join TRUST SOUTH SUDAN and actively participate in the national, state, or local implementation of its goals and programs.",
      criteria: [
        "Minimum age as provided by law of South Sudan and international community (above 18 years old)",
        "Commitment to reconciliation, unity, non-violence, and sustainable development",
        "Willingness to abide by the By-Laws and Code of Conduct",
      ],
      donation: "$50",
      monthly: "$25/month",
      buttonText: "Join Family Membership",
      buttonColor: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      title: "Honorary Members",
      icon: <FaGlobe className="text-orange-500 text-2xl" />,
      border: "border-orange-500",
      iconBg: "bg-orange-50",
      description:
        "Honorary Members are eminent people, organizations, or partners—domestic or foreign—acknowledged for their outstanding contributions to human rights, peace, reconciliation, unity, or sustainable development in South Sudan.",
      criteria: [
        "Outstanding service aligned with the Organization’s mandate",
        "High moral integrity and international credibility",
        "Approval by the Board of Directors",
      ],
      donation: "$1,000+",
      monthly: "$5,000+/year",
      buttonText: "Explore Corporate Partnership",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  return (
    <section className="relative py-20">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-200">
            Become a member of Trust South Sudan and support our mission for
            peace, justice, and sustainable development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((member, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${member.border} hover:shadow-xl transition`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${member.iconBg} mb-6`}
              >
                {member.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {member.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Eligibility Criteria */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Eligibility Criteria
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm leading-relaxed">
                  {member.criteria.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Donations */}
              <div className="space-y-4 my-6">
                <div className="flex justify-between text-gray-700">
                  <span>One-Time Donation</span>
                  <span className="font-semibold text-emerald-700">
                    {member.donation}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>
                    {member.title === "Honorary Members"
                      ? "Annual Partnership"
                      : "Monthly Membership"}
                  </span>
                  <span className="font-semibold text-emerald-700">
                    {member.monthly}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                className={`w-full rounded-xl py-3 text-white font-semibold transition ${member.buttonColor}`}
              >
                {member.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
