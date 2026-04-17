import React from "react";
import logo from "../../assets/logo.svg"; // replace with your logo

function NavbarTwo() {
  return (
    <div className="w-full bg-[#eef3f8]">
      <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-6">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-[34px] object-contain"
          />



          <span className="text-[#8b95a7]">|</span>

          <span className="text-[26px] font-bold text-[#2b3348]">
            Car Insurance
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 text-[14px]">
          <span className="text-[#6b7280]">Call Us</span>

          <span className="font-bold text-[15px] text-[#ff9f1c]">
            [021] 111-212-212
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarTwo;