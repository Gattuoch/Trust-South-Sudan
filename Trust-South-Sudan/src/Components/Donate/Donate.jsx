import { useState } from "react";
import { FaLock, FaShieldAlt, FaHeart } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const presetAmounts = [25, 50, 100, 250];

const Donate = () => {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState("one-time");
  const [program, setProgram] = useState("General Support");

  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

 const handleDonate = async () => {
  if (!amount || amount <= 0) {
    toast.error("Please enter a valid donation amount.");
    return;
  }

  if (!donorEmail) {
    toast.error("Email is required.");
    return;
  }

  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/.test(donorEmail)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  setLoading(true);
  const loadingToast = toast.loading("Processing your donation...");

    try {
      const payload = {
        amount,
        frequency,
        program,
        donorName,
        donorEmail,
        message,
      };

      const url =
        (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000") +
        "/api/donate/sent-email";

      const response = await axios.post(url, payload);

      toast.dismiss(loadingToast);

      if (response.status === 200) {
        toast.success("🙏 Thank you for supporting our mission!", {
          icon: <FaHeart />,
        });

        // Reset form
        setAmount(50);
        setFrequency("one-time");
        setProgram("General Support");
        setDonorName("");
        setDonorEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.dismiss(loadingToast);

      const errorMsg =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";

      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-24 px-6">
      {/* BEAUTIFUL TOASTER */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "18px",
            padding: "16px 20px",
            fontWeight: "600",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
          },
          success: {
            style: {
              background: "linear-gradient(to right, #065f46, #10b981)",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "linear-gradient(to right, #7f1d1d, #ef4444)",
              color: "#fff",
            },
          },
          loading: {
            style: {
              background: "#1f2937",
              color: "#fff",
            },
          },
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-[#f9fcf8] shadow-xl p-10 md:p-14">

          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Donation Amount
          </h2>

          {/* Preset Amounts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`rounded-2xl py-6 text-2xl font-bold border-2 transition-all duration-300
                  ${
                    amount === amt
                      ? "bg-emerald-700 text-white border-emerald-700 scale-105"
                      : "bg-white border-gray-200 hover:bg-emerald-700 hover:text-white hover:scale-105"
                  }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <label className="block mb-2 font-medium">Custom Amount</label>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-xl border-2 px-4 py-4 focus:border-emerald-600 outline-none"
            />
          </div>

          {/* Donor Name */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full rounded-xl border-2 px-4 py-4 focus:border-emerald-600 outline-none"
            />
          </div>

          {/* Donor Email */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              className="w-full rounded-xl border-2 px-4 py-4 focus:border-emerald-600 outline-none"
            />
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="block mb-2 font-medium">Message (Optional)</label>
            <textarea
              rows="4"
              placeholder="Leave a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border-2 px-4 py-4 focus:border-emerald-600 outline-none"
            />
          </div>

          {/* Frequency */}
          <div className="mb-12">
            <label className="block mb-4 font-medium">Donation Frequency</label>
            <div className="grid grid-cols-2 gap-6">
              {["one-time", "monthly"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFrequency(type)}
                  className={`rounded-xl py-4 font-semibold transition-all duration-300
                    ${
                      frequency === type
                        ? "bg-emerald-700 text-white"
                        : "border-2 border-gray-200 hover:bg-emerald-700 hover:text-white"
                    }`}
                >
                  {type === "one-time" ? "One-Time" : "Monthly"}
                </button>
              ))}
            </div>
          </div>

          {/* Program */}
          <div className="mb-12">
            <label className="block mb-3 font-medium">Donation Program</label>
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full rounded-xl border-2 py-4 px-4 outline-none"
            >
              <option>General Support</option>
              <option>Healing the Nation</option>
              <option>Empowering Tomorrow</option>
              <option>Women Rise</option>
              <option>Food for Peace</option>
              <option>Healthy Communities</option>
              <option>Accountable Leaders</option>
              <option>Green South Sudan</option>
            </select>
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            onClick={handleDonate}
            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-emerald-700 py-5 text-white text-xl font-bold hover:bg-emerald-800 transition disabled:opacity-60"
          >
            <FaLock />
            {loading ? "Processing..." : "Complete Secure Donation"}
          </button>

          <div className="mt-6 flex justify-center gap-2 text-gray-600">
            <FaShieldAlt className="text-emerald-700" />
            <span>100% Secure Payment</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Donate;
