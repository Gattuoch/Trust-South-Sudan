import React from "react";
import logo from "../../assets/Id-logo.png";
import profile from "../../assets/peter-gony.png";

export default function TrustIDCard08() {
  return (
    <div className="
      w-full 
      max-w-[470px] 
      min-h-[720px] /home/post/Trust_South_Sudan/home/post/Trust_South_Sudan/vite-project/src/assets/maar-naath.png/vite-project/src/assets/maar-naath.png
      bg-[#efefef] 
      relative 
      mx-auto 
      my-5 
      shadow-2xl 
      pb-10 
      font-sans
    ">

      {/* ================= TOP SECTION ================= */}
      <div className="
        bg-[#177a96] 
        h-[220px] 
        sm:h-[270px] 
        relative 
        text-center 
        pt-4 
        sm:pt-5 
        rounded-b-[100%_60px] 
        sm:rounded-b-[100%_80px]
      ">

        <div className="
          flex 
          flex-col 
          sm:flex-row 
          items-center 
          justify-center 
          gap-3 
          sm:gap-5 
          px-4 
          sm:p-8
        ">

          <img
            src={logo}
            alt="logo"
            className="
              w-[70px] 
              h-[70px] 
              sm:w-[95px] 
              sm:h-[95px] 
              object-contain 
              rounded-full
            "
          />

          <h1 className="
            text-[22px] 
            sm:text-[32px] 
            font-black 
            tracking-wide 
            text-black 
            text-center
          ">
            TRUST{" "}
            <span className="text-red-600">SOUTH</span>{" "}
            <span className="text-[#49a942]">SUDAN</span>
          </h1>
        </div>
      </div>

      {/* ================= PROFILE ================= */}
      <div className="
        flex 
        justify-center 
        -mt-[70px] 
        sm:-mt-[100px] 
        relative 
        z-10
      ">
        <img
          src={profile}
          alt="profile"
          className="
            w-[120px] 
            h-[120px] 
            sm:w-[170px] 
            sm:h-[170px] 
            rounded-full 
            border-[6px] 
            sm:border-[8px] 
            border-[#efefef] 
            object-cover
          "
        />
      </div>

      {/* ================= NAME ================= */}
      <h2 className="
        text-center 
        text-[22px] 
        sm:text-[30px] 
        font-black 
        mt-4
      ">
        Peter Gony Rut  
      </h2>

      {/* ================= POSITION ================= */}
      <div className="
        w-[90%] 
        sm:w-[75%] 
        mx-auto 
        mt-3 
        bg-[#156f8f] 
        text-black 
        font-black 
        py-2 
        text-[16px] 
        sm:text-[22px] 
        text-center
      ">
        Program Coordinator 
      </div>

      {/* ================= DETAILS ================= */}
      <div className="
        px-5 
        sm:px-9 
        text-[14px] 
        sm:text-[20px] 
        leading-6 
        sm:leading-7 
        mt-4 
        space-y-2 
        font-medium
      ">
        <p><span className="font-bold">ID No:-</span> 008</p>
        <p><span className="font-bold">Gender:-</span> male</p>
        <p><span className="font-bold">Nationality:-</span> South Sudanese</p>
        <p><span className="font-bold">Location:-</span> Juba Head Office</p>
        <p><span className="font-bold">Phone:-</span> +211927242400</p>
        <p><span className="font-bold">E-mail:-</span> petergony4@gmail.com</p>
      </div>

      {/* ================= BOTTOM GREEN SECTION ================= */}
      <div className="
        w-full 
        h-[110px] 
        sm:h-[140px] 
        bg-[#57b847] 
        mt-8 
        sm:mt-10 
        [clip-path:polygon(0_60%,100%_35%,100%_100%,0%_100%)]
      "></div>

      {/* ================= BLACK STRIP ================= */}
      <div className="w-full h-[25px] sm:h-[30px] bg-black"></div>

    </div>
  );
}
