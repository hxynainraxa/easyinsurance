import React from "react";
import phoneImage from "../../assets/mobileapp.png";
import leftTopIcon from "../../assets/policy.svg";
import leftBottomIcon from "../../assets/labtest.svg";
import rightTopIcon from "../../assets/doctor.svg";
import rightBottomIcon from "../../assets/discount.svg";
import downloadButtonsImage from "../../assets/appstore.svg";
import secondDownloadButtonImage from "../../assets/playstore.svg";

function HealthAppSection() {
  return (
    <section className="bg-[#083377] px-4 py-14 md:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[40px]">
            Free Mobile App With Every Health Plan
          </h2>
          <p className="mx-auto mt-3 max-w-[860px] text-[16px] leading-[1.5] text-white md:text-[18px]">
            Every Smartchoice health insurance plan comes with a free health &
            lifestyle mobile app, at no extra cost
          </p>
        </div>

        {/* Main layout */}
        <div className="mt-14 grid items-center gap-y-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-10">
          {/* Left cards */}
          <div className="flex flex-col gap-12">
            <InfoCard
              icon={leftTopIcon}
              title="Policy & Coverage Information"
              description="Access your health insurance details, benefits, and support in one place."
              bg="bg-[#dff0ec]"
            />

            <InfoCard
              icon={leftBottomIcon}
              title="Exclusive Discounts on Lab Tests"
              description="Save on diagnostic tests at leading labs across Pakistan."
              bg="bg-[#e7edf8]"
            />
          </div>

          {/* Phone center */}
          <div className="flex flex-col items-center">
            <img
              src={phoneImage}
              alt="Health mobile app"
              className="w-full max-w-[260px] object-contain drop-shadow-[0_18px_20px_rgba(0,0,0,0.35)] md:max-w-[290px] lg:max-w-[310px]"
            />

            <div className="mt-8 flex w-full items-center justify-start gap-4 pl-2">
              <img
                src={downloadButtonsImage}
                alt="App Store"
                className="h-[56px] w-[208px] object-contain"
              />

              <img
                src={secondDownloadButtonImage}
                alt="Google Play"
                className="h-[56px] w-[208px] object-contain"
              />
            </div>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-12">
            <InfoCard
              icon={rightTopIcon}
              title="Free Doctor Consultations"
              description="Consult qualified doctors anytime through the app."
              bg="bg-[#f3ebfa]"
            />

            <InfoCard
              icon={rightBottomIcon}
              title="Everyday Deals & Discounts"
              description="Enjoy discounts on food, retail, and everyday spending."
              bg="bg-[#f6efc7]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, description, bg }) {
  return (
    <div
      className={`${bg} flex h-[97px] w-[353px] items-center gap-4 rounded-[6px] px-5 py-5 shadow-none`}
    >
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="h-[50px] w-[50px] object-contain"
        />
      </div>

      <div>
        <h3 className="text-[14px] font-semibold leading-[1.3] text-[#21409a] md:text-[15px]">
          {title}
        </h3>
        <p className="mt-1 text-[14px] leading-[1.5] text-[#2f2f2f] md:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HealthAppSection;