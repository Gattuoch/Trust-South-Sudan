import {
  LuMapPin,
  LuMail,
  LuPhone
} from "react-icons/lu";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import { useState } from "react";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#faf9f6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Reach out to learn more about our work or to get involved
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            {/* Headquarters */}
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-emerald-100">
                <LuMapPin className="text-emerald-700 text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Headquarters
                </h4>
                <p className="text-gray-600">
              Gudele West Block (2) Juba, South Sudan
            </p>
            <p className="text-gray-500 text-sm">
              Operating across all 10 states & 3 administrative areas
            </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-emerald-100">
                <LuMail className="text-emerald-700 text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                <a 
              href="mailto:trustsouthsudan@gmail.com" 
              className="text-gray-600 hover:text-emerald-700 transition-colors"
            >
              trustsouthsudan@gmail.com
            </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-100">
                <LuPhone className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                 <div className="text-gray-600 space-y-1">
              <a 
                href="tel:+211927863377"
                className="block hover:text-emerald-700 transition-colors"
              >
                MTN: +211 927 863 377
              </a>
              <a 
                href="tel:+211911743455"
                className="block hover:text-emerald-700 transition-colors"
              >
                Zain: +211 911 743 455
              </a>
            </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a className="h-11 w-11 rounded-lg cursor-pointer bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-800 transition">
                  <FaFacebookF />
                </a>
                <a className="h-11 w-11 rounded-lg cursor-pointer bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-800 transition">
                  <FaTwitter />
                </a>
                <a className="h-11 w-11 rounded-lg cursor-pointer bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-800 transition">
                  <FaLinkedinIn />
                </a>
                <a className="h-11 w-11 rounded-lg cursor-pointer bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-800 transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

         {/* Right: Form */}
<div className="bg-white rounded-2xl shadow-lg p-10">
  <form className="space-y-6" onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your@email.com"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Subject
      </label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="How can we help?"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Message
      </label>
      <textarea
        rows="5"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-emerald-700 py-3 text-white font-semibold cursor-pointer hover:bg-emerald-800 transition"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>

    {success && (
      <p className="text-green-600 text-center">{success}</p>
    )}
  </form>
</div>

        </div>
      </div>
    </section>
  );
}
