import React from "react";
import { whySmartchoiceCards } from "../components/data/smartchoice-menu-data";

function WhySmartchoice() {
  return (
    <section className="bg-[#eff6fc] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-12 text-center text-[34px] font-bold leading-none tracking-[-0.02em] text-[#2d3f9f] md:mb-14 md:text-[42px]">
          Why Smartchoice
        </h2>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {whySmartchoiceCards.map((card) => (
            <div
              key={card.id}
              className="min-h-[310px] rounded-[20px] bg-white px-6 pb-8 pt-6 shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="mb-6 h-[64px] w-[61px] object-contain"
              />

              <h3 className="mb-4 text-[18px] font-bold leading-[1.2] text-[#1f1f1f]">
                {card.title}
              </h3>

              <p className="text-[16px] font-normal leading-[1.65] text-[#2d2d2d]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySmartchoice;