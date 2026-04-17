import React from "react";
import {
  insurancePartnerLogos,
  insuranceTrustCards,
} from "./data/smartchoice-menu-data";

function InsuranceProvidersSection() {
  return (
    <section className="bg-[#fff] px-4 py-14 md:px-8 lg:px-0">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div>
          <h2 className="max-w-[560px] text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#2a3b8f] md:text-[42px]">
            Providing the best insurance from all major insurance & takaful providers
          </h2>

          <div className="mt-14 space-y-6">
            {insuranceTrustCards.map((card) => (
              <div
                key={card.id}
                className="flex min-h-[94px] items-center gap-5 rounded-[22px] bg-white px-5 py-5 shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.text}
                    className="h-[60px] w-[60px] object-contain"
                  />
                </div>

                <p className="max-w-[420px] text-[18px] font-semibold leading-[1.45] text-[#1f1f1f] md:text-[19px]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className= "grid grid-cols-2 items-center gap-x-6 gap-y-8 pt-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">
          {insurancePartnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="group flex h-[70px] cursor-pointer items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-[42px] w-auto object-contain grayscale opacity-90 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsuranceProvidersSection;