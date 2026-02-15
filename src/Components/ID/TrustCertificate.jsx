import React from "react";
import logo from "../../assets/Id-logo.png";
import stampLogo from "../../assets/eco-logo.png";
import ceoSign from "../../assets/ceo-signture.png";

const TrustCertificate = () => {
  return (
    <div className="
      w-full 
      max-w-[420px] 
      min-h-[680px] 
      bg-white 
      mx-auto 
      my-6 
      relative 
      shadow-2xl 
      flex 
      flex-col 
      font-sans
    ">

      {/* ================= TOP SECTION ================= */}
      <div className="
        bg-[#177a96] 
        h-[150px] 
        sm:h-[170px] 
        relative 
        text-center 
        pt-4 
        sm:pt-5 
        rounded-b-[100%_60px] 
        sm:rounded-b-[100%_80px]
      ">

        <img
          src={logo}
          alt="Trust South Sudan Logo"
          className="
            w-[70px] 
            sm:w-[95px] 
            absolute 
            left-4 
            sm:left-5 
            top-4 
            sm:top-5 
            rounded-full
          "
        />

        <h1 className="
          mt-20 
          sm:mt-24 
          text-[22px] 
          sm:text-[30px] 
          font-black 
          tracking-wide 
          text-black
        ">
          TRUST <span className="text-red-600">SOUTH</span>{" "}
          <span className="text-green-500">SUDAN</span>
        </h1>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="
        flex-1 
        px-5 
        sm:px-8 
        pt-5 
        pb-8 
        text-center 
        text-[13px] 
        sm:text-[15px] 
        leading-6 
        sm:leading-7 
        text-gray-800
      ">

        <p className="mb-4 sm:mb-5">
          Trust South Sudan sincerely thanks you for your honesty and integrity
          in finding and returning the lost ID. Your noble action demonstrates
          strong moral character and inspires trust (place it to any nearest
          police station if our office doesn’t respond to your calls).
        </p>

        {/* Info Section */}
        <div className="text-left text-[13px] sm:text-[15px] space-y-1 mt-4">
          <p><strong>Headquarter:-</strong> Juba South Sudan</p>
          <p><strong>Address :-</strong> Gudele West block two</p>
          <p><strong>Contact info.</strong> Zain +211911743465</p>
          <p className="ml-8 sm:ml-12">MTN +211927863377</p>
          <p><strong>Email:-</strong> trustsouthsudan@gmail.com</p>
          <p className="break-all">https://trust-south-sudan.vercel.app</p>
        </div>

        {/* Dates */}
        <div className="
          mt-5 
          sm:mt-6 
          text-[#1e6c8c] 
          text-[15px] 
          sm:text-[17px] 
          font-extrabold 
          space-y-1
        ">
          <p><strong>Date of Issued</strong> 15/02/2026</p>
          <p><strong>Validity Date</strong> 31/12/2028</p>
        </div>

        {/* Bottom Section */}
        <div className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          items-center 
          sm:items-end 
          mt-10 
          gap-8
        ">

          {/* Left Side */}
          <div className="
            text-center 
            sm:text-left 
            text-[11px] 
            sm:text-[12px] 
            text-[#1e6c8c] 
            font-extrabold 
            leading-tight
          ">
            <p className="mb-1">TRUST SOUTH SUDAN.</p>
            <p>CEO OFFICE</p>
            <p>MR. DAVID DAK DOYAK</p>
            <p>JUBA SOUTH SUDAN.</p>

            <div className="mt-5 sm:mt-6">
              <p className="font-black text-[14px] sm:text-[16px] text-black mb-1">
                CEO SIGNATURE
              </p>
              <img
                src={ceoSign}
                alt="CEO Signature"
                className="w-[120px] sm:w-[150px] block mb-1"
              />
              <div className="w-[130px] sm:w-[160px] h-[2px] bg-black"></div>
            </div>
          </div>

          {/* Right Side Stamp Logo */}
          <div className="flex items-center sm:items-end justify-center">
            <img
              src={stampLogo}
              alt="Official Stamp"
              className="
                w-[100px] 
                h-[100px] 
                sm:w-[130px] 
                sm:h-[130px] 
                object-contain
              "
            />
          </div>

        </div>
      </div>

      {/* ================= BOTTOM GREEN SHAPE ================= */}
      <div className="
        w-full 
        h-[100px] 
        sm:h-[120px] 
        bg-green-500 
        [clip-path:polygon(0_60%,100%_0%,100%_100%,0%_100%)]
      "></div>

      {/* ================= BLACK STRIP ================= */}
      <div className="w-full h-[25px] sm:h-[30px] bg-black"></div>

    </div>
  );
};

export default TrustCertificate;
