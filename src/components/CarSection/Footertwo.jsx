import React from "react";

import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import linkedinIcon from "../../assets/linkedin.png";

function Footer2() {
  return (
    <footer className="w-full bg-[#5c617d] text-white">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-12">
          
          {/* Left */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#243a8d]">
              About
            </h3>
          </div>

<div className="space-y-4 text-[13px]">
  <p className="cursor-pointer transition-colors duration-200 hover:text-[#ff9f1c]">
    About us
  </p>
  <p className="cursor-pointer transition-colors duration-200 hover:text-[#ff9f1c]">
    How we work
  </p>
  <p className="cursor-pointer transition-colors duration-200 hover:text-[#ff9f1c]">
    Blog
  </p>
  <p className="cursor-pointer transition-colors duration-200 hover:text-[#ff9f1c]">
    FAQs
  </p>
  <p className="cursor-pointer transition-colors duration-200 hover:text-[#ff9f1c]">
    Media Center
  </p>
</div>

          {/* Right */}
          <div className="md:pl-10">
            <p className="text-[14px]">Get Free Advice</p>

            <p className="mt-2 text-[22px] font-bold">
              (021) 111-212-212
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#2f66b3]">
                <img
                  src={facebookIcon}
                  alt="facebook"
                  className="h-[16px] w-[16px] object-contain"
                />
              </div>

              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#1da1f2]">
                <img
                  src={twitterIcon}
                  alt="twitter"
                  className="h-[16px] w-[16px] object-contain"
                />
              </div>

              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#2f66b3]">
                <img
                  src={linkedinIcon}
                  alt="linkedin"
                  className="h-[16px] w-[16px] object-contain"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-white/30 px-6 py-8 text-center md:px-16">
          <p className="mx-auto max-w-[1200px] text-[13px] leading-[1.9] text-white">
            Smartchoice.pk has taken reasonable efforts to ensure that all contents of
            the website are accurate and free of error. However at no time can it be
            guaranteed that mistakes are not present. Smartchoice.pk reserve's the right
            to change website content at any time and without prior notice. Smartchoice.pk
            does at no time guarantee that the contents of its website are suitable to any
            individual case and in no event will Smartchoice.pk warrant or guarantee the
            suitability for any use or purpose of information, services or products on this
            website.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer2;