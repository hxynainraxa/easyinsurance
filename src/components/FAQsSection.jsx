import React, { useState } from "react";

function FAQs({ faqsData }) {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-10 text-center text-[34px] font-bold leading-none tracking-[-0.02em] text-[#2d3f9f] md:mb-12 md:text-[44px]">
          FAQs
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {faqsData?.filter((_, index) => index % 2 === 0).map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-[6px] border border-[#e6e9f2] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between px-5 py-6 text-left"
                  >
                    <span className="pr-5 text-[18px] font-semibold text-[#1f1f1f]">
                      {faq.question}
                    </span>

                    <span className="text-[30px] text-[#2d3f9f]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-5 text-[16px] text-[#4a4a4a]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {faqsData?.filter((_, index) => index % 2 !== 0).map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-[6px] border border-[#e6e9f2] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between px-5 py-6 text-left"
                  >
                    <span className="pr-5 text-[18px] font-semibold text-[#1f1f1f]">
                      {faq.question}
                    </span>

                    <span className="text-[30px] text-[#2d3f9f]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-5 text-[16px] text-[#4a4a4a]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;