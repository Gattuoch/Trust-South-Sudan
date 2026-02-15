import React from "react";
import logo from "../../assets/Id-logo.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

export default function TrustCard() {
  const icons = [FaPhoneAlt, FaEnvelope, BsBuilding, FaMapMarkerAlt];

  return (
    <div className="bg-gray-200 flex justify-center py-6 px-3 print:bg-white">
      {/* ================= POSTER ================= */}
      <div
        className="
          relative
          w-full
          max-w-[720px]
          bg-white
          shadow-xl
          border
          text-[12px] sm:text-[13px]
          leading-snug
          font-sans
          overflow-hidden
          print:shadow-none
          print:border-none
        "
      >
        {/* ================= HEADER ================= */}
        <div className="relative bg-white overflow-hidden">
          {/* Top Curved Blue Shape */}
          <div
            className="
              absolute top-0 left-0 w-full
              h-[180px] sm:h-[220px] md:h-[240px]
              bg-[#0e6f8f]
              rounded-b-[120px] sm:rounded-b-[160px] md:rounded-b-[180px]
            "
          />

          {/* Header Content */}
          <div
            className="
              relative
              flex flex-col sm:flex-row
              items-center
              justify-between
              px-4 sm:px-8 md:px-10
              pt-6 sm:pt-8
              pb-6
              gap-4 sm:gap-0
            "
          >
            {/* Logo */}
            <div className="bg-white rounded-full p-2 shadow-lg">
              <img
                src={logo}
                alt="Trust Logo"
                className="
                  w-[90px] h-[90px]
                  sm:w-[110px] sm:h-[110px]
                  md:w-[120px] md:h-[120px]
                  object-contain rounded-full
                "
              />
            </div>

            {/* Title */}
            <div className="text-center sm:text-right leading-tight">
              <h1
                className="
                  text-[38px] sm:text-[48px] md:text-[60px]
                  font-black
                  tracking-[2px] sm:tracking-[3px] md:tracking-[4px]
                  text-black
                  [text-stroke:1px_white]
                  [-webkit-text-stroke:1px_white]
                "
              >
                TRUST
              </h1>

              <h2
                className="
                  text-[20px] sm:text-[26px] md:text-[34px]
                  font-extrabold
                "
              >
                <span className="text-red-600 underline decoration-2 underline-offset-4">
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
        <div className="relative mt-[40px] pb-[120px]">
          
          {/* ===== LEFT SIDEBAR ===== */}
          <div className="absolute top-[0px] left-0 w-[70px] h-[350px] bg-[#0e6f8f] rounded-tr-[50px] rounded-br-[50px] flex flex-col items-center pt-[70px] gap-[38px] z-20">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] bg-black rounded-full text-white flex items-center justify-center text-[18px]"
              >
                <Icon />
              </div>
            ))}
          </div>

          {/* ===== CONTENT ===== */}
          <div className="ml-[100px] mr-[20px] text-[16px]">
            <div className="mb-[42px]">
              <p>Zain +211911743465</p>
              <p>MTN +211927863377</p>
            </div>

            <div className="mb-[42px]">
              <p>trustsouthsudan@gmail.com</p>
            </div>

            <div className="mb-[42px]">
              <p>https://trust-south-sudan.vercel.app</p>
            </div>

            <div>
              <p>Juba South Sudan</p>
              <p>Gudele West block two</p>
            </div>
          </div>

          {/* ===== GREEN TOP LEFT ===== */}
          <div className="absolute top-[-10px] left-[-60px] w-[140px] h-[140px] bg-[#59b548] rounded-[100px] z-10"></div>

          {/* ===== GREEN BOTTOM LEFT ===== */}
          <div className="absolute bottom-[40px] left-[-60px] w-[150px] h-[90px] bg-[#59b548] rounded-[100px] z-10"></div>

          {/* ===== GREEN DIAGONAL ===== */}
          <div className="
      absolute
      bottom-[-50px] sm:bottom-[-60px]
      left-[-10%] sm:left-[-2%]
      w-[140%] sm:w-[120%]
      h-[100px] sm:h-[120px]
      bg-[#59b548] 
      rotate-[-6deg] sm:rotate-[-7deg]
    "
  ></div>
        </div>

        {/* ===== BOTTOM BLACK LINE ===== */}
        <div className="absolute bottom-0 left-0 w-full h-[20px] bg-black"></div>
      </div>
    </div>
  );
}
