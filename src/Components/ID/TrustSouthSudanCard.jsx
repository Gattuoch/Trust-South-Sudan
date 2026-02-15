import React from "react";
import logo from "../../assets/Id-logo.png";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function TrustContactCard() {
  return (
    <div className="w-full max-w-[500px] 
                    min-h-[650px] sm:min-h-[750px] 
                    bg-[#e9e9e9] mx-auto relative 
                    overflow-hidden shadow-2xl font-sans">

      {/* ================= TOP CURVED HEADER ================= */}
      <div className="relative bg-[#177a96] 
                      h-[180px] sm:h-[220px] 
                      rounded-b-[100%_100px] sm:rounded-b-[100%_120px] 
                      flex items-center px-4 sm:px-6">

        <img
          src={logo}
          alt="logo"
          className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] 
                     rounded-full bg-white p-2"
        />

        <div className="ml-4 sm:ml-6">
          <h1 className="text-[26px] sm:text-[40px] 
                         font-extrabold text-black leading-none">
            TRUST
          </h1>
          <h2 className="text-[20px] sm:text-[32px] 
                         font-extrabold mt-1 sm:mt-2">
            <span className="text-red-600">SOUTH </span>
            <span className="text-green-500">SUDAN</span>
          </h2>
        </div>
      </div>

      {/* ================= LEFT SIDEBAR DESIGN ================= */}
      <div className="absolute top-[180px] sm:top-[220px] 
                      left-0 h-[420px] sm:h-[480px] 
                      w-[60px] sm:w-[85px] 
                      bg-[#156f8f] overflow-hidden">

        {/* Top Green Curve */}
        <div className="absolute -top-[45px] -left-[30px] 
                        w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] 
                        bg-[#5bb949] rounded-full">
        </div>

        {/* Bottom Green Curve */}
        <div className="absolute -bottom-[45px] -left-[30px] 
                        w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] 
                        bg-[#5bb949] rounded-full">
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="relative 
                      pt-8 sm:pt-12 
                      pl-[15px] sm:pl-[25px] 
                      pr-4 sm:pr-6 
                      mt-[10px] sm:mt-[20px] 
                      space-y-6 sm:space-y-10 
                      pb-[160px] sm:pb-[200px]">

        {/* Phone */}
        <div className="flex items-start">
          <div className="w-[60px] sm:w-[85px] flex justify-center">
            <div className="bg-black p-2 sm:p-3 rounded-full text-white">
              <Phone size={18} className="sm:w-[22px] sm:h-[22px]" />
            </div>
          </div>
          <div className="text-[16px] sm:text-[20px] font-medium leading-6 sm:leading-8">
            <p>Zain +211911743465</p>
            <p>MTN +211927863377</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <div className="w-[60px] sm:w-[85px] flex justify-center">
            <div className="bg-black p-2 sm:p-3 rounded-full text-white">
              <Mail size={18} className="sm:w-[22px] sm:h-[22px]" />
            </div>
          </div>
          <p className="text-[16px] sm:text-[20px] font-medium break-all">
            trustsouthsudan@gmail.com
          </p>
        </div>

        {/* Website */}
        <div className="flex items-start">
          <div className="w-[60px] sm:w-[85px] flex justify-center">
            <div className="bg-black p-2 sm:p-3 rounded-full text-white">
              <Globe size={18} className="sm:w-[22px] sm:h-[22px]" />
            </div>
          </div>
          <p className="text-[16px] sm:text-[20px] font-medium break-all">
            https://trust-south-sudan.vercel.app
          </p>
        </div>

        {/* Address */}
        <div className="flex items-start">
          <div className="w-[60px] sm:w-[85px] flex justify-center">
            <div className="bg-black p-2 sm:p-3 rounded-full text-white">
              <MapPin size={18} className="sm:w-[22px] sm:h-[22px]" />
            </div>
          </div>
          <div className="text-[16px] sm:text-[20px] font-medium leading-6 sm:leading-8">
            <p>Juba South Sudan</p>
            <p>Gudele West block two</p>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM GREEN ANGLED SHAPE ================= */}
      <div className="absolute bottom-0 left-0 
                      w-full h-[110px] sm:h-[140px] 
                      bg-[#57b847] 
                      [clip-path:polygon(0_60%,100%_40%,100%_100%,0%_100%)]">
      </div>

      {/* ================= BLACK STRIP ================= */}
      <div className="absolute bottom-0 left-0 
                      w-full h-[25px] sm:h-[35px] 
                      bg-black">
      </div>

    </div>
  );
}
