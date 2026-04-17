import React from "react";
import healthIllustration from "../assets/health-illustration.png";

function HealthSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:px-6 md:py-20">
<div className="mx-auto grid max-w-[1120px] items-center gap-10 pr-6 lg:grid-cols-2 lg:pr-12">
        
        {/* Left Content */}
        <div>
          <h2 className="text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-[#2d3f9f] md:text-[44px]">
            Health Insurance
          </h2>

          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-[#2d2d2d]">
            Ensuring the health of yourself and your family is a top priority
            for both you and us. Our health insurance plans are designed to
            protect you from unexpected medical expenses, providing you
            with complete peace of mind.
          </p>

          <button className="mt-8 rounded-full bg-[#2d3f9f] px-7 py-3 text-[15px] font-semibold text-white transition duration-300 ">
            View Health Plans
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={healthIllustration}
            alt="Health Insurance"
            className="max-w-[480px] w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default HealthSection;