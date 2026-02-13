import React from "react";
import logo from "../../assets/Id-logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function TrustCard() {
  return (
    <div className="bg-gray-200 flex justify-center py-6 px-3 print:bg-white">
      {/* ================= POSTER ================= */}
      <div className="relative w-full max-w-[720px] bg-white shadow-xl border font-sans print:shadow-none print:border-none overflow-hidden">

        {/* ================= HEADER ================= */}
        <div className="relative bg-white overflow-hidden">

          {/* Blue Curve */}
          <div className="absolute top-0 left-0 w-full h-[180px] sm:h-[220px] md:h-[240px] bg-[#3c78e9] rounded-b-[120px] sm:rounded-b-[160px] md:rounded-b-[180px]" />

          {/* Header Content */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 pt-6 sm:pt-8 pb-8 gap-4">

            {/* Logo */}
            <div className="bg-white rounded-full p-2 shadow-lg">
              <img
                src={logo}
                alt="Trust Logo"
                className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] object-contain rounded-full"
              />
            </div>

            {/* Title */}
            <div className="text-center sm:text-right leading-tight">
              <h1 className="text-[32px] sm:text-[48px] md:text-[60px] font-black tracking-wide text-black">
                TRUST
              </h1>

              <h2 className="text-[18px] sm:text-[26px] md:text-[34px] font-extrabold">
                <span className="text-red-600 underline underline-offset-4">
                  SOUTH
                </span>{" "}
                <span className="text-green-600 underline">
                  SUDAN
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* ================= BODY SECTION ================= */}
        <div className="flex flex-col md:flex-row">

          

{/* ================= SIDEBAR ================= */}
<div className="relative md:w-[100px] bg-[#0b5f74] flex md:flex-col justify-center items-center gap-6 py-6 p-6 mt-8">

  {/* Decorative Circles (Desktop Only) */}
  <div className="hidden md:block absolute w-[200px] h-[100px] bg-green-500 rounded-full -left-[55px] -top-[70px]" />
  <div className="hidden md:block absolute w-[200px] h-[140px]bg-green-500 rounded-full -left-[55px] -bottom-[70px]" />

  {/* Phone Numbers */}
  <div className="flex flex-col gap-4">
    <div className="flex flex-col items-center gap-2">
      <div className="bg-black w-[45px] h-[45px] rounded-full flex justify-center items-center text-white text-[18px] shadow-md">
        <FaPhone />
      </div>
      
    </div>

    {/* Email */}
    <div className="flex flex-col items-center gap-2">
      <div className="bg-black w-[45px] h-[45px] rounded-full flex justify-center items-center text-white text-[18px] shadow-md">
        <FaEnvelope />
      </div>
    </div>

    {/* Website */}
    <div className="flex flex-col items-center gap-2">
      <div className="bg-black w-[45px] h-[45px] rounded-full flex justify-center items-center text-white text-[18px] shadow-md">
        <FaGlobe />
      </div>
    </div>

    {/* Location */}
    <div className="flex flex-col items-center gap-2">
      <div className="bg-black w-[45px] h-[45px] rounded-full flex justify-center items-center text-white text-[18px] shadow-md">
        <FaMapMarkerAlt />
      </div>
    </div>
  </div>
</div>

          {/* ================= CONTENT ================= */}
          <div className="flex-1 px-6 py-8 text-[15px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed space-y-4">

            <div>
              <div className="text-white text-[14px] text-center">
        Zain: +211911743465 <br />
        MTN: +211927863377
      </div>
            </div>

            <div>
              <p>trustsouthsudan@gmail.com</p>
              <p>https://trust-south-sudan.vercel.app</p>
            </div>

            <div>
              <p>Juba South Sudan</p>
              <p>Gudele West block two</p>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM ANGLED SHAPE ================= */}
        <div className="absolute -bottom-[60px] left-[-5%] w-[120%] h-[120px] bg-green-500 rotate-[-7deg]" />
      </div>
    </div>
  );
}
