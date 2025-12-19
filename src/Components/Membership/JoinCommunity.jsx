import { FaHandshake, FaUsers, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";

import heroImage1 from "../../assets/impact5.png";
import heroImage2 from "../../assets/impact6.png";
import heroImage3 from "../../assets/impact4.png";

export default function JoinCommunity() {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // smoother transition

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

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
          {/* Individual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-700 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-50 mb-6">
              <FaHandshake className="text-emerald-700 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Individual Membership
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Support our mission with a one-time or recurring contribution.
              Members receive regular updates and special recognition.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-700">
                <span>One-Time Donation</span>
                <span className="font-semibold text-emerald-700">$25</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Monthly Membership</span>
                <span className="font-semibold text-emerald-700">
                  $10/month
                </span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-emerald-700 py-3 text-white font-semibold hover:bg-emerald-800 transition">
              Join Membership
            </button>
          </div>

          {/* Family */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-400 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-50 mb-6">
              <FaUsers className="text-emerald-500 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Family Membership
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Support multiple family members and receive additional benefits.
              Perfect for families and households.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-700">
                <span>One-Time Donation</span>
                <span className="font-semibold text-emerald-700">$50</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Monthly Membership</span>
                <span className="font-semibold text-emerald-700">
                  $25/month
                </span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-emerald-500 py-3 text-white font-semibold hover:bg-emerald-600 transition">
              Join Family Membership
            </button>
          </div>

          {/* Corporate */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-50 mb-6">
              <FaGlobe className="text-orange-500 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Corporate Partnership
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Partner with Trust South Sudan to support peacebuilding and
              sustainable development through corporate social responsibility.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-700">
                <span>One-Time Donation</span>
                <span className="font-semibold text-emerald-700">$1,000+</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Annual Partnership</span>
                <span className="font-semibold text-emerald-700">
                  $5,000+/year
                </span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600 transition">
              Explore Corporate Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
