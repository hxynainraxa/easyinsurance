import React from "react";
import {
  footerTopContent,
  footerSections,
  paymentMethods,
  footerBottomText,
} from "./data/footer.js";

function Footer() {
  return (
    <footer className="bg-[#5c5c77] text-white">
      <div className="mx-auto max-w-[1180px] px-6 pb-0 pt-6 md:px-8 lg:px-10">
        {/* Top logo and text */}
        <div className="mx-auto max-w-[860px] text-center">
          <img
            src={footerTopContent.logo}
            alt="Smartchoice"
            className="mx-auto h-[62px] w-auto object-contain"
          />

          <p className="mx-auto mt-5 max-w-[820px] text-[18px] leading-[1.75] text-white/95 md:text-[16px]">
            {footerTopContent.tagline}
          </p>

          <p className="mx-auto mt-5 max-w-[960px] text-[18px] leading-[1.9] text-white/95 md:text-[16px]">
            {footerTopContent.companyInfo}
          </p>
        </div>

        <div className="mt-12">
          {footerSections.map((section, index) => (
            <div
              key={section.id}
              className={`grid gap-8 border-white/15 py-4 ${
                index !== 0 ? "border-t" : ""
              } ${
                section.id === "about"
                  ? "grid-cols-1 md:grid-cols-[140px_1fr_1fr_320px]"
                  : "grid-cols-1 md:grid-cols-[140px_1fr_1fr_1fr]"
              }`}
            >
              <div>
                <h3 className="text-[16px] font-semibold text-white">
                  {section.title}
                </h3>
              </div>

              {section.columns.map((column, colIndex) => (
               <div
  key={colIndex}
  className={`space-y-3 ${
    section.id === "about" ? "md:pl-3" : ""
  }`}
>
                  {column.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                    className="block text-[15px] leading-[1.45] text-[#c7c9d9] transition-colors duration-200 hover:text-[#ff7a00]">
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}

              {section.rightContent && (
                <div className="space-y-4">
                  <div>
                    <p className="text-[16px] leading-[1.4] text-white">
                      {section.rightContent.title}
                    </p>
                    <a
                      href={`tel:${section.rightContent.phone.replace(/\D/g, "")}`}
                      className="mt-1 block text-[22px] font-bold leading-none text-white"
                    >
                      {section.rightContent.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    {section.rightContent.socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#2f8be6] text-[14px] font-bold text-white transition-transform duration-200 hover: text-orange scale-105"
                      >
                        {social.short}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pay via */}
     <div className="flex flex-wrap items-center gap-4 border-t border-white/15 py-5 md:pl-[180px]">
<h3 className="text-[16px] font-semibold text-white">
  Pay via
</h3>

<div className="flex flex-wrap items-center gap-3">
            {paymentMethods.map((item) => (
              <div
                key={item.id}
                className="flex h-[34px] items-center rounded-[6px] bg-white px-3 py-1"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[35px] w-[55px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom disclaimer */}
      <div className="border-t border-white/20 bg-[#666682] px-6 py-7 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1160px]">
          <p className="mx-auto max-w-[1140px] text-center text-[13px] leading-[1.8] text-white/90 md:text-[14px]">
            {footerBottomText}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;