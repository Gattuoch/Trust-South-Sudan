import { useState } from "react";
import { FaLock, FaShieldAlt } from "react-icons/fa";

const amounts = [25, 50, 100, 250];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [frequency, setFrequency] = useState("one-time");

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-[#f9fcf8] shadow-xl p-10 md:p-14">

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Donation Amount
          </h2>

          {/* Amount Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`rounded-2xl border-2 py-6 text-2xl font-bold transition cursor-pointer
                  ${
                    selectedAmount === amount
                      ? "border-emerald-700 bg-emerald-50 text-emerald-700"
                      : "border-gray-200 bg-white text-gray-900 hover:bg-emerald-800 hover:text-white"
                  }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-12">
            <label className="block text-gray-700 font-medium mb-3">
              Or Enter Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                $
              </span>
              <input
                type="number"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
                placeholder="Enter amount"
                className="w-full rounded-xl border-2 border-gray-200 py-4 pl-10 pr-4 text-lg focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Frequency */}
          <div className="mb-12">
            <label className="block text-gray-700 font-medium mb-4">
              Donation Frequency
            </label>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => setFrequency("one-time")}
                className={`rounded-xl py-4 font-semibold transition cursor-pointer
                  ${
                    frequency === "one-time"
                      ? "bg-emerald-700 text-white"
                      : "border-2 border-gray-200 bg-white text-gray-900 hover:bg-emerald-800 hover:text-white"
                  }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setFrequency("monthly")}
                className={`rounded-xl py-4 font-semibold transition cursor-pointer
                  ${
                    frequency === "monthly"
                      ? "bg-emerald-700 text-white"
                      : "border-2 border-gray-200 bg-white text-gray-900 hover:bg-emerald-800 hover:text-white"
                  }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Dedication */}
          <div className="mb-10">
            <label className="block text-gray-700 font-medium mb-3">
              Dedicate Your Donation (Optional)
            </label>
            <select className="w-full rounded-xl border-2 border-gray-200 py-4 px-4 text-lg focus:border-emerald-600 focus:outline-none">
              <option>General Support</option>
              <option>Peace & Reconciliation</option>
              <option>Youth Empowerment</option>
              <option>Human Rights & Legal Aid</option>
              <option>Unity & Social Cohesion</option>
              <option>Sustainable Development</option>
              <option>Women Leadership</option>
            </select>
          </div>

          {/* Submit */}
          <button className="w-full flex items-center justify-center gap-3 rounded-2xl bg-emerald-700 py-5 text-white text-xl cursor-pointer font-bold hover:bg-emerald-800 transition">
            <FaLock />
            Complete Secure Donation
          </button>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-600">
            <FaShieldAlt className="text-emerald-700" />
            <span>Your donation is secure and tax-deductible</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Donate;
