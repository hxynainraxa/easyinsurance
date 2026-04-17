import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Slider from "../Header/Slider";
import healthBgImage from "../../assets/health-bg.png";
import myselfIcon from "../../assets/myself.svg";
import familyIcon from "../../assets/family.svg";
import parentsIcon from "../../assets/parents.svg";
import HealthAppSection from "./Phone";
import WhySmartchoice from "../WhySmartChoice";
import FAQs from "../FAQsSection";
import { healthFaqsData } from "../data/smartchoice-menu-data";
import Footer from "../Footer";

const HEALTH_FORM_STORAGE_KEY = "healthInsuranceForm";

function HealthInsurancePage() {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("family");
  const [myAge, setMyAge] = useState("");
  const [spouseAge, setSpouseAge] = useState("");
  const [selectedLimit, setSelectedLimit] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem(HEALTH_FORM_STORAGE_KEY);

    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);

        setSelectedType(parsed.selectedType || "family");
        setMyAge(parsed.myAge || "");
        setSpouseAge(parsed.spouseAge || "");
        setSelectedLimit(parsed.selectedLimit || "");
      } catch (error) {
        console.error("Failed to parse saved health form data:", error);
      }
    }
  }, []);

  useEffect(() => {
    const formDataToSave = {
      selectedType,
      myAge,
      spouseAge,
      selectedLimit,
    };

    localStorage.setItem(
      HEALTH_FORM_STORAGE_KEY,
      JSON.stringify(formDataToSave)
    );
  }, [selectedType, myAge, spouseAge, selectedLimit]);

  const isFormValid =
    selectedType === "family"
      ? myAge && spouseAge && selectedLimit
      : myAge && selectedLimit;

  const cardBase =
    "flex h-[92px] flex-col items-center justify-center rounded-[8px] border bg-white transition-all duration-200";
  const activeCard =
    "border-[#2d3f9f] shadow-[0_0_0_1px_#2d3f9f]";
  const inactiveCard =
    "border-[#d9ddea] hover:border-[#2d3f9f] hover:bg-[#f5f8ff]";

  const inputBase =
    "h-[46px] w-full appearance-none rounded-[8px] border border-[#d9ddea] bg-white px-4 pr-10 text-[13px] font-medium outline-none transition-all duration-200 hover:border-[#2d3f9f] focus:border-[#2d3f9f] focus:ring-0";
  const placeholderClass = "text-[#b7becd]";

  const limitBase =
    "flex h-[58px] items-center justify-center rounded-[6px] border text-[14px] font-medium transition-all duration-200";
  const limitActive =
    "border-[#2d3f9f] bg-[#f5f8ff] text-[#2d3f9f]";
  const limitInactive =
    "border-[#d9ddea] bg-white text-[#1f1f1f] hover:border-[#2d3f9f] hover:bg-[#f8fbff]";

  const ages = Array.from({ length: 83 }, (_, i) => i + 18);

  return (
    <>
      <Slider />
      <Navbar />

      <section className="bg-[#eef2f7]">
        <div className="mx-auto max-w-[1280px] px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT SIDE */}
            <div className="flex min-h-[540px] flex-col items-center justify-center px-4 text-center lg:px-8">
              <img
                src={healthBgImage}
                alt="Health insurance"
                className="mb-8 h-[205px] w-full max-w-[300px] object-contain md:max-w-[350px]"
              />

              <h1 className="max-w-[760px] text-[30px] font-bold leading-[1.18] tracking-[-0.02em] text-[#2d3f9f] md:text-[34px]">
                Best Health Insurance in Pakistan for <br /> You, Your Family &
                Parents
              </h1>

              <p className="mt-4 max-w-[620px] text-[16px] leading-[1.6] text-[#2b2b2b] md:text-[18px]">
                Smartchoice helps you find the right health insurance plan so
                you and your family can access quality healthcare.
              </p>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="mx-auto w-full max-w-[400px]">
              <div className="rounded-[12px] bg-white p-4 shadow-[0_4px_18px_rgba(0,0,0,0.08)] md:p-4">
                {/* top cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedType("myself")}
                    className={`${cardBase} ${
                      selectedType === "myself" ? activeCard : inactiveCard
                    }`}
                  >
                    <img
                      src={myselfIcon}
                      alt="Myself"
                      className="mb-2 h-[38px] w-[38px] object-contain"
                    />
                    <span
                      className={`text-[13px] font-semibold ${
                        selectedType === "myself"
                          ? "text-[#2d3f9f]"
                          : "text-[#c3c8d9]"
                      }`}
                    >
                      Myself
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedType("family")}
                    className={`${cardBase} ${
                      selectedType === "family" ? activeCard : inactiveCard
                    }`}
                  >
                    <img
                      src={familyIcon}
                      alt="Family"
                      className="mb-2 h-[38px] w-[38px] object-contain"
                    />
                    <span
                      className={`text-[13px] font-semibold ${
                        selectedType === "family"
                          ? "text-[#2d3f9f]"
                          : "text-[#c3c8d9]"
                      }`}
                    >
                      Family
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedType("parents")}
                    className={`${cardBase} ${
                      selectedType === "parents" ? activeCard : inactiveCard
                    }`}
                  >
                    <img
                      src={parentsIcon}
                      alt="Parents"
                      className="mb-2 h-[38px] w-[38px] object-contain"
                    />
                    <span
                      className={`text-[13px] font-semibold ${
                        selectedType === "parents"
                          ? "text-[#2d3f9f]"
                          : "text-[#c3c8d9]"
                      }`}
                    >
                      Parents
                    </span>
                  </button>
                </div>

                {/* conditional fields */}
                <div className="mt-4">
                  {selectedType === "family" ? (
                    <>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="relative">
                          <select
                            value={myAge}
                            onChange={(e) => setMyAge(e.target.value)}
                            className={`${inputBase} ${
                              myAge ? "text-[#1f1f1f]" : placeholderClass
                            }`}
                          >
                            <option value="" disabled>
                              Your age?
                            </option>
                            {ages.map((age) => (
                              <option key={age} value={age}>
                                {age}
                              </option>
                            ))}
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#b7becd]">
                            ˅
                          </span>
                        </div>

                        <div className="relative">
                          <select
                            value={spouseAge}
                            onChange={(e) => setSpouseAge(e.target.value)}
                            className={`${inputBase} ${
                              spouseAge ? "text-[#1f1f1f]" : placeholderClass
                            }`}
                          >
                            <option value="" disabled>
                              Your spouses age?
                            </option>
                            {ages.map((age) => (
                              <option key={age} value={age}>
                                {age}
                              </option>
                            ))}
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#b7becd]">
                            ˅
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-3 flex h-[42px] w-full items-center justify-center rounded-[6px] border border-[#d9ddea] bg-white text-[13px] font-medium text-[#2d3f9f] transition-all duration-200 hover:border-[#2d3f9f] hover:bg-[#f8fbff]"
                      >
                        Add Children and Ages (if any)
                      </button>
                    </>
                  ) : (
                    <div className="relative">
                      <select
                        value={myAge}
                        onChange={(e) => setMyAge(e.target.value)}
                        className={`${inputBase} ${
                          myAge ? "text-[#1f1f1f]" : placeholderClass
                        }`}
                      >
                        <option value="" disabled>
                          Select Age
                        </option>
                        {ages.map((age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-[#b7becd]">
                        ˅
                      </span>
                    </div>
                  )}
                </div>

                {/* hospitalization */}
                <div className="mt-4">
                  <h3 className="mb-3 text-[14px] font-semibold text-[#2d3f9f]">
                    Select Hospitalization Limit (PKR)
                  </h3>

                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedLimit("60k-2lac")}
                      className={`${limitBase} ${
                        selectedLimit === "60k-2lac"
                          ? limitActive
                          : limitInactive
                      }`}
                    >
                      60k - 2 Lac
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedLimit("2lac-5lac")}
                      className={`${limitBase} ${
                        selectedLimit === "2lac-5lac"
                          ? limitActive
                          : limitInactive
                      }`}
                    >
                      2 Lac - 5 Lac
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedLimit("5lac+")}
                      className={`${limitBase} ${
                        selectedLimit === "5lac+" ? limitActive : limitInactive
                      }`}
                    >
                      5 Lac & Above
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!isFormValid}
                  onClick={() => {
                    if (!isFormValid) return;

                    const dataToSave = {
                      selectedType,
                      myAge,
                      spouseAge,
                      selectedLimit,
                    };

                    localStorage.setItem(
                      HEALTH_FORM_STORAGE_KEY,
                      JSON.stringify(dataToSave)
                    );

                    navigate("/health-plans", {
                      state: {
                        formData: dataToSave,
                      },
                    });
                  }}
                  className={`mt-5 flex h-[46px] w-full items-center justify-center rounded-[8px] text-[16px] font-semibold transition-all duration-200 ${
                    isFormValid
                      ? "cursor-pointer bg-orange-500 text-black hover:opacity-95"
                      : "cursor-not-allowed bg-[#e5e7eb] text-[#9ca3af]"
                  }`}
                >
                  <span>See Plans</span>
                  <span className="ml-3 text-[16px]">→</span>
                </button>

                {/* reviews */}
                <div className="mt-6 flex items-center justify-center gap-3 text-center">
                  <div className="text-[16px] font-semibold text-[#111]">
                    ★REVIEWS.io
                  </div>
                  <div className="text-left">
                    <p className="text-[12px] text-[#777]">
                      Read our{" "}
                      <span className="font-bold text-[#1f1f1f]">1,375</span>{" "}
                      reviews
                    </p>
                    <p className="text-[18px] leading-none text-[#ff7a00]">
                      ★★★★★
                    </p>
                  </div>
                </div>
              </div>

              {/* business box */}
              <div className="mt-3 rounded-[12px] bg-[#e6f0ff] px-5 py-4 text-center">
                <p className="text-[14px] font-semibold leading-[1.5] text-[#2d3f9f]">
                  Are you a business looking to insure your employees?
                  <br />
                  If so, <span className="text-[#f0a01e]">click here »</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HealthAppSection />
      <WhySmartchoice />
      <FAQs faqsData={healthFaqsData} />
      <Footer />
    </>
  );
}

export default HealthInsurancePage;