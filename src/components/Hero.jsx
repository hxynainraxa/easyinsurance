import React from "react";
import carIcon from "../assets/car.svg";
import bikeIcon from "../assets/bike.svg";
import healthIcon from "../assets/health.svg";
import travelIcon from "../assets/travel.svg";
import thirdPartyCarIcon from "../assets/car2.svg";
import { useNavigate } from "react-router-dom";

function Hero() {
   const navigate = useNavigate();

     const handleClick = () => {
    navigate("/car-insurance"); // your route path
  };

  return (
<section className="px-4 pb-20 pt-14 md:pt-20 bg-[linear-gradient(180deg,#dfeafd_0%,#dfeafd_50%,#ffffff_100%),linear-gradient(90deg,#dfeafd_0%,#dfeafd_50%,#ffffff_100%)]">
      <div className="mx-auto max-w-[1100px] text-center">
        <h1 className="text-[42px] font-bold leading-none tracking-[-0.02em] text-[#2d3f9f] md:text-[60px]">
          Find The Best{" "}
<span className="relative inline-block pb-3">
  Insurance

  <span className="absolute left-[4%] top-[90%] w-[100%]">
    <svg viewBox="0 0 250 20" className="w-full" fill="none">
      <path
        d="M10 12C70 6 130 6 210 12"
        stroke="#ef9807"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </span>
</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[760px] text-[18px] font-semibold leading-[1.4] text-[#1f1f1f] md:text-[20px]">
          Search, compare, and buy the insurance plan in Pakistan that fits your need
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-7">
          <div  onClick={handleClick} className="group relative flex h-[112px] w-[134px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-[#f7f7f7] shadow-[0_6px_0_#b8b8b8] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_0_#ef9807]">
            <img src={carIcon} alt="Car" className="mb-3 h-[46px] w-auto object-contain" />
            <h3 className="text-[15px] font-semibold text-[#202020]">Car</h3>
          </div>

          <div className= "cursor-pointer group relative flex h-[112px] w-[134px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-[#f7f7f7] shadow-[0_6px_0_#b8b8b8] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_0_#ef9807]">
            <img src={bikeIcon} alt="Bike" className="mb-3 h-[46px] w-auto object-contain" />
            <h3 className="text-[15px] font-semibold text-[#202020]">Bike</h3>
          </div>

          <div   onClick={() => navigate("/health-insurance")}  className="group relative flex h-[112px] w-[134px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-[#f7f7f7] shadow-[0_6px_0_#b8b8b8] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_0_#ef9807]">
            <img src={healthIcon} alt="Health" className="mb-3 h-[46px] w-auto object-contain"  />
            <h3 className="text-[15px] font-semibold text-[#202020]">Health</h3>
          </div>

          <div className="group relative flex h-[112px] w-[134px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-[#f7f7f7] shadow-[0_6px_0_#b8b8b8] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_0_#ef9807]">
            <img src={travelIcon} alt="Travel" className="mb-3 h-[46px] w-auto object-contain" />
            <h3 className="text-[15px] font-semibold text-[#202020]">Travel</h3>
          </div>

          <div className="group relative flex h-[112px] w-[134px] cursor-pointer flex-col items-center justify-center rounded-[20px] bg-[#f7f7f7] shadow-[0_6px_0_#b8b8b8] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_0_#ef9807]">
<span className="absolute -top-3 right-3 z-10 rounded-full bg-[#ff1a1a] px-3 py-1 text-[12px] font-bold text-white shadow-md">
  NEW
</span>

            <img
              src={thirdPartyCarIcon}
              alt="Third Party Car"
              className="mb-3 h-[46px] w-auto object-contain"
            />

            <h3 className="text-[15px] font-semibold text-[#202020]">
              Third Party Car
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;